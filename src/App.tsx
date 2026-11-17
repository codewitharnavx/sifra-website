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
  const { activeSection, isDarkSection } = useScrollState();

  return (
    <div className="relative min-h-screen bg-surface-warm text-content-primary selection:bg-amber-light selection:text-white font-sans overflow-x-hidden antialiased">
      {/* Adaptive Apple/Linear Navigation */}
      <Navbar activeSection={activeSection} isDarkSection={isDarkSection} />

      {/* Main Editorial Flow */}
      <main className="relative flex flex-col">
        {/* Section 01: Hero (Light / Warm Paper) */}
        <HeroSection />

        {/* Section 02: The Problem (Soft Grey) */}
        <ProblemSection />

        {/* Section 03: Meet SIFRA / Architecture (Deep Charcoal / Blueprint) */}
        <MeetSifraSection />

        {/* Section 04: How It Works / 5-Stage Pipeline (Warm Paper) */}
        <HowItWorksSection />

        {/* Section 05: Core Capabilities (Pure White / Bento Showcase) */}
        <CapabilitiesSection />

        {/* Section 06: The SIFRA Application Experience (Deep Charcoal / Large Screenshots) */}
        <ProductExperienceSection />

        {/* Section 07: Hardware Intelligence & Developer API (Soft Grey / Interactive Code & Sim) */}
        <HardwareApiSection />

        {/* Section 08: Privacy & Deployment Architecture (Deep Charcoal / Clear Boundary Diagram) */}
        <PrivacyDeploymentSection />
      </main>

      {/* Section 09: Closing & Technical Footer */}
      <ClosingFooterSection />
    </div>
  );
}

export default App;
