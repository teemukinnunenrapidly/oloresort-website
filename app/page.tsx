import Link from "next/link";
import HeroVideoAlternative from "./components/HeroVideoAlternative";
import ExperienceMasonry from "./components/ExperienceMasonry";
import PrivateSuiteTeaser from "./components/PrivateSuiteTeaser";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'transparent' }}>
      
      {/* Hero Section with Video */}
      <section 
        className="hero-section-main relative flex items-center justify-center"
        style={{
          height: 'max(100vh, 600px)',
          minHeight: '500px',
          overflow: 'visible',
          position: 'relative'
        }}
      >
        {/* Background image that continues to next section */}
        <div
          className="hero-background"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("https://res.cloudinary.com/dpdua7dgn/image/upload/f_auto,q_auto,w_1920,h_1080,c_fill,g_north/Content_for_OloResort_Levi_from_lesmoonwalkers_mariuskaening_merry_amber17_mufhwu")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        
        {/* Glassmorphism overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
        
        {/* Cloudflare Stream Video */}
        <HeroVideoAlternative />
        
        {/* Main content - left side on desktop */}
        <div className="hero-content-main relative z-40 text-center md:text-left fade-in-up md:absolute md:left-20 md:top-1/2 md:-translate-y-1/2 px-6 md:px-0" style={{ 
          maxWidth: '600px', 
          animation: 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both',
        }}>
          <h1 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: '700',
              color: '#C8A46A',
              marginBottom: 'clamp(1rem, 3vw, var(--ref-spacing-6))',
              textShadow: '2px 2px 16px rgba(0, 0, 0, 0.5)',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Unique Accommodation Experience in Levi
          </h1>
          <p 
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.375rem)',
              color: '#E8E1D4',
              marginBottom: 'clamp(1.5rem, 4vw, var(--ref-spacing-16))',
              fontWeight: '400',
              textShadow: '1px 1px 8px rgba(0, 0, 0, 0.6)',
              lineHeight: 1.65,
              opacity: 0.95,
            }}
          >
            Experience the enchanting nature of Lapland from our luxurious glass igloos
          </p>
        </div>

      </section>

      {/* Experience Masonry Section */}
      <ExperienceMasonry />

      {/* Private Suite Teaser Section */}
      <PrivateSuiteTeaser />

      {/* CTA Section */}
      <section 
        className="cta-pattern relative overflow-hidden text-center"
        style={{
          padding: 'clamp(2rem, 5vw, var(--ref-spacing-32)) var(--ref-spacing-8)',
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
