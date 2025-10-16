# 📝 Blog Quick Start - OloResort

## Pikaohje Sanityn käyttöönottoon

### 1️⃣ Asenna Sanity CLI (jos ei ole jo asennettu)

```bash
npm install -g @sanity/cli
```

### 2️⃣ Luo Sanity-projekti

```bash
npx sanity@latest init
```

Vastaa kysymyksiin:
- **Project name**: `OloResort Blog`
- **Use default dataset configuration**: `Y`
- **Output path**: Paina Enter (käytä oletusta)
- **Select project to use**: Valitse **Create new project**
- **Your project name**: `OloResort Blog`

### 3️⃣ Kopioi Project ID

Kun init on valmis, kopioi **Project ID** joka näkyy terminaalissa.

### 4️⃣ Luo .env.local tiedosto

Luo tiedosto projektisi juureen: `.env.local`

```env
# Korvaa "your-project-id" omalla project ID:lläsi
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2025-01-16"
```

### 5️⃣ Käynnistä dev-server

```bash
npm run dev
```

### 6️⃣ Avaa Sanity Studio

Mene selaimella osoitteeseen:

```
http://localhost:3000/studio
```

### 7️⃣ Kirjaudu sisään

- Kirjaudu Sanity-tilillesi
- Jos et ole luonut tiliä, luo se nyt (ilmainen)

### 8️⃣ Luo ensimmäinen artikkeli

1. **Luo ensin Author:**
   - Klikkaa vasemmasta valikosta **Author**
   - Klikkaa **Create new**
   - Täytä:
     - Name: `OloResort Team`
     - Bio: `The OloResort team shares stories and tips about Lapland`
   - Klikkaa **Publish**

2. **Luo Category:**
   - Klikkaa **Category**
   - Klikkaa **Create new**
   - Täytä:
     - Title: `Northern Lights`
     - Klikkaa **Generate** slug-kentän vierestä
   - Klikkaa **Publish**

3. **Luo Post:**
   - Klikkaa **Post**
   - Klikkaa **Create new**
   - Täytä:
     - **Title**: `Glass Igloos and Northern Lights`
     - **Slug**: Klikkaa **Generate**
     - **Excerpt**: `Experience the magic of northern lights from the comfort of your glass igloo`
     - **Author**: Valitse `OloResort Team`
     - **Categories**: Valitse `Northern Lights`
     - **Read Time**: `8`
     - **Featured Post**: Merkitse rasti
     - **Body**: Kirjoita artikkelin sisältö
   - Klikkaa **Publish**

### 9️⃣ Tarkista blogi

Mene osoitteeseen:

```
http://localhost:3000/blog
```

Nyt näet juuri luomasi artikkelin!

## 🎨 Kuvien lisääminen

### Pääkuvan lisääminen artikkeliin:

1. Avaa artikkeli Sanity Studiossa
2. Löydä **Main Image** -kenttä
3. Klikkaa **Upload**
4. Valitse kuva koneeltasi
5. Täytä **Alternative Text** (esim. "Northern lights over glass igloo")
6. Klikkaa **Publish**

### Kuvien lisääminen body-tekstiin:

1. Aseta kursori kohtaan, johon haluat kuvan
2. Klikkaa **+** -painiketta
3. Valitse **Image**
4. Lataa kuva
5. Täytä Alternative Text
6. Klikkaa **Publish**

## 📊 Lisää kategorioita

Suositellut kategoriat blogiin:

1. **Northern Lights** - Revontuliartikkelit
2. **Activities** - Aktiviteetit ja kokemukset
3. **Accommodation** - Majoitus
4. **Travel Tips** - Matkavinkit
5. **Seasons** - Vuodenajat
6. **Culture** - Kulttuuri ja perinteet

Luo nämä kaikki Category-välilehdeltä Sanity Studiossa.

## ✅ Checklist

- [ ] Sanity CLI asennettu
- [ ] Sanity-projekti luotu
- [ ] `.env.local` tiedosto luotu ja Project ID lisätty
- [ ] Dev-server käynnistetty
- [ ] Sanity Studioon kirjauduttu
- [ ] Ensimmäinen Author luotu
- [ ] Kategoriat luotu
- [ ] Ensimmäinen artikkeli luotu ja julkaistu
- [ ] Artikkeli näkyy blogissa

## 🆘 Ongelmatilanteet

### "Cannot connect to Sanity"
- Tarkista että `.env.local` tiedosto on oikein
- Varmista että Project ID on oikea
- Käynnistä dev-server uudelleen: `npm run dev`

### "Access denied"
- Kirjaudu Sanity Studioon: http://localhost:3000/studio
- Varmista että olet projektisi omistaja tai sinulla on oikeudet

### "No posts found"
- Varmista että olet julkaissut (Publish) artikkelin
- Päivitä sivu (F5)
- Tarkista että artikkelilla on slug

## 📚 Seuraavat askeleet

1. **Lisää lisää artikkeleita** - Luo 5-10 artikkelia eri kategorioihin
2. **Lisää kuvia** - Lataa kauniita kuvia Lapista
3. **Optimoi SEO** - Täytä SEO-kentät jokaiselle artikkelille
4. **Deploy tuotantoon** - Vie sivusto tuotantoon (Vercel/Netlify)
5. **Luo sisältöstrategia** - Suunnittele säännöllinen julkaisuaikataulu

## 💡 Protips

- **Drafts**: Voit tallentaa artikkeleita luonnoksina ennen julkaisua
- **Schedule**: Voit asettaa julkaisupäivän tulevaisuuteen
- **Search**: Studio-hakupalkista löydät nopeasti artikkelit
- **Keyboard shortcuts**: 
  - `Ctrl/Cmd + S` = Tallenna
  - `Ctrl/Cmd + Alt + P` = Julkaise

---

**Tarvitsetko apua?** Katso yksityiskohtaiset ohjeet: `SANITY_SETUP.md`

