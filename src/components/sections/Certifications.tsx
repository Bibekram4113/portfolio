'use client';

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="CREDENTIAL LOG // 09"
          title={
            <>
              Selected <span className="text-gradient">Certifications</span>
            </>
          }
          sub="Supplementary coursework supporting the research and engineering work above."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.certificationGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="rounded-xl border border-white/10 bg-panel/50 p-5 transition-colors hover:border-bio-400/40"
            >
              <h3 className="font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-bio-300">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <BadgeCheck
                      className="mt-0.5 size-4 shrink-0 text-bio-400/80"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
