import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Mar Thoma School has been an incredible blessing for our family. The teachers genuinely care about each student's progress, and the holistic approach to education has helped my child grow not just academically but also as a confident individual.",
    name: "Mrs. Lakshmi Rajan",
    relation: "Parent of Grade 8 student",
    image: '/Abt%20schl%201.jpg',
  },
  {
    text: "The school's emphasis on both academics and extracurricular activities is remarkable. My daughter has developed a love for science and sports since joining. The faculty's dedication to student welfare is truly commendable.",
    name: "Mr. Karthik Subramaniam",
    relation: "Parent of Grade 5 student",
    image: '/abt%20schl%202.jpg',
  },
  {
    text: "As an alumnus, I can confidently say that Mar Thoma shaped who I am today. The values instilled here—discipline, respect, and perseverance—have stayed with me throughout my career. Proud to have been a part of MTMHSS.",
    name: "Dr. Priya Venkatesh",
    relation: "Alumni, Batch of 2015",
    image: '/abt%20schl%203.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-royal font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3">
            What Parents Say
          </h2>
        </div>

        <div
          className="fade-up relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-light rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-20 h-20 text-gold" />
            </div>

            {/* Testimonial content */}
            <div className="relative z-10">
              <blockquote className="text-center">
                <div className="mb-6 flex justify-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="h-20 w-20 rounded-full object-cover border-4 border-gold/30 shadow-md"
                  />
                </div>
                <p className="text-text text-lg md:text-xl leading-relaxed italic mb-8 transition-opacity duration-500">
                  "{testimonials[currentIndex].text}"
                </p>
                <footer className="font-playfair">
                  <cite className="not-italic">
                    <span className="block font-bold text-navy text-lg">{testimonials[currentIndex].name}</span>
                    <span className="text-gold font-medium">{testimonials[currentIndex].relation}</span>
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-gold w-8' : 'bg-gray-300 hover:bg-gold/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
