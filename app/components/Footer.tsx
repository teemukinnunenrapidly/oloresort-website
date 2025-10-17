'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: '#1E1E1E',
        color: '#E8E1D4',
        paddingTop: 'var(--ref-spacing-24)',
        paddingBottom: 'var(--ref-spacing-16)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle golden gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 70% 50%, rgba(200, 164, 106, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
      
      {/* Decorative top border with golden accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #C8A46A 50%, transparent 100%)',
          opacity: 0.5,
        }}
      />
      <div className="max-w-7xl mx-auto px-[var(--ref-spacing-4)] sm:px-[var(--ref-spacing-6)] lg:px-[var(--ref-spacing-8)] relative z-10">
        {/* Logo and Brand Section */}
        <div style={{ marginBottom: 'var(--ref-spacing-16)', textAlign: 'center' }}>
          <Image
            src="/images/oloresort-logo.png"
            alt="Olo Resort"
            width={200}
            height={100}
            style={{
              height: 'auto',
              width: '200px',
              margin: '0 auto',
              filter: 'brightness(1.1)',
            }}
          />
          <p 
            style={{
              marginTop: 'var(--ref-spacing-6)',
              fontSize: 'var(--ref-font-size-lg)',
              color: '#E8E1D4',
              opacity: 0.9,
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0.02em',
              maxWidth: '600px',
              margin: 'var(--ref-spacing-6) auto 0',
              lineHeight: 1.8,
            }}
          >
            Experience the enchanting nature of Lapland from our luxurious glass igloos
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--ref-spacing-12)] mb-[var(--ref-spacing-16)]">
          {/* Contact Information */}
          <div>
            <h3 
              style={{
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: '600',
                marginBottom: 'var(--ref-spacing-6)',
                color: '#C8A46A',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ref-spacing-4)' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--ref-spacing-3)' }}>
                <MapPin size={16} style={{ color: '#C8A46A', marginTop: '2px', flexShrink: 0 }} />
                <p style={{ color: '#E8E1D4', opacity: 0.85, fontSize: 'var(--ref-font-size-sm)', lineHeight: 1.6 }}>
                  Taalontie 46<br />
                  99130 Sirkka<br />
                  Finland
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ref-spacing-3)' }}>
                <Mail size={16} style={{ color: '#C8A46A', flexShrink: 0 }} />
                <a 
                  href="mailto:levi@oloresort.fi"
                  style={{
                    color: '#E8E1D4',
                    textDecoration: 'none',
                    opacity: 0.85,
                    fontSize: 'var(--ref-font-size-sm)',
                    transition: 'all var(--ref-duration-base)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C8A46A';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E8E1D4';
                    e.currentTarget.style.opacity = '0.85';
                  }}
                >
                  levi@oloresort.fi
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ref-spacing-3)' }}>
                <Phone size={16} style={{ color: '#C8A46A', flexShrink: 0 }} />
                <span style={{ color: '#E8E1D4', opacity: 0.85, fontSize: 'var(--ref-font-size-sm)' }}>+358 44 901 4162</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 
              style={{
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: '600',
                marginBottom: 'var(--ref-spacing-6)',
                color: '#C8A46A',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Explore
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ref-spacing-3)' }}>
              {[
                { href: '/accommodation', label: 'Glass Igloos', key: 'glass-igloos' },
                { href: '/activities', label: 'Winter Activities', key: 'winter-activities' },
                { href: '/travel-itineraries', label: 'Northern Lights', key: 'northern-lights' },
                { href: '/accommodation', label: 'Private Suite', key: 'private-suite' },
              ].map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href}
                    style={{
                      color: '#E8E1D4',
                      textDecoration: 'none',
                      opacity: 0.85,
                      fontSize: 'var(--ref-font-size-sm)',
                      transition: 'all var(--ref-duration-base)',
                      display: 'inline-block',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#C8A46A';
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#E8E1D4';
                      e.currentTarget.style.opacity = '0.85';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 
              style={{
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: '600',
                marginBottom: 'var(--ref-spacing-6)',
                color: '#C8A46A',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Experience
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ref-spacing-3)' }}>
              {[
                { href: '/activities', label: 'Snowmobile Safaris', key: 'snowmobile-safaris' },
                { href: '/activities', label: 'Husky Adventures', key: 'husky-adventures' },
                { href: '/activities', label: 'Reindeer Visits', key: 'reindeer-visits' },
                { href: '/blog', label: 'Local Culture', key: 'local-culture' },
              ].map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href}
                    style={{
                      color: '#E8E1D4',
                      textDecoration: 'none',
                      opacity: 0.85,
                      fontSize: 'var(--ref-font-size-sm)',
                      transition: 'all var(--ref-duration-base)',
                      display: 'inline-block',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#C8A46A';
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#E8E1D4';
                      e.currentTarget.style.opacity = '0.85';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 
              style={{
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: '600',
                marginBottom: 'var(--ref-spacing-6)',
                color: '#C8A46A',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Connect
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ref-spacing-4)' }}>
              {/* Social Media */}
              <div style={{ display: 'flex', gap: 'var(--ref-spacing-3)' }}>
                <a
                  href="https://instagram.com/oloresort"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(200, 164, 106, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all var(--ref-duration-base)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(200, 164, 106, 0.1)';
                    e.currentTarget.style.borderColor = '#C8A46A';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(200, 164, 106, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Instagram size={18} style={{ color: '#C8A46A' }} />
                </a>
                <a
                  href="https://facebook.com/oloresort"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(200, 164, 106, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all var(--ref-duration-base)',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(200, 164, 106, 0.1)';
                    e.currentTarget.style.borderColor = '#C8A46A';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(200, 164, 106, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Facebook size={18} style={{ color: '#C8A46A' }} />
                </a>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          style={{
            borderTop: '1px solid rgba(200, 164, 106, 0.15)',
            marginTop: 'var(--ref-spacing-16)',
            paddingTop: 'var(--ref-spacing-12)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--ref-spacing-6)',
          }}
        >
          <div style={{ 
            display: 'flex', 
            gap: 'var(--ref-spacing-6)', 
            flexWrap: 'wrap',
            fontSize: 'var(--ref-font-size-sm)',
          }}>
            <p style={{ color: '#E8E1D4', opacity: 0.7 }}>
              &copy; {new Date().getFullYear()} Olo Resort. All rights reserved.
            </p>
            <Link 
              href="/privacy-policy"
              style={{
                color: '#E8E1D4',
                opacity: 0.7,
                textDecoration: 'none',
                transition: 'all var(--ref-duration-base)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C8A46A';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#E8E1D4';
                e.currentTarget.style.opacity = '0.7';
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms"
              style={{
                color: '#E8E1D4',
                opacity: 0.7,
                textDecoration: 'none',
                transition: 'all var(--ref-duration-base)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C8A46A';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#E8E1D4';
                e.currentTarget.style.opacity = '0.7';
              }}
            >
              Terms of Service
            </Link>
          </div>
          
          {/* Golden accent dot */}
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#C8A46A',
              opacity: 0.6,
            }}
          />
        </div>
      </div>
    </footer>
  );
}
