import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../data/services';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link className="card" to={`/services#${service.id}`}>
      <span className="card__icon">
        <Icon size={26} aria-hidden="true" />
      </span>
      <h3>{service.name}</h3>
      <p>{service.short}</p>
      <span className="card__more">
        Learn more <ArrowRight size={15} aria-hidden="true" />
      </span>
    </Link>
  );
}
