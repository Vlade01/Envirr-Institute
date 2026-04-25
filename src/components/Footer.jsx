import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { instituteInfo } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            ENVIRR <span className="text-emerald-400">Institute</span>
          </h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">
            Empowering the next generation of academic leaders through innovative education and dedicated mentorship.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=100091609203622" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/envir.r/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Navigation</h5>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-slate-400 hover:text-emerald-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition">About Us</Link>
            </li>
            <li>
              <Link to="/courses" className="text-slate-400 hover:text-emerald-400 transition">Courses</Link>
            </li>
            <li>
              <Link to="/faculty" className="text-slate-400 hover:text-emerald-400 transition">Faculty</Link>
            </li>
            <li>
              <Link to="/results" className="text-slate-400 hover:text-emerald-400 transition">Results</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Resources</h5>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">FAQ</a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">Careers</a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Contact Us</h5>
          <div className="space-y-4">
            <div>
              <p className="text-slate-400 text-sm mb-2">Phone</p>
              <a 
                href={`tel:${instituteInfo.phone}`}
                className="text-emerald-400 font-semibold hover:text-emerald-300 transition flex items-center gap-2"
              >
                <FaPhone size={16} /> {instituteInfo.phone}
              </a>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">WhatsApp</p>
              <a 
                href={`https://wa.me/${instituteInfo.whatsapp.replace(/\s+/g, '').replace('+', '')}?text=Hi%20ENVIRR%20Institute%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20courses.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-semibold hover:text-emerald-300 transition flex items-center gap-2"
              >
                <FaWhatsapp size={16} /> Chat Now
              </a>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Email</p>
              <a 
                href={`mailto:${instituteInfo.email}`}
                className="text-emerald-400 font-semibold hover:text-emerald-300 transition"
              >
                {instituteInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800"></div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Branches */}
          <div>
            <h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Our Branches</h5>
            <div className="space-y-3">
              {instituteInfo.branches.map((branch) => (
                <div key={branch.name} className="text-slate-400 text-xs">
                  <p className="font-semibold text-white">{branch.name}</p>
                  <p>{branch.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">
              © 2024 ENVIRR Institute. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs mt-2">
              Shaping Futures, One Student at a Time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
