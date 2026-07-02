const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-50 to-navy flex items-center justify-center border-2 border-gold">
                <span className="font-playfair font-bold text-gold text-sm">MTMHSS</span>
              </div>
              <div>
                <span className="font-playfair font-semibold text-white text-lg block">Mar Thoma MHSS</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Recognized by Govt. of Tamil Nadu - A premier institution committed to academic excellence and holistic development since 1974.
            </p>
            <div className="mt-6">
              <p className="text-gold text-sm font-semibold">State Board Affiliated</p>
              <p className="text-white/50 text-xs">LKG to Grade 12 · Co-Education</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="text-white/60">
                No: 2/1, 1st Cross Street,<br />
                Sri Ayyappa Nagar, Chinmaya Nagar,<br />
                Virugambakkam, Chennai – 600 092
              </p>
              <p className="text-white/60">
                <span className="text-gold font-medium">Phone:</span><br />
                044 - 2479 9335, 24791689
              </p>
              <p className="text-white/60">
                <span className="text-gold font-medium">Email:</span><br />
                marthomaschool@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; 2025 Mar Thoma Matriculation Higher Secondary School. All rights reserved.</p>
            <p className="text-white/40">Designed & Developed by Dhayanithimaran K</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
