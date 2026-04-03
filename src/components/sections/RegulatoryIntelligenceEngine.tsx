'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Zap } from 'lucide-react'

interface RegulatoryResult {
  classification: string
  riskClass: string
  pathway: string
  standards: string[]
  timelines: {
    510k: string
    pma: string
    de: string
  }
}

export const RegulatoryIntelligenceEngine: React.FC = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<RegulatoryResult | null>(null)
  const [loading, setLoading] = useState(false)

  const analyzeDevice = async (deviceInput: string) => {
    if (!deviceInput.trim()) return

    setLoading(true)

    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock AI analysis (in real app, would call backend)
    const mockResults: { [key: string]: RegulatoryResult } = {
      pump: {
        classification: 'Class II - Predicate Device Mode',
        riskClass: 'Medium Risk',
        pathway: '510(k) Premarket Notification (Standard)',
        standards: [
          'IEC 60601-1:2005 (Safety)',
          'IEC 60601-1-6:2013 (Usability)',
          'ISO 14971:2019 (Risk Management)',
          'ISO 13485:2016 (QMS)',
        ],
        timelines: {
          '510k': '90 days average',
          pma: 'Not applicable',
          de: '30-90 days',
        },
      },
      dialyzer: {
        classification: 'Class II - General Controls',
        riskClass: 'Medium Risk',
        pathway: '510(k) Substantial Equivalence',
        standards: [
          'ISO 8637:2016 (Blood Path)',
          'ISO 11373:1997 (Immune Response)',
          'IEC 60601 Series',
        ],
        timelines: {
          '510k': '75-90 days',
          pma: 'Not applicable',
          de: 'N/A',
        },
      },
      monitor: {
        classification: 'Class II - Special Controls',
        riskClass: 'Low-Medium Risk',
        pathway: '510(k) or De Novo',
        standards: [
          'IEC 60601-1-2:2014 (EMC)',
          'ISO 10993-5:2009 (Biocompatibility)',
          'IEC 60950-1 (Electrical)',
        ],
        timelines: {
          '510k': '90 days',
          pma: 'Not applicable',
          de: '120-180 days',
        },
      },
    }

    const deviceType = deviceInput.toLowerCase()
    const matchedResult = Object.entries(mockResults).find(([key]) =>
      deviceType.includes(key)
    )?.[1]

    setResult(
      matchedResult || {
        classification: 'Class II - Moderate Risk',
        riskClass: 'Medium',
        pathway: '510(k) Premarket Notification',
        standards: [
          'IEC 60601-1:2005 (General Safety)',
          'ISO 14971:2019 (Risk Analysis)',
          'ISO 13485:2016 (Quality Management)',
        ],
        timelines: {
          '510k': '90 days average',
          pma: 'Case-by-case basis',
          de: '150-180 days',
        },
      }
    )

    setLoading(false)
  }

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
    <section className="min-h-screen py-20 px-4 md:px-8 flex items-center">
      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-neon-violet text-sm font-mono tracking-widest">
            ⚙️ REGULATORY INTELLIGENCE ENGINE
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mt-4 mb-6">
            Medical Device Classification System
          </h2>
          <p className="text-gray-300 text-xl">
            AI-powered analysis: Input device → Get classification, pathway, standards & timelines
          </p>
        </div>

        {/* Main input panel */}
        <motion.div
          variants={itemVariants}
          className="glass-light rounded-xl p-8 mb-8 border border-neon-blue/30"
        >
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <motion.input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) =>
                  e.key === 'Enter' && analyzeDevice(input)
                }
                placeholder="E.g., 'Infusion pump', 'ECG monitor', 'Dialyzer'..."
                className="w-full bg-dark-bg/50 border border-neon-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan"
              />
              <motion.div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon-cyan"
                animate={{ rotate: loading ? 360 : 0 }}
                transition={{ duration: 1, repeat: loading ? Infinity : 0 }}
              >
                <Search size={20} />
              </motion.div>
            </div>

            <motion.button
              onClick={() => analyzeDevice(input)}
              disabled={loading || !input.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-violet to-neon-cyan text-black font-bold flex items-center gap-2 disabled:opacity-50"
            >
              <Zap size={18} />
              Analyze
            </motion.button>
          </div>

          {/* Example queries */}
          <div className="flex flex-wrap gap-2">
            {['Infusion Pump', 'ECG Monitor', 'Dialyzer'].map((example) => (
              <motion.button
                key={example}
                onClick={() => {
                  setInput(example)
                  setTimeout(() => analyzeDevice(example), 100)
                }}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition-colors"
              >
                Try: {example}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        {loading && (
          <motion.div
            variants={itemVariants}
            className="glass-light rounded-xl p-8 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-12 h-12 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            </motion.div>
            <p className="text-gray-300">
              Analyzing regulatory pathway...
            </p>
          </motion.div>
        )}

        {!loading && result && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Classification Card */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6 border-l-4 border-neon-blue"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Classification
                  </p>
                  <h3 className="text-2xl font-bold text-neon-blue mt-1">
                    {result.classification}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Risk Level</p>
                  <p className="text-xl font-bold text-neon-violet">
                    {result.riskClass}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Pathway Card */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl p-6 border-l-4 border-neon-violet"
            >
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Recommended Pathway
              </p>
              <h3 className="text-2xl font-bold text-neon-violet mt-1">
                {result.pathway}
              </h3>
            </motion.div>

            {/* Standards & Timelines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Standards */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-xl p-6 border border-neon-cyan/30"
              >
                <p className="text-sm text-neon-cyan font-bold uppercase mb-4">
                  Required Standards
                </p>
                <ul className="space-y-2">
                  {result.standards.map((standard, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-neon-cyan mr-2">✓</span>
                      {standard}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Timelines */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-xl p-6 border border-neon-cyan/30"
              >
                <p className="text-sm text-neon-cyan font-bold uppercase mb-4">
                  Approval Timelines
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">510(k):</span>
                    <span className="text-neon-cyan font-mono">
                      {result.timelines['510k']}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">De Novo:</span>
                    <span className="text-neon-cyan font-mono">
                      {result.timelines.de}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">PMA:</span>
                    <span className="text-neon-cyan font-mono">
                      {result.timelines.pma}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
