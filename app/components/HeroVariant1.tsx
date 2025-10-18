'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 1: Classic Overlay
 * Video täyttää taustan, sisältö keskellä overlay-kerroksen päällä
 */
export default function HeroVariant1() {
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
    <section 
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Video */}
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

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
      }} />

      {/* Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: `0 var(--ref-spacing-${isMobile ? '6' : '8'})`,
        maxWidth: '900px',
      }}>
        <h1 style={{
          fontSize: isMobile ? 'var(--ref-font-size-4xl)' : 'var(--ref-font-size-6xl)',
          fontWeight: 'var(--ref-font-weight-bold)',
          color: 'var(--ref-color-neutral-0)',
          marginBottom: 'var(--ref-spacing-6)',
          lineHeight: 'var(--ref-font-lineHeight-tight)',
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
        }}>
          Experience Lapland&apos;s Magic
        </h1>
        
        <p style={{
          fontSize: isMobile ? 'var(--ref-font-size-lg)' : 'var(--ref-font-size-xl)',
          color: 'var(--ref-color-neutral-0)',
          marginBottom: 'var(--ref-spacing-10)',
          lineHeight: 'var(--ref-font-lineHeight-relaxed)',
          opacity: 0.95,
          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
        }}>
          Luxury glass igloos under the Northern Lights in the heart of Levi wilderness
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
              fontSize: 'var(--ref-font-size-lg)',
              padding: `var(--ref-spacing-4) var(--ref-spacing-8)`,
            }}
          >
            Explore Accommodation
          </a>
          <a 
            href="#contact"
            className="btn-secondary"
            style={{
              fontSize: 'var(--ref-font-size-lg)',
              padding: `var(--ref-spacing-4) var(--ref-spacing-8)`,
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: 'var(--ref-spacing-8)',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        animation: 'bounce 2s infinite',
      }}>
        <div style={{
          width: '32px',
          height: '48px',
          border: '2px solid var(--ref-color-neutral-0)',
          borderRadius: 'var(--ref-radius-full)',
          padding: 'var(--ref-spacing-2)',
          opacity: 0.7,
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: 'var(--ref-color-neutral-0)',
            borderRadius: 'var(--ref-radius-full)',
            margin: '0 auto',
          }} />
        </div>
      </div>
    </section>
  );
}

