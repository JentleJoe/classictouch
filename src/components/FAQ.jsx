import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: 'Do you have a physical office?',
    answer:
      'Yes, we have a main office located in downtown along with several satellite offices across the city. You\'re welcome to visit us during business hours for a free consultation.',
  },
  {
    question: 'Do you provide free samples?',
    answer:
      'Absolutely! We provide free color samples and test patches so you can see exactly how the colors look on your walls before committing to the full project.',
  },
  {
    question: 'Do you provide home servicing?',
    answer:
      'Yes, all our services are provided at your location. Our team comes fully equipped with all necessary tools, materials, and protective equipment to complete the job on-site.',
  },
  {
    question: 'Do you have any return policy?',
    answer:
      'We stand behind our work 100%. If you\'re not satisfied with the results, we\'ll redo the work at no additional cost. We also offer a warranty ranging from 1 to 5 years depending on the service package.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope. A single room typically takes 1-2 days, while a full house can take 1-2 weeks. We always provide a detailed timeline before starting any project.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -left-32 top-1/2 w-64 h-64 bg-gold-500/5 rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block bg-gold-500/15 text-gold-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Find frequently asked{' '}
              <span className="text-gold-400">questions</span> here
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Can&apos;t find the answer you&apos;re looking for? Feel free to reach
              out to our friendly team.
            </p>

            {/* FAQ decoration image */}
            <div className="hidden lg:flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="w-14 h-14 bg-gold-500/20 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircleQuestion className="w-7 h-7 text-gold-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Still have questions?</div>
                <div className="text-white/50 text-sm">
                  Contact us at{' '}
                  <a href="mailto:info@classictouch.com" className="text-gold-400 hover:underline">
                    info@classictouch.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-white/10 border border-white/10'
                    : 'bg-white/5 border border-transparent hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span
                    className={`font-semibold transition-colors ${
                      openIndex === index ? 'text-gold-400' : 'text-white'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ml-4 transition-all ${
                      openIndex === index
                        ? 'bg-gold-500 rotate-180'
                        : 'bg-white/10'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 ${
                        openIndex === index ? 'text-navy-950' : 'text-white'
                      }`}
                    />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
