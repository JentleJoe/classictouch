import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      {/* CTA Section */}
      <div className="bg-gold-500 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
              Get In Touch
            </h2>
            <p className="text-navy-950/70 mb-8 leading-relaxed max-w-xl mx-auto">
              Ready to transform your space? Subscribe to our newsletter or reach out
              directly for a free consultation and quote.
            </p>

            {/* Email form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm text-navy-950 placeholder-navy-950/40 border border-navy-950/10 focus:outline-none focus:ring-2 focus:ring-navy-950/20 focus:bg-white transition-all text-sm"
              />
              <button className="inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
