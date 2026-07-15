import { galleryIntro, galleryItems } from '../data/gallery';
import { usePageMeta } from '../hooks/usePageMeta';
import { GalleryCard } from '../components/GalleryCard';

export function GalleryPage() {
  usePageMeta(
    'Gallery',
    'Illustrative examples of air-conditioning installation, servicing and portable AC. Photos of Aircomfort’s own work to follow once approved by the owner.',
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>{galleryIntro}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
          <p className="gallery-note">
            All artwork on this page is original illustration prepared for the preview.
            Photographs from the business&rsquo;s Google listing are only added once their
            ownership is confirmed with the owner.
          </p>
        </div>
      </section>
    </>
  );
}
