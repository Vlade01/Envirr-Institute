import { motion } from "framer-motion";
import { AboutPageSEO, SchemaMarkup } from "../components/SEO";

export default function About() {
  return (
    <>
      <AboutPageSEO />
      <SchemaMarkup />
      <main>
      {/* Hero */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            DESIGN OF EXCELLENCE
          </div>
          <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Architects of <span className="text-emerald-600">Academic Mastery.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Beyond the classrooms, we foster a culture of inquiry and discipline. ENVIRR Institute is where Gurugram's brightest minds prepare for global success through personalized mentorship and rigorous standards.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Founded in the heart of Gurugram, ENVIRR Institute began with a singular vision: to bridge the gap between traditional classroom learning and actual success. 
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              What started as a small endeavor for academic rigor has evolved into a beacon of educational excellence. Today, we stand as a testament of premium education, believed that student success is a byproduct of high-performance environments.
            </p>
            <p className="text-gray-600 text-lg">
              Holding modern pedagogy with timeless principles of discipline and focus, we're redefining what it means to excel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-600 text-white rounded-2xl p-8 text-center h-56 flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-sm">Active Students</p>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl p-8 text-center h-56 flex flex-col justify-center">
              <div className="text-4xl font-bold mb-2">2</div>
              <p className="text-sm">Premium Branches</p>
            </div>
            <div className="bg-slate-100 text-slate-900 rounded-2xl p-8 text-center h-56 flex flex-col justify-center col-span-2">
              <div className="text-3xl font-bold mb-2">98%</div>
              <p className="text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">The Pillars of ENVIRR</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Our guiding principles define every interaction, lesson, and mentorship moment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Integrity",
                desc: "We uphold the highest ethical standards, teaching students that character is the ultimate foundation for any career success."
              },
              {
                icon: "⭐",
                title: "Excellence",
                desc: "We do not work for average. Every curriculum detail is curated to push boundaries and transcend traditional benchmarks."
              },
              {
                icon: "👥",
                title: "Student-Centricity",
                desc: "Every student is a unique case study. Our adaptive mentorship program is tailored to individual cognitive patterns and aspirations."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition"
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 bg-slate-900 text-white rounded-3xl mx-6 my-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <blockquote className="text-xl italic text-slate-300 mb-8 p-6 border-l-4 border-emerald-400">
              "To empower the next generation of leaders with the intellectual tools and emotional resilience required to excel in a rapidly evolving global landscape."
            </blockquote>
            <p className="text-slate-300 mb-4">
              At ENVIRR, we believe that academic excellence is not an end in itself but a means to unlock human potential.
            </p>
            <p className="text-slate-300">
              We're committed to creating an ecosystem where every student becomes a future leader, equipped with critical thinking, integrity, and the drive to make a difference.
            </p>
          </div>
          <div className="bg-linear-to-br from-emerald-500 to-slate-700 rounded-2xl p-12 h-80 flex items-center justify-center text-center">
            <div>
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-white text-lg font-semibold">Launching Futures</p>
              <p className="text-slate-200 text-sm mt-2">One Student at a Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ENVIRR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Why Choose ENVIRR?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Proven Track Record",
                desc: "Consistent 98%+ success rate in board exams with students securing top percentiles.",
                points: ["500+ Active Students", "2 Premium Branches", "500+ Success Stories"]
              },
              {
                title: "Holistic Development",
                desc: "Beyond academics, we nurture critical thinking, leadership, and emotional intelligence.",
                points: ["Expert Mentors", "Small Batch Sizes", "Personalized Feedback"]
              },
              {
                title: "Modern Pedagogy",
                desc: "Blend of traditional rigor with cutting-edge teaching methodologies and tech-enabled learning.",
                points: ["Hybrid Learning", "Mock Test Series", "Digital Resources"]
              },
              {
                title: "Accessibility",
                desc: "Premium education shouldn't be exclusive. We offer flexible learning modes and transparent fee structure.",
                points: ["Online & Offline", "Flexible Batches", "Scholarship Programs"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-md transition"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-gray-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Begin Your Journey to Excellence</h2>
          <p className="text-lg mb-8 opacity-90">
            Join ENVIRR Institute and become part of a community built on integrity, excellence, and student success.
          </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </main>
    </>
  );
}