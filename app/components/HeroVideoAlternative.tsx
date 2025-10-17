'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

// VAIHTOEHTO 2: Split-screen ratkaisu desktopille
export default function HeroVideoAlternative() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 z-0 bg-transparent">
        <div className="absolute inset-0 bg-transparent" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-30">
      {/* Mobile: Full screen video */}
      {isMobile ? (
        <div className="absolute inset-0">
          {videoId ? (
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
                objectFit: 'cover',
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-gold-500" />
          )}
          <div className="absolute inset-0 bg-transparent" />
        </div>
      ) : (
        /* Desktop: Video positioned using golden ratio */
        <div className="relative h-full" style={{ backgroundColor: 'transparent' }}>
          {/* Subtle gradient background */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 75% 50%, rgba(200, 164, 106, 0.05) 0%, transparent 50%)',
          }} />
          {/* Video positioned at golden ratio point (61.8% from left) */}
          <div 
            className="absolute rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: '750px',
              height: '750px',
              left: '70%',
              top: '50%',
              transform: 'translate(-50%, -50%) perspective(1200px) rotateY(-3deg) rotateX(1deg)',
              transformOrigin: 'center center',
              border: '3px solid rgba(189, 153, 74, 0.3)',
              boxShadow: `
                0 0 0 1px rgba(189, 153, 74, 0.1),
                0 25px 50px -12px rgba(0, 0, 0, 0.4),
                0 0 100px rgba(189, 153, 74, 0.1)
              `,
              transition: 'all 0.3s ease',
            }}
          >
            {videoId ? (
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
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  height: '100%',
                  width: 'auto',
                  minWidth: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-gold-500" />
            )}
            
            {/* Warm gradient overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(200, 164, 106, 0.1) 50%, rgba(232, 225, 212, 0.15) 100%)',
              }}
            />
            
            {/* Decorative corner accents */}
            <div 
              className="absolute top-4 right-4 w-6 h-6 pointer-events-none"
              style={{
                borderTop: '2px solid rgba(189, 153, 74, 0.4)',
                borderRight: '2px solid rgba(189, 153, 74, 0.4)',
                borderRadius: '0 0.75rem 0 0',
              }}
            />
            <div 
              className="absolute bottom-4 left-4 w-6 h-6 pointer-events-none"
              style={{
                borderBottom: '2px solid rgba(189, 153, 74, 0.4)',
                borderLeft: '2px solid rgba(189, 153, 74, 0.4)',
                borderRadius: '0 0 0 0.75rem',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
