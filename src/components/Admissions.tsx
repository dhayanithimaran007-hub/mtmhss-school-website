import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const steps = [
  { num: '01', title: 'Apply Online', desc: 'Fill the application form' },
  { num: '02', title: 'Submit Documents', desc: 'Upload required papers' },
  { num: '03', title: 'Interview', desc: 'Meet with our team' },
  { num: '04', title: 'Confirmation', desc: 'Get your admission' },
];

const grades = ['LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    classApplying: '',
    parentName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase
    .from("applications")
    .insert([
      {
        student_name: formData.studentName,
        class_applying_for: formData.classApplying,
        parent_name: formData.parentName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      },
    ]);

  if (error) {
    alert("Error: " + error.message);
    console.error(error);
    return;
  }

  setSubmitted(true);

  setFormData({
    studentName: "",
    classApplying: "",
    parentName: "",
    phone: "",
    email: "",
    message: "",
  });

  setTimeout(() => setSubmitted(false), 5000);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="admissions" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="text-royal font-semibold text-sm uppercase tracking-wider">Join Us</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mt-3">
            Admissions 2026-2027
          </h2>
          <p className="text-text mt-4 max-w-2xl mx-auto">
            Begin your child's journey to excellence with Mar Thoma Matriculation Higher Secondary School
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="fade-up">
            <h3 className="font-playfair text-2xl font-bold text-navy mb-8">Admission Process</h3>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-gold">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-lg">{step.title}</h4>
                    <p className="text-text/70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-royal/5 rounded-xl border border-royal/20">
              <p className="text-navy font-semibold mb-2">Need Assistance?</p>
              <p className="text-text/70 text-sm">
                Contact our admissions office at <span className="text-royal font-medium">044 - 2479 9335</span> or email us at <span className="text-royal font-medium">marthomaschool@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="fade-up">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-navy mb-6">Apply Now</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-navy font-medium text-sm mb-1">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div>
                  <label className="block text-navy font-medium text-sm mb-1">Class Applying For *</label>
                  <select
                    name="classApplying"
                    value={formData.classApplying}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select class</option>
                    {grades.map((g) => (
                      <option key={g} value={g}>Grade {g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-navy font-medium text-sm mb-1">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all"
                    placeholder="Enter parent's name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-medium text-sm mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy font-medium text-sm mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/20 outline-none transition-all resize-none"
                    placeholder="Any additional information..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Application Submitted!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </button>

                <p className="text-center text-text/60 text-sm">
                  Our team will contact you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
