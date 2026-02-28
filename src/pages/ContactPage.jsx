import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../data/siteData';
import WhatsAppIcon from '../components/Common/WhatsAppIcon';
import PageHeader from '../components/Common/PageHeader';
import FAQ from '../components/FAQ';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Ready to transform your space? Get in touch for a free consultation and quotation."
      />

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 mb-6">
                Get in touch
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you need a quote, have questions, or want to discuss your project — we&apos;re here to help. Reach out through any of the channels below.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">Call Us</h4>
                    <p className="text-gray-500 text-sm">{contactInfo.phone}</p>
                  </div>
                </div>

                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-green-50 group-hover:bg-green-100 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">WhatsApp</h4>
                    <p className="text-gray-500 group-hover:text-green-600 text-sm transition-colors">{contactInfo.whatsapp}</p>
                    <p className="text-green-600 text-xs font-medium mt-0.5">Tap to chat &rarr;</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">Email</h4>
                    <p className="text-gray-500 text-sm">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">Office Address</h4>
                    <p className="text-gray-500 text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">Working Hours</h4>
                    <p className="text-gray-500 text-sm">{contactInfo.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <h3 className="text-xl font-bold text-navy-950 mb-6">
                  Request a Free Quote
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: Hook up form submission
                    alert('Form submission will be configured once contact details are confirmed.');
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy-950 mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy-950 mb-1.5"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+234..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-950 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-navy-950 mb-1.5"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="interior">Interior Painting</option>
                      <option value="exterior">Exterior Painting</option>
                      <option value="screeding">Wall Screeding & POP</option>
                      <option value="wallpaper">Wallpaper Installation</option>
                      <option value="roof">Roof Coating & Painting</option>
                      <option value="consultation">Colour Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-navy-950 mb-1.5"
                    >
                      Property Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="City, Area (e.g. Lagos, Lekki)"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-950 mb-1.5"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Describe your project — number of rooms, type of work, preferred timeline, etc."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-gray-200 rounded-2xl h-72 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 text-sm font-medium">
                Map embed will be added once office address is confirmed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
