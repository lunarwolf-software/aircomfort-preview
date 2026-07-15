import { CheckCircle2, ClipboardList } from 'lucide-react';
import { business } from '../data/business';
import { usePageMeta } from '../hooks/usePageMeta';
import { CTAButtons } from '../components/CTAButtons';

const facts = [
  `Based in ${business.address.suburb}, ${business.address.city}, Gauteng`,
  'Services: installation, repairs, servicing, supply and portable AC',
  'Enquiries by phone or WhatsApp — photos welcome',
  'Listed as open 24 hours on the business’s Google profile (confirm callout availability directly)',
];

/**
 * Rendered only while previewMode is true — an internal working list for
 * LunarWolf and the owner, styled as an obvious internal note.
 */
const toConfirm = [
  'Company story and how the business started',
  'Years in business',
  'Qualifications and trade certifications',
  'Company registration details',
  'Warranties or workmanship guarantees offered',
  'Team members to feature (names and photos)',
  'Preferred / supplied brands',
  'True service radius and after-hours availability',
];

export function About() {
  usePageMeta(
    'About Aircomfort Airconditioning',
    'Aircomfort Airconditioning is a Kempton Park-based air-conditioning business offering installation, repairs, servicing, supply and portable AC services.',
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>About Aircomfort</h1>
          <p>
            Aircomfort Airconditioning is a Kempton Park-based air-conditioning business
            offering installation, repairs, servicing, supply and portable air-conditioning
            services.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-cols">
            <div>
              <h2>A local point of contact for air conditioning</h2>
              <p style={{ color: 'var(--ink-soft)' }}>
                Whether you are planning a first installation, replacing an older unit, or
                dealing with an air-conditioner that has stopped cooling, the simplest way to
                get answers is to talk to a local business directly. Aircomfort is based in{' '}
                {business.address.suburb}, {business.address.city}, and takes enquiries by
                phone and WhatsApp.
              </p>
              <p style={{ color: 'var(--ink-soft)' }}>
                Describe your space or the problem, share a photo or two, and discuss what
                makes sense for your home or small business — from unit sizing to servicing
                schedules.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1.4rem' }}>
                <CTAButtons />
              </div>
            </div>

            <ul className="about-facts">
              {facts.map((f) => (
                <li key={f}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {business.preview.previewMode && (
            <aside className="internal-panel" aria-label="Internal preview note">
              <span className="internal-panel__badge">
                <ClipboardList size={13} aria-hidden="true" />
                Internal — preview only
              </span>
              <h2>Information to confirm with the owner</h2>
              <p style={{ color: '#6b5a35', fontSize: '0.92rem' }}>
                This panel is visible only while preview mode is enabled. These details will
                enrich the About page once confirmed — nothing here is shown as fact to
                visitors.
              </p>
              <ul>
                {toConfirm.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>
    </>
  );
}
