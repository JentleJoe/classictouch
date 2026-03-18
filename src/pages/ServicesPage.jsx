import { Link } from 'react-router-dom';
import {
  Sofa,
  Home,
  Wrench,
  Palette,
  Warehouse,
  Paintbrush,
  SprayCan,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { services, additionalServices, serviceAreas, processSteps, contactInfo } from '../data/siteData';
import { ClipboardList, PaintBucket, CheckCircle } from 'lucide-react';
import PageHeader from '../components/Common/PageHeader';
import FAQ from '../components/FAQ';
import WhatsAppIcon from '../components/Common/WhatsAppIcon';

const iconMap = {
  Sofa,
  Home,
  Wrench,
  Palette,
  Warehouse,
  Paintbrush,
  SprayCan,
};

const processIcons = [ClipboardList, Palette, PaintBucket, CheckCircle];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Professional painting and finishing services across Nigeria. We handle projects of every scale with precision and care."
      />

      {/* All Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
              Our <span className="text-gold-500">services</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              From interior painting to full exterior finishing, we provide a comprehensive range of services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Paintbrush;
              return (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-navy-950/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-navy-950/5 group-hover:bg-gold-500 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-navy-950 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed italic">
                    {service.fullDescription}
                  </p>
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gold-500 rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gold-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                More Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight mb-6">
                Additional services we{' '}
                <span className="text-gold-500">offer</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Beyond our core painting services, Glacetouch offers specialised solutions to meet all your property finishing needs.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=350&fit=crop"
                  alt="Paint consultation"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              {additionalServices.map((service, index) => {
                const Icon = iconMap[service.icon] || Paintbrush;
                return (
                  <div
                    key={index}
                    className="group bg-white hover:bg-navy-950 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:shadow-xl"
                  >
                    <div className="flex gap-5">
                      <div className="w-14 h-14 bg-gold-500/10 group-hover:bg-gold-500/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-6 h-6 text-gold-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-navy-950 group-hover:text-white mb-2 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
              How we <span className="text-gold-500">work</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our streamlined process ensures a smooth, stress-free experience from initial enquiry to project handover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => {
              const Icon = processIcons[index] || CheckCircle;
              return (
                <div key={index} className="relative group">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 border-t-2 border-dashed border-gold-500/30" />
                  )}
                  <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                    <div className="text-6xl font-bold text-gold-500/10 absolute top-4 right-6 group-hover:text-gold-500/20 transition-colors">
                      {step.number}
                    </div>
                    <div className="w-20 h-20 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-gold-500/25">
                      <Icon className="w-8 h-8 text-navy-950" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-gold-500/15 text-gold-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Where we <span className="text-gold-400">operate</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Glacetouch serves clients nationwide across all states in Nigeria. Contact us to confirm availability and timelines for your specific location.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-6 py-3 hover:bg-white/10 transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="text-white font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="bg-gold-500 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
            Need a custom quote?
          </h2>
          <p className="text-navy-950/70 mb-8 leading-relaxed">
            Every project is unique. Reach out and let us provide a tailored quotation for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Free Quote
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
