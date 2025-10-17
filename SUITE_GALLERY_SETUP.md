# Private Suite Gallery - Setup Guide

## Overview

The new Private Suite Section features a modern masonry gallery layout with hover effects, pricing information, and detailed feature lists. The component is designed to work with **Cloudinary** for image optimization and **Next.js Image** component.

## Files Created/Modified

### New Files
- `app/components/PrivateSuiteSection.tsx` - Main gallery component
- `SUITE_GALLERY_SETUP.md` - This documentation

### Modified Files
- `lib/design-system.json` - Added suite gallery design tokens
- `lib/design-tokens.css` - Auto-generated CSS variables
- `app/accommodation/page.tsx` - Updated to use new component

## Design Tokens Added

All design tokens follow the DTCG (Design Tokens Community Group) format and are available both in JSON and CSS formats:

```css
/* Example tokens */
--comp-suite-gallery-section-padding: 6rem 2rem;
--comp-suite-gallery-section-background: #ffffff;
--comp-suite-gallery-header-typography-size: 3rem;
--comp-suite-gallery-masonry-row-height: 300px;
--comp-suite-gallery-masonry-gap: 2px;
--comp-suite-gallery-details-background: #F5F1E8;
```

## Cloudinary Setup

### Step 1: Configure next.config.ts

Add Cloudinary to the images configuration:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/YOUR_CLOUD_NAME/**',
      },
    ],
  },
};

export default nextConfig;
```

Replace `YOUR_CLOUD_NAME` with your actual Cloudinary cloud name.

### Step 2: Update Component with Cloudinary Integration

In `app/components/PrivateSuiteSection.tsx`, replace the placeholder div with actual Next.js Image:

```tsx
import Image from 'next/image';

// In the component, replace the placeholder div:
<Image
  src={`${cloudinaryBaseUrl}/f_auto,q_auto,w_800/${image.publicId}`}
  alt={image.alt}
  fill
  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### Step 3: Upload Images to Cloudinary

1. Go to your Cloudinary dashboard
2. Upload suite images to a folder called `oloresort`
3. Note the public IDs for each image

### Step 4: Update Image Public IDs

Replace the placeholder public IDs in `PrivateSuiteSection.tsx`:

```tsx
const galleryImages: GalleryImage[] = [
  { 
    publicId: "oloresort/suite-main-living",  // Replace with actual ID
    alt: "Main living space with glass ceiling", 
    caption: "Living Space",
    span: "col-span-2 row-span-2" 
  },
  // ... update all 8 images
];
```

## Image Recommendations

### Dimensions
- **Main feature image** (first): 1200x1200px (2x2 grid span)
- **Tall image** (bathroom): 600x1200px (1x2 grid span)
- **Wide image** (interior details): 1200x600px (2x1 grid span)
- **Standard images**: 600x600px

### Naming Convention
Suggested public IDs for consistency:
- `oloresort/suite-main-living`
- `oloresort/suite-bedroom`
- `oloresort/suite-kitchen`
- `oloresort/suite-bathroom`
- `oloresort/suite-fireplace`
- `oloresort/suite-view`
- `oloresort/suite-details`
- `oloresort/suite-terrace`

## Masonry Grid Layout

The gallery uses CSS Grid with the following structure:

```css
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: 300px;
gap: 2px;
```

### Grid Spans
- **Image 1**: 2 columns × 2 rows (hero image)
- **Image 4**: 1 column × 2 rows (tall bathroom)
- **Image 7**: 2 columns × 1 row (wide details)
- **Others**: 1 column × 1 row (standard)

### Responsive Breakpoints
- **Desktop (>1024px)**: 4 columns, 300px rows
- **Tablet (641-1024px)**: 2 columns, 250px rows
- **Mobile (<640px)**: 1 column, 300px rows

## Color Palette

The component uses these custom colors:

```css
--brand-gold: #bd984b;
--dark-gray: #111827;
--light-sand: #F5F1E8;
--gray-500: #6b7280;
--gray-600: #4b5563;
```

All colors are defined in `design-system.json` and auto-generated to CSS variables.

## Typography

### Fonts Used
- **Headings**: MuseoModerno (already in use)
- **Body**: MuseoModerno (fallback to sans-serif)

### Font Sizes
- **Main heading**: 3rem (48px)
- **Price**: 3rem (48px)
- **Section titles**: 1.25rem (20px)
- **Body text**: 1rem (16px)
- **Captions**: 0.875rem (14px)

## Features Section

The component includes three feature columns:

1. **Suite Features** - Main room features
2. **Amenities** - Available equipment
3. **Services** - Included services

Each list item has:
- Gold checkmark icon
- Gray text color
- Bottom border (subtle)
- Hover effects (optional)

## CTA Button

The "Book Your Private Suite" button features:

```css
Background: #bd984b (brand gold)
Hover: #F5F1E8 (light sand) with dark text
Padding: 1.25rem 3rem
Transition: 500ms ease
Transform: translateY(-2px) on hover
```

## Customization

### Changing Prices
Update the price in the component:
```tsx
<p>€450</p>
<p>per night</p>
```

### Adding/Removing Images
Modify the `galleryImages` array. Keep 6-12 images for optimal layout.

### Changing Feature Lists
Update these arrays in the component:
- `suiteFeatures`
- `amenities`
- `services`

## Browser Compatibility

The component uses modern CSS features:
- CSS Grid (IE11+, all modern browsers)
- CSS Custom Properties (IE11 with PostCSS, all modern browsers)
- CSS Transitions (all browsers)

## Performance

### Optimizations
- Next.js Image with automatic WebP conversion
- Lazy loading for off-screen images
- Optimized Cloudinary transformations (`f_auto,q_auto`)
- Minimal gap (2px) for seamless masonry effect

### Expected Load Times
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Total Load: <3s (on fast 4G)

## Testing Checklist

- [ ] Images load correctly from Cloudinary
- [ ] Masonry layout displays properly on desktop
- [ ] Responsive layout works on tablet (2 columns)
- [ ] Responsive layout works on mobile (1 column)
- [ ] Hover effects work on all gallery images
- [ ] CTA button links to correct booking section
- [ ] All feature lists display correctly
- [ ] Price and subtitle are visible
- [ ] No console errors
- [ ] No linter warnings

## Troubleshooting

### Images Not Loading
1. Check Cloudinary configuration in `next.config.ts`
2. Verify public IDs match uploaded images
3. Check browser console for CORS errors
4. Ensure Cloudinary URLs are not blocked by ad blockers

### Layout Issues
1. Verify all design tokens are generated (`npm run generate-tokens`)
2. Check that `design-tokens.css` is imported in `globals.css`
3. Clear browser cache and rebuild

### Styling Not Applied
1. Ensure CSS custom properties are supported
2. Check browser dev tools for CSS variable values
3. Verify token generation completed successfully

## Support

For issues or questions:
- Check Next.js Image documentation: https://nextjs.org/docs/api-reference/next/image
- Check Cloudinary documentation: https://cloudinary.com/documentation/next_integration
- Review design-system.json for token definitions

## Future Enhancements

Potential improvements:
- [ ] Lightbox modal for full-size image viewing
- [ ] Image carousel for mobile view
- [ ] 360° virtual tour integration
- [ ] Video backgrounds for hero section
- [ ] Animated number counter for pricing
- [ ] Booking calendar integration
- [ ] Real-time availability indicator

