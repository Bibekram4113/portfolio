'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Workflow } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export default function ResearchApproach() {
  return (
    <section id="approach" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pulse-400/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="METHODOLOGY // 05"
          title={
            <>
              Research <span className="text-gradient">Approach</span>
            </>
          }
          sub="A general end-to-end workflow shaped by my research experience — from problem definition to translational deployment. Not every project follows every stage, but every stage is considered."
        />

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {profile.approach.map((step, i) => (
            <motion.li
              key={step}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
              }}
              className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-panel/50 p-4 transition-colors hover:border-bio-400/40"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-bio-400/30 bg-bio-400/10 font-mono text-xs text-bio-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm text-ink">{step}</span>
              {i < profile.approach.length - 1 ? (
                <ArrowDown
                  className="absolute -bottom-[19px] left-[26px] hidden size-3.5 text-bio-400/50 sm:mt-0 sm:grid"
                  aria-hidden="true"
                />
              ) : null}
            </motion.li>
          ))}
          <li className="flex items-center gap-4 rounded-xl border border-pulse-400/30 bg-pulse-400/[0.06] p-4">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-pulse-400/40 bg-pulse-400/10 text-pulse-400">
              <Workflow className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm text-ink">
              Research that moves from data to deployable, clinically relevant systems.
            </span>
          </li>
        </motion.ol>
      </div>
    </section>
  );
}
