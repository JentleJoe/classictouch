import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './Common/WhatsAppIcon';
import { contactInfo } from '../data/siteData';

export default function CTA() {
  return (
    <section className="bg-gold-500 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
            Ready to transform your space?
          </h2>
          <p className="text-navy-950/70 mb-8 leading-relaxed max-w-xl mx-auto">
            Get a free consultation and quotation. Let us bring your vision to life with premium painting and finishing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Free Quote
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
      </div>
    </section>
  );
}
