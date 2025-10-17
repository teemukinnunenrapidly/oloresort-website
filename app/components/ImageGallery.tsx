'use client';

import { useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: {
    publicId: string;
    alt?: string;
    title?: string;
  }[];
  cloudName: string;
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ 
  images, 
  cloudName,
  columns = 3 
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudName
    }
  });

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  return (
    <>
      <style jsx>{`
        .gallery-container {
          width: 100%;
          padding: 0;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(${columns}, 1fr);
          gap: var(--ref-spacing-4);
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        .gallery-item {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          border-radius: var(--ref-radius-xl);
          cursor: pointer;
          transition: all var(--ref-duration-slow);
          border: 2px solid transparent;
        }

        .gallery-item:hover {
          transform: scale(1.02);
          box-shadow: var(--ref-shadow-xl);
          border-color: var(--sem-color-primary-base);
        }

        .gallery-item-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          opacity: 0;
          transition: opacity var(--ref-duration-base);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: var(--ref-spacing-4);
        }

        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
        }

        .gallery-item-title {
          color: var(--ref-color-neutral-0);
          font-size: var(--ref-font-size-lg);
          font-weight: var(--ref-font-weight-semibold);
          font-family: var(--ref-font-family-display);
          margin-bottom: var(--ref-spacing-2);
        }

        .gallery-item-zoom {
          position: absolute;
          top: var(--ref-spacing-4);
          right: var(--ref-spacing-4);
          width: 40px;
          height: 40px;
          background: var(--sem-color-primary-base);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: all var(--ref-duration-base);
        }

        .gallery-item:hover .gallery-item-zoom {
          opacity: 1;
          transform: scale(1);
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease-out;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: var(--ref-radius-lg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .lightbox-close {
          position: fixed;
          top: var(--ref-spacing-8);
          right: var(--ref-spacing-8);
          width: 48px;
          height: 48px;
          background: var(--sem-color-primary-base);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--ref-duration-base);
          z-index: 950;
        }

        .lightbox-close:hover {
          background: var(--sem-color-primary-hover);
          transform: rotate(90deg) scale(1.1);
        }

        .lightbox-nav {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: var(--sem-color-primary-base);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--ref-duration-base);
          z-index: 950;
        }

        .lightbox-nav:hover {
          background: var(--sem-color-primary-hover);
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-nav:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .lightbox-nav-prev {
          left: var(--ref-spacing-8);
        }

        .lightbox-nav-next {
          right: var(--ref-spacing-8);
        }

        .lightbox-info {
          position: fixed;
          bottom: var(--ref-spacing-8);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          padding: var(--ref-spacing-4) var(--ref-spacing-8);
          border-radius: var(--ref-radius-full);
          color: var(--ref-color-neutral-0);
          font-family: var(--ref-font-family-display);
          font-size: var(--ref-font-size-lg);
          z-index: 950;
        }

        .lightbox-counter {
          color: var(--sem-color-primary-base);
          font-weight: var(--ref-font-weight-semibold);
          margin-right: var(--ref-spacing-2);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .lightbox-nav {
            width: 40px;
            height: 40px;
          }

          .lightbox-nav-prev {
            left: var(--ref-spacing-4);
          }

          .lightbox-nav-next {
            right: var(--ref-spacing-4);
          }

          .lightbox-close {
            top: var(--ref-spacing-4);
            right: var(--ref-spacing-4);
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image, index) => {
            const cloudinaryImage = cld.image(image.publicId)
              .resize(fill().width(800).height(800));

            return (
              <div
                key={image.publicId}
                className="gallery-item"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              >
                <AdvancedImage 
                  cldImg={cloudinaryImage} 
                  alt={image.alt || image.title || `Gallery image ${index + 1}`}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }}
                />
                <div className="gallery-item-overlay">
                  {image.title && (
                    <div className="gallery-item-title">{image.title}</div>
                  )}
                </div>
                <div className="gallery-item-zoom">
                  <ZoomIn size={20} color="white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage !== null && (
        <div 
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div 
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <AdvancedImage
              cldImg={cld.image(images[selectedImage].publicId)
                .resize(fill().width(1920).height(1080))}
              alt={images[selectedImage].alt || images[selectedImage].title || `Gallery image ${selectedImage + 1}`}
              className="lightbox-image"
            />
          </div>

          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} color="white" />
          </button>

          <button
            className="lightbox-nav lightbox-nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            disabled={selectedImage === 0}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} color="white" />
          </button>

          <button
            className="lightbox-nav lightbox-nav-next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            disabled={selectedImage === images.length - 1}
            aria-label="Next image"
          >
            <ChevronRight size={24} color="white" />
          </button>

          <div className="lightbox-info">
            <span className="lightbox-counter">
              {selectedImage + 1} / {images.length}
            </span>
            {images[selectedImage].title && (
              <span>{images[selectedImage].title}</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}

