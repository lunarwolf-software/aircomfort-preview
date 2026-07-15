import { MapPin, ExternalLink } from 'lucide-react';
import { business, mapsHref } from '../data/business';
import { usePageMeta } from '../hooks/usePageMeta';
import { ServiceAreaList } from '../components/ServiceAreaList';
import { CTAButtons } from '../components/CTAButtons';

export function ServiceAreasPage() {
  usePageMeta(
    'Service Areas — Kempton Park',
    'Aircomfort Airconditioning is based in Terenure, Kempton Park. Contact Aircomfort to confirm availability in your suburb.',
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Service areas</h1>
          <p>
            Based in {business.address.suburb}, {business.address.city}. Contact Aircomfort to
            confirm availability in your suburb — the suburbs listed below are shown to help
            with enquiries, not as guaranteed coverage.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <ServiceAreaList />

          <div className="card" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <MapPin size={22} aria-hidden="true" style={{ color: 'var(--accent-deep)', flex: 'none' }} />
            <p style={{ margin: 0, flex: 1, minWidth: '240px' }}>
              Find {business.name} on Google Maps
              {business.address.displayPublicly && (
                <>
                  {' '}
                  — {business.address.street}, {business.address.suburb},{' '}
                  {business.address.city}, {business.address.postalCode}
                </>
              )}
              .
            </p>
            <a className="btn btn--ghost" href={mapsHref} target="_blank" rel="noopener noreferrer">
              Get directions <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '2rem' }}>
            <CTAButtons />
          </div>
        </div>
      </section>
    </>
  );
}
