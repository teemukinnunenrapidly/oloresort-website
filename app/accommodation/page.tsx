'use client';

import Link from 'next/link';
import FAQ from '../components/FAQ';
import PrivateSuiteSection from '../components/PrivateSuiteSection';
import LoungeSaunaSection from '../components/LoungeSaunaSection';
import { useState } from 'react';

export default function AccommodationPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const heroImages = [
    "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_center/Suite_1_aq4lif",
    "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_center/Olo_Restaurant_Levi_Reindeer_Winter_Scenes_1_xkx6oe",
    "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_center/LRT_00170_su5dq6"
  ];

  const privatesuiteImages = [
    {
      url: "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_800,h_600,c_fill,g_center/Suite_1_aq4lif",
      caption: "Living Area",
      description: "Spacious living space with panoramic glass walls"
    },
    {
      url: "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_800,h_600,c_fill,g_center/Suite_2_szw8ng",
      caption: "Master Bedroom",
      description: "King-size bed under the glass ceiling"
    },
    {
      url: "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_800,h_600,c_fill,g_center/Suite_3_bvvkgr",
      caption: "Kitchen & Dining",
      description: "Fully equipped modern kitchen"
    },
    {
      url: "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_800,h_600,c_fill,g_center/Suite_5_bstqiq",
      caption: "Bathroom",
      description: "Luxury spa bathroom with premium amenities"
    },
    {
      url: "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_800,h_600,c_fill,g_center/Suite_4_dpcjxi",
      caption: "Glass Ceiling View",
      description: "Perfect for northern lights viewing"
    },
    {
      url: "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_800,h_600,c_fill,g_center/Suite_6_hgjfat",
      caption: "Evening Ambiance",
      description: "Warm lighting creates a cozy atmosphere"
    }
  ];

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
        {/* Background Image Carousel */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("${heroImages[selectedImage]}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
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
            zIndex: 1
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
            zIndex: 2
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center fade-in-up" style={{ 
          maxWidth: '1000px', 
          padding: 'var(--ref-spacing-16) var(--ref-spacing-8)',
          animation: 'fadeInUp 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both'
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
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-8)',
              textShadow: '3px 3px 20px rgba(0, 0, 0, 0.5)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Private Suite Experience
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
          
          <div className="flex gap-[var(--ref-spacing-6)] justify-center flex-wrap">
            <Link 
              href="#suite" 
              style={{
                background: 'var(--sem-color-primary-base)',
                color: 'var(--ref-color-neutral-0)',
                padding: '1.25rem 3rem',
                borderRadius: 'var(--ref-radius-full)',
                fontSize: 'var(--ref-font-size-lg)',
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
              Explore Suite
            </Link>
            <Link 
              href="#book" 
              style={{
                background: 'transparent',
                color: 'var(--ref-color-neutral-0)',
                padding: '1.25rem 3rem',
                border: '2px solid var(--ref-color-neutral-0)',
                borderRadius: 'var(--ref-radius-full)',
                fontSize: 'var(--ref-font-size-lg)',
                fontWeight: '500',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              className="btn-secondary"
            >
              Check Availability
            </Link>
          </div>
        </div>
        
        {/* Image indicators */}
        <div 
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 'var(--ref-spacing-3)',
            zIndex: 10
          }}
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              style={{
                width: '60px',
                height: '3px',
                background: selectedImage === index 
                  ? 'var(--sem-color-primary-base)' 
                  : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                borderRadius: 'var(--ref-radius-full)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                transform: selectedImage === index ? 'scaleX(1.2)' : 'scaleX(1)'
              }}
            />
          ))}
        </div>
      </section>

      {/* Private Suite Showcase - Main Section */}
      <section 
        id="suite"
        style={{ 
          padding: 'var(--ref-spacing-32) var(--ref-spacing-8)',
          background: 'var(--ref-color-neutral-0)',
          position: 'relative'
        }}
      >
        <div className="container max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            className="text-center" 
            style={{ 
              marginBottom: 'var(--ref-spacing-20)',
              maxWidth: '900px',
              margin: '0 auto var(--ref-spacing-20)'
            }}
          >
            <h2 
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: '#1E1E1E',
                marginBottom: 'var(--ref-spacing-8)',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}
            >
              OloResort Private Suite
            </h2>
            <p 
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                color: '#666666',
                lineHeight: 1.8,
                fontWeight: '400'
              }}
            >
              Our exclusive 65m² glass igloo suite combines Nordic minimalism with 
              uncompromising comfort. Every detail has been carefully considered to 
              create a sanctuary where luxury meets nature.
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2px',
              marginBottom: 'var(--ref-spacing-20)',
              borderRadius: 'var(--ref-radius-2xl)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
            }}
          >
            {privatesuiteImages.map((image, index) => (
              <div 
                key={index}
                className="suite-gallery-item"
                style={{
                  position: 'relative',
                  aspectRatio: index === 0 ? '16/10' : '4/3',
                  gridColumn: index === 0 ? 'span 2' : 'span 1',
                  gridRow: index === 0 ? 'span 2' : 'span 1',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src={image.url}
                  alt={image.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                <div 
                  className="image-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 'var(--ref-spacing-8)'
                  }}
                >
                  <h4 
                    style={{
                      color: 'var(--ref-color-neutral-0)',
                      fontSize: 'var(--ref-font-size-xl)',
                      fontWeight: '600',
                      marginBottom: 'var(--ref-spacing-2)'
                    }}
                  >
                    {image.caption}
                  </h4>
                  <p 
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: 'var(--ref-font-size-base)'
                    }}
                  >
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Amenities Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--ref-spacing-12)',
              marginBottom: 'var(--ref-spacing-20)'
            }}
          >
            {amenityCategories.map((category, index) => (
              <div 
                key={index}
                style={{
                  background: '#FAFAFA',
                  borderRadius: 'var(--ref-radius-2xl)',
                  padding: 'var(--ref-spacing-12)',
                  border: '1px solid #E8E1D4',
                  transition: 'all 0.4s ease'
                }}
                className="amenity-card"
              >
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--ref-spacing-8)',
                    gap: 'var(--ref-spacing-4)'
                  }}
                >
                  <span 
                    style={{
                      fontSize: '2.5rem',
                      display: 'inline-block'
                    }}
                  >
                    {category.icon}
                  </span>
                  <h3 
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'var(--ref-font-size-2xl)',
                      color: '#1E1E1E',
                      fontWeight: '600'
                    }}
                  >
                    {category.title}
                  </h3>
                </div>
                <ul 
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}
                >
                  {category.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      style={{
                        padding: 'var(--ref-spacing-3) 0',
                        borderBottom: itemIndex < category.items.length - 1 
                          ? '1px solid rgba(200, 164, 106, 0.1)' 
                          : 'none',
                        color: '#666666',
                        fontSize: 'var(--ref-font-size-base)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--ref-spacing-3)'
                      }}
                    >
                      <span 
                        style={{
                          color: 'var(--sem-color-primary-base)',
                          fontSize: '0.8rem'
                        }}
                      >
                        ◆
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Unique Experiences */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #1E1E1E, #2A2A2A)',
              borderRadius: 'var(--ref-radius-3xl)',
              padding: 'var(--ref-spacing-20)',
              color: 'var(--ref-color-neutral-0)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '60%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(200, 164, 106, 0.1), transparent)',
                pointerEvents: 'none'
              }}
            />
            
            <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
              <h3 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  marginBottom: 'var(--ref-spacing-6)',
                  fontWeight: '600'
                }}
              >
                Exclusive Suite Experiences
              </h3>
              <p 
                style={{
                  fontSize: 'var(--ref-font-size-lg)',
                  opacity: 0.9,
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                Elevate your stay with our curated experiences designed exclusively for our suite guests
              </p>
            </div>
            
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--ref-spacing-8)',
                position: 'relative',
                zIndex: 1
              }}
            >
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  style={{
                    textAlign: 'center',
                    padding: 'var(--ref-spacing-8)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--ref-radius-2xl)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(200, 164, 106, 0.2)',
                    transition: 'all 0.4s ease'
                  }}
                  className="experience-card"
                >
                  <div 
                    style={{
                      fontSize: '3rem',
                      marginBottom: 'var(--ref-spacing-4)'
                    }}
                  >
                    {exp.icon}
                  </div>
                  <h4 
                    style={{
                      fontSize: 'var(--ref-font-size-xl)',
                      marginBottom: 'var(--ref-spacing-4)',
                      color: 'var(--sem-color-primary-base)'
                    }}
                  >
                    {exp.title}
                  </h4>
                  <p 
                    style={{
                      fontSize: 'var(--ref-font-size-base)',
                      opacity: 0.8,
                      lineHeight: 1.6
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lounge & Sauna Section */}
      <LoungeSaunaSection />

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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
              gap: 'var(--ref-spacing-16)',
              alignItems: 'center'
            }}
          >
            {/* Pricing & Availability */}
            <div 
              style={{
                background: 'linear-gradient(135deg, #FAFAFA, #F5F5F5)',
                borderRadius: 'var(--ref-radius-3xl)',
                padding: 'var(--ref-spacing-16)',
                border: '1px solid rgba(200, 164, 106, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, rgba(200, 164, 106, 0.1), transparent)',
                  transform: 'translate(50%, -50%)'
                }}
              />
              
              <h3 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'var(--ref-font-size-3xl)',
                  color: '#1E1E1E',
                  marginBottom: 'var(--ref-spacing-8)',
                  fontWeight: '600'
                }}
              >
                Rates & Booking
              </h3>
              
              <div style={{ marginBottom: 'var(--ref-spacing-12)' }}>
                <p 
                  style={{
                    fontSize: 'var(--ref-font-size-base)',
                    color: '#666666',
                    marginBottom: 'var(--ref-spacing-2)'
                  }}
                >
                  Private Suite starting from
                </p>
                <div 
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                    color: 'var(--sem-color-primary-base)',
                    fontWeight: '700',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  €450
                  <span 
                    style={{
                      fontSize: 'var(--ref-font-size-lg)',
                      fontWeight: '400',
                      color: '#666666',
                      marginLeft: 'var(--ref-spacing-3)'
                    }}
                  >
                    per night
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
                  padding: 'var(--ref-spacing-4) 0',
                  borderBottom: '1px solid rgba(200, 164, 106, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-3)'
                }}>
                  <span style={{ color: 'var(--sem-color-primary-base)' }}>✓</span>
                  Minimum stay 2 nights
                </li>
                <li style={{ 
                  padding: 'var(--ref-spacing-4) 0',
                  borderBottom: '1px solid rgba(200, 164, 106, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-3)'
                }}>
                  <span style={{ color: 'var(--sem-color-primary-base)' }}>✓</span>
                  Breakfast included
                </li>
                <li style={{ 
                  padding: 'var(--ref-spacing-4) 0',
                  borderBottom: '1px solid rgba(200, 164, 106, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-3)'
                }}>
                  <span style={{ color: 'var(--sem-color-primary-base)' }}>✓</span>
                  Airport transfers available
                </li>
                <li style={{ 
                  padding: 'var(--ref-spacing-4) 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--ref-spacing-3)'
                }}>
                  <span style={{ color: 'var(--sem-color-primary-base)' }}>✓</span>
                  Free cancellation 7 days before
                </li>
              </ul>
              
              <Link 
                href="/contact"
                style={{
                  display: 'block',
                  background: 'var(--sem-color-primary-base)',
                  color: 'var(--ref-color-neutral-0)',
                  padding: '1.25rem',
                  borderRadius: 'var(--ref-radius-full)',
                  textAlign: 'center',
                  fontSize: 'var(--ref-font-size-lg)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.4s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                className="btn-primary"
              >
                Check Availability
              </Link>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'var(--ref-font-size-3xl)',
                  color: '#1E1E1E',
                  marginBottom: 'var(--ref-spacing-8)',
                  fontWeight: '600'
                }}
              >
                Get in Touch
              </h3>
              
              <div style={{ marginBottom: 'var(--ref-spacing-12)' }}>
                <p 
                  style={{
                    fontSize: 'var(--ref-font-size-lg)',
                    color: '#666666',
                    lineHeight: 1.8,
                    marginBottom: 'var(--ref-spacing-8)'
                  }}
                >
                  Our dedicated team is here to help you plan the perfect Lapland escape. 
                  Contact us for personalized recommendations and special arrangements.
                </p>
                
                <div 
                  style={{
                    background: '#FAFAFA',
                    borderLeft: '4px solid var(--sem-color-primary-base)',
                    padding: 'var(--ref-spacing-8)',
                    borderRadius: 'var(--ref-radius-lg)'
                  }}
                >
                  <h4 
                    style={{
                      fontSize: 'var(--ref-font-size-xl)',
                      color: '#1E1E1E',
                      marginBottom: 'var(--ref-spacing-6)',
                      fontWeight: '600'
                    }}
                  >
                    OloResort Levi
                  </h4>
                  <p style={{ marginBottom: 'var(--ref-spacing-4)' }}>
                    <strong>Address:</strong><br />
                    Taalontie 46, 99130 Sirkka, Finland
                  </p>
                  <p style={{ marginBottom: 'var(--ref-spacing-4)' }}>
                    <strong>Email:</strong>{' '}
                    <a 
                      href="mailto:levi@oloresort.fi"
                      style={{ color: 'var(--sem-color-primary-base)', textDecoration: 'none' }}
                    >
                      levi@oloresort.fi
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a 
                      href="tel:+358449014162"
                      style={{ color: 'var(--sem-color-primary-base)', textDecoration: 'none' }}
                    >
                      +358 44 901 4162
                    </a>
                  </p>
                </div>
              </div>
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

        .suite-gallery-item:hover img {
          transform: scale(1.05);
        }

        .suite-gallery-item:hover .image-overlay {
          opacity: 1;
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
      `}</style>
    </div>
  );
}

