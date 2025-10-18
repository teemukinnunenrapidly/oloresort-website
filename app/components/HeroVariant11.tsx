'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 11: Diagonal Split
 * Diagonaali jako jossa sisältö ja video kohtaavat vinossa linjassa
 */
export default function HeroVariant11() {
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
      }}>
        {/* Mobile: Video background with content overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
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

        {/* Diagonal overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 50%, transparent 50%)',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'var(--ref-spacing-6)',
        }}>
          <h1 style={{
            fontSize: 'var(--ref-font-size-3xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--ref-color-neutral-0)',
            marginBottom: 'var(--ref-spacing-4)',
          }}>
            Diagonal Design
          </h1>
          <p style={{
            fontSize: 'var(--ref-font-size-lg)',
            color: 'var(--ref-color-neutral-0)',
            marginBottom: 'var(--ref-spacing-6)',
            opacity: 0.9,
          }}>
            Where content meets video in perfect harmony
          </p>
          <a href="#accommodation" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            Explore Now
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
      overflow: 'hidden',
    }}>
      {/* Background sections with diagonal split */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
      }}>
        {/* Left side - Content background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'var(--sem-color-background-page)',
          clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)',
          zIndex: 2,
        }} />

        {/* Right side - Video */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)',
          zIndex: 1,
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
      </div>

      {/* Content overlay */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 var(--ref-spacing-8)',
      }}>
        {/* Content area */}
        <div style={{
          flex: '0 0 50%',
          paddingRight: 'var(--ref-spacing-16)',
        }}>
          {/* Brand accent */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--ref-spacing-3)',
            marginBottom: 'var(--ref-spacing-8)',
          }}>
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(to right, var(--ref-color-brand-gold-600), transparent)',
            }} />
            <span style={{
              fontSize: 'var(--ref-font-size-sm)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              color: 'var(--ref-color-brand-gold-600)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}>
              Diagonal Split
            </span>
          </div>

          <h1 style={{
            fontSize: 'var(--ref-font-size-6xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--sem-color-text-heading)',
            marginBottom: 'var(--ref-spacing-6)',
            lineHeight: 'var(--ref-font-lineHeight-tight)',
          }}>
            Where Lines<br />
            <span style={{
              color: 'var(--ref-color-brand-gold-600)',
            }}>
              Converge
            </span>
          </h1>

          <p style={{
            fontSize: 'var(--ref-font-size-xl)',
            color: 'var(--sem-color-text-body-dark)',
            marginBottom: 'var(--ref-spacing-10)',
            lineHeight: 'var(--ref-font-lineHeight-relaxed)',
            maxWidth: '500px',
          }}>
            Experience the perfect balance of content and visual storytelling. 
            Our glass igloos offer a diagonal view into Arctic paradise.
          </p>

          <div style={{
            display: 'flex',
            gap: 'var(--ref-spacing-4)',
            marginBottom: 'var(--ref-spacing-12)',
          }}>
            <a href="#accommodation" className="btn-primary">
              View Igloos
            </a>
            <a href="/contact" className="btn-secondary">
              Book Now
            </a>
          </div>

          {/* Feature list */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--ref-spacing-6)',
          }}>
            {[
              'Panoramic Views',
              'Northern Lights',
              'Private Sauna',
              'Arctic Luxury',
            ].map((feature, i) => (
              <div 
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-3)',
                }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--ref-color-brand-gold-600)',
                  transform: 'rotate(45deg)',
                }} />
                <span style={{
                  fontSize: 'var(--ref-font-size-base)',
                  color: 'var(--sem-color-text-body-dark)',
                }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal accent element */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          background: 'transparent',
          border: '3px solid var(--ref-color-brand-gold-600)',
          borderRadius: '50%',
          opacity: 0.2,
          zIndex: 4,
        }} />
      </div>

      {/* Decorative diagonal lines */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0,
            left: `${45 + i * 5}%`,
            width: '1px',
            height: '100%',
            background: `linear-gradient(to bottom, transparent, var(--ref-color-brand-gold-${600 - i * 100}), transparent)`,
            opacity: 0.2,
            transform: 'skewX(-20deg)',
            zIndex: 4,
          }}
        />
      ))}
    </section>
  );
}
