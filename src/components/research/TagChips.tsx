'use client';

/**
 * Technical tags presented as methodologies & technologies relevant to a
 * research direction (not a generic skills list).
 */
export default function TagChips({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted transition-colors hover:border-bio-400/40 hover:text-bio-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}