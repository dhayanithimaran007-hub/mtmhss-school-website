import { Monitor, GraduationCap, Trophy, BookOpen, Shield, CreditCard } from 'lucide-react';

const features = [
  { icon: Monitor, title: 'Smart Classrooms', desc: 'Digital learning technology' },
  { icon: GraduationCap, title: 'Experienced Faculty', desc: 'Dedicated educators' },
  { icon: Trophy, title: 'Sports & Extracurriculars', desc: 'Holistic development' },
  { icon: BookOpen, title: 'Digital Library', desc: 'Modern resources' },
  { icon: Shield, title: 'Safe Campus', desc: 'Secure environment' },
  { icon: CreditCard, title: 'Digital ID Card System', desc: 'Modern tracking' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy-50 to-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            The MTMHSS Advantage
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed text-lg">
            Modern facilities combined with traditional values create the perfect environment for learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="fade-up group"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-gold/50 hover:-translate-y-1 shadow-2xl shadow-navy/10">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
