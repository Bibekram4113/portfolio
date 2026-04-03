'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface FutureVisionProps {
  visions?: string[]
}

export const FutureVision: React.FC<FutureVisionProps> = ({
  visions = DEFAULT_VISIONS,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 flex items-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-neon-violet rounded-full mix-blend-screen opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-0 w-72 h-72 bg-neon-cyan rounded-full mix-blend-screen opacity-15"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-neon-violet text-sm font-mono tracking-widest">
            🚀 FUTURE VISION
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mt-4 mb-6">
            The Next Era of Healthcare
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Converging AI, regulatory intelligence, and biomedical engineering for intelligent medical systems
          </p>
        </div>

        {/* Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {visions.map((vision, idx) => {
            const icons = ['🤖', '🧬', '⚡', '🌐']
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(12, 254, 255, 0.2)',
                }}
                className="glass-light rounded-xl p-8 border border-neon-cyan/30 hover:border-neon-cyan/60 transition-colors group cursor-default"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {icons[idx % icons.length]}
                </div>
                <p className="text-lg text-gray-200 leading-relaxed font-light">
                  {vision}
                </p>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(12, 254, 255, 0.1) 0%, transparent 70%)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Let's build the future of biomedical innovation together
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-violet text-dark-bg font-bold text-lg"
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

const DEFAULT_VISIONS: string[] = [
  'Autonomous medical systems that adapt in real-time using predictive AI and biomarker analysis',
  'Regulatory frameworks that evolve with technology, enabling faster innovation cycles without compromising safety',
  'Decentralized biomedical networks where patient data drives personalized treatment protocols',
  'Quantum-level diagnostics: detecting disease at molecular level before clinical manifestation',
]
