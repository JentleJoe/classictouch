import {
  PaintBucket,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react';

const aboutLinks = [
  { name: 'Our Story', href: '#about' },
  { name: 'Latest News', href: '#' },
  { name: 'Career', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Pricing', href: '#pricing' },
];

const legalLinks = [
  { name: 'Terms of Service', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Cookie Policy', href: '#' },
  { name: 'Sitemap', href: '#' },
];

const supportLinks = [
  { name: 'Help Center', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'Live Chat', href: '#' },
];

const socials = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <PaintBucket className="w-5 h-5 text-navy-950" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Classic <span className="text-gold-400">Touch</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Transforming spaces with premium painting services since 1998. Your
              trusted partner for all residential and commercial painting needs.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                <span>123 Paint Street, Color City, ST 12345</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span>info@classictouch.com</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-white/5 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              About Us
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Stuff */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Legal Stuff
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Classic Touch. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gold-500 hover:bg-gold-400 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-navy-950" />
          </button>
        </div>
      </div>
    </footer>
  );
}
