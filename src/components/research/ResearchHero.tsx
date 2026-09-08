'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import prefersReducedMotion from '@/components/research/prefersReducedMotion';
import { profile } from '@/data/profile';

const pathway = ['Sensing', 'Imaging', 'Computation', 'Neural Systems', 'Clinical Intervention'];

/** ECG-like waveform used as a subtle scientific backdrop. */
function EcgTrace() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-10 h-28 w-full text-bio-400/25"
      fill="none"
    >
      <path
        d="M0 60 H320 L340 60 L352 18 L364 96 L376 60 H600 L620 60 L632 18 L644 96 L656 60 H900 L920 60 L932 18 L944 96 L956 60 H1200"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M0 60 H320 L340 60 L352 18 L364 96 L376 60 H600 L620 60 L632 18 L644 96 L656 60 H900 L920 60 L932 18 L944 96 L956 60 H1200"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="4 10"
        className="data-flow opacity-60"
      />
    </svg>
  );
}

export default function ResearchHero() {
  const reduced = prefersReducedMotion();

  return (
    <section
      id="research-vision"
      className="relative overflow-hidden pt-[72px] min-h-[92vh] grid place-items-center"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 vignette" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 size-[420px] rounded-full bg-bio-400/[0.05] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/3 size-[360px] rounded-full bg-pulse-400/[0.04] blur-3xl [animation-delay:6s]"
      />
      <EcgTrace />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void via-void/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-24 text-center md:px-8 md:py-32">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: -12 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.32em] text-bio-400"
        >
          Research Vision // Biomedical Engineering
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl"
        >
          Research at the Intersection of{' '}
          <span className="text-gradient">Medicine, Engineering &amp; Computation</span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted"
        >
          Exploring how engineered systems, medical imaging, and neurotechnologies can be
          integrated to better sense, visualize, understand, and intervene in human biological
          systems.
        </motion.p>

        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mx-auto mt-5 max-w-3xl font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60"
        >
          {profile.positioning}
        </motion.p>

        {/* Scientific pathway */}
        <motion.div
          initial={reduced ? 'show' : 'hidden'}
          whileInView={reduced ? undefined : 'show'}
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
          }}
          role="list"
          aria-label="Research pathway from sensing to clinical intervention"
          className="mt-14 flex flex-wrap items-center justify-center gap-x-2 gap-y-3"
        >
          {pathway.map((stage, i) => (
            <motion.span
              key={stage}
              role="listitem"
              variants={{
                hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 14, scale: reduced ? 1 : 0.92 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-bio-400/25 bg-panel/70 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-bio-300"
            >
              <span className="font-mono text-[9px] text-muted">{String(i + 1).padStart(2, '0')}</span>
              {stage}
              {i < pathway.length - 1 ? (
                <ArrowRight
                  aria-hidden="true"
                  className="size-3.5 text-bio-400/70"
                />
              ) : null}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={reduced ? { scaleX: 1 } : { scaleX: 0 }}
          whileInView={reduced ? undefined : { scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="mx-auto mt-10 h-px w-full max-w-[720px] origin-left bg-gradient-to-r from-transparent via-bio-400/50 to-transparent"
        />
      </div>
    </section>
  );
}