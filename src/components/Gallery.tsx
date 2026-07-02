import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    label: 'Annual Day',
    color: 'from-royal to-royal-700',
    src: '/Annual%20day%20celeb.jpg',
  },
  {
    label: 'Sports Meet',
    color: 'from-gold/80 to-gold-500',
    src: '/sports%201.jpg',
  },
  {
    label: 'Science Exhibition',
    color: 'from-green-600 to-green-800',
    src: '/chem%20lab.jpg',
  },
  {
    label: 'Cultural Event',
    color: 'from-purple-600 to-purple-800',
    src: '/Extracurricular%202.jpeg',
  },
  {
    label: 'Classroom',
    color: 'from-navy to-navy-50',
    src: '/middle%20school.jpeg',
  },
  {
    label: 'Lab Session',
    color: 'from-pink-500 to-pink-700',
    src: '/bio%20lab.jpg',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const openLightbox = (idx: number) => setLightbox({ open: true, index: idx });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const prevImage = () => setLightbox({ ...lightbox, index: (lightbox.index - 1 + galleryImages.length) % galleryImages.length });
  const nextImage = () => setLightbox({ ...lightbox, index: (lightbox.index + 1) % galleryImages.length });

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-royal font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3">
            Campus Life
          </h2>
          <p className="text-text mt-4 max-w-2xl mx-auto">
            Moments that define our vibrant school community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="fade-up cursor-pointer"
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onClick={() => openLightbox(idx)}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img
                  src={image.src}
                  alt={image.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-20`} />
                {/* Hover effect */}
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">{image.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gold transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gold transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="text-center">
            <div className="w-[70vw] h-[50vh] max-w-4xl rounded-xl overflow-hidden bg-gradient-to-br">
              <img
                src={galleryImages[lightbox.index].src}
                alt={galleryImages[lightbox.index].label}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-white font-semibold text-xl">{galleryImages[lightbox.index].label}</p>
          </div>
        </div>
      )}
    </section>
  );
}
