'use client';

import Link from 'next/link';
import React from 'react';

export default function ActivitiesPage() {
  const packages = [
    {
      title: "3 Night Package",
      subtitle: "Perfect Weekend Escape",
      description: "From the moment you arrive in Levi, your experience is designed to be effortless. OloResort provides private airport transfers directly to your accommodation.",
      includedActivities: [
        {
          title: "Husky Safari",
          description: "Race through snowy landscapes pulled by an enthusiastic husky team",
          included: true
        },
        {
          title: "Reindeer Sleigh Ride",
          description: "Glide through the quiet, snow-covered wilderness listening to the sound of reindeer bells",
          included: true
        },
        {
          title: "Snowmobile Safari",
          description: "Feel the adrenaline rush as you explore Levi's breathtaking wilderness",
          included: true
        }
      ],
      optionalActivities: [
        "Downhill Skiing",
        "Cross-country Skiing",
        "Snowshoeing",
        "Northern Lights Tour",
        "Ice Fishing Experience"
      ]
    },
    {
      title: "4 Night Package",
      subtitle: "Extended Lapland Adventure",
      description: "Looking to experience even more of Levi's wonders? The 4-night package offers the perfect balance of adventure and relaxation.",
      includedActivities: [
        {
          title: "Santa Claus Village Day Trip",
          description: "Experience Christmas magic, Snowman World, cross the Arctic Circle and meet Santa Claus!",
          included: true
        },
        {
          title: "Northern Lights Hunt",
          description: "Maximize your chances of seeing this natural wonder",
          included: true
        },
        {
          title: "Traditional Reindeer Farm Visit with Sleigh Ride",
          description: "Experience the life of a reindeer herder in this captivating activity",
          included: true
        },
        {
          title: "Snowshoeing Adventure",
          description: "Trek through untouched snow fields in a peaceful environment",
          included: true
        }
      ],
      optionalActivities: [
        "Husky Safari",
        "Snowmobile Safari",
        "Downhill Skiing",
        "Cross-country Skiing",
        "Ice Fishing"
      ]
    }
  ];

  const galleryActivities = [
    {
      icon: "🐺",
      title: "Husky Safari",
      description: "Experience Arctic adventure with a husky team in snowy forests"
    },
    {
      icon: "🦌",
      title: "Reindeer Sleigh Ride",
      description: "Traditional Lapland experience at a peaceful pace"
    },
    {
      icon: "🏔️",
      title: "Snowmobile Safari",
      description: "Thrilling action on 2-6 hour safaris on different routes",
      image: "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_800,h_600,c_fill,g_center/Northern_Lights_snowmobile_1_coq0it"
    },
    {
      icon: "✨",
      title: "Northern Lights Hunt",
      description: "Hunt for dancing lights in the dark night sky",
      image: "https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_800,h_600,c_fill,g_center/LRT_00170_su5dq6"
    }
  ];

  const individualActivities = [
    {
      icon: "🐕‍🦺",
      title: "Husky Safari",
      description: "2-4 hour adventure with a husky team. Drive yourself or enjoy the ride."
    },
    {
      icon: "🦌",
      title: "Reindeer Sleigh Ride",
      description: "Peaceful 1-2 hour sleigh ride pulled by reindeer in nature's silence."
    },
    {
      icon: "🏍️",
      title: "Snowmobile Safari",
      description: "Thrilling action on 2-6 hour safaris on different routes."
    },
    {
      icon: "🎿",
      title: "Downhill Skiing",
      description: "Levi's world-class slopes offer challenges for skiers of all levels."
    },
    {
      icon: "⛷️",
      title: "Cross-country Skiing",
      description: "Kilometers of trails in beautiful Lapland landscapes."
    },
    {
      icon: "🥾",
      title: "Snowshoeing",
      description: "Peaceful walking in snow in the heart of nature."
    },
    {
      icon: "🌌",
      title: "Northern Lights Hunt",
      description: "Guided tour to the best Northern Lights viewing spots."
    },
    {
      icon: "🐟",
      title: "Ice Fishing",
      description: "Traditional winter fishing experience on frozen lakes."
    },
    {
      icon: "🎅",
      title: "Santa Claus Village",
      description: "Day trip to Rovaniemi to meet Santa Claus."
    }
  ];

  return (
    <div style={{ background: 'var(--sem-color-background-page)', color: 'var(--sem-color-text-body-light)' }}>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_center/Northern_lights_Winter_1_copy_qwdsiu")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Glassmorphism overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        
        {/* Aurora Animation */}
        <div 
          className="aurora-animation"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent, rgba(16, 185, 129, 0.2), transparent, rgba(189, 152, 75, 0.2), transparent)',
            animation: 'aurora 12s ease-in-out infinite',
            zIndex: 2
          }}
        />
        <div className="relative z-10 text-center fade-in-up" style={{ 
          maxWidth: '900px', 
          padding: '0 var(--ref-spacing-8)',
          marginTop: 'var(--ref-spacing-16)'
        }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--sem-color-primary-base)',
              marginBottom: 'var(--ref-spacing-6)',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
              lineHeight: 'var(--ref-font-lineHeight-tight)',
            }}
          >
            Looking for Activities in Levi?
          </h1>
          <p
            className="subtitle"
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
              color: 'var(--sem-color-text-body-light)',
              marginBottom: 'var(--ref-spacing-8)',
              fontWeight: 'var(--ref-font-weight-light)',
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
            }}
          >
            Levi offers diverse activities year-round
          </p>
          <p
            className="hero-description"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'var(--sem-color-text-body-light)',
              marginBottom: 'var(--ref-spacing-12)',
              maxWidth: '700px',
              margin: '0 auto var(--ref-spacing-12) auto',
              opacity: '0.95',
            }}
          >
            We help you find the perfect experiences to make your holiday unforgettable – and as enjoyable as possible!
            Explore examples of the perfect holiday in Levi and book your dream vacation!
          </p>
        </div>
      </section>

      {/* Package Cards Section */}
      <section 
        className="packages-section" 
        id="paketit" 
        style={{ 
          padding: 'var(--ref-spacing-20) var(--ref-spacing-8)', 
          backgroundImage: `url("https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_center/Northern_lights_Winter_1_copy_qwdsiu")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative">
        <div className="max-w-[var(--sem-spacing-page-maxWidth)] mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              Our Holiday Packages
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--sem-color-text-body-light)',
                opacity: '0.9',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Choose a 3 or 4 night dream holiday - we&apos;ll take care of the rest
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--ref-spacing-12)]" style={{ marginTop: 'var(--ref-spacing-16)' }}>
            {packages.map((pkg, index) => (
              <div key={index} className="package-card">
                <div className="package-header">
                  <h3
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      color: 'var(--ref-color-neutral-0)',
                      marginBottom: 'var(--ref-spacing-2)',
                      fontWeight: 'var(--ref-font-weight-bold)',
                    }}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--sem-color-text-body-light)',
                      fontSize: 'var(--ref-font-size-lg)',
                      opacity: '0.95',
                    }}
                  >
                    {pkg.subtitle}
                  </p>
                </div>
                <div className="package-body">
                  <p
                    style={{
                      fontSize: 'var(--ref-font-size-lg)',
                      marginBottom: 'var(--ref-spacing-8)',
                      lineHeight: 'var(--ref-font-lineHeight-relaxed)',
                    }}
                  >
                    {pkg.description}
                  </p>

                  <div className="activities-list" style={{ marginBottom: 'var(--ref-spacing-10)' }}>
                    <h4
                      style={{
                        color: 'var(--sem-color-primary-base)',
                        fontSize: 'var(--ref-font-size-xl)',
                        marginBottom: 'var(--ref-spacing-6)',
                        fontWeight: 'var(--ref-font-weight-semibold)',
                      }}
                    >
                      Package&apos;s unforgettable experiences:
                    </h4>
                    <ul style={{ listStyle: 'none' }}>
                      {pkg.includedActivities.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          style={{
                            paddingTop: 'var(--ref-spacing-3)',
                            paddingBottom: 'var(--ref-spacing-3)',
                            paddingLeft: 'var(--ref-spacing-10)',
                            paddingRight: '0',
                            position: 'relative',
                            fontSize: 'var(--ref-font-size-lg)',
                            lineHeight: 'var(--ref-font-lineHeight-normal)',
                            transition: 'all var(--ref-duration-base)',
                          }}
                        >
                          <strong style={{ color: 'var(--sem-color-primary-base)', fontWeight: 'var(--ref-font-weight-semibold)' }}>
                            {activity.title}
                          </strong>
                          <span className="badge-success">Included</span>
                          <br />
                          {activity.description}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="activities-list" style={{ marginBottom: 'var(--ref-spacing-10)' }}>
                    <h4
                      style={{
                        color: 'var(--sem-color-primary-base)',
                        fontSize: 'var(--ref-font-size-xl)',
                        marginBottom: 'var(--ref-spacing-6)',
                        fontWeight: 'var(--ref-font-weight-semibold)',
                      }}
                    >
                      Optional additional activities:
                    </h4>
                    <ul style={{ listStyle: 'none' }}>
                      {pkg.optionalActivities.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          style={{
                            paddingTop: 'var(--ref-spacing-3)',
                            paddingBottom: 'var(--ref-spacing-3)',
                            paddingLeft: 'var(--ref-spacing-10)',
                            paddingRight: '0',
                            position: 'relative',
                            fontSize: 'var(--ref-font-size-lg)',
                            lineHeight: 'var(--ref-font-lineHeight-normal)',
                            transition: 'all var(--ref-duration-base)',
                          }}
                        >
                          {activity}
                          <span className="badge-info">Additional fee</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-[var(--ref-spacing-4)] flex-wrap" style={{ marginTop: 'var(--ref-spacing-8)' }}>
                    <Link href="#book" className="btn-primary">
                      Book {pkg.title}
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                      Ask for more info
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section 
        className="gallery-section" 
        style={{ 
          padding: 'var(--ref-spacing-20) var(--ref-spacing-8)', 
          backgroundImage: `url("https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_center/Northern_lights_Winter_1_ywd1kv")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-[var(--sem-spacing-page-maxWidth)] mx-auto">
          <div 
            className="text-center glassmorphism-header" 
            style={{ 
              marginBottom: 'var(--ref-spacing-16)',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--ref-radius-3xl)',
              padding: 'var(--ref-spacing-12) var(--ref-spacing-8)',
              margin: '0 auto var(--ref-spacing-16) auto',
              maxWidth: '800px'
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              Our Activities in Pictures
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--sem-color-text-body-light)',
                opacity: '0.9',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              See what Levi has to offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--ref-spacing-8)]" style={{ marginTop: 'var(--ref-spacing-16)' }}>
            {galleryActivities.map((activity, index) => {
              const [isHovered, setIsHovered] = React.useState(false);
              
              return (
                <div 
                  key={index} 
                  className="activity-gallery-card"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 'var(--ref-radius-3xl)',
                    border: isHovered 
                      ? '2px solid rgba(200, 164, 106, 0.6)' 
                      : '1px solid rgba(200, 164, 106, 0.35)',
                    cursor: 'pointer',
                    transition: 'all var(--ref-duration-slower) ease-in-out',
                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isHovered 
                      ? '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(200, 164, 106, 0.4), inset 0 0 30px rgba(200, 164, 106, 0.15)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 30px rgba(200, 164, 106, 0.25), inset 0 0 20px rgba(200, 164, 106, 0.08)',
                    background: 'linear-gradient(135deg, rgba(200, 164, 106, 0.06) 0%, transparent 60%)',
                    backgroundImage: activity.image ? `url("${activity.image}")` : 'linear-gradient(135deg, var(--sem-color-background-content), var(--sem-color-background-page))',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '400px'
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Gradient Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `linear-gradient(to top, 
                        rgba(30, 30, 30, 0.95) 0%, 
                        rgba(30, 30, 30, 0.7) 30%,
                        rgba(30, 30, 30, 0.4) 50%, 
                        rgba(30, 30, 30, 0.1) 80%, 
                        transparent 100%),
                      linear-gradient(135deg, 
                        rgba(200, 164, 106, 0.05) 0%, 
                        transparent 40%)`,
                      transition: 'opacity var(--ref-duration-slower)',
                      opacity: isHovered ? 0.9 : 1,
                    }}
                  />
                  
                  <div className="activity-icon" style={{ 
                    display: activity.image ? 'none' : 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'rgba(189, 152, 75, 0.9)',
                    borderRadius: '50%',
                    fontSize: 'var(--ref-font-size-3xl)',
                    position: 'absolute',
                    top: 'var(--ref-spacing-6)',
                    right: 'var(--ref-spacing-6)',
                    zIndex: 5,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform var(--ref-duration-slower) ease-in-out'
                  }}>
                    {activity.icon}
                  </div>
                  
                  <div 
                    className="activity-info absolute bottom-0 left-0 right-0 z-10"
                    style={{
                      padding: 'var(--ref-spacing-12)',
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                      transition: 'transform var(--ref-duration-slower) ease-in-out',
                    }}
                  >
                    {/* Small accent line above title */}
                    <div
                      style={{
                        width: '60px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #C8A46A 0%, #E5C882 50%, rgba(200, 164, 106, 0.4) 100%)',
                        marginBottom: 'var(--ref-spacing-6)',
                        opacity: isHovered ? 1 : 0.8,
                        transform: isHovered ? 'scaleX(1.5)' : 'scaleX(1)',
                        transformOrigin: 'left',
                        transition: 'all var(--ref-duration-slower) cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: '0 0 10px rgba(200, 164, 106, 0.4)',
                      }}
                    />
                    <h3
                      style={{
                        fontSize: 'var(--ref-font-size-3xl)',
                        color: '#FFFFFF',
                        marginBottom: 'var(--ref-spacing-4)',
                        fontWeight: '700',
                        fontFamily: 'Montserrat, sans-serif',
                        letterSpacing: '0.02em',
                        lineHeight: 1.2,
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                      }}
                    >
                      {activity.title}
                    </h3>
                    <p
                      style={{
                        color: '#E8E1D4',
                        fontSize: 'var(--ref-font-size-lg)',
                        fontFamily: 'Lato, sans-serif',
                        lineHeight: 1.8,
                        marginBottom: 'var(--ref-spacing-6)',
                        opacity: isHovered ? 1 : 0.9,
                        transition: 'opacity var(--ref-duration-slower)',
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {activity.description}
                    </p>
                    
                    {/* Decorative link element */}
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
                      <span
                        style={{
                          color: '#C8A46A',
                          fontSize: 'var(--ref-font-size-sm)',
                          fontWeight: '600',
                          fontFamily: 'Montserrat, sans-serif',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          textShadow: '0 0 15px rgba(200, 164, 106, 0.5)',
                        }}
                      >
                        Learn More
                        <span style={{ 
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)', 
                          transition: 'transform var(--ref-duration-slower) cubic-bezier(0.4, 0, 0.2, 1)',
                          display: 'inline-block',
                          marginLeft: 'var(--ref-spacing-2)'
                        }}>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Activities Detail */}
      <section className="activities-detail" id="aktiviteetit" style={{ padding: 'var(--ref-spacing-20) var(--ref-spacing-8)', background: 'var(--sem-color-background-content)' }}>
        <div className="max-w-[var(--sem-spacing-page-maxWidth)] mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              All Activities
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--sem-color-text-body-light)',
                opacity: '0.9',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Individual activities can be booked below
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--ref-spacing-8)]" style={{ marginTop: 'var(--ref-spacing-16)' }}>
            {individualActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div
                  style={{
                    fontSize: 'var(--ref-font-size-6xl)',
                    marginBottom: 'var(--ref-spacing-4)',
                  }}
                >
                  {activity.icon}
                </div>
                <h3
                  style={{
                    color: 'var(--sem-color-primary-base)',
                    fontSize: 'var(--ref-font-size-xl)',
                    marginBottom: 'var(--ref-spacing-4)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                  }}
                >
                  {activity.title}
                </h3>
                <p
                  style={{
                    lineHeight: 'var(--ref-font-lineHeight-normal)',
                    opacity: '0.9',
                  }}
                >
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="booking-section relative overflow-hidden text-center cta-pattern" id="book" style={{ padding: 'var(--ref-spacing-20) var(--ref-spacing-8)', background: 'linear-gradient(135deg, var(--sem-color-secondary-base), var(--sem-color-primary-base))' }}>
        <div className="max-w-[var(--sem-spacing-page-maxWidth)] mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--ref-color-neutral-0)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              Book Unforgettable Activities
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--sem-color-text-body-light)',
                marginBottom: 'var(--ref-spacing-8)',
                opacity: '0.95',
              }}
            >
              Fill out the form below and we&apos;ll customize the perfect holiday package for you
            </p>
          </div>

          <form className="booking-form max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--ref-spacing-8)] mb-[var(--ref-spacing-8)]">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span style={{ color: 'var(--sem-color-status-warning-base)' }}>*</span>
                </label>
                <input type="text" id="name" name="name" className="form-input" required />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span style={{ color: 'var(--sem-color-status-warning-base)' }}>*</span>
                </label>
                <input type="email" id="email" name="email" className="form-input" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--ref-spacing-8)] mb-[var(--ref-spacing-8)]">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="package" className="form-label">Choose Package</label>
                <select id="package" name="package" className="form-input">
                  <option value="">Choose package or request customized</option>
                  <option value="3-nights">3 Night Package</option>
                  <option value="4-nights">4 Night Package</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--ref-spacing-8)] mb-[var(--ref-spacing-8)]">
              <div className="form-group">
                <label htmlFor="arrival" className="form-label">Arrival Date</label>
                <input type="date" id="arrival" name="arrival" className="form-input" />
              </div>

              <div className="form-group">
                <label htmlFor="guests" className="form-label">Number of Guests</label>
                <input type="number" id="guests" name="guests" min="1" max="10" className="form-input" />
              </div>
            </div>

            <div className="form-group mb-[var(--ref-spacing-10)]">
              <label htmlFor="message" className="form-label">Additional Information and Requests</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-input" 
                style={{ minHeight: '120px', resize: 'vertical' }}
                placeholder="Tell us about your wishes and special needs..."
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn-primary">
                Send Booking Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Add custom styles for animations */}
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
      `}</style>
    </div>
  );
}