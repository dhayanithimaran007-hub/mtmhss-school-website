const academicSections = [
  {
    title: 'Primary School',
    grades: 'LKG – V',
    subjects: ['English', 'Tamil', 'Maths', 'Science', 'Social Studies'],
    color: 'from-royal to-royal-700',
  },
  {
    title: 'Middle School',
    grades: 'VI – X',
    subjects: ['English', 'Tamil', 'Maths', 'Science', 'Social Studies'],
    color: 'from-navy to-navy-50',
  },
  {
    title: 'Senior School',
    grades: 'XI – XII',
    subjects: ['Higher Secondary Streams'],
    groups: [
      { name: 'Group 1', subjects: 'Maths, Physics, Chemistry, Computer Science' },
      { name: 'Group 2', subjects: 'Maths, Physics, Chemistry, Biology' },
      { name: 'Group 3', subjects: 'Economics, Commerce, Accountancy, Computer Application' },
      { name: 'Group 4', subjects: 'Economics, Commerce, Accountancy, Business Maths' },
    ],
    color: 'from-gold/80 to-gold',
    isSenior: true,
  },
];

export default function Academics() {
  return (
    <section id="academics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-royal font-semibold text-sm uppercase tracking-wider">Curriculum</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3">
            Academics
          </h2>
          <p className="text-text mt-4 max-w-2xl mx-auto">
            Comprehensive education from kindergarten to higher secondary, aligned with Tamil Nadu State Board curriculum
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {academicSections.map((section, idx) => (
            <div
              key={idx}
              className="fade-up group"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="h-full bg-white rounded-2xl border-2 border-gray-100 hover:border-royal p-6 transition-all duration-300 hover:shadow-xl hover:shadow-royal/10 hover:-translate-y-1">
                {/* Header */}
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${section.color} mb-6`} />
                <h3 className="font-playfair text-2xl font-bold text-navy mb-1">{section.title}</h3>
                <p className="text-gold font-semibold mb-4">{section.grades}</p>

                {/* Subjects */}
                {!section.isSenior && (
                  <ul className="space-y-2">
                    {section.subjects.map((subject, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3 text-text">
                        <span className="w-2 h-2 rounded-full bg-royal" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Senior School Groups */}
                {section.isSenior && section.groups && (
                  <div className="space-y-4">
                    {section.groups.map((group, gIdx) => (
                      <div key={gIdx} className="bg-light rounded-lg p-3">
                        <p className="font-semibold text-navy text-sm mb-1">{group.name}</p>
                        <p className="text-text/80 text-xs">{group.subjects}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
