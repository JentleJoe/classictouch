import {
  Sofa,
  Home,
  Wrench,
  Warehouse,
  Hammer,
  Fence,
} from 'lucide-react';

const services = [
  {
    icon: Sofa,
    title: 'Interior',
    description: 'Transform your indoor spaces with premium interior painting that reflects your style.',
  },
  {
    icon: Home,
    title: 'Exterior',
    description: 'Protect and beautify your home exterior with durable, weather-resistant paint finishes.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Keep your property looking fresh with our professional maintenance painting services.',
  },
  {
    icon: Warehouse,
    title: 'Roofs & Gutters',
    description: 'Extend the life of your roof and gutters with specialized protective coatings.',
  },
  {
    icon: Hammer,
    title: 'Carpentry',
    description: 'Expert carpentry repair and painting for trim, molding, and wooden structures.',
  },
  {
    icon: Fence,
    title: 'Fences',
    description: 'Give your fences a stunning new look with our quality staining and painting services.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
            Our Top <span className="text-gold-500">Classes</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We provide a wide range of professional painting and renovation services
            to make your home look brand new.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-navy-950/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-navy-950/5 group-hover:bg-gold-500 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-navy-950 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gold-500 rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
