import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Home', 'About', 'Academics', 'Facilities', 'Gallery', 'Admissions', 'Contact'];

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
      role="navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold shadow-lg flex items-center justify-center">
              <img src="/School logo.jpg" alt="School Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <span className="font-playfair font-semibold text-white text-lg">Mar Thoma MHSS</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/90 hover:text-gold transition-all duration-200 font-medium tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#admissions"
              className="px-6 py-2.5 bg-gold text-navy font-semibold rounded-full hover:bg-gold-400 transition-all duration-200 shadow-lg hover:shadow-gold/30"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/90 hover:text-gold transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#admissions"
                className="block w-full text-center px-6 py-3 bg-gold text-navy font-semibold rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
