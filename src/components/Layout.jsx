import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppIcon from './Common/WhatsAppIcon';
import SEO from './SEO';
import { contactInfo } from '../data/siteData';
import { getSeoData } from '../data/seoData';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const { pathname } = useLocation();
  const seo = getSeoData(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        image={seo.image}
        imageAlt={seo.imageAlt}
        schema={seo.schema}
      />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110 hover:-translate-y-0.5 animate-bounce-slow"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
