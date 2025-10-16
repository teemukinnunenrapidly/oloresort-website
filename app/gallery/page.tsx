'use client';

import { useState } from 'react';
import ImageGallery from '@/app/components/ImageGallery';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'accommodation' | 'activities' | 'resort'>('all');

  // Replace with your actual Cloudinary cloud name
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo';

  // Example images - replace these with your actual Cloudinary image public IDs
  const accommodationImages = [
    { publicId: 'samples/landscapes/beach-boat', title: 'Luksussviitti', alt: 'Luksussviitti merinäköalalla' },
    { publicId: 'samples/landscapes/architecture-signs', title: 'Superior-huone', alt: 'Superior-huone' },
    { publicId: 'samples/landscapes/girl-urban-view', title: 'Perhehuone', alt: 'Perhehuone kaupunkinäkymällä' },
    { publicId: 'samples/food/pot-mussels', title: 'Keittiö', alt: 'Täysin varustettu keittiö' },
  ];

  const activitiesImages = [
    { publicId: 'samples/landscapes/nature-mountains', title: 'Laskettelurinteet', alt: 'Laskettelurinteet' },
    { publicId: 'samples/animals/reindeer', title: 'Porotokka', alt: 'Porotokka' },
    { publicId: 'samples/landscapes/mountain-view', title: 'Moottorikelkkailu', alt: 'Moottorikelkkailu' },
    { publicId: 'samples/food/fish-vegetables', title: 'Fine Dining', alt: 'Fine dining ravintola' },
  ];

  const resortImages = [
    { publicId: 'samples/landscapes/beach-sunrise', title: 'Olo Resort Julkisivu', alt: 'Resort julkisivu' },
    { publicId: 'samples/food/dessert', title: 'Vastaanotto', alt: 'Vastaanotto-aula' },
    { publicId: 'samples/landscapes/beach-waves', title: 'Ympäristö', alt: 'Resort ympäristö' },
    { publicId: 'samples/landscapes/canyon', title: 'Talvinäkymä', alt: 'Talvinen Lappi' },
  ];

  const allImages = [
    ...accommodationImages,
    ...activitiesImages,
    ...resortImages,
  ];

  const getFilteredImages = () => {
    switch (activeCategory) {
      case 'accommodation':
        return accommodationImages;
      case 'activities':
        return activitiesImages;
      case 'resort':
        return resortImages;
      default:
        return allImages;
    }
  };

  return (
    <>
      <style jsx>{`
        .gallery-page {
          min-height: 100vh;
          background: var(--sem-color-background-content);
          padding-top: 6rem;
        }

        .gallery-hero {
          text-align: center;
          padding: var(--ref-spacing-16) var(--ref-spacing-8);
          background: linear-gradient(135deg, var(--sem-color-background-header) 0%, var(--sem-color-background-content) 100%);
          position: relative;
          overflow: hidden;
        }

        .gallery-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(189, 152, 75, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(189, 152, 75, 0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .gallery-hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .gallery-title {
          font-family: var(--ref-font-family-display);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: var(--ref-font-weight-bold);
          color: var(--sem-color-text-heading);
          margin-bottom: var(--ref-spacing-4);
          animation: fadeInUp 0.8s ease-out;
        }

        .gallery-subtitle {
          font-size: var(--ref-font-size-xl);
          color: var(--sem-color-text-body-light);
          line-height: 1.6;
          animation: fadeInUp 1s ease-out;
        }

        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: var(--ref-spacing-4);
          padding: var(--ref-spacing-8);
          flex-wrap: wrap;
        }

        .filter-button {
          padding: var(--ref-spacing-3) var(--ref-spacing-8);
          background: rgba(189, 152, 75, 0.1);
          border: 2px solid transparent;
          border-radius: var(--ref-radius-full);
          color: var(--sem-color-text-body-light);
          font-family: var(--ref-font-family-display);
          font-size: var(--ref-font-size-base);
          font-weight: var(--ref-font-weight-medium);
          cursor: pointer;
          transition: all var(--ref-duration-base);
        }

        .filter-button:hover {
          background: rgba(189, 152, 75, 0.2);
          border-color: var(--sem-color-primary-base);
          transform: translateY(-2px);
        }

        .filter-button.active {
          background: var(--sem-color-primary-base);
          color: var(--ref-color-neutral-0);
          border-color: var(--sem-color-primary-base);
          box-shadow: 0 4px 15px rgba(189, 152, 75, 0.3);
        }

        .gallery-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: var(--ref-spacing-8);
        }

        .gallery-section-title {
          font-family: var(--ref-font-family-display);
          font-size: var(--ref-font-size-3xl);
          font-weight: var(--ref-font-weight-semibold);
          color: var(--sem-color-text-heading);
          text-align: center;
          margin-bottom: var(--ref-spacing-8);
        }

        .gallery-count {
          text-align: center;
          color: var(--sem-color-text-body-light);
          font-size: var(--ref-font-size-base);
          margin-bottom: var(--ref-spacing-6);
          opacity: 0.8;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .gallery-filters {
            padding: var(--ref-spacing-4);
          }

          .filter-button {
            font-size: var(--ref-font-size-sm);
            padding: var(--ref-spacing-2) var(--ref-spacing-6);
          }
        }
      `}</style>

      <div className="gallery-page">
        {/* Hero Section */}
        <section className="gallery-hero">
          <div className="gallery-hero-content">
            <h1 className="gallery-title">Kuvagalleria</h1>
            <p className="gallery-subtitle">
              Tutustu Olo Resortin ainutlaatuisiin tiloihin, aktiviteetteihin ja lumoavaan ympäristöön Lapin sydämessä
            </p>
          </div>
        </section>

        {/* Filters */}
        <div className="gallery-filters">
          <button
            className={`filter-button ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Kaikki
          </button>
          <button
            className={`filter-button ${activeCategory === 'accommodation' ? 'active' : ''}`}
            onClick={() => setActiveCategory('accommodation')}
          >
            Majoitus
          </button>
          <button
            className={`filter-button ${activeCategory === 'activities' ? 'active' : ''}`}
            onClick={() => setActiveCategory('activities')}
          >
            Aktiviteetit
          </button>
          <button
            className={`filter-button ${activeCategory === 'resort' ? 'active' : ''}`}
            onClick={() => setActiveCategory('resort')}
          >
            Resort
          </button>
        </div>

        {/* Gallery Content */}
        <div className="gallery-content">
          <p className="gallery-count">
            Näytetään {getFilteredImages().length} kuvaa
          </p>
          <ImageGallery 
            images={getFilteredImages()}
            cloudName={CLOUD_NAME}
            columns={3}
          />
        </div>
      </div>
    </>
  );
}

