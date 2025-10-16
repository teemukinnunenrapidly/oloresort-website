'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all ${
        isScrolled ? 'shadow-md' : ''
      }`}
      style={{
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(24, 18, 18, 0.95)' : 'rgba(24, 18, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        transition: 'all var(--ref-duration-slow)',
        fontFamily: 'var(--ref-font-family-display)',
      }}
    >
      <nav 
        className="max-w-7xl mx-auto flex items-center justify-between"
        style={{
          padding: 'var(--ref-spacing-4) var(--ref-spacing-8)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="nav-logo"
          style={{
            fontSize: 'var(--ref-font-size-3xl)',
            fontWeight: 'var(--ref-font-weight-bold)',
            color: 'var(--sem-color-primary-base)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            transition: 'all var(--ref-duration-base)',
          }}
        >
          OloResort
        </Link>

        {/* Desktop Navigation */}
        <ul 
          className="hidden lg:flex items-center"
          style={{
            gap: 'var(--ref-spacing-8)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {navigationLinks.map((link) => (
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

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:inline-block nav-book-button"
          style={{
            background: 'var(--sem-color-primary-base)',
            color: 'var(--ref-color-neutral-0)',
            padding: 'var(--ref-spacing-3) var(--ref-spacing-8)',
            borderRadius: 'var(--ref-radius-full)',
            textDecoration: 'none',
            fontWeight: 'var(--ref-font-weight-semibold)',
            transition: 'all var(--ref-duration-base)',
            boxShadow: '0 4px 15px rgba(189, 152, 75, 0.3)',
          }}
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden"
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
          maxHeight: 'calc(100vh - 4rem)',
          boxShadow: isMobileMenuOpen ? 'var(--ref-shadow-lg)' : 'none',
          transition: 'all var(--ref-duration-slow)',
        }}
      >
        <nav style={{ padding: 'var(--ref-spacing-6) var(--ref-spacing-4)' }}>
          <ul style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--ref-spacing-4)',
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
