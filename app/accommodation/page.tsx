'use client';

import Link from 'next/link';
import FAQ from '../components/FAQ';
import PrivateSuiteSection from '../components/PrivateSuiteSection';
import LoungeSaunaSection from '../components/LoungeSaunaSection';
import { useState } from 'react';

export default function AccommodationPage() {
  const [hoveredExperienceIndex, setHoveredExperienceIndex] = useState<number | null>(null);



  const amenityCategories = [
    {
      title: "Living & Comfort",
      icon: "🛋️",
      items: [
        "65m² of luxury living space",
        "Panoramic glass walls & ceiling",
        "Designer furniture & décor",
        "Premium king-size bed",
        "High-end mattress & linens",
        "Heated floors throughout",
        "Air conditioning & ventilation",
        "Private entrance"
      ]
    },
    {
      title: "Kitchen & Dining",
      icon: "🍽️",
      items: [
        "Fully equipped modern kitchen",
        "Premium coffee maker",
        "Wine cooler & bar area",
        "Dining table for 4 guests",
        "Complete cookware set",
        "Dishwasher",
        "Microwave & oven",
        "Local delicacies in mini-bar"
      ]
    },
    {
      title: "Technology & Entertainment",
      icon: "📺",
      items: [
        "55\" Smart TV with streaming",
        "High-speed WiFi (100 Mbps)",
        "Bluetooth sound system",
        "USB charging stations",
        "Tablet for resort services",
        "Netflix & HBO included",
        "Board games & books",
        "Northern lights alarm system"
      ]
    },
    {
      title: "Bathroom & Wellness",
      icon: "🛁",
      items: [
        "Luxury spa bathroom",
        "Rain shower system",
        "Premium bath amenities",
        "Bathrobes & slippers",
        "Hair dryer & straightener",
        "Underfloor heating",
        "Towel warmer",
        "Magnifying mirror"
      ]
    }
  ];

  const experiences = [
    {
      title: "Northern Lights from Your Bed",
      description: "Our glass ceiling design offers unobstructed views of the Aurora Borealis. We'll wake you when the lights appear.",
      icon: "✨"
    },
    {
      title: "Private Chef Service",
      description: "Enjoy gourmet Lappish cuisine prepared by our chef in your suite's kitchen. Perfect for special occasions.",
      icon: "👨‍🍳"
    },
    {
      title: "In-Suite Spa Treatments",
      description: "Book relaxing massages and wellness treatments to be enjoyed in the privacy of your suite.",
      icon: "💆"
    },
    {
      title: "Wilderness Adventures",
      description: "Direct access to hiking trails, with snowshoes and equipment available at your door.",
      icon: "🎿"
    }
  ];

  const faqItems = [
    {
      question: "How can I make a reservation?",
      answer: 'You can easily make a reservation through our website or by contacting us via email at <a href="mailto:levi@oloresort.fi" style="color: var(--sem-color-primary-base);">levi@oloresort.fi</a> or by phone at <a href="tel:+358449014162" style="color: var(--sem-color-primary-base);">+358 44 901 4162</a>.'
    },
    {
      question: "How far is OloResort from Levi center?",
      answer: "OloResort is located just a short distance from Levi center. We offer a peaceful and nature-surrounded environment away from the hustle and bustle. You can find us at Taalontie 46, 99130 Sirkka."
    },
    {
      question: "What activities do you offer?",
      answer: 'We offer a variety of activities, such as snowmobile safaris, snowshoeing, husky rides and reindeer rides. <a href="/activities" style="color: var(--sem-color-primary-base);">Explore our activity selection and book your adventure here.</a>'
    },
    {
      question: "Do the suites have WiFi?",
      answer: "Yes, all our suites are equipped with fast WiFi connection, so you can stay connected even while on vacation."
    },
    {
      question: "When can you see northern lights in Levi?",
      answer: "Northern lights can be seen in Levi from mid-August to early April. The best season is from September to March. OloResort's glass igloos provide perfect settings for viewing northern lights from the warmth indoors."
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--ref-color-neutral-1000)' }}>
      
      {/* Hero Section with Image Carousel Background */}
      <section 
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: '100vh',
          position: 'relative'
        }}
      >
        {/* Shared Background Image - extends to Private Suite Experience section */}
        <div
          className="shared-background"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_north/Content_for_OloResort_Levi_from_lesmoonwalkers_mariuskaening_merry_amber17_mufhwu")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            zIndex: 0
          }}
        />
        
        {/* Glassmorphism overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 2
          }}
        />

        {/* Aurora effect */}
        <div
          className="aurora-animation"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent, rgba(200, 164, 106, 0.1), transparent, rgba(189, 152, 75, 0.1), transparent)',
            animation: 'aurora 15s ease-in-out infinite',
            zIndex: 3
          }}
        />
        
        {/* Content */}
        <div className="relative text-center fade-in-up" style={{
          maxWidth: '1000px',
          padding: 'var(--ref-spacing-16) var(--ref-spacing-8)',
          animation: 'fadeInUp 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both',
          zIndex: 10
        }}>
          <p 
            style={{
              fontSize: 'var(--ref-font-size-base)',
              color: 'var(--sem-color-primary-base)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--ref-letter-spacing-wider)',
              marginBottom: 'var(--ref-spacing-6)',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500'
            }}
          >
            LUXURY ACCOMMODATION IN LEVI
          </p>
          
                  <h1
            style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                      fontWeight: '700',
                      color: 'var(--sem-color-primary-base)',
              marginBottom: 'var(--ref-spacing-8)',
                      textShadow: '3px 3px 20px rgba(0, 0, 0, 0.5)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Experience Nordic Luxury
                  </h1>
          
          <p 
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              color: '#E8E1D4',
              marginBottom: 'var(--ref-spacing-12)',
              fontWeight: '300',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.6)',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto var(--ref-spacing-12)'
            }}
          >
            Immerse yourself in the tranquility of Lapland nature. 
            Experience northern lights from the comfort of your glass igloo suite.
          </p>
          
          <div className="flex gap-[var(--ref-spacing-4)] sm:gap-[var(--ref-spacing-6)] justify-center flex-wrap">
            <Link
              href="#suite"
              style={{
                background: 'var(--sem-color-primary-base)',
                color: 'var(--ref-color-neutral-0)',
                padding: 'clamp(0.875rem, 2vw, 1.25rem) clamp(1.5rem, 4vw, 3rem)',
                borderRadius: 'var(--ref-radius-full)',
                fontSize: 'clamp(0.875rem, 2vw, var(--ref-font-size-lg))',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 30px rgba(200, 164, 106, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              className="btn-primary"
            >
              Private Suite
            </Link>
            <Link
              href="#lounge"
              style={{
                background: 'transparent',
                color: 'var(--ref-color-neutral-0)',
                padding: 'clamp(0.875rem, 2vw, 1.25rem) clamp(1.5rem, 4vw, 3rem)',
                border: '2px solid var(--ref-color-neutral-0)',
                borderRadius: 'var(--ref-radius-full)',
                fontSize: 'clamp(0.875rem, 2vw, var(--ref-font-size-lg))',
                fontWeight: '500',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              className="btn-secondary"
            >
              Lounge & Sauna
            </Link>
          </div>
        </div>
      </section>


      {/* Unforgettable Experiences Section - Full Width */}
      <section style={{ 
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        background: 'transparent'
      }}>
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
        
        <div className="relative" style={{ zIndex: 2, width: '100%' }}>
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-24)', marginTop: 'var(--ref-spacing-20)', position: 'relative', padding: '0 var(--ref-spacing-8)' }}>
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
                      Private Suite Experience
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
                maxWidth: '800px',
                margin: '0 auto',
                opacity: 0.95,
                marginTop: 'var(--ref-spacing-12)',
                letterSpacing: '0.01em',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
              }}
            >
              OloResort Private Suite, decorated with pleasant and natural materials, is in the heart of the resort, close to services and year-round activities. The apartments are in nature, so you can relax without worries in your peace. Thanks to the large glass surface and the stunning glass roof, you can admire the sunrise and the northern lights in the comfort of your bed.
            </p>
          </div>
          
          {/* Masonry Grid - Full Width */}
          <div 
            className="experience-masonry"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(3, 280px)',
              gap: 'clamp(0.75rem, 2vw, var(--ref-spacing-6))',
              marginTop: 'clamp(1.5rem, 4vw, var(--ref-spacing-20))',
              width: '100%',
              padding: '0 clamp(1rem, 3vw, var(--ref-spacing-8))'
            }}
          >
            {[
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
            ].map((experience, index) => {
              const isHovered = hoveredExperienceIndex === index;
              
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
                  onMouseEnter={() => setHoveredExperienceIndex(index)}
                  onMouseLeave={() => setHoveredExperienceIndex(null)}
                >
                  {/* Background Image */}
                  <img
                    src={experience.imageUrl}
                    alt={experience.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--ref-duration-slower) ease-in-out',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
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

      </section>

      {/* Why Choose OloResort Section */}
      <section 
        id="why-choose"
        style={{
          padding: 'var(--ref-spacing-32) var(--ref-spacing-8)',
          position: 'relative',
          overflow: 'hidden',
          background: 'transparent'
        }}
      >
        {/* Dark overlay filter */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        
        <div className="container max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Header with Glassmorphism */}
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-24)' }}>
            <div 
              style={{
                display: 'inline-block',
                padding: 'var(--ref-spacing-12) var(--ref-spacing-16)',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--ref-radius-2xl)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <h2 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  color: 'var(--sem-color-primary-base)',
                  marginBottom: '0',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  textShadow: '2px 2px 16px rgba(0, 0, 0, 0.5)'
                }}
              >
                Why Choose OloResort Glass Igloos?
              </h2>
            </div>
          </div>

          {/* Benefits Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
              gap: 'var(--ref-spacing-16)',
              alignItems: 'start'
            }}
          >
            {/* Unique Experience */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(200, 164, 106, 0.05) 0%, transparent 60%)',
                border: '1px solid rgba(200, 164, 106, 0.2)',
                borderRadius: 'var(--ref-radius-2xl)',
                  padding: 'var(--ref-spacing-12)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
                }}
              className="benefit-card"
              >
              {/* Decorative element */}
                <div 
                  style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                    width: '80px',
                    height: '80px',
                  background: 'radial-gradient(circle, rgba(200, 164, 106, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                  pointerEvents: 'none'
                }}
              />
              
              <h3 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: 'var(--sem-color-primary-base)',
                  marginBottom: 'var(--ref-spacing-6)',
                  fontWeight: '600',
                  letterSpacing: '-0.01em'
                }}
              >
                A Unique Experience
              </h3>
              
              <p 
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  color: '#E8E1D4',
                  lineHeight: 1.7,
                  fontWeight: '400',
                  opacity: 0.95
                }}
              >
                Discover the magic of Lapland from the comfort of your accommodation. 
                Efficiently witness the Northern Lights, starry skies, and enchanting sunsets.
              </p>
                </div>

            {/* Peaceful Location */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(200, 164, 106, 0.05) 0%, transparent 60%)',
                border: '1px solid rgba(200, 164, 106, 0.2)',
                borderRadius: 'var(--ref-radius-2xl)',
                padding: 'var(--ref-spacing-12)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="benefit-card"
            >
              {/* Decorative element */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  background: 'radial-gradient(circle, rgba(200, 164, 106, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}
              />
              
                <h3 
                  style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    color: 'var(--sem-color-primary-base)',
                  marginBottom: 'var(--ref-spacing-6)',
                  fontWeight: '600',
                  letterSpacing: '-0.01em'
                }}
              >
                Peaceful Location
                </h3>
              
                <p 
                  style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  color: '#E8E1D4',
                  lineHeight: 1.7,
                  fontWeight: '400',
                  opacity: 0.95
                }}
              >
                OloResort offers serene accommodations in the heart of nature, yet just a 
                short distance from Levi's activities and amenities.
                </p>
              </div>

            {/* Luxury and Comfort */}
            <div 
              style={{
                background: 'linear-gradient(135deg, rgba(200, 164, 106, 0.05) 0%, transparent 60%)',
                border: '1px solid rgba(200, 164, 106, 0.2)',
                borderRadius: 'var(--ref-radius-2xl)',
                padding: 'var(--ref-spacing-12)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="benefit-card"
            >
              {/* Decorative element */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  background: 'radial-gradient(circle, rgba(200, 164, 106, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}
              />
              
              <h3 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: 'var(--sem-color-primary-base)',
                  marginBottom: 'var(--ref-spacing-6)',
                  fontWeight: '600',
                  letterSpacing: '-0.01em'
                }}
              >
                Luxury and Comfort
              </h3>
              
              <p 
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                  color: '#E8E1D4',
                  lineHeight: 1.7,
                  fontWeight: '400',
                  opacity: 0.95
                }}
              >
                All our accommodations are equipped with premium amenities, including private 
                bathrooms and Wi-Fi, ensuring your stay is perfectly relaxing and worry-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lounge & Sauna Experience Section */}
      <section 
        id="lounge-experience"
        style={{ 
          padding: 'var(--ref-spacing-24) var(--ref-spacing-8)',
          position: 'relative',
          overflow: 'hidden',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
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
            pointerEvents: 'none',
            zIndex: 0
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
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        
        <div className="relative" style={{ zIndex: 2, width: '100%' }}>
          <div className="text-center" style={{ position: 'relative', padding: '0 var(--ref-spacing-8)' }}>
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
                Lounge & Sauna
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
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                color: '#E8E1D4',
                lineHeight: 1.8,
                fontWeight: '400',
                maxWidth: '800px',
                margin: '0 auto',
                opacity: 0.95,
                marginTop: 'var(--ref-spacing-12)',
                letterSpacing: '0.01em',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
              }}
            >
              In addition to private suites, in OloResort you can enjoy the lounge area and Finnish sauna. 
              Our lounge area and sauna have been designed to maintain the beautiful view to nature. 
              Enjoy the sauna experience and continue your evening in the warmth of the fireplace in our comfy lounge area. Relax.
            </p>
          </div>
          
        </div>
      </section>


      {/* Lounge & Sauna Section */}
      <div id="lounge">
        <LoungeSaunaSection />
      </div>

      {/* Booking Information Section */}
      <section 
        id="book"
        style={{ 
          padding: 'var(--ref-spacing-24) var(--ref-spacing-8)',
          background: 'var(--ref-color-neutral-0)'
        }}
      >
        <div className="container max-w-7xl mx-auto">
            <div 
              style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: 'clamp(1.5rem, 4vw, var(--ref-spacing-16))',
              alignItems: 'center'
            }}
          >
            {/* Pricing & Availability */}
            <div 
              style={{
                background: 'rgba(30, 30, 30, 0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 'var(--ref-radius-2xl)',
                padding: 'var(--ref-spacing-16)',
                border: '1px solid rgba(200, 164, 106, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              {/* Subtle decorative element */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-20%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(200, 164, 106, 0.08), transparent 70%)',
                  pointerEvents: 'none'
                }}
              />
              
              <h3 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
                  color: 'var(--sem-color-primary-base)',
                  marginBottom: 'var(--ref-spacing-10)',
                  fontWeight: '600',
                  letterSpacing: '-0.01em',
                  position: 'relative'
                }}
              >
                Rates & Booking
              </h3>
              
              <div style={{ 
                marginBottom: 'var(--ref-spacing-10)',
                paddingBottom: 'var(--ref-spacing-10)',
                borderBottom: '1px solid rgba(200, 164, 106, 0.15)'
              }}>
                <p 
                  style={{
                    fontSize: 'var(--ref-font-size-sm)',
                    color: '#E8E1D4',
                    marginBottom: 'var(--ref-spacing-3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    opacity: 0.8,
                    fontFamily: 'Lato, sans-serif'
                  }}
                >
                  Private Suite starting from
                </p>
              <div 
                style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    color: 'var(--sem-color-primary-base)',
                    fontWeight: '300',
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '-0.02em',
                    lineHeight: 1
                  }}
                >
                  €450
                  <span 
                    style={{
                  fontSize: 'var(--ref-font-size-lg)', 
                      fontWeight: '300',
                      color: '#E8E1D4',
                      marginLeft: 'var(--ref-spacing-4)',
                      opacity: 0.7
                    }}
                  >
                    / night
                  </span>
              </div>
              </div>
              
              <ul 
                style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: 'var(--ref-spacing-12)'
                }}
              >
                <li style={{ 
                  padding: 'var(--ref-spacing-5) 0',
                  borderBottom: '1px solid rgba(200, 164, 106, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-4)',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 'var(--ref-font-size-base)',
                  color: '#E8E1D4',
                  lineHeight: 1.6
                }}>
                  <span style={{ 
                    color: 'var(--sem-color-primary-base)', 
                    fontSize: '1.25rem',
                    fontWeight: '300'
                  }}>✓</span>
                  Minimum stay 2 nights
                </li>
                <li style={{ 
                  padding: 'var(--ref-spacing-5) 0',
                  borderBottom: '1px solid rgba(200, 164, 106, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-4)',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 'var(--ref-font-size-base)',
                  color: '#E8E1D4',
                  lineHeight: 1.6
                }}>
                  <span style={{ 
                    color: 'var(--sem-color-primary-base)', 
                    fontSize: '1.25rem',
                    fontWeight: '300'
                  }}>✓</span>
                  Breakfast included
                </li>
                <li style={{ 
                  padding: 'var(--ref-spacing-5) 0',
                  borderBottom: '1px solid rgba(200, 164, 106, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-4)',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 'var(--ref-font-size-base)',
                  color: '#E8E1D4',
                  lineHeight: 1.6
                }}>
                  <span style={{ 
                    color: 'var(--sem-color-primary-base)', 
                    fontSize: '1.25rem',
                    fontWeight: '300'
                  }}>✓</span>
                  Airport transfers available
                </li>
                <li style={{ 
                  padding: 'var(--ref-spacing-5) 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-4)',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 'var(--ref-font-size-base)',
                  color: '#E8E1D4',
                  lineHeight: 1.6
                }}>
                  <span style={{ 
                    color: 'var(--sem-color-primary-base)', 
                    fontSize: '1.25rem',
                    fontWeight: '300'
                  }}>✓</span>
                  Free cancellation 7 days before
                </li>
              </ul>
              
              <Link 
                href="/contact"
                  style={{
                    display: 'block',
                  background: 'linear-gradient(135deg, var(--sem-color-primary-base) 0%, #E5C882 100%)',
                  color: '#1E1E1E',
                  padding: 'var(--ref-spacing-5) var(--ref-spacing-8)',
                  borderRadius: 'var(--ref-radius-lg)',
                  textAlign: 'center',
                    fontSize: 'var(--ref-font-size-base)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontFamily: 'Montserrat, sans-serif',
                  boxShadow: '0 4px 20px rgba(200, 164, 106, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                className="btn-primary"
              >
                Check Availability
              </Link>
            </div>
            
            {/* Image Box */}
            <div 
              style={{
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#1E1E1E',
                borderRadius: 'var(--ref-radius-2xl)',
                border: '1px solid rgba(200, 164, 106, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              }}
            >
              {/* Image */}
              <img
                src="https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1200/oloresorttalvi-1-30-scaled_nytdcg"
                alt="OloResort Lounge & Sauna"
                style={{
                  width: '110%',
                  height: '110%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        style={{ 
        padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
          background: 'linear-gradient(to bottom, var(--ref-color-neutral-0), #FAFAFA)'
        }}
      >
        <div className="container max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1E1E1E',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: '600'
              }}
            >
              Frequently Asked Questions
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-lg)',
                color: '#666666',
                opacity: 0.9
              }}
            >
              Everything you need to know about your stay
            </p>
          </div>
          
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="relative overflow-hidden text-center"
        style={{
          padding: 'var(--ref-spacing-32) var(--ref-spacing-8)',
          background: `linear-gradient(135deg, #1E1E1E, #2A2A2A)`,
          position: 'relative'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: `url("https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_600,c_fill,g_center/LRT_00170_su5dq6")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }}
        />
        
        <div className="relative z-10">
          <h2 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-8)',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}
          >
            Begin Your Lapland Journey
          </h2>
          <p 
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: '#E8E1D4',
              marginBottom: 'var(--ref-spacing-12)',
              opacity: 0.95,
              maxWidth: '700px',
              margin: '0 auto var(--ref-spacing-12)',
              lineHeight: 1.7
            }}
          >
            Experience the magic of the Arctic in unparalleled comfort. 
            Your private glass igloo suite awaits.
          </p>
          <Link
            href="/contact"
            style={{
              background: 'var(--sem-color-primary-base)',
              color: 'var(--ref-color-neutral-0)',
              padding: '1.5rem 4rem',
              borderRadius: 'var(--ref-radius-full)',
              fontSize: 'var(--ref-font-size-xl)',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 15px 40px rgba(200, 164, 106, 0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}
            className="btn-primary"
          >
            Reserve Your Suite
          </Link>
        </div>
      </section>


      {/* Add custom styles */}
      <style jsx>{`
        .shared-background {
          position: fixed !important;
          top: 0;
          left: 0;
          width: 100vw;
          height: 200vh;
          z-index: -1;
        }

        @keyframes aurora {
          0%, 100% { 
            transform: translateX(-100%) skewX(-15deg); 
            opacity: 0; 
          }
          50% { 
            transform: translateX(100%) skewX(-15deg); 
            opacity: 0.7; 
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        .amenity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border-color: var(--sem-color-primary-base);
        }

        .experience-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
          border-color: var(--sem-color-primary-base);
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          border-color: rgba(200, 164, 106, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(200, 164, 106, 0.2);
          background: linear-gradient(135deg, rgba(200, 164, 106, 0.08) 0%, transparent 60%);
        }

        .masonry-item:hover img {
          transform: scale(1.08);
        }

        .masonry-item:hover .masonry-overlay {
          opacity: 1;
        }

        .masonry-item:hover h3,
        .masonry-item:hover p {
          transform: translateY(0);
        }

        .masonry-item:hover .click-indicator {
          opacity: 1;
          transform: translateY(0);
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
            grid-template-rows: repeat(auto, 320px) !important;
            gap: var(--ref-spacing-4) !important;
          }

          .experience-masonry > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }

          /* Better mobile card heights */
          .experience-item {
            min-height: 320px !important;
          }
        }

        @media (max-width: 768px) {
          .lightbox-nav {
            width: 50px !important;
            height: 50px !important;
          }
          
          .masonry-item {
            min-height: 250px;
          }
        }
      `}</style>
    </div>
  );
}

