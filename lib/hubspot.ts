import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
});

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export async function createHubSpotContact(data: ContactFormData) {
  try {
    const properties = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      hs_lead_status: 'NEW',
      lead_source: 'Website Contact Form',
      lifecyclestage: 'lead',
    };

    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties,
    });

    return { success: true, contactId: response.id };
  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    throw new Error('Failed to create contact in HubSpot');
  }
}

export async function createHubSpotDeal(data: ContactFormData) {
  try {
    const properties = {
      dealname: `OloResort Inquiry - ${data.firstName} ${data.lastName}`,
      dealstage: 'appointmentscheduled',
      pipeline: 'default',
      amount: '0',
      closedate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      description: data.message,
    };

    const response = await hubspotClient.crm.deals.basicApi.create({
      properties,
    });

    return { success: true, dealId: response.id };
  } catch (error) {
    console.error('Error creating HubSpot deal:', error);
    throw new Error('Failed to create deal in HubSpot');
  }
}

export async function addContactToHubSpot(data: ContactFormData) {
  try {
    // First, try to find existing contact by email
    let contactId;
    try {
      const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: [
          {
            filters: [
              {
                propertyName: 'email',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                operator: 'EQ' as any,
                value: data.email,
              },
            ],
          },
        ],
        properties: ['firstname', 'lastname', 'email'],
        limit: 1,
      });

      if (searchResponse.results && searchResponse.results.length > 0) {
        contactId = searchResponse.results[0].id;
        // Update existing contact
        await hubspotClient.crm.contacts.basicApi.update(contactId, {
          properties: {
            firstname: data.firstName,
            lastname: data.lastName,
            phone: data.phone,
            message: data.message,
            hs_lead_status: 'NEW',
            lead_source: 'Website Contact Form',
          },
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (searchError) {
      console.log('No existing contact found, creating new one');
    }

    // If no existing contact found, create new one
    if (!contactId) {
      const contactResult = await createHubSpotContact(data);
      contactId = contactResult.contactId;
    }

    // Create a deal for this inquiry
    const dealResult = await createHubSpotDeal(data);

    return { 
      success: true, 
      contactId, 
      dealId: dealResult.dealId 
    };
  } catch (error) {
    console.error('Error in addContactToHubSpot:', error);
    throw new Error('Failed to add contact to HubSpot');
  }
}
