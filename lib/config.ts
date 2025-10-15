// Configuration file for OloResort website
export const config = {
  // Email configuration
  email: {
    from: process.env.FROM_EMAIL || 'noreply@oloresort.fi',
    contact: process.env.CONTACT_EMAIL || 'levi@oloresort.fi',
  },
  
  // HubSpot configuration
  hubspot: {
    enabled: !!process.env.HUBSPOT_ACCESS_TOKEN,
    portalId: process.env.HUBSPOT_PORTAL_ID,
  },
  
  // Resend configuration
  resend: {
    enabled: !!process.env.RESEND_API_KEY,
  },
  
  // Contact information
  contact: {
    address: {
      street: 'Taalontie 46',
      city: 'Sirkka',
      postalCode: '99130',
      country: 'Finland',
    },
    phone: {
      sales: '+358 44 901 4162',
      reception: '+358 44 901 4164',
    },
    email: 'levi@oloresort.fi',
  },
  
  // Social media links (add when needed)
  social: {
    // Add social media links here
  },
  
  // SEO configuration
  seo: {
    siteName: 'OloResort',
    description: 'Experience a unique accommodation experience in Levi, in the enchanting nature of Lapland. Your dream vacation awaits in Levi, Kittilä, in the embrace of the fells and under the blazing northern lights.',
    keywords: 'Lapland, Levi, accommodation, northern lights, glass igloo, winter activities, Finland',
  },
};
