import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const contactCards = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'No: 2/1, 1st Cross Street, Sri Ayyappa Nagar, Chinmaya Nagar, Virugambakkam, Chennai – 600 092',
    bgClass: 'bg-royal/10',
    iconClass: 'text-royal',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '044 - 2479 9335\n24791689\n9444026642',
    bgClass: 'bg-gold/10',
    iconClass: 'text-gold',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'marthomaschool@gmail.com',
    bgClass: 'bg-royal/10',
    iconClass: 'text-royal',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-royal font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3">
            Contact Us
          </h2>
          <p className="text-text mt-4 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for inquiries or to schedule a campus visit.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              className="fade-up bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className={`${card.bgClass} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <card.icon className={`w-6 h-6 ${card.iconClass}`} />
              </div>
              <h3 className="font-semibold text-navy mb-2">{card.title}</h3>
              <p className="text-text text-sm whitespace-pre-line">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="fade-up">
          <div className="bg-white rounded-[32px] shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.57733358474!2d80.19330987412185!3d13.062554212879599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266b115555555%3A0x34ebbc5d0d1dbd7b!2sMar%20Thoma%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1783013637532!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Mar Thoma Matriculation Higher Secondary School location map"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="#"
              className="bg-white rounded-full shadow-md px-4 py-3 flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-royal" />
              <span className="text-sm font-medium text-navy">Mar Thoma Matriculation Higher Secondary School</span>
            </a>
            <a
              href="#"
              className="bg-white rounded-full shadow-md px-4 py-3 flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-royal" />
              <span className="text-sm font-medium text-navy">marthomamatrichrsecschool</span>
            </a>
            <a
              href="#"
              className="bg-white rounded-full shadow-md px-4 py-3 flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-royal" />
              <span className="text-sm font-medium text-navy">Mar Thoma Matric.Hr.Sec.School</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
