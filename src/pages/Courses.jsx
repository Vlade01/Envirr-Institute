import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { courses } from "../data/data";
import { CoursesPageSEO, SchemaMarkup } from "../components/SEO";

export default function Courses() {
  return (
    <>
      <CoursesPageSEO />
      <SchemaMarkup />
      <main>
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            CURATED ACADEMIC EXCELLENCE
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our <span className="text-emerald-600">Courses</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Structured learning from Class 6 to 12, designed to build strong foundations and exam excellence. Our comprehensive curriculum combines expert faculty, rigorous assessment, and personalized attention to help every student achieve their academic goals.
          </p>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="bg-emerald-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Curriculum <span className="text-emerald-600">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">📝</div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">2</div>
              <p className="text-slate-700 font-semibold">Weekly Tests</p>
              <p className="text-gray-600 text-sm mt-1">Per subject</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">📚</div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">3</div>
              <p className="text-slate-700 font-semibold">Assignments</p>
              <p className="text-gray-600 text-sm mt-1">Per month per subject</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">📄</div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">10</div>
              <p className="text-slate-700 font-semibold">Sample Papers</p>
              <p className="text-gray-600 text-sm mt-1">Per subject yearly</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">❓</div>
              <p className="text-slate-700 font-semibold">Doubt Clearing</p>
              <p className="text-gray-600 text-sm mt-2">Regular sessions to resolve queries</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl mb-3">📊</div>
              <p className="text-slate-700 font-semibold">Performance Reports</p>
              <p className="text-gray-600 text-sm mt-2">Monthly updates for parents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-500">Expert</div>
            <p className="text-gray-400 text-sm">Faculty Members</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-500">2</div>
            <p className="text-gray-400 text-sm">Premium Branches</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-500">CBSE</div>
            <p className="text-gray-400 text-sm">&amp; ICSE Boards</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-500">Online</div>
            <p className="text-gray-400 text-sm">&amp; Offline Modes</p>
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
                icon: "🎓",
                title: "Expert Faculty",
                desc: "Subject matter experts with decades of experience in shaping top-tier academic results.",
              },
              {
                icon: "👥",
                title: "Small Batches",
                desc: "Personalized attention through low student-to-teacher ratios for focused learning.",
              },
              {
                icon: "💻",
                title: "Hybrid Learning",
                desc: "Seamlessly transition between physical classrooms and advanced digital portals.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
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
          <p className="text-gray-600 mb-12 text-lg">
            Rigorous curricula tailored for CBSE and ICSE standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Middle School */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 text-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold mb-6">
                Classes VI–VIII
              </h3>
              <p className="text-slate-300 mb-8">
                Empowering Classes VI-VIII with a strong logical foundation
                across core disciplines.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="text-slate-300">
                    <strong>Subjects:</strong> Mathematics, Science, English,
                    Social Studies
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="text-slate-300">
                    <strong>Boards:</strong> CBSE, ICSE, State Boards
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="text-slate-300">
                    <strong>Focus:</strong> Conceptual Clarity &amp; Weekly
                    Assessment
                  </span>
                </li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition">
                  Learn More
                </button>
              </Link>
            </motion.div>

            {/* Senior School */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900 text-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold mb-6">Classes IX–XII</h3>
              <p className="text-slate-300 mb-8">
                A focused, competitive curriculum preparing students for board
                excellence and entrance exams.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="text-slate-300">
                    <strong>Specialized:</strong> Science, Commerce, Humanities
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="text-slate-300">
                    <strong>Prep:</strong> Board Exam &amp; Mock Tests
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span className="text-slate-300">
                    <strong>Advanced:</strong> JEE/NEET Foundation
                  </span>
                </li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            Comprehensive Course Offerings
          </h2>

          <div className="space-y-10">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-2xl p-10 hover:shadow-md transition"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {course.classes}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                      Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((s) => (
                        <span
                          key={s}
                          className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                      Boards
                    </h4>
                    <div className="space-y-2">
                      {course.boards.map((b) => (
                        <p key={b} className="text-gray-700">
                          ✓ {b}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                      Learning Modes
                    </h4>
                    <div className="space-y-2">
                      {course.mode.map((m) => (
                        <p key={m} className="text-gray-700">
                          ✓ {m}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Cards Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Our <span className="text-emerald-600">Subject Offerings</span>
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Specialized instruction in each subject with expert faculty
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📐",
                subject: "Mathematics",
                desc: "From foundational concepts to advanced calculus. Strong focus on problem-solving and logical reasoning.",
              },
              {
                icon: "🔬",
                subject: "Physics",
                desc: "Conceptual understanding combined with practical application. Lab-based learning for hands-on experience.",
              },
              {
                icon: "⚗️",
                subject: "Chemistry",
                desc: "Organic, inorganic, and physical chemistry with experimental focus. Real-world applications for every topic.",
              },
              {
                icon: "🧬",
                subject: "Biology",
                desc: "Comprehensive study of organisms, cell biology, and genetics. Interactive sessions with visual aids.",
              },
              {
                icon: "📖",
                subject: "English",
                desc: "Literature, grammar, and communication skills. Emphasis on writing, reading, and comprehension.",
              },
              {
                icon: "🌍",
                subject: "Social Studies",
                desc: "History, geography, and civics integrated with contemporary relevance. Map-based learning and discussions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition border border-gray-100"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.subject}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class-wise Schedule & Details */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Class-wise <span className="text-emerald-600">Learning Structure</span>
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Tailored curriculum and assessment patterns for each class level
          </p>

          <div className="space-y-6">
            {[
              {
                classes: "Classes VI–VIII (Foundation Program)",
                color: "emerald",
                details: [
                  { label: "Subjects", value: "Mathematics, Science, English, Social Studies" },
                  { label: "Weekly Tests", value: "2 per subject" },
                  { label: "Assignments", value: "3 per month per subject" },
                  { label: "Focus", value: "Conceptual Clarity & Strong Foundations" },
                  { label: "Boards Covered", value: "CBSE, ICSE, State Boards" },
                ],
              },
              {
                classes: "Classes IX–X (Board Preparation)",
                color: "blue",
                details: [
                  { label: "Subjects", value: "Mathematics, Science (Physics, Chemistry, Biology), English, Social Studies" },
                  { label: "Weekly Tests", value: "2 per subject" },
                  { label: "Sample Papers", value: "10 per subject annually" },
                  { label: "Focus", value: "Board Exam Excellence" },
                  { label: "Boards Covered", value: "CBSE, ICSE" },
                ],
              },
              {
                classes: "Classes XI–XII (Advanced Program)",
                color: "purple",
                details: [
                  { label: "Subjects", value: "Science (PCB/PCM), Commerce, Humanities" },
                  { label: "Weekly Tests", value: "2+ per subject" },
                  { label: "Mock Tests", value: "Monthly comprehensive exams" },
                  { label: "Focus", value: "Board Excellence + JEE/NEET/Commerce Entrance Prep" },
                  { label: "Boards Covered", value: "CBSE, ICSE" },
                ],
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition border-l-4 border-${program.color}-600`}
              >
                <h3 className={`text-2xl font-bold text-slate-900 mb-6 text-${program.color}-700`}>
                  {program.classes}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {program.details.map((detail, j) => (
                    <div key={j}>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">
                        {detail.label}
                      </p>
                      <p className="text-gray-700 font-semibold">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-500 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Master Your Curriculum?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of successful students who have achieved their
            academic goals with ENVIRR.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition">
                Enroll Now
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
                Book a Free Demo Class
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
