import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const publicBasePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const siteBaseUrl = `${siteUrl}${publicBasePath}`;

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
    'SRMIST',
    'IEEE Publications',
  ],
  authors: [{ name: 'Bibek Ram', url: 'https://github.com/Bibekram4113' }],
  creator: 'Bibek Ram',
  publisher: 'Bibek Ram',
  alternates: {
    canonical: `${publicBasePath || ''}/`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteBaseUrl,
    title: 'Bibek Ram — Biomedical Engineer & Medical AI Researcher',
    description:
      'Cinematic portfolio of a biomedical engineer building safer, smarter medical devices.',
    siteName: 'Bibek Ram',
    images: [{ url: `${publicBasePath}/portrait.png`, width: 960, height: 960, alt: 'Bibek Ram' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bibek Ram — Biomedical Engineer & Medical AI Researcher',
    description:
      'Cinematic portfolio of a biomedical engineer building safer, smarter medical devices.',
    images: [`${publicBasePath}/portrait.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bibek Ram',
    jobTitle: 'Biomedical Engineering Researcher',
    url: siteBaseUrl,
    image: `${publicBasePath}/portrait.png`,
    description:
      'Biomedical Engineering researcher working on intelligent medical devices, biomedical signal processing, multimodal sensing, embedded systems, and edge AI for healthcare.',
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'SRM Institute of Science and Technology',
    },
    knowsAbout: [
      'Biomedical Engineering',
      'Biomedical Signal Processing',
      'Multimodal Sensing',
      'Intelligent Medical Devices',
      'Edge AI Healthcare',
      'Medical Imaging AI',
      'Medical Device R&D',
      'Embedded Systems',
    ],
    sameAs: [
      'https://www.linkedin.com/in/bibekram-09aab4273',
      'https://github.com/Bibekram4113',
      'https://www.researchgate.net/profile/Bibek-Ram',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${publicBasePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${publicBasePath}/portrait.png`} />
        <meta name="theme-color" content="#020609" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}