'use client';

import Link from 'next/link';
import { publicBasePath } from '@/data/profile';
import { motion } from 'framer-motion';
import { ArrowUpRight, MonitorUp } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import StatusBadge from '@/components/research/StatusBadge';
import TagChips from '@/components/research/TagChips';
import FlowSteps from '@/components/research/FlowSteps';
import ExpandModule from '@/components/research/ExpandModule';

const tags = [
  'Physiological Monitoring', 'ECG', 'SpO₂', 'NIBP', 'Respiratory Rate', 'Temperature',
  'Embedded Systems', 'Medical Device Design', 'V&V', 'Risk Management',
  'ISO 13485', 'ISO 14971', 'IEC 60601', 'CDSCO', 'FDA',
];

const process = [
  'Clinical Need',
  'Requirements',
  'System Architecture',
  'Biomedical Sensing',
  'Embedded / Firmware Development',
  'Prototype',
  'Verification & Validation',
  'Risk Management',
  'Regulatory Translation',
];

/** Abstract patient-monitor concept — schematic, not a photograph. */
function MonitorVisual() {
  return (
    <svg
      viewBox="0 0 320 250"
      role="img"
      className="h-auto w-full text-bio-300"
      aria-label="Schematic multiparameter patient monitor"
    >
      <title>Schematic patient monitor</title>
      <rect x="14" y="10" width="292" height="230" rx="12" fill="rgba(8,16,24,0.85)" stroke="rgba(34,211,238,0.4)" />
      <rect x="26" y="24" width="264" height="158" rx="6" fill="rgba(2,6,9,0.6)" stroke="rgba(140,170,200,0.12)" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="32" y1={52 + i * 40} x2="284" y2={52 + i * 40} stroke="rgba(140,170,200,0.08)" />
      ))}
      <polyline
        points="32,150 58,148 84,152 108,128 122,162 140,150 168,146 194,136 208,158 230,148 258,150 284,152"
        fill="none"
        stroke="rgba(34,211,238,0.8)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <polyline
        points="32,150 58,148 84,152 108,128 122,162 140,150 168,146 194,136 208,158 230,148 258,150 284,152"
        fill="none"
        stroke="rgba(34,211,238,0.5)"
        strokeWidth="1.2"
        strokeDasharray="4 8"
        className="data-flow"
      />
      <circle cx="284" cy="34" r="2.6" fill="rgba(52,211,153,0.9)" className="trace-blink" />
      {[
        ['ECG', '72 bpm'],
        ['SpO₂', '98 %'],
        ['NIBP', '120/80'],
        ['TEMP', '36.8 °C'],
      ].map(([k, v], i) => (
        <g key={k}>
          <text x="36" y={202 + i * 10} fontSize="7.5" fill="#8ea3b8" fontFamily="JetBrains Mono, monospace">
            {k}
          </text>
          <text x="120" y={202 + i * 10} fontSize="7.5" fill="#e6edf3" fontFamily="JetBrains Mono, monospace">
            {v}
          </text>
        </g>
      ))}
      <text x="40" y="245" fontSize="7.5" fill="rgba(34,211,238,0.55)" fontFamily="JetBrains Mono, monospace">
        CONCEPT // MULTIPARAMETER MONITOR
      </text>
    </svg>
  );
}

export default function PillarDevices() {
  return (
    <section id="pillar-devices" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-400/40 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[420px] rounded-full bg-bio-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="RESEARCH PILLAR 01 // MEDICAL DEVICE DEVELOPMENT"
          title={
            <>
              Medical Device <span className="text-gradient">Development</span>
            </>
          }
          sub="Engineering clinically relevant medical technologies — from concept to validation."
        />

        <div className="flex flex-wrap gap-2.5">
          <StatusBadge kind="experience" />
          <StatusBadge kind="active" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="leading-relaxed text-muted">
              My interest in medical device development is rooted in translating clinical
              requirements into engineered systems — through requirements definition, biomedical
              system design, embedded development, prototyping, verification and validation, risk
              management, and regulatory considerations.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              This is the direction I practice hands-on today: as a Biomedical R&amp;D Engineer I
              work on patient-monitoring systems inside a regulated medical-device environment,
              applying requirements-driven engineering from early prototyping through system-level
              verification.
            </p>

            <div className="mt-7">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-bio-400">
                Relevant technologies &amp; methodologies
              </p>
              <TagChips tags={tags} />
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <MonitorUp className="size-4 text-bio-300" />
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Evidence // Project connection
              </p>
            </div>
            <Link
              href={`${publicBasePath}/#projects`}
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-bio-400/30 bg-bio-400/10 px-3.5 py-2 font-mono text-xs text-bio-300 transition-colors hover:border-bio-400/60"
            >
              Multiparameter Patient Monitoring System
              <ArrowUpRight className="size-3.5" />
            </Link>
            <p className="mt-2 text-xs text-muted/80">
              Medical-device R&amp;D programme — Invitronics Medtech (see Projects).
            </p>
            <div className="mt-8 space-y-3">
              <ExpandModule title="Core research questions">
                <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                  <li className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-bio-400/70" />
                    How can patient-monitoring devices move beyond measurement toward clinically actionable insight?
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-bio-400/70" />
                    How can embedded computation, physiological sensing, and device communication be integrated under real clinical constraints?
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-bio-400/70" />
                    How do verification, risk management, and regulatory requirements shape device architecture from the first requirements document?
                  </li>
                </ul>
              </ExpandModule>
              <ExpandModule title="Related projects">
                <p className="text-sm leading-relaxed text-muted">
                  Multiparameter Patient Monitoring System — R&amp;D programme at Invitronics Medtech
                  (embedded firmware, device communication, biomedical signal processing).
                </p>
              </ExpandModule>
              <ExpandModule title="Clinical connection & future direction">
                <p className="text-sm leading-relaxed text-muted">
                  Working within a regulated medical-device R&amp;D environment (ISO 13485, ISO 14971,
                  IEC 60601/62304, CDSCO framework) grounds this direction in clinical engineering
                  reality. Looking ahead, I am interested in investigating intelligent patient
                  monitoring, closed-loop delivery systems, and embedded edge-AI decision support
                  integrated into medical devices.
                </p>
              </ExpandModule>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-bio-400/20 bg-panel/40 p-5">
              <MonitorVisual />
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-bio-400">
                Development process
              </p>
              <FlowSteps steps={process} accent="bio" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}