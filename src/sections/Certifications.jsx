import React from 'react'

const certs = [
  { name: 'ISO 13485 Fundamentals', org: 'Udemy', year: '2025', color: 'var(--amber-warn)' },
  { name: 'Medical Device Design', org: 'Johns Hopkins', year: '2024', color: 'var(--cyan-primary)' },
  { name: 'Edge AI Essentials', org: 'Stanford', year: '2024', color: 'var(--red-alert)' },
  { name: 'Deep Learning', org: 'MIT', year: '2023', color: 'var(--violet-neural)' },
]

export default function Certifications() {
  return (
    <section style={{
      minHeight: '60vh',
      padding: '120px 40px',
      background: 'linear-gradient(-45deg, var(--bg-void) 0%, var(--bg-surface) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div className="section-label">[ 06 — CREDENTIALS ]</div>

        <div style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          paddingBottom: '20px',
          marginTop: '60px',
        }}>
          {certs.map((cert, idx) => (
            <div key={idx} className="hud-card" style={{
              background: 'var(--bg-card)',
              border: `1px solid ${cert.color}`,
              borderTop: `4px solid ${cert.color}`,
              padding: '25px',
              minWidth: '220px',
              flexShrink: 0,
            }}>
              <h4 style={{
                fontSize: '13px',
                color: 'var(--text-primary)',
                fontFamily: "'Syne', sans-serif",
                marginBottom: '12px',
              }}>
                {cert.name}
              </h4>
              <p style={{
                fontSize: '11px',
                color: 'var(--text-dim)',
                marginBottom: '15px',
              }}>
                {cert.org}
              </p>
              <p style={{
                fontSize: '11px',
                color: cert.color,
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
