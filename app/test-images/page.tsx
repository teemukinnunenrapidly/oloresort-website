'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function TestImagesPage() {
  const cloudName = 'dpdua7dgn';
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  // Test with actual public IDs from your Cloudinary account
  const testImages = [
    {
      name: 'Sample (Cloudinary default)',
      publicId: 'sample',
      description: 'This should always work - Cloudinary default image'
    },
    {
      name: 'oloresortkevät-1-high_wduoif',
      publicId: 'oloresortkevät-1-high_wduoif',
      description: 'Real Olo Resort image (provided by user)'
    },
    {
      name: 'Test: suite-bedroom',
      publicId: 'suite-bedroom',
      description: 'Without any folder prefix'
    },
    {
      name: 'Test: oloresort-suite',
      publicId: 'oloresort-suite',
      description: 'Test alternate naming'
    },
    {
      name: 'Test: PrivateSuiteGallery/image',
      publicId: 'PrivateSuiteGallery/image',
      description: 'Test with folder prefix'
    },
    {
      name: 'Test: lounge-main',
      publicId: 'lounge-main',
      description: 'Test lounge image'
    }
  ];

  const [results, setResults] = useState<Record<string, 'loading' | 'success' | 'error'>>({});

  return (
    <div style={{ 
      padding: '4rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      background: '#f9fafb'
    }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#111827',
        }}>
          Cloudinary Image Test
        </h1>
        <div style={{
          background: '#dbeafe',
          padding: '1.5rem',
          borderRadius: '8px',
          borderLeft: '4px solid #3b82f6',
          marginBottom: '2rem'
        }}>
          <p style={{ color: '#1e3a8a', fontWeight: '600', marginBottom: '0.5rem' }}>
            Cloud Name: <code style={{ background: '#fff', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{cloudName}</code>
          </p>
          <p style={{ color: '#1e40af', fontSize: '0.875rem' }}>
            Testing different image paths to find the correct folder structure.
            Green checkmark = image loaded successfully.
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {testImages.map((image, index) => {
          const imageUrl = `${baseUrl}/f_auto,q_auto,c_fill,w_600,h_400,g_center/${image.publicId}`;
          const status = results[image.publicId] || 'loading';
          
          return (
            <div 
              key={index}
              style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: status === 'success' ? '3px solid #10b981' : 
                        status === 'error' ? '3px solid #ef4444' : 
                        '3px solid #e5e7eb'
              }}
            >
              {/* Status Badge */}
              <div style={{
                padding: '0.75rem 1rem',
                background: status === 'success' ? '#d1fae5' : 
                           status === 'error' ? '#fee2e2' : '#f3f4f6',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: status === 'success' ? '#065f46' : 
                         status === 'error' ? '#991b1b' : '#374151'
                }}>
                  {image.name}
                </span>
                <span style={{ fontSize: '1.25rem' }}>
                  {status === 'success' ? '✅' : status === 'error' ? '❌' : '⏳'}
                </span>
              </div>

              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '250px',
                background: '#e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  src={imageUrl}
                  alt={image.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  onLoad={() => {
                    setResults(prev => ({ ...prev, [image.publicId]: 'success' }));
                  }}
                  onError={() => {
                    setResults(prev => ({ ...prev, [image.publicId]: 'error' }));
                  }}
                />
                {status === 'error' && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.8)',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '2rem',
                    fontSize: '0.875rem'
                  }}>
                    <div>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚠️</div>
                      <strong>Image Not Found</strong>
                      <div style={{ marginTop: '0.5rem', opacity: 0.8 }}>
                        This path doesn&apos;t exist in Cloudinary
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div style={{ padding: '1rem' }}>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#6b7280',
                  marginBottom: '0.5rem' 
                }}>
                  {image.description}
                </p>
                <code style={{
                  display: 'block',
                  background: '#f3f4f6',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  color: '#374151',
                  wordBreak: 'break-all',
                  fontFamily: 'monospace'
                }}>
                  {image.publicId}
                </code>
              </div>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>
          📌 How to Fix Missing Images
        </h2>
        <ol style={{ paddingLeft: '1.5rem', color: '#374151', lineHeight: 2 }}>
          <li>Check which paths show ✅ (green checkmark) - these are the working paths</li>
          <li>
            If no images work except &quot;sample&quot;:
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li>Log into Cloudinary: <a href="https://cloudinary.com/console" target="_blank" style={{ color: '#3b82f6' }}>cloudinary.com/console</a></li>
              <li>Go to Media Library</li>
              <li>Upload images to the correct folder structure (e.g., &quot;oloresort/&quot;)</li>
              <li>Make sure filenames match exactly (case-sensitive)</li>
            </ul>
          </li>
          <li>If some paths work, update your code to use the working path format</li>
          <li>Refresh this page after uploading to verify</li>
        </ol>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a 
          href="/"
          style={{
            display: 'inline-block',
            background: '#C8A46A',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

