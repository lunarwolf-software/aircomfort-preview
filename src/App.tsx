import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { isPreviewExpired } from './utils/preview';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PreviewNotice } from './components/PreviewNotice';
import { MobileContactBar } from './components/MobileContactBar';
import { ExpiredPreviewScreen } from './components/ExpiredPreviewScreen';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { GalleryPage } from './pages/GalleryPage';
import { About } from './pages/About';
import { Reviews } from './pages/Reviews';
import { FAQPage } from './pages/FAQPage';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

/** Scroll to top on route change (unless navigating to an in-page anchor). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  if (isPreviewExpired()) {
    return <ExpiredPreviewScreen />;
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PreviewNotice />
      <Header />
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
