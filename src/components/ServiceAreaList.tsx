import { MapPin } from 'lucide-react';
import {
  baseArea,
  enquiryAreas,
  enquiryAreasLabel,
  enquiryAreasDisclaimer,
} from '../data/serviceAreas';

export function ServiceAreaList() {
  return (
    <div className="areas">
      <div>
        <div className="areas__pin">
          <MapPin size={26} aria-hidden="true" />
          <div>
            <strong>{baseArea.headline}</strong>
            <span>{baseArea.note}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: '0.98rem', marginBottom: '0.7rem' }}>{enquiryAreasLabel}</h3>
        <ul className="area-list">
          {enquiryAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <p className="area-disclaimer">{enquiryAreasDisclaimer}</p>
      </div>
    </div>
  );
}
