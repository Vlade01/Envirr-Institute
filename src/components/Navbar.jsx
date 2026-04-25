import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["/", "/about", "/courses", "/faculty", "/results", "/contact"];
const labels = [
  "Home",
  "About Us",
  "Courses",
  "Faculty",
  "Results",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white text-slate-900 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <Link to="/" className="text-xl font-bold tracking-wide text-slate-900">
        ENVIRR <span className="text-emerald-600">Institute</span>
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {labels.map((label, i) => (
          <li key={label}>
            <Link to={links[i]} className="hover:text-emerald-600 transition">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Desktop CTA Button */}
      <Link to="/contact" className="hidden md:block">
        <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-6 rounded-lg transition">
          Apply Now
        </button>
      </Link>
      {/* Mobile Menu Icon */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-6 md:hidden border-b border-gray-200">
          {labels.map((label, i) => (
            <li key={label}>
              <Link
                to={links[i]}
                onClick={() => setOpen(false)}
                className="text-lg hover:text-emerald-600 transition"
              >
                {label}
              </Link>
            </li>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-6 rounded-lg transition">
              Apply Now
            </button>
          </Link>
        </ul>
      )}
    </nav>
  );
}
