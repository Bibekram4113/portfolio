import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    timeline.from('.about-content', {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.15,
    })
  }, [])

  return (
    <section id="about" ref={ref} style={{
      minHeight: '100vh',
      padding: '120px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <div className="section-label">[ 01 — ABOUT ]</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          marginTop: '60px',
        }}>
          <div className="about-content">
            <h2 style={{
              fontSize: '36px',
              color: 'var(--text-primary)',
              fontFamily: "'Syne', sans-serif",
              lineHeight: 1.3,
              marginBottom: '30px',
            }}>
              Building intelligent systems at the intersection of engineering, AI, and patient care.
            </h2>

            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              marginBottom: '30px',
            }}>
              I'm Bibek Ram, a BIS-certified Biomedical Engineer with expertise in medical device development and healthcare AI. With a 9.75/10 GPA and IEEE-published research, I'm passionate about creating solutions that bridge clinical innovation with real-world impact.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}>
              <div className="hud-card" style={{
                padding: '25px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
              }}>
                <div style={{
                  fontSize: '32px',
                  color: 'var(--cyan-primary)',
                  fontWeight: 'bold',
                  fontFamily: "'Syne', sans-serif",
                }}>9.75</div>
                <div style={{
                  fontSize: '11px',
                  color: 'var(--text-dim)',
                  marginTop: '8px',
                  fontFamily: "'Space Mono', monospace",
                }}>GPA OUT OF 10</div>
              </div>
              <div className="hud-card" style={{
                padding: '25px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
              }}>
                <div style={{
                  fontSize: '32px',
                  color: 'var(--cyan-primary)',
                  fontWeight: 'bold',
                  fontFamily: "'Syne', sans-serif",
                }}>7</div>
                <div style={{
                  fontSize: '11px',
                  color: 'var(--text-dim)',
                  marginTop: '8px',
                  fontFamily: "'Space Mono', monospace",
                }}>MAJOR PROJECTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
