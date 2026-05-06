import NavBar from '@/components/troublershooter/NavBar';
import HeroSection from '@/components/troublershooter/HeroSection';
import ProblemSection from '@/components/troublershooter/ProblemSection';
import SolutionSection from '@/components/troublershooter/SolutionSection';
import HowItWorksSection from '@/components/troublershooter/HowItWorksSection';
import HardwareSection from '@/components/troublershooter/HardwareSection';
import FutureSection from '@/components/troublershooter/FutureSection';
import MarketSection from '@/components/troublershooter/MarketSection';
import FooterSection from '@/components/troublershooter/FooterSection';

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