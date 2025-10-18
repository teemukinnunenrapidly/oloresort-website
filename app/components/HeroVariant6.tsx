'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 6: Cinematic Letterbox
 * Elokuvamainen letterbox-efekti videolla ja sisältö sivuilla
 */
export default function HeroVariant6() {
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
        {/* Mobile: Full screen with letterbox */}
        <div style={{
          position: 'relative',
          height: '100%',
          background: 'var(--ref-color-neutral-900)',
        }}>
          {/* Letterbox bars */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '20%',
            background: 'var(--ref-color-neutral-900)',
            zIndex: 3,
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '20%',
            background: 'var(--ref-color-neutral-900)',
            zIndex: 3,
          }} />

          {/* Video in center */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: 0,
            right: 0,
            height: '60%',
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
                background: 'linear-gradient(135deg, var(--ref-color-brand-gold-900), var(--ref-color-neutral-800))'
              }} />
            )}
          </div>

          {/* Content overlay in letterbox area */}
          <div style={{
            position: 'absolute',
            top: '70%',
            left: 0,
            right: 0,
            zIndex: 4,
            padding: 'var(--ref-spacing-6)',
            textAlign: 'center',
          }}>
            <h1 style={{
              fontSize: 'var(--ref-font-size-3xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-4)',
            }}>
              Cinematic Experience
            </h1>
            <a href="#accommodation" className="btn-primary">
              Explore
            </a>
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
      display: 'flex',
    }}>
      {/* Left sidebar - Content */}
      <div style={{
        flex: '0 0 300px',
        background: 'var(--sem-color-background-surface)',
        padding: 'var(--ref-spacing-16) var(--ref-spacing-8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        borderRight: '1px solid var(--sem-color-border-light)',
      }}>
        <div style={{
          position: 'sticky',
          top: 'var(--ref-spacing-16)',
        }}>
          {/* Brand badge */}
          <div style={{
            display: 'inline-block',
            padding: 'var(--ref-spacing-2) var(--ref-spacing-4)',
            background: 'var(--ref-color-brand-gold-600)',
            color: 'var(--ref-color-neutral-0)',
            fontSize: 'var(--ref-font-size-xs)',
            fontWeight: 'var(--ref-font-weight-semibold)',
            borderRadius: 'var(--ref-radius-full)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 'var(--ref-spacing-6)',
          }}>
            Cinematic Collection
          </div>

          <h1 style={{
            fontSize: 'var(--ref-font-size-3xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--sem-color-text-heading)',
            marginBottom: 'var(--ref-spacing-4)',
            lineHeight: 'var(--ref-font-lineHeight-tight)',
          }}>
            Northern Lights<br />
            Cinema
          </h1>

          <p style={{
            fontSize: 'var(--ref-font-size-base)',
            color: 'var(--sem-color-text-body-dark)',
            marginBottom: 'var(--ref-spacing-6)',
            lineHeight: 'var(--ref-font-lineHeight-relaxed)',
          }}>
            Experience the aurora borealis like never before.
            Our glass igloos transform the night sky into your personal cinema.
          </p>

          <a href="#accommodation" className="btn-primary">
            Book Your Screening
          </a>
        </div>
      </div>

      {/* Center - Cinematic Video */}
      <div style={{
        flex: 1,
        position: 'relative',
        background: 'var(--ref-color-neutral-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Letterbox frame */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          aspectRatio: '21/9', // Ultra-wide cinematic ratio
          background: 'var(--ref-color-neutral-900)',
        }}>
          {/* Top letterbox bar */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '15%',
            background: 'var(--ref-color-neutral-900)',
            zIndex: 3,
          }} />

          {/* Bottom letterbox bar */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '15%',
            background: 'var(--ref-color-neutral-900)',
            zIndex: 3,
          }} />

          {/* Video content area */}
          <div style={{
            position: 'absolute',
            top: '15%',
            left: 0,
            right: 0,
            height: '70%',
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
                background: 'linear-gradient(135deg, var(--ref-color-brand-gold-900), var(--ref-color-neutral-800))'
              }} />
            )}
          </div>

          {/* Cinematic frame overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            border: '4px solid var(--ref-color-neutral-800)',
            borderRadius: '8px',
          }} />

          {/* Corner indicators */}
          {[
            { top: '15%', left: 0 },
            { top: '15%', right: 0 },
            { bottom: '15%', left: 0 },
            { bottom: '15%', right: 0 },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                ...pos,
                width: '20px',
                height: '20px',
                background: 'linear-gradient(45deg, var(--ref-color-brand-gold-600), var(--ref-color-brand-gold-400))',
                clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Right sidebar - Features */}
      <div style={{
        flex: '0 0 250px',
        background: 'var(--sem-color-background-surface)',
        padding: 'var(--ref-spacing-16) var(--ref-spacing-6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        borderLeft: '1px solid var(--sem-color-border-light)',
      }}>
        <div style={{
          position: 'sticky',
          top: 'var(--ref-spacing-16)',
        }}>
          <h3 style={{
            fontSize: 'var(--ref-font-size-lg)',
            fontWeight: 'var(--ref-font-weight-semibold)',
            color: 'var(--sem-color-text-heading)',
            marginBottom: 'var(--ref-spacing-6)',
          }}>
            Cinematic Features
          </h3>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--ref-spacing-6)',
          }}>
            {[
              { icon: '🎬', label: 'Ultra-wide format' },
              { icon: '🌟', label: 'Northern Lights' },
              { icon: '🔊', label: 'Spatial audio' },
              { icon: '⭐', label: 'Premium experience' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-3)',
                  padding: 'var(--ref-spacing-3)',
                  background: 'var(--ref-color-brand-gold-50)',
                  borderRadius: 'var(--ref-radius-base)',
                }}
              >
                <span style={{ fontSize: 'var(--ref-font-size-xl)' }}>
                  {item.icon}
                </span>
                <span style={{
                  fontSize: 'var(--ref-font-size-sm)',
                  color: 'var(--sem-color-text-heading)',
                  fontWeight: 'var(--ref-font-weight-medium)',
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

