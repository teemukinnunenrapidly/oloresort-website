'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 12: Frame Within Frame
 * Sisäkkäiset kehykset jossa video on kehystetty sisältöelementeillä
 */
export default function HeroVariant12() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
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
        background: 'var(--sem-color-background-page)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--ref-spacing-6)',
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
        }}>
          {/* Outer frame */}
          <div style={{
            border: '2px solid var(--ref-color-brand-gold-600)',
            borderRadius: 'var(--ref-radius-2xl)',
            padding: 'var(--ref-spacing-4)',
            background: 'var(--sem-color-background-surface)',
          }}>
            {/* Video frame */}
            <div style={{
              position: 'relative',
              aspectRatio: '9/16',
              borderRadius: 'var(--ref-radius-xl)',
              overflow: 'hidden',
              marginBottom: 'var(--ref-spacing-4)',
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

            {/* Content */}
            <div style={{
              textAlign: 'center',
              padding: 'var(--ref-spacing-4)',
            }}>
              <h1 style={{
                fontSize: 'var(--ref-font-size-2xl)',
                fontWeight: 'var(--ref-font-weight-bold)',
                color: 'var(--sem-color-text-heading)',
                marginBottom: 'var(--ref-spacing-3)',
              }}>
                Framed Beauty
              </h1>
              <p style={{
                fontSize: 'var(--ref-font-size-base)',
                color: 'var(--sem-color-text-body-dark)',
                marginBottom: 'var(--ref-spacing-4)',
              }}>
                Every moment perfectly captured
              </p>
              <a href="#accommodation" className="btn-primary">
                Explore
              </a>
            </div>
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
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.02,
        background: `
          repeating-linear-gradient(
            45deg,
            var(--ref-color-brand-gold-600),
            var(--ref-color-brand-gold-600) 1px,
            transparent 1px,
            transparent 40px
          ),
          repeating-linear-gradient(
            -45deg,
            var(--ref-color-brand-gold-600),
            var(--ref-color-brand-gold-600) 1px,
            transparent 1px,
            transparent 40px
          )
        `,
      }} />

      {/* Main container */}
      <div style={{
        position: 'relative',
        width: '90%',
        maxWidth: '1200px',
        aspectRatio: '16/9',
      }}>
        {/* Outer frame */}
        <div style={{
          position: 'absolute',
          inset: 0,
          border: '4px solid var(--ref-color-brand-gold-600)',
          borderRadius: 'var(--ref-radius-3xl)',
          background: 'var(--sem-color-background-surface)',
          boxShadow: 'var(--ref-shadow-2xl)',
          padding: 'var(--ref-spacing-12)',
        }}>
          {/* Inner content grid */}
          <div style={{
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: 'var(--ref-spacing-12)',
            alignItems: 'center',
          }}>
            {/* Left - Content */}
            <div>
              {/* Frame title */}
              <div style={{
                display: 'inline-block',
                padding: 'var(--ref-spacing-2) var(--ref-spacing-4)',
                background: 'var(--ref-color-brand-gold-600)',
                color: 'var(--ref-color-neutral-0)',
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                borderRadius: 'var(--ref-radius-full)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--ref-spacing-6)',
              }}>
                Frame in Frame
              </div>

              <h1 style={{
                fontSize: 'var(--ref-font-size-5xl)',
                fontWeight: 'var(--ref-font-weight-bold)',
                color: 'var(--sem-color-text-heading)',
                marginBottom: 'var(--ref-spacing-6)',
                lineHeight: 'var(--ref-font-lineHeight-tight)',
              }}>
                Picture<br />
                Perfect<br />
                <span style={{
                  color: 'var(--ref-color-brand-gold-600)',
                }}>
                  Paradise
                </span>
              </h1>

              <p style={{
                fontSize: 'var(--ref-font-size-lg)',
                color: 'var(--sem-color-text-body-dark)',
                marginBottom: 'var(--ref-spacing-8)',
                lineHeight: 'var(--ref-font-lineHeight-relaxed)',
              }}>
                Every view is a masterpiece waiting to be framed. 
                Experience the Arctic through our carefully curated perspectives.
              </p>

              <div style={{
                display: 'flex',
                gap: 'var(--ref-spacing-4)',
              }}>
                <a href="#accommodation" className="btn-primary">
                  View Gallery
                </a>
                <a href="/activities" className="btn-secondary">
                  Explore More
                </a>
              </div>
            </div>

            {/* Right - Video in multiple frames */}
            <div style={{
              position: 'relative',
              height: '100%',
            }}>
              {/* Video frame 1 - Main */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '85%',
                height: '85%',
                border: '3px solid var(--ref-color-brand-gold-600)',
                borderRadius: 'var(--ref-radius-2xl)',
                overflow: 'hidden',
                boxShadow: 'var(--ref-shadow-xl)',
                background: 'var(--ref-color-neutral-900)',
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

              {/* Video frame 2 - Decorative */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '60%',
                height: '60%',
                border: '2px solid var(--ref-color-brand-gold-400)',
                borderRadius: 'var(--ref-radius-xl)',
                background: 'var(--sem-color-background-surface)',
                opacity: 0.9,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{
                  textAlign: 'center',
                  padding: 'var(--ref-spacing-6)',
                }}>
                  <div style={{
                    fontSize: 'var(--ref-font-size-4xl)',
                    marginBottom: 'var(--ref-spacing-2)',
                  }}>
                    🖼️
                  </div>
                  <p style={{
                    fontSize: 'var(--ref-font-size-sm)',
                    color: 'var(--sem-color-text-muted)',
                    fontWeight: 'var(--ref-font-weight-medium)',
                  }}>
                    Frame your<br />memories
                  </p>
                </div>
              </div>

              {/* Frame corners */}
              {[
                { top: '-10px', left: '-10px' },
                { top: '-10px', right: '-10px' },
                { bottom: '-10px', left: '-10px' },
                { bottom: '-10px', right: '-10px' },
              ].map((pos, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    ...pos,
                    width: '30px',
                    height: '30px',
                    background: 'var(--ref-color-brand-gold-600)',
                    clipPath: i % 2 === 0 
                      ? 'polygon(0 0, 100% 0, 0 100%)' 
                      : 'polygon(100% 0, 100% 100%, 0 0)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Outer decorative corners */}
        {[
          { top: '-20px', left: '-20px', size: '60px' },
          { top: '-20px', right: '-20px', size: '60px' },
          { bottom: '-20px', left: '-20px', size: '60px' },
          { bottom: '-20px', right: '-20px', size: '60px' },
        ].map((corner, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              ...corner,
              width: corner.size,
              height: corner.size,
              border: '3px solid var(--ref-color-brand-gold-600)',
              borderRadius: '50%',
              opacity: 0.3,
            }}
          />
        ))}
      </div>
    </section>
  );
}
