import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Briefcase, ThumbsUp } from 'lucide-react';
import { heroData } from '../data/siteData';
import heroImg from '../assets/heroImg.jpeg';

const statIcons = [Users, Briefcase, ThumbsUp];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-950 overflow-hidden">
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
      {/* <div className="absolute -right-32 -top-32 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-24 lg:pt-40 lg:pb-32">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium tracking-wide">
                {heroData.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              {heroData.heading.line1}
              <br />
              {heroData.heading.line2}{' '}
              <span className="text-gold-400 relative">
                {heroData.heading.highlight}
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
              </span>
            </h1>

            <p className="text-white/60 text-lg max-w-lg mb-4 leading-relaxed">
              {heroData.description}
            </p>

            {/* Mobile image (shows above CTAs on small screens) */}
            <div className="block lg:hidden mb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={heroImg}
                  alt="Professional painter at work"
                  className="w-full h-[240px] sm:h-[320px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent rounded-2xl" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/services"
                className="group inline-flex justify-center items-center w-full sm:w-auto gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-4 rounded-xl text-base font-bold transition-all hover:shadow-xl hover:shadow-gold-500/25 hover:-translate-y-0.5"
              >
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 lg:gap-12">
              {heroData.stats.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-500/15 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-white/50 font-medium whitespace-nowrap">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in-right hidden lg:block w-full lg:w-auto">
            {/* Yellow accent shape behind image */}
            <div className="absolute -right-2 -bottom-2 sm:-right-4 sm:-bottom-4 w-full h-full bg-gold-500/20 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Professional painter at work"
                className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 lg:from-navy-950/40 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -left-4 sm:-left-8 bottom-6 sm:bottom-16 bg-white rounded-2xl p-3 sm:p-4 shadow-2xl animate-scale-in delay-500 flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-500 rounded-xl flex items-center justify-center shrink-0">
                <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 text-navy-950" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-navy-950">Quality Service</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Trusted across Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full block">
          <path
            d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 24C1248 24 1344 32 1392 36L1440 40V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
