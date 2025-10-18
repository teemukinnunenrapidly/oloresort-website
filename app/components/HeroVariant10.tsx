'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 10: Storytelling Sequence
 * Tarinankerrontatyyli jossa sisältö paljastuu osissa scrollatessa
 */
export default function HeroVariant10() {
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
        minHeight: '100vh',
        background: 'var(--sem-color-background-page)',
        padding: 'var(--ref-spacing-6)',
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          {/* Story chapters */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--ref-spacing-8)',
          }}>
            {[
              { title: 'Chapter 1: Arrival', content: 'Your journey begins as you step into the Arctic wilderness' },
              { title: 'Chapter 2: Discovery', content: 'The glass igloo reveals its panoramic views of the Northern Lights' },
              { title: 'Chapter 3: Luxury', content: 'Private sauna and hot tub await under the stars' },
              { title: 'Chapter 4: Magic', content: 'Experience the aurora borealis from your bed' },
            ].map((chapter, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--sem-color-background-surface)',
                  padding: 'var(--ref-spacing-6)',
                  borderRadius: 'var(--ref-radius-lg)',
                  border: '1px solid var(--sem-color-border-light)',
                  opacity: scrollY > i * 100 ? 1 : 0.5,
                  transform: `translateY(${Math.max(0, 50 - scrollY * 0.1)}px)`,
                  transition: 'all 0.5s ease',
                }}
              >
                <h3 style={{
                  fontSize: 'var(--ref-font-size-lg)',
                  fontWeight: 'var(--ref-font-weight-semibold)',
                  color: 'var(--sem-color-text-heading)',
                  marginBottom: 'var(--ref-spacing-3)',
                }}>
                  {chapter.title}
                </h3>
                <p style={{
                  fontSize: 'var(--ref-font-size-base)',
                  color: 'var(--sem-color-text-body-dark)',
                }}>
                  {chapter.content}
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
      {/* Left side - Story content */}
      <div style={{
        flex: '0 0 45%',
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
          maxWidth: '500px',
        }}>
          {/* Story header */}
          <div style={{
            marginBottom: 'var(--ref-spacing-12)',
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
                Arctic Story
              </span>
            </div>

            <h1 style={{
              fontSize: 'var(--ref-font-size-4xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--sem-color-text-heading)',
              marginBottom: 'var(--ref-spacing-4)',
              lineHeight: 'var(--ref-font-lineHeight-tight)',
            }}>
              Your Journey<br />
              Unfolds
            </h1>

            <p style={{
              fontSize: 'var(--ref-font-size-lg)',
              color: 'var(--sem-color-text-body-dark)',
              lineHeight: 'var(--ref-font-lineHeight-relaxed)',
            }}>
              Scroll through the chapters of your Arctic adventure.
              Each moment reveals a new layer of luxury and wonder.
            </p>
          </div>

          {/* Story chapters with scroll-triggered animations */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--ref-spacing-8)',
          }}>
            {[
              {
                title: 'Chapter 1: Arrival',
                content: 'Your journey begins as you step into the Arctic wilderness',
                delay: 0,
                icon: '🛬'
              },
              {
                title: 'Chapter 2: Discovery',
                content: 'The glass igloo reveals its panoramic views of the Northern Lights',
                delay: 200,
                icon: '🏔️'
              },
              {
                title: 'Chapter 3: Luxury',
                content: 'Private sauna and hot tub await under the stars',
                delay: 400,
                icon: '🧖‍♀️'
              },
              {
                title: 'Chapter 4: Magic',
                content: 'Experience the aurora borealis from your bed',
                delay: 600,
                icon: '✨'
              },
            ].map((chapter, i) => (
              <div
                key={i}
                style={{
                  padding: 'var(--ref-spacing-6)',
                  background: scrollY > chapter.delay ? 'var(--ref-color-brand-gold-50)' : 'var(--ref-color-neutral-50)',
                  borderRadius: 'var(--ref-radius-lg)',
                  border: `2px solid ${scrollY > chapter.delay ? 'var(--ref-color-brand-gold-600)' : 'var(--sem-color-border-light)'}`,
                  transform: scrollY > chapter.delay ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: scrollY > chapter.delay ? 1 : 0.7,
                  transition: 'all 0.6s ease',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-4)',
                  marginBottom: 'var(--ref-spacing-3)',
                }}>
                  <span style={{
                    fontSize: 'var(--ref-font-size-2xl)',
                    opacity: scrollY > chapter.delay ? 1 : 0.5,
                  }}>
                    {chapter.icon}
                  </span>
                  <h3 style={{
                    fontSize: 'var(--ref-font-size-lg)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                    color: 'var(--sem-color-text-heading)',
                  }}>
                    {chapter.title}
                  </h3>
                </div>
                <p style={{
                  fontSize: 'var(--ref-font-size-base)',
                  color: 'var(--sem-color-text-body-dark)',
                  lineHeight: 'var(--ref-font-lineHeight-relaxed)',
                }}>
                  {chapter.content}
                </p>
              </div>
            ))}
          </div>

          {/* Story CTA */}
          <div style={{
            marginTop: 'var(--ref-spacing-12)',
            paddingTop: 'var(--ref-spacing-8)',
            borderTop: '1px solid var(--sem-color-border-light)',
          }}>
            <a href="#accommodation" className="btn-primary">
              Begin Your Story
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Story visualization */}
      <div style={{
        flex: 1,
        position: 'relative',
        background: 'var(--ref-color-neutral-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Story scene container */}
        <div style={{
          position: 'relative',
          width: '80%',
          maxWidth: '600px',
          aspectRatio: '9/16',
          borderRadius: 'var(--ref-radius-2xl)',
          overflow: 'hidden',
          boxShadow: 'var(--ref-shadow-2xl)',
        }}>
          {/* Story background video */}
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

          {/* Story overlay content */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              textAlign: 'center',
              color: 'var(--ref-color-neutral-0)',
              maxWidth: '400px',
              padding: '0 var(--ref-spacing-6)',
            }}>
              <div style={{
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: 'var(--ref-spacing-4)',
                opacity: 0.8,
              }}>
                Current Chapter
              </div>

              <h2 style={{
                fontSize: 'var(--ref-font-size-3xl)',
                fontWeight: 'var(--ref-font-weight-bold)',
                marginBottom: 'var(--ref-spacing-6)',
                lineHeight: 'var(--ref-font-lineHeight-tight)',
              }}>
                {scrollY < 200 && 'The Journey Begins'}
                {scrollY >= 200 && scrollY < 400 && 'Arctic Discovery'}
                {scrollY >= 400 && scrollY < 600 && 'Luxury Awaits'}
                {scrollY >= 600 && 'Magic Unfolds'}
              </h2>

              <p style={{
                fontSize: 'var(--ref-font-size-lg)',
                lineHeight: 'var(--ref-font-lineHeight-relaxed)',
                opacity: 0.9,
              }}>
                {scrollY < 200 && 'Welcome to the land where nature meets luxury'}
                {scrollY >= 200 && scrollY < 400 && 'Your glass sanctuary awaits under the Northern Lights'}
                {scrollY >= 400 && scrollY < 600 && 'Indulge in private wellness and Arctic serenity'}
                {scrollY >= 600 && 'Experience nature\'s greatest spectacle from your bed'}
              </p>
            </div>
          </div>

          {/* Story progress dots */}
          <div style={{
            position: 'absolute',
            bottom: 'var(--ref-spacing-6)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 'var(--ref-spacing-3)',
          }}>
            {[0, 200, 400, 600].map((threshold, i) => (
              <div
                key={i}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: scrollY > threshold ? 'var(--ref-color-brand-gold-600)' : 'rgba(255,255,255,0.3)',
                  border: scrollY > threshold ? '2px solid var(--ref-color-neutral-0)' : 'none',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating story elements */}
        {[
          { icon: '❄️', delay: 0.1, size: 40 },
          { icon: '🌟', delay: 0.2, size: 30 },
          { icon: '🏔️', delay: 0.15, size: 50 },
        ].map((element, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${20 + i * 30}%`,
              right: `${10 + i * 20}%`,
              fontSize: `${element.size}px`,
              opacity: 0.6,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            {element.icon}
          </div>
        ))}
      </div>
    </section>
  );
}

