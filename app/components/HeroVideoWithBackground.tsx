'use client';

import { Stream } from "@cloudflare/stream-react";

// VAIHTOEHTO 3: Taustakuva + pienempi video desktopilla
export default function HeroVideoWithBackground() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;

  return (
    <div className="absolute inset-0 z-0">
      {/* Desktop background image */}
      <div 
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto/v1/oloresort/hero-background-desktop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Fallback gradient if image doesn't load
          background: `
            linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(200,164,106,0.2) 100%),
            url('https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto/v1/oloresort/hero-background-desktop')
          `,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Smaller video window on desktop */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-96 h-[540px] rounded-2xl overflow-hidden shadow-2xl">
          {videoId && (
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
          )}
          {/* Golden border glow */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              border: '2px solid rgba(200, 164, 106, 0.5)',
              borderRadius: 'inherit',
              boxShadow: '0 0 50px rgba(200, 164, 106, 0.3)',
            }}
          />
        </div>
      </div>

      {/* Mobile: Full screen video (unchanged) */}
      <div className="md:hidden absolute inset-0">
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
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, var(--ref-color-brand-blue-500), var(--ref-color-brand-gold-500))',
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
}
