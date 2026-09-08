'use client';

import { motion } from 'framer-motion';
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

/** Abstract neural signal + connectivity visualization. */
function NeuralVisual() {
  return (
    <svg
      viewBox="0 0 320 240"
      role="img"
      className="h-auto w-full"
      aria-label="Schematic neural signal and connectivity visualization"
    >
      <title>Neural signals and connectivity</title>
      {/* electrode strip */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1="26" y1={38 + i * 34} x2="72" y2={38 + i * 34} stroke="rgba(140,170,200,0.35)" strokeWidth="1.4" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={`c${i}`} cx="34" cy={38 + i * 34} r="2.4" fill="rgba(34,211,238,0.7)" />
      ))}
      {/* EEG traces */}
      <path d="M84 60 C 96 58, 108 66, 118 54, 132 62, 146 56, 160 66, 174 58, 188 64, 200 56, 214 64, 228 58, 240 62, 254 58, 268 60, 282 58" fill="none" stroke="rgba(34,211,238,0.8)" strokeWidth="1.5" />
      <path d="M84 110 C 100 104, 116 118, 130 108, 146 120, 162 108, 178 118, 194 106, 210 116, 226 108, 242 116, 258 108, 274 114, 284 110" fill="none" stroke="rgba(52,211,153,0.7)" strokeWidth="1.5" />
      <path d="M84 110 C 100 104, 116 118, 130 108, 146 120, 162 108, 178 118, 194 106, 210 116, 226 108, 242 116, 258 108, 274 114, 284 110" fill="none" stroke="rgba(52,211,153,0.4)" strokeWidth="1.2" strokeDasharray="4 8" className="data-flow" />
      {/* network */}
      {[
        [200, 180, 214, 168], [214, 168, 236, 186], [236, 186, 258, 170],
        [258, 170, 282, 188], [214, 168, 250, 150], [250, 150, 276, 148],
        [200, 180, 240, 196], [240, 196, 272, 200],
      ].map(([x1, y1, x2, y2]) => (
        <line key={`n${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(140,170,200,0.3)" strokeWidth="1" />
      ))}
      {[
        [200, 180], [214, 168], [236, 186], [258, 170], [282, 188], [250, 150], [276, 148], [240, 196], [272, 200],
      ].map(([cx, cy]) => (
        <circle key={`d${cx}`} cx={cx} cy={cy} r="3.4" fill="rgba(34,211,238,0.65)" />
      ))}
      <circle cx="250" cy="150" r="3.4" className="trace-blink" fill="rgba(52,211,153,0.9)" />
    </svg>
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