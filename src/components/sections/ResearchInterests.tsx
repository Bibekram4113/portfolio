'use client';

import { motion } from 'framer-motion';
import {
  CircuitBoard,
  Cpu,
  Hand,
  Layers3,
  Repeat,
  ScanLine,
  Waves,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

const interestIcons: Record<string, LucideIcon> = {
  waves: Waves,
  layers: Layers3,
  cpu: Cpu,
  zap: Zap,
  scan: ScanLine,
  circuit: CircuitBoard,
  hand: Hand,
  repeat: Repeat,
};

export default function ResearchInterests() {
  return (
    <section id="research" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/3 size-[420px] rounded-full bg-bio-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="RESEARCH DIRECTIONS // 02"
          title={
            <>
              Research <span className="text-gradient">Interests</span>
            </>
          }
          sub={profile.positioning}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.researchInterests.map((interest, i) => {
            const Icon = interestIcons[interest.icon] ?? Waves;
            return (
              <motion.article
                key={interest.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                className="group rounded-xl border border-white/10 bg-panel/50 p-5 transition-colors hover:border-bio-400/40"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-bio-400/30 bg-bio-400/10 text-bio-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-ink">
                  {interest.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {interest.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
