import Link from "next/link";
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
        
        {/* Main content - centered */}
        <div className="hero-content-main relative z-40 text-center fade-in-up px-6" style={{ 
          maxWidth: '800px', 
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

    </div>
  );
}
