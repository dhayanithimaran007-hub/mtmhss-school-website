import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '1200+', label: 'Students' },
  { value: '50+', label: 'Faculty' },
  { value: 'Since 1974', label: 'Established' },
  { value: 'LKG to Grade 12', label: 'Grades' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-50 to-navy">
        <img
          src="/hero-building.jpg.jpg"
          alt="School building and campus view"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-royal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="fade-up">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-gold text-sm font-medium mb-6 border border-gold/30">
            Recognized by Govt. of Tamil Nadu
          </span>
        </div>

        <h1 className="fade-up font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Shaping Tomorrow's
          <span className="block text-gold">Leaders</span>
        </h1>

        <p className="fade-up text-xl sm:text-2xl text-white/80 mb-10 font-light">
          Excellence in Education Since 1974 · Chennai, Tamil Nadu
        </p>

        <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#about"
            className="px-8 py-4 bg-royal text-white font-semibold rounded-full hover:bg-royal-700 transition-all shadow-lg hover:shadow-royal/30 hover:scale-105"
          >
            Explore Our School
          </a>
          <a
            href="#admissions"
            className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-navy transition-all"
          >
            Admissions 2026-2027
          </a>
        </div>

        <div className="fade-up mt-6 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all hover:scale-105 hover:border-gold/50"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="inline-block animate-bounce-slow">
          <ChevronDown className="w-8 h-8 text-gold" />
        </a>
      </div>

      {/* Stats Cards */}
      <div className="absolute bottom-6 left-0 right-0 z-10 hidden">
        <div className="max-w-7xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="fade-up bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all hover:scale-105 hover:border-gold/50"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
