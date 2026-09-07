import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutHologram from '@/components/sections/AboutHologram';
import ResearchInterests from '@/components/sections/ResearchInterests';
import Publications from '@/components/sections/Publications';
import ResearchExperience from '@/components/sections/ResearchExperience';
import ResearchApproach from '@/components/sections/ResearchApproach';
import IndustryTimeline from '@/components/sections/IndustryTimeline';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import Recognition from '@/components/sections/Recognition';
import Certifications from '@/components/sections/Certifications';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void text-ink">
      <Navbar />
      <HeroSection />
      <AboutHologram />
      <ResearchInterests />
      <Publications />
      <ResearchExperience />
      <ResearchApproach />
      <IndustryTimeline />
      <ProjectShowcase />
      <Recognition />
      <Certifications />
      <Footer />
    </main>
  );
}
