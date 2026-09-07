'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/profile';

type LenisLike = { scrollTo: (target: string | HTMLElement, opts?: object) => void };

function scrollToAnchor(href: string) {
  const target = document.querySelector(href);
  if (!target) return;
  const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { offset: -76 });
  } else {
    (target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_8px_40px_rgba(0,0,0,0.45)]' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="relative grid size-9 place-items-center rounded-lg border border-bio-400/40 bg-bio-400/10 text-bio-300">
            <Activity className="size-4 transition-transform duration-500 group-hover:rotate-180" />
          </span>
          <span className="font-display text-lg font-semibold tracking-[0.18em]">
            BIBEK<span className="text-bio-400">.RAM</span>
          </span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAnchor(link.href);
                }}
                className="group relative font-mono text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-bio-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-abyss md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      scrollToAnchor(link.href);
                    }}
                    className="block rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-[0.2em] text-muted hover:bg-white/5 hover:text-bio-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}