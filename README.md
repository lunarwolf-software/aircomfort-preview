
## LunarWolf review adjustments (15 July 2026)

This reviewed copy was updated to:

- set the private preview expiry to **18 July 2026** (approximately 72 hours);
- link expired-preview enquiries to Michael Westman’s portfolio contact presence;
- remove the placeholder `example.com` canonical URL;
- add explicit `noindex, nofollow, noarchive` metadata while the site is a private preview;
- remove the placeholder sitemap, which should only be generated after a final public domain is chosen.

# Aircomfort Airconditioning — Private Website Preview

A production-quality website preview for **Aircomfort Airconditioning**
(Kempton Park, Gauteng), prepared by **LunarWolf Software** as a private
sales concept. Built from the LunarWolf Business Discovery Report — every
public-facing claim is limited to verified facts; everything unverified is
either omitted or phrased neutrally.

> **Brand note:** the logo, monogram, favicon and colour system are a
> temporary concept identity prepared by LunarWolf Software for the private
> website preview. Final branding remains subject to client approval.

## Technology

- React 18 + TypeScript + Vite 5
- react-router-dom with **HashRouter** (GitHub Pages-safe; no rewrite rules needed)
- lucide-react icons
- Plain modern CSS (single design-system stylesheet, system font stack)
- No backend, no database, no CMS, no paid dependencies

## Run it

```bash
npm install
npm run dev      # local development
npm run build    # type-checks then builds to dist/
npm run preview  # serve the production build locally
```

## Deployment

The build output (`dist/`) is fully static. `vite.config.ts` uses
`base: './'` (relative URLs) and routing is hash-based, so the same build
works on:

- **GitHub Pages** — push `dist/` to a `gh-pages` branch (or use an action).
  Works under `https://user.github.io/repo-name/` with no extra config.
- **Netlify / Vercel / Cloudflare Pages** — set build command `npm run build`,
  output directory `dist`.
- Any static file host.

When a final domain exists: update the canonical link and OG metadata in
`index.html`, regenerate `public/sitemap.xml`, and relax `public/robots.txt`
(it currently discourages indexing because this is a private preview).

## Where everything is configured

**`src/data/business.ts` is the single source of truth.** Components read
from it — avoid editing business facts anywhere else.

| To change… | Edit |
|---|---|
| Phone number | `business.phone.display` and `business.phone.e164` |
| WhatsApp number / default message | `business.whatsapp` |
| Address & whether the street shows publicly | `business.address` (`displayPublicly: false` hides the street) |
| Hours wording & qualifier | `business.hours` |
| Preview expiry date | `business.preview.expiryDate` (ISO `YYYY-MM-DD`) |
| Disable preview mode entirely | `business.preview.previewMode = false` |
| LunarWolf contact link on the expiry screen | `business.preview.lunarwolf.contactUrl` (**currently empty — set before sharing**) |
| SEO defaults | `business.seo` + static tags in `index.html` |
| Services & copy | `src/data/services.ts` |
| Service areas | `src/data/serviceAreas.ts` |
| FAQs | `src/data/faq.ts` |
| Gallery items | `src/data/gallery.ts` |

## Preview mode & expiry

- A slim notice above the header and a footer line mark the site as a
  private LunarWolf concept (`preview.previewMode`).
- After `preview.expiryDate`, the whole site is replaced by an elegant
  archived-preview screen. Nothing is deleted — change the date (one value)
  to reactivate.
- `preview.disableExpiryInDevelopment: true` keeps `npm run dev` working
  after expiry so the project can always be tested locally.
- The About page shows an "Information to confirm with the owner" panel
  **only while preview mode is on** — it disappears when previewMode is false.

## Images & licensing ⚠

- The gallery and hero use **original SVG illustrations** created by
  LunarWolf. No photographs are shipped in this build.
- The candidate photos on the business's Google listing could **not** be
  downloaded in the build environment, and would require the owner's
  confirmation of ownership anyway. Their sources and status are documented
  in `docs/IMAGE-SOURCES.md`, including two third-party images that are
  **permanently excluded** (a competitor-watermarked photo and an unrelated
  billboard).
- To replace an illustration with a real, owner-approved photo: put the
  file in `public/images/`, then update the relevant entry in
  `src/data/gallery.ts` and render it in `GalleryCard` (add `loading="lazy"`
  and descriptive `alt` text). Compress to ≤ 200 KB where possible.
- Do **not** hotlink Google-hosted image URLs and do not add stock imagery
  without a verified licence.

## Contact form behaviour (no backend)

The enquiry form does **not** submit to a server. It builds a structured
WhatsApp message (name, suburb, service, details) and opens WhatsApp with
it — the visitor reviews and sends the message themselves, and the UI says
exactly that. No data is stored, transmitted elsewhere, or silently
discarded, and there is no fake "success" state. If the owner later wants
email delivery, add a form backend (e.g. a serverless function) and keep
the honest messaging.

## Adding genuine reviews later

The Reviews page currently states truthfully that no public Google reviews
existed at preview time. When real reviews exist: add them to a
`reviews` array in `src/data/business.ts` and render them on
`src/pages/Reviews.tsx` (a developer note in that file marks the spot).
Never add invented testimonials, and do not add aggregate-rating schema
until genuine reviews exist.

## Facts that still require confirmation

Tracked in full in `docs/OWNER-INFORMATION-CHECKLIST.md`. Highlights:

- Primary phone number (a second number, 082 775 7583, appears in
  directories — recorded in `business.ts` as unconfirmed, never displayed)
- WhatsApp availability on the primary number
- Real 24-hour availability (the site only ever attributes this to the
  Google profile, with a "confirm directly" qualifier)
- Street-address display preference (privacy)
- Regassing / emergency / commercial services (deliberately not claimed)
- Photo ownership, brands, registration details, years in business

## Before presenting this preview

1. **Verify both phone numbers** with the owner; correct `business.ts` if needed.
2. **Test the WhatsApp link** end-to-end on a phone (number must be WhatsApp-enabled).
3. **Confirm no third-party images are displayed** (this build ships none — keep it that way until ownership is confirmed).
4. **Verify the expiry date** in `business.preview.expiryDate` suits the sales window, and set `lunarwolf.contactUrl`.
5. **Run the production build** (`npm run build`) and check `npm run preview`.
6. **Test the site on mobile** — menu, tap-to-call, WhatsApp, sticky bar spacing.
7. **Review all unverified business claims** — search the copy for anything that reads as a promise.
8. **Replace any unsuitable placeholders** — especially if the owner supplies photos or brand preferences before the meeting.

## Project structure

```text
aircomfort-airconditioning-preview/
├── public/                 favicon, robots.txt, sitemap, manifest, og image
├── src/
│   ├── components/         Header, Footer, CTAs, form, gallery, preview & expiry UI
│   ├── data/               business.ts (config), services, areas, faq, gallery
│   ├── hooks/              usePageMeta, useReveal
│   ├── pages/              Home, Services, ServiceAreas, Gallery, About,
│   │                       Reviews, FAQ, Contact, NotFound
│   ├── styles/global.css   design system
│   └── utils/              whatsapp.ts, preview.ts
├── docs/                   WEBSITE-OPPORTUNITY, OWNER-INFORMATION-CHECKLIST,
│                           IMAGE-SOURCES (internal documents)
└── index.html              meta, Open Graph, JSON-LD (HVACBusiness)
```
#   a i r c o m f o r t - p r e v i e w  
 