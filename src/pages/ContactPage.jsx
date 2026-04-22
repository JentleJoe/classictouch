import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { contactInfo, socialLinks } from '../data/siteData';
import WhatsAppIcon from '../components/Common/WhatsAppIcon';
import TikTokIcon from '../components/Common/TikTokIcon';
import PageHeader from '../components/Common/PageHeader';
import FAQ from '../components/FAQ';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Ready to transform your space in Benin City, Lagos, or anywhere in Nigeria? Get in touch for a free consultation and quotation."
      />

      {/* Contact Actions */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Reach Us Directly
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-5">
              Choose your preferred <span className="text-gold-500">contact method</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We reply fastest on WhatsApp, and you can also call or email us directly for consultations and quotations in Benin City, Lagos, and across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#f4fbf6] border border-[#c9efd5] rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-[#25D366]/15 rounded-xl flex items-center justify-center mb-5">
                <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">Chat on WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-4">Quick responses for project questions and quote requests.</p>
              <p className="text-[#1da851] font-semibold text-sm">{contactInfo.whatsapp}</p>
              <p className="text-[#1da851] text-xs font-bold mt-2 uppercase tracking-wider">Open Chat</p>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-gold-500/15 rounded-xl flex items-center justify-center mb-5">
                <Phone className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-4">Speak directly with us about your space and timeline.</p>
              <p className="text-navy-950 font-semibold text-sm">{contactInfo.phone}</p>
              <p className="text-gold-600 text-xs font-bold mt-2 uppercase tracking-wider">Tap To Call</p>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-navy-950/10 rounded-xl flex items-center justify-center mb-5">
                <Mail className="w-7 h-7 text-navy-950" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-2">Send an Email</h3>
              <p className="text-gray-600 text-sm mb-4">Share project details and we'll respond with next steps.</p>
              <p className="text-navy-950 font-semibold text-sm wrap-break-word">{contactInfo.email}</p>
              <p className="text-navy-600 text-xs font-bold mt-2 uppercase tracking-wider">Compose Email</p>
            </a>
          </div>

          <div className="bg-linear-to-r from-navy-950 to-navy-900 rounded-2xl p-6 sm:p-8 mb-14 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/60 mb-2">Social Media</p>
                <h3 className="text-xl sm:text-2xl font-bold">See our latest projects and finishes</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={socialLinks.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-semibold">Instagram</span>
                </a>

                <a
                  href={socialLinks.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                >
                  <TikTokIcon className="w-5 h-5" />
                  <span className="text-sm font-semibold">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-navy-950 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-gold-500/10 rounded-full" />
            <div className="grid md:grid-cols-2 gap-8 relative">
              <div>
                <h3 className="text-2xl font-bold mb-3">Business Information</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Available for residential and commercial projects in Benin City, Lagos, and across Nigeria. Reach out through any channel above and we will guide you from enquiry to execution.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <MapPin className="w-5 h-5 text-gold-400 mb-2" />
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Coverage</p>
                  <p className="text-sm font-medium">{contactInfo.address}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <Clock className="w-5 h-5 text-gold-400 mb-2" />
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Working Hours</p>
                  <p className="text-sm font-medium">{contactInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
