import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 10,
    period: 'mo',
    description: 'Perfect for small rooms and touch-ups',
    featured: false,
    features: [
      'Single room painting',
      'Basic color consultation',
      'Standard paint quality',
      'Free touch-up within 7 days',
      '1 year warranty',
    ],
  },
  {
    name: 'Standard',
    price: 20,
    period: 'mo',
    description: 'Our most popular comprehensive package',
    featured: true,
    features: [
      'Up to 3 rooms painting',
      'Premium color consultation',
      'High-quality paint brands',
      'Free touch-up within 30 days',
      'Furniture protection included',
      '3 year warranty',
    ],
  },
  {
    name: 'Premium',
    price: 40,
    period: 'mo',
    description: 'Complete transformation for your entire home',
    featured: false,
    features: [
      'Unlimited room painting',
      'Expert color design service',
      'Premium imported paints',
      'Free touch-up within 90 days',
      'Full furniture protection',
      'Priority scheduling',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Our Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
            We offer the best{' '}
            <span className="text-gold-500">pricing</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Choose the plan that fits your needs. All plans include professional
            service and quality materials.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? 'bg-navy-950 text-white shadow-2xl shadow-navy-950/30 scale-105 z-10'
                  : 'bg-white border border-gray-200 hover:shadow-xl'
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gold-500 text-navy-950 px-4 py-1.5 rounded-full text-xs font-bold">
                    <Star className="w-3 h-3 fill-navy-950" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-1 ${
                    plan.featured ? 'text-white' : 'text-navy-950'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.featured ? 'text-white/60' : 'text-gray-400'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span
                    className={`text-sm font-medium ${
                      plan.featured ? 'text-white/60' : 'text-gray-400'
                    }`}
                  >
                    $
                  </span>
                  <span
                    className={`text-5xl font-bold leading-none ${
                      plan.featured ? 'text-white' : 'text-navy-950'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-medium pb-1 ${
                      plan.featured ? 'text-white/60' : 'text-gray-400'
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.featured ? 'bg-gold-500/20' : 'bg-gold-500/10'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.featured ? 'text-gold-400' : 'text-gold-500'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.featured ? 'text-white/80' : 'text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 cursor-pointer ${
                  plan.featured
                    ? 'bg-gold-500 hover:bg-gold-400 text-navy-950 hover:shadow-lg hover:shadow-gold-500/25'
                    : 'bg-navy-950 hover:bg-navy-800 text-white hover:shadow-lg'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
