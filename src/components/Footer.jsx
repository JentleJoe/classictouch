import { Link } from 'react-router-dom';
import {
  PaintBucket,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from 'lucide-react';
import { contactInfo, socialLinks } from '../data/siteData';
import WhatsAppIcon from './Common/WhatsAppIcon';
import TikTokIcon from './Common/TikTokIcon';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'Interior Painting', path: '/services' },
  { name: 'Exterior Painting', path: '/services' },
  { name: 'Wall Screeding & POP', path: '/services' },
  { name: 'Wallpaper Installation', path: '/services' },
  { name: 'Colour Consultation', path: '/services' },
];

const legalLinks = [
  { name: 'Terms of Service', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const socials = [
  {
    icon: Instagram,
    href: socialLinks.instagram.url,
    label: 'Instagram',
    handle: socialLinks.instagram.handle,
    bgClass: 'bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#515bd4]',
    iconClass: 'text-white',
    ringClass: '',
  },
  {
    icon: TikTokIcon,
    href: socialLinks.tiktok.url,
    label: 'TikTok',
    handle: socialLinks.tiktok.handle,
    bgClass: 'bg-black',
    iconClass: 'text-white',
    ringClass: 'shadow-[0_0_0_2px_#25F4EE,0_0_0_4px_#FE2C55]',
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <PaintBucket className="w-5 h-5 text-navy-950" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                <span className="text-gold-400">Glace</span>touch
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Based in Benin City and Lagos, we deliver engineered wall treatments, decorative finishes, and professional painting services across Nigeria — designed to inspire and built to endure.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{contactInfo.phone}</span>
              </div>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#25D366] text-sm transition-colors group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {contactInfo.whatsapp}</span>
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{contactInfo.email}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5 ${social.bgClass} ${social.ringClass}`}
                  title={social.label}
                >
                  <social.icon className={`w-4 h-4 ${social.iconClass}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">
              Legal
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
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left text-white/40 text-xs space-y-1">
            <p>&copy; {new Date().getFullYear()} Glacetouch. All Rights Reserved.</p>
            <p>
              Built by{' '}
              <a
                href="https://joshuaoseghale.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors"
              >
                Joshua Oseghale
              </a>
            </p>
          </div>
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
