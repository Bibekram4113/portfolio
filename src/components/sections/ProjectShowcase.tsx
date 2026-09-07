'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Brain,
  Cpu,
  Hand,
  HardHat,
  type LucideIcon,
  Stethoscope,
  Syringe,
  Thermometer,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

const projectIcons: Record<string, LucideIcon> = {
  lungs: Stethoscope,
  cpu: Cpu,
  brain: Brain,
  helmet: HardHat,
  syringe: Syringe,
  hand: Hand,
  thermometer: Thermometer,
};

export default function ProjectShowcase() {
  const featured = profile.projects.find((p) => p.featured);
  const rest = profile.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 size-[420px] rounded-full bg-bio-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="SELECTED RESEARCH PROJECTS // 07"
          title={
            <>
              Research <span className="text-gradient">in Practice</span>
            </>
          }
          sub="Selected projects spanning edge-AI platforms, multimodal sensing, embedded systems, and medical-device concepts — with research status preserved."
        />

        {/* Featured project */}
        {featured ? (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative mb-6 overflow-hidden rounded-3xl border border-bio-400/25 bg-gradient-to-br from-panel via-bio-400/[0.05] to-panel"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/60 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-bio-400/10 blur-3xl" />

            <div className="grid grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-bio-400/40 bg-bio-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-bio-300">
                    Flagship Research
                  </span>
                  <span className="rounded-full border border-pulse-400/40 bg-pulse-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-pulse-400">
                    {featured.status}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                  {featured.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-6 font-mono text-sm">
                {[
                  ['OBJECTIVE', 'Early TB screening'],
                  ['MODALITY', 'Audio + X-Ray + Clinical'],
                  ['DEPLOYMENT', 'Raspberry Pi · Edge'],
                  ['STATUS', 'Ongoing'],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted/70">
                      {k}
                    </span>
                    <span className="text-right text-xs text-bio-300">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => {
            const Icon = projectIcons[project.icon] ?? Cpu;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-bio-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-bio-400/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-60" />

                <div className="relative flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl border border-bio-400/30 bg-bio-400/10 text-bio-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" />
                  </span>
                  {project.highlight ? (
                    <span className="rounded-full border border-pulse-400/40 bg-pulse-400/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-pulse-400">
                      {project.highlight}
                    </span>
                  ) : (
                    <ArrowUpRight className="size-4 text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  )}
                </div>

                <h3 className="relative mt-5 font-display text-lg font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
