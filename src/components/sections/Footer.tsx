'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Mail, href: 'mailto:bibek.ram.me@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/biblabek-ram', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/bibek-ram', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/bibekram_dev', label: 'Twitter' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="relative py-16 px-4 md:px-8 border-t border-neon-blue/20 bg-gradient-to-b from-transparent to-dark-bg/50">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gradient mb-4">Bibek Ram</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Biomedical systems architect designing intelligent healthcare solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-neon-cyan font-bold mb-4 uppercase tracking-wider text-sm">
              Navigate
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#hero" className="hover:text-neon-cyan transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-neon-cyan transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-neon-cyan transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neon-cyan transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-neon-violet font-bold mb-4 uppercase tracking-wider text-sm">
              Expertise
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Medical Device Design</li>
              <li>Regulatory Strategy</li>
              <li>Embedded Systems</li>
              <li>AI/ML Integration</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-neon-blue font-bold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Open to collaborations and opportunities
            </p>
            <a
              href="mailto:bibek.ram.me@gmail.com"
              className="text-neon-cyan hover:text-neon-violet transition text-sm font-mono"
            >
              Get in touch →
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent mb-8" />

        {/* Social & Copyright */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex gap-6">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-neon-cyan transition"
                  title={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>
              © {currentYear} Bibek Ram. Crafted with precision and innovation.
            </p>
            <p className="text-xs mt-1">
              Living Digital Lab — Building the future of biomedical systems.
            </p>
          </div>
        </motion.div>

        {/* Floating particles background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-violet pointer-events-none opacity-5 rounded-full mix-blend-screen -z-10" />
      </motion.div>
    </footer>
  )
}
