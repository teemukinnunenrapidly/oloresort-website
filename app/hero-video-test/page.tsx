'use client';

import { useState } from 'react';
import HeroVideo from '../components/HeroVideo';
import HeroVideoAlternative from '../components/HeroVideoAlternative';
import HeroVideoWithBackground from '../components/HeroVideoWithBackground';

export default function HeroVideoTest() {
  const [selectedOption, setSelectedOption] = useState<'current' | 'alternative' | 'background'>('current');

  const options = [
    {
      id: 'current',
      title: 'Vaihtoehto 1: Letterbox',
      description: 'Video näytetään kokonaan mustilla palkeilla sivuilla. Säilyttää koko videon näkyvissä.',
      component: HeroVideo
    },
    {
      id: 'alternative',
      title: 'Vaihtoehto 2: Split Screen',
      description: 'Desktop: Video oikealla, tyylitelty tausta vasemmalla. Mobiili: Fullscreen video.',
      component: HeroVideoAlternative
    },
    {
      id: 'background',
      title: 'Vaihtoehto 3: Taustakuva + Video',
      description: 'Desktop: Taustakuva + pienempi video-ikkuna. Mobiili: Fullscreen video.',
      component: HeroVideoWithBackground
    }
  ];

  const SelectedComponent = options.find(opt => opt.id === selectedOption)?.component || HeroVideo;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Control Panel */}
      <div className="fixed top-20 left-4 z-50 bg-white rounded-lg shadow-lg p-6 max-w-sm">
        <h2 className="text-xl font-bold mb-4">Hero Video Vaihtoehdot</h2>
        <div className="space-y-4">
          {options.map((option) => (
            <div key={option.id}>
              <label className="flex items-start cursor-pointer">
                <input
                  type="radio"
                  name="videoOption"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={(e) => setSelectedOption(e.target.value as any)}
                  className="mt-1 mr-3"
                />
                <div>
                  <div className="font-semibold">{option.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                </div>
              </label>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold mb-2">Ongelma:</h3>
          <p className="text-sm text-gray-700">
            Portrait-muotoinen video (9:16) näyttää huonolta landscape-näytöillä. 
            Tässä kolme eri ratkaisua ongelmaan.
          </p>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          Kokeile eri vaihtoehtoja ja resize ikkuna nähdäksesi miten ne toimivat eri kokoisilla näytöillä.
        </div>
      </div>

      {/* Hero Section Preview */}
      <section 
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: '100vh' }}
      >
        <SelectedComponent />
        
        {/* Content overlay (same for all options) */}
        <div className="relative z-10 text-center" style={{ 
          maxWidth: '900px', 
          padding: '0 2rem',
          marginLeft: selectedOption === 'alternative' ? '-25%' : '0',
        }}>
          <h1 
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '700',
              color: '#C8A46A',
              marginBottom: '1.5rem',
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
              color: '#FFFFFF',
              marginBottom: '3rem',
              fontWeight: '300',
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
            }}
          >
            Experience the enchanting nature of Lapland from our luxurious glass igloos
          </p>
        </div>
      </section>
    </div>
  );
}
