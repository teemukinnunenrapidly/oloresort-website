'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

export default function HeroVideo() {
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
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark overlay for better text readability */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />
      
      {/* Video container with responsive behavior */}
      <div 
        className="absolute inset-0"
        style={{
          // Desktop: contain video to show full height
          // Mobile: cover to fill screen
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000', // Black background for letterboxing
        }}
      >
        {videoId ? (
          <div
            style={{
              position: 'relative',
              width: isMobile ? '100%' : 'auto',
              height: isMobile ? '100%' : '100%',
              maxWidth: isMobile ? 'none' : '177.78vh', // 16:9 aspect ratio of height
              aspectRatio: isMobile ? 'auto' : '9/16', // Portrait aspect ratio
            }}
          >
            <Stream
              controls={false}
              src={videoId}
              autoplay
              muted
              loop
              preload="auto"
              poster=""
              primaryColor="#bd984b"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                objectFit: isMobile ? 'cover' : 'contain',
              }}
            />
          </div>
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center" 
            style={{
              background: 'linear-gradient(135deg, var(--ref-color-brand-blue-500), var(--ref-color-brand-gold-500))',
              color: 'var(--ref-color-neutral-0)',
              fontSize: 'var(--ref-font-size-3xl)',
              fontWeight: 'var(--ref-font-weight-semibold)'
            }}
          >
            Cloudflare Stream Video
          </div>
        )}
      </div>
      
      {/* Optional: Side panels for desktop to fill empty space */}
      {!isMobile && (
        <>
          <div 
            className="absolute top-0 left-0 bottom-0 z-5"
            style={{
              width: '30%',
              background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
              pointerEvents: 'none',
            }}
          />
          <div 
            className="absolute top-0 right-0 bottom-0 z-5"
            style={{
              width: '30%',
              background: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
              pointerEvents: 'none',
            }}
          />
        </>
      )}
    </div>
  );
}

