'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUp, FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { navLinks, profile } from '@/data/profile';

type LenisLike = {
  scrollTo: (target: number | string | HTMLElement, opts?: object) => void;
};

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: profile.social.linkedin },
  { icon: Github, label: 'GitHub', href: profile.social.github },
  { icon: FileText, label: 'ResearchGate', href: profile.social.researchgate },
];

export default function Footer() {
  const scrollTop = () => {
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pulse-400/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-24 size-[560px] -translate-x-1/2 rounded-full bg-bio-400/[0.06] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
        >
          Let&apos;s advance <span className="text-gradient">intelligent healthcare</span>{' '}
          technology together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-center text-muted"
        >
          I am interested in biomedical research, intelligent medical devices, multimodal sensing,
          biomedical AI, and translational healthcare technology. I am a research enthusiast in
          biomedical engineering. The most reliable way to reach me is by email.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-bio-400 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-void transition-all hover:bg-bio-300 hover:shadow-[0_0_36px_rgba(34,211,238,0.45)]"
          >
            <Mail className="size-4" />
            {profile.email}
          </a>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-all hover:border-bio-400/60 hover:text-bio-300"
          >
            <FileText className="size-4" />
            Curriculum Vitae
          </a>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
            {
              icon: Phone,
              label: 'Phone',
              value: profile.phone,
              href: `tel:${profile.phone.replace(/\s/g, '')}`,
            },
            { icon: MapPin, label: 'Location', value: profile.location },
          ].map((item, i) => {
            const content = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-bio-400/30 bg-bio-400/10 text-bio-300 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </p>
                  <p className="truncate text-sm text-ink">{item.value}</p>
                </div>
              </>
            );
            const className =
              'group flex items-center gap-4 rounded-xl border border-white/10 bg-panel/50 p-5 transition-colors hover:border-bio-400/40';
            const motionProps = {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-60px' },
              transition: { duration: 0.5, delay: i * 0.08 },
              className,
            };

            return item.href ? (
              <motion.a key={item.label} href={item.href} {...motionProps}>
                {content}
              </motion.a>
            ) : (
              <motion.div key={item.label} {...motionProps}>
                {content}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 animate-blink rounded-full bg-pulse-400" />
            <p className="font-mono text-xs tracking-[0.18em] text-muted">
              © {new Date().getFullYear()} BIBEK RAM · CRAFTED WITH BIOMEDICAL PRECISION
            </p>
          </div>

          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) {
                        const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
                        if (lenis) {
                          lenis.scrollTo(target as HTMLElement, { offset: -76 });
                        } else {
                          (target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }
                  }}
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-bio-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-muted transition-all hover:border-bio-400/50 hover:text-bio-300"
              >
                <s.icon className="size-[18px]" />
              </a>
            ))}
            <button
              type="button"
              onClick={scrollTop}
              aria-label="Back to top"
              className="grid size-10 place-items-center rounded-lg border border-bio-400/30 bg-bio-400/10 text-bio-300 transition-all hover:bg-bio-400 hover:text-void"
            >
              <ArrowUp className="size-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
