import { ArrowRight, Play, Users, Briefcase, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '50+', label: 'Satisfied Customers' },
  { icon: Briefcase, value: '100+', label: 'Projects Completed' },
  { icon: ThumbsUp, value: '98%', label: 'Positive Reviews' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-navy-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative circle */}
      <div className="absolute -right-32 -top-32 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">
                Professional Painting Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Paint your home
              <br />
              like a{' '}
              <span className="text-gold-400 relative">
                dream
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="#f0b429"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              house
            </h1>

            <p className="text-white/60 text-lg max-w-lg mb-8 leading-relaxed">
              Give your space the transformation it deserves with our premium painting
              services. We bring color, life, and elegance to every corner of your home
              with expert craftsmanship.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:shadow-gold-500/25 hover:-translate-y-0.5"
              >
                Explore More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-3 border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                Watch Video
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-500/15 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/50 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in-right hidden lg:block">
            {/* Yellow accent shape behind image */}
            <div className="absolute -right-4 -bottom-4 w-full h-full bg-gold-500/20 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=700&h=850&fit=crop&crop=top"
                alt="Professional painter at work"
                className="w-full h-[550px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -left-8 bottom-16 bg-white rounded-2xl p-4 shadow-2xl animate-scale-in delay-500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6 text-navy-950" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy-950">Top Rated</div>
                  <div className="text-xs text-gray-500">4.9 ★ (2.5k reviews)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 24C1248 24 1344 32 1392 36L1440 40V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
