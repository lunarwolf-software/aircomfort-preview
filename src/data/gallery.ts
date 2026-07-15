/**
 * Gallery data.
 *
 * IMPORTANT — image provenance (see docs/IMAGE-SOURCES.md):
 * The discovery report identified four potentially usable photos on the
 * business's Google listing, but they could not be downloaded reliably in
 * the build environment, and their use requires owner confirmation in any
 * case. This preview therefore ships with ORIGINAL SVG ILLUSTRATIONS
 * (created by LunarWolf) instead of photographs. Replace `illustration`
 * entries with real photo paths once the owner supplies originals.
 *
 * The two third-party images on the Google listing (a competitor-watermarked
 * photo and an unrelated billboard) are EXCLUDED and must never be used.
 */

export type IllustrationKind =
  | 'indoor-split'
  | 'outdoor-condenser'
  | 'portable-unit'
  | 'technician-tools'
  | 'remote-comfort'
  | 'ceiling-airflow';

export interface GalleryItem {
  id: string;
  kind: IllustrationKind;
  caption: string;
  description: string;
  // Set when a real, owner-approved photo replaces the illustration:
  // photoSrc?: string; photoAlt?: string;
  usageNote: 'illustration' | 'photo-pending-owner-confirmation';
}

export const galleryIntro =
  'Illustrative examples of typical air-conditioning work. Photographs of Aircomfort’s own installations will be added here once supplied and approved by the owner.';

export const galleryItems: GalleryItem[] = [
  {
    id: 'indoor-split',
    kind: 'indoor-split',
    caption: 'Indoor unit installation',
    description: 'Wall-mounted split unit positioned high on an interior wall.',
    usageNote: 'illustration',
  },
  {
    id: 'outdoor-condenser',
    kind: 'outdoor-condenser',
    caption: 'Outdoor condenser placement',
    description: 'Outdoor unit mounted with clear airflow around the coil.',
    usageNote: 'illustration',
  },
  {
    id: 'servicing',
    kind: 'technician-tools',
    caption: 'Servicing and maintenance',
    description: 'Filter cleaning and routine checks keep units efficient.',
    usageNote: 'illustration',
  },
  {
    id: 'portable',
    kind: 'portable-unit',
    caption: 'Portable air-conditioning example',
    description: 'Free-standing portable unit with window exhaust hose.',
    usageNote: 'illustration',
  },
  {
    id: 'comfort',
    kind: 'remote-comfort',
    caption: 'Everyday comfort',
    description: 'Simple temperature control for bedrooms and living areas.',
    usageNote: 'illustration',
  },
  {
    id: 'airflow',
    kind: 'ceiling-airflow',
    caption: 'Air-conditioning equipment example',
    description: 'Cool, even airflow through a well-sized system.',
    usageNote: 'illustration',
  },
];
