export default function About() {
  return (
    <section id="about" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-up relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Annual%20day%20celeb.jpg"
                alt="Annual day celebration at Mar Thoma School"
                className="h-full w-full object-cover"
              />
              {/* Decorative shape */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/20 rounded-full blur-2xl" />
            </div>
            {/* Accent shape */}
            <div className="absolute -z-10 top-6 left-6 w-full h-full border-2 border-gold/30 rounded-2xl" />
          </div>

          {/* Content */}
          <div className="fade-up">
            <span className="text-royal font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
              A Legacy of Academic Excellence
            </h2>

            <p className="text-text text-lg leading-relaxed mb-6">
              The Management, staff, students and parents of Mar Thoma School thank God Almighty for the inception and growth of the Institution. We believe in a holistic approach to education encompassing all domains, ranging from traditional classroom teaching to extracurricular activities, cultural celebrations, community service projects, sports, technology-infused learning and character development of each student.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-royal/10 text-royal font-medium rounded-full">State Board Affiliated</span>
              <span className="px-4 py-2 bg-gold/10 text-gold-700 font-medium rounded-full">Co-Education</span>
              <span className="px-4 py-2 bg-navy/10 text-navy font-medium rounded-full">LKG to Grade 12</span>
            </div>

            <div className="border-l-4 border-gold pl-4">
              <p className="text-navy font-semibold">Mar Thoma Dharmo Educational Society</p>
              <p className="text-text/70 text-sm">Est. 1974 · Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
