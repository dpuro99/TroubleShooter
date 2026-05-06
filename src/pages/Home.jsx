import NavBar from '@/components/troubleshooter/NavBar';
import HeroSection from '@/components/troubleshooter/HeroSection';
import ProblemSection from '@/components/troubleshooter/ProblemSection';
import SolutionSection from '@/components/troubleshooter/SolutionSection';
import HowItWorksSection from '@/components/troubleshooter/HowItWorksSection';
import HardwareSection from '@/components/troubleshooter/HardwareSection';
import FutureSection from '@/components/troubleshooter/FutureSection';
import MarketSection from '@/components/troubleshooter/MarketSection';
import FooterSection from '@/components/troubleshooter/FooterSection';

export default function Home() {
  return (
    <div className="bg-void min-h-screen">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <HardwareSection />
      <FutureSection />
      <MarketSection />
      <FooterSection />
    </div>
  );
}