# OloResort Website Setup Guide

This Next.js website includes integrations for Resend email service and HubSpot CRM.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Resend Configuration (Required for email sending)
RESEND_API_KEY=your_resend_api_key_here

# HubSpot Configuration (Optional - for CRM integration)
HUBSPOT_ACCESS_TOKEN=your_hubspot_access_token_here
HUBSPOT_PORTAL_ID=your_hubspot_portal_id_here

# Email Configuration
CONTACT_EMAIL=levi@oloresort.fi
FROM_EMAIL=noreply@oloresort.fi

# Cloudflare Stream Configuration (For homepage hero video)
NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID=your_cloudflare_stream_video_id
```

## Setup Instructions

### 1. Resend Email Service

1. Go to [Resend.com](https://resend.com) and create an account
2. Verify your domain or use their test domain
3. Generate an API key from the dashboard
4. Add the API key to your `.env.local` file

### 2. HubSpot Integration (Optional)

1. Go to [HubSpot.com](https://hubspot.com) and create an account
2. Go to Settings > Integrations > API key
3. Create a private app with the following scopes:
   - `crm.objects.contacts.write`
   - `crm.objects.contacts.read`
   - `crm.objects.deals.write`
   - `crm.objects.deals.read`
4. Copy the access token and portal ID to your `.env.local` file

### 3. Cloudflare Stream Setup (For Homepage Hero Video)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) and navigate to Stream
2. Upload your hero video to Cloudflare Stream
3. Copy the video ID from the video details
4. Add it to your `.env.local` file:

```env
NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID=your_video_id_here
```

### 4. Cloudinary Setup (For Images - Optional)

1. Go to [Cloudinary.com](https://cloudinary.com) and create an account
2. Get your cloud name, API key, and API secret
3. Add them to your `.env.local` file:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 5. Sanity CMS Setup (Optional)

1. Go to [Sanity.io](https://sanity.io) and create an account
2. Create a new project
3. Get your project ID and dataset name
4. Add them to your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

## Features

### ✅ Implemented
- Responsive design matching OloResort branding
- Contact form with validation
- Email sending via Resend
- HubSpot CRM integration
- Navigation and footer
- Homepage with hero video (Cloudflare Stream)
- Decorative divider with header-slider-overlay.webp
- Accommodation, Activities, Autumn, Blog, and Travel Itineraries pages
- Privacy Policy page
- Cloudflare Stream video integration

### 🔄 In Progress
- Sanity CMS integration
- Cloudinary image optimization

### 📋 Todo
- Blog functionality
- Autumn page content
- SEO optimization
- Analytics integration

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Contact Form Features

The contact form includes:
- Client-side validation with Zod
- Server-side validation
- Email notifications to OloResort team
- Confirmation email to customer
- HubSpot lead creation (if configured)
- Error handling and user feedback

## Email Templates

The system includes two email templates:
1. **Contact notification** - Sent to OloResort team with customer details
2. **Confirmation email** - Sent to customer confirming their inquiry

Both templates are responsive and branded with OloResort styling.
