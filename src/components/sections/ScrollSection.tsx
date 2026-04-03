'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ScrollSectionProps {
  title: string
  number: string
  children: React.ReactNode
  variant?: 'left' | 'right'
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  title,
  number,
  children,
  variant = 'left',
}) => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 flex items-center relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-neon-violet rounded-full mix-blend-screen opacity-10"
          animate={{
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Content */}
          <div
            className={`md:col-span-7 ${variant === 'right' ? 'md:col-start-6' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, x: variant === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-neon-cyan text-sm font-mono tracking-widest">
                {number}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mt-2 mb-6">
                {title}
              </h2>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                {children}
              </div>
            </motion.div>
          </div>

          {/* Visual indicator */}
          <div className={`md:col-span-5 ${variant === 'right' ? 'md:col-start-1' : ''}`}>
            <motion.div
              className="relative h-96 glass rounded-xl p-8 flex items-center justify-center"
              whileInView={{
                boxShadow: [
                  '0 0 20px rgba(12, 254, 255, 0.3)',
                  '0 0 40px rgba(176, 38, 255, 0.5)',
                  '0 0 20px rgba(12, 254, 255, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-gradient mb-4 text-opacity-20">
                  {number}
                </div>
                <p className="text-neon-blue text-sm uppercase tracking-widest">
                  {title}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
