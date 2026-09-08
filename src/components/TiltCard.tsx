'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Professional 3D tilt wrapper: perspective tilt + moving glare on hover.
 * Automatically disabled on touch devices and for keyboard/reduced-motion users.
 */
export default function TiltCard({
  children,
  className = '',
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useRef(false);

  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), {
    stiffness: 220,
    damping: 22,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), {
    stiffness: 220,
    damping: 22,
    mass: 0.6,
  });
  const glareX = useTransform(px, [-0.5, 0.5], ['18%', '82%']);
  const glareY = useTransform(py, [-0.5, 0.5], ['18%', '82%']);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    enabled.current = fine.matches && !reduced.matches;
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 [background:radial-gradient(320px_circle_at_var(--gx)_var(--gy),rgba(34,211,238,0.10),transparent_65%)] group-hover:opacity-100"
        style={
          {
            '--gx': glareX,
            '--gy': glareY,
          } as React.CSSProperties
        }
      />
    </motion.div>
  );
}
