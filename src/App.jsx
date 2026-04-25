import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import LoadingFallback from "./components/LoadingFallback";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

// Lazy load all pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const Faculty = lazy(() => import("./pages/Faculty"));
const Results = lazy(() => import("./pages/Results"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <a
          href="https://wa.me/919354736961"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
