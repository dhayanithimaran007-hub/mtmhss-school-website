const facilities = [
  { name: 'Science Lab', color: 'from-royal to-royal-700', image: '/bio%20lab.jpg' },
  { name: 'Computer Lab', color: 'from-navy to-navy-50', image: '/Computer%20lab.jpg' },
  { name: 'Library', color: 'from-gold/80 to-gold-500', image: '/libblock.jpg' },
  { name: 'Sports Ground', color: 'from-green-600 to-green-800', image: '/sports%201.jpg' },
  { name: 'Auditorium', color: 'from-purple-600 to-purple-800', image: '/celebration.jpeg' },
  { name: 'Kindergarten', color: 'from-pink-500 to-pink-700', image: '/kindergarden.jpeg' },
  { name: 'Digital ID System', color: 'from-cyan-500 to-cyan-700', image: '/Digital%20id%20card.jpeg' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-royal font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3">
            Our Facilities
          </h2>
          <p className="text-text mt-4 max-w-2xl mx-auto">
            State-of-the-art infrastructure supporting modern education
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="fade-up group"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-20`} />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">{facility.name}</span>
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">{facility.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
