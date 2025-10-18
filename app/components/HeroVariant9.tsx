'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 9: Interactive Parallax
 * Parallax-efekti jossa sisältö liikkuu videon päällä scrollatessa
 */
export default function HeroVariant9() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isMobile) {
    return (
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
      }}>
        {/* Background video */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
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

        {/* Content with parallax */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'var(--ref-spacing-6)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <h1 style={{
              fontSize: 'var(--ref-font-size-4xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-4)',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}>
              Parallax Experience
            </h1>
            <p style={{
              fontSize: 'var(--ref-font-size-lg)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-6)',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}>
              Scroll to see the magic unfold
            </p>
            <a href="#content" className="btn-primary">
              Scroll Down
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
      overflow: 'hidden',
    }}>
      {/* Background video with parallax */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        transform: `translateY(${scrollY * 0.5}px)`,
        transformOrigin: 'center center',
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

      {/* Background overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
      }} />

      {/* Parallax content layers */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        overflow: 'hidden',
      }}>
        {/* Background content (moves slowest) */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: `translateY(-50%) translateY(${scrollY * 0.1}px)`,
          opacity: 0.3,
        }}>
          <div style={{
            fontSize: 'var(--ref-font-size-8xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--ref-color-neutral-0)',
            textShadow: '0 0 50px rgba(0,0,0,0.8)',
            lineHeight: '0.8',
          }}>
            LAPLAND
          </div>
        </div>

        {/* Midground content (moves medium) */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '15%',
          transform: `translateY(-50%) translateY(${scrollY * 0.2}px)`,
          opacity: 0.4,
        }}>
          <div style={{
            fontSize: 'var(--ref-font-size-6xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--ref-color-brand-gold-300)',
            textShadow: '0 0 30px rgba(189, 153, 74, 0.5)',
            lineHeight: '0.9',
          }}>
            LUXURY
          </div>
        </div>

        {/* Foreground content (moves fastest) */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translateY(${scrollY * 0.3}px)`,
          textAlign: 'center',
          maxWidth: '800px',
          padding: '0 var(--ref-spacing-8)',
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: 'var(--ref-radius-2xl)',
            padding: 'var(--ref-spacing-12)',
          }}>
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
              Interactive Experience
            </div>

            <h1 style={{
              fontSize: 'var(--ref-font-size-6xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-6)',
              lineHeight: 'var(--ref-font-lineHeight-tight)',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}>
              Scroll to<br />
              Explore
            </h1>

            <p style={{
              fontSize: 'var(--ref-font-size-xl)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-8)',
              lineHeight: 'var(--ref-font-lineHeight-relaxed)',
              opacity: 0.9,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}>
              Each scroll reveals a new layer of Arctic beauty.
              Experience the depth and dimension of Lapland luxury.
            </p>

            <div style={{
              display: 'flex',
              gap: 'var(--ref-spacing-4)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <a
                href="#accommodation"
                className="btn-primary"
                style={{
                  background: 'var(--ref-color-neutral-0)',
                  color: 'var(--ref-color-neutral-900)',
                  border: '2px solid var(--ref-color-neutral-0)',
                }}
              >
                Discover More
              </a>
              <a
                href="#content"
                className="btn-secondary"
                style={{
                  background: 'transparent',
                  color: 'var(--ref-color-neutral-0)',
                  border: '2px solid var(--ref-color-neutral-0)',
                }}
              >
                Scroll Down
              </a>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        {[
          { size: 100, speed: 0.15, color: 'var(--ref-color-brand-gold-600)' },
          { size: 150, speed: 0.25, color: 'var(--ref-color-brand-gold-400)' },
          { size: 80, speed: 0.35, color: 'var(--ref-color-brand-gold-500)' },
        ].map((element, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              background: `radial-gradient(circle, ${element.color} 0%, transparent 70%)`,
              borderRadius: '50%',
              opacity: 0.1,
              transform: `translateY(${scrollY * element.speed}px)`,
              animation: `float ${3 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div style={{
        position: 'absolute',
        bottom: 'var(--ref-spacing-8)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        gap: 'var(--ref-spacing-2)',
      }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: scrollY > (i - 1) * 200 ? 'var(--ref-color-brand-gold-600)' : 'rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
}

