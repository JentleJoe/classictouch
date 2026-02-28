import { useState, useEffect } from 'react';
import { Menu, X, Phone, PaintBucket } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center group-hover:bg-gold-400 transition-colors">
              <PaintBucket className="w-5 h-5 text-navy-950" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Classic <span className="text-gold-400">Touch</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium">+1 (234) 567-890</span>
            </a>
            <a
              href="#contact"
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-gold-500/25 hover:-translate-y-0.5"
            >
              Get A Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[400px] mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-navy-900/95 backdrop-blur-md rounded-xl p-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-3 border-t border-white/10 space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 px-4 py-2 text-white/80"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gold-500 text-navy-950 px-6 py-2.5 rounded-lg text-sm font-bold"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
