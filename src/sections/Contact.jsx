import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" style={{
      minHeight: '100vh',
      padding: '120px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(-45deg, var(--bg-void) 0%, var(--bg-surface) 100%)',
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            fontSize: '80px',
            marginBottom: '30px',
          }}>
            🌍
          </div>
          <p style={{
            fontSize: '13px',
            color: 'var(--cyan-primary)',
            fontFamily: "'Space Mono', monospace",
          }}>
            CHENNAI, INDIA
          </p>
        </div>

        <div>
          <div className="section-label">[ 07 — ESTABLISH CONNECTION ]</div>

          <div style={{ marginBottom: '30px', marginTop: '40px' }}>
            <div style={{ marginBottom: '15px' }}>
              <a href="mailto:br4113@srmist.edu.in" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                📧 br4113@srmist.edu.in
              </a>
            </div>
            <div>
              <a href="tel:+919939137481" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '14px' }}>
                📱 +91 9939137481
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}>
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                background: 'rgba(0, 229, 255, 0.04)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-primary)',
                fontFamily: "'DM Mono', monospace",
                padding: '12px 15px',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                background: 'rgba(0, 229, 255, 0.04)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-primary)',
                fontFamily: "'DM Mono', monospace",
                padding: '12px 15px',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              style={{
                background: 'rgba(0, 229, 255, 0.04)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-primary)',
                fontFamily: "'DM Mono', monospace",
                padding: '12px 15px',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <button type="submit" className="btn-primary hud-card" style={{
              width: '100%',
              padding: '12px',
            }}>
              [ TRANSMIT MESSAGE → ]
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
