/**
 * FAQs are educational and neutral. Wherever an answer depends on
 * Aircomfort's own policies (which are unverified), the answer says so
 * and directs the visitor to make contact.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'How do I request an installation quote?',
    answer:
      'Call or WhatsApp Aircomfort with the room size, the type of building, and where you would like the unit mounted. A photo of the wall and the outside area helps. You can also use the enquiry form on the Contact page — it prepares a WhatsApp message for you.',
  },
  {
    question: 'What information helps when reporting a fault?',
    answer:
      'Describe the symptoms: is the unit blowing warm air, leaking water, tripping the power or making a noise? Mention any blinking lights on the indoor unit and roughly when it was last serviced. Photos or a short video make an initial assessment much easier.',
  },
  {
    question: 'Can I send photos of my unit on WhatsApp?',
    answer:
      'Yes — WhatsApp is a convenient way to share photos of your indoor unit, the outdoor unit and the rating plate (the sticker with the model details). Use the WhatsApp button on this site to start the conversation, then attach your photos.',
  },
  {
    question: 'How often should an air-conditioner be serviced?',
    answer:
      'As general guidance, most units benefit from a service at least once a year, and more often in dusty environments or with heavy daily use. The right schedule for your unit depends on how it is used — contact Aircomfort directly to confirm.',
  },
  {
    question: 'How does room size affect which unit I need?',
    answer:
      'Larger rooms need higher-capacity units, and factors like ceiling height, sun exposure, windows and insulation all play a role. An undersized unit runs constantly without cooling properly; an oversized one cycles inefficiently. Share your room measurements when you enquire so the right size can be discussed.',
  },
  {
    question: 'How do I confirm Aircomfort services my suburb?',
    answer:
      'Aircomfort is based in Terenure, Kempton Park. Contact them directly with your suburb to confirm availability — the enquiry form on this site includes a suburb field for exactly that reason.',
  },
  {
    question: 'Does Aircomfort supply the unit as well as install it?',
    answer:
      'Supply is listed among Aircomfort’s services, alongside installation. Brands, models and pricing should be discussed directly, as stock and options change over time.',
  },
  {
    question: 'Is portable air-conditioning available?',
    answer:
      'Portable AC is listed among Aircomfort’s services. Contact Aircomfort directly to confirm current availability and which portable options would suit your space.',
  },
  {
    question: 'Is Aircomfort available after hours?',
    answer:
      'The business’s Google profile lists it as open 24 hours. Actual callout availability for your time and area should be confirmed directly with Aircomfort when you make contact.',
  },
];
