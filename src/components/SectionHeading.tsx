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
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-bio-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h2>
      {sub ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{sub}</p> : null}
    </div>
  );
}