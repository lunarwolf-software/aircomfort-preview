import { PhoneCall, MessageCircle } from 'lucide-react';
import { business, telHref } from '../data/business';
import { buildWhatsAppLink } from '../utils/whatsapp';

/** Sticky Call / WhatsApp bar on small screens. */
export function MobileContactBar() {
  return (
    <div className="mobile-bar" aria-label="Quick contact">
      <a className="btn btn--primary" href={telHref}>
        <PhoneCall size={18} aria-hidden="true" />
        Call {business.phone.display}
      </a>
      <a
        className="btn btn--whatsapp"
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={18} aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
