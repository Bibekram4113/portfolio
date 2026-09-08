'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import prefersReducedMotion from '@/components/research/prefersReducedMotion';

const stages = [
  { word: 'Sense', sub: 'Medical Devices', accent: 'text-bio-300' },
  { word: 'Visualize', sub: 'Medical Imaging', accent: 'text-pulse-400' },
  { word: 'Understand', sub: 'Computational Biomedical Systems', accent: 'text-bio-300' },
  { word: 'Interface', sub: 'Neuroengineering', accent: 'text-pulse-400' },
  { word: 'Translate', sub: 'Clinical Technology', accent: 'text-bio-300' },
];

export default function SensingToIntervention() {
  const reduced = prefersReducedMotion();

  return (
    <section id="sensing-intervention" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pulse-400/40 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[420px] rounded-full bg-pulse-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="RESEARCH CONVERGENCE // 04"
          title={
            <>
              From Sensing to <span className="text-gradient">Intervention</span>
            </>
          }
          sub="A single research arc: sense the biological system, visualize it, understand it, interface with it, and translate that capability into clinical technology."
        />

        <div className="relative">
          {/* spine */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              aria-hidden="true"
              initial={reduced ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={reduced ? undefined : { scaleY: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="h-full w-px origin-top bg-gradient-to-b from-bio-400 via-pulse-400/60 to-transparent"
            />
          </div>

          <div className="space-y-14 md:space-y-16">
            {stages.map((stage, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={stage.word}
                  initial={reduced ? { opacity: 1 } : { opacity: 0, y: 26 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center gap-5 pl-14 md:w-1/2 md:pl-0 ${
                    left ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-5 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-bio-400 bg-abyss md:left-auto ${
                      left ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                    }`}
                  >
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-bio-400/50" />
                  </span>

                  <div className="flex-1">
                    <p
                      className={`font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl ${stage.accent}`}
                    >
                      {stage.word}
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                      {stage.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}