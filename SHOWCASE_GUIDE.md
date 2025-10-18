# Component Showcase Guide

## 📋 Yleiskatsaus

Component Showcase on kehitystyökalu, jossa voit:
- Vertailla eri komponenttivariaatioita rinnakkain
- Testata responsiivisuutta eri viewport-koissa
- Valita parhaat versiot tuotantosivuille
- Kehittää ja esitellä uusia komponentteja

## 🚀 Käyttöönotto

Avaa showcase-sivu selaimessa:
```
http://localhost:3000/showcase
```

Tuotannossa:
```
https://oloresort.fi/showcase
```

## 🎯 Käyttöohjeet

### 1. Komponenttien selaaminen
- Klikkaa osion otsikkoa avataksesi komponenttikategorian
- Näet kaikki kyseisen kategorian variantit

### 2. Varianttien vertailu
- Klikkaa varianttipainikkeita valitaksesi haluamasi version
- Voit joko:
  - Näyttää kaikki variantit samaan aikaan (ei valintaa)
  - Näyttää vain yhden variantin (klikkaa painiketta)

### 3. Responsiivisuuden testaus
- Käytä Viewport-valitsinta yläreunassa:
  - **Desktop**: Täysi leveys
  - **Tablet**: 768px leveys
  - **Mobile**: 375px leveys

### 4. Parhaan version valinta
- Testaa jokainen variantti eri viewport-koissa
- Arvioi UX, visuaalinen ilme ja toiminnallisuus
- Kopioi voittaneen variantin koodi tuotantosivuille

## ➕ Uusien komponenttien lisääminen

### Vaihe 1: Luo uusi komponentti
Luo komponentti tavallisesti `app/components/` kansioon:

```tsx
// app/components/MyNewComponent.tsx
export default function MyNewComponent() {
  return (
    <div>
      {/* Komponenttisi sisältö */}
    </div>
  );
}
```

### Vaihe 2: Lisää showcase-sivulle

Muokkaa `app/showcase/page.tsx`:

1. **Importtaa komponentti:**
```tsx
import MyNewComponent from '../components/MyNewComponent';
```

2. **Lisää showcaseSections-taulukkoon:**
```tsx
const showcaseSections: ShowcaseSection[] = [
  // ... olemassa olevat osiot ...
  {
    id: 'my-section',
    title: 'My Component Variants',
    description: 'Different versions of my new component',
    variants: [
      {
        id: 'variant-1',
        name: 'Version 1',
        component: <MyNewComponent />,
        notes: 'Original version with basic styling'
      },
      {
        id: 'variant-2',
        name: 'Version 2 - Alternative',
        component: <MyNewComponent />,
        notes: 'Alternative layout with enhanced features'
      }
    ]
  }
];
```

### Vaihe 3: Testaa
1. Tallenna tiedosto
2. Päivitä showcase-sivu selaimessa
3. Uusi osio näkyy automaattisesti

## 🎨 Varianttien luominen

### Tapa 1: Props-pohjaiset variantit
```tsx
{
  id: 'hero-dark',
  name: 'Dark Theme',
  component: <HeroVideo theme="dark" />,
  notes: 'Hero with dark background'
}
```

### Tapa 2: Erilliset komponentit
```tsx
{
  id: 'hero-v1',
  name: 'Version 1',
  component: <HeroVideo />,
  notes: 'Original version'
},
{
  id: 'hero-v2',
  name: 'Version 2',
  component: <HeroVideoAlternative />,
  notes: 'Completely redesigned'
}
```

### Tapa 3: Inline-variantit
```tsx
{
  id: 'custom',
  name: 'Custom Layout',
  component: (
    <div style={{ padding: '2rem', background: '#f5f5f5' }}>
      <HeroVideo />
    </div>
  ),
  notes: 'Custom wrapper with padding'
}
```

## 📊 Esimerkkejä

### Esimerkki 1: A/B Testaus
```tsx
{
  id: 'cta-testing',
  title: 'Call-to-Action Button Tests',
  description: 'Testing different CTA button styles for conversion',
  variants: [
    {
      id: 'cta-gold',
      name: 'Gold Button',
      component: <CTAButton color="gold">Book Now</CTAButton>,
      notes: 'Brand color - current'
    },
    {
      id: 'cta-green',
      name: 'Green Button',
      component: <CTAButton color="green">Book Now</CTAButton>,
      notes: 'Test: higher contrast'
    }
  ]
}
```

### Esimerkki 2: Layout-vaihtoehdot
```tsx
{
  id: 'gallery-layouts',
  title: 'Gallery Layout Options',
  description: 'Different gallery grid systems',
  variants: [
    {
      id: 'masonry',
      name: 'Masonry Grid',
      component: <GalleryMasonry />,
      notes: 'Pinterest-style layout'
    },
    {
      id: 'standard-grid',
      name: 'Standard Grid',
      component: <GalleryGrid />,
      notes: 'Traditional equal-height grid'
    },
    {
      id: 'carousel',
      name: 'Carousel',
      component: <GalleryCarousel />,
      notes: 'Swipeable carousel'
    }
  ]
}
```

## 🔧 Vinkkejä

### 1. Käytä design tokeneita
```tsx
// Hyvä ✓
background: 'var(--ref-color-brand-gold-600)'

// Vältä ✗
background: '#C9A961'
```

### 2. Nimeä variantit selkeästi
```tsx
// Hyvä ✓
name: 'Hero with Video Background'
notes: 'Autoplay muted video behind content'

// Vältä ✗
name: 'Variant 2'
notes: 'Different one'
```

### 3. Dokumentoi erot
Lisää `notes`-kenttään:
- Mitä muutettiin?
- Miksi tämä versio on erilainen?
- Mitä pitäisi testata?

### 4. Testaa kaikki viewport-koot
Varmista että jokainen variantti toimii:
- Desktop (1920px+)
- Tablet (768px)
- Mobile (375px)

## 🚧 Tuotantoon vieminen

Kun olet valinnut parhaan variantin:

1. **Kopioi komponentti**
   - Jos se on erillinen tiedosto, se on jo `app/components/`-kansiossa
   - Jos se on inline, luo uusi komponenttitiedosto

2. **Päivitä tuotantosivu**
   ```tsx
   // app/page.tsx
   import WinningComponent from './components/WinningComponent';
   
   export default function HomePage() {
     return (
       <main>
         <WinningComponent />
       </main>
     );
   }
   ```

3. **Poista vanhat versiot**
   - Arkistoi tai poista hävinneet variantit
   - Pidä showcase siistinä

## 🔒 Turvallisuus

**TÄRKEÄÄ:** Showcase-sivu on kehitystyökalu!

### Tuotannossa:
Voit joko:

1. **Piilottaa showcase** lisäämällä `next.config.ts`:ään:
```ts
async redirects() {
  return [
    {
      source: '/showcase',
      destination: '/',
      permanent: false,
    },
  ];
}
```

2. **Suojata salasanalla** middleware:llä

3. **Jättää julkiseksi** - ei sisällä sensitiivistä dataa

## 📝 Checklist uudelle komponentille

- [ ] Komponentti luotu `app/components/`-kansioon
- [ ] Komponentti importattu `showcase/page.tsx`:ään
- [ ] Lisätty `showcaseSections`-taulukkoon
- [ ] Vähintään 2 varianttia luotu
- [ ] Kuvaavat nimet ja muistiinpanot lisätty
- [ ] Testattu kaikissa viewport-koissa
- [ ] Design tokeneita käytetty johdonmukaisesti
- [ ] Paras variantti valittu ja dokumentoitu

## 🎉 Hyödyt

✅ **Nopea iterointi** - Näe muutokset välittömästi  
✅ **Helppo vertailu** - Kaikki vaihtoehdot yhdessä paikassa  
✅ **Tiimityö** - Jaa linkki ja pyydä palautetta  
✅ **Dokumentointi** - Historia eri versioista  
✅ **Responsiivisuus** - Testaa kaikki koot kerralla  

---

**Vinkki:** Lisää tämä sivu selaimen kirjanmerkkeihin kehityksen aikana! 🔖

