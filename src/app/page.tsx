'use client'

import React, { useEffect } from 'react'
import { NeuralNetworkBackground } from '@/components/ui/NeuralNetworkBackground'
import { SmoothScroll } from '@/components/ui/SmoothScroll'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { HeroSection } from '@/components/sections/HeroSection'
import { ScrollSection } from '@/components/sections/ScrollSection'
import { ProjectShowcase } from '@/components/sections/ProjectShowcase'
import { RegulatoryIntelligenceEngine } from '@/components/sections/RegulatoryIntelligenceEngine'
import { AboutHologram } from '@/components/sections/AboutHologram'
import { IndustryTimeline } from '@/components/sections/IndustryTimeline'
import { FutureVision } from '@/components/sections/FutureVision'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <SmoothScroll>
      <NeuralNetworkBackground />
      <CustomCursor />

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Section 1: The Problem */}
      <section id="problem">
        <ScrollSection
          number="01"
          title="The Problem"
          variant="left"
        >
          <div className="space-y-4">
            <p>
              Healthcare innovation faces critical bottlenecks: device failures due to inadequate risk assessment, regulatory chaos across jurisdictions, and lack of intelligent systems that adapt to patient needs.
            </p>
            <p>
              Traditional approaches are siloed, slow, and disconnected from innovation reality.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-neon-cyan">→</span>
                <span>Device failures in clinical settings</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon-cyan">→</span>
                <span>Fragmented regulatory compliance across markets</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon-cyan">→</span>
                <span>Slow time-to-market for critical innovations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon-cyan">→</span>
                <span>Lack of integrated biomedical intelligence systems</span>
              </li>
            </ul>
          </div>
        </ScrollSection>
      </section>

      {/* Section 2: My Role */}
      <section id="solution">
        <ScrollSection
          number="02"
          title="My Role"
          variant="right"
        >
          <div className="space-y-4">
            <p>
              I am the bridge between biomedical innovation and regulatory excellence. My expertise combines engineering depth with systematic thinking about compliance, risk, and user impact.
            </p>
            <p>
              I don't just build devices—I architect intelligent systems that solve real healthcare problems while navigating complex regulatory landscapes.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-neon-violet">✓</span>
                <span>Design medical devices that exceed safety standards</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon-violet">✓</span>
                <span>Navigate FDA/ISO/IEC compliance strategically</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon-violet">✓</span>
                <span>Integrate AI/ML into healthcare intelligently</span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon-violet">✓</span>
                <span>Accelerate innovation while maximizing safety</span>
              </li>
            </ul>
          </div>
        </ScrollSection>
      </section>

      {/* Section 3: Projects */}
      <section id="projects">
        <ProjectShowcase />
      </section>

      {/* Section 4: Regulatory Engine */}
      <section id="regulatory">
        <RegulatoryIntelligenceEngine />
      </section>

      {/* Section 5: About */}
      <section id="about">
        <AboutHologram
          name="Bibek Ram"
          profileImage="/Bibek Ram Photo.png"
          email="bibek.ram@biomedical.com"
          location="Biomedical Innovation Front"
        />
      </section>

      {/* Section 6: Industry Timeline */}
      <section id="journey">
        <IndustryTimeline />
      </section>

      {/* Section 7: Future Vision */}
      <section id="future">
        <FutureVision />
      </section>

      {/* Footer */}
      <Footer />
    </SmoothScroll>
  )
}
