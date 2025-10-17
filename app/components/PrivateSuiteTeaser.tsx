'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Home, Wifi, Coffee } from 'lucide-react';

const PrivateSuiteTeaser = () => {
  const cloudinaryBaseUrl = "https://res.cloudinary.com/dpdua7dgn/image/upload";
  
  // Using actual Cloudinary image - replace with better suite images when available
  const heroImage = `${cloudinaryBaseUrl}/f_auto,q_auto,c_fill,w_1200,h_800,g_center/oloresortkevät-1-high_wduoif`;
  const thumbnail1 = `${cloudinaryBaseUrl}/f_auto,q_auto,c_fill,w_400,h_300,g_center/oloresortkevät-1-high_wduoif`;
  const thumbnail2 = `${cloudinaryBaseUrl}/f_auto,q_auto,c_fill,w_400,h_300,g_center/oloresortkevät-1-high_wduoif`;

  const highlights = [
    {
      icon: Sparkles,
      title: "Glass Ceiling",
      description: "Northern lights from your bed"
    },
    {
      icon: Home,
      title: "65m² Space",
      description: "Luxurious and spacious"
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "Everything you need"
    },
    {
      icon: Coffee,
      title: "Full Kitchen",
      description: "Cook like at home"
    }
  ];

  return (
    <section 
      style={{ 
        padding: 'var(--ref-spacing-24) var(--ref-spacing-16)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_center/LRT_00127_vjuso2")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      {/* Dark overlay filter */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      
      {/* Glassmorphism overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />
      
      {/* Subtle background pattern - warm light effect */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse at center, rgba(232, 225, 212, 0.02) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      
      {/* Glass overlay for depth */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.05) 0%, rgba(30, 30, 30, 0.02) 50%, rgba(30, 30, 30, 0.05) 100%)',
          backdropFilter: 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container max-w-7xl mx-auto relative" style={{ zIndex: 3 }}>
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
          <p 
            style={{
              fontSize: 'var(--ref-font-size-sm)',
              color: 'var(--sem-color-primary-base)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--ref-letter-spacing-wider)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              marginBottom: 'var(--ref-spacing-4)'
            }}
          >
            Exclusive Accommodation
          </p>
          <h2 
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: 'var(--sem-color-primary-base)',
              marginBottom: 'var(--ref-spacing-8)',
              fontWeight: '700',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.02em',
              lineHeight: 1.1,
              position: 'relative',
              display: 'inline-block',
              textShadow: '2px 2px 16px rgba(0, 0, 0, 0.5)',
            }}
          >
            Private Suite
          </h2>
          <p 
            style={{
              fontSize: 'var(--ref-font-size-xl)',
              color: '#E8E1D4',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8,
              fontFamily: 'Lato, sans-serif',
              fontWeight: '400',
              opacity: 0.95,
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)'
            }}
          >
            Experience the magic of Lapland in our luxurious glass igloo suite with panoramic views
          </p>
        </div>

        {/* Main Content Grid */}
        <div 
          className="suite-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'var(--ref-spacing-8)',
            marginBottom: 'var(--ref-spacing-16)'
          }}
        >
          {/* Hero Image */}
          <div 
            className="hero-image-container"
            style={{
              gridColumn: 'span 8',
              position: 'relative',
              height: '600px',
              borderRadius: 'var(--ref-radius-2xl)',
              overflow: 'hidden',
              boxShadow: 'var(--ref-shadow-lg)'
            }}
          >
            <Image
              src={heroImage}
              alt="Private Suite interior with glass ceiling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            
            {/* Overlay Badge */}
            <div 
              style={{
                position: 'absolute',
                top: 'var(--ref-spacing-8)',
                left: 'var(--ref-spacing-8)',
                background: 'rgba(200, 164, 106, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: 'var(--ref-spacing-4) var(--ref-spacing-6)',
                borderRadius: 'var(--ref-radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--ref-spacing-2)'
              }}
            >
              <Sparkles size={16} color="#ffffff" />
              <span 
                style={{
                  color: '#ffffff',
                  fontSize: 'var(--ref-font-size-sm)',
                  fontWeight: 'var(--ref-font-weight-semibold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Premium Experience
              </span>
            </div>
          </div>

          {/* Side Content */}
          <div 
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--ref-spacing-6)'
            }}
          >
            {/* Thumbnail 1 */}
            <div 
              style={{
                position: 'relative',
                height: '280px',
                borderRadius: 'var(--ref-radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--ref-shadow-md)',
                transition: 'all var(--ref-duration-slower)'
              }}
            >
              <Image
                src={thumbnail1}
                alt="Private Suite amenities"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Thumbnail 2 */}
            <div 
              style={{
                position: 'relative',
                height: '280px',
                borderRadius: 'var(--ref-radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--ref-shadow-md)',
                transition: 'all var(--ref-duration-slower)'
              }}
            >
              <Image
                src={thumbnail2}
                alt="Private Suite views"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div 
          className="highlights-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--ref-spacing-8)',
            marginBottom: 'var(--ref-spacing-16)'
          }}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                style={{
                background: 'rgba(232, 225, 212, 0.05)',
                border: '1px solid rgba(232, 225, 212, 0.15)',
                borderRadius: 'var(--ref-radius-xl)',
                padding: 'var(--ref-spacing-10)',
                transition: 'all var(--ref-duration-slower) ease-in-out',
                cursor: 'default'
                }}
                className="highlight-card"
              >
                <div 
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'rgba(200, 164, 106, 0.1)',
                    borderRadius: 'var(--ref-radius-xl)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--ref-spacing-8)',
                    transition: 'all var(--ref-duration-slower)'
                  }}
                >
                  <Icon size={24} color="#C8A46A" />
                </div>
                <h3 
                  style={{
                    color: 'var(--sem-color-primary-base)',
                    fontSize: 'var(--ref-font-size-xl)',
                    fontWeight: '600',
                    fontFamily: 'Montserrat, sans-serif',
                    marginBottom: 'var(--ref-spacing-3)',
                    letterSpacing: '0.01em'
                  }}
                >
                  {highlight.title}
                </h3>
                <p 
                  style={{
                    color: '#E8E1D4',
                    fontSize: 'var(--ref-font-size-base)',
                    fontFamily: 'Lato, sans-serif',
                    lineHeight: 1.7,
                    opacity: 0.85
                  }}
                >
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div 
          style={{
            textAlign: 'center',
            padding: 'var(--ref-spacing-16) var(--ref-spacing-12)',
            background: 'rgba(232, 225, 212, 0.03)',
            borderRadius: 'var(--ref-radius-3xl)',
            border: '1px solid rgba(232, 225, 212, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <p 
            style={{
              fontSize: 'var(--ref-font-size-lg)',
              color: '#E8E1D4',
              marginBottom: 'var(--ref-spacing-10)',
              maxWidth: '600px',
              margin: '0 auto var(--ref-spacing-10)',
              fontFamily: 'Lato, sans-serif',
              lineHeight: 1.8,
              opacity: 0.9
            }}
          >
            Discover more about our Private Suite with detailed photos, amenities, and booking information
          </p>
          <Link
            href="/accommodation#suite"
            className="suite-cta-button"
            style={{
              display: 'inline-block',
              background: '#C8A46A',
              color: '#FFFFFF',
              padding: 'var(--ref-spacing-5) var(--ref-spacing-16)',
              borderRadius: 'var(--ref-radius-full)',
              fontSize: 'var(--ref-font-size-base)',
              fontWeight: '600',
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none',
              transition: 'all var(--ref-duration-slower) ease-in-out',
              boxShadow: 'var(--ref-shadow-md)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
          >
            Explore Private Suite
          </Link>
        </div>
      </div>

      {/* Gold accent glass effects */}
      <div className="glass-accent-gold" style={{ top: '20%', left: '5%' }} />
      <div className="glass-accent-gold" style={{ bottom: '30%', right: '8%', animationDelay: '10s' }} />
      
      {/* Glass transition bottom - smooth blend to CTA */}
      <div className="glass-transition-dark-bottom" />

      <style jsx>{`
        .highlight-card:hover {
          background: rgba(232, 225, 212, 0.08) !important;
          border-color: rgba(200, 164, 106, 0.2) !important;
          transform: translateY(-2px);
          box-shadow: var(--ref-shadow-lg);
        }
        
        .highlight-card:hover > div:first-child {
          background: rgba(200, 164, 106, 0.15) !important;
        }

        .suite-cta-button:hover {
          background: #B8945A !important;
          transform: translateY(-1px);
          box-shadow: var(--ref-shadow-lg) !important;
        }

        @media (max-width: 1024px) {
          .suite-grid {
            grid-template-columns: 1fr !important;
          }

          .hero-image-container,
          .hero-image-container + div {
            grid-column: span 1 !important;
          }

          .hero-image-container {
            height: 400px !important;
          }

          .hero-image-container + div > div {
            height: 200px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-image-container {
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PrivateSuiteTeaser;

