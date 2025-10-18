'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 7: Collage Style
 * Kollaasimainen layout useilla pienillä videoelementeillä ja sisältökorteilla
 */
export default function HeroVariant7() {
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
        minHeight: '100vh',
        background: 'var(--sem-color-background-page)',
        padding: 'var(--ref-spacing-8) var(--ref-spacing-6)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--ref-spacing-8)',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          {/* Main content card */}
          <div style={{
            background: 'var(--sem-color-background-surface)',
            padding: 'var(--ref-spacing-8)',
            borderRadius: 'var(--ref-radius-2xl)',
            boxShadow: 'var(--ref-shadow-lg)',
            textAlign: 'center',
          }}>
            <h1 style={{
              fontSize: 'var(--ref-font-size-3xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--sem-color-text-heading)',
              marginBottom: 'var(--ref-spacing-4)',
            }}>
              Arctic Collage
            </h1>
            <p style={{
              fontSize: 'var(--ref-font-size-base)',
              color: 'var(--sem-color-text-body-dark)',
              marginBottom: 'var(--ref-spacing-6)',
            }}>
              Experience fragments of Lapland beauty
            </p>
            <a href="#accommodation" className="btn-primary">
              Explore Collection
            </a>
          </div>

          {/* Video collage */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--ref-spacing-4)',
          }}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  aspectRatio: '3/4',
                  borderRadius: 'var(--ref-radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
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
                    background: 'linear-gradient(135deg, var(--ref-color-brand-gold-700), var(--ref-color-neutral-800))'
                  }} />
                )}
              </div>
            ))}
          </div>
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
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.02,
        backgroundImage: 'radial-gradient(circle, var(--ref-color-brand-gold-600) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Collage Grid */}
      <div style={{
        position: 'relative',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridTemplateRows: 'repeat(6, 1fr)',
        gap: 'var(--ref-spacing-4)',
        padding: 'var(--ref-spacing-8)',
        maxWidth: '1600px',
        margin: '0 auto',
      }}>
        {/* Main title card - spans multiple grid cells */}
        <div style={{
          gridColumn: '1 / 5',
          gridRow: '1 / 4',
          background: 'var(--sem-color-background-surface)',
          padding: 'var(--ref-spacing-10)',
          borderRadius: 'var(--ref-radius-2xl)',
          boxShadow: 'var(--ref-shadow-2xl)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background texture */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, transparent 0%, rgba(200, 164, 106, 0.05) 100%)',
          }} />

          <div style={{
            position: 'relative',
            zIndex: 2,
          }}>
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
                Collage Collection
              </span>
            </div>

            <h1 style={{
              fontSize: 'var(--ref-font-size-5xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--sem-color-text-heading)',
              marginBottom: 'var(--ref-spacing-6)',
              lineHeight: 'var(--ref-font-lineHeight-tight)',
            }}>
              Fragments of<br />
              Arctic Beauty
            </h1>

            <p style={{
              fontSize: 'var(--ref-font-size-lg)',
              color: 'var(--sem-color-text-body-dark)',
              marginBottom: 'var(--ref-spacing-8)',
              lineHeight: 'var(--ref-font-lineHeight-relaxed)',
              maxWidth: '400px',
            }}>
              Each moment captured, each experience curated. Discover the many faces of Lapland luxury.
            </p>

            <div style={{
              display: 'flex',
              gap: 'var(--ref-spacing-4)',
            }}>
              <a href="#accommodation" className="btn-primary">
                View Collection
              </a>
              <a href="/gallery" className="btn-secondary">
                Browse Gallery
              </a>
            </div>
          </div>
        </div>

        {/* Video elements in collage style */}
        {[
          { col: '5 / 8', row: '1 / 3', size: 'large' },
          { col: '5 / 7', row: '3 / 5', size: 'medium' },
          { col: '7 / 9', row: '3 / 5', size: 'medium' },
          { col: '5 / 7', row: '5 / 7', size: 'small' },
          { col: '7 / 9', row: '5 / 7', size: 'small' },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              gridColumn: pos.col,
              gridRow: pos.row,
              position: 'relative',
              borderRadius: 'var(--ref-radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--ref-shadow-lg)',
              transform: `rotate(${i % 2 === 0 ? '2deg' : '-1deg'})`,
              transition: 'transform 0.3s ease',
            }}
          >
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
                background: 'linear-gradient(135deg, var(--ref-color-brand-gold-600), var(--ref-color-neutral-800))'
              }} />
            )}

            {/* Collage frame */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(45deg, transparent 0%, rgba(200, 164, 106, 0.1) 50%, transparent 100%),
                linear-gradient(-45deg, transparent 0%, rgba(200, 164, 106, 0.1) 50%, transparent 100%)
              `,
            }} />
          </div>
        ))}

        {/* Feature cards */}
        {[
          { col: '1 / 3', row: '4 / 6', title: 'Northern Lights', desc: 'Aurora viewing' },
          { col: '3 / 5', row: '4 / 6', title: 'Glass Igloos', desc: 'Panoramic views' },
          { col: '1 / 3', row: '6 / 8', title: 'Arctic Spa', desc: 'Private sauna' },
          { col: '3 / 5', row: '6 / 8', title: 'Fine Dining', desc: 'Local cuisine' },
        ].map((pos, i) => (
          <div
            key={`feature-${i}`}
            style={{
              gridColumn: pos.col,
              gridRow: pos.row,
              background: 'var(--sem-color-background-surface)',
              padding: 'var(--ref-spacing-6)',
              borderRadius: 'var(--ref-radius-lg)',
              boxShadow: 'var(--ref-shadow-base)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3 style={{
              fontSize: 'var(--ref-font-size-lg)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              color: 'var(--sem-color-text-heading)',
              marginBottom: 'var(--ref-spacing-2)',
            }}>
              {pos.title}
            </h3>
            <p style={{
              fontSize: 'var(--ref-font-size-sm)',
              color: 'var(--sem-color-text-muted)',
            }}>
              {pos.desc}
            </p>
          </div>
        ))}

        {/* Decorative elements */}
        <div style={{
          gridColumn: '8 / 9',
          gridRow: '1 / 3',
          background: 'var(--ref-color-brand-gold-600)',
          opacity: 0.1,
          borderRadius: 'var(--ref-radius-full)',
        }} />

        <div style={{
          gridColumn: '8 / 9',
          gridRow: '5 / 7',
          background: 'var(--ref-color-brand-gold-600)',
          opacity: 0.1,
          borderRadius: 'var(--ref-radius-full)',
        }} />
      </div>
    </section>
  );
}

