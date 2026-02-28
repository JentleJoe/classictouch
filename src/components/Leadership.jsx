import { ArrowRight, Award, TrendingUp, Shield, Clock } from 'lucide-react';

const stats = [
  { icon: Award, value: '34', suffix: '+', label: 'Completed Projects' },
  { icon: Clock, value: '97', suffix: '+', label: 'Years Experience' },
  { icon: TrendingUp, value: '62', suffix: '+', label: 'Happy Clients' },
  { icon: Shield, value: '15', suffix: '+', label: 'Active Projects' },
];

export default function Leadership() {
  return (
    <>
      {/* Leadership Section */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-block bg-gold-500/15 text-gold-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                We are leading the market{' '}
                <span className="text-gold-400">successfully</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                With decades of industry expertise, Classic Touch has established itself
                as a trusted leader in professional painting services. Our commitment to
                quality, attention to detail, and customer satisfaction sets us apart
                from the competition.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We combine traditional craftsmanship with modern techniques and premium
                materials to deliver results that exceed expectations every time.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:shadow-gold-500/25 hover:-translate-y-0.5"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop"
                  alt="Professional team"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-3 border-2 border-gold-500/20 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gold-500 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-950/10 rounded-2xl mb-4 group-hover:bg-navy-950/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-navy-950" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-navy-950 mb-1">
                  {stat.value}
                  <span className="text-navy-950/60">{stat.suffix}</span>
                </div>
                <div className="text-sm font-semibold text-navy-950/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
