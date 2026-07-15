import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle, Camera, Info } from 'lucide-react';
import { services } from '../data/services';
import { buildEnquiryMessage, buildWhatsAppLink } from '../utils/whatsapp';

/**
 * The enquiry form does NOT submit to a server (there is no backend).
 * It builds a structured WhatsApp message and opens WhatsApp with it —
 * and says so honestly in the UI. No data is stored or discarded silently.
 */
export function ContactForm() {
  const [name, setName] = useState('');
  const [suburb, setSuburb] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const preview = useMemo(
    () => buildEnquiryMessage({ name, suburb, service, message }),
    [name, suburb, service, message],
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!suburb.trim()) {
      setError('Please add your suburb so Aircomfort can confirm availability.');
      return;
    }
    setError('');
    window.open(buildWhatsAppLink(preview), '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <h3 style={{ marginBottom: '0.3rem' }}>Send an enquiry on WhatsApp</h3>
      <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
        Fill in the details below — this prepares a WhatsApp message you can review and send
        yourself. Nothing is sent to a server.
      </p>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="enq-name">Your name</label>
          <input
            id="enq-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="enq-suburb">Suburb</label>
          <input
            id="enq-suburb"
            name="suburb"
            type="text"
            placeholder="e.g. Glen Marais"
            autoComplete="address-level3"
            required
            aria-required="true"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
          />
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="enq-service">What do you need help with?</label>
          <select
            id="enq-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure — need advice">Not sure — need advice</option>
          </select>
        </div>

        <div className="form-field form-field--full">
          <label htmlFor="enq-message">
            Message <span className="opt">(optional)</span>
          </label>
          <textarea
            id="enq-message"
            name="message"
            placeholder="Room size, symptoms of the fault, preferred times…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="form-hint">
        <Camera size={18} aria-hidden="true" />
        <span>
          <strong>Photos help.</strong> Once WhatsApp opens you can attach photos of your unit,
          the outdoor unit, or the room — they make a first assessment much easier.
        </span>
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <div className="form-actions">
        <button type="submit" className="btn btn--whatsapp btn--lg">
          <MessageCircle size={19} aria-hidden="true" />
          Open WhatsApp with my enquiry
        </button>
        <p className="form-note">
          <Info size={13} aria-hidden="true" style={{ verticalAlign: '-2px', marginRight: 4 }} />
          Your enquiry is sent from your own WhatsApp — you see the message before it goes.
        </p>
      </div>
    </form>
  );
}
