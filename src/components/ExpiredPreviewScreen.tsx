import { business } from '../data/business';
import { LogoMark, LogoText } from './Logo';

/** Elegant archived screen shown after the configured preview expiry date. */
export function ExpiredPreviewScreen() {
  const { lunarwolf } = business.preview;
  return (
    <div className="expired">
      <main className="expired__card">
        <span className="logo">
          <LogoMark className="logo__mark" />
          <LogoText />
        </span>
        <h1>This private website concept is no longer publicly available.</h1>
        <p>Please contact {lunarwolf.name} to request renewed preview access.</p>
        {lunarwolf.contactUrl ? (
          <a className="btn btn--onDark" href={lunarwolf.contactUrl}>
            Contact {lunarwolf.name}
          </a>
        ) : (
          <p>
            <strong style={{ color: '#fff' }}>{lunarwolf.name}</strong>
          </p>
        )}
        <p className="expired__meta">
          Preview prepared for {business.name}, {business.address.city}. No content has been
          deleted — access can be restored on request.
        </p>
      </main>
    </div>
  );
}
