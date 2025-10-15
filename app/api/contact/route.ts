import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email';
import { addContactToHubSpot } from '@/lib/hubspot';
import { contactFormSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactFormSchema.parse(body);
    
    // Extract the data for processing (consent is validated but not needed for processing)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { consent, ...contactData } = validatedData;

    // Send emails in parallel
    const emailPromises = [
      sendContactEmail(contactData),
      sendConfirmationEmail(contactData),
    ];

    // Add to HubSpot (optional, won't fail if HubSpot is not configured)
    let hubspotResult = null;
    if (process.env.HUBSPOT_ACCESS_TOKEN) {
      try {
        hubspotResult = await addContactToHubSpot(contactData);
      } catch (hubspotError) {
        console.error('HubSpot integration failed:', hubspotError);
        // Continue without failing the entire request
      }
    }

    // Wait for email sending to complete
    const emailResults = await Promise.allSettled(emailPromises);
    
    // Check if at least the main email was sent successfully
    const mainEmailResult = emailResults[0];
    if (mainEmailResult.status === 'rejected') {
      console.error('Failed to send main email:', mainEmailResult.reason);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      hubspot: hubspotResult,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
