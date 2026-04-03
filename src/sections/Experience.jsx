import React from 'react'

export default function Experience() {
  const experiences = [
    {
      org: 'Bureau of Indian Standards',
      role: 'Medical Device Standardization Intern',
      date: 'JUN–JUL 2025',
      location: '📍 New Delhi, India',
      tags: ['ISO 13485', 'CDSCO MDR', 'Technical Writing'],
    },
  ]

  return (
    <section id="experience" style={{
      minHeight: '100vh',
      padding: '120px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div className="section-label">[ 03 — FIELD OPERATIONS ]</div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="hud-card" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--cyan-primary)40',
            borderLeft: '3px solid var(--cyan-primary)',
            padding: '40px',
            marginTop: '60px',
          }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '11px',
                color: 'var(--text-dim)',
                fontFamily: "'Space Mono', monospace",
                marginBottom: '8px',
              }}>
                {exp.org}
              </div>
              <h3 style={{
                fontSize: '22px',
                color: 'var(--text-primary)',
                fontFamily: "'Syne', sans-serif",
              }}>
                {exp.role}
              </h3>
              <div style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginTop: '8px',
              }}>
                {exp.location}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {exp.tags.map((tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
