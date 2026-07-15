import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';
import { CTAButtons } from '../components/CTAButtons';

export function Services() {
  usePageMeta(
    'Air-Conditioning Services in Kempton Park',
    'Installation, repairs, servicing, supply and portable air-conditioning — contact Aircomfort Airconditioning in Kempton Park to discuss your requirements.',
  );

  // Support /services#installation style deep links.
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ block: 'start' });
  }, [hash]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Services</h1>
          <p>
            Aircomfort Airconditioning offers installation, repairs, servicing, supply and
            portable air-conditioning. Every job starts with a conversation — contact
            Aircomfort to discuss availability and what suits your space.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article className="service-detail" id={s.id} key={s.id}>
                <span className="service-detail__icon">
                  <Icon size={27} aria-hidden="true" />
                </span>
                <div>
                  <h3>{s.name}</h3>
                  <p style={{ color: 'var(--ink-soft)' }}>{s.intro}</p>
                  <ul>
                    {s.helpsWith.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={17} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="service-detail__note">
                    <strong>Good to know:</strong> {s.goodToKnow}
                  </p>
                </div>
              </article>
            );
          })}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '2rem' }}>
            <CTAButtons size="lg" />
          </div>
          <p style={{ marginTop: '0.8rem', fontSize: '0.82rem', color: 'var(--muted)' }}>
            Service availability, pricing and scheduling are confirmed directly with
            Aircomfort when you make contact.
          </p>
        </div>
      </section>
    </>
  );
}
