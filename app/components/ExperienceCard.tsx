'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ExperienceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkHref: string;
  linkText?: string;
}

export default function ExperienceCard({ imageUrl, title, description, linkHref, linkText = "Learn more" }: ExperienceCardProps) {
  return (
    <div 
      className="feature-card"
      style={{
        background: 'var(--comp-experienceSection-featureCard-background)',
        border: 'var(--comp-experienceSection-featureCard-border)',
        borderRadius: 'var(--comp-experienceSection-featureCard-borderRadius)',
        overflow: 'hidden',
        boxShadow: 'var(--comp-experienceSection-featureCard-shadow)',
        transition: 'all var(--comp-experienceSection-featureCard-transition)',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--comp-experienceSection-featureCard-hoverShadow)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--comp-experienceSection-featureCard-shadow)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          height: '240px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div style={{ padding: 'var(--ref-spacing-8)', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 
          style={{
            color: 'var(--comp-experienceSection-featureTitle-text)',
            fontSize: 'var(--comp-experienceSection-featureTitle-typography-size)',
            marginBottom: 'var(--ref-spacing-4)',
            fontWeight: 'var(--comp-experienceSection-featureTitle-typography-weight)',
            fontFamily: 'var(--comp-experienceSection-featureTitle-typography-family)',
          }}
        >
          {title}
        </h3>
        <p 
          style={{
            color: 'var(--comp-experienceSection-featureDescription-text)',
            fontSize: 'var(--comp-experienceSection-featureDescription-typography-size)',
            lineHeight: 'var(--comp-experienceSection-featureDescription-typography-lineHeight)',
            fontFamily: 'var(--comp-experienceSection-featureDescription-typography-family)',
            marginBottom: 'var(--ref-spacing-6)',
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Read More Link */}
        <Link
          href={linkHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--ref-spacing-2)',
            color: 'var(--comp-experienceSection-icon-color)',
            fontSize: 'var(--ref-font-size-sm)',
            fontWeight: 'var(--ref-font-weight-semibold)',
            fontFamily: 'var(--ref-font-family-display)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            transition: 'all 300ms ease-in-out',
          }}
          className="read-more-link"
        >
          {linkText}
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
      </div>

      <style jsx>{`
        .read-more-link:hover {
          gap: var(--ref-spacing-3);
        }
      `}</style>
    </div>
  );
}

