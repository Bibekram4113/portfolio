'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface TimelineEvent {
  year: string
  title: string
  company: string
  description: string
  highlights: string[]
}

interface TimelineProps {
  events?: TimelineEvent[]
}

export const IndustryTimeline: React.FC<TimelineProps> = ({ events = DEFAULT_EVENTS }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="min-h-screen py-20 px-4 md:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-mono tracking-widest">
            📍 INDUSTRY EXPOSURE
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mt-4 mb-6">
            Professional Journey
          </h2>
          <p className="text-gray-300 text-xl">
            Building expertise across leading biomedical innovation companies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-blue" />

          {/* Timeline events */}
          <div className="space-y-12">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`glass rounded-lg p-6 border border-neon-blue/30 hover:border-neon-cyan/50 transition-colors ${
                    idx % 2 === 1 ? 'md:text-right' : ''
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="h-full"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gradient">
                        {event.title}
                      </h3>
                      <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <ChevronRight className="text-neon-cyan" size={20} />
                      </motion.div>
                    </div>

                    <p className="text-neon-cyan font-mono text-sm mb-1">
                      {event.company}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">{event.year}</p>

                    <p className="text-gray-300 mb-4">{event.description}</p>

                    <ul className="space-y-2">
                      {event.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-sm text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-neon-cyan mt-1">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline node */}
                <div className="flex justify-center hidden md:flex">
                  <motion.div
                    className="relative w-12 h-12 rounded-full border-2 border-neon-cyan bg-dark-bg flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(12, 254, 255, 0.3)',
                        '0 0 20px rgba(12, 254, 255, 0.6)',
                        '0 0 10px rgba(12, 254, 255, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const DEFAULT_EVENTS: TimelineEvent[] = [
  {
    year: 'Present',
    title: 'Senior Biomedical Engineer',
    company: 'Regulatory & Innovation Lead',
    description: 'Architecting next-generation medical device ecosystems with AI/ML integration',
    highlights: [
      'FDA 510(k) & PMA pathway optimization expertise',
      'Real-time biomedical signal processing & algorithms',
      'IoT healthcare platform architecture',
      'Cross-functional team leadership & mentorship',
    ],
  },
  {
    year: '2023 - 2024',
    title: 'Lead Regulatory Affairs Engineer',
    company: 'BIS (Biomedical Instrumentation Systems)',
    description: 'Drove regulatory strategy and compliance for medical device portfolio',
    highlights: [
      'Cleared 5+ devices through FDA 510(k) pathway',
      'Mastered ISO 13485 & 21 CFR Part 11 compliance',
      'Developed regulatory intelligence tools (NLP classification)',
      'Reduced regulatory timelines by 45%',
    ],
  },
  {
    year: '2021 - 2023',
    title: 'Biomedical Hardware Engineer',
    company: 'Medical Device Innovation Lab',
    description: 'Designed embedded systems for diagnostic & therapeutic devices',
    highlights: [
      'Multi-channel EEG/ECG/EMG signal acquisition systems',
      'RTOS firmware development (C, ARM Cortex-M)',
      'FPGA-based real-time biomedical data processing',
      'IEC 60601-1 & ISO 14971 compliance architecture',
    ],
  },
  {
    year: '2019 - 2021',
    title: 'Embedded Systems Engineer',
    company: 'HealthTech Startup',
    description: 'Foundation in medical IoT and realtime healthcare applications',
    highlights: [
      'IoT device firmware using RTOS & edge computing',
      'Cloud integration & real-time data streaming',
      'Machine learning model deployment on edge devices',
      'Clinical validation & technical documentation',
    ],
  },
]
