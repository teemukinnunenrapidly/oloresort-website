'use client';

import { Stream } from "@cloudflare/stream-react";
import { useEffect, useState } from 'react';

/**
 * Hero Variant 15: Geometric Mosaic
 * Geometrinen mosaiikki jossa sisältö ja video muodostavat kuvion
 */
export default function HeroVariant15() {
  const videoId = process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_VIDEO_ID;
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isMobile) {
    return (
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        background: 'var(--sem-color-background-page)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--ref-spacing-6)',
      }}>
        {/* Mobile geometric pattern */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
        }}>
          {/* Main content hexagon */}
          <div style={{
            position: 'relative',
            aspectRatio: '1',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'var(--ref-color-brand-gold-600)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--ref-spacing-8)',
          }}>
            <div style={{
              textAlign: 'center',
              transform: 'scale(0.8)',
            }}>
              <h1 style={{
                fontSize: 'var(--ref-font-size-3xl)',
                fontWeight: 'var(--ref-font-weight-bold)',
                color: 'var(--ref-color-neutral-0)',
                marginBottom: 'var(--ref-spacing-4)',
              }}>
                Geometric<br />Dreams
              </h1>
              <p style={{
                fontSize: 'var(--ref-font-size-base)',
                color: 'var(--ref-color-neutral-0)',
                marginBottom: 'var(--ref-spacing-6)',
                opacity: 0.95,
              }}>
                Patterns of luxury
              </p>
              <a 
                href="#accommodation" 
                style={{
                  display: 'inline-block',
                  padding: 'var(--ref-spacing-3) var(--ref-spacing-6)',
                  background: 'var(--ref-color-neutral-0)',
                  color: 'var(--ref-color-brand-gold-600)',
                  borderRadius: 'var(--ref-radius-full)',
                  fontSize: 'var(--ref-font-size-sm)',
                  fontWeight: 'var(--ref-font-weight-semibold)',
                  textDecoration: 'none',
                }}
              >
                Explore
              </a>
            </div>
          </div>

          {/* Surrounding video hexagons */}
          {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '35%',
                aspectRatio: '1',
                transform: `
                  translate(-50%, -50%) 
                  rotate(${rotation}deg) 
                  translateY(-120%) 
                  rotate(-${rotation}deg)
                `,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                overflow: 'hidden',
                opacity: 0.8,
              }}
            >
              {videoId ? (
                <div style={{
                  transform: `rotate(${rotation}deg)`,
                  width: '100%',
                  height: '100%',
                }}>
                  <Stream
                    controls={false}
                    src={videoId}
                    autoplay
                    muted
                    loop
                    preload="auto"
                    poster=""
                    primaryColor="var(--ref-color-brand-gold-600)"
                    style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, var(--ref-color-brand-gold-700), var(--ref-color-neutral-800))'
                }} />
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      background: 'var(--sem-color-background-page)',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        background: `
          repeating-conic-gradient(
            from 0deg at 50% 50%,
            var(--ref-color-brand-gold-600) 0deg,
            transparent 30deg,
            transparent 60deg
          )
        `,
      }} />

      {/* Geometric mosaic grid */}
      <div style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 200px)',
          gridTemplateRows: 'repeat(3, 200px)',
          gap: 'var(--ref-spacing-4)',
          transform: 'rotate(0deg)',
        }}>
          {/* Cell definitions with different types */}
          {[
            { type: 'video', col: '1', row: '1', shape: 'triangle-tl' },
            { type: 'content-main', col: '2 / 4', row: '1 / 3', shape: 'hexagon' },
            { type: 'video', col: '4', row: '1', shape: 'triangle-tr' },
            { type: 'feature', col: '1', row: '2', shape: 'diamond', content: 'Northern Lights' },
            { type: 'video', col: '4', row: '2', shape: 'circle' },
            { type: 'feature', col: '5', row: '1', shape: 'square', content: 'Glass Igloos' },
            { type: 'video', col: '1', row: '3', shape: 'triangle-bl' },
            { type: 'feature', col: '2', row: '3', shape: 'pentagon', content: 'Private Sauna' },
            { type: 'video', col: '3', row: '3', shape: 'square' },
            { type: 'feature', col: '4', row: '3', shape: 'diamond', content: 'Hot Tub' },
            { type: 'video', col: '5', row: '2 / 4', shape: 'rectangle' },
          ].map((cell, i) => {
            const getClipPath = () => {
              switch (cell.shape) {
                case 'hexagon':
                  return 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
                case 'triangle-tl':
                  return 'polygon(0 0, 100% 0, 0 100%)';
                case 'triangle-tr':
                  return 'polygon(0 0, 100% 0, 100% 100%)';
                case 'triangle-bl':
                  return 'polygon(0 0, 0 100%, 100% 100%)';
                case 'diamond':
                  return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
                case 'circle':
                  return 'circle(45% at center)';
                case 'pentagon':
                  return 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)';
                case 'rectangle':
                  return 'none';
                default:
                  return 'none';
              }
            };

            if (cell.type === 'content-main') {
              return (
                <div
                  key={i}
                  style={{
                    gridColumn: cell.col,
                    gridRow: cell.row,
                    background: 'var(--ref-color-brand-gold-600)',
                    clipPath: getClipPath(),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--ref-spacing-8)',
                    position: 'relative',
                    transform: hoveredCell === i ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                  onMouseEnter={() => setHoveredCell(i)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div style={{
                    textAlign: 'center',
                    color: 'var(--ref-color-neutral-0)',
                  }}>
                    <h1 style={{
                      fontSize: 'var(--ref-font-size-4xl)',
                      fontWeight: 'var(--ref-font-weight-bold)',
                      marginBottom: 'var(--ref-spacing-4)',
                      lineHeight: 'var(--ref-font-lineHeight-tight)',
                    }}>
                      Geometric<br />
                      Luxury
                    </h1>
                    <p style={{
                      fontSize: 'var(--ref-font-size-lg)',
                      marginBottom: 'var(--ref-spacing-6)',
                      opacity: 0.95,
                    }}>
                      Patterns of perfection in the Arctic
                    </p>
                    <a 
                      href="#accommodation"
                      style={{
                        display: 'inline-block',
                        padding: 'var(--ref-spacing-3) var(--ref-spacing-8)',
                        background: 'var(--ref-color-neutral-0)',
                        color: 'var(--ref-color-brand-gold-600)',
                        borderRadius: 'var(--ref-radius-full)',
                        fontSize: 'var(--ref-font-size-base)',
                        fontWeight: 'var(--ref-font-weight-semibold)',
                        textDecoration: 'none',
                      }}
                    >
                      Discover Patterns
                    </a>
                  </div>
                </div>
              );
            } else if (cell.type === 'video') {
              return (
                <div
                  key={i}
                  style={{
                    gridColumn: cell.col,
                    gridRow: cell.row,
                    clipPath: getClipPath(),
                    overflow: 'hidden',
                    position: 'relative',
                    transform: hoveredCell === i ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredCell(i)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  {videoId ? (
                    <Stream
                      controls={false}
                      src={videoId}
                      autoplay
                      muted
                      loop
                      preload="auto"
                      poster=""
                      primaryColor="var(--ref-color-brand-gold-600)"
                      style={{
                        position: 'absolute',
                        top: '-25%',
                        left: '-25%',
                        width: '150%',
                        height: '150%',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, var(--ref-color-brand-gold-600), var(--ref-color-neutral-800))'
                    }} />
                  )}
                </div>
              );
            } else {
              // Feature cells
              return (
                <div
                  key={i}
                  style={{
                    gridColumn: cell.col,
                    gridRow: cell.row,
                    background: hoveredCell === i 
                      ? 'var(--ref-color-brand-gold-100)' 
                      : 'var(--sem-color-background-surface)',
                    border: '2px solid var(--ref-color-brand-gold-600)',
                    clipPath: getClipPath(),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--ref-spacing-4)',
                    transform: hoveredCell === i ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => setHoveredCell(i)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div style={{
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontSize: 'var(--ref-font-size-sm)',
                      fontWeight: 'var(--ref-font-weight-semibold)',
                      color: 'var(--ref-color-brand-gold-600)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}>
                      {cell.content}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* Floating geometric accents */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`accent-${i}`}
          style={{
            position: 'absolute',
            top: `${20 + i * 30}%`,
            left: `${10 + i * 80}%`,
            width: '100px',
            height: '100px',
            background: 'transparent',
            border: '2px solid var(--ref-color-brand-gold-600)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            opacity: 0.1,
            transform: `rotate(${45 + i * 30}deg)`,
            animation: `float ${4 + i}s ease-in-out infinite`,
          }}
        />
      ))}
    </section>
  );
}
