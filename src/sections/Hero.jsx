import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { Suspense } from 'react'
import NeuralNetwork from '../three/NeuralNetwork'

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      const timeline = gsap.timeline()

      timeline.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, 2.8)

      timeline.from('h1', {
        opacity: 0,
        y: 60,
        duration: 0.8,
      }, 3.0)

      timeline.from('.hero-title', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, 3.4)

      timeline.from('.hero-tagline', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, 3.8)

      timeline.from('.hero-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, 4.2)
    }
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Three.js Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}>
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
            <NeuralNetwork />
          </Canvas>
        </Suspense>
      </div>

      {/* Content */}
      <div ref={contentRef} style={{
        position: 'relative',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        maxWidth: '1400px',
        width: '100%',
      }}>
        {/* Left Column */}
        <div>
          <div className="hero-badge hud-card" style={{
            display: 'inline-block',
            padding: '8px 16px',
            border: '1px solid var(--cyan-primary)',
            background: 'rgba(0, 229, 255, 0.06)',
            color: 'var(--cyan-primary)',
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            letterSpacing: '0.1em',
            marginBottom: '30px',
          }}>
            ◉ LIVE — AVAILABLE FOR HIRE
          </div>

          <h1 style={{
            fontSize: '88px',
            lineHeight: 1,
            marginBottom: '20px',
            color: 'var(--text-primary)',
            fontWeight: 800,
            letterSpacing: '-0.01em',
          }}>
            BIBEK<br />RAM
          </h1>

          <h2 className="hero-title" style={{
            fontSize: '18px',
            color: 'var(--cyan-primary)',
            fontFamily: "'DM Mono', monospace",
            marginBottom: '20px',
            fontWeight: 500,
          }}>
            Biomedical Engineer & Healthcare AI Researcher
          </h2>

          <p className="hero-tagline" style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            fontFamily: "'DM Mono', monospace",
            lineHeight: 1.8,
            marginBottom: '40px',
            maxWidth: '500px',
          }}>
            Bridging clinical intelligence with edge computing — building AI systems that diagnose, protect, and heal.
          </p>

          <div className="hero-buttons" style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            <button className="btn-primary hud-card">
              [ EXPLORE WORK → ]
            </button>
            <button className="btn-secondary hud-card">
              [ DOWNLOAD RESUME ↓ ]
            </button>
          </div>

          <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
            <a href="https://linkedin.com" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
              LinkedIn
            </a>
            <a href="https://github.com" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
              GitHub
            </a>
            <a href="https://researchgate.net" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>
              ResearchGate
            </a>
          </div>
        </div>

        {/* Right Column - Avatar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            position: 'relative',
            width: '280px',
            height: '280px',
          }}>
            {/* Avatar Circle */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%)',
              border: '2px solid rgba(0, 229, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
            }}>
              👨‍🔬
            </div>

            {/* Orbiting Stat Chips */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
            }}>
              <div style={{
                position: 'absolute',
                animation: 'orbit-1 8s linear infinite',
                width: '100%',
                height: '100%',
              }}>
                <div className="stat-chip" style={{
                  position: 'absolute',
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}>
                  GPA 9.75/10
                </div>
              </div>

              <div style={{
                position: 'absolute',
                animation: 'orbit-2 12s linear infinite reverse',
                width: '100%',
                height: '100%',
              }}>
                <div className="stat-chip" style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(155, 89, 182, 0.1)',
                  borderColor: 'var(--violet-neural)',
                  color: 'var(--violet-neural)',
                }}>
                  IEEE PUBLISHED
                </div>
              </div>

              <div style={{
                position: 'absolute',
                animation: 'orbit-3 10s linear infinite',
                width: '100%',
                height: '100%',
              }}>
                <div className="stat-chip" style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0, 255, 157, 0.08)',
                  borderColor: 'var(--green-bio)',
                  color: 'var(--green-bio)',
                }}>
                  BIS CERTIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        zIndex: 10,
      }}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>↓</div>
        <p style={{
          fontSize: '11px',
          color: 'var(--text-dim)',
          fontFamily: "'Space Mono', monospace",
          letterSpacing: '0.1em',
        }}>
          SCROLL TO EXPLORE
        </p>
      </div>

      <style>{`
        @keyframes orbit-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-3 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
