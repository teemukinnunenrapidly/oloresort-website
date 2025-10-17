'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TravelItinerariesPage() {
  const [selectedDuration, setSelectedDuration] = useState(3);

  const itineraries = [
    {
      duration: 3,
      title: 'Perfect Weekend Package',
      highlights: [
        'Northern Lights Hunt',
        'Husky Safari',
        'Reindeer Ride'
      ],
      badge: 'MOST POPULAR'
    },
    {
      duration: 5,
      title: 'Complete Lapland Experience',
      highlights: [
        'All 3-day activities',
        'Snowmobile Safari',
        'Santa Claus Village'
      ]
    },
    {
      duration: 7,
      title: 'Ultimate Arctic Adventure',
      highlights: [
        'All activities',
        'Day trip to Inari',
        'Private chef dinner'
      ]
    }
  ];

  const schedule3Days = [
    {
      day: 1,
      title: 'Day 1: Arrival',
      activities: [
        { time: '14:00', activity: 'Airport transfer' },
        { time: '15:00', activity: 'Check-in & welcome' },
        { time: '17:00', activity: 'Welcome sauna' },
        { time: '19:00', activity: 'Welcome dinner' },
        { time: '21:00', activity: 'Northern Lights hunt' }
      ]
    },
    {
      day: 2,
      title: 'Day 2: Adventures',
      activities: [
        { time: '08:00', activity: 'Breakfast' },
        { time: '10:00', activity: 'Husky safari (3h)' },
        { time: '14:00', activity: 'Lunch in a kota' },
        { time: '16:00', activity: 'Reindeer ride' },
        { time: '19:00', activity: 'Lappish dinner' }
      ]
    },
    {
      day: 3,
      title: 'Day 3: Departure',
      activities: [
        { time: '08:00', activity: 'Breakfast' },
        { time: '10:00', activity: 'Snowshoeing' },
        { time: '12:00', activity: 'Check-out' },
        { time: '13:00', activity: 'Airport transfer' }
      ]
    }
  ];

  const dailySchedule = [
    {
      time: '07:00',
      period: 'MORNING',
      icon: '☀️',
      activity: 'Wake up in nature',
      description: 'Wake up in the warmth of the glass igloo, admire the snowy landscape and enjoy coffee in bed.'
    },
    {
      time: '08:00',
      period: 'BREAKFAST',
      icon: '🍳',
      activity: 'Scandinavian breakfast buffet',
      description: 'Hearty breakfast made from local ingredients in our restaurant.'
    },
    {
      time: '10:00',
      period: 'ACTIVITY',
      icon: '🐺',
      activity: 'Daily adventure',
      description: 'Go on a safari with huskies or visit a reindeer farm. Experience the authentic Lapland way of life.'
    },
    {
      time: '14:00',
      period: 'LUNCH',
      icon: '🍽️',
      activity: 'Lunch in nature',
      description: 'Enjoy lunch by the campfire or return to the resort for a warm meal.'
    },
    {
      time: '16:00',
      period: 'RELAXATION',
      icon: '🧖',
      activity: 'Sauna & spa',
      description: 'Relax in a traditional sauna and enjoy the outdoor hot tub under the starry sky.'
    },
    {
      time: '19:00',
      period: 'DINNER',
      icon: '🍷',
      activity: 'Gourmet dinner',
      description: 'Enjoy a carefully prepared 3-course dinner made from local ingredients.'
    },
    {
      time: '21:00',
      period: 'EVENING',
      icon: '🌌',
      activity: 'Northern Lights hunting',
      description: 'Go on a guided tour or admire the northern lights from your own igloo.'
    },
    {
      time: '23:00',
      period: 'NIGHT',
      icon: '🛏️',
      activity: 'Sleep under glass ceiling',
      description: 'Fall asleep under the starry sky and possible northern lights.'
    }
  ];


  return (
    <div className="min-h-screen" style={{ background: 'var(--ref-color-neutral-1000)' }}>
      {/* Continuous Background Section - Hero + Itinerary Selector */}
      <div 
        className="relative"
        style={{
          position: 'relative',
          backgroundImage: `url("https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_95/DJI_0202_acv1wh")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for entire background section */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* Hero Section */}
        <section 
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            minHeight: '70vh',
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
          
          <div 
            className="relative z-10 text-center fade-in-up"
            style={{
              maxWidth: '900px',
              padding: '4rem 2rem',
              zIndex: 10
            }}
          >
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 'var(--ref-font-weight-bold)',
                fontFamily: 'Montserrat, sans-serif',
                color: 'var(--ref-color-neutral-0)',
                marginBottom: 'var(--ref-spacing-8)',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                lineHeight: 1.3,
                letterSpacing: '-0.02em'
              }}
            >
              Ready-Made Travel Plans
            </h1>
            <p 
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                fontFamily: 'Lato, sans-serif',
                color: 'var(--sem-color-text-body-light)',
                marginBottom: '3rem',
                fontWeight: 'var(--ref-font-weight-regular)',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
                lineHeight: 1.6,
                opacity: 0.95
              }}
            >
              Tailored Lapland vacations as 3-7 day packages
            </p>
          </div>
        </section>

        {/* Itinerary Selector - Still on background image */}
        <section 
          className="relative"
          style={{
            padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
            position: 'relative',
            zIndex: 5
          }}
        >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-20)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontFamily: 'Montserrat, sans-serif',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-8)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                letterSpacing: '-0.01em'
              }}
            >
              Choose Your Vacation Length
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-lg)',
                fontFamily: 'Lato, sans-serif',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.85,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.7
              }}
            >
              Each package includes accommodation in OloResort&apos;s luxurious glass igloo, 
              airport transfers and carefully selected activities
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            style={{ marginBottom: 'var(--ref-spacing-20)' }}
          >
            {itineraries.map((itinerary, index) => (
              <div
                key={index}
                onClick={() => setSelectedDuration(itinerary.duration)}
                className="itinerary-card"
                style={{
                  background: selectedDuration === itinerary.duration 
                    ? 'rgba(255, 255, 255, 0.12)'
                    : 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `2px solid ${selectedDuration === itinerary.duration ? 'var(--sem-color-primary-base)' : 'rgba(189, 152, 75, 0.3)'}`,
                  borderRadius: 'var(--ref-radius-3xl)',
                  padding: '3rem',
                  textAlign: 'center',
                  transition: 'all 0.4s ease-in-out',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: selectedDuration === itinerary.duration 
                    ? '0 12px 24px rgba(189, 152, 75, 0.25)'
                    : '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
              >
                <div 
                  style={{
                    fontSize: '4rem',
                    fontWeight: 'var(--ref-font-weight-bold)',
                    color: 'var(--sem-color-primary-base)',
                    lineHeight: 1,
                    marginBottom: '0.5rem'
                  }}
                >
                  {itinerary.duration}
                </div>
                <div 
                  style={{
                    fontSize: 'var(--ref-font-size-xl)',
                    color: 'var(--sem-color-text-body-light)',
                    marginBottom: 'var(--ref-spacing-6)',
                    fontWeight: 'var(--ref-font-weight-semibold)'
                  }}
                >
                  days
                </div>
                <p 
                  style={{
                    fontSize: 'var(--ref-font-size-base)',
                    color: 'var(--sem-color-text-body-light)',
                    opacity: 0.9,
                    lineHeight: 1.6
                  }}
                >
                  {itinerary.title}
                  <br /><br />
                  {itinerary.highlights.map((highlight, idx) => (
                    <span key={idx}>
                      • {highlight}<br />
                    </span>
                  ))}
                </p>
                {itinerary.badge && (
                  <span 
                    style={{
                      display: 'inline-block',
                      background: 'var(--ref-color-semantic-success-500)',
                      color: 'var(--ref-color-neutral-0)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--ref-radius-full)',
                      fontSize: 'var(--ref-font-size-xs)',
                      fontWeight: 'var(--ref-font-weight-semibold)',
                      marginTop: 'var(--ref-spacing-4)'
                    }}
                  >
                    {itinerary.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        </section>
      </div>
      {/* End of Continuous Background Section */}

      {/* Timeline Section */}
      <section 
        style={{
          padding: 'var(--ref-spacing-24) var(--ref-spacing-8)',
          background: 'linear-gradient(to bottom, var(--ref-color-neutral-1000), var(--sem-color-background-content))'
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-20)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontFamily: 'Montserrat, sans-serif',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-8)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                letterSpacing: '-0.01em'
              }}
            >
              3 Day Itinerary
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-lg)',
                fontFamily: 'Lato, sans-serif',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.85,
                lineHeight: 1.7
              }}
            >
              Your dream vacation planned day by day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schedule3Days.map((day, index) => (
              <div 
                key={index}
                className="day-card"
                style={{
                  padding: '3rem',
                  background: 'rgba(30, 30, 30, 0.5)',
                  border: '1px solid rgba(189, 152, 75, 0.25)',
                  borderRadius: 'var(--ref-radius-3xl)',
                  transition: 'all 0.4s ease-in-out',
                  position: 'relative'
                }}
              >
                <h3 
                  style={{
                    fontSize: 'var(--ref-font-size-2xl)',
                    color: 'var(--sem-color-primary-base)',
                    marginBottom: 'var(--ref-spacing-8)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                    textAlign: 'center'
                  }}
                >
                  {day.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {day.activities.map((act, idx) => (
                    <li 
                      key={idx}
                      style={{
                        padding: '0.75rem 0',
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        transition: 'all var(--ref-duration-base)',
                        color: 'var(--sem-color-text-body-light)',
                        borderBottom: idx < day.activities.length - 1 ? '1px solid rgba(189, 152, 75, 0.1)' : 'none'
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: 'var(--sem-color-primary-base)' }}>•</span>
                      <span 
                        style={{
                          display: 'inline-block',
                          background: 'rgba(189, 152, 75, 0.2)',
                          color: 'var(--sem-color-primary-base)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: 'var(--ref-radius-full)',
                          fontSize: 'var(--ref-font-size-sm)',
                          fontWeight: 'var(--ref-font-weight-semibold)',
                          marginRight: '0.75rem'
                        }}
                      >
                        {act.time}
                      </span>
                      {act.activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Day Schedule */}
      <section 
        style={{
          padding: 'var(--ref-spacing-24) var(--ref-spacing-8)',
          backgroundColor: 'var(--sem-color-background-content)'
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-20)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontFamily: 'Montserrat, sans-serif',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-8)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                letterSpacing: '-0.01em'
              }}
            >
              Typical Day at OloResort
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-lg)',
                fontFamily: 'Lato, sans-serif',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.85,
                lineHeight: 1.7
              }}
            >
              This is what your day could look like on vacation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailySchedule.map((item, index) => (
              <div 
                key={index}
                className="schedule-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.6), rgba(189, 152, 75, 0.08))',
                  border: '1px solid rgba(189, 152, 75, 0.25)',
                  borderRadius: 'var(--ref-radius-3xl)',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                <div 
                  style={{
                    background: 'linear-gradient(135deg, var(--sem-color-primary-base), var(--ref-color-brand-gold-700))',
                    padding: 'var(--ref-spacing-6)',
                    textAlign: 'center'
                  }}
                >
                  <div 
                    style={{
                      fontSize: '2rem',
                      fontWeight: 'var(--ref-font-weight-bold)',
                      color: 'var(--ref-color-neutral-0)'
                    }}
                  >
                    {item.time}
                  </div>
                  <div 
                    style={{
                      fontSize: 'var(--ref-font-size-base)',
                      color: 'var(--sem-color-text-body-light)',
                      opacity: 0.9
                    }}
                  >
                    {item.period}
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--ref-spacing-4)' }}>
                    {item.icon}
                  </div>
                  <h3 
                    style={{
                      fontSize: 'var(--ref-font-size-xl)',
                      color: 'var(--sem-color-primary-base)',
                      marginBottom: 'var(--ref-spacing-4)',
                      fontWeight: 'var(--ref-font-weight-semibold)'
                    }}
                  >
                    {item.activity}
                  </h3>
                  <p 
                    style={{
                      lineHeight: 1.6,
                      opacity: 0.9,
                      color: 'var(--sem-color-text-body-light)'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section 
        className="cta-pattern relative overflow-hidden text-center"
        style={{
          padding: 'var(--ref-spacing-32) var(--ref-spacing-8)',
          background: 'linear-gradient(135deg, var(--ref-color-brand-blue-500), var(--sem-color-primary-base))'
        }}
      >
        <div 
          className="relative z-10"
          style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontFamily: 'Montserrat, sans-serif',
                color: 'var(--ref-color-neutral-0)',
                marginBottom: 'var(--ref-spacing-8)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                letterSpacing: '-0.01em'
              }}
            >
              Start Planning Your Dream Vacation
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-lg)',
                fontFamily: 'Lato, sans-serif',
                color: 'var(--ref-color-neutral-0)',
                marginBottom: 'var(--ref-spacing-12)',
                opacity: 0.9,
                lineHeight: 1.7
              }}
            >
              We tailor a suitable travel package for each guest. 
              Tell us your wishes and we&apos;ll create the perfect Lapland vacation for you.
            </p>
          <div 
            style={{
              display: 'flex',
              gap: 'var(--ref-spacing-6)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Link
              href="/contact"
              style={{
                background: 'var(--ref-color-neutral-0)',
                color: 'var(--sem-color-primary-base)',
                padding: '1.25rem 3.5rem',
                borderRadius: 'var(--ref-radius-full)',
                textDecoration: 'none',
                fontSize: 'var(--ref-font-size-lg)',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 'var(--ref-font-weight-semibold)',
                transition: 'all 0.4s ease-in-out',
                display: 'inline-block',
                boxShadow: '0 8px 24px rgba(255, 255, 255, 0.25)'
              }}
              className="btn-cta-primary"
            >
              Book Trip
            </Link>
            <Link
              href="/contact"
              style={{
                background: 'transparent',
                color: 'var(--ref-color-neutral-0)',
                padding: '1.25rem 3.5rem',
                border: '2px solid var(--ref-color-neutral-0)',
                borderRadius: 'var(--ref-radius-full)',
                textDecoration: 'none',
                fontSize: 'var(--ref-font-size-lg)',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 'var(--ref-font-weight-medium)',
                transition: 'all 0.4s ease-in-out',
                display: 'inline-block'
              }}
              className="btn-cta-outline"
            >
              Ask for More Info
            </Link>
          </div>
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

        .itinerary-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .timeline-content:hover {
          transform: scale(1.01);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
          border-color: var(--sem-color-primary-base);
          background: linear-gradient(135deg, rgba(189, 152, 75, 0.12), rgba(30, 30, 30, 0.5));
        }

        .schedule-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
          border-color: var(--sem-color-primary-base);
        }


        .btn-cta-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 32px rgba(255, 255, 255, 0.35);
          background: var(--ref-color-brand-gold-200);
        }

        .btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
          border-color: var(--ref-color-brand-gold-200);
          color: var(--ref-color-brand-gold-200);
        }

        .cta-pattern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="white" opacity="0.1"/><circle cx="80" cy="80" r="2" fill="white" opacity="0.1"/><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
          animation: float 20s infinite linear;
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100px, -100px); }
        }

        @media (max-width: 768px) {
          .timeline-item {
            grid-template-columns: auto 1fr !important;
          }
          
          .timeline-content {
            grid-column: 2 !important;
          }
        }
      `}</style>
    </div>
  );
}
