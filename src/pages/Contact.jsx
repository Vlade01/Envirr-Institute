import { useState, useEffect } from 'react'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaDirections } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { instituteInfo } from '../data/data'
import Map from '../components/Map'
import { ContactPageSEO, SchemaMarkup } from '../components/SEO'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', class: '', board: '', mode: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    setError('')
    setSuccess(false)

    // Validation
    if (!form.name || !form.phone || !form.class || !form.board || !form.mode) {
      setError('Please fill in all required fields')
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          class: form.class,
          board: form.board,
          mode: form.mode,
          message: form.message || 'No message provided',
        }
      )

      setSuccess(true)
      setForm({ name: '', phone: '', class: '', board: '', mode: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Failed to send enquiry. Please try again later.')
      console.error('EmailJS error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <ContactPageSEO />
      <SchemaMarkup />
      <main className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            GET IN TOUCH
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-2">
            Let's Shape Your <span className="text-emerald-600">Academic Future.</span>
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Centers & Map */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Centers</h2>
            
            {/* Branch Cards */}
            {instituteInfo.branches.map(b => (
              <div key={b.name} className="mb-6 p-6 bg-slate-50 rounded-xl hover:shadow-md transition">
                <div className="flex gap-3 items-start mb-3">
                  <div className="bg-emerald-600 text-white rounded-full p-2 mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 text-lg">{b.name}</p>
                    <p className="text-gray-600 text-sm mt-1">{b.address}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <a href={b.mapLink} target="_blank"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2">
                    <FaDirections size={18} /> Directions
                  </a>
                  <a href={`tel:${instituteInfo.phone}`}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2">
                    <FaPhone size={18} /> Call Now
                  </a>
                  <a href={`https://wa.me/${instituteInfo.whatsapp}`} target="_blank"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2">
                    <FaWhatsapp size={18} /> WhatsApp
                  </a>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <Map branches={instituteInfo.branches} />
          </div>

          {/* Right — Enquiry Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send an Enquiry</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our academic counselors will reach out to you within 24 hours.
            </p>

            {error && <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</div>}
            {success && <div className="mb-4 p-4 bg-emerald-100 border border-emerald-400 text-emerald-700 rounded-lg">✓ Enquiry sent successfully! We'll contact you soon.</div>}

            <form className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="e.g. Rahul Sharma"
                    value={form.name} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+91 00000 00000"
                    value={form.phone} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50" 
                  />
                </div>
              </div>

              {/* Class & Board */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase">Class</label>
                  <select 
                    name="class" 
                    value={form.class} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50">
                    <option value="">Select Class</option>
                    {['VI','VII','VIII','IX','X','XI','XII'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase">Board</label>
                  <select 
                    name="board" 
                    value={form.board} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50">
                    <option value="">Select Board</option>
                    <option>CBSE</option>
                    <option>ICSE</option>
                  </select>
                </div>
              </div>

              {/* Preferred Mode */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3 uppercase">Preferred Mode</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({...form, mode: 'Offline'})}
                    className={`py-3 px-4 rounded-lg font-semibold transition ${
                      form.mode === 'Offline' 
                        ? 'bg-slate-900 text-white' 
                        : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
                    }`}>
                    Offline
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({...form, mode: 'Online'})}
                    className={`py-3 px-4 rounded-lg font-semibold transition ${
                      form.mode === 'Online' 
                        ? 'bg-slate-900 text-white' 
                        : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
                    }`}>
                    Online
                  </button>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2 uppercase">Your Message</label>
                <textarea 
                  name="message" 
                  placeholder="How can we help you?"
                  value={form.message} 
                  onChange={handleChange} 
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 resize-none" 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="button"
                onClick={handleSubmit} 
                disabled={loading}
                className={`w-full font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 ${
                  loading 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}>
                {loading ? 'Submitting...' : 'Submit Enquiry →'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}