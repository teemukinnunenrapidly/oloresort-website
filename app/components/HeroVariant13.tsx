'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 13: Floating Cards
 * Kelluvat sisältökortit videon päällä 3D-tilassa
 */
export default function HeroVariant13() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
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

        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'rgba(0,0,0,0.5)',
        }} />

        {/* Floating cards */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'var(--ref-spacing-6)',
          gap: 'var(--ref-spacing-4)',
        }}>
          {/* Main content card */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 'var(--ref-radius-xl)',
            padding: 'var(--ref-spacing-6)',
            textAlign: 'center',
          }}>
            <h1 style={{
              fontSize: 'var(--ref-font-size-3xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-4)',
            }}>
              Floating Dreams
            </h1>
            <p style={{
              fontSize: 'var(--ref-font-size-base)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-6)',
              opacity: 0.9,
            }}>
              Experience weightless luxury
            </p>
            <a href="#accommodation" className="btn-primary">
              Float Away
            </a>
          </div>

          {/* Feature cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--ref-spacing-3)',
          }}>
            {['Aurora Views', 'Private Spa'].map((feature, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 'var(--ref-radius-base)',
                  padding: 'var(--ref-spacing-3)',
                  textAlign: 'center',
                  fontSize: 'var(--ref-font-size-sm)',
                  color: 'var(--ref-color-neutral-0)',
                }}
              >
                {feature}
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
      overflow: 'hidden',
      perspective: '1000px',
    }}>
      {/* Background video */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 0,
        transform: `translateZ(-100px) scale(1.1)`,
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

      {/* Subtle overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
      }} />

      {/* 3D Floating cards container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transformStyle: 'preserve-3d',
      }}>
        {/* Main floating card */}
        <div style={{
          position: 'relative',
          transform: `translateZ(100px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: 'var(--ref-radius-2xl)',
            padding: 'var(--ref-spacing-12)',
            boxShadow: `
              0 20px 60px rgba(0,0,0,0.3),
              0 0 100px rgba(189, 153, 74, 0.2)
            `,
            maxWidth: '600px',
            transform: 'translateZ(50px)',
          }}>
            {/* Gold accent line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: 'var(--ref-color-brand-gold-600)',
              borderRadius: '0 0 var(--ref-radius-full) var(--ref-radius-full)',
            }} />

            <div style={{
              textAlign: 'center',
            }}>
              <div style={{
                display: 'inline-block',
                padding: 'var(--ref-spacing-2) var(--ref-spacing-4)',
                background: 'var(--ref-color-brand-gold-100)',
                color: 'var(--ref-color-brand-gold-800)',
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                borderRadius: 'var(--ref-radius-full)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 'var(--ref-spacing-6)',
              }}>
                3D Experience
              </div>

              <h1 style={{
                fontSize: 'var(--ref-font-size-5xl)',
                fontWeight: 'var(--ref-font-weight-bold)',
                color: 'var(--sem-color-text-heading)',
                marginBottom: 'var(--ref-spacing-6)',
                lineHeight: 'var(--ref-font-lineHeight-tight)',
              }}>
                Floating in<br />
                <span style={{
                  background: 'linear-gradient(135deg, var(--ref-color-brand-gold-600), var(--ref-color-brand-gold-800))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Arctic Space
                </span>
              </h1>

              <p style={{
                fontSize: 'var(--ref-font-size-lg)',
                color: 'var(--sem-color-text-body-dark)',
                marginBottom: 'var(--ref-spacing-8)',
                lineHeight: 'var(--ref-font-lineHeight-relaxed)',
              }}>
                Move your cursor to explore the depth of luxury.
                Experience our glass igloos floating above the Arctic wilderness.
              </p>

              <div style={{
                display: 'flex',
                gap: 'var(--ref-spacing-4)',
                justifyContent: 'center',
              }}>
                <a href="#accommodation" className="btn-primary">
                  Start Floating
                </a>
                <a href="/gallery" className="btn-secondary">
                  View Gallery
                </a>
              </div>
            </div>
          </div>

          {/* Floating side cards */}
          {[
            { 
              pos: { left: '-200px', top: '-50px' }, 
              content: { icon: '❄️', text: 'Arctic Chill' },
              z: 30,
              rotation: -15,
            },
            { 
              pos: { right: '-200px', top: '-30px' }, 
              content: { icon: '✨', text: 'Northern Lights' },
              z: 40,
              rotation: 10,
            },
            { 
              pos: { left: '-150px', bottom: '-30px' }, 
              content: { icon: '🔥', text: 'Warm Sauna' },
              z: 20,
              rotation: -10,
            },
            { 
              pos: { right: '-180px', bottom: '-50px' }, 
              content: { icon: '⭐', text: '5-Star Luxury' },
              z: 35,
              rotation: 15,
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                ...card.pos,
                transform: `translateZ(${card.z}px) rotate(${card.rotation}deg)`,
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--ref-radius-lg)',
                padding: 'var(--ref-spacing-4)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                minWidth: '150px',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
            >
              <div style={{
                fontSize: 'var(--ref-font-size-2xl)',
                marginBottom: 'var(--ref-spacing-2)',
              }}>
                {card.content.icon}
              </div>
              <div style={{
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: 'var(--ref-font-weight-medium)',
                color: 'var(--sem-color-text-heading)',
              }}>
                {card.content.text}
              </div>
            </div>
          ))}
        </div>

        {/* Background floating elements */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`bg-${i}`}
            style={{
              position: 'absolute',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              background: 'rgba(189, 153, 74, 0.1)',
              borderRadius: 'var(--ref-radius-full)',
              filter: 'blur(40px)',
              transform: `translateZ(${-50 - i * 20}px)`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
