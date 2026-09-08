'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import StatusBadge from '@/components/research/StatusBadge';

const pillars = [
  {
    title: 'Medical Device Development',
    status: 'experience' as const,
    subs: ['Physiological Sensing', 'Embedded Systems', 'Intelligent Monitoring', 'Clinical Devices'],
  },
  {
    title: 'Medical Imaging',
    status: 'active' as const,
    subs: ['Image Processing', '3D Reconstruction', 'Image-Guided Systems', 'Clinical Visualization'],
  },
  {
    title: 'Neuroengineering',
    status: 'future' as const,
    subs: ['Neural Signals', 'Neural Interfaces', 'Brain–Machine Interfaces', 'Neurotechnology'],
  },
];

const HUB = { x: 500, y: 80, w: 360, h: 52 };
const NODE = [
  { x: 180, y: 250, w: 260, h: 52 },
  { x: 500, y: 250, w: 260, h: 52 },
  { x: 820, y: 250, w: 260, h: 52 },
];
const SINK = { x: 500, y: 468, w: 420, h: 52 };

function ConnectorPath({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="rgba(34,211,238,0.4)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeDasharray="7 9"
      className="data-flow"
      vectorEffect="non-scaling-stroke"
    />
  );
}

export default function ConvergenceMap() {
  const [active, setActive] = useState(-1);

  const connectorD = (x1: number, y1: number, x2: number, y2: number) =>
    `M${x1} ${y1} C ${x1} ${y1 + (y2 - y1) * 0.45}, ${x2} ${y1 + (y2 - y1) * 0.42}, ${x2} ${y2 - 8}`;

  return (
    <section id="convergence" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/4 size-[420px] rounded-full bg-bio-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="RESEARCH MAP // 02"
          title={
            <>
              Where My Research Interests <span className="text-gradient">Converge</span>
            </>
          }
          sub="My research interests lie at the intersection of medical device development, computational medical imaging, and neuroengineering — building toward intelligent, clinically translatable technologies for sensing, understanding, monitoring, and intervening in human biological systems."
        />

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Status key
          </span>
          <StatusBadge kind="experience" />
          <StatusBadge kind="active" />
          <StatusBadge kind="future" />
        </div>

        <div className="mt-14 hidden lg:block" aria-label="Research convergence map">
          <svg viewBox="0 0 1000 540" role="img" className="h-auto w-full">
            <title>Research convergence map</title>
            <desc>
              Translational biomedical engineering hub connecting medical device development,
              medical imaging, and neuroengineering, converging on clinically translatable
              technologies.
            </desc>

            {[
              connectorD(HUB.x, HUB.y + HUB.h, NODE[0].x, NODE[0].y),
              `M${HUB.x} ${HUB.y + HUB.h} L${NODE[1].x} ${NODE[1].y}`,
              connectorD(HUB.x, HUB.y + HUB.h, NODE[2].x, NODE[2].y),
              connectorD(NODE[0].x, NODE[0].y + NODE[0].h, SINK.x, SINK.y),
              `M${NODE[1].x} ${NODE[1].y + NODE[1].h} L${SINK.x} ${SINK.y}`,
              connectorD(NODE[2].x, NODE[2].y + NODE[2].h, SINK.x, SINK.y),
            ].map((d) => <ConnectorPath key={d} d={d} />)}

            <g>
              <rect x={HUB.x - HUB.w / 2} y={HUB.y} width={HUB.w} height={HUB.h} rx="14" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.5)" />
              <text x={HUB.x} y={HUB.y + 33} textAnchor="middle" fontSize="16" fill="#e6edf3" fontFamily="Space Grotesk, Inter, sans-serif" fontWeight="600">
                TRANSLATIONAL BIOMEDICAL ENGINEERING
              </text>
            </g>
            {pillars.map((pillar, i) => (
              <g
                key={pillar.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(-1)}
                opacity={active === -1 || active === i ? 1 : 0.35}
              >
                <rect x={NODE[i].x - NODE[i].w / 2} y={NODE[i].y} width={NODE[i].w} height={NODE[i].h} rx="12" fill="rgba(8,16,24,0.75)" stroke="rgba(34,211,238,0.45)" />
                <text x={NODE[i].x} y={NODE[i].y + 32} textAnchor="middle" fontSize="15" fill="#e6edf3" fontFamily="Space Grotesk, Inter, sans-serif" fontWeight="600">
                  {pillar.title.toUpperCase()}
                </text>
                {pillar.subs.map((sub, si) => (
                  <g key={sub}>
                    <circle cx={NODE[i].x - NODE[i].w / 2 + 14} cy={NODE[i].y + 74 + si * 26} r="2.6" fill="rgba(34,211,238,0.65)" />
                    <text x={NODE[i].x - NODE[i].w / 2 + 26} y={NODE[i].y + 78 + si * 26} fontSize="12.5" fill="#8ea3b8" fontFamily="Inter, sans-serif">
                      {sub}
                    </text>
                  </g>
                ))}
              </g>
            ))}
            <g opacity={active === -1 ? 1 : 0.55}>
              <rect x={SINK.x - SINK.w / 2} y={SINK.y} width={SINK.w} height={SINK.h} rx="14" fill="rgba(52,211,153,0.07)" stroke="rgba(52,211,153,0.45)" />
              <text x={SINK.x} y={SINK.y + 33} textAnchor="middle" fontSize="16" fill="#e6edf3" fontFamily="Space Grotesk, Inter, sans-serif" fontWeight="600">
                CLINICALLY TRANSLATABLE TECHNOLOGIES
              </text>
            </g>
          </svg>
        </div>
        <div className="mt-14 lg:hidden">
          <div className="grid gap-3">
            <div className="rounded-xl border border-bio-400/40 bg-bio-400/[0.06] px-4 py-3 text-center">
              <p className="font-display text-base font-semibold text-ink">
                Translational Biomedical Engineering
              </p>
            </div>
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-xl border border-white/10 bg-panel/60 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-ink">{pillar.title}</h3>
                  <StatusBadge kind={pillar.status} />
                </div>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {pillar.subs.map((sub) => (
                    <li
                      key={sub}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-muted"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-xl border border-pulse-400/40 bg-pulse-400/[0.05] px-4 py-3 text-center">
              <p className="font-display text-base font-semibold text-ink">
                Clinically Translatable Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}