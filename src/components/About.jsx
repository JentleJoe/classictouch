import { CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  'Licensed and insured professionals',
  'Premium quality paints and materials',
  'On-time project completion guaranteed',
  'Free color consultation included',
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=700&fit=crop"
                alt="Professional painter working"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Accent image */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop"
                alt="Color palette"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute top-6 -left-4 sm:-left-6 bg-gold-500 text-navy-950 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-xs font-semibold">Years of<br />Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight mb-6">
              We paint your{' '}
              <span className="text-gold-500">dream</span> on your wall
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              At Classic Touch, we believe every wall tells a story. With over two decades
              of experience, our team of skilled professionals brings artistry, precision,
              and passion to every project — transforming ordinary spaces into
              extraordinary ones.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From residential interiors to commercial exteriors, we use only premium
              materials and proven techniques to deliver results that exceed expectations
              and stand the test of time.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
                  <span className="text-sm font-medium text-navy-950">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-800 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
