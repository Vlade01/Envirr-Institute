import { motion } from "framer-motion";
import { toppers } from "../data/data";
import { ResultsPageSEO, SchemaMarkup } from "../components/SEO";

export default function Results() {
  return (
    <>
      <ResultsPageSEO />
      <SchemaMarkup />
      <main>
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            STUDENT ACHIEVEMENTS
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our <span className="text-emerald-600">Excellence</span> in Numbers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Celebrating the exceptional achievements of our students who have consistently excelled in their board examinations and competitive exams.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-emerald-400 mb-2">98%</div>
            <p className="text-slate-400">Board Results</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-emerald-400 mb-2">15:1</div>
            <p className="text-slate-400">Student Ratio</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
            <p className="text-slate-400">Mock Tests</p>
          </div>
        </div>
      </section>

      {/* Wall of Fame */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Wall of Fame</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Meet the brilliant minds who have set the benchmark for excellence at ENVIRR Institute
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {toppers.map((topper, i) => (
              <motion.div
                key={topper.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-slate-900 text-white rounded-2xl p-8 text-center hover:bg-emerald-600 transition group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-2xl font-bold mb-2">{topper.name}</h3>
                <div className="bg-emerald-500 text-white px-4 py-2 rounded-full inline-block font-bold text-2xl">
                  {topper.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "Kartikey Singh",
                score: "95%",
                board: "CBSE Class XII",
                quote: "ENVIRR's personalized attention helped me master complex concepts. The faculty's dedication made all the difference.",
                icon: "⭐"
              },
              {
                name: "Manav Patel",
                score: "92%",
                board: "ICSE Class X",
                quote: "The hybrid learning model was perfect for my schedule. Regular mock tests kept me exam-ready throughout.",
                icon: "🌟"
              },
              {
                name: "Sneha Verma",
                score: "94%",
                board: "CBSE Class XII",
                quote: "The faculty doesn't just teach; they mentor. Their approachability made learning enjoyable and effective.",
                icon: "✨"
              },
              {
                name: "Rohan Kumar",
                score: "91%",
                board: "CBSE Class X",
                quote: "Small batch sizes meant I got individual attention. Every doubt was cleared promptly, boosting my confidence.",
                icon: "💫"
              }
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{story.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{story.name}</h3>
                    <p className="text-emerald-600 font-semibold text-sm">{story.board}</p>
                  </div>
                </div>
                <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full inline-block font-bold mb-4">
                  {story.score}
                </div>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-lg mb-8 opacity-90">
            Enroll now and become part of ENVIRR's legacy of academic excellence.
          </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
    </>
  );
}