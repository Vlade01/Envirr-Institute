import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toppers, teachers } from "../data/data";
import classroomImg from "../assets/classroom.jpg";
import { HomePageSEO, SchemaMarkup } from "../components/SEO";

export default function Home() {
  return (
    <>
      <HomePageSEO />
      <SchemaMarkup />
      <main>
        {/* Hero Section */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                DESIGN OF EXCELLENCE
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Master Your <span className="text-emerald-600">Ambition</span>
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                From foundational middle school concepts to advanced senior
                secondary subjects, ENVIRR Institute provides a bespoke learning
                environment designed for academic dominance.
              </p>
              <Link to="/courses">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition inline-flex items-center gap-2">
                  Explore Curriculum <span>↓</span>
                </button>
              </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={classroomImg}
                  alt="ENVIRR Institute classroom with expert faculty teaching students"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="bg-slate-900 text-white py-8 px-6">
          <div className="max-w-6xl mx-auto flex justify-around text-center">
            <div>
              <div className="text-5xl font-bold text-emerald-500">98%</div>
              <p className="text-gray-400 text-sm">Board Results</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-400 mb-2">
                15:1
              </div>
              <p className="text-slate-400">Student Ratio</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-500">50+</div>
              <p className="text-gray-400 text-sm">Mock Tests</p>
            </div>
          </div>
        </section>

        {/* The ENVIRR Advantage */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
              The <span className="text-emerald-600">ENVIRR</span> Advantage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Faculty",
                  desc: "Decades of combined expertise from leading academic institutions, dedicated to nurturing the next generation of excellence.",
                  icon: "🎓",
                },
                {
                  title: "Flexible Batches",
                  desc: "Balanced small classes ensure individualized attention while fostering collaborative peer learning experiences.",
                  icon: "👥",
                },
                {
                  title: "Hybrid Learning",
                  desc: "Seamlessly transition between in-person atelier learning and digital classroom environments tailored to your needs.",
                  icon: "💻",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Programs */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Programs
            </h2>
            <p className="text-gray-600 mb-12">
              Rigorous curricula tailored for CBSE and ICSE standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Middle School */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition border-2 border-slate-900">
                <h3 className="inline-block bg-slate-900 text-white text-2xl font-bold px-3 py-1 rounded-xl mb-5">
                  Middle School Program (Classes VI-VIII)
                </h3>
                <p className="text-gray-600 mb-4">
                  Empowering Classes VI-VIII with a strong logical foundation
                  across core disciplines.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>✓ Mathematics, Science, English, Social Studies</li>
                  <li>✓ CBSE and ICSE curricula</li>
                  <li>✓ Board-aligned comprehensive learning</li>
                </ul>
                <Link to="/courses">
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition">
                    Learn More →
                  </button>
                </Link>
              </div>

              {/* Senior School */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition border-2 border-slate-900">
                <h3 className="inline-block bg-slate-900 text-2xl text-white font-bold px-3 py-1 rounded-xl mb-5">
                  Senior School Program (Classes IX-XII)
                </h3>
                <p className="text-gray-600 mb-4">
                  A focused, competitive curriculum preparing students for board
                  excellence and entrance exams.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li>✓ Mathematics, Physics, Chemistry, Biology</li>
                  <li>✓ CBSE, ICSE, and JEE/NEET prep</li>
                  <li>✓ Rigorous, concept-depth learning</li>
                </ul>
                <Link to="/courses">
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition">
                    Learn More →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
              Meet the <span className="text-emerald-600">Architects</span> of
              Your Future.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teachers.map((teacher) => (
                <motion.div
                  key={teacher.name}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900 rounded-xl overflow-hidden text-white text-center hover:shadow-lg transition"
                >
                  <div className="bg-linear-to-br from-slate-700 to-slate-900 h-48 flex items-center justify-center text-4xl">
                    👤
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-1">{teacher.name}</h3>
                    <p className="text-emerald-400 text-sm font-semibold">
                      {teacher.subject} Specialist
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      {teacher.experience}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wall of Fame */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Wall of Fame</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {toppers.map((topper) => (
                <motion.div
                  key={topper.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800 rounded-xl p-6 text-center hover:bg-emerald-600 transition"
                >
                  <div className="text-5xl mb-3">🏆</div>
                  <p className="font-bold text-lg">{topper.name}</p>
                  <p className="text-emerald-400 font-bold text-2xl mt-2">
                    {topper.score}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-500 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to transform your academic journey?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of students who achieved their dreams through
              ENVIRR's personalized mentorship.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
