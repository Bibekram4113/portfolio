'use client';

import { motion } from 'framer-motion';

/**
 * Vertical process-flow visualization. Each stage reveals sequentially as the
 * user scrolls; connectors carry a subtle data-flow pulse.
 */
export default function FlowSteps({
  steps,
  accent = 'bio',
  reduced = false,
}: {
  steps: string[];
  accent?: 'bio' | 'pulse';
  reduced?: boolean;
}) {
  const dot = accent === 'pulse' ? 'bg-pulse-400' : 'bg-bio-400';
  const text = accent === 'pulse' ? 'text-pulse-400' : 'text-bio-300';

  return (
    <motion.ol
      initial={reduced ? 'show' : 'hidden'}
      whileInView={reduced ? undefined : 'show'}
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
      className="space-y-3"
    >
      {steps.map((step, i) => (
        <motion.li
          key={step}
          variants={{
            hidden: { opacity: reduced ? 1 : 0, x: reduced ? 0 : -14 },
            show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
          }}
          className="flex items-center gap-3 rounded-lg border border-white/10 bg-panel/40 px-3.5 py-2.5"
        >
          <span
            className={`grid size-7 shrink-0 place-items-center rounded-full border ${dot}/30 ${dot}/15 font-mono text-[10px] ${text}`}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-sm leading-snug text-ink/85">{step}</span>
          {i < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="flow-dot ml-auto inline-block h-4 w-px rounded-full"
              style={{ backgroundColor: accent === 'pulse' ? 'rgba(52,211,153,0.6)' : 'rgba(34,211,238,0.6)' }}
            />
          ) : (
            <span
              aria-hidden="true"
              className={`ml-auto size-1.5 rounded-full ${dot}`}
            />
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}