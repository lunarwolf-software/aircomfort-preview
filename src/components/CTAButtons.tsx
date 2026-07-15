import { PhoneCall, MessageCircle } from 'lucide-react';
import { business, telHref } from '../data/business';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface Props {
  size?: 'md' | 'lg';
  onDark?: boolean;
}

/** Paired Call + WhatsApp buttons used across the site. */
export function CTAButtons({ size = 'md', onDark = false }: Props) {
  const lg = size === 'lg' ? ' btn--lg' : '';
  return (
    <>
      <a className={`btn btn--primary${lg}`} href={telHref}>
        <PhoneCall size={18} aria-hidden="true" />
        Call {business.phone.display}
      </a>
      <WhatsAppButton size={size} onDark={onDark} />
    </>
  );
}

export function WhatsAppButton({
  size = 'md',
  label = 'WhatsApp Aircomfort',
  message,
}: {
  size?: 'md' | 'lg';
  onDark?: boolean;
  label?: string;
  message?: string;
}) {
  const lg = size === 'lg' ? ' btn--lg' : '';
  return (
    <a
      className={`btn btn--whatsapp${lg}`}
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </a>
  );
}
