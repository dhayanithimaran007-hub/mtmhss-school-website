const leaders = [
  {
    name: 'H.G. Dr. Mar Aprem',
    designation: 'President',
    bgColor: 'from-navy to-navy-50',
    image: '/president.jpeg',
  },
  {
    name: 'H.G. Mar Awgin Kuriakose',
    designation: 'Vice President',
    bgColor: 'from-royal to-navy-50',
    image: '/vice%20president.jpg',
  },
  {
    name: 'Fr. Jose K John',
    designation: 'Former Correspondent',
    bgColor: 'from-purple to-navy-50',
    image: '/Former%20correspondent.jpeg',
  },
  {
    name: 'Ms. Susan Jose',
    designation: 'Correspondent',
    bgColor: 'from-teal to-navy-50',
    image: '/corresepondent.jpg',
  },
  {
    name: 'Ms. Regi Agnes Jayarani',
    designation: 'Principal',
    bgColor: 'from-gold/80 to-navy-50',
    image: '/principal.jpeg',
  },
];

export default function Leadership() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-royal font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3">
            Our Leadership
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="fade-up group"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gold/50">
                <div className="relative p-8 flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-44 h-44 rounded-full border-2 border-gold/30" />
                  </div>
                </div>

                <div className="text-center pb-8 px-6">
                  <h3 className="font-playfair text-xl font-bold text-navy mb-1">{leader.name}</h3>
                  <p className="text-gold font-medium">{leader.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
