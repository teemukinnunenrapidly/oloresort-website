'use client';

import React from 'react';
import Link from 'next/link';

const LoungeSaunaSection = () => {

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


      {/* Equipment Showcase */}
      <div style={{
        maxWidth: '1200px',
        margin: '4rem auto 0',
        padding: 'clamp(1.5rem, 4vw, 4rem)',
        background: '#ffffff',
        boxShadow: 'var(--comp-lounge-sauna-equipment-shadow)'
      }}>
        <div className="equipment-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(1.5rem, 3vw, 3rem)'
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
        .lounge-cta-button:hover {
          background: var(--comp-lounge-sauna-cta-button-hover-background) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .equipment-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
          }
        }

        @media (max-width: 480px) {
          .equipment-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LoungeSaunaSection;
