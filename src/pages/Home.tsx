import { Link } from 'react-router-dom';
import {
  MapPin,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Camera,
  Handshake,
  Home as HomeIcon,
  ArrowRight,
} from 'lucide-react';
import { business } from '../data/business';
import { services } from '../data/services';
import { galleryItems } from '../data/gallery';
import { faqs } from '../data/faq';
import { usePageMeta } from '../hooks/usePageMeta';
import { useReveal } from '../hooks/useReveal';
import { CTAButtons } from '../components/CTAButtons';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { GalleryCard } from '../components/GalleryCard';
import { ServiceAreaList } from '../components/ServiceAreaList';
import { FAQAccordion } from '../components/FAQAccordion';
import { HeroIllustration } from '../components/Illustrations';

const steps = [
  {
    title: 'Get in touch',
    text: 'Call or WhatsApp with a short description of what you need — installation, a repair, a service or a new unit.',
  },
  {
    title: 'Share the details',
    text: 'Room size, symptoms of a fault, and a photo or two of the unit help Aircomfort understand the job.',
  },
  {
    title: 'Discuss options',
    text: 'Talk through what suits your space and budget, and agree on the way forward directly with Aircomfort.',
  },
  {
    title: 'Work gets arranged',
    text: 'Once you are happy, arrange a suitable time for the installation, repair or service.',
  },
];

const trustPoints = [
  {
    icon: MapPin,
    title: 'Local to Kempton Park',
    text: `Based in ${business.address.suburb}, ${business.address.city} — not a national call centre.`,
  },
  {
    icon: PhoneCall,
    title: 'Speak directly',
    text: 'One phone number, answered by the business itself. No ticket queues or middlemen.',
  },
  {
    icon: Camera,
    title: 'WhatsApp-friendly',
    text: 'Send photos of your unit or room on WhatsApp for a quicker first assessment.',
  },
  {
    icon: Handshake,
    title: 'Straightforward enquiries',
    text: 'Describe the job, discuss the options, and agree what happens next — no pressure.',
  },
];

export function Home() {
  usePageMeta();
  const servicesRef = useReveal<HTMLDivElement>();
  const trustRef = useReveal<HTMLDivElement>();
  const stepsRef = useReveal<HTMLDivElement>();
  const galleryRef = useReveal<HTMLDivElement>();
  const areasRef = useReveal<HTMLDivElement>();
  const faqRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="hero__kicker">
              <HomeIcon size={15} aria-hidden="true" />
              Kempton Park, Gauteng
            </span>
            <h1>Air Conditioning Installation, Repairs and Servicing in Kempton Park</h1>
            <p className="lead">
              Speak directly with Aircomfort Airconditioning about supply, installation,
              repairs, servicing and portable air-conditioning solutions.
            </p>
            <div className="hero__actions">
              <CTAButtons size="lg" />
            </div>
            <p className="hero__qualifier">{business.hours.qualifier}</p>
            <ul className="hero__points">
              <li>
                <CheckCircle2 size={16} aria-hidden="true" /> Installation
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" /> Repairs
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" /> Servicing
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" /> Supply
              </li>
              <li>
                <CheckCircle2 size={16} aria-hidden="true" /> Portable AC
              </li>
            </ul>
          </div>
          <div className="hero__art">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" aria-label="Services">
        <div className="container" ref={servicesRef}>
          <SectionHeading eyebrow="What Aircomfort does" title="Air-conditioning services">
            Five core services for homes and small businesses in and around Kempton Park.
          </SectionHeading>
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
            <Link className="card" to="/contact">
              <span className="card__icon">
                <MessageCircle size={26} aria-hidden="true" />
              </span>
              <h3>Not sure what you need?</h3>
              <p>
                Describe the problem or the room, and discuss the sensible options directly
                with Aircomfort.
              </p>
              <span className="card__more">
                Get in touch <ArrowRight size={15} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section section--dark" aria-label="Why contact Aircomfort">
        <div className="container" ref={trustRef}>
          <SectionHeading eyebrow="Why Aircomfort" title="A local business you can talk to">
            No inflated claims — just a straightforward way to get air-conditioning help
            from a Kempton Park business.
          </SectionHeading>
          <div className="grid grid--2">
            {trustPoints.map((t) => {
              const Icon = t.icon;
              return (
                <div className="trust-item" key={t.title}>
                  <span className="trust-item__icon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-label="How it works">
        <div className="container" ref={stepsRef}>
          <SectionHeading eyebrow="Simple process" title="How an enquiry works" center>
            From first message to a completed job, without complications.
          </SectionHeading>
          <div className="steps">
            {steps.map((step, i) => (
              <div className="step" key={step.title}>
                <span className="step__num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section section--tint" aria-label="Gallery preview">
        <div className="container" ref={galleryRef}>
          <SectionHeading eyebrow="Gallery" title="Typical air-conditioning work">
            Illustrative examples — photographs of Aircomfort’s own work will be added once
            supplied by the owner.
          </SectionHeading>
          <div className="grid grid--3">
            {galleryItems.slice(0, 3).map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
          <p style={{ marginTop: '1.4rem' }}>
            <Link className="btn btn--ghost" to="/gallery">
              View the gallery <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* Service areas */}
      <section className="section" aria-label="Service areas">
        <div className="container" ref={areasRef}>
          <SectionHeading eyebrow="Where" title="Service areas">
            {business.name} is based in {business.address.suburb}, {business.address.city}.
          </SectionHeading>
          <ServiceAreaList />
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section section--tint" aria-label="Frequently asked questions">
        <div className="container" ref={faqRef}>
          <SectionHeading eyebrow="Good to know" title="Common questions" center />
          <FAQAccordion items={faqs.slice(0, 3)} />
          <p style={{ textAlign: 'center', marginTop: '1.4rem' }}>
            <Link className="btn btn--ghost" to="/faq">
              More questions answered <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section--dark cta-band" aria-label="Contact call to action">
        <div className="container">
          <h2>Ready to talk about your air conditioning?</h2>
          <p>
            Call or WhatsApp Aircomfort about your installation, repair or servicing
            requirements — or send an enquiry from the contact page.
          </p>
          <div className="cta-band__actions">
            <CTAButtons size="lg" onDark />
            <Link className="btn btn--onDark btn--lg" to="/contact">
              Request a quote
            </Link>
          </div>
          <p className="fineprint">{business.hours.qualifier}</p>
        </div>
      </section>
    </>
  );
}
