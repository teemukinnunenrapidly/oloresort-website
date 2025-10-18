'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 8: Magazine Style
 * Magazinemainen layout isolla otsikolla ja sivupalkin sisältöelementeillä
 */
export default function HeroVariant8() {
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
        padding: 'var(--ref-spacing-6)',
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          {/* Magazine header */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--ref-spacing-8)',
            paddingBottom: 'var(--ref-spacing-6)',
            borderBottom: '3px solid var(--ref-color-brand-gold-600)',
          }}>
            <div style={{
              fontSize: 'var(--ref-font-size-sm)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              color: 'var(--ref-color-brand-gold-600)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: 'var(--ref-spacing-2)',
            }}>
              Olo Resort Magazine
            </div>
            <h1 style={{
              fontSize: 'var(--ref-font-size-4xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--sem-color-text-heading)',
              marginBottom: 'var(--ref-spacing-4)',
            }}>
              Winter 2024
            </h1>
            <p style={{
              fontSize: 'var(--ref-font-size-lg)',
              color: 'var(--sem-color-text-body-dark)',
            }}>
              Luxury in the Arctic Circle
            </p>
          </div>

          {/* Featured video */}
          <div style={{
            position: 'relative',
            aspectRatio: '16/10',
            borderRadius: 'var(--ref-radius-lg)',
            overflow: 'hidden',
            marginBottom: 'var(--ref-spacing-8)',
            boxShadow: 'var(--ref-shadow-xl)',
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

            {/* Magazine overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
              padding: 'var(--ref-spacing-6)',
            }}>
              <h2 style={{
                fontSize: 'var(--ref-font-size-xl)',
                fontWeight: 'var(--ref-font-weight-bold)',
                color: 'var(--ref-color-neutral-0)',
                marginBottom: 'var(--ref-spacing-2)',
              }}>
                Experience the Magic
              </h2>
              <p style={{
                fontSize: 'var(--ref-font-size-base)',
                color: 'var(--ref-color-neutral-0)',
                opacity: 0.9,
              }}>
                Northern Lights from your glass igloo
              </p>
            </div>
          </div>

          {/* Article snippets */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--ref-spacing-4)',
          }}>
            {[
              { title: 'Arctic Wellness', excerpt: 'Discover our spa facilities' },
              { title: 'Culinary Journey', excerpt: 'Local flavors and techniques' },
              { title: 'Winter Activities', excerpt: 'From skiing to aurora hunting' },
              { title: 'Luxury Stays', excerpt: 'Glass igloos and private suites' },
            ].map((article, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--sem-color-background-surface)',
                  padding: 'var(--ref-spacing-4)',
                  borderRadius: 'var(--ref-radius-base)',
                  border: '1px solid var(--sem-color-border-light)',
                }}
              >
                <h4 style={{
                  fontSize: 'var(--ref-font-size-base)',
                  fontWeight: 'var(--ref-font-weight-semibold)',
                  color: 'var(--sem-color-text-heading)',
                  marginBottom: 'var(--ref-spacing-2)',
                }}>
                  {article.title}
                </h4>
                <p style={{
                  fontSize: 'var(--ref-font-size-sm)',
                  color: 'var(--sem-color-text-muted)',
                }}>
                  {article.excerpt}
                </p>
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
      display: 'flex',
      overflow: 'hidden',
    }}>
      {/* Left column - Magazine content */}
      <div style={{
        flex: '0 0 400px',
        background: 'var(--sem-color-background-surface)',
        padding: 'var(--ref-spacing-12) var(--ref-spacing-8)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 2,
        borderRight: '2px solid var(--ref-color-brand-gold-600)',
        boxShadow: '2px 0 20px rgba(0,0,0,0.1)',
      }}>
        {/* Magazine masthead */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--ref-spacing-12)',
          paddingBottom: 'var(--ref-spacing-8)',
          borderBottom: '3px solid var(--ref-color-brand-gold-600)',
        }}>
          <div style={{
            fontSize: 'var(--ref-font-size-xs)',
            fontWeight: 'var(--ref-font-weight-semibold)',
            color: 'var(--ref-color-brand-gold-600)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: 'var(--ref-spacing-2)',
          }}>
            Olo Resort
          </div>
          <h1 style={{
            fontSize: 'var(--ref-font-size-2xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--sem-color-text-heading)',
            marginBottom: 'var(--ref-spacing-2)',
          }}>
            Magazine
          </h1>
          <div style={{
            fontSize: 'var(--ref-font-size-sm)',
            color: 'var(--sem-color-text-muted)',
          }}>
            Winter 2024 • Issue #12
          </div>
        </div>

        {/* Featured article */}
        <div style={{
          marginBottom: 'var(--ref-spacing-8)',
        }}>
          <div style={{
            display: 'inline-block',
            padding: 'var(--ref-spacing-1) var(--ref-spacing-3)',
            background: 'var(--ref-color-brand-gold-600)',
            color: 'var(--ref-color-neutral-0)',
            fontSize: 'var(--ref-font-size-xs)',
            fontWeight: 'var(--ref-font-weight-semibold)',
            borderRadius: 'var(--ref-radius-full)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: 'var(--ref-spacing-4)',
          }}>
            Featured Story
          </div>

          <h2 style={{
            fontSize: 'var(--ref-font-size-xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--sem-color-text-heading)',
            marginBottom: 'var(--ref-spacing-4)',
            lineHeight: 'var(--ref-font-lineHeight-tight)',
          }}>
            The Northern Lights Experience
          </h2>

          <p style={{
            fontSize: 'var(--ref-font-size-base)',
            color: 'var(--sem-color-text-body-dark)',
            marginBottom: 'var(--ref-spacing-6)',
            lineHeight: 'var(--ref-font-lineHeight-relaxed)',
          }}>
            From the comfort of your glass igloo, witness nature&apos;s most spectacular light show.
            Each evening brings new colors, new patterns, new magic.
          </p>

          <a href="#accommodation" className="btn-primary">
            Read Full Story
          </a>
        </div>

        {/* Article snippets sidebar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--ref-spacing-6)',
        }}>
          {[
            { category: 'Wellness', title: 'Arctic Spa Rituals', excerpt: 'Ancient techniques meet modern luxury' },
            { category: 'Culinary', title: 'Reindeer & Cloudberries', excerpt: 'Local ingredients, global flavors' },
            { category: 'Adventure', title: 'Husky Safari', excerpt: 'Experience the Arctic wilderness' },
            { category: 'Culture', title: 'Sami Heritage', excerpt: 'Stories from the indigenous people' },
          ].map((article, i) => (
            <div
              key={i}
              style={{
                padding: 'var(--ref-spacing-4)',
                background: 'var(--ref-color-neutral-50)',
                borderRadius: 'var(--ref-radius-base)',
                borderLeft: '4px solid var(--ref-color-brand-gold-600)',
              }}
            >
              <div style={{
                fontSize: 'var(--ref-font-size-xs)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                color: 'var(--ref-color-brand-gold-600)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--ref-spacing-1)',
              }}>
                {article.category}
              </div>
              <h4 style={{
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                color: 'var(--sem-color-text-heading)',
                marginBottom: 'var(--ref-spacing-1)',
              }}>
                {article.title}
              </h4>
              <p style={{
                fontSize: 'var(--ref-font-size-xs)',
                color: 'var(--sem-color-text-muted)',
              }}>
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Magazine cover with video */}
      <div style={{
        flex: 1,
        position: 'relative',
        background: 'var(--ref-color-neutral-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Magazine cover frame */}
        <div style={{
          position: 'relative',
          width: '80%',
          maxWidth: '600px',
          aspectRatio: '3/4',
          background: 'var(--ref-color-neutral-900)',
          borderRadius: 'var(--ref-radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--ref-shadow-2xl)',
        }}>
          {/* Magazine cover video */}
          <div style={{
            position: 'absolute',
            inset: 0,
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

          {/* Magazine title overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 50%)',
            padding: 'var(--ref-spacing-8)',
            color: 'var(--ref-color-neutral-0)',
          }}>
            <div style={{
              fontSize: 'var(--ref-font-size-sm)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: 'var(--ref-spacing-2)',
            }}>
              Cover Story
            </div>
            <h2 style={{
              fontSize: 'var(--ref-font-size-3xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              lineHeight: 'var(--ref-font-lineHeight-tight)',
            }}>
              Dancing Lights
            </h2>
          </div>

          {/* Magazine spine */}
          <div style={{
            position: 'absolute',
            left: '-8px',
            top: 0,
            bottom: 0,
            width: '8px',
            background: 'linear-gradient(to bottom, var(--ref-color-brand-gold-600), var(--ref-color-brand-gold-800))',
          }} />

          {/* Magazine details bottom */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
            padding: 'var(--ref-spacing-6)',
            color: 'var(--ref-color-neutral-0)',
          }}>
            <p style={{
              fontSize: 'var(--ref-font-size-sm)',
              marginBottom: 'var(--ref-spacing-4)',
            }}>
              Experience the aurora borealis like never before. Each night brings new colors,
              new patterns, new magic to your private glass sanctuary.
            </p>
            <a href="#accommodation" className="btn-primary" style={{
              fontSize: 'var(--ref-font-size-sm)',
              padding: 'var(--ref-spacing-3) var(--ref-spacing-6)',
            }}>
              Book Now
            </a>
          </div>
        </div>

        {/* Floating magazine elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '150px',
          height: '200px',
          background: 'var(--ref-color-brand-gold-600)',
          opacity: 0.1,
          borderRadius: 'var(--ref-radius-base)',
          transform: 'rotate(15deg)',
        }} />

        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '100px',
          height: '150px',
          background: 'var(--ref-color-brand-gold-600)',
          opacity: 0.08,
          borderRadius: 'var(--ref-radius-base)',
          transform: 'rotate(-10deg)',
        }} />
      </div>
    </section>
  );
}

