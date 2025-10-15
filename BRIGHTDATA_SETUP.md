# BrightData MCP Konfiguraatio-ohje (Cursor)

## 1. Projektikohtainen konfiguraatio ✅

### Ympäristömuuttujat
Tiedosto `.env.local` sisältää projektisi BrightData-asetukset:

```bash
API_TOKEN=536dc4e6ab5667dedc1636fccb7d99ad968300e60dd9bcc37f1cf4027b9aa6e7
WEB_UNLOCKER_ZONE=mcp_unlocker
BROWSER_ZONE=mcp_browser
PRO_MODE=true
```

✅ **Valmis!** API-avain on jo konfiguroitu.

### Asennus projektiin (valinnainen)
Jos haluat käyttää BrightData MCP:tä suoraan projektissasi:

```bash
npm install @brightdata/mcp --save-dev
```

## 2. Cursor MCP -integraatio

### Globaali konfiguraatio ✅

**BrightData MCP** ja **Upstash Context7 MCP** on nyt konfiguroitu **globaalisti** Cursorissa:

**Sijainti:** `~/Library/Application Support/Cursor/User/globalStorage/mcp.json`

Tämä tarkoittaa, että molemmat MCP-palvelimet ovat käytettävissä **kaikissa** Cursor-projekteissa.

### MCP-palvelimen käynnistys (tarvittaessa)
```bash
npx @brightdata/mcp
```

## 3. Next.js -integraatio

### API-reitti BrightData-datalle (Esimerkki)

Luo tiedosto `app/api/brightdata/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const apiToken = process.env.API_TOKEN;
  const zone = process.env.WEB_UNLOCKER_ZONE;
  
  if (!apiToken) {
    return NextResponse.json(
      { error: 'BrightData API token puuttuu' },
      { status: 500 }
    );
  }

  // Tässä voit käyttää BrightData API:a
  // Esimerkki: Hae verkkosivun sisältö
  try {
    const targetUrl = request.nextUrl.searchParams.get('url');
    
    if (!targetUrl) {
      return NextResponse.json(
        { error: 'URL-parametri puuttuu' },
        { status: 400 }
      );
    }

    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'X-Zone': zone || '',
      },
    });

    const data = await response.text();
    
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Virhe datan haussa' },
      { status: 500 }
    );
  }
}
```

## 4. Testaus

Testaa konfiguraatio:

```bash
# Tarkista että .env.local on olemassa
cat .env.local

# Käynnistä kehityspalvelin
npm run dev
```

## 5. Käyttö Cursorissa

BrightData MCP on nyt käytettävissä Cursorissa:

1. **Ympäristömuuttujat ladataan automaattisesti** `.env.local`-tiedostosta
2. **Käytä API:a Next.js API-reiteissä** (katso esimerkkejä yllä)
3. **MCP-palvelin voidaan ajaa taustalla** tarvittaessa: `npx @brightdata/mcp`

### MCP Cursor-asetukset ✅

**Globaali konfiguraatio** (kaikissa projekteissa):
- **Sijainti:** `~/Library/Application Support/Cursor/User/globalStorage/mcp.json`

**Projektispesifinen konfiguraatio** (vain tässä projektissa):
- **Sijainti:** `.cursor/mcp.json`

```json
{
  "mcpServers": {
    "Bright Data": {
      "command": "npx",
      "args": ["@brightdata/mcp"],
      "env": {
        "API_TOKEN": "536dc4e6ab5667dedc1636fccb7d99ad968300e60dd9bcc37f1cf4027b9aa6e7"
      }
    },
    "Context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {
        "CONTEXT7_API_KEY": "YOUR_CONTEXT7_API_KEY_HERE"
      }
    }
  }
}
```

> **Huomio:** Globaali konfiguraatio on nyt aktiivinen. **BrightData** ja **Context7** ovat käytettävissä kaikissa Cursor-projekteissa.

## Linkit
- [BrightData MCP Dokumentaatio](https://docs.brightdata.com/mcp-server)
- [BrightData Dashboard](https://brightdata.com/cp)
- [Cursor MCP Dokumentaatio](https://docs.cursor.com/mcp)

## Tuki
Jos kohtaat ongelmia, tarkista:
1. API-avain on oikein `.env.local`-tiedostossa
2. Zone-asetukset vastaavat BrightData-tilin asetuksia
3. Node.js on ajan tasalla (versio 18+)
4. Cursor on päivitetty uusimpaan versioon

