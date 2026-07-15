import { Link } from 'react-router-dom';
import { business, telHref, mapsHref } from '../data/business';
import { LogoMark, LogoText } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  const { address } = business;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <span className="logo" style={{ marginBottom: '0.9rem', display: 'inline-flex' }}>
              <LogoMark className="logo__mark" />
              <LogoText />
            </span>
            <p>
              Air-conditioning installation, repairs, servicing, supply and portable AC —
              based in {address.suburb}, {address.city}.
            </p>
            <p className="footer__hours">{business.hours.qualifier}</p>
          </div>

          <div>
            <h3>Pages</h3>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/service-areas">Service areas</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div>
            <h3>Help</h3>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={telHref}>{business.phone.display}</a>
              </li>
              {address.displayPublicly && (
                <li>
                  {address.street}, {address.suburb},<br />
                  {address.city}, {address.postalCode}
                </li>
              )}
              {business.socialLinks.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {business.name}. All rights reserved.
          </span>
          {business.preview.previewMode && (
            <span>{business.preview.noticeText}</span>
          )}
        </div>
      </div>
    </footer>
  );
}
