# SEO, AEO, and WebMCP Audit Report: dammgrill.de
**Date:** 2026-07-20
**Domain:** `https://www.dammgrill.de`

---

## Executive Summary
`dammgrill.de` is a Next.js-based Greek restaurant website in Duisburg-Meiderich. It features a clean design, clear contact elements, and dynamic sections showing Greek specialties and opening hours. However, it lacks critical optimizations for **Local SEO (schema structures)**, **Generative Answer Engines (AEO/GEO)**, and **Autonomous Agents (WebMCP)**. 

By addressing the findings in this report, `dammgrill.de` can rank higher in local search packs, get cited by AI dining bots (e.g., Apple Intelligence, ChatGPT, Perplexity), and become browseable by AI personal assistants.

---

## 🏛️ Wave 1: Traditional & Local SEO Audit

### 1. Strengths
*   **Solid Metadata:** Good page title (`Damm Grill - Griechisches Restaurant in Duisburg Meiderich`) and description (`Willkommen beim Damm Grill in Duisburg Meiderich. Genießen Sie...`).
*   **Clear Calls to Action:** High visibility for telephone calls (`0203 / 44 30 04`) and menu viewing.
*   **Next.js Optimization:** Utilizes Next.js static asset bundling and Unsplash-preloaded images for fast rendering.

### 2. Gaps & Recommendations (Critical Local SEO Fixes)
*   **Missing JSON-LD Structured Data Schema:** The site currently has **no** JSON-LD schema (e.g., `Restaurant`, `LocalBusiness`, or `FoodEstablishment`). This is a critical SEO failure. Without this schema, search engines cannot reliably index your address, hours, price range, and menu categories in Google Maps and the Local 3-Pack.
*   **Missing robots.txt:** The site returned a 404 error for `/robots.txt`. Search engine crawlers require a robots.txt file to find the sitemap and parse indexation permissions.

**Action Item: Implement JSON-LD `Restaurant` Schema**
Place this structured script in the `<head>` of your layout:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Damm Grill",
  "image": "https://www.dammgrill.de/_next/image?url=%2Ffavicon.png&w=640&q=75",
  "@id": "https://www.dammgrill.de/#restaurant",
  "url": "https://www.dammgrill.de",
  "telephone": "0203443004",
  "priceRange": "$$",
  "menu": "https://www.dammgrill.de/speisekarte",
  "servesCuisine": ["Greek", "German", "Pizza", "Schnitzel"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Auf dem Damm 52",
    "addressLocality": "Duisburg",
    "postalCode": "47137",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.463283,
    "longitude": 6.782012
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "12:00",
    "closes": "22:00"
  }
}
</script>
```

---

## 🏗️ Wave 2: AEO & GEO (Generative Engine Optimization) Audit
*How visible is the restaurant in ChatGPT, Claude, Gemini, and Apple Intelligence dining searches?*

### AEO Foundations Scorecard
| Check | Status | Detail |
|---|---|---|
| robots.txt has explicit AI crawler rules | ❌ No | /robots.txt is missing entirely (404). |
| `llms.txt` published | ❌ No | /llms.txt returns a 404. |
| Key pages available as clean HTML | ⚠️ Partial | Landing pages are HTML but menu structure is rendering-dependent. |
| Menu parsed as structured Markdown | ❌ No | No machine-readable menu files exist for LLM consumption. |
| Entity Optimization | ⚠️ Partial | Brand name "Damm Grill" is clear, but lack of reviews/local signals restricts recommendation weight. |

**AEO Foundation Score: 1/5 (20%)**

---

### Key AEO Optimization Recommendations

#### 1. Create a `robots.txt` File
Create a robots file to structure bot permissions. This ensures AI travel and search crawlers can index the site without getting blocked by server-side rate limits.

**Recommended `robots.txt`:**
```text
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://www.dammgrill.de/sitemap.xml
```

#### 2. Publish `llms.txt` for AI Assistants & Siri
When a user asks Apple Intelligence, Siri, or ChatGPT: *"Where can I get good Gyros or Schnitzel in Duisburg Meiderich?"*, the AI crawls for key details. A `/llms.txt` file lets the AI parse your opening hours, contact number, and menu items instantly.

**Recommended `llms.txt` Template:**
```markdown
# Damm Grill

> Authentisches griechisches Restaurant und Schnellrestaurant im Herzen von Duisburg-Meiderich. Griechische und deutsche Spezialitäten.

## Restaurant Details
- **Adresse:** Auf dem Damm 52, 47137 Duisburg, Deutschland
- **Telefon:** 0203 / 44 30 04 (Direkte Tischreservierung und Bestellungen)
- **Email:** info@dammgrill.de
- **Website:** https://www.dammgrill.de
- **Öffnungszeiten:** Täglich von 12:00 bis 22:00 Uhr (Keine Ruhetage, auch an Feiertagen geöffnet).

## Ausstattung
- 50 Sitzplätze im Innenbereich
- 50 Sitzplätze auf der Außenterrasse
- Alle MSV Duisburg Spiele live übertragen

## Hauptgerichte & Spezialitäten
- **Griechische Klassiker:** Gyros (mit Zaziki, Pommes und Salat), Gyros-Spezialitäten (z. B. Taxi-Teller), Grillplatten, Spieße.
- **Schnitzel:** Über 15 verschiedene Schnitzel-Variationen (z. B. Wiener Art, Schlemmer-Schnitzel).
- **Pizza & Pasta:** Knusprige Steinofen-Pizza und verschiedene Nudelgerichte.
- **Schnellimbiss-Klassiker:** Currywurst, Bratwurst, Pommes Frites, frische Salate.
```

---

## 🤖 Wave 3: WebMCP & Agentic Readiness Audit

Can a user's voice assistant or autonomous agent call the restaurant or plan a route automatically?

### WebMCP Readiness Scorecard
| Task Flow | Discoverable | Initiatable | Completable | Drop Point | Priority |
|---|---|---|---|---|---|
| Click-to-Call Restaurant | ⚠️ Partial | ⚠️ Partial | ✅ Yes | Plain `tel:` link; lacks action metadata | P1 |
| Route planning ("Route planen") | ❌ No | ❌ No | ❌ No | Plain link with no action declaration | P2 |

**Overall Agentic Task Completion Rate: 1/2 (50%)**

---

### WebMCP Optimization Recommendations

#### 1. Annotate Telephone & Route Action elements
Add WebMCP declarative attributes (`data-mcp-*`) to allow browsing agents (like Claude's computer use or Siri / Apple Intelligence) to execute actions directly.

*   **For Telephone Call button:**
    ```html
    <a 
      href="tel:0203443004" 
      data-mcp-action="call-restaurant"
      data-mcp-description="Rufe den Damm Grill für Bestellungen oder Tischreservierungen direkt an."
    >
      0203 / 44 30 04
    </a>
    ```
*   **For Route Planner button:**
    ```html
    <a 
      href="/kontakt" 
      data-mcp-action="get-directions"
      data-mcp-description="Zeige die Anfahrt zum Restaurant Auf dem Damm 52 in Duisburg-Meiderich."
    >
      Route planen
    </a>
    ```

---

## 📈 Summary Action Plan
1.  **Immediate (7 Days):** Create and upload `/robots.txt` and place the `Restaurant` JSON-LD schema in the site header.
2.  **Short-term (14 Days):** Create and publish the `/llms.txt` file detailing your menu and business info.
3.  **Medium-term (30 Days):** Upgrade call-to-action buttons with declarative WebMCP attributes so smart assistants can process commands natively.
