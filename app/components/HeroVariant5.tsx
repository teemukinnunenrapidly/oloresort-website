'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 5: Minimal Centered
 * Minimalistinen, keskitetty layout pienellä videolla taustalla
 */
export default function HeroVariant5() {
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
      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 50% 50%, var(--ref-color-brand-gold-50) 0%, transparent 60%),
          linear-gradient(180deg, transparent 0%, var(--ref-color-neutral-50) 100%)
        `,
        opacity: 0.5,
      }} />

      {/* Background video - subtle and blurred */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          maxWidth: '800px',
          aspectRatio: '9/16',
          opacity: 0.15,
          filter: 'blur(20px)',
          zIndex: 0,
        }}>
          {videoId && (
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
          )}
        </div>
      )}

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '900px',
        padding: `0 var(--ref-spacing-${isMobile ? '6' : '8'})`,
      }}>
        {/* Logo or tagline */}
        <div style={{
          display: 'inline-block',
          marginBottom: 'var(--ref-spacing-8)',
        }}>
          <div style={{
            fontSize: isMobile ? 'var(--ref-font-size-sm)' : 'var(--ref-font-size-base)',
            fontWeight: 'var(--ref-font-weight-semibold)',
            color: 'var(--ref-color-brand-gold-700)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: 'var(--ref-spacing-2)',
          }}>
            Olo Resort
          </div>
          <div style={{
            height: '1px',
            width: '100px',
            background: 'linear-gradient(to right, transparent, var(--ref-color-brand-gold-600), transparent)',
            margin: '0 auto',
          }} />
        </div>

        {/* Main heading */}
        <h1 style={{
          fontSize: isMobile ? 'var(--ref-font-size-5xl)' : 'var(--ref-font-size-7xl)',
          fontWeight: 'var(--ref-font-weight-bold)',
          color: 'var(--sem-color-text-heading)',
          marginBottom: 'var(--ref-spacing-8)',
          lineHeight: 'var(--ref-font-lineHeight-tight)',
        }}>
          Lapland&apos;s<br />
          Hidden Gem
        </h1>

        {/* Description */}
        <p style={{
          fontSize: isMobile ? 'var(--ref-font-size-lg)' : 'var(--ref-font-size-2xl)',
          color: 'var(--sem-color-text-body-dark)',
          marginBottom: 'var(--ref-spacing-12)',
          lineHeight: 'var(--ref-font-lineHeight-relaxed)',
          maxWidth: '700px',
          margin: '0 auto',
          marginBottom: 'var(--ref-spacing-12)',
        }}>
          Exclusive glass igloos offering panoramic views of the Northern Lights 
          and the serene Arctic wilderness
        </p>

        {/* CTA buttons */}
        <div style={{
          display: 'flex',
          gap: 'var(--ref-spacing-4)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'var(--ref-spacing-16)',
        }}>
          <a 
            href="#accommodation"
            className="btn-primary"
            style={{
              fontSize: 'var(--ref-font-size-lg)',
              padding: `var(--ref-spacing-4) var(--ref-spacing-10)`,
            }}
          >
            View Accommodation
          </a>
          <a 
            href="/activities"
            className="btn-secondary"
            style={{
              fontSize: 'var(--ref-font-size-lg)',
              padding: `var(--ref-spacing-4) var(--ref-spacing-10)`,
            }}
          >
            Explore Activities
          </a>
        </div>

        {/* Feature highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: 'var(--ref-spacing-8)',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {[
            { icon: '✨', label: 'Northern Lights' },
            { icon: '🏔️', label: 'Mountain Views' },
            { icon: '🔥', label: 'Private Sauna' },
            { icon: '⭐', label: '5-Star Luxury' },
          ].map((item, i) => (
            <div 
              key={i}
              style={{
                padding: 'var(--ref-spacing-4)',
                background: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--ref-radius-xl)',
                border: '1px solid var(--sem-color-border-light)',
              }}
            >
              <div style={{
                fontSize: 'var(--ref-font-size-3xl)',
                marginBottom: 'var(--ref-spacing-2)',
              }}>
                {item.icon}
              </div>
              <div style={{
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: 'var(--ref-font-weight-medium)',
                color: 'var(--sem-color-text-body-dark)',
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 'var(--ref-spacing-12)',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--ref-spacing-2)',
        opacity: 0.5,
        animation: 'bounce 2s infinite',
      }}>
        <span style={{
          fontSize: 'var(--ref-font-size-xs)',
          color: 'var(--sem-color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          Scroll
        </span>
        <div style={{
          width: '20px',
          height: '30px',
          border: '2px solid currentColor',
          borderRadius: 'var(--ref-radius-full)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '6px',
            background: 'currentColor',
            borderRadius: 'var(--ref-radius-full)',
          }} />
        </div>
      </div>
    </section>
  );
}

