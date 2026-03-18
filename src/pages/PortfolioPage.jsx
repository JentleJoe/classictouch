import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Camera } from 'lucide-react';
import { portfolioItems, contactInfo } from '../data/siteData';
import PageHeader from '../components/Common/PageHeader';
import WhatsAppIcon from '../components/Common/WhatsAppIcon';

const categories = ['All', ...new Set(portfolioItems.map((p) => p.category))];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="Browse our completed projects and see the Glacetouch difference for yourself."
      />

      {/* Portfolio Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-navy-950 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-xs mt-1">{project.location}</p>
                    </div>
                    <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-400">
                      <ArrowUpRight className="w-5 h-5 text-navy-950" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Placeholder */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
              Before & <span className="text-gold-500">After</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              See the dramatic difference our work makes. Real before-and-after photos from actual projects.
            </p>
          </div>

          {/* Placeholder cards for before/after */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((n) => (
              <div key={n} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="bg-gray-100 h-56 flex flex-col items-center justify-center">
                    <Camera className="w-8 h-8 text-gray-300 mb-2" />
                    <span className="text-xs text-gray-400 font-medium">Before Photo</span>
                  </div>
                  <div className="bg-gray-100 h-56 flex flex-col items-center justify-center">
                    <Camera className="w-8 h-8 text-gold-400 mb-2" />
                    <span className="text-xs text-gray-400 font-medium">After Photo</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-navy-950">[Project Name {n}]</h4>
                  <p className="text-gray-400 text-sm">
                    [Before & after photos to be provided by client]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
