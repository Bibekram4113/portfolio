import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '40px',
      borderTop: '1px solid var(--border-default)',
      color: 'var(--text-dim)',
      fontSize: '12px',
      fontFamily: "'Space Mono', monospace",
      letterSpacing: '0.1em',
    }}>
      <p style={{ marginBottom: '15px' }}>
        ◈ BIBEK RAM · BIOMEDICAL ENGINEER · 2025 ◈
      </p>
      <p>Built with React, Three.js & Framer Motion</p>
    </footer>
  )
}
