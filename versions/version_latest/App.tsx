import React from 'react';
import { useScrollState } from './hooks/useScrollState';
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
  const { activeSection } = useScrollState();

  return (
    <div className="relative min-h-screen bg-obsidian text-white selection:bg-amber selection:text-obsidian font-sans overflow-x-hidden">
      {/* Persistent Architectural Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Flow: Distinct, Art-Directed Visual Compositions */}
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

      {/* Cinematic Reassembly Culmination & Footer */}
      <ClosingFooterSection />
    </div>
  );
}

export default App;
