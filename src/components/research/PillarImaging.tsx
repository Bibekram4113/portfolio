'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ScanLine } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import StatusBadge from '@/components/research/StatusBadge';
import TagChips from '@/components/research/TagChips';
import FlowSteps from '@/components/research/FlowSteps';
import ExpandModule from '@/components/research/ExpandModule';
import { publicBasePath } from '@/data/profile';

const tags = [
  'Medical Image Processing', '3D Visualization', '3D Reconstruction',
  'Image-Guided Intervention', 'Medical Navigation', 'Computational Imaging',
  'Segmentation', 'Clinical Visualization',
];

const clinicalFlow = [
  'Medical Imaging',
  'Patient-Specific Anatomy',
  'Registration',
  'Navigation',
  'Clinical Workflow',
  'Neurosurgical Decision Support',
];

function ImagingVisual() {
  return (
    <motion.div
      initial={{ scale: 1.04 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-pulse-400/40 bg-abyss"
    >
      <Image
        src={`${publicBasePath}/research/medical-imaging.jpg`}
        alt="Medical imaging scan displayed for clinical analysis"
        fill
        sizes="(max-width: 1024px) 90vw, 560px"
        className="object-cover opacity-75 grayscale saturate-150"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-abyss/90 via-transparent to-pulse-400/20" />
      <div className="absolute inset-0 grid-bg opacity-25 mix-blend-screen" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-pulse-300/60" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-pulse-300/60" />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-pulse-200">
        <span>Scan // segmentation</span>
        <span>3D reconstruction</span>
      </div>
    </motion.div>
  );
}

export default function PillarImaging() {
  return (
    <section id="pillar-imaging" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pulse-400/40 to-transparent" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[420px] rounded-full bg-pulse-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="RESEARCH PILLAR 02 // MEDICAL IMAGING"
          title={
            <>
              Medical <span className="text-gradient">Imaging</span>
            </>
          }
          sub="Turning medical images into actionable representations of anatomy and clinical information."
        />

        <div className="flex flex-wrap gap-2.5">
          <StatusBadge kind="active" />
          <StatusBadge kind="experience" />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="leading-relaxed text-muted">
              I am interested in computational medical imaging, 3D visualization, image analysis,
              image-guided technologies, and the use of imaging data to support clinically
              meaningful planning, navigation, and intervention.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              My hands-on imaging work so far spans chest X-ray classification and thermal-image
              analysis within multimodal biomedical systems — a foundation I am actively exploring
              toward segmentation, 3D reconstruction, and image-guided workflows.
            </p>

            <div className="mt-7 rounded-2xl border border-pulse-400/25 bg-gradient-to-r from-panel via-pulse-400/[0.05] to-panel p-5">
              <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-pulse-400">
                <ScanLine className="size-3.5" aria-hidden="true" />
                Clinical Technology Context
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The workflow below shows how imaging moves beyond visualization toward clinical
                action — patient-specific anatomy, registration, navigation, and decision support.
                My direct experience sits in medical-imaging research and clinical-context
                engineering (hospital-site clinical benchmarking during the BIS internship, and
                patient-monitoring device R&amp;D), which frames my interest in image-guided
                technology rather than claiming development of navigation systems themselves.
              </p>
            </div>

            <div className="mt-7">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-bio-400">
                Areas of interest
              </p>
              <TagChips tags={tags} />
            </div>

            <div className="mt-7">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Evidence // Project connection
              </p>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-pulse-400/30 bg-pulse-400/10 px-3.5 py-2 font-mono text-xs text-pulse-400 transition-colors hover:border-pulse-400/60"
              >
                Multimodal Tuberculosis Screening — Chest X-ray
                <ArrowUpRight className="size-3.5" />
              </Link>
              <p className="mt-2 text-xs text-muted/80">
                Chest X-ray classification within a multimodal pipeline (see Projects).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-pulse-400/20 bg-panel/40 p-5">
              <ImagingVisual />
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-pulse-400">
                Clinical technology workflow
              </p>
              <FlowSteps steps={clinicalFlow} accent="pulse" />
            </div>
          </motion.div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <ExpandModule title="Core research questions">
            <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
              <li className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-pulse-400/70" />
                How can medical images move beyond representation to support planning, navigation, and intervention?
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-pulse-400/70" />
                How can segmentation and 3D reconstruction be made robust across the variability of real clinical data?
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-pulse-400/70" />
                How can imaging-derived anatomical models integrate with decision support in time-critical clinical workflows?
              </li>
            </ul>
          </ExpandModule>
          <ExpandModule title="Related work & future direction">
            <p className="text-sm leading-relaxed text-muted">
              Related project work: chest X-ray classification (Multimodal Tuberculosis Screening)
              and thermal-image analysis (Multimodal Emotion Recognition). Future research
              direction: computational imaging, 3D reconstruction, and image-guided technology at
              the graduate level.
            </p>
          </ExpandModule>
        </div>
      </div>
    </section>
  );
}