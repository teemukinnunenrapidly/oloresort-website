'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 4: Asymmetric Grid
 * Moderni asymmetrinen layout jossa video ja sisältö päällekkäin
 */
export default function HeroVariant4() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isMobile) {
    return (
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        background: 'var(--sem-color-background-page)',
      }}>
        {/* Video at top */}
        <div style={{
          position: 'relative',
          height: '60vh',
          overflow: 'hidden',
        }}>
          {videoId ? (
            <Stream
              controls={false}
              src={videoId}
              autoplay
              muted
              loop
              preload="auto"
              poster=""
              primaryColor="var(--ref-color-brand-gold-600)"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, var(--ref-color-neutral-800), var(--ref-color-neutral-900))'
            }} />
          )}
        </div>

        {/* Content below */}
        <div style={{
          padding: 'var(--ref-spacing-8) var(--ref-spacing-6)',
        }}>
          <h1 style={{
            fontSize: 'var(--ref-font-size-4xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--sem-color-text-heading)',
            marginBottom: 'var(--ref-spacing-4)',
          }}>
            Arctic Luxury Redefined
          </h1>
          <p style={{
            fontSize: 'var(--ref-font-size-lg)',
            color: 'var(--sem-color-text-body-dark)',
            marginBottom: 'var(--ref-spacing-6)',
          }}>
            Sleep under the stars in Levi
          </p>
          <a href="#accommodation" className="btn-primary">
            Book Your Stay
          </a>
        </div>
      </section>
    );
  }

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      background: 'var(--sem-color-background-page)',
      overflow: 'hidden',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60%',
        height: '100%',
        background: 'linear-gradient(135deg, transparent 0%, var(--ref-color-brand-gold-50) 100%)',
        opacity: 0.3,
      }} />

      {/* Main container */}
      <div style={{
        position: 'relative',
        height: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: 'var(--ref-spacing-16) var(--ref-spacing-8)',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: 'var(--ref-spacing-12)',
        alignItems: 'center',
      }}>
        {/* Left side - Video (larger) */}
        <div style={{
          position: 'relative',
          height: '80vh',
          maxHeight: '800px',
        }}>
          <div style={{
            position: 'absolute',
            top: 'var(--ref-spacing-8)',
            left: 0,
            right: 'var(--ref-spacing-8)',
            bottom: 0,
            borderRadius: 'var(--ref-radius-2xl)',
            overflow: 'hidden',
            boxShadow: 'var(--ref-shadow-2xl)',
            border: '1px solid var(--sem-color-border-light)',
          }}>
            {videoId ? (
              <Stream
                controls={false}
                src={videoId}
                autoplay
                muted
                loop
                preload="auto"
                poster=""
                primaryColor="var(--ref-color-brand-gold-600)"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, var(--ref-color-brand-gold-900), var(--ref-color-neutral-800))'
              }} />
            )}
          </div>

          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 'var(--ref-spacing-16)',
            width: '200px',
            height: '200px',
            border: '2px solid var(--ref-color-brand-gold-600)',
            borderRadius: 'var(--ref-radius-2xl)',
            opacity: 0.3,
          }} />
        </div>

        {/* Right side - Content (smaller, overlapping) */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          background: 'var(--sem-color-background-surface)',
          padding: 'var(--ref-spacing-12)',
          borderRadius: 'var(--ref-radius-2xl)',
          boxShadow: `
            0 0 0 1px var(--sem-color-border-light),
            var(--ref-shadow-xl)
          `,
          transform: 'translateX(-80px)',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'var(--ref-color-brand-gold-600)',
            borderRadius: 'var(--ref-radius-full)',
            marginBottom: 'var(--ref-spacing-8)',
          }} />

          <h1 style={{
            fontSize: 'var(--ref-font-size-5xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--sem-color-text-heading)',
            marginBottom: 'var(--ref-spacing-6)',
            lineHeight: 'var(--ref-font-lineHeight-tight)',
          }}>
            Where Nature<br />
            Meets Comfort
          </h1>
          
          <p style={{
            fontSize: 'var(--ref-font-size-lg)',
            color: 'var(--sem-color-text-body-dark)',
            marginBottom: 'var(--ref-spacing-8)',
            lineHeight: 'var(--ref-font-lineHeight-relaxed)',
          }}>
            Experience the wonder of Lapland&apos;s wilderness from the warmth and luxury 
            of our exclusive glass igloos. Northern Lights, pristine nature, and 
            unforgettable moments await.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--ref-spacing-4)',
          }}>
            <a 
              href="#accommodation"
              className="btn-primary"
              style={{ textAlign: 'center' }}
            >
              Explore Accommodation
            </a>
            <a 
              href="/contact"
              className="btn-secondary"
              style={{ textAlign: 'center' }}
            >
              Get in Touch
            </a>
          </div>

          {/* Feature badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--ref-spacing-4)',
            marginTop: 'var(--ref-spacing-10)',
            paddingTop: 'var(--ref-spacing-8)',
            borderTop: '1px solid var(--sem-color-border-light)',
          }}>
            {['Northern Lights', 'Private Sauna', 'Hot Tub', 'Fireplace'].map((feature, i) => (
              <div 
                key={i}
                style={{
                  fontSize: 'var(--ref-font-size-sm)',
                  color: 'var(--sem-color-text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-2)',
                }}
              >
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--ref-color-brand-gold-600)',
                  borderRadius: '50%',
                }} />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

