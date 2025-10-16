'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div 
      className="grid gap-[var(--ref-spacing-8)] max-w-[900px] mx-auto"
      style={{ marginTop: 'var(--ref-spacing-12)' }}
    >
      {items.map((item, index) => (
        <div 
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(189, 152, 75, 0.2)',
            borderRadius: 'var(--ref-radius-2xl)',
            overflow: 'hidden',
            transition: 'all var(--ref-duration-slow)',
          }}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="faq-question w-full text-left"
            style={{
              padding: 'var(--ref-spacing-6) var(--ref-spacing-8)',
              fontSize: 'var(--ref-font-size-xl)',
              fontWeight: 'var(--ref-font-weight-semibold)',
              color: 'var(--sem-color-primary-base)',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all var(--ref-duration-base)',
              background: 'transparent',
              border: 'none',
            }}
          >
            <span>{item.question}</span>
            <span 
              style={{
                fontSize: 'var(--ref-font-size-2xl)',
                transition: 'transform var(--ref-duration-base)',
                transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0)',
              }}
            >
              +
            </span>
          </button>
          <div 
            className="faq-answer"
            style={{
              maxHeight: activeIndex === index ? '500px' : '0',
              padding: activeIndex === index ? 'var(--ref-spacing-6) var(--ref-spacing-8) var(--ref-spacing-8)' : '0 var(--ref-spacing-8)',
              overflow: 'hidden',
              transition: 'all var(--ref-duration-slow)',
            }}
          >
            <p 
              style={{
                lineHeight: 1.8,
                fontSize: 'var(--ref-font-size-lg)',
                color: 'var(--sem-color-text-body-light)',
              }}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

