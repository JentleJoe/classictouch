import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { aboutData } from '../data/siteData';
import aboutImg from '../assets/about-us.jpeg';
import glacetouch8 from '../assets/glacetouch8.jpeg';

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Professional painter working"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden sm:block">
              <img
                src={glacetouch8}
                alt="Colour palette"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-6 -left-4 sm:-left-6 bg-gold-500 text-navy-950 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-bold">{aboutData.yearsExperience}</div>
              <div className="text-xs font-semibold">
                Years of
                <br />
                Experience
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              {aboutData.tagline}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight mb-6">
              {aboutData.heading}
            </h2>
            {aboutData.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-500 leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-3 mb-8 mt-4">
              {aboutData.highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
                  <span className="text-sm font-medium text-navy-950">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
