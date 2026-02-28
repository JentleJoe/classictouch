import { Star, Quote, User } from 'lucide-react';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
            What our clients{' '}
            <span className="text-gold-500">say</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Real feedback from our valued customers. Testimonials will be updated once client reviews are received.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-gold-500/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-500/20"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-navy-950/5 flex items-center justify-center ring-2 ring-gold-500/20">
                    <User className="w-5 h-5 text-navy-950/30" />
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold text-navy-950">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
