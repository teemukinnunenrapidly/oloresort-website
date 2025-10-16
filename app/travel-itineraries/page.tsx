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

  const tips = [
    { icon: '🧥', title: 'Clothing', text: 'Dress in layers. Warm clothes are available on loan for activities.' },
    { icon: '📸', title: 'Photography', text: 'Bring a tripod for northern lights photography. Cold drains batteries quickly.' },
    { icon: '🌡️', title: 'Weather', text: 'Winter -5°C to -30°C. Clear weather is best for northern lights.' },
    { icon: '💼', title: 'Packing', text: 'Bring: sunglasses, lip balm, hand cream and warm indoor shoes.' },
    { icon: '✈️', title: 'Arrival', text: 'Fly to Kittilä. We arrange transport from the airport (30 min).' },
    { icon: '💳', title: 'Payment', text: 'Cards work everywhere. Cash is usually not needed in Finland.' },
    { icon: '🗣️', title: 'Language', text: 'English is widely spoken. Our guides speak multiple languages.' },
    { icon: '🎯', title: 'Activities', text: 'Book activities in advance. We help tailor the program to your wishes.' }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--ref-color-neutral-1000)' }}>
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: '70vh',
          marginTop: '64px',
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(189, 152, 75, 0.8))'
        }}
      >
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
            animation: 'aurora 8s ease-in-out infinite'
          }}
        />
        
        <div 
          className="relative z-10 text-center fade-in-up"
          style={{
            maxWidth: '900px',
            padding: '4rem 2rem'
          }}
        >
          <h1 
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-6)',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
              lineHeight: 1.2
            }}
          >
            Ready-Made Travel Plans
          </h1>
          <p 
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'var(--sem-color-text-body-light)',
              marginBottom: '3rem',
              fontWeight: 'var(--ref-font-weight-light)',
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
              lineHeight: 1.5
            }}
          >
            Tailored Lapland vacations as 3-7 day packages
          </p>
        </div>
      </section>

      {/* Itinerary Selector */}
      <section 
        style={{
          padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
          backgroundColor: 'var(--sem-color-background-content)'
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)'
              }}
            >
              Choose Your Vacation Length
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9,
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Each package includes accommodation in OloResort's luxurious glass igloo, 
              airport transfers and carefully selected activities
            </p>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            style={{ marginBottom: 'var(--ref-spacing-16)' }}
          >
            {itineraries.map((itinerary, index) => (
              <div
                key={index}
                onClick={() => setSelectedDuration(itinerary.duration)}
                className="itinerary-card"
                style={{
                  background: selectedDuration === itinerary.duration 
                    ? 'linear-gradient(135deg, rgba(189, 152, 75, 0.2), rgba(30, 58, 138, 0.1))'
                    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(189, 152, 75, 0.1))',
                  border: `2px solid ${selectedDuration === itinerary.duration ? 'var(--sem-color-primary-base)' : 'rgba(189, 152, 75, 0.3)'}`,
                  borderRadius: 'var(--ref-radius-3xl)',
                  padding: '2.5rem',
                  textAlign: 'center',
                  transition: 'all var(--ref-duration-slow)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
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

      {/* Timeline Section */}
      <section 
        style={{
          padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
          background: 'linear-gradient(to bottom, var(--ref-color-neutral-1000), var(--sem-color-background-content))'
        }}
      >
        <div className="container max-w-4xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)'
              }}
            >
              3 Day Itinerary
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9
              }}
            >
              Your dream vacation planned day by day
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div 
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, var(--sem-color-primary-base), var(--ref-color-brand-blue-500))',
                transform: 'translateX(-50%)'
              }}
              className="hidden md:block"
            />

            {schedule3Days.map((day, index) => (
              <div 
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1fr auto 1fr' : '1fr auto 1fr',
                  gap: '2rem',
                  marginBottom: 'var(--ref-spacing-16)',
                  position: 'relative'
                }}
                className="timeline-item"
              >
                {/* Content */}
                <div 
                  style={{
                    gridColumn: index % 2 === 0 ? '1' : '3',
                    padding: '2rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(189, 152, 75, 0.2)',
                    borderRadius: 'var(--ref-radius-2xl)',
                    transition: 'all var(--ref-duration-slow)'
                  }}
                  className="timeline-content"
                >
                  <h3 
                    style={{
                      fontSize: 'var(--ref-font-size-2xl)',
                      color: 'var(--sem-color-primary-base)',
                      marginBottom: 'var(--ref-spacing-4)',
                      fontWeight: 'var(--ref-font-weight-semibold)'
                    }}
                  >
                    {day.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {day.activities.map((act, idx) => (
                      <li 
                        key={idx}
                        style={{
                          padding: '0.5rem 0',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          transition: 'all var(--ref-duration-base)',
                          color: 'var(--sem-color-text-body-light)'
                        }}
                      >
                        <span style={{ position: 'absolute', left: 0 }}>⭐</span>
                        <span 
                          style={{
                            display: 'inline-block',
                            background: 'rgba(189, 152, 75, 0.2)',
                            color: 'var(--sem-color-primary-base)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: 'var(--ref-radius-full)',
                            fontSize: 'var(--ref-font-size-sm)',
                            fontWeight: 'var(--ref-font-weight-semibold)',
                            marginRight: '0.5rem'
                          }}
                        >
                          {act.time}
                        </span>
                        {act.activity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dot */}
                <div 
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, var(--sem-color-primary-base), var(--ref-color-brand-gold-300))',
                    border: '4px solid var(--ref-color-neutral-1000)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'var(--ref-font-weight-bold)',
                    color: 'var(--ref-color-neutral-0)',
                    fontSize: 'var(--ref-font-size-xl)',
                    boxShadow: '0 5px 15px rgba(189, 152, 75, 0.4)',
                    zIndex: 1,
                    gridColumn: '2'
                  }}
                >
                  {day.day}
                </div>

                {/* Empty space for alternating layout */}
                <div style={{ gridColumn: index % 2 === 0 ? '3' : '1' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Day Schedule */}
      <section 
        style={{
          padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
          backgroundColor: 'var(--sem-color-background-content)'
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)'
              }}
            >
              Typical Day at OloResort
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9
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
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(189, 152, 75, 0.05))',
                  border: '1px solid rgba(189, 152, 75, 0.2)',
                  borderRadius: 'var(--ref-radius-2xl)',
                  overflow: 'hidden',
                  transition: 'all var(--ref-duration-slow)'
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

      {/* Tips Section */}
      <section 
        style={{
          padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
          background: 'linear-gradient(135deg, var(--ref-color-neutral-1000), var(--sem-color-background-content))'
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)'
              }}
            >
              Travel Tips
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9
              }}
            >
              Get the most out of your Lapland vacation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className="tip-card"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(189, 152, 75, 0.2)',
                  borderRadius: 'var(--ref-radius-2xl)',
                  padding: '2rem',
                  textAlign: 'center',
                  transition: 'all var(--ref-duration-slow)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, var(--sem-color-primary-base), var(--ref-color-brand-gold-300))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: 'var(--ref-font-size-2xl)',
                    boxShadow: '0 5px 15px rgba(189, 152, 75, 0.3)'
                  }}
                >
                  {tip.icon}
                </div>
                <h3 
                  style={{
                    fontSize: 'var(--ref-font-size-xl)',
                    color: 'var(--sem-color-primary-base)',
                    marginBottom: 'var(--ref-spacing-4)',
                    fontWeight: 'var(--ref-font-weight-semibold)'
                  }}
                >
                  {tip.title}
                </h3>
                <p 
                  style={{
                    fontSize: 'var(--ref-font-size-base)',
                    lineHeight: 1.6,
                    opacity: 0.9,
                    color: 'var(--sem-color-text-body-light)'
                  }}
                >
                  {tip.text}
                </p>
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
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-6)',
              fontWeight: 'var(--ref-font-weight-bold)'
            }}
          >
            Start Planning Your Dream Vacation
          </h2>
          <p 
            style={{
              fontSize: 'var(--ref-font-size-xl)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-12)',
              opacity: 0.95
            }}
          >
            We tailor a suitable travel package for each guest. 
            Tell us your wishes and we'll create the perfect Lapland vacation for you.
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
                padding: '1rem 3rem',
                borderRadius: 'var(--ref-radius-full)',
                textDecoration: 'none',
                fontSize: 'var(--ref-font-size-lg)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                transition: 'all var(--ref-duration-slow)',
                display: 'inline-block',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
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
                padding: '1rem 3rem',
                border: '2px solid var(--ref-color-neutral-0)',
                borderRadius: 'var(--ref-radius-full)',
                textDecoration: 'none',
                fontSize: 'var(--ref-font-size-lg)',
                fontWeight: 'var(--ref-font-weight-semibold)',
                transition: 'all var(--ref-duration-slow)',
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
            opacity: 1; 
          }
        }

        .itinerary-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .timeline-content:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: var(--sem-color-primary-base);
          background: linear-gradient(135deg, rgba(189, 152, 75, 0.1), rgba(0, 0, 0, 0.3));
        }

        .schedule-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: var(--sem-color-primary-base);
        }

        .tip-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--sem-color-primary-base), var(--ref-color-brand-blue-500), var(--sem-color-primary-base));
          transform: scaleX(0);
          transition: transform var(--ref-duration-slow);
        }

        .tip-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .tip-card:hover::after {
          transform: scaleX(1);
        }

        .btn-cta-primary:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.4);
        }

        .btn-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
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
