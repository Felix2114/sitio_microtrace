import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ValueSection } from "./components/ValueSection";
import { ScienceSection } from "./components/ScienceSection";
import { TRLSection } from "./components/TRLSection";
import { ImpactSection } from "./components/ImpactSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#071A2F]" style={{ fontFamily: "Manrope, system-ui, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ValueSection />
      <ScienceSection />
      <TRLSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
