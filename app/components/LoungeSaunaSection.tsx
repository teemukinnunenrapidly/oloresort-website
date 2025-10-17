'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryImage {
  publicId: string;
  alt: string;
  caption: string;
}

const LoungeSaunaSection = () => {
  // Replace these publicIds with your actual Cloudinary image IDs
  const mainImage = {
    publicId: "oloresort/lounge-main",
    alt: "Main lounge area with fireplace",
    title: "Experience Nordic Wellness",
    description: "A perfect blend of traditional Finnish sauna culture and modern comfort"
  };

  const galleryImages: GalleryImage[] = [
    { publicId: "oloresort/sauna-traditional", alt: "Traditional Finnish sauna", caption: "Finnish Sauna" },
    { publicId: "oloresort/jacuzzi-outdoor", alt: "Outdoor jacuzzi", caption: "Jacuzzi" },
    { publicId: "oloresort/fireplace-lounge", alt: "Cozy fireplace lounge", caption: "Fireplace Lounge" },
    { publicId: "oloresort/terrace-view", alt: "Terrace with nature view", caption: "Terrace View" },
    { publicId: "oloresort/dining-area", alt: "Spacious dining area", caption: "Dining Area" },
    { publicId: "oloresort/campfire", alt: "Traditional campfire", caption: "Campfire" },
    { publicId: "oloresort/spa-area", alt: "Luxury spa area", caption: "Spa Area" },
    { publicId: "oloresort/relaxation-zone", alt: "Relaxation zone", caption: "Relaxation Zone" }
  ];

  const equipmentItems = [
    { icon: "🍽", name: "Dining Area", detail: "Spacious dining for groups with panoramic views" },
    { icon: "🔥", name: "Fireplace", detail: "Cozy gathering spot with modern design" },
    { icon: "🏔", name: "Terrace", detail: "Outdoor space with Lapland nature views" },
    { icon: "🧖", name: "Saunas", detail: "Traditional Finnish indoor & outdoor saunas" },
    { icon: "💆", name: "Jacuzzi", detail: "Luxury hot tub under northern skies" },
    { icon: "🏕", name: "Campfire Place", detail: "Traditional Lappish campfire experience" }
  ];

  return (
    <section 
      id="lounge-sauna"
      style={{ 
        padding: 'var(--comp-lounge-sauna-section-padding)',
        background: 'var(--comp-lounge-sauna-section-background)'
      }}
    >
      {/* Header */}
      <div style={{
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto 4rem'
      }}>
        <p style={{
          color: 'var(--comp-lounge-sauna-badge-text)',
          fontSize: 'var(--comp-lounge-sauna-badge-typography-size)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--ref-letter-spacing-wider)',
          marginBottom: 'var(--ref-spacing-4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--ref-spacing-2)'
        }}>
          ◈ WITH A VIEW TO THE SKY AND NATURE
        </p>
        
        <h2 style={{
          fontFamily: 'var(--comp-lounge-sauna-title-typography-family)',
          fontWeight: 'var(--comp-lounge-sauna-title-typography-weight)',
          fontSize: 'var(--comp-lounge-sauna-title-typography-size)',
          color: 'var(--comp-lounge-sauna-title-text)',
          marginBottom: 'var(--ref-spacing-6)'
        }}>
          Lounge & Sauna
        </h2>
        
        <div style={{
          width: '80px',
          height: '1px',
          background: 'var(--comp-lounge-sauna-divider-color)',
          margin: 'var(--ref-spacing-8) auto'
        }}></div>
        
        <p style={{
          fontSize: 'var(--comp-lounge-sauna-intro-typography-size)',
          lineHeight: 'var(--ref-line-height-relaxed)',
          color: 'var(--comp-lounge-sauna-intro-text)',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          In addition to private suites, in OloResort you can enjoy the lounge area 
          and Finnish sauna. Our lounge area and sauna have been designed to 
          maintain the beautiful view to nature. Enjoy the sauna experience and 
          continue your evening in the warmth of the fireplace in our comfy lounge 
          area. Relax.
        </p>
      </div>

      {/* Main Gallery */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto 4rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'relative',
          height: '600px',
          overflow: 'hidden',
          boxShadow: 'var(--comp-lounge-sauna-main-shadow)'
        }}>
          {/* Placeholder for main image */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #bd984b, #d4b570)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '2rem',
            fontWeight: '600',
            textAlign: 'center',
            padding: '2rem'
          }}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
              Main Lounge Area
              <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.5rem' }}>
                Replace with Cloudinary image
              </div>
            </div>
          </div>
          
          {/* Overlay Content */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '4rem',
            background: 'linear-gradient(transparent, rgba(30, 24, 24, 0.9))',
            color: '#ffffff'
          }}>
            <h3 style={{
              fontFamily: 'var(--comp-lounge-sauna-overlay-title-typography-family)',
              fontWeight: 'var(--comp-lounge-sauna-overlay-title-typography-weight)',
              fontSize: 'var(--comp-lounge-sauna-overlay-title-typography-size)',
              marginBottom: 'var(--ref-spacing-4)'
            }}>
              {mainImage.title}
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 'var(--ref-line-height-normal)'
            }}>
              {mainImage.description}
            </p>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          marginTop: '1px'
        }}>
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-thumb"
              style={{
                aspectRatio: '4/3',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              {/* Placeholder for thumbnail images */}
              <div style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, 
                  ${index === 0 ? '#1e3a8a' : 
                    index === 1 ? '#059669' : 
                    index === 2 ? '#dc2626' : 
                    index === 3 ? '#7c3aed' : 
                    index === 4 ? '#ea580c' : 
                    index === 5 ? '#0891b2' : 
                    index === 6 ? '#be185d' : '#6b7280'}, 
                  ${index === 0 ? '#3b82f6' : 
                    index === 1 ? '#10b981' : 
                    index === 2 ? '#ef4444' : 
                    index === 3 ? '#a855f7' : 
                    index === 4 ? '#f97316' : 
                    index === 5 ? '#06b6d4' : 
                    index === 6 ? '#ec4899' : '#9ca3af'})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '600',
                textAlign: 'center',
                padding: '1rem',
                transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {index === 0 ? '🧖' : 
                     index === 1 ? '💆' : 
                     index === 2 ? '🔥' : 
                     index === 3 ? '🏔' : 
                     index === 4 ? '🍽' : 
                     index === 5 ? '🏕' : 
                     index === 6 ? '💆' : '🧘'}
                  </div>
                  {image.caption}
                </div>
              </div>
              
              {/* Thumbnail Label */}
              <div 
                className="thumb-label"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 'var(--ref-spacing-4)',
                  background: 'linear-gradient(transparent, rgba(30, 24, 24, 0.8))',
                  color: '#ffffff',
                  fontSize: 'var(--comp-lounge-sauna-thumb-label-typography-size)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--ref-letter-spacing-wide)',
                  opacity: 0,
                  transition: 'opacity 400ms ease'
                }}
              >
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Showcase */}
      <div style={{
        maxWidth: '1200px',
        margin: '4rem auto 0',
        padding: '4rem',
        background: '#ffffff',
        boxShadow: 'var(--comp-lounge-sauna-equipment-shadow)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem'
        }}>
          {equipmentItems.map((item, index) => (
            <div 
              key={index}
              style={{
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 1.5rem',
                border: '2px solid var(--sem-color-primary-base)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--sem-color-primary-base)',
                fontSize: '1.5rem'
              }}>
                {item.icon}
              </div>
              <h4 style={{
                fontFamily: 'var(--comp-lounge-sauna-equipment-name-typography-family)',
                fontWeight: 'var(--comp-lounge-sauna-equipment-name-typography-weight)',
                color: 'var(--comp-lounge-sauna-equipment-name-text)',
                marginBottom: 'var(--ref-spacing-2)'
              }}>
                {item.name}
              </h4>
              <p style={{
                color: 'var(--comp-lounge-sauna-equipment-detail-text)',
                fontSize: 'var(--comp-lounge-sauna-equipment-detail-typography-size)',
                lineHeight: 'var(--ref-line-height-normal)'
              }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href="#book"
            style={{
              display: 'inline-block',
              background: 'var(--comp-lounge-sauna-cta-button-background)',
              color: 'var(--comp-lounge-sauna-cta-button-text)',
              padding: 'var(--comp-lounge-sauna-cta-button-padding)',
              border: 'none',
              fontFamily: 'var(--comp-lounge-sauna-cta-button-typography-family)',
              fontWeight: 'var(--comp-lounge-sauna-cta-button-typography-weight)',
              fontSize: 'var(--comp-lounge-sauna-cta-button-typography-size)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--ref-letter-spacing-wider)',
              cursor: 'pointer',
              transition: 'all var(--comp-lounge-sauna-cta-button-transition)',
              textDecoration: 'none'
            }}
            className="lounge-cta-button"
          >
            Reserve Spa Experience
          </Link>
        </div>
      </div>

      <style jsx>{`
        .gallery-thumb:hover {
          transform: scale(1.05);
        }

        .gallery-thumb:hover .thumb-label {
          opacity: 1 !important;
        }

        .lounge-cta-button:hover {
          background: var(--comp-lounge-sauna-cta-button-hover-background) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .gallery-thumb {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .equipment-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LoungeSaunaSection;
