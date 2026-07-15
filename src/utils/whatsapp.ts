import { business } from '../data/business';

/** Build a wa.me link with a URL-encoded message. */
export function buildWhatsAppLink(message?: string): string {
  const text = message ?? business.whatsapp.defaultMessage;
  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export interface EnquiryInput {
  name: string;
  suburb: string;
  service: string;
  message: string;
}

/** Build the structured WhatsApp enquiry used by the contact form. */
export function buildEnquiryMessage(input: EnquiryInput): string {
  const lines = [
    'Hi Aircomfort, I found your website and would like assistance with air conditioning.',
    '',
    `Name: ${input.name.trim() || '—'}`,
    `Suburb: ${input.suburb.trim() || '—'}`,
    `Service: ${input.service || '—'}`,
  ];
  if (input.message.trim()) {
    lines.push('', `Details: ${input.message.trim()}`);
  }
  lines.push('', '(Sent via the Aircomfort website enquiry form)');
  return lines.join('\n');
}
