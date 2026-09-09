'use client';

import Link from 'next/link';
import { publicBasePath } from '@/data/profile';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import prefersReducedMotion from '@/components/research/prefersReducedMotion';
import { profile } from '@/data/profile';

export default function ResearchStatement() {
  const reduced = prefersReducedMotion();

  return (
    <section id="research-statement" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 size-[520px] -translate-x-1/2 rounded-full bg-bio-400/[0.05] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.p
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.32em] text-bio-400"
        >
          Research Statement
        </motion.p>

        <motion.blockquote
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-7 font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl"
        >
          I am interested in building biomedical technologies that do more than measure biological
          systems — technologies that can integrate{' '}
          <span className="text-gradient">sensing, imaging, computation, and neural information</span>{' '}
          to generate clinically meaningful insight and ultimately support better intervention.
        </motion.blockquote>

        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={`${publicBasePath}/#projects`}
            className="inline-flex items-center gap-2.5 rounded-full bg-bio-400 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-void transition-all hover:bg-bio-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.45)]"
          >
            View My Projects
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-all hover:border-bio-400/60 hover:text-bio-300"
          >
            <FileText className="size-4" />
            Download CV
          </a>
          <a
            href={`mailto:${profile.email}?subject=Research%20collaboration`}
            className="inline-flex items-center gap-2.5 rounded-full border border-bio-400/40 bg-bio-400/10 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-bio-300 transition-all hover:border-bio-400/70"
          >
            <Mail className="size-4" />
            Discuss Research
          </a>
        </motion.div>
      </div>
    </section>
  );
}