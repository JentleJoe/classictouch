import { Link } from 'react-router-dom';
import {
  Sofa,
  Home,
  Wrench,
  Warehouse,
  Paintbrush,
  Palette,
  ArrowRight,
} from 'lucide-react';
import { services } from '../data/siteData';

const iconMap = { Sofa, Home, Wrench, Warehouse, Paintbrush, Palette };

export default function Services() {
  // Show only first 6 on homepage
  const displayed = services.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
            What we <span className="text-gold-500">offer</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We provide a wide range of professional painting and finishing services
            to transform your property inside and out.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayed.map((service, index) => {
            const Icon = iconMap[service.icon] || Paintbrush;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-navy-950/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-16 h-16 bg-navy-950/5 group-hover:bg-gold-500 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-navy-950 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gold-500 rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-navy-950 hover:text-gold-600 font-bold text-sm transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
