# 🖼️ Image Gallery Setup Guide

Tämä projekti sisältää täysin integroidun kuvagalleria-toiminnallisuuden, joka käyttää Cloudinary-palvelua ja integroituu OloResortin design systemiin.

## 📋 Sisällysluettelo

1. [Ominaisuudet](#ominaisuudet)
2. [Cloudinary Setup](#cloudinary-setup)
3. [Käyttö](#käyttö)
4. [Komponentit](#komponentit)
5. [Räätälöinti](#räätälöinti)

## ✨ Ominaisuudet

- **Responsiivinen ruudukko**: 1-4 saraketta (mukautuu näytön kokoon)
- **Lightbox-näkymä**: Koko näytön kuvanäyttö
- **Näppäimistönavigaatio**: Nuolinäppäimet ja ESC
- **Design system integraatio**: Kaikki tyylit käyttävät design tokeneita
- **Cloudinary optimointi**: Automaattinen kuvien skaalaus ja optimointi
- **Kategoriasuodatus**: Suodata kuvia kategorioittain
- **Smooth animaatiot**: Fade in/out ja hover-efektit
- **Saavutettavuus**: ARIA-labelit ja näppäimistötuki

## 🚀 Cloudinary Setup

### 1. Luo Cloudinary-tili

1. Mene osoitteeseen: https://cloudinary.com/users/register/free
2. Rekisteröidy ilmaisella tilillä (25 GB tallennustilaa, 25 000 muunnosta/kk)
3. Vahvista sähköpostiosoitteesi

### 2. Hanki Cloud Name

1. Kirjaudu Cloudinary Dashboard -sivulle
2. Etsi **Cloud Name** yläpalkista
3. Kopioi Cloud Name talteen

### 3. Määritä ympäristömuuttujat

Luo `.env.local` tiedosto projektin juureen:

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
```

### 4. Lataa kuvia Cloudinaryyn

**Manuaalisesti Dashboard kautta:**
1. Siirry Media Library -osioon
2. Klikkaa "Upload"
3. Valitse kuvat tai vedä ne alueelle
4. Huomaa jokaisen kuvan **Public ID** (käytetään koodissa)

**Ohjelmallisesti:**
```javascript
// Esimerkki Upload API:n käytöstä
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_preset'); // Luo Cloudinaryssa
  
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: 'POST', body: formData }
  );
  
  const data = await response.json();
  return data.public_id;
};
```

## 💻 Käyttö

### Perus käyttö

```tsx
import ImageGallery from '@/app/components/ImageGallery';

export default function MyPage() {
  const images = [
    { 
      publicId: 'oloresort/suite-1', 
      title: 'Luksussviitti', 
      alt: 'Luksussviitti merinäköalalla' 
    },
    { 
      publicId: 'oloresort/activities-1', 
      title: 'Moottorikelkkailu', 
      alt: 'Moottorikelkkailu Lapissa' 
    },
  ];

  return (
    <ImageGallery 
      images={images}
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
      columns={3}
    />
  );
}
```

### Kategorioiden kanssa (kuten /gallery-sivulla)

```tsx
const [category, setCategory] = useState('all');

const accommodationImages = [
  { publicId: 'rooms/suite-1', title: 'Suite 1' },
  { publicId: 'rooms/suite-2', title: 'Suite 2' },
];

const activitiesImages = [
  { publicId: 'activities/skiing', title: 'Skiing' },
  { publicId: 'activities/sauna', title: 'Sauna' },
];

const getImages = () => {
  if (category === 'accommodation') return accommodationImages;
  if (category === 'activities') return activitiesImages;
  return [...accommodationImages, ...activitiesImages];
};

return (
  <>
    <div className="filters">
      <button onClick={() => setCategory('all')}>Kaikki</button>
      <button onClick={() => setCategory('accommodation')}>Majoitus</button>
      <button onClick={() => setCategory('activities')}>Aktiviteetit</button>
    </div>
    <ImageGallery images={getImages()} cloudName={CLOUD_NAME} />
  </>
);
```

## 🎨 Komponentit

### ImageGallery

Pääkomponentti kuvagallerialle.

**Props:**

| Prop | Type | Default | Kuvaus |
|------|------|---------|--------|
| `images` | `Array<{publicId: string, alt?: string, title?: string}>` | **Required** | Lista kuvista |
| `cloudName` | `string` | **Required** | Cloudinary cloud name |
| `columns` | `2 \| 3 \| 4` | `3` | Sarakkeiden määrä desktop-näytöllä |

**Esimerkki:**

```tsx
<ImageGallery 
  images={myImages}
  cloudName="oloresort"
  columns={4}
/>
```

### Kuvaobjektin rakenne

```typescript
interface Image {
  publicId: string;   // Cloudinary Public ID (pakollinen)
  alt?: string;       // Alt-teksti saavutettavuutta varten
  title?: string;     // Näytetään hover-tilassa ja lightboxissa
}
```

## 🎨 Räätälöinti

### Muuta sarakkeiden määrää

Galleria tukee 2, 3 tai 4 saraketta:

```tsx
<ImageGallery images={images} cloudName={CLOUD_NAME} columns={4} />
```

**Responsiivisuus:**
- Desktop: Määritetty sarakkeiden määrä
- Tablet (< 1024px): 2 saraketta
- Mobile (< 640px): 1 sarake

### Muokkaa tyylejä

Kaikki tyylit käyttävät design token CSS-muuttujia:

```css
/* Esimerkki: Muuta hover-väriä */
.gallery-item:hover {
  border-color: var(--sem-color-primary-base); /* Kulta */
}

/* Muuta lightbox-taustan läpinäkyvyyttä */
.lightbox-overlay {
  background: rgba(0, 0, 0, 0.98); /* Tummempi */
}
```

### Cloudinary-muunnokset

Galleria käyttää Cloudinary URL Gen API:a:

```tsx
// Thumbnail (800x800)
const thumbnail = cld.image(publicId)
  .resize(fill().width(800).height(800));

// Lightbox (1920x1080)
const fullsize = cld.image(publicId)
  .resize(fill().width(1920).height(1080));
```

**Lisää muunnoksia:**

```tsx
import { fill, scale, crop } from '@cloudinary/url-gen/actions/resize';
import { brightness, sepia } from '@cloudinary/url-gen/actions/adjust';

const image = cld.image(publicId)
  .resize(fill().width(800).height(600))
  .adjust(brightness(20))
  .adjust(sepia(30));
```

## 📂 Kansiorakenne

```
app/
├── components/
│   └── ImageGallery.tsx       # Galleria-komponentti
├── gallery/
│   └── page.tsx               # Galleria-sivu
└── ...

public/
└── images/                     # (Valinnainen) Paikalliset kuvat
```

## 🔧 Esimerkkejä

### Lisää galleria olemassa olevalle sivulle

```tsx
// app/accommodation/page.tsx
import ImageGallery from '@/app/components/ImageGallery';

export default function AccommodationPage() {
  const roomImages = [
    { publicId: 'oloresort/rooms/deluxe-1', title: 'Deluxe Room' },
    { publicId: 'oloresort/rooms/deluxe-2', title: 'Deluxe Bathroom' },
    { publicId: 'oloresort/rooms/suite-1', title: 'Suite Living Area' },
  ];

  return (
    <div>
      <h1>Our Accommodation</h1>
      <p>Explore our beautiful rooms...</p>
      
      <ImageGallery 
        images={roomImages}
        cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!}
        columns={3}
      />
    </div>
  );
}
```

### Lataa kuvia dynaamisesti

```tsx
'use client';

import { useState, useEffect } from 'react';
import ImageGallery from '@/app/components/ImageGallery';

export default function DynamicGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Lataa kuvat API:sta tai CMS:stä
    fetch('/api/gallery-images')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <ImageGallery 
      images={images}
      cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!}
    />
  );
}
```

## 🐛 Yleisiä ongelmia

### Kuvat eivät lataudu

1. Tarkista että `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` on määritetty `.env.local`-tiedostossa
2. Varmista että Public ID on oikein
3. Tarkista Cloudinary Console että kuvat on ladattu

### TypeScript-virheet

Varmista että sinulla on oikeat tyypit:

```tsx
import type { ImageGalleryProps } from '@/app/components/ImageGallery';

const myImages: ImageGalleryProps['images'] = [
  { publicId: 'test', title: 'Test' }
];
```

## 📚 Lisäresurssit

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Cloudinary URL Gen API](https://cloudinary.com/documentation/javascript_integration)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Design System Tokens](./DESIGN_SYSTEM.md)

## 🎉 Valmista!

Nyt sinulla on täysin toimiva, design systemiin integroitu kuvagalleria!

Katso demo: `http://localhost:3001/gallery`

Jos tarvitset apua tai lisäominaisuuksia, katso projektin README tai ota yhteyttä kehitystiimiin.

