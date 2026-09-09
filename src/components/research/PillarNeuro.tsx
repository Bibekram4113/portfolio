'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BrainCircuit } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import StatusBadge from '@/components/research/StatusBadge';
import TagChips from '@/components/research/TagChips';
import FlowSteps from '@/components/research/FlowSteps';
import ExpandModule from '@/components/research/ExpandModule';

const tags = [
  'Neural Interfaces', 'Neural Signal Processing', 'Brain–Machine Interfaces',
  'Neurotechnology', 'Neural Engineering', 'Computational Neuroscience',
  'Assistive Neurotechnology',
];

const neuralPath = [
  'Neural Activity',
  'Signal Acquisition',
  'Signal Processing',
  'Feature Extraction',
  'Computational Interpretation',
  'Neural Interface',
  'Assistive / Clinical Application',
];

function NeuralVisual() {
  return (
    <motion.div
      initial={{ scale: 1.04 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-bio-400/40 bg-abyss"
    >
      <Image
        src="/research/neuroengineering.jpg"
        alt="Brain and neural imaging research visual"
        fill
        sizes="(max-width: 1024px) 90vw, 560px"
        className="object-cover opacity-70 saturate-[0.85]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-bio-400/25 via-abyss/30 to-abyss/90" />
      <div className="absolute inset-0 grid-bg opacity-25 mix-blend-screen" />
      <div className="absolute inset-x-0 top-1/2 h-px animate-scan bg-gradient-to-r from-transparent via-bio-300 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-bio-200">
        <span>Neural signals // acquired</span>
        <span>Interface research</span>
      </div>
    </motion.div>
  );
}

export default function PillarNeuro() {
  return (
    <section id="pillar-neuro" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 size-[420px] rounded-full bg-bio-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="RESEARCH PILLAR 03 // NEUROENGINEERING"
          title={
            <>
              Neuro<span className="text-gradient">engineering</span>
            </>
          }
          sub="Engineering interfaces between technology and the nervous system."
        />

        <div className="flex flex-wrap gap-2.5">
          <StatusBadge kind="future" />
          <StatusBadge kind="active" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="leading-relaxed text-muted">
              My long-term research interests include neuroengineering and neurotechnology —
              particularly technologies for neural sensing, neural signal processing, neural
              interfaces, brain–machine interaction, and computational approaches to understanding
              and interfacing with the nervous system.
            </p>

            <div className="mt-6 rounded-2xl border border-bio-400/20 bg-panel/50 p-5">
              <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-bio-300">
                <BrainCircuit className="size-3.5" aria-hidden="true" />
                Future // Developing Research Direction
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                This is an emerging direction for me in its research-depth — I engage with neural
                signals through computational-neuroscience coursework and EEG-based multimodal work
                (IEEE ICCSP 2025), and I am actively building toward neural interfaces and
                neurotechnology as graduate research. It is not claimed as completed experimental
                neuroengineering research.
              </p>
            </div>

            <div className="mt-7">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-bio-400">
                Research areas
              </p>
              <TagChips tags={tags} />
            </div>
            <div className="mt-8 space-y-3">
              <ExpandModule title="Core research questions">
                <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                  <li className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-bio-400/70" />
                    How can engineering create reliable, safe interfaces with the nervous system?
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-bio-400/70" />
                    How can neural signals be processed and interpreted into actionable, assistive outcomes?
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-bio-400/70" />
                    How do computational models of neural activity translate into practical brain–machine interaction?
                  </li>
                </ul>
              </ExpandModule>
              <ExpandModule title="Related context & future direction">
                <p className="text-sm leading-relaxed text-muted">
                  Related foundations: computational-neuroscience coursework and EEG-based multimodal
                  research (IEEE ICCSP 2025). Future direction: neural signal processing, neural
                  interfaces, and assistive neurotechnology at the graduate level.
                </p>
              </ExpandModule>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-bio-400/20 bg-panel/40 p-5">
              <NeuralVisual />
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-bio-400">
                Neural pathway
              </p>
              <FlowSteps steps={neuralPath} accent="bio" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}