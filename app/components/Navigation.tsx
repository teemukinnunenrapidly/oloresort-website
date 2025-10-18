'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import WeatherWidget from './WeatherWidget';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    { label: 'Accommodation', href: '/accommodation' },
    { label: 'Activities', href: '/activities' },
    { label: 'Travel Itineraries', href: '/travel-itineraries' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    ...(process.env.NODE_ENV === 'development' ? [{ label: '🎨 Showcase', href: '/showcase' }] : []),
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all ${
        isScrolled ? 'scrolled-header' : ''
      }`}
      style={{
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(30, 30, 30, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px) saturate(1.2)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(1.2)' : 'none',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: 'var(--ref-font-family-display)',
        borderBottom: isScrolled ? '1px solid rgba(200, 164, 106, 0.15)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 8px 32px -8px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(200, 164, 106, 0.05)' : 'none',
      }}
    >
      {/* Secondary Menu - Visible only at top */}
      <div 
        className="hidden lg:block secondary-menu"
        style={{
          opacity: isScrolled ? 0 : 1,
          transform: isScrolled ? 'translateY(-120%) scale(0.95)' : 'translateY(0) scale(1)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          height: isScrolled ? '0px' : '32px',
          overflow: 'hidden',
          pointerEvents: isScrolled ? 'none' : 'auto',
        }}
      >
        <div 
          className="max-w-7xl mx-auto"
          style={{
            padding: 'var(--ref-spacing-1) var(--ref-spacing-8)',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <WeatherWidget />
        </div>
      </div>
      <nav 
        className="max-w-7xl mx-auto main-nav"
        style={{
          padding: isScrolled 
            ? 'var(--ref-spacing-3) var(--ref-spacing-8)' 
            : 'var(--ref-spacing-4) var(--ref-spacing-8)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'transparent',
          position: 'relative',
          transition: 'padding 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Left Section - Desktop Navigation */}
        <ul 
          className="hidden lg:flex items-center justify-start"
          style={{
            gap: 'var(--ref-spacing-6)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flex: '0 0 auto',
          }}
        >
          {navigationLinks.slice(0, 3).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link"
                style={{
                  color: 'var(--sem-color-text-body-light)',
                  textDecoration: 'none',
                  fontSize: 'var(--ref-font-size-base)',
                  fontWeight: 'var(--ref-font-weight-medium)',
                  transition: 'all var(--ref-duration-base)',
                  position: 'relative',
                  padding: 'var(--ref-spacing-2) 0',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

          {/* Center Section - Logo */}
          <Link
            href="/"
            className="nav-logo"
            style={{
              textDecoration: 'none',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: '50%',
              top: isScrolled ? '50%' : '-10px',
              transform: isScrolled 
                ? 'translate(-50%, -50%) scale(0.7)' 
                : 'translateX(-50%) scale(0.85)',
              transformOrigin: 'center',
            }}
          >
            <Image
              src="/images/oloresort-logo-ilman-tekstia.png"
              alt="OloResort"
              width={220}
              height={110}
              className="logo-image"
              style={{
                height: 'auto',
                maxHeight: isScrolled ? '70px' : '90px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                filter: isScrolled ? 'brightness(1.1)' : 'brightness(1)',
              }}
              priority
            />
          </Link>

        {/* Right Section - Desktop Navigation & CTA */}
        <div 
          className="hidden lg:flex items-center justify-end"
          style={{
            gap: 'var(--ref-spacing-6)',
            flex: '0 0 auto',
          }}
        >
          <ul 
            style={{
              display: 'flex',
              gap: 'var(--ref-spacing-6)',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              alignItems: 'center',
            }}
          >
            {navigationLinks.slice(3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link"
                  style={{
                    color: 'var(--sem-color-text-body-light)',
                    textDecoration: 'none',
                    fontSize: 'var(--ref-font-size-base)',
                    fontWeight: 'var(--ref-font-weight-medium)',
                    transition: 'all var(--ref-duration-base)',
                    position: 'relative',
                    padding: 'var(--ref-spacing-2) 0',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <Link
            href="/contact"
            className="nav-book-button"
            style={{
              background: isScrolled 
                ? 'linear-gradient(135deg, #C8A46A 0%, #D4B07A 100%)' 
                : 'var(--sem-color-primary-base)',
              color: 'var(--ref-color-neutral-0)',
              padding: 'var(--ref-spacing-3) var(--ref-spacing-8)',
              borderRadius: 'var(--ref-radius-full)',
              textDecoration: 'none',
              fontWeight: 'var(--ref-font-weight-semibold)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isScrolled 
                ? '0 4px 20px rgba(200, 164, 106, 0.4)' 
                : '0 4px 15px rgba(189, 152, 75, 0.3)',
              whiteSpace: 'nowrap',
              transform: isScrolled ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden justify-self-end"
          style={{
            padding: 'var(--ref-spacing-2)',
            color: 'var(--sem-color-text-body-light)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'color var(--ref-duration-base)',
          }}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 transition-all ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{
          top: '64px',
          backgroundColor: 'rgba(24, 18, 18, 0.98)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          maxHeight: 'calc(100vh - 64px)',
          overflowY: 'auto',
          boxShadow: isMobileMenuOpen ? 'var(--ref-shadow-lg)' : 'none',
          transition: 'all var(--ref-duration-slow)',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <nav style={{ padding: 'var(--ref-spacing-6) var(--ref-spacing-4)', paddingBottom: 'var(--ref-spacing-12)' }}>
          <ul style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--ref-spacing-2)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: 'var(--ref-font-size-lg)',
                    fontWeight: 'var(--ref-font-weight-medium)',
                    color: 'var(--sem-color-text-body-light)',
                    padding: 'var(--ref-spacing-3) var(--ref-spacing-4)',
                    borderRadius: 'var(--ref-radius-lg)',
                    transition: 'all var(--ref-duration-base)',
                    textDecoration: 'none',
                  }}
                  className="mobile-nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile CTA Button */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: 'block',
              marginTop: 'var(--ref-spacing-6)',
              background: 'var(--sem-color-primary-base)',
              color: 'var(--ref-color-neutral-0)',
              textAlign: 'center',
              padding: 'var(--ref-spacing-4) var(--ref-spacing-6)',
              borderRadius: 'var(--ref-radius-full)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              fontSize: 'var(--ref-font-size-lg)',
              transition: 'all var(--ref-duration-base)',
              boxShadow: '0 4px 15px rgba(189, 152, 75, 0.3)',
              textDecoration: 'none',
            }}
          >
            Book Now
          </Link>

          {/* Weather Widget in Mobile Menu */}
          <div 
            style={{
              marginTop: 'var(--ref-spacing-6)',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <WeatherWidget />
          </div>

          {/* Contact Info in Mobile Menu */}
          <div 
            style={{
              marginTop: 'var(--ref-spacing-8)',
              paddingTop: 'var(--ref-spacing-6)',
              borderTop: '1px solid rgba(189, 152, 75, 0.2)',
            }}
          >
            <p 
              style={{
                color: 'var(--sem-color-text-body-light)',
                fontSize: 'var(--ref-font-size-base)',
                opacity: 0.9,
                marginBottom: 'var(--ref-spacing-2)',
              }}
            >
              Contact
            </p>
            <a
              href="tel:+358449014162"
              style={{
                display: 'block',
                color: 'var(--sem-color-primary-base)',
                fontSize: 'var(--ref-font-size-lg)',
                fontWeight: 'var(--ref-font-weight-medium)',
                transition: 'color var(--ref-duration-base)',
                marginBottom: 'var(--ref-spacing-1)',
                textDecoration: 'none',
              }}
            >
              +358 44 901 4162
            </a>
            <a
              href="mailto:levi@oloresort.fi"
              style={{
                display: 'block',
                color: 'var(--sem-color-primary-base)',
                fontSize: 'var(--ref-font-size-base)',
                transition: 'color var(--ref-duration-base)',
                textDecoration: 'none',
              }}
            >
              levi@oloresort.fi
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0"
          style={{
            backgroundColor: 'var(--sem-color-surface-overlay)',
            zIndex: -1,
          }}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
