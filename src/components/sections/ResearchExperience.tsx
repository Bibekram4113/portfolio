'use client';

import { motion } from 'framer-motion';
import { FlaskConical, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export default function ResearchExperience() {
  const re = profile.researchExperience;

  return (
    <section id="research-experience" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[420px] rounded-full bg-bio-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="ACADEMIC RESEARCH // 04"
          title={
            <>
              Research <span className="text-gradient">Experience</span>
            </>
          }
          sub="Hands-on involvement across the biomedical research cycle — from data acquisition and multimodal integration to prototyping, validation, and publication."
        />

        {/* Role header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-bio-400/25 bg-gradient-to-r from-panel via-bio-400/[0.06] to-panel p-7 md:p-9"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="grid size-12 place-items-center rounded-xl border border-bio-400/30 bg-bio-400/10 text-bio-300">
              <GraduationCap className="size-6" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">{re.role}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {re.org} · {re.institution} · {re.location} · {re.period}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {re.activities.map((activity) => (
              <span
                key={activity}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted"
              >
                {activity}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Research streams */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {re.streams.map((stream, i) => (
            <motion.article
              key={stream.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-panel/60 p-7 transition-colors hover:border-bio-400/40"
            >
              <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bio-400">
                <FlaskConical className="size-3.5" aria-hidden="true" />
                {stream.label}
              </p>
              <h4 className="mt-4 font-display text-lg font-semibold leading-snug text-ink md:text-xl">
                {stream.title}
              </h4>
              <ul className="mt-4 flex-1 space-y-2.5">
                {stream.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-bio-400/70" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {stream.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
