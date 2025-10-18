'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 2: Split Screen
 * Sisältö vasemmalla, video oikealla (desktop)
 * Full screen video + overlay content (mobile)
 */
export default function HeroVariant2() {
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
    // Mobile: Full screen video with overlay content
    return (
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
      }}>
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

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 var(--ref-spacing-6)',
        }}>
          <HeroContent />
        </div>
      </section>
    );
  }

  // Desktop: Split screen layout
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      display: 'flex',
      overflow: 'hidden',
    }}>
      {/* Left Side - Content */}
      <div style={{
        flex: '0 0 50%',
        background: 'var(--sem-color-background-page)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--ref-spacing-16)',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          maxWidth: '600px',
        }}>
          <HeroContent />
        </div>
      </div>

      {/* Right Side - Video */}
      <div style={{
        flex: '0 0 50%',
        position: 'relative',
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
        
        {/* Subtle overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 100%)',
        }} />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <>
      <div style={{
        display: 'inline-block',
        padding: 'var(--ref-spacing-2) var(--ref-spacing-4)',
        background: 'var(--ref-color-brand-gold-600)',
        color: 'var(--ref-color-neutral-0)',
        fontSize: 'var(--ref-font-size-sm)',
        fontWeight: 'var(--ref-font-weight-semibold)',
        borderRadius: 'var(--ref-radius-full)',
        marginBottom: 'var(--ref-spacing-6)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>
        Luxury in Lapland
      </div>

      <h1 style={{
        fontSize: 'var(--ref-font-size-5xl)',
        fontWeight: 'var(--ref-font-weight-bold)',
        color: 'var(--sem-color-text-heading)',
        marginBottom: 'var(--ref-spacing-6)',
        lineHeight: 'var(--ref-font-lineHeight-tight)',
      }}>
        Your Arctic Escape Awaits
      </h1>
      
      <p style={{
        fontSize: 'var(--ref-font-size-xl)',
        color: 'var(--sem-color-text-body-dark)',
        marginBottom: 'var(--ref-spacing-10)',
        lineHeight: 'var(--ref-font-lineHeight-relaxed)',
        opacity: 0.9,
      }}>
        Immerse yourself in the pristine beauty of Levi. Our glass igloos offer unparalleled views of the Northern Lights and arctic wilderness.
      </p>

      <div style={{
        display: 'flex',
        gap: 'var(--ref-spacing-4)',
        flexWrap: 'wrap',
      }}>
        <a 
          href="#accommodation"
          className="btn-primary"
        >
          View Accommodation
        </a>
        <a 
          href="/contact"
          className="btn-secondary"
        >
          Contact Us
        </a>
      </div>
    </>
  );
}

