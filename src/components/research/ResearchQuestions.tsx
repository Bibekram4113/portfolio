'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const questions = [
  {
    q: 'How can medical devices become more intelligent?',
    a: 'Exploring sensing, embedded computation, physiological signal processing, and intelligent monitoring systems — devices that do more than measure, and instead support clinical decision-making at the point of care.',
  },
  {
    q: 'How can medical imaging become more actionable?',
    a: 'Exploring computational imaging, 3D representations, image-guided systems, and clinically useful visualization — turning static scans into information that guides planning, navigation, and intervention.',
  },
  {
    q: 'How can engineering interface with the nervous system?',
    a: 'Exploring neural sensing, neural interfaces, neural signal processing, and neurotechnology — engineering reliable, safe bridges between technology and the nervous system for assistive and clinical outcomes.',
  },
];

export default function ResearchQuestions() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="questions" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/3 size-[420px] rounded-full bg-bio-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="OPEN QUESTIONS // 03"
          title={
            <>
              Questions That Drive <span className="text-gradient">My Research</span>
            </>
          }
          sub="Three questions structure my research direction. Select each to expand the thinking behind it."
        />

        <div className="divide-y divide-white/10 border-y border-white/10">
          {questions.map((item, i) => {
            const isOpen = open === i;
            const id = `research-question-${i}`;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={id}
                  className="group flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-bio-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-display text-xl font-semibold leading-snug transition-colors md:text-3xl ${
                        isOpen ? 'text-bio-300' : 'text-ink group-hover:text-bio-300'
                      }`}
                    >
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 border-bio-400/60 bg-bio-400/10 text-bio-300'
                        : 'border-white/15 text-muted group-hover:border-bio-400/40'
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pl-9 text-base leading-relaxed text-muted md:pl-11">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}