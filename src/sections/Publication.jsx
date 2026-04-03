import React from 'react'

export default function Publication() {
  return (
    <section id="research" style={{
      minHeight: '80vh',
      padding: '120px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div className="section-label">[ 05 — PEER-REVIEWED RESEARCH ]</div>

        <div className="hud-card" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--violet-neural)',
          borderLeft: '4px solid var(--violet-neural)',
          padding: '50px',
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '60px',
        }}>
          <div style={{ display: 'flex',  flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🧠</div>
            <div style={{
              background: 'rgba(155, 89, 182, 0.1)',
              border: '1px solid var(--violet-neural)',
              padding: '8px 16px',
              fontSize: '11px',
              color: 'var(--violet-neural)',
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              ICCSP 2025
            </div>
            <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '14px', color: 'var(--text-primary)', fontFamily: "'Syne', sans-serif", fontWeight: 'bold' }}>
              BIBEK RAM
            </p>
          </div>

          <div>
            <h2 style={{
              fontSize: '24px',
              color: 'var(--text-primary)',
              fontFamily: "'Syne', sans-serif",
              lineHeight: 1.4,
              marginBottom: '20px',
            }}>
              Multimodal Emotion Recognition via Correlation of EEG, Thermal, and Digital Image Data
            </h2>
            <p style={{
              fontSize: '14px',
              color: 'var(--cyan-primary)',
              fontFamily: "'DM Mono', monospace",
              marginBottom: '20px',
            }}>
              IEEE International Conference on Communication and Signal Processing (ICCSP 2025)
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['IEEE', 'PEER REVIEWED', 'AUTHOR PRESENTER'].map((badge) => (
                <span key={badge} className="skill-tag" style={{
                  background: 'rgba(155, 89, 182, 0.15)',
                  borderColor: 'var(--violet-neural)',
                  color: 'var(--violet-neural)',
                }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
