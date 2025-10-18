'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 14: Timeline Layout
 * Aikajanatyylinen layout jossa sisältö ja video vuorottelevat
 */
export default function HeroVariant14() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      window.removeEventListener('resize', checkDevice);
      clearInterval(interval);
    };
  }, []);

  const timelineItems = [
    { time: 'Arrival', title: 'Welcome to Paradise', desc: 'Your Arctic journey begins' },
    { time: 'Check-in', title: 'Glass Igloo Awaits', desc: 'Luxury accommodation ready' },
    { time: 'Evening', title: 'Northern Lights', desc: 'Nature\'s spectacular show' },
    { time: 'Night', title: 'Dream Under Stars', desc: 'Unforgettable memories' },
  ];

  if (isMobile) {
    return (
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--sem-color-background-page)',
        padding: 'var(--ref-spacing-6)',
      }}>
        {/* Mobile timeline */}
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
        }}>
          <h1 style={{
            fontSize: 'var(--ref-font-size-3xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--sem-color-text-heading)',
            textAlign: 'center',
            marginBottom: 'var(--ref-spacing-8)',
          }}>
            Your Timeline
          </h1>

          {/* Timeline items */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--ref-spacing-6)',
            position: 'relative',
          }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--ref-color-brand-gold-600)',
              opacity: 0.3,
            }} />

            {timelineItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 'var(--ref-spacing-4)',
                  alignItems: 'start',
                  opacity: activeSection === i ? 1 : 0.5,
                  transition: 'opacity 0.5s ease',
                }}
              >
                {/* Timeline dot */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: activeSection === i 
                    ? 'var(--ref-color-brand-gold-600)' 
                    : 'var(--sem-color-background-surface)',
                  border: '2px solid var(--ref-color-brand-gold-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--ref-font-size-xs)',
                  fontWeight: 'var(--ref-font-weight-bold)',
                  color: activeSection === i 
                    ? 'var(--ref-color-neutral-0)' 
                    : 'var(--ref-color-brand-gold-600)',
                  flexShrink: 0,
                  transition: 'all 0.5s ease',
                }}>
                  {i + 1}
                </div>

                {/* Timeline content */}
                <div style={{
                  background: 'var(--sem-color-background-surface)',
                  padding: 'var(--ref-spacing-4)',
                  borderRadius: 'var(--ref-radius-lg)',
                  border: activeSection === i 
                    ? '2px solid var(--ref-color-brand-gold-600)'
                    : '1px solid var(--sem-color-border-light)',
                  flex: 1,
                  transition: 'all 0.5s ease',
                }}>
                  <div style={{
                    fontSize: 'var(--ref-font-size-xs)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                    color: 'var(--ref-color-brand-gold-600)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 'var(--ref-spacing-1)',
                  }}>
                    {item.time}
                  </div>
                  <h3 style={{
                    fontSize: 'var(--ref-font-size-lg)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                    color: 'var(--sem-color-text-heading)',
                    marginBottom: 'var(--ref-spacing-2)',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--ref-font-size-sm)',
                    color: 'var(--sem-color-text-body-dark)',
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 'var(--ref-spacing-8)',
            textAlign: 'center',
          }}>
            <a href="#accommodation" className="btn-primary">
              Start Your Timeline
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
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 20% 50%, var(--ref-color-brand-gold-50) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, var(--ref-color-brand-gold-50) 0%, transparent 50%)
        `,
        opacity: 0.5,
      }} />

      {/* Main container */}
      <div style={{
        position: 'relative',
        height: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        padding: '0 var(--ref-spacing-8)',
      }}>
        {/* Timeline visualization */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--ref-spacing-2)',
          width: '100%',
          position: 'relative',
        }}>
          {/* Central timeline line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 'var(--ref-spacing-8)',
            right: 'var(--ref-spacing-8)',
            height: '2px',
            background: 'var(--ref-color-brand-gold-600)',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }} />

          {timelineItems.map((item, i) => {
            const isActive = activeSection === i;
            const isEven = i % 2 === 0;
            
            return (
              <div
                key={i}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-8)',
                }}
              >
              {/* Top content/video */}
              <div style={{
                flex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: 'var(--ref-spacing-4)',
              }}>
                {isEven ? (
                  // Even: Content on top
                  <div style={{
                    background: 'var(--sem-color-background-surface)',
                    padding: 'var(--ref-spacing-6)',
                    borderRadius: 'var(--ref-radius-xl)',
                    boxShadow: isActive ? 'var(--ref-shadow-xl)' : 'var(--ref-shadow-base)',
                    border: isActive 
                      ? '2px solid var(--ref-color-brand-gold-600)'
                      : '1px solid var(--sem-color-border-light)',
                    width: '100%',
                    opacity: isActive ? 1 : 0.7,
                    transform: isActive ? 'translateY(-10px)' : 'translateY(0)',
                    transition: 'all 0.5s ease',
                  }}>
                    <div style={{
                      fontSize: 'var(--ref-font-size-sm)',
                      fontWeight: 'var(--ref-font-weight-semibold)',
                      color: 'var(--ref-color-brand-gold-600)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 'var(--ref-spacing-2)',
                    }}>
                      {item.time}
                    </div>
                    <h3 style={{
                      fontSize: 'var(--ref-font-size-xl)',
                      fontWeight: 'var(--ref-font-weight-bold)',
                      color: 'var(--sem-color-text-heading)',
                      marginBottom: 'var(--ref-spacing-3)',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: 'var(--ref-font-size-base)',
                      color: 'var(--sem-color-text-body-dark)',
                      lineHeight: 'var(--ref-font-lineHeight-relaxed)',
                    }}>
                      {item.desc}
                    </p>
                  </div>
                ) : (
                  // Odd: Video on top
                  <div style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    borderRadius: 'var(--ref-radius-xl)',
                    overflow: 'hidden',
                    boxShadow: isActive ? 'var(--ref-shadow-xl)' : 'var(--ref-shadow-base)',
                    opacity: isActive ? 1 : 0.7,
                    transform: isActive ? 'translateY(-10px)' : 'translateY(0)',
                    transition: 'all 0.5s ease',
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
                          width: '100%',
                          height: '100%',
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
                )}
              </div>

              {/* Timeline node */}
              <div style={{
                position: 'relative',
                zIndex: 2,
              }}>
                <div style={{
                  width: isActive ? '60px' : '40px',
                  height: isActive ? '60px' : '40px',
                  borderRadius: '50%',
                  background: isActive 
                    ? 'var(--ref-color-brand-gold-600)' 
                    : 'var(--sem-color-background-surface)',
                  border: '3px solid var(--ref-color-brand-gold-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isActive ? 'var(--ref-font-size-xl)' : 'var(--ref-font-size-base)',
                  fontWeight: 'var(--ref-font-weight-bold)',
                  color: isActive 
                    ? 'var(--ref-color-neutral-0)' 
                    : 'var(--ref-color-brand-gold-600)',
                  boxShadow: isActive ? 'var(--ref-shadow-lg)' : 'none',
                  transition: 'all 0.5s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setActiveSection(i)}
              >
                {i + 1}
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  border: '2px solid var(--ref-color-brand-gold-600)',
                  animation: 'pulse 2s ease-in-out infinite',
                  opacity: 0.5,
                }} />
              )}
            </div>

            {/* Bottom content/video */}
            <div style={{
              flex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              paddingTop: 'var(--ref-spacing-4)',
            }}>
              {!isEven ? (
                // Odd: Content on bottom
                <div style={{
                  background: 'var(--sem-color-background-surface)',
                  padding: 'var(--ref-spacing-6)',
                  borderRadius: 'var(--ref-radius-xl)',
                  boxShadow: isActive ? 'var(--ref-shadow-xl)' : 'var(--ref-shadow-base)',
                  border: isActive 
                    ? '2px solid var(--ref-color-brand-gold-600)'
                    : '1px solid var(--sem-color-border-light)',
                  width: '100%',
                  opacity: isActive ? 1 : 0.7,
                  transform: isActive ? 'translateY(10px)' : 'translateY(0)',
                  transition: 'all 0.5s ease',
                }}>
                  <div style={{
                    fontSize: 'var(--ref-font-size-sm)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                    color: 'var(--ref-color-brand-gold-600)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 'var(--ref-spacing-2)',
                  }}>
                    {item.time}
                  </div>
                  <h3 style={{
                    fontSize: 'var(--ref-font-size-xl)',
                    fontWeight: 'var(--ref-font-weight-bold)',
                    color: 'var(--sem-color-text-heading)',
                    marginBottom: 'var(--ref-spacing-3)',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--ref-font-size-base)',
                    color: 'var(--sem-color-text-body-dark)',
                    lineHeight: 'var(--ref-font-lineHeight-relaxed)',
                  }}>
                    {item.desc}
                  </p>
                </div>
              ) : (
                // Even: Video on bottom
                <div style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: 'var(--ref-radius-xl)',
                  overflow: 'hidden',
                  boxShadow: isActive ? 'var(--ref-shadow-xl)' : 'var(--ref-shadow-base)',
                  opacity: isActive ? 1 : 0.7,
                  transform: isActive ? 'translateY(10px)' : 'translateY(0)',
                  transition: 'all 0.5s ease',
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
                        width: '100%',
                        height: '100%',
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
                </div>
              )}
            </div>
          </div>
          );
          })}
        </div>
      </div>

      {/* CTA at bottom */}
      <div style={{
        position: 'absolute',
        bottom: 'var(--ref-spacing-8)',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        zIndex: 3,
      }}>
        <a href="#accommodation" className="btn-primary">
          Start Your Journey
        </a>
      </div>
    </section>
  );
}
