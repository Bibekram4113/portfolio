'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const textLines = [
    'Designing Medical Futures.',
    'Mastering Regulatory Pathways.',
    'Building Intelligent Healthcare Systems.',
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-blue rounded-full mix-blend-screen opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ blur: '100px' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-neon-violet rounded-full mix-blend-screen opacity-15"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ blur: '100px' }}
        />
      </div>

      <motion.div
        className="text-center z-10 px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pre-title */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-neon-cyan text-lg tracking-widest font-mono">
            → BIOMEDICAL INTELLIGENCE SYSTEM ←
          </p>
        </motion.div>

        {/* Main headline */}
        <div className="mb-12">
          {textLines.map((line, i) => (
            <motion.div key={i} variants={itemVariants} className="mb-4">
              <h1 className="text-4xl md:text-7xl font-bold text-gradient">
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          5+ years bridging biomedical excellence with regulatory mastery. Architecting intelligent medical devices from concept through FDA clearance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center flex-col md:flex-row"
        >
          <motion.button
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan text-black font-bold text-lg magnetic-btn relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Enter Lab</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-violet"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="px-8 py-4 rounded-lg border-2 border-neon-violet text-neon-violet font-bold text-lg magnetic-btn hover:bg-neon-violet/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-neon-cyan" size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
