# Sanity CMS Setup for OloResort Blog

## 📚 Overview

Blogisi on nyt integroitu Sanity CMS:ään. Voit hallita blogiartikkeleita, kategorioita ja kirjoittajia helposti Sanity Studion kautta.

## 🚀 Quick Start

### 1. Luo Sanity-projekti (jos et ole vielä tehnyt)

```bash
npm run sanity:init
```

Tai käytä Sanity CLI:tä:

```bash
npx sanity@latest init
```

Valitse:
- **Project name**: `OloResort Blog`
- **Use default dataset**: `Yes` (production)
- **Create a new project**: `Yes`

### 2. Konfiguroi ympäristömuuttujat

Luo `.env.local` tiedosto projektin juureen:

```env
# Sanity Configuration (saat nämä Sanity dashboardista)
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2025-01-16"
SANITY_API_TOKEN="your-api-token"
```

### 3. Hanki Project ID

1. Kirjaudu osoitteessa: https://www.sanity.io/manage
2. Valitse projektisi
3. Kopioi **Project ID** Dashboard-näkymästä

### 4. Luo API Token (valinnainen, mutta suositeltu)

1. Mene projektisi asetuksiin: https://www.sanity.io/manage
2. Valitse **API** → **Tokens**
3. Klikkaa **Add New Token**
4. Anna nimi (esim. "Production Read Token")
5. Valitse oikeudet: **Viewer** (lukuoikeus)
6. Kopioi token ja lisää se `.env.local` tiedostoon

## 🎨 Sanity Studio

### Pääsy Studioon

Kun olet konfiguroinut ympäristömuuttujat, pääset Sanity Studioon:

```
http://localhost:3000/studio
```

### Studion ominaisuudet

Sanity Studiossa voit:
- ✍️ Luoda ja muokata blogiartikkeleita
- 📁 Hallita kategorioita
- 👤 Lisätä kirjoittajia
- 🖼️ Ladata kuvia
- 📝 Muokata rich text -sisältöä
- 👁️ Esikatsella muutoksia

## 📝 Content Types (Schemas)

### 1. Blog Post (`post`)

Blogiartikkelin kentät:
- **Title** (pakollinen): Artikkelin otsikko
- **Slug** (pakollinen): URL-polku (generoidaan automaattisesti)
- **Excerpt** (pakollinen): Lyhyt kuvaus (max 200 merkkiä)
- **Main Image**: Pääkuva
- **Body**: Rich text -sisältö
- **Author**: Viittaus kirjoittajaan
- **Categories**: Kategoriat (voi olla useita)
- **Published At**: Julkaisupäivä
- **Featured**: Merkitse featured-artikkeliksi
- **Read Time**: Lukuaika minuutteina
- **SEO**: Meta title, description, keywords

### 2. Category (`category`)

Kategorioiden kentät:
- **Title** (pakollinen): Kategorian nimi
- **Slug** (pakollinen): URL-polku
- **Description**: Kategorian kuvaus

### 3. Author (`author`)

Kirjoittajien kentät:
- **Name** (pakollinen): Kirjoittajan nimi
- **Slug**: URL-polku
- **Image**: Profiilikuva
- **Bio**: Lyhyt kuvaus

## 📊 Data Fetching

### Queries

Kaikki Sanity-kyselyt ovat tiedostossa: `/sanity/lib/queries.ts`

Käytettävissä olevat kyselyt:
- `postsQuery`: Hae kaikki artikkelit
- `postBySlugQuery`: Hae yksittäinen artikkeli
- `categoriesQuery`: Hae kaikki kategoriat
- `postsByCategoryQuery`: Hae artikkelit kategorian mukaan
- `featuredPostsQuery`: Hae featured-artikkelit
- `popularPostsQuery`: Hae suositut artikkelit

### Esimerkkikäyttö

```typescript
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';

const posts = await client.fetch(postsQuery);
```

## 🖼️ Images

Kuvien käsittely:

```typescript
import { urlForImage } from '@/sanity/lib/image';

const imageUrl = urlForImage(post.mainImage)
  ?.width(800)
  .height(600)
  .url();
```

## 🎯 Ensimmäiset sisällöt

### Luo ensimmäinen artikkeli

1. Avaa Studio: http://localhost:3000/studio
2. Valitse **Post** → **Create new**
3. Täytä kentät:
   - Title: "Glass Igloos and Northern Lights"
   - Slug: "glass-igloos-northern-lights" (generoituu automaattisesti)
   - Excerpt: Lyhyt kuvaus
   - Valitse tai luo Author
   - Valitse tai luo Category
   - Kirjoita Body-sisältö
   - Lataa Main Image
   - Aseta Read Time (esim. 8)
   - Merkitse Featured: true
4. Klikkaa **Publish**

### Luo kategorioita

Suositellut kategoriat:
- Northern Lights
- Activities
- Accommodation
- Travel Tips
- Seasons
- Culture

### Luo kirjoittaja

1. Valitse **Author** → **Create new**
2. Täytä:
   - Name: "OloResort Team"
   - Lataa profiilikuva
   - Kirjoita lyhyt bio
3. Klikkaa **Publish**

## 🔄 Deployment

### Vercel

1. Lisää ympäristömuuttujat Vercel Dashboardiin:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - `SANITY_API_TOKEN`

2. Konfiguroi CORS Sanity-projektissasi:
   - Mene: https://www.sanity.io/manage
   - Valitse projektisi → **API** → **CORS Origins**
   - Lisää production-domain (esim. `https://oloresort.fi`)

### ISR (Incremental Static Regeneration)

Jos haluat ISR:n, lisää `revalidate` blog-sivulle:

```typescript
export const revalidate = 60; // Päivitä 60 sekunnin välein
```

## 🔐 Security

### API Token

- **Luku-token**: Käytä `Viewer`-oikeuksia production-ympäristössä
- **Kirjoitus-token**: Käytä vain backendissä, älä koskaan frontendissä
- Älä commitoi tokeneita Git-repoon

### Environment Variables

Varmista että `.env.local` on `.gitignore`-tiedostossa:

```
.env*.local
```

## 📚 Resurssit

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Studio](https://www.sanity.io/studio)

## 🆘 Troubleshooting

### "Project ID not found"

Tarkista että `NEXT_PUBLIC_SANITY_PROJECT_ID` on oikein `.env.local`-tiedostossa.

### "CORS error"

Lisää domain CORS-asetuksiin: https://www.sanity.io/manage → API → CORS Origins

### "No documents found"

Varmista että olet luonut sisältöä Sanity Studiossa ja publishannut sen.

### Images not loading

Tarkista että:
1. Kuvat on ladattu Sanity Studiossa
2. `urlForImage` funktio toimii oikein
3. Project ID on konfiguroitu image-builderiin

## 💡 Tips

1. **Rich Text**: Käytä Sanity Portable Text -editorin kaikkia ominaisuuksia
2. **Drafts**: Voit tallentaa luonnoksia ennen julkaisua
3. **Preview**: Lisää preview-mode nähdäksesi muutokset ennen julkaisua
4. **Versioning**: Sanity säilyttää dokumenttien historian
5. **Search**: Studio sisältää tehokkaan hakutoiminnon

## 🎉 Valmista!

Nyt voit:
- ✅ Hallita blogia Sanity Studion kautta
- ✅ Lisätä uusia artikkeleita
- ✅ Päivittää sisältöä helposti
- ✅ Hallita kuvia keskitetysti
- ✅ Käyttää reaaliaikaista esikatselua

