import { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  // formData holds what the user types. status tells the UI whether
  // we're sending, succeeded, or failed - used to show a message below
  // the form instead of a popup alert.
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      // This calls the Node/Express backend. In development, vite.config.js
      // proxies /api requests to http://localhost:5000, so this works
      // without needing the full backend URL here.
      const res = await fetch('https://formspree.io/f/xqervggo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Request failed')

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="eyebrow">Let's Connect</span>
        <h2 className="section-title">Contact</h2>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-status success">Message sent. I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-status error">Something went wrong. Please try again or email me directly.</p>
          )}
        </form>

        <div className="contact-links">
          <a href="mailto:areebaf238@gmail.com" className="icon-link" title="Email">
            <FaEnvelope size={20} />
        
          </a>
          <a
            href="https://www.linkedin.com/in/areeba-fatima-913820334"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          {/* GitHub placeholder - swap "#" for the real profile URL once
              it's shared, same pattern as the project link buttons. */}
          <a href="https://github.com/AreebaFatima-101" className="icon-link" title="GitHub">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
