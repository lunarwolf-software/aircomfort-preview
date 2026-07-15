import { useEffect } from 'react';
import { faqs } from '../data/faq';
import { usePageMeta } from '../hooks/usePageMeta';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTAButtons } from '../components/CTAButtons';

export function FAQPage() {
  usePageMeta(
    'Frequently Asked Questions',
    'Answers to common questions about air-conditioning installation, repairs, servicing and enquiries in Kempton Park.',
  );

  // Inject FAQPage JSON-LD while this page is mounted.
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Frequently asked questions</h1>
          <p>
            General guidance on air conditioning, plus how enquiries with Aircomfort work.
            Where an answer depends on the business’s own policies, contact Aircomfort
            directly to confirm.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <FAQAccordion items={faqs} />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              justifyContent: 'center',
              marginTop: '2.4rem',
            }}
          >
            <CTAButtons />
          </div>
        </div>
      </section>
    </>
  );
}
