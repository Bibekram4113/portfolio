'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useMotionValue } from 'framer-motion';
import { Brain, GraduationCap, Mail, MapPin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/profile';

const DnaHelix = dynamic(() => import('@/components/three/DnaHelix'), {
  ssr: false,
});

function Counter({
  value,
  decimals = 0,
  suffix = '',
  label,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const mv = useMotionValue(0);
  const [text, setText] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v: number) => setText(`${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, mv, value, decimals, suffix]);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl font-semibold text-bio-300 md:text-5xl">
        {text}
      </div>
      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
    </div>
  );
}

const facts = [
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: GraduationCap, label: 'Degree', value: 'B.Tech. Biomedical Engg' },
  { icon: Brain, label: 'Research', value: 'Signal Processing · Edge AI' },
  { icon: Mail, label: 'Email', value: profile.email },
];

export default function AboutHologram() {
  const sectionRef = useRef<HTMLElement>(null);
  const helixInView = useInView(sectionRef, { margin: '-120px' });

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[480px] rounded-full bg-bio-400/5 blur-3xl" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[440px] opacity-30 lg:block"
      >
        <DnaHelix active={helixInView} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="RESEARCH PROFILE // 01"
          title={
            <>
              About <span className="text-gradient">Bibek</span>
            </>
          }
          sub={profile.positioning}
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          {/* Holographic portrait panel */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative mx-auto max-w-sm">
              <div className="holo-corners relative aspect-[4/5] overflow-hidden rounded-2xl border border-bio-400/20 bg-panel">
                <Image
                  src={profile.avatar}
                  alt="Bibek Ram — biomedical engineer"
                  fill
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-transparent to-transparent" />
                <div className="absolute inset-0 grid-bg opacity-35 mix-blend-overlay" />
                <div className="pointer-events-none absolute inset-x-0 h-1 animate-scan bg-gradient-to-r from-transparent via-pulse-400/70 to-transparent" />

                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md bg-black/50 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-pulse-400 backdrop-blur-sm">
                  <span className="size-1.5 animate-blink rounded-full bg-pulse-400" />
                  REC
                </div>
              </div>

              <div className="mt-5 space-y-2.5 rounded-xl border border-white/10 bg-panel/60 p-4 font-mono text-xs backdrop-blur-sm">
                {[
                  ['NAME', 'BIBEK RAM'],
                  ['INSTITUTION', 'SRMIST · CHENNAI'],
                  ['FOCUS', 'SIGNALS · SENSING · EDGE AI'],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between border-b border-white/5 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="tracking-[0.25em] text-muted/80">{k}</span>
                    <span className="tracking-[0.12em] text-ink">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile copy */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl"
            >
              A researcher working across{' '}
              <span className="text-bio-300">biomedical signals</span>,{' '}
              <span className="text-bio-300">multimodal sensing</span>, and{' '}
              <span className="text-bio-300">intelligent medical devices</span> — from data and
              algorithms to validated, deployable healthcare technology.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 leading-relaxed text-muted"
            >
              {profile.about[0]}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.14 }}
              className="mt-5 space-y-4 leading-relaxed text-muted"
            >
              {profile.about.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-panel/50 p-4 transition-colors hover:border-bio-400/40"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-bio-400/30 bg-bio-400/10 text-bio-300 transition-transform duration-300 group-hover:scale-110">
                    <fact.icon className="size-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      {fact.label}
                    </p>
                    <p className="truncate text-sm text-ink">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {profile.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Counter
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 font-mono text-xs uppercase tracking-[0.32em] text-bio-400"
          >
            Capability Map // Technical Stack
          </motion.p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profile.skills.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: gi * 0.1 }}
                className="group rounded-xl border border-white/10 bg-panel/50 p-5 transition-colors hover:border-bio-400/40"
              >
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-bio-300">
                  {group.category}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted transition-colors group-hover:border-bio-400/25 group-hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
