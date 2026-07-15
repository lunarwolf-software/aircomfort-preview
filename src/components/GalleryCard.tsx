import type { GalleryItem } from '../data/gallery';
import { Illustration } from './Illustrations';

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure className="card gallery-card" style={{ margin: 0 }}>
      <div className="gallery-card__media" aria-hidden="true">
        <Illustration kind={item.kind} />
      </div>
      <figcaption className="gallery-card__body">
        <h3>{item.caption}</h3>
        <p>{item.description}</p>
        <span className="gallery-card__tag">
          {item.usageNote === 'illustration'
            ? 'Illustration — photo to follow'
            : 'Photo pending owner confirmation'}
        </span>
      </figcaption>
    </figure>
  );
}
