import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import PrincipalsMessage from './components/PrincipalsMessage';
import Academics from './components/Academics';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import StatsBanner from './components/StatsBanner';
import Admissions from './components/Admissions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with fade-up class
    document.querySelectorAll('.fade-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Re-observe elements after they might have been added dynamically
    const timeout = setTimeout(() => {
      document.querySelectorAll('.fade-up:not(.visible)').forEach((el) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.disconnect();
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(el);
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <PrincipalsMessage />
      <Academics />
      <WhyChooseUs />
      <Facilities />
      <Gallery />
      <StatsBanner />
      <Admissions />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
