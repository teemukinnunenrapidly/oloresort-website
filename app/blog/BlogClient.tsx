'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

export default function BlogClient() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div 
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
        style={{
          width: '100%',
          padding: '1rem 3rem 1rem 1.5rem',
          border: '2px solid rgba(189, 152, 75, 0.3)',
          borderRadius: 'var(--ref-radius-full)',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          color: 'var(--sem-color-text-body-light)',
          fontSize: 'var(--ref-font-size-lg)',
          fontFamily: 'var(--ref-font-family-display)',
          transition: 'all var(--ref-duration-base)',
        }}
      />
      <button 
        className="search-button"
        style={{
          position: 'absolute',
          right: '5px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'var(--sem-color-primary-base)',
          color: 'var(--ref-color-neutral-0)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all var(--ref-duration-base)',
        }}
      >
        <Search size={18} />
      </button>
      
      <style jsx>{`
        .search-input:focus {
          outline: none;
          border-color: var(--sem-color-primary-base);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 30px rgba(189, 152, 75, 0.3);
        }

        .search-button:hover {
          background: var(--ref-color-brand-gold-700);
          transform: translateY(-50%) scale(1.1);
        }

        .search-input::placeholder {
          color: rgba(248, 245, 240, 0.6);
        }
      `}</style>
    </div>
  );
}

