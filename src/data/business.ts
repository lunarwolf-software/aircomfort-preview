/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CENTRAL BUSINESS CONFIGURATION — edit this file, not the components.
 * ─────────────────────────────────────────────────────────────────────────
 *  Source of truth: LunarWolf Software Business Discovery Report (Jul 2026).
 *  Every field is tagged VERIFIED / UNKNOWN / ASSUMPTION in comments.
 *  Nothing marked UNKNOWN may be shown to visitors as fact.
 */

export const business = {
  // VERIFIED — Google Business Profile
  name: 'Aircomfort Airconditioning',
  shortName: 'Aircomfort',
  tagline: 'Air-conditioning installation, repairs and servicing in Kempton Park',

  phone: {
    // VERIFIED — primary number displayed on the Google Business Profile.
    display: '082 049 7400',
    e164: '+27820497400',
    // UNCONFIRMED — secondary number found on directory scrapes (Fastbase,
    // Cybo) of the same listing. Must be reconciled with the owner before
    // launch. Deliberately NOT displayed anywhere on the public site.
    secondaryUnconfirmed: '+27827757583',
  },

  whatsapp: {
    // ASSUMPTION — configured against the primary mobile number. The owner
    // must confirm this number is WhatsApp-enabled before presenting.
    number: '27820497400',
    defaultMessage:
      'Hi Aircomfort, I found your website and would like assistance with air conditioning.',
  },

  // UNKNOWN — no public email address exists. Leave empty; do not invent.
  email: '',

  address: {
    // VERIFIED — Google Business Profile. NOTE: this appears to be a
    // residential address. Confirm with the owner whether the street
    // address should be displayed publicly or replaced with
    // "Terenure, Kempton Park" only (see docs/OWNER-INFORMATION-CHECKLIST.md).
    street: '21 Mallard St',
    suburb: 'Terenure',
    city: 'Kempton Park',
    postalCode: '1619',
    province: 'Gauteng',
    displayPublicly: true,
  },

  // VERIFIED — Google Maps listing coordinates.
  coordinates: { lat: -26.0702052, lng: 28.1980395 },

  // VERIFIED — direct link to the Google Maps listing.
  googleMapsUrl: 'https://maps.google.com/?cid=5045959559393860411',

  hours: {
    // VERIFIED as *displayed on the Google profile* — genuine 24-hour
    // availability has NOT been confirmed by the owner. Always pair the
    // summary with the qualifier when shown to visitors.
    summary: 'Listed as open 24 hours',
    qualifier:
      "Available 24 hours according to the business's Google profile. Confirm callout availability directly when contacting Aircomfort.",
  },

  // UNKNOWN — no social media profiles were found. Add links here when the
  // owner creates them; the footer renders them automatically.
  socialLinks: [] as { label: string; url: string }[],

  reviews: {
    // VERIFIED — zero public Google reviews at the time of the preview.
    googleReviewCount: 0,
    note: 'No public Google reviews were available when this private preview was prepared.',
  },

  seo: {
    titleSuffix: ' | Aircomfort Airconditioning',
    defaultTitle: 'Aircon Installation and Repairs in Kempton Park | Aircomfort',
    defaultDescription:
      'Contact Aircomfort Airconditioning in Kempton Park for air-conditioning installation, repairs, servicing, supply and portable AC enquiries.',
  },

  preview: {
    // ── Preview-mode controls ────────────────────────────────────────────
    previewMode: true,
    // ISO date. After this date the site shows the archived-preview screen.
    // Change the date (or set previewMode to false) to reactivate.
    expiryDate: '2026-07-18',
    // Keeps local development working after the expiry date has passed.
    disableExpiryInDevelopment: true,
    noticeText:
      'Private website concept prepared exclusively for Aircomfort Airconditioning by LunarWolf Software.',
    lunarwolf: {
      name: 'LunarWolf Software',
      // TODO(LunarWolf): set your real contact URL or mailto: link before
      // sharing the preview. Left empty on purpose — nothing is invented.
      contactUrl: 'https://mikeywestie.github.io/',
    },
  },
} as const;

export type Business = typeof business;

/** Convenience: tel: link for the verified primary number. */
export const telHref = `tel:${business.phone.e164}`;

/** Convenience: Google Maps directions link. */
export const mapsHref = business.googleMapsUrl;
