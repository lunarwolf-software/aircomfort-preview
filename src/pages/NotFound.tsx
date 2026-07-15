import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="notfound container">
      <h1>Page not found</h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        That page doesn’t exist. Try the home page instead.
      </p>
      <Link className="btn btn--primary" to="/">
        Back to home
      </Link>
    </section>
  );
}
