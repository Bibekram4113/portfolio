'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Code, Zap } from 'lucide-react'

interface AboutHoloProps {
  name?: string
  profileImage?: string
  email?: string
  location?: string
}

export const AboutHologram: React.FC<AboutHoloProps> = ({
  name = 'Bibek Ram',
  profileImage = '/Bibek Ram Photo.png',
  email = 'bibek.ram.me@gmail.com',
  location = 'Global | Based in India',
}) => {
  const stats = [
    { label: 'Projects', value: '15+', icon: Code },
    { label: 'Certifications', value: '10+', icon: Award },
    { label: 'Domains', value: '8', icon: Users },
    { label: 'Experience', value: '5+ yrs', icon: Zap },
  ]

  const skills = [
    'Medical Device Design',
    'Regulatory Affairs (FDA/ISO)',
    'Embedded Systems & RTOS',
    'Signal Processing & Algorithms',
    'Machine Learning & Python',
    'MATLAB & Data Analysis',
    'Full-Stack Development',
    'Healthcare IoT & Cloud',
    'Leadership & Management',
    'Quality & Compliance Systems',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-mono tracking-widest">
            🎯 DIGITAL IDENTITY SYSTEM
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mt-4">
            Who is {name}?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Hologram */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer glow rings */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-neon-cyan"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(12, 254, 255, 0.3)',
                    '0 0 40px rgba(12, 254, 255, 0.5)',
                    '0 0 20px rgba(12, 254, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className="absolute -inset-4 rounded-3xl border border-neon-violet/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Profile image */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-neon-blue glass-light"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover"
                />

                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/10 to-transparent pointer-events-none"
                  animate={{ y: [-768, 768] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              {/* Floating text labels */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-neon-cyan font-mono text-sm">
                  {name.toUpperCase()}
                </p>
                <p className="text-gray-400 font-mono text-xs text-center">
                  {location}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Stats & Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Biomedical Innovation Lead
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Engineering tomorrow's medical devices through intelligent systems and regulatory mastery.
              </p>
              <p className="text-gray-400 text-base">
                5+ years architecting medical device lifecycles from concept to FDA clearance. Expert in embedded biomedical systems, real-time signal processing, machine learning integration, and healthcare compliance frameworks.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="glass rounded-lg p-4 border border-neon-blue/30 hover:border-neon-blue/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                      >
                        <Icon className="text-neon-cyan" size={24} />
                      </motion.div>
                      <div>
                        <p className="text-neon-cyan font-bold text-lg">
                          {stat.value}
                        </p>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Skills */}
            <div>
              <p className="text-neon-cyan font-bold uppercase tracking-widest text-sm mb-4">
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 15px rgba(12, 254, 255, 0.6)',
                    }}
                    className="px-4 py-2 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/30 text-sm font-mono cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-gray-400 text-sm mb-2">Get in touch:</p>
              <a
                href={`mailto:${email}`}
                className="text-neon-cyan hover:text-neon-violet transition-colors font-mono text-sm"
              >
                {email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
