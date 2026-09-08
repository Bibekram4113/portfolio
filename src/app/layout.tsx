import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const publicBasePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Bibek Ram | Biomedical Engineering Researcher | Intelligent Medical Devices & Biomedical AI',
  description:
    'Biomedical Engineering researcher working on intelligent medical devices, biomedical signal processing, multimodal sensing, embedded systems, and edge AI for healthcare. Two peer-reviewed IEEE publications. B.Tech. Biomedical Engineering, SRM Institute of Science and Technology.',
  keywords: [
    'Biomedical Engineering',
    'Biomedical Signal Processing',
    'Multimodal Sensing',
    'Intelligent Medical Devices',
    'Edge AI Healthcare',
    'Medical Imaging AI',
    'Medical Device R&D',
    'Bibek Ram',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Bibek Ram — Biomedical Engineer & Medical AI Researcher',
    description:
      'Cinematic portfolio of a biomedical engineer building safer, smarter medical devices.',
    siteName: 'Bibek Ram',
    images: [{ url: `${publicBasePath}/portrait.png`, width: 960, height: 960, alt: 'Bibek Ram' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020609',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}