'use client';

import { useState } from 'react';
import Link from 'next/link';

// Import components that can be showcased
import HeroVideo from '../components/HeroVideo';
import HeroVideoAlternative from '../components/HeroVideoAlternative';
import HeroVideoWithBackground from '../components/HeroVideoWithBackground';
import HeroVariant1 from '../components/HeroVariant1';
import HeroVariant2 from '../components/HeroVariant2';
import HeroVariant3 from '../components/HeroVariant3';
import HeroVariant4 from '../components/HeroVariant4';
import HeroVariant5 from '../components/HeroVariant5';
import HeroVariant6 from '../components/HeroVariant6';
import HeroVariant7 from '../components/HeroVariant7';
import HeroVariant8 from '../components/HeroVariant8';
import HeroVariant9 from '../components/HeroVariant9';
import HeroVariant10 from '../components/HeroVariant10';
import HeroVariant11 from '../components/HeroVariant11';
import HeroVariant12 from '../components/HeroVariant12';
import HeroVariant13 from '../components/HeroVariant13';
import HeroVariant14 from '../components/HeroVariant14';
import HeroVariant15 from '../components/HeroVariant15';
import ExperienceMasonry from '../components/ExperienceMasonry';
import PrivateSuiteTeaser from '../components/PrivateSuiteTeaser';
import PrivateSuiteSection from '../components/PrivateSuiteSection';
import LoungeSaunaSection from '../components/LoungeSaunaSection';
import WeatherWidget from '../components/WeatherWidget';

interface ShowcaseSection {
  id: string;
  title: string;
  description: string;
  variants: {
    id: string;
    name: string;
    component: React.ReactNode;
    notes?: string;
  }[];
}

const showcaseSections: ShowcaseSection[] = [
  {
    id: 'hero-videos',
    title: 'Hero Sections - Complete Layouts',
    description: 'Full hero sections combining content and video in different compositions',
    variants: [
      {
        id: 'hero-variant-1',
        name: 'V1: Classic Overlay',
        component: <HeroVariant1 />,
        notes: 'Full-screen video background with centered content overlay. Clean and bold.'
      },
      {
        id: 'hero-variant-2',
        name: 'V2: Split Screen',
        component: <HeroVariant2 />,
        notes: '50/50 split layout. Content left, video right on desktop. Mobile: overlay.'
      },
      {
        id: 'hero-variant-3',
        name: 'V3: Video Card',
        component: <HeroVariant3 />,
        notes: 'Content-focused with video in decorative card. Includes stats and features.'
      },
      {
        id: 'hero-variant-4',
        name: 'V4: Asymmetric Grid',
        component: <HeroVariant4 />,
        notes: 'Modern asymmetric layout with large video and overlapping content card.'
      },
      {
        id: 'hero-variant-5',
        name: 'V5: Minimal Centered',
        component: <HeroVariant5 />,
        notes: 'Minimalist approach with subtle background video and centered content.'
      },
      {
        id: 'hero-variant-6',
        name: 'V6: Cinematic Letterbox',
        component: <HeroVariant6 />,
        notes: 'Ultra-wide cinematic format with letterbox bars and side content panels.'
      },
      {
        id: 'hero-variant-7',
        name: 'V7: Collage Style',
        component: <HeroVariant7 />,
        notes: 'Collage layout with multiple small video elements and content cards.'
      },
      {
        id: 'hero-variant-8',
        name: 'V8: Magazine Style',
        component: <HeroVariant8 />,
        notes: 'Magazine-style layout with sidebar content and cover-style video.'
      },
      {
        id: 'hero-variant-9',
        name: 'V9: Interactive Parallax',
        component: <HeroVariant9 />,
        notes: 'Parallax scrolling effect with layered content moving at different speeds.'
      },
      {
        id: 'hero-variant-10',
        name: 'V10: Storytelling Sequence',
        component: <HeroVariant10 />,
        notes: 'Narrative approach with scroll-triggered story chapters and visual progression.'
      },
      {
        id: 'hero-variant-11',
        name: 'V11: Diagonal Split',
        component: <HeroVariant11 />,
        notes: 'Diagonal division between content and video with geometric accents.'
      },
      {
        id: 'hero-variant-12',
        name: 'V12: Frame Within Frame',
        component: <HeroVariant12 />,
        notes: 'Nested frames design with multiple layers and decorative corners.'
      },
      {
        id: 'hero-variant-13',
        name: 'V13: Floating Cards',
        component: <HeroVariant13 />,
        notes: '3D floating cards with mouse interaction and depth effects.'
      },
      {
        id: 'hero-variant-14',
        name: 'V14: Timeline Layout',
        component: <HeroVariant14 />,
        notes: 'Interactive timeline with alternating content and video sections.'
      },
      {
        id: 'hero-variant-15',
        name: 'V15: Geometric Mosaic',
        component: <HeroVariant15 />,
        notes: 'Complex geometric patterns with hexagons, diamonds, and various shapes.'
      }
    ]
  },
  {
    id: 'hero-videos-original',
    title: 'Hero Videos - Original Variants',
    description: 'Original hero video background components (video-only, no content)',
    variants: [
      {
        id: 'hero-original',
        name: 'Original Hero Video',
        component: <HeroVideo />,
        notes: 'Portrait video with side gradients. Background component only.'
      },
      {
        id: 'hero-alternative',
        name: 'Alternative Hero Video',
        component: <HeroVideoAlternative />,
        notes: '3D transformed video card at golden ratio position.'
      },
      {
        id: 'hero-background',
        name: 'Hero with Background',
        component: <HeroVideoWithBackground />,
        notes: 'Smaller video window on desktop with background image.'
      }
    ]
  },
  {
    id: 'suite-sections',
    title: 'Suite Showcase Variants',
    description: 'Different ways to showcase the Private Suite',
    variants: [
      {
        id: 'suite-teaser',
        name: 'Suite Teaser',
        component: <PrivateSuiteTeaser />,
        notes: 'Compact teaser version for homepage'
      },
      {
        id: 'suite-full',
        name: 'Full Suite Section',
        component: <PrivateSuiteSection />,
        notes: 'Complete suite showcase with all features'
      }
    ]
  },
  {
    id: 'lounge-sauna',
    title: 'Lounge & Sauna Section',
    description: 'Lounge and sauna area presentations',
    variants: [
      {
        id: 'lounge-default',
        name: 'Default Lounge & Sauna',
        component: <LoungeSaunaSection />,
        notes: 'Standard lounge and sauna section'
      }
    ]
  },
  {
    id: 'experiences',
    title: 'Experience Layouts',
    description: 'Different layouts for activity/experience galleries',
    variants: [
      {
        id: 'experience-masonry',
        name: 'Masonry Layout',
        component: <ExperienceMasonry />,
        notes: 'Pinterest-style masonry grid for experiences'
      }
    ]
  },
  {
    id: 'widgets',
    title: 'Utility Widgets',
    description: 'Smaller utility components',
    variants: [
      {
        id: 'weather-widget',
        name: 'Weather Widget',
        component: <WeatherWidget />,
        notes: 'Real-time weather display for Levi'
      }
    ]
  }
];

export default function ShowcasePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<{ [key: string]: string }>({});
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const selectVariant = (sectionId: string, variantId: string) => {
    setSelectedVariant(prev => ({ ...prev, [sectionId]: variantId }));
  };

  const getViewportWidth = () => {
    switch (viewMode) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'var(--sem-color-background-page)',
      padding: 'var(--ref-spacing-8)',
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        marginBottom: 'var(--ref-spacing-12)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--ref-spacing-8)',
          paddingBottom: 'var(--ref-spacing-6)',
          borderBottom: '2px solid var(--ref-color-brand-gold-600)'
        }}>
          <div>
            <h1 style={{
              fontSize: 'var(--ref-font-size-4xl)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--sem-color-text-heading)',
              marginBottom: 'var(--ref-spacing-2)'
            }}>
              Component Showcase
            </h1>
            <p style={{
              fontSize: 'var(--ref-font-size-lg)',
              color: 'var(--sem-color-text-muted)'
            }}>
              Preview and compare component variations
            </p>
          </div>
          <Link 
            href="/"
            className="btn-secondary"
          >
            ← Back to Website
          </Link>
        </div>

        {/* View Mode Selector */}
        <div style={{
          display: 'flex',
          gap: 'var(--ref-spacing-4)',
          marginBottom: 'var(--ref-spacing-6)',
          padding: 'var(--ref-spacing-4)',
          background: 'var(--sem-color-background-surface)',
          borderRadius: 'var(--ref-radius-lg)',
          border: '1px solid var(--sem-color-border-light)'
        }}>
          <span style={{
            fontSize: 'var(--ref-font-size-sm)',
            fontWeight: 'var(--ref-font-weight-semibold)',
            color: 'var(--sem-color-text-heading)',
            marginRight: 'var(--ref-spacing-2)',
            lineHeight: '2.5'
          }}>
            Viewport:
          </span>
          {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              style={{
                padding: 'var(--ref-spacing-2) var(--ref-spacing-6)',
                borderRadius: 'var(--ref-radius-base)',
                border: '1px solid var(--sem-color-border-base)',
                background: viewMode === mode 
                  ? 'var(--ref-color-brand-gold-600)' 
                  : 'var(--sem-color-background-content)',
                color: viewMode === mode 
                  ? 'var(--ref-color-neutral-0)' 
                  : 'var(--sem-color-text-body-dark)',
                cursor: 'pointer',
                fontSize: 'var(--ref-font-size-sm)',
                fontWeight: 'var(--ref-font-weight-medium)',
                textTransform: 'capitalize',
                transition: 'all 0.2s ease'
              }}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Showcase Sections */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {showcaseSections.map((section) => (
          <div
            key={section.id}
            style={{
              marginBottom: 'var(--ref-spacing-10)',
              background: 'var(--sem-color-background-surface)',
              borderRadius: 'var(--ref-radius-xl)',
              border: '1px solid var(--sem-color-border-light)',
              overflow: 'hidden'
            }}
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              style={{
                width: '100%',
                padding: 'var(--ref-spacing-6)',
                background: activeSection === section.id 
                  ? 'var(--ref-color-brand-gold-50)' 
                  : 'var(--sem-color-background-content)',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.2s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <h2 style={{
                  fontSize: 'var(--ref-font-size-2xl)',
                  fontWeight: 'var(--ref-font-weight-semibold)',
                  color: 'var(--sem-color-text-heading)',
                  marginBottom: 'var(--ref-spacing-1)'
                }}>
                  {section.title}
                </h2>
                <p style={{
                  fontSize: 'var(--ref-font-size-base)',
                  color: 'var(--sem-color-text-muted)'
                }}>
                  {section.description}
                </p>
              </div>
              <span style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--ref-color-brand-gold-600)',
                transform: activeSection === section.id ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s ease'
              }}>
                ▼
              </span>
            </button>

            {/* Section Content */}
            {activeSection === section.id && (
              <div style={{
                padding: 'var(--ref-spacing-6)',
                borderTop: '1px solid var(--sem-color-border-light)'
              }}>
                {/* Variant Selector */}
                <div style={{
                  display: 'flex',
                  gap: 'var(--ref-spacing-3)',
                  marginBottom: 'var(--ref-spacing-6)',
                  flexWrap: 'wrap'
                }}>
                  {section.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => selectVariant(section.id, variant.id)}
                      style={{
                        padding: 'var(--ref-spacing-3) var(--ref-spacing-6)',
                        borderRadius: 'var(--ref-radius-base)',
                        border: '2px solid',
                        borderColor: selectedVariant[section.id] === variant.id
                          ? 'var(--ref-color-brand-gold-600)'
                          : 'var(--sem-color-border-base)',
                        background: selectedVariant[section.id] === variant.id
                          ? 'var(--ref-color-brand-gold-50)'
                          : 'var(--sem-color-background-content)',
                        color: 'var(--sem-color-text-body-dark)',
                        cursor: 'pointer',
                        fontSize: 'var(--ref-font-size-sm)',
                        fontWeight: 'var(--ref-font-weight-medium)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {variant.name}
                      {variant.notes && (
                        <span style={{
                          display: 'block',
                          fontSize: 'var(--ref-font-size-xs)',
                          color: 'var(--sem-color-text-muted)',
                          marginTop: 'var(--ref-spacing-1)'
                        }}>
                          {variant.notes}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Component Preview */}
                {section.variants.map((variant) => (
                  (!selectedVariant[section.id] || selectedVariant[section.id] === variant.id) && (
                    <div
                      key={variant.id}
                      style={{
                        marginBottom: selectedVariant[section.id] ? '0' : 'var(--ref-spacing-8)',
                      }}
                    >
                      <div style={{
                        background: 'var(--ref-color-neutral-900)',
                        padding: 'var(--ref-spacing-2)',
                        marginBottom: 'var(--ref-spacing-2)',
                        borderRadius: 'var(--ref-radius-base)',
                        fontSize: 'var(--ref-font-size-xs)',
                        color: 'var(--ref-color-neutral-300)',
                        fontWeight: 'var(--ref-font-weight-semibold)'
                      }}>
                        Preview: {variant.name}
                      </div>
                      
                      {/* Viewport Container */}
                      <div style={{
                        width: getViewportWidth(),
                        margin: '0 auto',
                        border: '2px solid var(--sem-color-border-base)',
                        borderRadius: 'var(--ref-radius-lg)',
                        overflow: 'hidden',
                        background: 'var(--ref-color-neutral-0)',
                        boxShadow: 'var(--ref-shadow-xl)'
                      }}>
                        {variant.component}
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        marginTop: 'var(--ref-spacing-16)',
        padding: 'var(--ref-spacing-8)',
        background: 'var(--ref-color-brand-gold-50)',
        borderRadius: 'var(--ref-radius-xl)',
        border: '1px solid var(--ref-color-brand-gold-200)'
      }}>
        <h3 style={{
          fontSize: 'var(--ref-font-size-xl)',
          fontWeight: 'var(--ref-font-weight-semibold)',
          color: 'var(--sem-color-text-heading)',
          marginBottom: 'var(--ref-spacing-4)'
        }}>
          💡 How to use this showcase
        </h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          fontSize: 'var(--ref-font-size-base)',
          color: 'var(--sem-color-text-body-dark)',
          lineHeight: '1.8'
        }}>
          <li>✓ Click on section headers to expand component categories</li>
          <li>✓ Select different variants to compare side-by-side</li>
          <li>✓ Use viewport switcher to test responsive behavior</li>
          <li>✓ Add new components to the showcaseSections array in this file</li>
          <li>✓ Copy the component code from winning variants to production pages</li>
        </ul>
      </div>
    </div>
  );
}

