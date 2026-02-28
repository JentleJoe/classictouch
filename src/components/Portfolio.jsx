import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
    title: 'Grand Villa',
    category: 'Exterior Painting',
  },
  {
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    title: 'Luxury Villa',
    category: 'Interior Design',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    title: 'Luxury Villa',
    category: 'Complete Renovation',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    title: 'Modern Home',
    category: 'Exterior Painting',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
    title: 'Ocean View',
    category: 'Interior Painting',
  },
  {
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop',
    title: 'Garden Estate',
    category: 'Full Renovation',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-gold-500/15 text-gold-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our works that will{' '}
            <span className="text-gold-400">amaze</span> you
          </h2>
          <p className="text-white/50 leading-relaxed">
            Take a look at some of our completed projects that showcase our quality
            and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
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
  );
}
