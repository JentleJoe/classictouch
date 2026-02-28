import { ClipboardList, Palette, PaintBucket, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Book An Appointment',
    description: 'Schedule a free consultation at your convenience. We come to you.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Choose Your Colors',
    description: 'Work with our experts to select the perfect colors for your space.',
  },
  {
    icon: PaintBucket,
    number: '03',
    title: 'We Start Painting',
    description: 'Our professional team begins the transformation with precision.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Enjoy The Results',
    description: 'Sit back and enjoy your beautifully refreshed living spaces.',
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
            Simple easy steps to{' '}
            <span className="text-gold-500">get started</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Getting your home painted has never been easier. Follow these four simple
            steps and let us handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 border-t-2 border-dashed border-gold-500/30" />
              )}

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                {/* Number */}
                <div className="text-6xl font-bold text-gold-500/10 absolute top-4 right-6 group-hover:text-gold-500/20 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-gold-500/25">
                  <step.icon className="w-8 h-8 text-navy-950" />
                </div>

                <h3 className="text-lg font-bold text-navy-950 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
