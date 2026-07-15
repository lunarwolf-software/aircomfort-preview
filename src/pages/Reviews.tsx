import { Star, ExternalLink } from 'lucide-react';
import { business, mapsHref } from '../data/business';
import { usePageMeta } from '../hooks/usePageMeta';
import { WhatsAppButton } from '../components/CTAButtons';

/**
 * Reviews-ready section. The business has zero public Google reviews
 * (verified at preview time), so this page is honest about that and is
 * structured for genuine reviews to be added later — no fake testimonials.
 */
export function Reviews() {
  usePageMeta(
    'Reviews',
    'Genuine customer reviews for Aircomfort Airconditioning will appear here. No public Google reviews were available when this preview was prepared.',
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Reviews</h1>
          <p>
            Real feedback from real customers matters — this page is ready to display genuine
            Google reviews as they are received.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reviews-panel">
            <div className="reviews-panel__stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={26} />
              ))}
            </div>
            <h2 style={{ fontSize: '1.3rem' }}>Reviews are on their way</h2>
            <p>{business.reviews.note}</p>
            <p>
              Worked with Aircomfort before? A short, honest Google review helps other
              Kempton Park residents find a local air-conditioning business.
            </p>
            <p style={{ marginBottom: 0 }}>
              <a
                className="btn btn--ghost"
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Find Aircomfort on Google <ExternalLink size={15} aria-hidden="true" />
              </a>
            </p>
            <p className="fineprint" style={{ marginTop: '1.2rem' }}>
              This site will only ever show genuine reviews — none are pre-written or
              invented.
            </p>
          </div>

          {/*
            DEVELOPER NOTE — adding genuine reviews later:
            Replace the panel above with a list of verified Google reviews, e.g.
            a `reviews: {author, rating, text, date, sourceUrl}[]` array in
            src/data/business.ts rendered as cards. Only add reviews that exist
            on the Google listing. Do not add aggregate-rating schema until
            real reviews exist.
          */}

          <div style={{ textAlign: 'center', marginTop: '2.2rem' }}>
            <WhatsAppButton label="Ask Aircomfort a question" />
          </div>
        </div>
      </section>
    </>
  );
}
