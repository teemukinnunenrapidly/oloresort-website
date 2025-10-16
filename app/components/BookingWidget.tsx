'use client';

import { useEffect } from 'react';

export default function BookingWidget() {
  useEffect(() => {
    // Set up Moder settings
    (window as any).ModerSettings = {
      property: 'olo-resort',
      roomTypeId: 1624,
      language: 'en'
    };

    // Load the Moder booking widget script
    const script = document.createElement('script');
    script.src = 'https://moder-embeds-dev.s3.eu-north-1.amazonaws.com/bundle.js';
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
      delete (window as any).ModerSettings;
    };
  }, []);

  return (
    <div 
      id="moder-embed" 
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    />
  );
}

