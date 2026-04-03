import React from 'react'

const skillGroups = [
  {
    title: '>> AI_AND_PROGRAMMING.sys',
    skills: ['Python', 'TensorFlow', 'MATLAB', 'C', 'Scikit-learn', 'OpenCV'],
  },
  {
    title: '>> BIOMEDICAL_SYSTEMS.sys',
    skills: ['EEG/ECG Analysis', 'Medical Imaging', 'Signal Processing', 'IoT Systems'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '120px 40px',
      background: 'linear-gradient(45deg, var(--bg-surface) 0%, var(--bg-void) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div className="section-label">[ 02 — TECHNICAL ARSENAL ]</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginTop: '60px',
        }}>
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-card hud-card" style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-default)',
              padding: '30px',
            }}>
              <h3 style={{
                fontSize: '12px',
                color: 'var(--text-dim)',
                fontFamily: "'Space Mono', monospace",
                marginBottom: '20px',
                letterSpacing: '0.05em',
              }}>
                {group.title}
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}>
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
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
