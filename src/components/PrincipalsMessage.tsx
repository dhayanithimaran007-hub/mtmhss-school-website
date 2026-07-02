import { Quote } from 'lucide-react';

export default function PrincipalsMessage() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up text-center mb-12">
          <span className="text-royal font-semibold text-sm uppercase tracking-wider">Message</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3">
            From the Principal's Desk
          </h2>
        </div>

        <div className="fade-up">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-royal/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              {/* Quote icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-gold" />
                </div>
              </div>

              {/* Principal photo */}
              <div className="flex justify-center mb-8">
                <img
                  src="/principal.jpeg"
                  alt="Ms. Regi Agnes Jayarani"
                  className="w-28 h-28 rounded-full object-cover ring-4 ring-gold/30 shadow-lg"
                />
              </div>

              {/* Quote */}
              <blockquote className="text-center">
                <p className="text-text text-lg md:text-xl leading-relaxed italic mb-8">
                  "Our goal is to nurture every child with values, knowledge, and the courage to face life's challenges with confidence and integrity."
                </p>
                <footer className="font-playfair">
                  <cite className="not-italic">
                    <span className="block font-bold text-navy text-lg">Ms. Regi Agnes Jayarani</span>
                    <span className="text-gold font-medium">Principal</span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
