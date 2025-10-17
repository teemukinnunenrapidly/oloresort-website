# Weather Widget Setup

Säätiedon widget näyttää reaaliaikaisen lämpötilan Kittilästä sivuston headerissa.

## Features

- **Reaaliaikainen säätiedon haku** OpenWeatherMap API:sta
- **Kittilän koordinaatit**: 67.6569°N, 24.9125°E
- **Automaattinen päivitys** 30 minuutin välein
- **Responsiivinen**: Näkyy sekä desktop- että mobiilinäkymässä
- **Brändin mukaiset värit**: Käyttää OloResortin kultaista (#C8A46A) ja tummanharmaata (#1E1E1E) väripalettia
- **Ikonit**: Sääikonit Lucide React -kirjastosta

## Setup

### 1. Hanki OpenWeatherMap API-avain

1. Mene osoitteeseen: https://openweathermap.org/api
2. Luo ilmainen tili
3. Aktivoi API-avain (voi kestää muutaman tunnin)
4. Kopioi API-avain

### 2. Lisää API-avain ympäristömuuttujiin

Luo projektin juureen `.env.local` -tiedosto ja lisää:

```bash
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

**Huom:** Jos API-avainta ei ole asetettu, widget näyttää placeholder-dataa (-5°C, Kittilä).

### 3. Käynnistä dev-serveri uudelleen

```bash
npm run dev
```

## Widget Location

- **Desktop**: Oikeassa yläkulmassa, "Book Now" -napin vieressä
- **Mobile**: Mobile-menun sisällä, "Book Now" -napin ja yhteystietojen välissä

## Styling

Widget käyttää:
- Kultainen gradient-tausta: `rgba(200, 164, 106, 0.15)` - `rgba(200, 164, 106, 0.05)`
- Kultainen reuna: `rgba(200, 164, 106, 0.4)`
- Backdrop blur: `10px`
- Hover-efekti: Korostettu reuna ja varjo
- Pyöristetyt kulmat: `border-radius: var(--ref-radius-full)`

## API Rate Limits

OpenWeatherMap Free tier:
- 1,000 API calls/day
- 60 calls/minute

Widget päivittää tietoja 30 minuutin välein = ~48 kutsua/päivä per käyttäjä.

## Brand Context

Widget noudattaa OloResortin brand guideja:
- **Värit**: Messinki #C8A46A (brand gold)
- **Tyyli**: Minimalistinen ja ajaton
- **Animaatiot**: Hitaat ja harkitut (`var(--ref-duration-base)`)
- **Typografia**: Montserrat (lämpötila), Lato (sijainti)

## Files

- `app/components/WeatherWidget.tsx` - Pääkomponentti
- `app/components/Navigation.tsx` - Integrointi headeriin
- `app/globals.css` - Widget-tyylit (rivit 563-573)

## Troubleshooting

**Widget näyttää "Loading..." ikuisesti:**
- Tarkista että API-avain on oikein `.env.local` -tiedostossa
- Tarkista että dev-serveri on käynnistetty uudelleen API-avaimen lisäämisen jälkeen
- Tarkista konsolista mahdolliset virheet

**API-kutsu epäonnistuu:**
- Varmista että API-avain on aktivoitu (voi kestää 1-2 tuntia rekisteröitymisen jälkeen)
- Tarkista että olet OpenWeatherMap free tier -rajoissa
- Widget näyttää automaattisesti placeholder-dataa jos API-kutsu epäonnistuu

