'use client';

/**
 * Reports whether the user prefers reduced motion. Read at render time on the
 * client (returns false during SSR where `matchMedia` does not exist).
 * Follows the existing `window.matchMedia` convention used across the site.
 */
export default function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}