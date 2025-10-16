import Link from 'next/link';
import FAQ from '../components/FAQ';

export default function AccommodationPage() {
  const whyChoose = [
    {
      icon: "🌟",
      title: "Unique Experience",
      description: "Enjoy the northern lights and starry sky from the warmth of your blanket. Glass ceiling and large glass surfaces offer an unobstructed view of Lapland's natural wonders."
    },
    {
      icon: "🏔️",
      title: "Peaceful Location",
      description: "Located in the embrace of nature, yet just a short distance from Levi center. Perfect combination of peace and accessibility."
    },
    {
      icon: "💎",
      title: "Luxury and Comfort",
      description: "Each suite is equipped with premium amenities. Private bathroom, fully equipped kitchen and all modern conveniences."
    }
  ];

  const suiteFeatures = [
    "Large glass surfaces and glass ceiling for northern lights viewing",
    "King-size bed with premium mattress",
    "Fully equipped kitchen and dining table for two",
    "Private bathroom with shower and WC",
    "Hair dryer and steam iron",
    "Kettle, coffee maker, refrigerator, small stove, microwave",
    "Free WiFi and Smart-TV",
    "Heated floor and air conditioning"
  ];

  const loungeImages = [
    { label: "Atmospheric lounge area" },
    { label: "Traditional Finnish sauna" },
    { label: "Outdoor hot tub under the stars" },
    { label: "Fireplace and relaxation area" }
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
      
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: '80vh',
          marginTop: '64px',
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(189, 152, 75, 0.9)), url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1920 1080\'><rect fill=\'%23181212\' width=\'1920\' height=\'1080\'/><circle cx=\'960\' cy=\'540\' r=\'400\' fill=\'%23bd984b\' opacity=\'0.1\'/></svg>")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 text-center fade-in-up" style={{ 
          maxWidth: '900px', 
          padding: 'var(--ref-spacing-16) var(--ref-spacing-8)' 
        }}>
          <h1 
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-6)',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
              lineHeight: 1.2,
            }}
          >
            Book Accommodation in Levi at OloResort
          </h1>
          <p 
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'var(--sem-color-text-body-light)',
              marginBottom: 'var(--ref-spacing-8)',
              fontWeight: 'var(--ref-font-weight-light)',
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
              lineHeight: 1.5,
            }}
          >
            Dream accommodation in Levi – Experience luxury and natural beauty
          </p>
          <p 
            style={{
              fontSize: 'var(--ref-font-size-lg)',
              color: 'var(--sem-color-text-body-light)',
              marginBottom: 'var(--ref-spacing-12)',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              opacity: 0.95,
            }}
          >
            Escape to the peace of Lapland wilderness on your dream vacation. In OloResort's glass igloo you can admire golden sunsets, 
            dancing northern lights and the starry sky right from your bed. Relax in the Lounge & Sauna area with a relaxing sauna or hot tub 
            session and enjoy the warmth of the fireplace surrounded by nature.
          </p>
          <div className="flex gap-[var(--ref-spacing-6)] justify-center flex-wrap">
            <Link href="#book" className="btn-primary">
              Book Your Dream Vacation
            </Link>
            <Link href="#suite" className="btn-secondary">
              Explore Suites
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose OloResort Section */}
      <section style={{ 
        padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
        backgroundColor: 'var(--sem-color-background-content)'
      }}>
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              Why Choose OloResort Glass Igloos?
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9,
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Three reasons to choose OloResort as your dream vacation destination
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--ref-spacing-12)]" style={{ marginTop: 'var(--ref-spacing-16)' }}>
            {whyChoose.map((item, index) => (
              <div 
                key={index}
                className="why-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(189, 152, 75, 0.1), rgba(30, 58, 138, 0.05))',
                  border: '1px solid rgba(189, 152, 75, 0.3)',
                  borderRadius: 'var(--ref-radius-3xl)',
                  padding: 'var(--ref-spacing-12)',
                  textAlign: 'center',
                  transition: 'all var(--ref-duration-slow)',
                }}
              >
                <div 
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--sem-color-primary-base), var(--sem-color-primary-hover))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--ref-spacing-8)',
                    fontSize: 'var(--ref-font-size-3xl)',
                    color: 'var(--ref-color-neutral-0)',
                    boxShadow: '0 10px 30px rgba(189, 152, 75, 0.3)',
                  }}
                >
                  {item.icon}
                </div>
                <h3 
                  style={{
                    color: 'var(--sem-color-primary-base)',
                    fontSize: 'var(--ref-font-size-2xl)',
                    marginBottom: 'var(--ref-spacing-4)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  style={{
                    color: 'var(--sem-color-text-body-light)',
                    lineHeight: 1.8,
                    fontSize: 'var(--ref-font-size-lg)',
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OloResort Private Suite Section */}
      <section 
        id="suite"
        style={{ 
          padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
          background: 'linear-gradient(to bottom, var(--sem-color-background-content), var(--ref-color-neutral-1000))',
        }}
      >
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              OloResort Private Suite
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9,
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Luxurious accommodation in the heart of nature
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--ref-spacing-16)] items-center" style={{ marginTop: 'var(--ref-spacing-16)' }}>
            <div 
              className="suite-image"
              style={{
                borderRadius: 'var(--ref-radius-3xl)',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                transition: 'all var(--ref-duration-slow)',
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '500px',
                  background: 'linear-gradient(135deg, var(--ref-color-brand-blue-500), var(--ref-color-brand-gold-500))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ref-color-neutral-0)',
                  fontSize: 'var(--ref-font-size-2xl)',
                  fontWeight: 'var(--ref-font-weight-semibold)',
                }}
              >
                Suite Floor Plan
              </div>
            </div>
            <div style={{ padding: 'var(--ref-spacing-8)' }}>
              <h2 
                style={{
                  fontSize: 'var(--ref-font-size-4xl)',
                  color: 'var(--sem-color-primary-base)',
                  marginBottom: 'var(--ref-spacing-8)',
                  fontWeight: 'var(--ref-font-weight-bold)',
                }}
              >
                Private Suite Features
              </h2>
              <ul 
                className="suite-features"
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--ref-spacing-6)',
                }}
              >
                {suiteFeatures.map((feature, index) => (
                  <li 
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--ref-spacing-4)',
                      fontSize: 'var(--ref-font-size-lg)',
                      color: 'var(--sem-color-text-body-light)',
                    }}
                  >
                    <span 
                      style={{
                        width: '24px',
                        height: '24px',
                        background: 'var(--sem-color-primary-base)',
                        color: 'var(--ref-color-neutral-0)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        fontSize: '0.875rem',
                        fontWeight: 'var(--ref-font-weight-bold)',
                      }}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="#book"
                className="btn-primary inline-block"
                style={{
                  marginTop: 'var(--ref-spacing-8)',
                }}
              >
                Book Private Suite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lounge & Sauna Section */}
      <section style={{ 
        padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
        backgroundColor: 'var(--sem-color-background-content)'
      }}>
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              Lounge & Sauna
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9,
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Relax in our shared lounge area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--ref-spacing-8)]" style={{ marginTop: 'var(--ref-spacing-16)' }}>
            {loungeImages.map((image, index) => (
              <div 
                key={index}
                className="lounge-image"
                style={{
                  position: 'relative',
                  borderRadius: 'var(--ref-radius-2xl)',
                  overflow: 'hidden',
                  height: '350px',
                  background: 'linear-gradient(135deg, var(--ref-color-brand-gold-500), var(--ref-color-brand-blue-500))',
                  transition: 'all var(--ref-duration-slow)',
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 'var(--ref-spacing-8)',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
                    color: 'var(--ref-color-neutral-0)',
                    fontSize: 'var(--ref-font-size-xl)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                  }}
                >
                  {image.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section style={{ 
        padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
        background: 'linear-gradient(135deg, var(--ref-color-neutral-1000), var(--sem-color-background-content))',
      }}>
        <div className="container max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom: 'var(--ref-spacing-16)' }}>
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              Location & Contact Information
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9,
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Find your way to OloResort
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--ref-spacing-16)] items-start" style={{ marginTop: 'var(--ref-spacing-12)' }}>
            <div 
              style={{
                borderRadius: 'var(--ref-radius-2xl)',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                height: '450px',
                backgroundColor: 'var(--ref-color-neutral-200)',
              }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234!2d24.8089!3d67.8069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjfCsDQ4JzI0LjgiTiAyNMKwNDgnMzIuMCJF!5e0!3m2!1sen!2sfi!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ padding: 'var(--ref-spacing-8)' }}>
              <h3 
                style={{
                  fontSize: 'var(--ref-font-size-3xl)',
                  color: 'var(--sem-color-primary-base)',
                  marginBottom: 'var(--ref-spacing-8)',
                  fontWeight: 'var(--ref-font-weight-bold)',
                }}
              >
                OloResort
              </h3>
              <div 
                style={{
                  background: 'rgba(189, 152, 75, 0.1)',
                  borderLeft: '4px solid var(--sem-color-primary-base)',
                  padding: 'var(--ref-spacing-6)',
                  borderRadius: 'var(--ref-radius-lg)',
                  marginBottom: 'var(--ref-spacing-8)',
                }}
              >
                <p style={{ 
                  fontSize: 'var(--ref-font-size-lg)', 
                  lineHeight: 1.8,
                  color: 'var(--sem-color-text-body-light)',
                }}>
                  <strong>Address:</strong><br />
                  Taalontie 46<br />
                  99130 Sirkka<br />
                  Finland
                </p>
              </div>
              <div style={{ marginTop: 'var(--ref-spacing-8)' }}>
                <p style={{ 
                  fontSize: 'var(--ref-font-size-lg)',
                  fontWeight: 'var(--ref-font-weight-semibold)',
                  marginBottom: 'var(--ref-spacing-4)',
                  color: 'var(--sem-color-text-body-light)',
                }}>
                  Reservations and inquiries:
                </p>
                <a 
                  href="mailto:levi@oloresort.fi"
                  className="contact-link"
                  style={{
                    display: 'block',
                    color: 'var(--sem-color-primary-base)',
                    textDecoration: 'none',
                    fontSize: 'var(--ref-font-size-lg)',
                    marginBottom: 'var(--ref-spacing-3)',
                    transition: 'all var(--ref-duration-base)',
                  }}
                >
                  📧 levi@oloresort.fi
                </a>
                <a 
                  href="tel:+358449014162"
                  className="contact-link"
                  style={{
                    display: 'block',
                    color: 'var(--sem-color-primary-base)',
                    textDecoration: 'none',
                    fontSize: 'var(--ref-font-size-lg)',
                    marginBottom: 'var(--ref-spacing-3)',
                    transition: 'all var(--ref-duration-base)',
                  }}
                >
                  📞 +358 44 901 4162 (Sales)
                </a>
                <a 
                  href="tel:+358449014164"
                  className="contact-link"
                  style={{
                    display: 'block',
                    color: 'var(--sem-color-primary-base)',
                    textDecoration: 'none',
                    fontSize: 'var(--ref-font-size-lg)',
                    transition: 'all var(--ref-duration-base)',
                  }}
                >
                  📞 +358 44 901 4164 (Reception)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ 
        padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
        backgroundColor: 'var(--sem-color-background-content)'
      }}>
        <div className="container max-w-7xl mx-auto">
          <div className="text-center">
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--sem-color-primary-base)',
                marginBottom: 'var(--ref-spacing-6)',
                fontWeight: 'var(--ref-font-weight-bold)',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p 
              style={{
                fontSize: 'var(--ref-font-size-xl)',
                color: 'var(--sem-color-text-body-light)',
                opacity: 0.9,
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              Answers to the most common questions about accommodation
            </p>
          </div>
          
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="book"
        className="cta-pattern relative overflow-hidden text-center"
        style={{
          padding: 'var(--ref-spacing-32) var(--ref-spacing-8)',
          background: 'linear-gradient(135deg, var(--ref-color-brand-blue-500) 0%, var(--ref-color-brand-gold-500) 100%)',
        }}
      >
        <div className="relative z-10">
          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-6)',
              fontWeight: 'var(--ref-font-weight-bold)',
            }}
          >
            Book Your Dream Vacation Now
          </h2>
          <p 
            style={{
              fontSize: 'var(--ref-font-size-xl)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-12)',
              opacity: 0.95,
            }}
          >
            Would you like to stay at our unique destination? Get in touch, and we'll find just the right time for your vacation.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
