'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.p
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="font-mono text-xs uppercase tracking-[0.32em] text-bio-400"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, delay: 0.08 }}
        className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl"
      >
        {title}
      </motion.h2>
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="mt-5 block h-px w-24 origin-left bg-gradient-to-r from-bio-400 to-transparent"
      />
      {sub ? (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted"
        >
          {sub}
        </motion.p>
      ) : null}
    </div>
  );
}
