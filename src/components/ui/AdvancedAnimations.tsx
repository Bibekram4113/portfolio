'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const ParallaxScroll: React.FC<{
  children: React.ReactNode
  offset?: number
}> = ({ children, offset = 50 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 1000], [0, offset])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export const RevealOnScroll: React.FC<{
  children: React.ReactNode
  delay?: number
}> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export const GlitchEffect: React.FC<{
  children: React.ReactNode
  text: string
}> = ({ children, text }) => {
  return (
    <div className="relative inline-block">
      {/* Main element */}
      <div className="relative z-10">{children}</div>

      {/* Glitch layers */}
      <motion.div
        className="absolute inset-0 text-neon-cyan opacity-0 -z-10"
        animate={{
          opacity: [0, 0.5, 0],
          x: [-2, 2, -2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        {text}
      </motion.div>

      <motion.div
        className="absolute inset-0 text-neon-violet opacity-0 -z-10"
        animate={{
          opacity: [0, 0.3, 0],
          x: [2, -2, 2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.1,
        }}
      >
        {text}
      </motion.div>
    </div>
  )
}
