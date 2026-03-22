import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Eye } from 'lucide-react';
import { contactInfo } from '../data/siteData';
import PageHeader from '../components/Common/PageHeader';
import WhatsAppIcon from '../components/Common/WhatsAppIcon';

// Import all project images from assets
import glacetouch1 from '../assets/glacetouch1.jpeg';
import glacetouch2 from '../assets/glacetouch2.jpeg';
import glacetouch3 from '../assets/glacetouch3.jpeg';
import glacetouch4 from '../assets/glacetouch4.jpeg';
import glacetouch5 from '../assets/glacetouch5.jpeg';
import glacetouch6 from '../assets/glacetouch6.jpeg';
import glacetouch7 from '../assets/glacetouch7.jpeg';
import glacetouch8 from '../assets/glacetouch8.jpeg';
import glacetouch9 from '../assets/glacetouch9.jpeg';
import glacetouch10 from '../assets/glacetouch10.jpeg';
import glacetouch11 from '../assets/glacetouch11.jpeg';
import glacetouch12 from '../assets/glacetouch12.jpeg';

const portfolioGallery = [
  { image: glacetouch1 },
  { image: glacetouch2 },
  { image: glacetouch3 },
  { image: glacetouch4 },
  { image: glacetouch5 },
  { image: glacetouch6 },
  { image: glacetouch7 },
  { image: glacetouch8 },
  { image: glacetouch9 },
  { image: glacetouch10 },
  { image: glacetouch11 },
  { image: glacetouch12 },
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(portfolioGallery[index].image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % portfolioGallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioGallery[newIndex].image);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + portfolioGallery.length) % portfolioGallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioGallery[newIndex].image);
  };

  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="Browse our recent projects and see the Glacetouch difference for yourself."
      />

      {/* Portfolio Gallery */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Masonry Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioGallery.map((project, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative rounded-xl overflow-hidden cursor-pointer aspect-square shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt="Portfolio project"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold-500 p-3 rounded-full">
                    <Eye className="w-6 h-6 text-navy-950" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white hover:text-gold-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Main image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={selectedImage}
              alt="Portfolio"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />

            {/* Navigation buttons */}
            {portfolioGallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-gold-500/80 hover:bg-gold-500 text-navy-950 p-3 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold-500/80 hover:bg-gold-500 text-navy-950 p-3 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentIndex + 1} / {portfolioGallery.length}
                </div>
              </>
            )}
          </div>

          {/* Click outside to close */}
          <div
            onClick={closeLightbox}
            className="absolute inset-0 -z-10"
          />
        </div>
      )}

      {/* CTA */}
      <section className="bg-gold-500 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Want results like these?
          </h2>
          <p className="text-navy-950/70 mb-8 leading-relaxed">
            Let us transform your space. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
