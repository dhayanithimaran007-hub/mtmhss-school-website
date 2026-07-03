const extracurricularActivities = [
  {
    name: 'School Band',
    image: '/school-band.jpg',
  },
  {
    name: 'Table Tennis',
    image: '/table-tennis.jpg',
  },
  {
    name: 'JRC',
    image: '/jrc.jpg',
  },
  {
    name: 'Scouts and Guides',
    image: '/scouts-and-guides.jpg',
  },
];

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-royal font-semibold text-sm uppercase tracking-wider">Beyond the Classroom</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3">
            Extracurricular Activities
          </h2>
          <p className="text-text mt-4 max-w-2xl mx-auto">
            Encouraging leadership, teamwork, and creativity through vibrant student programs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extracurricularActivities.map((activity, idx) => (
            <div
              key={activity.name}
              className="fade-up relative overflow-hidden rounded-xl"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg px-4 text-center">{activity.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
