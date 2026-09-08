'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import prefersReducedMotion from '@/components/research/prefersReducedMotion';

const current = [
  'Medical Device R&D',
  'Physiological Monitoring',
  'Embedded Biomedical Systems',
  'Clinical Technology',
  'Medical Imaging / Navigation',
  'Verification & Validation',
  'Risk Management',
  'Regulatory Engineering',
];

const future = [
  'Intelligent Medical Devices',
  'Computational Medical Imaging',
  'Neural Interfaces',
  'Neurotechnology',
  'Biomedical AI',
  'Multimodal Biomedical Systems',
  'Clinically Translatable Technologies',
];

export default function ResearchTrajectory() {
  const reduced = prefersReducedMotion();

  return (
    <section id="trajectory" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/4 size-[420px] rounded-full bg-bio-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="RESEARCH TRAJECTORY // 05"
          title={
            <>
              Research <span className="text-gradient">Trajectory</span>
            </>
          }
          sub="Existing engineering and clinical experience, carried forward into future research capability."
        />

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-bio-400/25 bg-panel/50 p-7"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bio-400">
              Current Foundation
            </p>
            <ul className="mt-5 space-y-2.5">
              {current.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink/85">
                  <span className="size-1 rounded-full bg-bio-400/70" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid place-items-center"
          >
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-abyss/60 px-5 py-6 text-bio-300 lg:px-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                → capability
              </span>
              <ArrowRight className="hidden size-6 lg:block" aria-hidden="true" />
              <ArrowDown className="size-6 lg:hidden" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-pulse-400/25 bg-gradient-to-b from-panel via-pulse-400/[0.04] to-panel p-7"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-pulse-400">
              Future Research
            </p>
            <ul className="mt-5 space-y-2.5">
              {future.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink/85">
                  <span className="size-1 rounded-full bg-pulse-400/80" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}