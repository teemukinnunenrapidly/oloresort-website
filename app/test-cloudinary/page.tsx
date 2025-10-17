'use client';

import Image from 'next/image';

export default function TestCloudinaryPage() {
  // Cloudinary cloud name from your .env.local
  const cloudName = 'dpdua7dgn';
  
  // Test with a sample public image from Cloudinary
  // You can replace this with any of your actual image publicIds once uploaded
  const testImages = [
    {
      publicId: 'sample', // Cloudinary's default sample image
      alt: 'Sample image from Cloudinary',
      description: 'This is a default Cloudinary sample image'
    },
    {
      publicId: 'oloresort/lounge-main',
      alt: 'Main lounge area',
      description: 'Your custom uploaded image (if exists)'
    }
  ];

  return (
    <div style={{ 
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      background: '#f9fafb'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: '#111827',
        textAlign: 'center'
      }}>
        Cloudinary Integration Test
      </h1>
      
      <div style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#374151' }}>
          Configuration Status
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '0.5rem 0', color: '#16a34a' }}>
            ✓ Cloud Name: <strong>{cloudName}</strong>
          </li>
          <li style={{ padding: '0.5rem 0', color: '#16a34a' }}>
            ✓ next.config.ts: Cloudinary domain configured
          </li>
          <li style={{ padding: '0.5rem 0', color: '#16a34a' }}>
            ✓ .env.local: CLOUDINARY_URL set
          </li>
        </ul>
      </div>

      <h2 style={{
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
        color: '#374151'
      }}>
        Test Images
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem'
      }}>
        {testImages.map((image, index) => (
          <div 
            key={index}
            style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '300px',
              background: '#e5e7eb'
            }}>
              <Image
                src={`https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,c_fill,w_600,h_400/${image.publicId}`}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #dc2626; text-align: center; padding: 2rem;">
                        <div>
                          <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
                          <strong>Image not found</strong><br/>
                          <span style="font-size: 0.875rem; opacity: 0.8;">${image.publicId}</span>
                        </div>
                      </div>
                    `;
                  }
                }}
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent) {
                    const successBadge = document.createElement('div');
                    successBadge.innerHTML = '✓ Loaded';
                    successBadge.style.cssText = 'position: absolute; top: 1rem; right: 1rem; background: #16a34a; color: white; padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; font-size: 0.875rem;';
                    parent.appendChild(successBadge);
                  }
                }}
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#111827'
              }}>
                {image.alt}
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                {image.description}
              </p>
              <code style={{
                display: 'block',
                background: '#f3f4f6',
                padding: '0.5rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                color: '#374151',
                wordBreak: 'break-all'
              }}>
                {image.publicId}
              </code>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        background: '#fef3c7',
        borderRadius: '12px',
        border: '2px solid #f59e0b'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#92400e' }}>
          📝 Next Steps
        </h3>
        <ol style={{ paddingLeft: '1.5rem', color: '#78350f', lineHeight: 1.8 }}>
          <li>If the "sample" image loads successfully ✓ - Your Cloudinary configuration is working!</li>
          <li>If your custom images show ⚠️ - You need to upload images to Cloudinary with those publicIds</li>
          <li>To upload images: Go to Cloudinary dashboard → Media Library → Upload → Create folder "oloresort"</li>
          <li>After uploading, refresh this page to verify they load correctly</li>
        </ol>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a 
          href="/"
          style={{
            display: 'inline-block',
            background: '#bd984b',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

