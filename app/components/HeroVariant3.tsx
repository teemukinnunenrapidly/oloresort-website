'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 3: Video Card
 * Sisältö täyttää taustan, video kortissa (desktop)
 * Full screen video (mobile)
 */
export default function HeroVariant3() {
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
        {/* Mobile: Full screen video */}
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

        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'var(--ref-spacing-6)',
          paddingBottom: 'var(--ref-spacing-12)',
        }}>
          <h1 style={{
            fontSize: 'var(--ref-font-size-4xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--ref-color-neutral-0)',
            marginBottom: 'var(--ref-spacing-4)',
            lineHeight: 'var(--ref-font-lineHeight-tight)',
          }}>
            Olo Resort
          </h1>
          <p style={{
            fontSize: 'var(--ref-font-size-lg)',
            color: 'var(--ref-color-neutral-0)',
            marginBottom: 'var(--ref-spacing-6)',
            opacity: 0.95,
          }}>
            Glass igloos in Lapland wilderness
          </p>
          <a href="#accommodation" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            Discover More
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--ref-spacing-8)',
      overflow: 'hidden',
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: 'radial-gradient(circle, var(--ref-color-brand-gold-600) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Content Container */}
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--ref-spacing-16)',
        alignItems: 'center',
      }}>
        {/* Left - Text Content */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--ref-spacing-3)',
            marginBottom: 'var(--ref-spacing-6)',
          }}>
            <div style={{
              width: '60px',
              height: '2px',
              background: 'var(--ref-color-brand-gold-600)',
            }} />
            <span style={{
              fontSize: 'var(--ref-font-size-sm)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              color: 'var(--ref-color-brand-gold-600)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>
              Welcome to Olo Resort
            </span>
          </div>

          <h1 style={{
            fontSize: 'var(--ref-font-size-6xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--sem-color-text-heading)',
            marginBottom: 'var(--ref-spacing-6)',
            lineHeight: 'var(--ref-font-lineHeight-tight)',
          }}>
            Northern Lights<br />
            Meet Luxury
          </h1>
          
          <p style={{
            fontSize: 'var(--ref-font-size-xl)',
            color: 'var(--sem-color-text-body-dark)',
            marginBottom: 'var(--ref-spacing-8)',
            lineHeight: 'var(--ref-font-lineHeight-relaxed)',
            maxWidth: '500px',
          }}>
            Experience the magic of Lapland from the comfort of our exclusive glass igloos. 
            Watch the aurora borealis dance above you while you relax in Nordic luxury.
          </p>

          <div style={{
            display: 'flex',
            gap: 'var(--ref-spacing-4)',
          }}>
            <a href="#accommodation" className="btn-primary">
              Explore Stays
            </a>
            <a href="/activities" className="btn-secondary">
              View Activities
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--ref-spacing-8)',
            marginTop: 'var(--ref-spacing-12)',
            paddingTop: 'var(--ref-spacing-8)',
            borderTop: '1px solid var(--sem-color-border-light)',
          }}>
            {[
              { label: 'Glass Igloos', value: '12' },
              { label: 'Private Sauna', value: '✓' },
              { label: 'Star Rating', value: '5.0' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 'var(--ref-font-size-3xl)',
                  fontWeight: 'var(--ref-font-weight-bold)',
                  color: 'var(--ref-color-brand-gold-600)',
                  marginBottom: 'var(--ref-spacing-1)',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 'var(--ref-font-size-sm)',
                  color: 'var(--sem-color-text-muted)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Video Card */}
        <div style={{
          position: 'relative',
        }}>
          <div style={{
            position: 'relative',
            aspectRatio: '9/16',
            maxHeight: '750px',
            borderRadius: 'var(--ref-radius-3xl)',
            overflow: 'hidden',
            boxShadow: `
              0 0 0 1px var(--sem-color-border-light),
              var(--ref-shadow-2xl),
              0 0 80px rgba(189, 153, 74, 0.15)
            `,
            transform: 'perspective(1000px) rotateY(-5deg)',
            transition: 'transform 0.5s ease',
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

            {/* Decorative corners */}
            <div style={{
              position: 'absolute',
              top: 'var(--ref-spacing-4)',
              right: 'var(--ref-spacing-4)',
              width: '40px',
              height: '40px',
              borderTop: '3px solid var(--ref-color-brand-gold-600)',
              borderRight: '3px solid var(--ref-color-brand-gold-600)',
              borderRadius: '0 var(--ref-radius-lg) 0 0',
              opacity: 0.6,
            }} />
            <div style={{
              position: 'absolute',
              bottom: 'var(--ref-spacing-4)',
              left: 'var(--ref-spacing-4)',
              width: '40px',
              height: '40px',
              borderBottom: '3px solid var(--ref-color-brand-gold-600)',
              borderLeft: '3px solid var(--ref-color-brand-gold-600)',
              borderRadius: '0 0 0 var(--ref-radius-lg)',
              opacity: 0.6,
            }} />
          </div>

          {/* Floating accent */}
          <div style={{
            position: 'absolute',
            top: '-var(--ref-spacing-8)',
            right: '-var(--ref-spacing-8)',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, var(--ref-color-brand-gold-600) 0%, transparent 70%)',
            opacity: 0.15,
            borderRadius: '50%',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>
    </section>
  );
}

