import { Paintbrush, SprayCan, Palette, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Wall Texturing',
    description:
      'Add dimension and character to your walls with our professional texturing services, from smooth finishes to bold patterns.',
  },
  {
    icon: SprayCan,
    title: 'Spray Painting',
    description:
      'Achieve a flawless, even finish on large surfaces and complex structures with our precision spray painting techniques.',
  },
  {
    icon: Palette,
    title: 'Color Consulting',
    description:
      'Our expert color consultants help you choose the perfect palette to complement your space, lighting, and personal style.',
  },
];

export default function OtherServices() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Yellow accent bar on left */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gold-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              More Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight mb-6">
              Other services that might{' '}
              <span className="text-gold-500">interest</span> you
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Beyond our core painting services, Classic Touch offers a range of
              specialized solutions to meet all your property improvement needs. Each
              service is delivered with the same commitment to excellence.
            </p>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=350&fit=crop"
                alt="Handshake with client"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right - Service cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 hover:bg-navy-950 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:shadow-xl"
              >
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-gold-500/10 group-hover:bg-gold-500/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                    <service.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy-950 group-hover:text-white mb-2 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-gold-500 text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
