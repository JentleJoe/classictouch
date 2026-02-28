import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=top',
    name: 'David Mitchell',
    role: 'Founder & CEO',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=top',
    name: 'Jack Matthews',
    role: 'Lead Painter',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=top',
    name: 'Paul Anderson',
    role: 'Project Manager',
    socials: { linkedin: '#', twitter: '#' },
  },
];

export default function Team() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-gold-500/10 text-gold-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
            Meet the <span className="text-gold-500">team</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Our talented team of professionals is dedicated to delivering exceptional
            results on every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Social overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a
                      href={member.socials.linkedin}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-navy-950">{member.name}</h3>
                <p className="text-gold-500 text-sm font-medium">{member.role}</p>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
