'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

export default function Publications() {
  return (
    <section id="publications" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pulse-400/40 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[420px] rounded-full bg-pulse-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="PEER-REVIEWED RESEARCH // 03"
          title={
            <>
              IEEE <span className="text-gradient">Publications</span>
            </>
          }
          sub="Peer-reviewed conference papers published with the IEEE."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {profile.publications.map((pub, i) => (
            <motion.article
              key={pub.doi}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-bio-400/25 bg-gradient-to-br from-panel via-bio-400/[0.05] to-panel p-7 transition-colors hover:border-bio-400/50 md:p-9"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/60 to-transparent" />

              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-bio-400/40 bg-bio-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-bio-300">
                  <BookOpen className="size-3" aria-hidden="true" />
                  Conference
                </span>
                <span className="rounded-full border border-pulse-400/40 bg-pulse-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-pulse-400">
                  IEEE
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {pub.year}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
                {pub.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">{pub.venue}</p>

              <a
                href={pub.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 self-start rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-bio-300 transition-colors hover:border-bio-400/50 hover:text-bio-400"
                aria-label={`View DOI record for ${pub.title}`}
              >
                DOI: {pub.doi}
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
