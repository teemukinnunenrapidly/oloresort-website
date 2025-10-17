'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryImage {
  publicId: string;
  alt: string;
  caption: string;
  span?: string;
}

const PrivateSuiteSection = () => {
  // Replace these publicIds with your actual Cloudinary image IDs
  const galleryImages: GalleryImage[] = [
    { 
      publicId: "oloresort/suite-main-living", 
      alt: "Main living space with glass ceiling", 
      caption: "Living Space",
      span: "col-span-2 row-span-2" 
    },
    { 
      publicId: "oloresort/suite-bedroom", 
      alt: "Master bedroom with northern lights view", 
      caption: "Master Bedroom"
    },
    { 
      publicId: "oloresort/suite-kitchen", 
      alt: "Fully equipped modern kitchen", 
      caption: "Kitchen"
    },
    { 
      publicId: "oloresort/suite-bathroom", 
      alt: "Luxury spa bathroom", 
      caption: "Spa Bathroom",
      span: "row-span-2"
    },
    { 
      publicId: "oloresort/suite-fireplace", 
      alt: "Cozy fireplace area", 
      caption: "Fireplace"
    },
    { 
      publicId: "oloresort/suite-view", 
      alt: "Panoramic view of Lapland wilderness", 
      caption: "Panoramic View"
    },
    { 
      publicId: "oloresort/suite-details", 
      alt: "Interior design details", 
      caption: "Interior Details",
      span: "col-span-2"
    },
    { 
      publicId: "oloresort/suite-terrace", 
      alt: "Private terrace with outdoor seating", 
      caption: "Private Terrace"
    }
  ];

  const suiteFeatures = [
    "Large glass surfaces for northern lights",
    "King-size bed with premium mattress",
    "Fully equipped kitchen and dining",
    "Private bathroom with luxury amenities"
  ];

  const amenities = [
    "Hair dryer and steam iron",
    "Coffee maker & kitchen appliances",
    "Free WiFi and Smart TV",
    "Heated floors & air conditioning"
  ];

  const services = [
    "Daily housekeeping service",
    "Breakfast included",
    "24/7 concierge assistance",
    "Activity booking service"
  ];

  return (
    <section 
      id="suite"
      style={{ 
        padding: 'var(--comp-suite-gallery-section-padding)',
        background: '#ffffff'
      }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 flex justify-between items-center px-8 flex-wrap gap-8">
        <div className="flex-1 min-w-[300px]">
          <h2 style={{
            fontFamily: 'var(--comp-suite-gallery-header-typography-family)',
            fontWeight: 'var(--comp-suite-gallery-header-typography-weight)',
            fontSize: 'var(--comp-suite-gallery-header-typography-size)',
            color: 'var(--comp-suite-gallery-header-text)',
            marginBottom: 'var(--ref-spacing-2)'
          }}>
            Private Suite Gallery
          </h2>
          <p style={{
            color: 'var(--comp-suite-gallery-subtitle-text)',
            fontSize: 'var(--comp-suite-gallery-subtitle-typography-size)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--ref-letter-spacing-wider)'
          }}>
            65m² of Nordic Elegance
          </p>
        </div>
        <div className="text-right">
          <p style={{
            color: 'var(--comp-suite-gallery-price-label-text)',
            fontSize: 'var(--comp-suite-gallery-price-label-typography-size)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--ref-letter-spacing-wider)',
            marginBottom: 'var(--ref-spacing-1)'
          }}>
            Starting from
          </p>
          <p style={{
            fontFamily: 'var(--comp-suite-gallery-price-typography-family)',
            fontWeight: 'var(--comp-suite-gallery-price-typography-weight)',
            fontSize: 'var(--comp-suite-gallery-price-typography-size)',
            color: 'var(--comp-suite-gallery-price-text)'
          }}>
            €450
          </p>
          <p style={{
            color: 'var(--comp-suite-gallery-price-label-text)',
            fontSize: 'var(--ref-font-size-base)'
          }}>
            per night
          </p>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div 
        className="masonry-gallery max-w-7xl mx-auto mb-16"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: 'var(--comp-suite-gallery-masonry-row-height)',
          gap: 'var(--comp-suite-gallery-masonry-gap)'
        }}
      >
        {galleryImages.map((image, index) => {
          let gridColumn = 'span 1';
          let gridRow = 'span 1';
          
          if (index === 0) {
            gridColumn = 'span 2';
            gridRow = 'span 2';
          }
          if (index === 3) {
            gridRow = 'span 2';
          }
          if (index === 6) {
            gridColumn = 'span 2';
          }

          return (
            <div 
              key={index}
              className="masonry-item relative overflow-hidden cursor-pointer group"
              style={{
                position: 'relative',
                gridColumn,
                gridRow
              }}
            >
              {/* Placeholder until Cloudinary images are uploaded 
                  To use Cloudinary images, replace this div with:
                  <Image
                    src={`https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto,c_fill,g_center/${image.publicId}.jpg`}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index === 0}
                  />
              */}
              <div style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, 
                  ${index === 0 ? '#bd984b' : 
                    index === 1 ? '#1e3a8a' : 
                    index === 2 ? '#059669' : 
                    index === 3 ? '#dc2626' : 
                    index === 4 ? '#7c3aed' : 
                    index === 5 ? '#ea580c' : 
                    index === 6 ? '#0891b2' : '#be185d'}, 
                  ${index === 0 ? '#d4b570' : 
                    index === 1 ? '#3b82f6' : 
                    index === 2 ? '#10b981' : 
                    index === 3 ? '#ef4444' : 
                    index === 4 ? '#a855f7' : 
                    index === 5 ? '#f97316' : 
                    index === 6 ? '#06b6d4' : '#ec4899'})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: index === 0 ? '1.5rem' : '1rem',
                fontWeight: '600',
                textAlign: 'center',
                padding: '1rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {index === 0 ? '🏠' : 
                     index === 1 ? '🛏️' : 
                     index === 2 ? '🍳' : 
                     index === 3 ? '🛁' : 
                     index === 4 ? '🔥' : 
                     index === 5 ? '🌲' : 
                     index === 6 ? '✨' : '🌿'}
                  </div>
                  {image.caption}
                  <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.5rem' }}>
                    Replace with Cloudinary image
                  </div>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div 
                className="masonry-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--comp-suite-gallery-masonry-overlay)',
                  opacity: 0,
                  transition: 'opacity var(--comp-suite-gallery-masonry-transition)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 'var(--ref-spacing-8)'
                }}
              >
                <span style={{
                  color: 'var(--ref-color-neutral-0)',
                  fontFamily: 'var(--comp-suite-gallery-caption-typography-family)',
                  fontWeight: 'var(--comp-suite-gallery-caption-typography-weight)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--ref-letter-spacing-wider)',
                  fontSize: 'var(--comp-suite-gallery-caption-typography-size)'
                }}>
                  {image.caption}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Details Section */}
      <div 
        className="max-w-7xl mx-auto flex gap-24 lg:flex-col lg:gap-12"
        style={{
          padding: 'var(--comp-suite-gallery-details-padding)',
          background: 'var(--comp-suite-gallery-details-background)'
        }}
      >
        <div className="flex-1">
          <h3 style={{
            fontFamily: 'var(--comp-suite-gallery-section-title-typography-family)',
            fontWeight: 'var(--comp-suite-gallery-section-title-typography-weight)',
            fontSize: 'var(--comp-suite-gallery-section-title-typography-size)',
            color: 'var(--comp-suite-gallery-section-title-text)',
            marginBottom: 'var(--ref-spacing-8)'
          }}>
            Suite Features
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {suiteFeatures.map((feature, index) => (
              <li 
                key={index}
                style={{
                  padding: 'var(--ref-spacing-3) 0',
                  borderBottom: '1px solid rgba(17, 24, 39, 0.1)',
                  color: 'var(--comp-suite-gallery-feature-text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-4)',
                  fontSize: 'var(--comp-suite-gallery-feature-typography-size)'
                }}
              >
                <span style={{ color: 'var(--sem-color-primary-base)' }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1">
          <h3 style={{
            fontFamily: 'var(--comp-suite-gallery-section-title-typography-family)',
            fontWeight: 'var(--comp-suite-gallery-section-title-typography-weight)',
            fontSize: 'var(--comp-suite-gallery-section-title-typography-size)',
            color: 'var(--comp-suite-gallery-section-title-text)',
            marginBottom: 'var(--ref-spacing-8)'
          }}>
            Amenities
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {amenities.map((amenity, index) => (
              <li 
                key={index}
                style={{
                  padding: 'var(--ref-spacing-3) 0',
                  borderBottom: '1px solid rgba(17, 24, 39, 0.1)',
                  color: 'var(--comp-suite-gallery-feature-text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-4)',
                  fontSize: 'var(--comp-suite-gallery-feature-typography-size)'
                }}
              >
                <span style={{ color: 'var(--sem-color-primary-base)' }}>✓</span>
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1">
          <h3 style={{
            fontFamily: 'var(--comp-suite-gallery-section-title-typography-family)',
            fontWeight: 'var(--comp-suite-gallery-section-title-typography-weight)',
            fontSize: 'var(--comp-suite-gallery-section-title-typography-size)',
            color: 'var(--comp-suite-gallery-section-title-text)',
            marginBottom: 'var(--ref-spacing-8)'
          }}>
            Services
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {services.map((service, index) => (
              <li 
                key={index}
                style={{
                  padding: 'var(--ref-spacing-3) 0',
                  borderBottom: '1px solid rgba(17, 24, 39, 0.1)',
                  color: 'var(--comp-suite-gallery-feature-text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-4)',
                  fontSize: 'var(--comp-suite-gallery-feature-typography-size)'
                }}
              >
                <span style={{ color: 'var(--sem-color-primary-base)' }}>✓</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center pt-12">
        <p style={{
          color: 'var(--comp-suite-gallery-cta-description-text)',
          fontSize: 'var(--comp-suite-gallery-cta-description-typography-size)',
          marginBottom: 'var(--ref-spacing-6)'
        }}>
          Experience the perfect blend of luxury and nature
        </p>
        <Link
          href="#book"
          style={{
            display: 'inline-block',
            background: 'var(--comp-suite-gallery-cta-button-background)',
            color: 'var(--comp-suite-gallery-cta-button-text)',
            padding: 'var(--comp-suite-gallery-cta-button-padding)',
            border: 'none',
            fontFamily: 'var(--comp-suite-gallery-cta-button-typography-family)',
            fontWeight: 'var(--comp-suite-gallery-cta-button-typography-weight)',
            fontSize: 'var(--comp-suite-gallery-cta-button-typography-size)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--ref-letter-spacing-wider)',
            cursor: 'pointer',
            transition: 'all var(--comp-suite-gallery-cta-button-transition)',
            textDecoration: 'none'
          }}
          className="suite-cta-button"
        >
          Book Your Private Suite
        </Link>
      </div>

      <style jsx>{`
        .masonry-item {
          transition: transform var(--comp-suite-gallery-masonry-transition);
        }

        .masonry-item:hover {
          transform: scale(1.05);
        }

        .masonry-item:hover .masonry-overlay {
          opacity: 1 !important;
        }

        .suite-cta-button:hover {
          background: var(--comp-suite-gallery-cta-button-hover-background) !important;
          color: var(--comp-suite-gallery-cta-button-hover-text) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .masonry-gallery {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 250px !important;
          }
        }

        @media (max-width: 640px) {
          .masonry-gallery {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PrivateSuiteSection;

