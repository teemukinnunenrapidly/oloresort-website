'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ExperienceItem {
  imageUrl: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  gridClass: string;
  featured?: boolean;
}

interface ExperienceMasonryProps {
  title?: string;
  subtitle?: string;
  experiences?: ExperienceItem[];
}

// Default experiences for homepage
const defaultExperiences: ExperienceItem[] = [
  {
    imageUrl: `https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,c_fill,g_center/oloresorttalvi-1-1_pr2pqm`,
    title: "Northern Lights from Your Bed",
    description: "Watch the dancing northern lights from the warmth of your blanket through our panoramic glass ceiling.",
    linkHref: "/accommodation",
    linkText: "View accommodation",
    gridClass: "col-span-2 row-span-2",
    featured: true
  },
  {
    imageUrl: `https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,c_fill,g_center/DSCF7716_vfh0cr`,
    title: "Premium Luxury",
    description: "Each suite is luxuriously furnished with all modern amenities.",
    linkHref: "/accommodation",
    linkText: "View suites",
    gridClass: "col-span-2 row-span-1"
  },
  {
    imageUrl: `https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,c_fill,g_center/oloresorttalvi-1-2_y2n4k7`,
    title: "Heart of Nature",
    description: "Peaceful location in the embrace of nature, yet close to Levi's services.",
    linkHref: "/accommodation",
    linkText: "Explore location",
    gridClass: "col-span-1 row-span-1"
  },
  {
    imageUrl: `https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,c_fill,g_center/Snowmobile_20tour_hkw7ii`,
    title: "Unique Activities",
    description: "Snowmobile safaris, husky rides and snowshoeing adventures.",
    linkHref: "/activities",
    linkText: "View activities",
    gridClass: "col-span-1 row-span-1"
  },
  {
    imageUrl: `https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,c_fill,g_center/oloresorttalvi24-25-1-9_rifzwq`,
    title: "Local Gourmet",
    description: "Enjoy delicious breakfast and dinner combining local ingredients.",
    linkHref: "/accommodation",
    linkText: "Learn more",
    gridClass: "col-span-2 row-span-1"
  },
  {
    imageUrl: `https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,c_fill,g_center/AdobePhotoshopExpress_2025-03-07_18-16-49-0500_xds4sh`,
    title: "Finnish Sauna",
    description: "Relax in a traditional Finnish sauna in the peace of nature.",
    linkHref: "/accommodation",
    linkText: "Discover amenities",
    gridClass: "col-span-2 row-span-1"
  }
];

const ExperienceMasonry = ({ 
  title = "Unforgettable Experiences",
  subtitle = "Enjoy Lapland's peace and beauty surrounded by modern luxury",
  experiences = defaultExperiences 
}: ExperienceMasonryProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section style={{ 
      padding: 'var(--comp-experienceSection-section-padding)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Continuation of hero background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_north/Content_for_OloResort_Levi_from_lesmoonwalkers_mariuskaening_merry_amber17_mufhwu")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          pointerEvents: 'none',
          zIndex: 0,
          backgroundColor: '#1E1E1E' // Fallback color
        }}
      />
      
      {/* Dark overlay filter */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      
      {/* Background decoration - subtle warm light */}
      <div 
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '50%',
          height: '50%',
          backgroundImage: 'radial-gradient(circle, rgba(200, 164, 106, 0.05) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />
      
      {/* Additional subtle pattern - inspired by nature */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-15%',
          width: '60%',
          height: '60%',
          backgroundImage: 'radial-gradient(ellipse at center, rgba(232, 225, 212, 0.03) 0%, transparent 60%)',
          filter: 'blur(120px)',
          pointerEvents: 'none'
        }}
      />
      
      <div className="container max-w-7xl mx-auto relative" style={{ zIndex: 2 }}>
        <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-24)', marginTop: 'var(--ref-spacing-20)', position: 'relative' }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '-20px',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 'var(--ref-spacing-4)',
            alignItems: 'center',
            opacity: 0.4,
          }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A46A' }} />
            <div style={{ width: '6px', height: '6px', backgroundColor: '#C8A46A', borderRadius: '50%' }} />
            <div style={{ width: '40px', height: '1px', backgroundColor: '#C8A46A' }} />
          </div>
          
          <div style={{ position: 'relative', display: 'inline-block' }}>
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
            {title}
          </h2>
            {/* Decorative accent line */}
            <div
              style={{
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundImage: 'linear-gradient(90deg, transparent 0%, #C8A46A 50%, transparent 100%)',
                borderRadius: 'var(--ref-radius-full)',
              }}
            />
          </div>
          <p 
            style={{
              fontSize: 'var(--ref-font-size-xl)',
              color: '#E8E1D4',
              lineHeight: 'var(--comp-experienceSection-subtitle-typography-lineHeight)',
              fontFamily: 'Lato, sans-serif',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.95,
              marginTop: 'var(--ref-spacing-12)',
              letterSpacing: '0.01em',
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
            }}
          >
            {subtitle}
          </p>
        </div>
        
        {/* Masonry Grid */}
        <div 
          className="experience-masonry"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 280px)',
            gap: 'var(--ref-spacing-6)',
            marginTop: 'var(--ref-spacing-20)'
          }}
        >
          {experiences.map((experience, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index}
                className={`experience-item ${experience.gridClass}`}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: experience.featured ? 'var(--ref-radius-3xl)' : 'var(--ref-radius-xl)',
                    border: isHovered 
                      ? '2px solid rgba(200, 164, 106, 0.6)' 
                      : '1px solid rgba(200, 164, 106, 0.35)',
                    cursor: 'pointer',
                    transition: 'all var(--ref-duration-slower) ease-in-out',
                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isHovered 
                      ? '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(200, 164, 106, 0.4), inset 0 0 30px rgba(200, 164, 106, 0.15)' 
                      : experience.featured 
                        ? '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 30px rgba(200, 164, 106, 0.25), inset 0 0 20px rgba(200, 164, 106, 0.08)'
                        : '0 5px 20px rgba(0, 0, 0, 0.3), 0 0 25px rgba(200, 164, 106, 0.2), inset 0 0 15px rgba(200, 164, 106, 0.05)',
                    background: 'linear-gradient(135deg, rgba(200, 164, 106, 0.06) 0%, transparent 60%)',
                  }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <Image
                  src={experience.imageUrl}
                  alt={experience.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform var(--ref-duration-slower) ease-in-out',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  }}
                  sizes={experience.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                  priority={experience.featured}
                />
                
                {/* Gradient Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: experience.featured 
                      ? `linear-gradient(to top, 
                          rgba(30, 30, 30, 0.95) 0%, 
                          rgba(30, 30, 30, 0.7) 30%,
                          rgba(30, 30, 30, 0.4) 50%, 
                          rgba(30, 30, 30, 0.1) 80%, 
                          transparent 100%),
                        linear-gradient(135deg, 
                          rgba(200, 164, 106, 0.05) 0%, 
                          transparent 40%)`
                      : `linear-gradient(to top, 
                          rgba(30, 30, 30, 0.85) 0%, 
                          rgba(30, 30, 30, 0.5) 30%,
                          rgba(30, 30, 30, 0.2) 50%, 
                          rgba(30, 30, 30, 0.05) 70%, 
                          transparent 100%)`,
                    transition: 'opacity var(--ref-duration-slower)',
                    opacity: isHovered ? 0.9 : 1,
                  }}
                />
                
                {/* Content */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: experience.featured ? 'var(--ref-spacing-12)' : 'var(--ref-spacing-8)',
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                    transition: 'transform var(--ref-duration-slower) ease-in-out',
                  }}
                >
                  {/* Small accent line above title */}
                  <div
                    style={{
                      width: experience.featured ? '60px' : '40px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #C8A46A 0%, #E5C882 50%, rgba(200, 164, 106, 0.4) 100%)',
                      marginBottom: experience.featured ? 'var(--ref-spacing-6)' : 'var(--ref-spacing-4)',
                      opacity: isHovered ? 1 : 0.8,
                      transform: isHovered ? 'scaleX(1.5)' : 'scaleX(1)',
                      transformOrigin: 'left',
                      transition: 'all var(--ref-duration-slower) cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 0 10px rgba(200, 164, 106, 0.4)',
                    }}
                  />
                  <h3 
                    style={{
                      color: '#FFFFFF',
                      fontSize: experience.featured ? 'var(--ref-font-size-3xl)' : 'var(--ref-font-size-2xl)',
                      fontWeight: '700',
                      fontFamily: 'Montserrat, sans-serif',
                      marginBottom: 'var(--ref-spacing-4)',
                      letterSpacing: experience.featured ? '0.02em' : '0.01em',
                      lineHeight: 1.2,
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    {experience.title}
                  </h3>
                  
                  <p 
                    style={{
                      color: '#E8E1D4',
                      fontSize: experience.featured ? 'var(--ref-font-size-lg)' : 'var(--ref-font-size-base)',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: 1.8,
                      marginBottom: 'var(--ref-spacing-6)',
                      opacity: isHovered ? 1 : 0.9,
                      transition: 'opacity var(--ref-duration-slower)',
                      display: experience.featured ? 'block' : '-webkit-box',
                      textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
                      ...(experience.featured ? {} : {
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical' as const,
                      }),
                      overflow: experience.featured ? 'visible' : 'hidden',
                    }}
                  >
                    {experience.description}
                  </p>
                  
                  {/* Link with decorative element */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 'var(--ref-spacing-3)',
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'all var(--ref-duration-slower) cubic-bezier(0.4, 0, 0.2, 1)',
                  }}>
                    <div style={{
                      width: '24px',
                      height: '1px',
                      backgroundColor: '#C8A46A',
                      opacity: 0.6,
                    }} />
                    <Link
                      href={experience.linkHref}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--ref-spacing-2)',
                        color: '#C8A46A',
                        fontSize: 'var(--ref-font-size-sm)',
                        fontWeight: '600',
                        fontFamily: 'Montserrat, sans-serif',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        textShadow: '0 0 15px rgba(200, 164, 106, 0.5)',
                      }}
                    >
                      {experience.linkText}
                      <span style={{ 
                        transform: isHovered ? 'translateX(4px)' : 'translateX(0)', 
                        transition: 'transform var(--ref-duration-slower) cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'inline-block'
                      }}>→</span>
                    </Link>
                  </div>
                </div>
                
                {/* Featured badge */}
                {experience.featured && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: 'var(--ref-spacing-8)',
                      right: 'var(--ref-spacing-8)',
                      background: 'linear-gradient(135deg, #C8A46A 0%, #E5C882 50%, #C8A46A 100%)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      padding: 'var(--ref-spacing-3) var(--ref-spacing-6)',
                      borderRadius: 'var(--ref-radius-full)',
                      boxShadow: '0 4px 20px rgba(200, 164, 106, 0.5), inset 0 1px 3px rgba(255, 255, 255, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform var(--ref-duration-base)',
                    }}
                  >
                    <span 
                      style={{
                        color: '#1E1E1E',
                        fontSize: 'var(--ref-font-size-xs)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontFamily: 'Montserrat, sans-serif',
                        textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      Must Experience
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 50%;
          }
          100% {
            background-position: -100% 50%;
          }
        }

        .experience-masonry > div {
          grid-column: span 1;
          grid-row: span 1;
        }

        .experience-masonry > .col-span-2 {
          grid-column: span 2;
        }

        .experience-masonry > .row-span-2 {
          grid-row: span 2;
        }

        @media (max-width: 1024px) {
          .experience-masonry {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(auto, 250px) !important;
          }

          .experience-masonry > .col-span-2 {
            grid-column: span 2;
          }

          .experience-masonry > .row-span-2 {
            grid-row: span 1;
          }
        }

        @media (max-width: 640px) {
          .experience-masonry {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(auto, 280px) !important;
          }

          .experience-masonry > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceMasonry;
