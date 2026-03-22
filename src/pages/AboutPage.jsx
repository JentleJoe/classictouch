import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Target, Eye, Award, Clock, TrendingUp, Shield } from 'lucide-react';
import { aboutData, whyChooseUs, companyStats, teamMembers, contactInfo } from '../data/siteData';
import PageHeader from '../components/Common/PageHeader';
import WhatsAppIcon from '../components/Common/WhatsAppIcon';
import aboutImg from '../assets/about-us.jpeg';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Get to know Glacetouch — our story, our team, and our commitment to excellence."
      />

      {/* About Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImg}
                  alt="Glacetouch team at work"
                  className="w-full h-[500px] object-cover"
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

            {/* Content Side */}
            <div>
              <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight mb-6">
                {aboutData.heading}
              </h2>
              {aboutData.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-500 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {aboutData.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
                    <span className="text-sm font-medium text-navy-950">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy-950 mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed italic">
                {aboutData.mission}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-navy-950/5 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-navy-950" />
              </div>
              <h3 className="text-2xl font-bold text-navy-950 mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed italic">
                {aboutData.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-gold-500/15 text-gold-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              What sets us <span className="text-gold-400">apart</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              We combine engineering-level surface preparation, bespoke decorative detailing, and disciplined project management to deliver finishes that look premium and perform over time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar and Team sections removed as requested */}

      {/* CTA */}
      <section className="bg-gold-500 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Ready to work with us?
          </h2>
          <p className="text-navy-950/70 mb-8 leading-relaxed">
            Get in touch today for a free consultation and quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Us
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
