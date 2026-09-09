'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MonitorUp } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import StatusBadge from '@/components/research/StatusBadge';
import TagChips from '@/components/research/TagChips';
import FlowSteps from '@/components/research/FlowSteps';
import ExpandModule from '@/components/research/ExpandModule';
import { publicBasePath } from '@/data/profile';

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

function MonitorVisual() {
  return (
    <motion.div
      initial={{ scale: 1.04 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-bio-400/40 bg-abyss"
    >
      <Image
        src={`${publicBasePath}/research/medical-device.jpg`}
        alt="Medical device used in a clinical environment"
        fill
        sizes="(max-width: 1024px) 90vw, 560px"
        className="object-cover opacity-75 saturate-[0.8]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-bio-400/20 via-abyss/30 to-abyss/90" />
      <div className="absolute inset-0 grid-bg opacity-30 mix-blend-screen" />
      <div className="absolute inset-x-0 top-1/2 h-px animate-scan bg-gradient-to-r from-transparent via-bio-300 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-bio-200">
        <span>Clinical device // monitored</span>
        <span className="flex items-center gap-2"><i className="size-1.5 animate-blink rounded-full bg-pulse-400" /> Live</span>
      </div>
    </motion.div>
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
              href="/#projects"
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