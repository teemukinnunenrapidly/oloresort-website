import Link from "next/link";
import HeroVideo from "./components/HeroVideo";
import BookingWidget from "./components/BookingWidget";

export default function Home() {
  const features = [
    {
      icon: "✨",
      title: "Northern Lights from Your Bed",
      description: "Watch the dancing northern lights from the warmth of your blanket. Large glass surfaces and a glass ceiling offer an unobstructed view of the Lapland night sky."
    },
    {
      icon: "🏔️",
      title: "In the Heart of Nature",
      description: "Peaceful location in the embrace of nature, yet just a short distance from Levi's services and slopes."
    },
    {
      icon: "🦌",
      title: "Unique Activities",
      description: "Snowmobile safaris, husky rides, reindeer rides and snowshoeing - experience Lapland winter at its best."
    },
    {
      icon: "🍽️",
      title: "Local Gourmet Food",
      description: "Enjoy delicious breakfast and dinner combining local ingredients and modern cuisine."
    },
    {
      icon: "🧖",
      title: "Finnish Sauna",
      description: "Relax in a traditional Finnish sauna and enjoy a perfect moment in the peace of nature."
    },
    {
      icon: "🛏️",
      title: "Premium Furnishings",
      description: "Each suite is luxuriously furnished, including a private kitchen, bathroom and all modern amenities."
    }
  ];

  const rooms = [
    {
      title: "Private Suite",
      description: "Luxurious suite for two, glass ceiling and panoramic views"
    },
    {
      title: "Premium Suite",
      description: "More spacious suite, fully equipped kitchen and living area"
    },
    {
      title: "Deluxe Suite",
      description: "Luxury suite with private terrace and outdoor hot tub"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--ref-color-neutral-1000)' }}>
      
      {/* Hero Section with Video */}
      <section 
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: '100vh',
        }}
      >
        {/* Cloudflare Stream Video */}
        <HeroVideo />
        
        <div className="relative z-10 text-center fade-in-up" style={{ 
          maxWidth: '900px', 
          padding: '0 var(--ref-spacing-8)' 
        }}>
          <h1 
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 'var(--ref-font-weight-bold)',
              color: 'var(--sem-color-primary-base)',
              marginBottom: 'var(--ref-spacing-6)',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.02em',
              lineHeight: 1.1,
            }}
          >
            Unique Accommodation Experience in Levi
          </h1>
          <p 
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-12)',
              fontWeight: 'var(--ref-font-weight-light)',
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
            }}
          >
            Experience the enchanting nature of Lapland from our luxurious glass igloos
          </p>
          <BookingWidget />
        </div>
      </section>

      {/* Experience Section */}
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
              Unforgettable Experiences
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
              Enjoy Lapland&apos;s peace and beauty surrounded by modern luxury
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--ref-spacing-10)]" style={{ marginTop: 'var(--ref-spacing-16)' }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="feature-card"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(189, 152, 75, 0.2)',
                  borderRadius: 'var(--ref-radius-2xl)',
                  padding: 'var(--ref-spacing-10)',
                  transition: 'all var(--ref-duration-slow)',
                }}
              >
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'var(--sem-color-primary-base)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--ref-spacing-6)',
                    fontSize: 'var(--ref-font-size-2xl)',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 
                  style={{
                    color: 'var(--sem-color-primary-base)',
                    fontSize: 'var(--ref-font-size-2xl)',
                    marginBottom: 'var(--ref-spacing-4)',
                    fontWeight: 'var(--ref-font-weight-semibold)',
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  style={{
                    color: 'var(--sem-color-text-body-light)',
                    lineHeight: 1.6,
                    opacity: 0.9,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section 
        style={{ 
          padding: 'var(--ref-spacing-20) var(--ref-spacing-8)',
          background: 'linear-gradient(135deg, var(--ref-color-neutral-1000) 0%, var(--sem-color-background-content) 100%)',
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
              Luxurious Accommodation
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
              Private Suite accommodation with large glass surfaces and glass ceiling
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--ref-spacing-8)]" style={{ marginTop: 'var(--ref-spacing-16)' }}>
            {rooms.map((room, index) => (
              <div 
                key={index}
                className="room-card"
                style={{
                  borderRadius: 'var(--ref-radius-2xl)',
                  height: '400px',
                  backgroundColor: 'var(--sem-color-background-content)',
                  transition: 'all var(--ref-duration-slow)',
                }}
              >
                <div 
                  style={{
                    width: '100%',
                    height: '70%',
                    background: 'linear-gradient(135deg, var(--ref-color-brand-blue-500), var(--ref-color-brand-gold-500))',
                    position: 'relative',
                    borderTopLeftRadius: 'var(--ref-radius-2xl)',
                    borderTopRightRadius: 'var(--ref-radius-2xl)',
                  }}
                />
                <div 
                  className="room-info-overlay"
                  style={{
                    padding: 'var(--ref-spacing-6)',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    color: 'var(--ref-color-neutral-0)',
                    borderBottomLeftRadius: 'var(--ref-radius-2xl)',
                    borderBottomRightRadius: 'var(--ref-radius-2xl)',
                  }}
                >
                  <h3 
                    style={{
                      fontSize: 'var(--ref-font-size-2xl)',
                      fontWeight: 'var(--ref-font-weight-semibold)',
                      marginBottom: 'var(--ref-spacing-2)',
                    }}
                  >
                    {room.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: 'var(--ref-font-size-base)',
                      opacity: 0.9,
                      lineHeight: 1.5,
                    }}
                  >
                    {room.description}
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
            Book Your Dream Vacation
          </h2>
          <p 
            style={{
              fontSize: 'var(--ref-font-size-xl)',
              color: 'var(--ref-color-neutral-0)',
              marginBottom: 'var(--ref-spacing-12)',
              opacity: 0.95,
            }}
          >
            Experience the magic of Lapland at OloResort&apos;s unique accommodation
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
}
