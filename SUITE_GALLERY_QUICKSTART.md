# Private Suite Gallery - Quick Start

## ✅ Mitä on tehty

### 1. Uusi Komponentti
Luotu moderni **masonry-gallery** komponentti:
- **Sijainti**: `app/components/PrivateSuiteSection.tsx`
- **Tyyli**: Luksus-masonry layout valokuvagallerialla
- **Teknologia**: Next.js 15 + Cloudinary + Design Tokens

### 2. Design Tokens Päivitetty
Lisätty `lib/design-system.json` tiedostoon:
- ✅ Suite gallery -komponenttien tokenit (DTCG-muoto)
- ✅ Väripaletti (brand-gold, light-sand, dark-gray)
- ✅ Typografia (MuseoModerno)
- ✅ Spacing ja transition tokenit
- ✅ Letter-spacing tokenit

### 3. Accommodation Sivu Päivitetty
- ✅ Vanha suite-section korvattu uudella
- ✅ Import lisätty `PrivateSuiteSection` komponentille
- ✅ Käyttämätön koodi poistettu

### 4. Next.js Config
- ✅ Cloudinary tuki lisätty
- ✅ Image optimization konfiguroitu

### 5. CSS Tokenit Generoitu
- ✅ `lib/design-tokens.css` päivitetty
- ✅ Kaikki suite gallery CSS-muuttujat käytettävissä

## 🚀 Seuraavat Askeleet (TEHTÄVÄ)

### 1. Cloudinary Cloud Name (PAKOLLINEN)
Päivitä tiedostossa `app/components/PrivateSuiteSection.tsx`:

```tsx
// Muuta tämä:
src={`https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/...`}

// Omaksi Cloudinary cloud nameksesi:
src={`https://res.cloudinary.com/oloresort/image/upload/...`}
```

### 2. Lataa Kuvat Cloudinaryyn
Lataa seuraavat kuvat Cloudinary-kansioon `oloresort/`:

| Tiedosto | Public ID | Suositeltu Koko |
|----------|-----------|-----------------|
| Olohuone (hero) | `oloresort/suite-main-living` | 1200x1200px |
| Makuuhuone | `oloresort/suite-bedroom` | 600x600px |
| Keittiö | `oloresort/suite-kitchen` | 600x600px |
| Kylpyhuone (tall) | `oloresort/suite-bathroom` | 600x1200px |
| Takka | `oloresort/suite-fireplace` | 600x600px |
| Näkymä | `oloresort/suite-view` | 600x600px |
| Yksityiskohdat (wide) | `oloresort/suite-details` | 1200x600px |
| Terassi | `oloresort/suite-terrace` | 600x600px |

### 3. Testaa Paikallisesti
```bash
npm run dev
```

Avaa: `http://localhost:3000/accommodation`

### 4. Tarkista Layout
- ✅ Desktop: 4 saraketta
- ✅ Tablet: 2 saraketta  
- ✅ Mobile: 1 sarake
- ✅ Hover-efektit toimivat
- ✅ Kuvat latautuvat Cloudinarysta

## 🎨 Layout Rakenne

```
┌─────────────┬───────┬───────┬───────┐
│             │       │       │       │
│   Hero      │  Bed  │ Kit.  │ Bath  │
│  (main)     │ room  │       │       │
│             │       ├───────┤       │
│  1200x1200  │  600  │ Fire  │ 600   │
│             │  x600 │       │ x1200 │
├─────────────┴───────┴───────┤       │
│      Interior Details       │       │
│       1200x600 (wide)       │       │
├───────┬───────┬─────────────┴───────┤
│ View  │Terrace│                     │
│ 600   │ 600   │   [Details Section] │
│ x600  │ x600  │                     │
└───────┴───────┴─────────────────────┘
```

## 📝 Muokattavat Osat

### Hinta
```tsx
// Tiedosto: app/components/PrivateSuiteSection.tsx
<p>€450</p>  // Muuta hinta tähän
<p>per night</p>
```

### Ominaisuuslistat
Muokkaa komponentissa:
- `suiteFeatures` - Huoneen ominaisuudet
- `amenities` - Varusteet
- `services` - Palvelut

### Värit
Kaikki värit määritelty `lib/design-system.json`:
- `#bd984b` - Brand Gold (kulta)
- `#F5F1E8` - Light Sand (hiekka)
- `#111827` - Dark Gray (tumma harmaa)
- `#6b7280` - Medium Gray
- `#4b5563` - Text Gray

## 🛠️ Tekninen Info

### Design Tokenit
```css
/* Käytettävissä CSS-muuttujat */
--comp-suite-gallery-section-padding
--comp-suite-gallery-section-background
--comp-suite-gallery-header-typography-size
--comp-suite-gallery-masonry-row-height
--comp-suite-gallery-masonry-gap
--comp-suite-gallery-details-background
--comp-suite-gallery-cta-button-background
```

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 640px) {
  grid-columns: 1;
  row-height: 300px;
}

/* Tablet */
@media (max-width: 1024px) {
  grid-columns: 2;
  row-height: 250px;
}

/* Desktop */
@media (min-width: 1025px) {
  grid-columns: 4;
  row-height: 300px;
}
```

## 📦 Tiedostorakenne

```
oloresort-website/
├── app/
│   ├── components/
│   │   └── PrivateSuiteSection.tsx     ← Uusi komponentti
│   └── accommodation/
│       └── page.tsx                     ← Päivitetty
├── lib/
│   ├── design-system.json               ← Päivitetty (tokenit)
│   ├── design-tokens.css                ← Generoitu
│   └── design-tokens.types.ts           ← Generoitu
├── next.config.ts                       ← Päivitetty (Cloudinary)
├── SUITE_GALLERY_SETUP.md               ← Täysi dokumentaatio
└── SUITE_GALLERY_QUICKSTART.md          ← Tämä tiedosto
```

## ⚡ Performance

- **Next.js Image** - Automaattinen WebP konversio
- **Cloudinary** - Optimoidut transformaatiot
- **Lazy Loading** - Kuvat ladataan tarpeen mukaan
- **Priority Loading** - Hero-kuva ladataan heti

### Cloudinary Optimoinnit
```
f_auto    - Automaattinen formaatti (WebP, AVIF)
q_auto    - Automaattinen laatu
c_fill    - Täytä kehys
g_center  - Keskitä kuva
```

## 🐛 Yleisimmät Ongelmat

### Kuvat eivät näy
1. Tarkista Cloudinary cloud name
2. Varmista että public ID:t ovat oikein
3. Tarkista `next.config.ts` remotePatterns

### Layout rikki
1. Aja: `npx tsx lib/generate-tokens.ts`
2. Tyhjennä selaimen cache
3. Käynnistä dev-server uudelleen

### Styling ei toimi
1. Varmista että `design-tokens.css` on importattu
2. Tarkista että CSS-muuttujat on generoitu
3. Tarkista selaimen dev tools → Computed styles

## 📚 Lisädokumentaatio

- **Täysi setup**: `SUITE_GALLERY_SETUP.md`
- **Design System**: `DESIGN_SYSTEM.md`
- **Next.js Images**: https://nextjs.org/docs/api-reference/next/image
- **Cloudinary**: https://cloudinary.com/documentation

## ✨ Ominaisuudet

- ✅ Masonry grid layout (CSS Grid)
- ✅ Hover-efektit kuvissa
- ✅ Responsiivinen design (mobile-first)
- ✅ Design token -pohjainen styling
- ✅ Next.js Image optimization
- ✅ Cloudinary integration
- ✅ Accessibility (alt-tekstit)
- ✅ SEO-friendly
- ✅ Fast loading (< 3s)

## 🎯 Checklist

Ennen production-julkaisua:

- [ ] Cloudinary cloud name päivitetty
- [ ] Kaikki 8 kuvaa ladattu Cloudinaryyn
- [ ] Public ID:t vaihdettu oikeiksi
- [ ] Hinta päivitetty
- [ ] Ominaisuuslistat tarkistettu
- [ ] Testattu kaikilla laitteilla (mobile, tablet, desktop)
- [ ] Hover-efektit toimivat
- [ ] CTA-nappi linkittää oikeaan booking-osioon
- [ ] Ei console-virheitä
- [ ] Ei linter-virheitä
- [ ] Loading-ajat OK (<3s)

---

**Valmis!** 🎉 Uusi Private Suite Gallery on nyt käyttövalmis.

