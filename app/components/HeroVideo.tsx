'use client';

import { Stream } from "@cloudflare/stream-react";

export default function HeroVideo() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;

  return (
    <div className="absolute inset-0 z-0">
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
          }}
        />
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
      <div className="absolute inset-0 video-overlay"></div>
    </div>
  );
}

