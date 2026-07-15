import { business } from '../data/business';
import { previewAvailableUntil } from '../utils/preview';

/** Slim, professional preview strip shown above the header. */
export function PreviewNotice() {
  if (!business.preview.previewMode) return null;
  const until = previewAvailableUntil();
  return (
    <div className="preview-notice" role="note">
      <strong>Private preview.</strong> {business.preview.noticeText}{' '}
      {until && <span className="date">Preview available until {until}.</span>}
    </div>
  );
}
