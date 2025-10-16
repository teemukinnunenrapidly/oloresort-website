'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import { contactFormSchema, type ContactFormData } from '@/lib/validation';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      console.log('Form submitted successfully:', result);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContent = () => {
    document.querySelector('.contact-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <>
        <style jsx>{`
          .success-container {
            min-height: 100vh;
            background: var(--sem-color-background-content);
            padding: var(--ref-spacing-20) var(--ref-spacing-8);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .success-card {
            background: rgba(189, 152, 75, 0.05);
            border: 1px solid var(--sem-color-primary-base);
            border-radius: var(--ref-radius-2xl);
            padding: var(--ref-spacing-12);
            text-align: center;
            max-width: 600px;
            backdrop-filter: blur(10px);
            box-shadow: var(--ref-shadow-xl);
          }

          .success-icon {
            width: 80px;
            height: 80px;
            background: var(--sem-color-primary-base);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto var(--ref-spacing-6);
            animation: scaleIn 0.5s ease-out;
          }

          .success-title {
            font-family: var(--ref-font-family-display);
            font-size: var(--ref-font-size-4xl);
            font-weight: var(--ref-font-weight-bold);
            color: var(--sem-color-text-heading);
            margin-bottom: var(--ref-spacing-4);
          }

          .success-text {
            font-size: var(--ref-font-size-lg);
            color: var(--sem-color-text-body-light);
            margin-bottom: var(--ref-spacing-8);
            line-height: 1.6;
          }

          .success-button {
            background: var(--sem-color-primary-base);
            color: var(--ref-color-neutral-0);
            padding: var(--ref-spacing-4) var(--ref-spacing-8);
            border-radius: var(--ref-radius-full);
            border: none;
            font-size: var(--ref-font-size-lg);
            font-weight: var(--ref-font-weight-semibold);
            cursor: pointer;
            transition: all var(--ref-duration-base);
            box-shadow: 0 4px 15px rgba(189, 152, 75, 0.3);
          }

          .success-button:hover {
            background: var(--sem-color-primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(189, 152, 75, 0.4);
          }

          @keyframes scaleIn {
            from {
              transform: scale(0);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
        <div className="success-container">
          <div className="success-card">
            <div className="success-icon">
              <Send size={40} color="white" />
            </div>
            <h1 className="success-title">Thank You for Contacting Us!</h1>
            <p className="success-text">
              We have received your message and will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="success-button"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx>{`
        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          background: linear-gradient(135deg, var(--sem-color-background-header) 0%, var(--sem-color-background-content) 50%, rgba(189, 152, 75, 0.2) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(189, 152, 75, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(189, 152, 75, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(189, 152, 75, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: var(--ref-spacing-8);
          max-width: 800px;
          animation: fadeInUp 1s ease-out;
        }

        .hero-title {
          font-family: var(--ref-font-family-display);
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: var(--ref-font-weight-bold);
          color: var(--ref-color-neutral-0);
          margin-bottom: var(--ref-spacing-4);
          letter-spacing: -0.02em;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-tagline {
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          color: rgba(255, 255, 255, 0.9);
          font-weight: var(--ref-font-weight-light);
          margin-bottom: var(--ref-spacing-12);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          cursor: pointer;
          z-index: 2;
          transition: all var(--ref-duration-base);
        }

        .scroll-indicator:hover {
          transform: translateX(-50%) scale(1.1);
        }

        /* Main Content */
        .contact-content {
          background: var(--sem-color-background-content);
          padding: var(--ref-spacing-20) var(--ref-spacing-8);
          min-height: 100vh;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--ref-spacing-12);
          margin-bottom: var(--ref-spacing-20);
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Contact Info Card */
        .contact-info {
          background: rgba(189, 152, 75, 0.05);
          border: 1px solid var(--sem-color-primary-base);
          border-radius: var(--ref-radius-2xl);
          padding: var(--ref-spacing-12);
          backdrop-filter: blur(10px);
          box-shadow: var(--ref-shadow-lg);
          transition: transform var(--ref-duration-slow) ease, box-shadow var(--ref-duration-slow) ease;
        }

        .contact-info:hover {
          transform: translateY(-5px);
          box-shadow: var(--ref-shadow-xl);
        }

        .info-title {
          font-family: var(--ref-font-family-display);
          font-size: var(--ref-font-size-4xl);
          color: var(--sem-color-text-heading);
          margin-bottom: var(--ref-spacing-8);
          font-weight: var(--ref-font-weight-semibold);
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: var(--ref-spacing-6);
          transition: transform var(--ref-duration-slow) ease;
        }

        .info-item:hover {
          transform: translateX(10px);
        }

        .info-icon {
          width: 24px;
          height: 24px;
          margin-right: var(--ref-spacing-4);
          color: var(--sem-color-primary-base);
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
        }

        .info-label {
          font-size: var(--ref-font-size-sm);
          color: rgba(248, 245, 240, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
        }

        .info-value {
          font-size: var(--ref-font-size-lg);
          color: var(--sem-color-text-body-light);
          line-height: 1.5;
        }

        .info-value a {
          color: var(--sem-color-primary-base);
          text-decoration: none;
          transition: color var(--ref-duration-base);
        }

        .info-value a:hover {
          color: var(--sem-color-primary-hover);
        }

        /* Contact Form */
        .contact-form-container {
          background: rgba(30, 40, 70, 0.2);
          border: 1px solid rgba(189, 152, 75, 0.3);
          border-radius: var(--ref-radius-2xl);
          padding: var(--ref-spacing-12);
          backdrop-filter: blur(10px);
          box-shadow: var(--ref-shadow-lg);
        }

        .form-title {
          font-family: var(--ref-font-family-display);
          font-size: var(--ref-font-size-4xl);
          color: var(--sem-color-text-heading);
          margin-bottom: var(--ref-spacing-8);
          font-weight: var(--ref-font-weight-semibold);
        }

        .form-group {
          margin-bottom: var(--ref-spacing-6);
        }

        .form-label {
          display: block;
          font-size: var(--ref-font-size-sm);
          color: var(--sem-color-text-body-light);
          margin-bottom: var(--ref-spacing-2);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: var(--ref-spacing-4);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(189, 152, 75, 0.3);
          border-radius: var(--ref-radius-lg);
          color: var(--sem-color-text-body-light);
          font-family: var(--ref-font-family-body);
          font-size: var(--ref-font-size-base);
          transition: all var(--ref-duration-slow) ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--sem-color-primary-base);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(189, 152, 75, 0.2);
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--ref-spacing-6);
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .error-text {
          color: var(--sem-color-status-error);
          font-size: var(--ref-font-size-sm);
          margin-top: var(--ref-spacing-1);
        }

        .submit-btn {
          background: linear-gradient(135deg, var(--sem-color-primary-base), var(--sem-color-primary-hover));
          color: var(--ref-color-neutral-0);
          padding: var(--ref-spacing-4) var(--ref-spacing-8);
          border: none;
          border-radius: var(--ref-radius-full);
          font-size: var(--ref-font-size-lg);
          font-weight: var(--ref-font-weight-semibold);
          cursor: pointer;
          transition: all var(--ref-duration-slow) ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(189, 152, 75, 0.3);
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }

        .submit-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(189, 152, 75, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Map Section */
        .map-section {
          margin-top: var(--ref-spacing-20);
          background: var(--sem-color-background-header);
          border-radius: var(--ref-radius-2xl);
          overflow: hidden;
          box-shadow: var(--ref-shadow-xl);
        }

        .map-container {
          position: relative;
          width: 100%;
          height: 500px;
          background: linear-gradient(135deg, var(--sem-color-background-content) 0%, rgba(189, 152, 75, 0.1) 50%, var(--sem-color-background-header) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-placeholder {
          text-align: center;
          padding: var(--ref-spacing-8);
        }

        .map-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto var(--ref-spacing-4);
          color: var(--sem-color-primary-base);
        }

        .map-text {
          color: var(--sem-color-text-body-light);
          font-size: var(--ref-font-size-xl);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }

        /* Floating elements */
        .floating {
          position: fixed;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(189, 152, 75, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: float 20s infinite;
        }

        .floating-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-2 {
          top: 70%;
          right: 10%;
          animation-delay: 5s;
          width: 150px;
          height: 150px;
        }

        .floating-3 {
          bottom: 10%;
          left: 50%;
          animation-delay: 10s;
          width: 80px;
          height: 80px;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        .fade-in {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        .delay-3 {
          animation-delay: 0.6s;
        }

        .checkbox-group {
          display: flex;
          align-items: start;
          gap: var(--ref-spacing-3);
        }

        .checkbox-input {
          margin-top: 0.25rem;
          width: 16px;
          height: 16px;
          border-radius: var(--ref-radius-sm);
          cursor: pointer;
        }

        .checkbox-label {
          font-size: var(--ref-font-size-sm);
          color: var(--sem-color-text-body-light);
          text-transform: none;
          letter-spacing: normal;
        }
      `}</style>

      {/* Floating elements */}
      <div className="floating floating-1"></div>
      <div className="floating floating-2"></div>
      <div className="floating floating-3"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-tagline">Experience a unique accommodation in Levi, in the enchanting nature of Lapland</p>
        </div>
        <div className="scroll-indicator" onClick={scrollToContent}>
          <ChevronDown size={30} color="white" strokeWidth={2} />
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info fade-in delay-1">
              <h2 className="info-title">Contact Information</h2>
              
              <div className="info-item">
                <MapPin className="info-icon" />
                <div className="info-content">
                  <div className="info-label">Address</div>
                  <div className="info-value">
                    Taalontie 46<br />
                    99130 Sirkka<br />
                    Finland
                  </div>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" />
                <div className="info-content">
                  <div className="info-label">Email</div>
                  <div className="info-value">
                    <a href="mailto:levi@oloresort.fi">levi@oloresort.fi</a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" />
                <div className="info-content">
                  <div className="info-label">Phone - Sales</div>
                  <div className="info-value">
                    <a href="tel:+358449014162">+358 44 901 4162</a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" />
                <div className="info-content">
                  <div className="info-label">Phone - Reception</div>
                  <div className="info-value">
                    <a href="tel:+358449014164">+358 44 901 4164</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container fade-in delay-2">
              <h2 className="form-title">Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      {...register('firstName')}
                      type="text"
                      id="firstName"
                      className="form-input"
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="error-text">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      {...register('lastName')}
                      type="text"
                      id="lastName"
                      className="form-input"
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="error-text">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone *</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="form-input"
                      placeholder="+358 40 123 4567"
                    />
                    {errors.phone && (
                      <p className="error-text">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    {...register('message')}
                    id="message"
                    className="form-textarea"
                    placeholder="Would you like to stay at our unique accommodation? Contact us and we'll find the perfect time for your holiday."
                  />
                  {errors.message && (
                    <p className="error-text">{errors.message.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <div className="checkbox-group">
                    <input
                      {...register('consent')}
                      type="checkbox"
                      id="consent"
                      className="checkbox-input"
                    />
                    <label htmlFor="consent" className="checkbox-label">
                      I accept the processing of my personal data in accordance with the privacy policy. *
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="error-text">{errors.consent.message}</p>
                  )}
                </div>
                
                <button type="submit" disabled={isSubmitting} className="submit-btn">
                  {isSubmitting ? (
                    <>
                      <div style={{ 
                        width: '20px', 
                        height: '20px', 
                        border: '2px solid white', 
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.6s linear infinite',
                        marginRight: '8px'
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} style={{ marginLeft: '8px' }} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section fade-in delay-3">
            <div className="map-container">
              <div className="map-placeholder">
                <MapPin className="map-icon" />
                <p className="map-text">Taalontie 46, 99130 Sirkka, Finland</p>
                <p className="map-text" style={{ fontSize: '1rem', opacity: 0.8, marginTop: '1rem' }}>
                  Located in the heart of Levi, easily accessible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
