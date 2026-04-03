import React from 'react'

const projects = [
  { title: 'TB Detection System', desc: 'Multimodal AI on Raspberry Pi', tech: ['Python', 'TensorFlow', 'Edge AI'] },
  { title: 'EEG Signal Processing', desc: 'Real-time neural data analysis', tech: ['MATLAB', 'DSP', 'Python'] },
  { title: 'Smart Medical Helmet', desc: 'Wireless vitals monitoring', tech: ['Arduino', 'IoT', 'Sensors'] },
  { title: 'Emotion Recognition', desc: 'Multimodal EEG+Thermal fusion', tech: ['TensorFlow', 'Neural Nets'] },
]

export default function Projects() {
  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '120px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div className="section-label">[ 04 — ACTIVE RESEARCH & BUILDS ]</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          marginTop: '60px',
        }}>
          {projects.map((project, idx) => (
            <div key={idx} className="hud-card" style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-default)',
              padding: '30px',
            }}>
              <h3 style={{
                fontSize: '18px',
                color: 'var(--text-primary)',
                fontFamily: "'Syne', sans-serif",
                marginBottom: '12px',
              }}>
                {project.title}
              </h3>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',\n                marginBottom: '20px',
              }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag" style={{ fontSize: '10px' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
