'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  problem: string
  solution: string
  impact: string
  technologies: string[]
  image: string
}

interface ProjectsProps {
  projects?: Project[]
}

export const ProjectShowcase: React.FC<ProjectsProps> = ({
  projects = DEFAULT_PROJECTS,
}) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 px-4 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-mono tracking-widest">
            03 — WHAT I BUILD
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mt-4 mb-6">
            Interactive Experiences
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Each project is a micro product demo showcasing problem-solving and technical expertise
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl dashboard-panel h-96 flex flex-col justify-between">
                {/* Background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <span className="text-neon-cyan text-sm font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 text-white group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="relative z-10">
                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="mt-6 inline-block text-neon-cyan font-mono text-sm"
                    whileHover={{ x: 5 }}
                  >
                    View Details →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={projects.find((p) => p.id === selectedProject)!}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

const ProjectModal: React.FC<{
  project: Project
  onClose: () => void
}> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-dark-bg glass-light rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-neon-cyan text-sm font-mono mb-2">
                {project.category}
              </p>
              <h3 className="text-3xl font-bold text-gradient">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Problem */}
            <div>
              <h4 className="text-neon-blue font-bold mb-2 uppercase text-sm">
                Problem
              </h4>
              <p className="text-gray-300">{project.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="text-neon-cyan font-bold mb-2 uppercase text-sm">
                Solution
              </h4>
              <p className="text-gray-300">{project.solution}</p>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-neon-violet font-bold mb-2 uppercase text-sm">
                Impact
              </h4>
              <p className="text-gray-300">{project.impact}</p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-gray-400 font-bold mb-3 uppercase text-sm">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-neon-blue/20 text-neon-blue text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Intelligent ECG Monitoring Device',
    category: 'Medical Device',
    description: 'Real-time cardiac monitoring with ML-based arrhythmia detection and FDA 510(k) clearance',
    problem: 'Existing ECG monitors require continuous specialist oversight; arrhythmias can be missed, delaying critical interventions',
    solution: 'Engineered multi-lead ECG acquisition (ARM Cortex-M4 RTOS), implemented CNN-based arrhythmia classifier (97.2% accuracy), integrated cloud telehealth platform with IEC 60601-1 compliance',
    impact: 'Reduced false positives by 60%, clinical trials showed 94% patient detection rate improvement, successfully navigated FDA 510(k) pathway in 6 months',
    technologies: ['embedded C/C++', 'RTOS (FreeRTOS)', 'Signal Processing', 'TensorFlow Lite', 'IEC 60601-1-2', 'Telemedicine'],
    image: 'ecg',
  },
  {
    id: 2,
    title: 'Regulatory Intelligence Platform',
    category: 'SaaS Software',
    description: 'AI-powered regulatory pathway classifier and FDA/ISO documentation mapper',
    problem: 'Medical device companies waste 6-12 months navigating fragmented FDA regulations; no unified pathway recommendation system exists',
    solution: 'Built NLP-based classification system analyzing 500+ FDA guidance documents, created interactive pathway selector recommending 510(k), PMA, or De Novo routes with cost/timeline analysis, REST API integration',
    impact: 'Reduced regulatory planning time by 65%, improved compliance accuracy to 98%, adopted by 20+ medical device manufacturers',
    technologies: ['Python', 'Next.js', 'NLP (spaCy/transformers)', 'FastAPI', 'PostgreSQL', 'FDA Database'],
    image: 'regulatory',
  },
  {
    id: 3,
    title: 'Wearable BioSignal Analysis System',
    category: 'Hardware/IoT',
    description: 'Multi-channel wearable biosensor with edge ML for continuous health monitoring',
    problem: 'Healthcare systems lack real-time continuous monitoring across patient populations; data silos prevent predictive interventions',
    solution: 'Designed 8-channel biomedical sensor interface (EEG, ECG, SpO2, temperature), built edge ML pipeline with TinyML for anomaly detection, implemented HIPAA-compliant cloud sync and clinical dashboards',
    impact: 'Successfully detected abnormalities 48 hours before clinical symptoms in pilot studies, reduced hospital readmissions by 28%',
    technologies: ['ARM FPGA', 'Embedded Python', 'TensorFlow Lite', 'IoT protocols (LoRaWAN)', 'HIPAA Compliance', 'React Dashboard'],
    image: 'wearable',
  },
  {
    id: 4,
    title: 'Clinical Data Analytics Dashboard',
    category: 'Software',
    description: 'Real-time visualization of multi-parameter patient data for intensive care units',
    problem: 'ICU providers manage 50+ data points per patient; current systems require manual data aggregation, leading to errors and delayed decisions',
    solution: 'Engineered real-time data pipeline from 8+ medical devices, built D3.js visualization dashboard with ML-based trend prediction, integrated predictive severity scoring algorithm',
    impact: 'Reduced clinical decision time by 40%, improved patient monitoring efficiency by 50%',
    technologies: ['React', 'Node.js', 'WebSockets', 'D3.js', 'FHIR APIs', 'Medical Device Integration'],
    image: 'dashboard',
  },
  {
    id: 5,
    title: 'Medical Device Test Automation Framework',
    category: 'Quality Assurance',
    description: 'Automated validation and compliance testing for medical device firmware',
    problem: 'Manual testing of IEC 60601 compliance requirements takes months; expensive and error-prone',
    solution: 'Developed comprehensive test automation framework covering 200+ IEC 60601 requirements, created CI/CD pipeline with automated compliance reporting, integrated into GitHub Actions workflow',
    impact: 'Reduced testing time by 75%, improved first-pass compliance rate to 99.2%, saved $500K+ annually in testing costs',
    technologies: ['Python', 'pytest', 'CI/CD (GitHub Actions)', 'IEC 60601-1', 'pytest-xray', 'Docker'],
    image: 'testing',
  },
]
