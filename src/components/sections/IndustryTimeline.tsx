'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Award, BookOpen, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';
import type { TimelineItem } from '@/data/profile';

const kindIcon = {
  experience: Briefcase,
  education: BookOpen,
  milestone: Award,
} as const;

const items: TimelineItem[] = [
  ...profile.experience,
  ...profile.education,
];

export default function IndustryTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 65%'],
  });
  const spineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section ref={sectionRef} id="journey" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pulse-400/30 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/4 size-[460px] rounded-full bg-pulse-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="EXPERIENCE & EDUCATION // 06"
          title={
            <>
              The <span className="text-gradient">Journey</span>
            </>
          }
          sub="Academic research, medical-device R&D, and regulatory standardization — the experience behind a translational research outlook."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              aria-hidden="true"
              style={{ scaleY: spineScale }}
              className="h-full w-px origin-top bg-gradient-to-b from-bio-400 via-bio-400/60 to-transparent"
            />
          </div>

          <div className="space-y-8 md:space-y-12">
            {items.map((item, i) => {
              const Icon = kindIcon[item.kind];
              const onLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${item.title}-${item.period}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    onLeft ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
                  }`}
                >
                  <span
                    className={`absolute left-4 top-3 size-3 -translate-x-1/2 rounded-full border-2 border-bio-400 bg-abyss md:left-auto ${
                      onLeft ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                    }`}
                  >
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-bio-400/60" />
                  </span>

                  <div className="group rounded-2xl border border-white/10 bg-panel/60 p-6 backdrop-blur-sm transition-colors hover:border-bio-400/40">
                    <div
                      className={`flex items-center justify-between gap-3 ${
                        onLeft ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="font-mono text-xs tracking-[0.2em] text-bio-300">
                        {item.period}
                      </span>
                      <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-muted transition-colors group-hover:border-bio-400/40 group-hover:text-bio-300">
                        <Icon className="size-4" />
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold text-ink md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      {item.org}
                      {item.location ? ` · ${item.location}` : ''}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {item.description.map((d) => (
                        <li
                          key={d}
                          className={`flex gap-2.5 text-sm leading-relaxed text-muted ${
                            onLeft ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-bio-400/70" />
                          <span className={onLeft ? 'md:text-left' : ''}>{d}</span>
                        </li>
                      ))}
                    </ul>

                    {item.tags && item.tags.length > 0 ? (
                      <div
                        className={`mt-5 flex flex-wrap gap-2 ${
                          onLeft ? 'md:justify-end' : ''
                        }`}
                      >
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
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
