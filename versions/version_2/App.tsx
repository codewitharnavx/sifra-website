import React from 'react';
import { useScrollState } from './hooks/useScrollState';
import { AutonomousCoreCanvas } from './components/3d/AutonomousCoreCanvas';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { MeetSifraSection } from './components/sections/MeetSifraSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { CapabilitiesSection } from './components/sections/CapabilitiesSection';
import { ProductExperienceSection } from './components/sections/ProductExperienceSection';
import { HardwareApiSection } from './components/sections/HardwareApiSection';
import { PrivacyDeploymentSection } from './components/sections/PrivacyDeploymentSection';
import { ClosingFooterSection } from './components/sections/ClosingFooterSection';

export function App() {
  const { progress, activeSection, sceneIndex, isReducedMotion, isMobile } = useScrollState();

  return (
    <div className="relative min-h-screen bg-obsidian text-white selection:bg-amber selection:text-obsidian font-sans overflow-x-hidden">
      {/* Background 3D Autonomous Research Engine Canvas / 2D Fallback */}
      <AutonomousCoreCanvas
        sceneIndex={sceneIndex}
        scrollProgress={progress}
        isReducedMotion={isReducedMotion}
        isMobile={isMobile}
      />

      {/* Persistent Architectural Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow: All 9 Redesigned Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <ProblemSection />
        <MeetSifraSection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <ProductExperienceSection />
        <HardwareApiSection />
        <PrivacyDeploymentSection />
      </main>

      {/* Reassembly Culmination & Footer */}
      <ClosingFooterSection />
    </div>
  );
}

export default App;
