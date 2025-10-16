# 📸 Kuvagallerian Käyttöesimerkkejä

## Pikastartti: Lisää galleria mihin tahansa sivulle

### 1. Yksinkertainen galleria

```tsx
import ImageGallery from '@/app/components/ImageGallery';

export default function MyPage() {
  const images = [
    { publicId: 'sample/image1', title: 'Kuva 1' },
    { publicId: 'sample/image2', title: 'Kuva 2' },
    { publicId: 'sample/image3', title: 'Kuva 3' },
  ];

  return (
    <div>
      <h1>Kuvagalleria</h1>
      <ImageGallery 
        images={images}
        cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}
        columns={3}
      />
    </div>
  );
}
```

## Esimerkkejä eri sivuille

### Accommodation-sivu

```tsx
// app/accommodation/page.tsx lisäys
import ImageGallery from '@/app/components/ImageGallery';

// Lisää komponenttiin:
const roomGallery = [
  { 
    publicId: 'oloresort/rooms/superior-room', 
    title: 'Superior Room',
    alt: 'Tilavassa Superior-huoneessa on mukavat sängyt ja moderni sisustus'
  },
  { 
    publicId: 'oloresort/rooms/deluxe-suite', 
    title: 'Deluxe Suite',
    alt: 'Deluxe-sviitissä on erillinen olohuone ja upeat näkymät'
  },
  { 
    publicId: 'oloresort/rooms/family-room', 
    title: 'Perhehuone',
    alt: 'Perhehuone tarjoaa tilaa koko perheelle'
  },
  { 
    publicId: 'oloresort/rooms/bathroom', 
    title: 'Luksuskylpyhuone',
    alt: 'Tilava marmorilaatta kylpyhuone'
  },
];

// Lisää JSX:ään:
<section style={{ padding: 'var(--ref-spacing-20) var(--ref-spacing-8)' }}>
  <h2 style={{ 
    textAlign: 'center', 
    fontSize: 'var(--ref-font-size-4xl)',
    marginBottom: 'var(--ref-spacing-12)'
  }}>
    Huoneiden Kuvagalleria
  </h2>
  <ImageGallery 
    images={roomGallery}
    cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}
    columns={4}
  />
</section>
```

### Activities-sivu

```tsx
// app/activities/page.tsx lisäys
import ImageGallery from '@/app/components/ImageGallery';

const activityGallery = [
  { 
    publicId: 'oloresort/activities/skiing', 
    title: 'Laskettelua Levitunturilla',
    alt: 'Laskettelija laskee alas Levin rinnettä'
  },
  { 
    publicId: 'oloresort/activities/snowmobile', 
    title: 'Moottorikelkkailu',
    alt: 'Moottorikelkkaretki Lapin luonnossa'
  },
  { 
    publicId: 'oloresort/activities/reindeer', 
    title: 'Porosafari',
    alt: 'Tutustuminen poroihin'
  },
  { 
    publicId: 'oloresort/activities/sauna', 
    title: 'Autenttinen Sauna',
    alt: 'Perinteinen suomalainen sauna'
  },
  { 
    publicId: 'oloresort/activities/northern-lights', 
    title: 'Revontulet',
    alt: 'Upeat revontulet Levin yötaivaalla'
  },
  { 
    publicId: 'oloresort/activities/husky', 
    title: 'Huskysafari',
    alt: 'Husky-koiravaljakkosafari'
  },
];

// Lisää JSX:ään:
<section style={{
  background: 'var(--sem-color-background-content)',
  padding: 'var(--ref-spacing-20) var(--ref-spacing-8)'
}}>
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
    <h2 style={{ 
      textAlign: 'center',
      color: 'var(--sem-color-text-heading)',
      fontSize: 'var(--ref-font-size-4xl)',
      marginBottom: 'var(--ref-spacing-4)'
    }}>
      Aktiviteettikuvat
    </h2>
    <p style={{ 
      textAlign: 'center',
      color: 'var(--sem-color-text-body-light)',
      marginBottom: 'var(--ref-spacing-12)',
      fontSize: 'var(--ref-font-size-lg)'
    }}>
      Koe unohtumattomia hetkiä Lapin luonnossa
    </p>
    <ImageGallery 
      images={activityGallery}
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}
      columns={3}
    />
  </div>
</section>
```

### Blog-postaus kuvagallerialla

```tsx
// app/blog/[slug]/page.tsx
import ImageGallery from '@/app/components/ImageGallery';

export default function BlogPost() {
  const blogImages = [
    { publicId: 'blog/winter-activities-1', title: 'Talviaktiviteetteja' },
    { publicId: 'blog/winter-activities-2', title: 'Laskettelua' },
    { publicId: 'blog/winter-activities-3', title: 'Iltaa tunturilla' },
  ];

  return (
    <article>
      <h1>Talvi Levillä - Kattava opas</h1>
      <p>Levi tarjoaa upeat mahdollisuudet talviaktiviteetteihin...</p>
      
      {/* Galleria artikkelin sisällä */}
      <div style={{ margin: 'var(--ref-spacing-12) 0' }}>
        <h3>Kuvia aktiviteeteista</h3>
        <ImageGallery 
          images={blogImages}
          cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}
          columns={3}
        />
      </div>
      
      <p>Jatketaan artikkelia...</p>
    </article>
  );
}
```

## Dynaaminen galleria (CMS/API:sta)

### Sanity CMS:n kanssa

```tsx
'use client';

import { useState, useEffect } from 'react';
import ImageGallery from '@/app/components/ImageGallery';
import { client } from '@/sanity/lib/client';

export default function DynamicGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const query = `*[_type == "galleryImage"] {
        "publicId": cloudinaryId,
        title,
        alt,
        category
      }`;
      
      const data = await client.fetch(query);
      setImages(data);
      setLoading(false);
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Ladataan kuvia...</div>;
  }

  return (
    <ImageGallery 
      images={images}
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}
      columns={3}
    />
  );
}
```

### API Route:n kanssa

```tsx
// app/api/gallery/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Hae kuvat tietokannasta tai ulkoisesta API:sta
  const images = [
    { publicId: 'resort/lobby', title: 'Lobby' },
    { publicId: 'resort/restaurant', title: 'Restaurant' },
  ];
  
  return NextResponse.json(images);
}

// app/some-page/page.tsx
'use client';

import { useState, useEffect } from 'react';
import ImageGallery from '@/app/components/ImageGallery';

export default function APIGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <ImageGallery 
      images={images}
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}
    />
  );
}
```

## Kategorioiden kanssa

```tsx
'use client';

import { useState } from 'react';
import ImageGallery from '@/app/components/ImageGallery';

export default function CategorizedGallery() {
  const [category, setCategory] = useState<'all' | 'rooms' | 'food' | 'activities'>('all');

  const roomImages = [
    { publicId: 'rooms/room1', title: 'Room 1' },
    { publicId: 'rooms/room2', title: 'Room 2' },
  ];

  const foodImages = [
    { publicId: 'food/dish1', title: 'Paistettua kalaa' },
    { publicId: 'food/dish2', title: 'Poronkäristys' },
  ];

  const activityImages = [
    { publicId: 'activities/skiing', title: 'Laskettelua' },
    { publicId: 'activities/sauna', title: 'Sauna' },
  ];

  const getAllImages = () => {
    if (category === 'rooms') return roomImages;
    if (category === 'food') return foodImages;
    if (category === 'activities') return activityImages;
    return [...roomImages, ...foodImages, ...activityImages];
  };

  return (
    <>
      <style jsx>{`
        .category-buttons {
          display: flex;
          gap: var(--ref-spacing-4);
          justify-content: center;
          margin-bottom: var(--ref-spacing-8);
          flex-wrap: wrap;
        }

        .category-btn {
          padding: var(--ref-spacing-3) var(--ref-spacing-6);
          background: rgba(189, 152, 75, 0.1);
          border: 2px solid transparent;
          border-radius: var(--ref-radius-full);
          color: var(--sem-color-text-body-light);
          cursor: pointer;
          transition: all var(--ref-duration-base);
          font-family: var(--ref-font-family-display);
          font-weight: var(--ref-font-weight-medium);
        }

        .category-btn:hover {
          background: rgba(189, 152, 75, 0.2);
          border-color: var(--sem-color-primary-base);
        }

        .category-btn.active {
          background: var(--sem-color-primary-base);
          color: var(--ref-color-neutral-0);
          border-color: var(--sem-color-primary-base);
        }
      `}</style>

      <div className="category-buttons">
        <button 
          className={`category-btn ${category === 'all' ? 'active' : ''}`}
          onClick={() => setCategory('all')}
        >
          Kaikki
        </button>
        <button 
          className={`category-btn ${category === 'rooms' ? 'active' : ''}`}
          onClick={() => setCategory('rooms')}
        >
          Huoneet
        </button>
        <button 
          className={`category-btn ${category === 'food' ? 'active' : ''}`}
          onClick={() => setCategory('food')}
        >
          Ruoka
        </button>
        <button 
          className={`category-btn ${category === 'activities' ? 'active' : ''}`}
          onClick={() => setCategory('activities')}
        >
          Aktiviteetit
        </button>
      </div>

      <ImageGallery 
        images={getAllImages()}
        cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}
        columns={3}
      />
    </>
  );
}
```

## Latausanimaatio

```tsx
'use client';

import { useState, useEffect } from 'react';
import ImageGallery from '@/app/components/ImageGallery';

export default function GalleryWithLoading() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuloi API-kutsu
    setTimeout(() => {
      setImages([
        { publicId: 'sample/1', title: 'Image 1' },
        { publicId: 'sample/2', title: 'Image 2' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        color: 'var(--sem-color-text-body-light)'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid rgba(189, 152, 75, 0.3)',
          borderTop: '4px solid var(--sem-color-primary-base)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <ImageGallery 
      images={images}
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}
    />
  );
}
```

## Tyhjä tila (ei kuvia)

```tsx
import ImageGallery from '@/app/components/ImageGallery';

export default function GalleryWithEmpty() {
  const images = []; // Tyhjä lista

  if (images.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: 'var(--ref-spacing-20)',
        color: 'var(--sem-color-text-body-light)'
      }}>
        <p style={{ fontSize: 'var(--ref-font-size-2xl)', marginBottom: 'var(--ref-spacing-4)' }}>
          📸 Ei kuvia saatavilla
        </p>
        <p>Palaa myöhemmin uudelleen!</p>
      </div>
    );
  }

  return (
    <ImageGallery 
      images={images}
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}
    />
  );
}
```

## Vinkkejä

### 1. Kuvan koko ja laatu

```tsx
// Käytä isompia kuvia lightboxiin:
const largeImage = cld.image(publicId)
  .resize(fill().width(2400).height(1600))
  .quality('auto:best');

// Pienempiä thumbnaileja:
const thumbnail = cld.image(publicId)
  .resize(fill().width(400).height(400))
  .quality('auto:good');
```

### 2. Lazy loading

ImageGallery tukee automaattisesti lazy loadingia Cloudinaryn kautta.

### 3. SEO

Muista aina lisätä `alt`-tekstit:

```tsx
const images = [
  { 
    publicId: 'room1', 
    title: 'Luksussviitti',
    alt: 'Tilava luksussviitti kahdella parisängyllä, merinäköalalla ja modernilla sisustuksella'
  },
];
```

### 4. Suorituskyky

- Käytä max 20-30 kuvaa per sivu
- Isommille määrille lisää paginointi tai infinite scroll
- Optimoi Cloudinary-asetukset (`quality: 'auto'`)

## Seuraavat askeleet

1. Lataa kuvat Cloudinaryyn
2. Määritä `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
3. Kopioi jokin yllä olevista esimerkeistä
4. Muokkaa omiin tarpeisiisi!

Lisää ohjeita: [GALLERY_SETUP.md](./GALLERY_SETUP.md)

