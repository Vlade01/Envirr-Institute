import { motion } from "framer-motion";
import { teachers } from "../data/data";
import { FacultyPageSEO, SchemaMarkup } from "../components/SEO";

export default function Faculty() {
  return (
    <>
      <FacultyPageSEO />
      <SchemaMarkup />
      <main>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6 rounded-3xl mx-6 my-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
              ACADEMIC LEADERSHIP
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Meet the <span className="text-emerald-400">Architects</span> of Your Future.
            </h1>
            <p className="text-slate-300 mb-8 text-lg">
              Our faculty brings decades of combined expertise from the world's leading academic institutions, dedicated to nurturing the next generation of excellence.
            </p>
          </div>
          <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎓</div>
              <p className="text-gray-400">Expert Faculty Photos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, i) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-900 text-white rounded-2xl overflow-hidden hover:shadow-xl transition group"
              >
                <div className="bg-linear-to-br from-slate-700 to-slate-900 h-56 flex items-center justify-center text-5xl group-hover:from-emerald-600 group-hover:to-slate-900 transition">
                  👤
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                  <p className="text-emerald-400 font-semibold text-sm mb-3">{teacher.subject} Specialist</p>
                  <p className="text-slate-400 text-xs mb-4">Experience: {teacher.experience}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Expert in teaching {teacher.subject.toLowerCase()} with proven track record of producing top scorers.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Philosophy */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            Our <span className="text-emerald-600">Mentorship</span> Philosophy.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Philosophy Points */}
            <div className="space-y-8">
              {[
                {
                  title: "Empirical Excellence",
                  desc: "Every faculty member is chosen for their degrees, but for their proven ability to ignite curiosity."
                },
                {
                  title: "Adaptive Pedagogy",
                  desc: "Our teachers pivot their methods based on individual student resonance, ensuring no scholar is left behind."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                      <span className="text-emerald-600 font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                <p className="text-slate-400 text-sm">Student Retention</p>
              </div>
              <div className="bg-emerald-600 text-white rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold mb-2">🏆</div>
                <p className="text-white text-sm">Excellence Driven</p>
              </div>
              <div className="bg-slate-100 text-slate-900 rounded-2xl p-8 text-center col-span-2">
                <p className="text-sm leading-relaxed">
                  "Our mentors don't just teach subjects; they shape futures. Their commitment goes beyond curriculum to instill values of discipline, resilience, and intellectual curiosity."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}