import { useEffect } from 'react';
import { business } from '../data/business';

/**
 * Sets the document title and meta description per page.
 * (Hash routing serves one physical document, so per-page meta is applied
 * client-side; static defaults live in index.html for crawlers/sharing.)
 */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title
      ? `${title}${business.seo.titleSuffix}`
      : business.seo.defaultTitle;

    const desc = description ?? business.seo.defaultDescription;
    let el = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!el) {
      el = document.createElement('meta');
      el.name = 'description';
      document.head.appendChild(el);
    }
    el.content = desc;
  }, [title, description]);
}
