import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/sections/Footer';
import ResearchHero from '@/components/research/ResearchHero';
import ConvergenceMap from '@/components/research/ConvergenceMap';
import PillarDevices from '@/components/research/PillarDevices';
import PillarImaging from '@/components/research/PillarImaging';
import PillarNeuro from '@/components/research/PillarNeuro';
import ResearchQuestions from '@/components/research/ResearchQuestions';
import SensingToIntervention from '@/components/research/SensingToIntervention';
import ResearchTrajectory from '@/components/research/ResearchTrajectory';
import ResearchStatement from '@/components/research/ResearchStatement';

export const metadata: Metadata = {
  title: 'Research | Bibek Ram — Biomedical Engineering Researcher',
  description:
    'A coherent research direction across medical device development, computational medical imaging, and neuroengineering — sensing, visualizing, understanding, and intervening in human biological systems.',
  openGraph: {
    type: 'website',
    title: 'Research — Bibek Ram | Biomedical Engineering',
    description:
      'Medical Devices × Medical Imaging × Neuroengineering — a translational biomedical engineering research direction.',
  },
};

export default function ResearchPage() {
  return (
    <main className="relative min-h-screen bg-void text-ink">
      <Navbar />
      <ScrollProgress />
      <ResearchHero />
      <ConvergenceMap />
      <PillarDevices />
      <PillarImaging />
      <PillarNeuro />
      <ResearchQuestions />
      <SensingToIntervention />
      <ResearchTrajectory />
      <ResearchStatement />
      <Footer />
    </main>
  );
}
