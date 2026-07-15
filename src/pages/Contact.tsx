import { PhoneCall, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';
import { business, telHref, mapsHref } from '../data/business';
import { usePageMeta } from '../hooks/usePageMeta';
import { ContactForm } from '../components/ContactForm';
import { buildWhatsAppLink } from '../utils/whatsapp';

export function Contact() {
  usePageMeta(
    'Contact Aircomfort Airconditioning',
    'Call or WhatsApp Aircomfort Airconditioning in Kempton Park about installation, repairs, servicing, supply or portable AC.',
  );

  const { address } = business;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Contact Aircomfort</h1>
          <p>
            Speak directly with Aircomfort about your installation, repair or servicing
            requirements. Phone and WhatsApp are the quickest ways to make contact.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="card">
              <span className="card__icon">
                <PhoneCall size={21} aria-hidden="true" />
              </span>
              <div>
                <h3>Call</h3>
                <p>
                  <a className="plain" href={telHref}>
                    {business.phone.display}
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <span className="card__icon">
                <MessageCircle size={21} aria-hidden="true" />
              </span>
              <div>
                <h3>WhatsApp</h3>
                <p>
                  <a
                    className="plain"
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message {business.phone.display}
                  </a>
                  <br />
                  <span style={{ fontSize: '0.83rem', color: 'var(--muted)' }}>
                    Photos of your unit are welcome.
                  </span>
                </p>
              </div>
            </div>

            <div className="card">
              <span className="card__icon">
                <MapPin size={21} aria-hidden="true" />
              </span>
              <div>
                <h3>Location</h3>
                <p>
                  {address.displayPublicly && (
                    <>
                      {address.street}, {address.suburb},<br />
                      {address.city}, {address.postalCode}, {address.province}
                      <br />
                    </>
                  )}
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer">
                    Get directions on Google Maps{' '}
                    <ExternalLink size={13} aria-hidden="true" style={{ display: 'inline' }} />
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <span className="card__icon">
                <Clock size={21} aria-hidden="true" />
              </span>
              <div>
                <h3>Hours</h3>
                <p>
                  {business.hours.summary}.<br />
                  <span style={{ fontSize: '0.83rem', color: 'var(--muted)' }}>
                    {business.hours.qualifier}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
