import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timeline = gsap.timeline()

    // ECG animation
    const ecgPath = document.querySelector('.ecg-pulse polyline')
    if (ecgPath) {
      const length = ecgPath.getTotalLength()
      ecgPath.style.strokeDasharray = length
      ecgPath.style.strokeDashoffset = length

      timeline.to(ecgPath, {
        strokeDashoffset: 0,
        duration: 0.8,
      }, 0)
    }

    // Text typing
    timeline.to({}, { duration: 0.2 }, 0.8)
    timeline.add(() => {
      const textEl = document.querySelector('.preloader-text')
      if (textEl) {
        textEl.textContent = '> INITIALIZING BR.OS...'
      }
    }, 1.0)

    timeline.add(() => {
      const textEl = document.querySelector('.preloader-text')
      if (textEl) {
        textEl.textContent = '> LOADING BIOMEDICAL INTERFACE...'
      }
    }, 1.3)

    timeline.add(() => {
      const textEl = document.querySelector('.preloader-text')
      if (textEl) {
        textEl.textContent = '> NEURAL LINK ESTABLISHED ✓'
      }
    }, 1.6)

    // Loading bar
    const fillEl = document.querySelector('.loading-bar-fill')
    if (fillEl) {
      timeline.to(fillEl, {
        width: '100%',
        duration: 0.6,
      }, 1.8)
    }

    // Complete and hide
    timeline.add(() => {
      setHidden(true)
      onComplete()
    }, 2.8)

    return () => timeline.kill()
  }, [onComplete])

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className="ecg-container">
        <svg className="ecg-pulse" viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg">
          <polyline
            points="0,60 50,60 75,60 100,20 125,80 150,60 200,60 250,60 275,60 300,20 325,100 350,60 400,60 450,60 475,60 500,20 525,80 550,60 600,60 650,60 675,60 700,20 725,100 750,60 800,60"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            style={{ color: 'var(--cyan-primary)' }}
          />
        </svg>
      </div>

      <div className="preloader-text"></div>

      <div className="loading-bar">
        <div className="loading-bar-fill"></div>
      </div>
    </div>
  )
}
