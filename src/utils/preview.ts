import { business } from '../data/business';

/**
 * Preview-expiry logic.
 * - Before the configured expiry date: the normal site renders.
 * - After it: the archived-preview screen renders instead.
 * - In development, expiry can be disabled so local testing always works.
 * Reactivate an expired preview by changing `preview.expiryDate` in
 * src/data/business.ts — no content is deleted.
 */
export function isPreviewExpired(now: Date = new Date()): boolean {
  const { previewMode, expiryDate, disableExpiryInDevelopment } = business.preview;
  if (!previewMode) return false;
  if (import.meta.env.DEV && disableExpiryInDevelopment) return false;

  const expiry = new Date(`${expiryDate}T23:59:59`);
  if (Number.isNaN(expiry.getTime())) return false; // bad config → fail open
  return now.getTime() > expiry.getTime();
}

/** Human-readable availability date for the preview notice. */
export function previewAvailableUntil(): string {
  const d = new Date(`${business.preview.expiryDate}T12:00:00`);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
}
