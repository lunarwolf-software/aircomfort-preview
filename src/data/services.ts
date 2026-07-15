import type { LucideIcon } from 'lucide-react';
import { AirVent, Wrench, ClipboardCheck, Package, Plug } from 'lucide-react';

/**
 * The five services below are VERIFIED — they match the service list on
 * Aircomfort's public Procompare profile (installation, repair, servicing,
 * supply, portable AC). All copy is educational or neutral; nothing claims
 * response times, guarantees, pricing or unverified capabilities.
 */

export interface Service {
  id: string;
  name: string;
  short: string;
  icon: LucideIcon;
  intro: string;
  helpsWith: string[];
  goodToKnow: string;
}

export const services: Service[] = [
  {
    id: 'installation',
    name: 'Air-Conditioning Installation',
    short: 'New split-unit installations for homes and small businesses.',
    icon: AirVent,
    intro:
      'Planning a new air-conditioner? Aircomfort handles installation enquiries for rooms of all sizes — bedrooms, living areas, offices and more.',
    helpsWith: [
      'Choosing a sensible position for the indoor and outdoor units',
      'Matching unit capacity to your room size',
      'Replacing an outdated unit with a newer one',
      'Discussing what an installation involves before you commit',
    ],
    goodToKnow:
      'Room size, ceiling height, sun exposure and insulation all affect which unit suits a space. Sending room measurements and a photo with your enquiry makes the first conversation far more useful.',
  },
  {
    id: 'repairs',
    name: 'Air-Conditioning Repairs',
    short: 'Diagnosing and repairing units that are not cooling properly.',
    icon: Wrench,
    intro:
      'If your air-conditioner is blowing warm air, leaking water, tripping power or making unusual noises, describe the problem to Aircomfort and discuss repair options directly.',
    helpsWith: [
      'Units that no longer cool or heat as they should',
      'Water leaks from the indoor unit',
      'Units that will not switch on or trip the electricity',
      'Unusual noises or smells during operation',
    ],
    goodToKnow:
      'When reporting a fault, note the symptoms, any blinking error lights, and roughly when the unit was last serviced. Photos or a short video sent on WhatsApp help with an initial assessment.',
  },
  {
    id: 'servicing',
    name: 'Servicing & Maintenance',
    short: 'Cleaning and maintenance to keep units running efficiently.',
    icon: ClipboardCheck,
    intro:
      'Regular servicing keeps an air-conditioner efficient and hygienic. Speak to Aircomfort about servicing your unit or setting up a routine that suits your household or premises.',
    helpsWith: [
      'Cleaning filters, coils and drainage',
      'Restoring cooling performance that has faded over time',
      'Reducing musty smells from a unit',
      'Keeping units in good condition between seasons',
    ],
    goodToKnow:
      'Most air-conditioners benefit from servicing at least once a year — more often in dusty environments or with heavy daily use. Confirm a suitable schedule for your unit directly with Aircomfort.',
  },
  {
    id: 'supply',
    name: 'Air-Conditioner Supply',
    short: 'Supply of units, with or without installation.',
    icon: Package,
    intro:
      'Aircomfort lists supply as well as installation, so you can enquire about purchasing a unit — whether you want it installed at the same time or supplied on its own.',
    helpsWith: [
      'Discussing which unit sizes suit your rooms',
      'Supply-only purchases where you have your own installer',
      'Combined supply-and-install enquiries',
      'Replacing multiple units at the same time',
    ],
    goodToKnow:
      'Brands, models, stock and pricing change often. Contact Aircomfort directly to discuss what is currently available for your budget and room size.',
  },
  {
    id: 'portable',
    name: 'Portable Air-Conditioning',
    short: 'Portable AC options for spaces where installation is not practical.',
    icon: Plug,
    intro:
      'Portable air-conditioners suit rentals, offices and rooms where a fixed installation is not possible or not allowed. Ask Aircomfort what portable options are available.',
    helpsWith: [
      'Cooling rented properties without permanent installation',
      'Temporary cooling for events or seasonal use',
      'Single rooms where a split unit is not practical',
      'Moving cooling between rooms as needed',
    ],
    goodToKnow:
      'Portable units need a window or vent point for the exhaust hose and work best in smaller, well-sealed rooms. Availability of portable units should be confirmed directly with Aircomfort.',
  },
];

export const getService = (id: string) => services.find((s) => s.id === id);
