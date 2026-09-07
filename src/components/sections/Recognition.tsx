'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export default function Recognition() {
  return (
    <section id="recognition" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pulse-400/40 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[420px] rounded-full bg-pulse-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="RECOGNITION // 08"
          title={
            <>
              Research &amp; Academic <span className="text-gradient">Recognition</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group flex items-start gap-4 rounded-xl border border-white/10 bg-panel/50 p-5 transition-colors hover:border-pulse-400/40"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-pulse-400/30 bg-pulse-400/10 text-pulse-400 transition-transform duration-300 group-hover:scale-110">
                <Award className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-semibold leading-snug text-ink">
                  {achievement.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{achievement.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
