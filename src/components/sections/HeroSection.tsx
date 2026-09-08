'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown, BookOpen, Download, FlaskConical, Github, Linkedin, FileText } from 'lucide-react';
import { profile } from '@/data/profile';

const NeuralField = dynamic(() => import('@/components/three/NeuralField'), {
  ssr: false,
});

type LenisLike = { scrollTo: (target: string | HTMLElement, opts?: object) => void };

function scrollToAnchor(href: string) {
  const target = document.querySelector(href);
  if (!target) return;
  const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { offset: -40 });
  } else {
    (target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
}

const chip = 'rounded-lg border border-white/10 bg-panel/70 px-3.5 py-1.5 font-mono text-xs text-muted';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(
        '.hero-line',
        { yPercent: 115 },
        { yPercent: 0, duration: 1.15, stagger: 0.14 },
        0.15
      ).fromTo(
        '.hero-fade',
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 },
        '-=0.55'
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = portraitRef.current;
      if (!el) return;
      const xTo = gsap.quickTo(el, 'x', { duration: 0.7, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.7, ease: 'power3' });
      const onMove = (e: MouseEvent) => {
        const px = e.clientX / window.innerWidth - 0.5;
        const py = e.clientY / window.innerHeight - 0.5;
        xTo(px * -22);
        yTo(py * -16);
      };
      window.addEventListener('mousemove', onMove, { passive: true });
      return () => window.removeEventListener('mousemove', onMove);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen overflow-hidden pt-[72px]"
    >
      <div className="absolute inset-0">
        <NeuralField />
      </div>
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 vignette" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 size-[420px] animate-aurora rounded-full bg-bio-400/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 size-[360px] animate-aurora rounded-full bg-pulse-400/[0.06] blur-3xl [animation-delay:6s]"
      />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-void via-void/40 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 top-3 z-20 hidden items-center gap-3 px-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/70 md:flex">
        <span className="size-1.5 animate-blink rounded-full bg-pulse-400" />
        SYSTEM.BIOMED//BR — ONLINE
        <span className="ml-auto">CHENNAI · INDIA</span>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl grid-cols-1 items-center gap-16 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* Left — copy */}
        <div>
          <div className="hero-fade mb-7 inline-flex items-center gap-2.5 rounded-full border border-pulse-400/30 bg-pulse-400/10 px-4 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-pulse-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-pulse-400">
              {profile.statusLine}
            </span>
          </div>

          <h1 className="font-display text-6xl font-bold leading-[0.92] tracking-tight md:text-8xl">
            <span className="block overflow-hidden pb-2">
              <span className="hero-line block">Bibek</span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="hero-line block text-gradient-animated">Ram</span>
            </span>
          </h1>

          <p className="hero-fade mt-7 font-mono text-xs uppercase tracking-[0.28em] text-bio-300 md:text-sm">
            {profile.role}
            <span className="mx-2 text-muted">·</span>
            {profile.focus}
          </p>

          <p className="hero-fade mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.headline}
          </p>

          <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToAnchor('#research')}
              className="inline-flex items-center gap-2.5 rounded-full bg-bio-400 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-void transition-all hover:bg-bio-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.45)]"
            >
              Research
              <FlaskConical className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('#publications')}
              className="inline-flex items-center gap-2.5 rounded-full border border-bio-400/40 bg-bio-400/10 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-bio-300 transition-all hover:border-bio-400 hover:text-bio-400"
            >
              Publications
              <BookOpen className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToAnchor('#projects')}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-all hover:border-bio-400/60 hover:text-bio-300"
            >
              Projects
              <ArrowDown className="size-4" />
            </button>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-all hover:border-bio-400/60 hover:text-bio-300"
            >
              <Download className="size-4" />
              CV
            </a>
            <div className="flex items-center gap-2.5">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: profile.social.linkedin },
                { icon: Github, label: 'GitHub', href: profile.social.github },
                { icon: FileText, label: 'ResearchGate', href: profile.social.researchgate },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-muted transition-all hover:border-bio-400/60 hover:text-bio-300"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-fade mt-10 flex flex-wrap gap-3">
            <span className={chip}>2× IEEE Publications</span>
            <span className={chip}>Edge AI · Multimodal Sensing</span>
            <span className={chip}>Medical-Device R&amp;D</span>
          </div>
        </div>

        {/* Right — portrait */}
        <div ref={portraitRef} className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-bio-400/10 blur-3xl" />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="holo-corners relative h-full w-full overflow-hidden rounded-2xl border border-bio-400/25 bg-panel">
              <Image
                src={profile.avatar}
                alt="Portrait of Bibek Ram"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-transparent to-bio-400/10" />
              <div className="absolute inset-0 grid-bg opacity-40 mix-blend-overlay" />
              <div className="pointer-events-none absolute inset-x-0 h-1 animate-scan bg-gradient-to-r from-transparent via-bio-400/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 animate-blink rounded-full bg-pulse-400" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bio-300">
                    Subject // BIBEK RAM
                  </span>
                </div>
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.14em] text-muted">
                  SRMIST · B.TECH BIOMEDICAL ENGG
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="absolute -left-3 top-10 animate-float rounded-xl border border-bio-400/25 bg-panel/85 px-4 py-3 backdrop-blur-md md:-left-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Status</p>
              <p className="mt-0.5 font-mono text-xs text-bio-300">2× IEEE · Published</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="absolute -right-3 bottom-24 animate-float rounded-xl border border-pulse-400/25 bg-panel/85 px-4 py-3 backdrop-blur-md [animation-delay:1.2s] md:-right-10"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Academic</p>
              <p className="mt-0.5 font-mono text-xs text-pulse-400">B.Tech · Biomedical Engg</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ECG band */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex justify-center overflow-hidden opacity-35">
        <div className="flex w-max animate-ecg">
          {[0, 1].map((i) => (
            <svg
              key={i}
              width="620"
              height="36"
              viewBox="0 0 620 36"
              fill="none"
              className="text-bio-400"
            >
              <path
                d="M0 18 H212 L224 18 L234 5 L244 31 L254 18 H420 L434 18 L446 6 L458 30 L470 18 H620"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <span className="h-9 w-px overflow-hidden bg-white/10">
          <motion.span
            className="block h-3 w-px bg-bio-400"
            animate={{ y: [-12, 36] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </div>
    </section>
  );
}
