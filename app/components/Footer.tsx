import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: 'var(--comp-footer-background)',
        color: 'var(--comp-footer-text-base)',
        padding: 'var(--comp-footer-padding) 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-[var(--ref-spacing-4)] sm:px-[var(--ref-spacing-6)] lg:px-[var(--ref-spacing-8)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--ref-spacing-8)]">
          {/* Contact Information */}
          <div>
            <h3 
              style={{
                fontSize: 'var(--ref-font-size-lg)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                marginBottom: 'var(--ref-spacing-4)',
                color: 'var(--comp-footer-text-base)',
              }}
            >
              OloResort
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ref-spacing-2)' }}>
              <p style={{ color: 'var(--comp-footer-text-base)', opacity: '0.9' }}>
                Taalontie 46<br />
                99130 Sirkka<br />
                Finland
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ref-spacing-2)' }}>
                <Mail size={16} />
                <a 
                  href="mailto:levi@oloresort.fi"
                  className="footer-link"
                  style={{
                    color: 'var(--comp-footer-text-link-base)',
                    transition: 'color var(--ref-duration-base)',
                  }}
                >
                  levi@oloresort.fi
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ref-spacing-2)' }}>
                <Phone size={16} />
                <span style={{ opacity: '0.9' }}>+358 44 901 4162 Sales</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ref-spacing-2)' }}>
                <Phone size={16} />
                <span style={{ opacity: '0.9' }}>+358 44 901 4164 Reception</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              style={{
                fontSize: 'var(--ref-font-size-lg)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                marginBottom: 'var(--ref-spacing-4)',
                color: 'var(--comp-footer-text-base)',
              }}
            >
              Quick Links
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ref-spacing-2)' }}>
              {[
                { href: '/accommodation', label: 'Accommodation' },
                { href: '/activities', label: 'Activities' },
                { href: '/travel-itineraries', label: 'Travel Itineraries' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="footer-link"
                    style={{
                      color: 'var(--comp-footer-text-link-base)',
                      transition: 'color var(--ref-duration-base)',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 
              style={{
                fontSize: 'var(--ref-font-size-lg)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                marginBottom: 'var(--ref-spacing-4)',
                color: 'var(--comp-footer-text-base)',
              }}
            >
              Legal
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ref-spacing-2)' }}>
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/contact', label: 'Contact Information' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="footer-link"
                    style={{
                      color: 'var(--comp-footer-text-link-base)',
                      transition: 'color var(--ref-duration-base)',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div 
          style={{
            borderTop: '1px solid var(--sem-color-border-dark)',
            marginTop: 'var(--ref-spacing-8)',
            paddingTop: 'var(--ref-spacing-8)',
            textAlign: 'center',
            color: 'var(--sem-color-text-muted)',
            opacity: '0.8',
          }}
        >
          <p>&copy; OloResort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
