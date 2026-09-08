'use client';

export type StatusKind = 'experience' | 'active' | 'future';

const styles: Record<StatusKind, string> = {
  experience: 'border-bio-400/40 bg-bio-400/10 text-bio-300',
  active: 'border-pulse-400/40 bg-pulse-400/10 text-pulse-400',
  future: 'border-white/15 bg-white/[0.04] text-muted',
};

const labels: Record<StatusKind, string> = {
  experience: 'Experience',
  active: 'Active Interest',
  future: 'Future Research',
};

/**
 * Subtle status label distinguishing areas of practical experience,
 * active exploration, and future PhD-level research directions.
 */
export default function StatusBadge({ kind }: { kind: StatusKind }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] ${styles[kind]}`}
    >
      {labels[kind]}
    </span>
  );
}