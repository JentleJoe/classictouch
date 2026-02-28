import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    title: 'Loving the color',
    text: 'Classic Touch completely transformed our living room. The attention to detail was incredible and the team was professional from start to finish. Highly recommended!',
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    title: 'Loving the color',
    text: 'We hired Classic Touch for our office renovation and the results exceeded our expectations. The color consultation was fantastic and the finish is flawless.',
  },
  {
    name: 'Emily Thompson',
    role: 'Interior Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    title: 'Loving the color',
    text: 'As a designer, I have high standards. Classic Touch met every single one. Their craftsmen are truly skilled and the premium paint quality really shows.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
            What Our Valuable Customers{' '}
            <span className="text-gold-500">Say</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers
            have to say about their experience.
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

              {/* Title */}
              <h4 className="text-lg font-bold text-navy-950 mb-3">
                {testimonial.title}
              </h4>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-500/20"
                />
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
