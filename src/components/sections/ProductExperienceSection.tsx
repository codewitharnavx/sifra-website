import React, { useState } from 'react';
import { Monitor, MessageSquare, Layers, Cpu, Database, ExternalLink, ArrowRight } from 'lucide-react';

interface ScreenshotTab {
  id: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  badge: string;
  highlights: string[];
}

const TABS: ScreenshotTab[] = [
  {
    id: 'citations',
    label: 'Grounded Citations',
    title: 'Grounded Research with Interactive Citations',
    description:
      'The core research view in SIFRA. Every claim synthesized by local models is tagged with clickable inline citations linked directly to verified search results, source URLs, and scraped snippets.',
    imageSrc: '/assets/chat-citations.png',
    badge: 'Core UI • Chat & Citations',
    highlights: [
      'Numbered citation badges ([1], [2]) linked to real source cards',
      'SearXNG multi-engine aggregation preview with clean metadata',
      'Local inference with zero telemetry transmission',
    ],
  },
  {
    id: 'welcome',
    label: 'Welcome & Prompts',
    title: 'Minimalist Workspace & Prompt Enhancement',
    description:
      'The initial launchpad. Clean, clutter-free research input with quick-start query templates, prompt enhancement controls, and automatic model readiness indicators.',
    imageSrc: '/assets/hero-welcome-screen.png',
    badge: 'Launchpad • Prompt Workspace',
    highlights: [
      'Clean single-page interface running at localhost:5000',
      'Automated prompt enhancement via local LLM',
      'One-click deep research mode activation',
    ],
  },
  {
    id: 'conversation',
    label: 'Deep Conversation',
    title: 'Multi-Turn Context & Session Memory',
    description:
      'Iterative research sessions where SIFRA retains conversation state, references prior search results, and maintains source fidelity across continuous technical investigations.',
    imageSrc: '/assets/chat-conversation-view.png',
    badge: 'Interaction • Multi-Turn Session',
    highlights: [
      'Continuous chat history saved in local SQLite storage',
      'Collapsible reasoning traces for models with thinking capability',
      'Source attribution preserved across multiple conversational turns',
    ],
  },
  {
    id: 'hardware',
    label: 'Hardware Profiling',
    title: 'Hardware-Aware Model Recommendation Modal',
    description:
      'SIFRA automatically detects host system specifications (CPU cores, RAM, GPU VRAM) and provides precise model recommendations, warning users before loading models that would cause swapping.',
    imageSrc: '/assets/hardware-model-modal.png',
    badge: 'Diagnostics • Hardware Inspector',
    highlights: [
      'Live host RAM and GPU VRAM calculation',
      'Color-coded tier recommendations (Optimal, Acceptable, Swapping Warning)',
      'One-click model pull instructions directly for Ollama',
    ],
  },
  {
    id: 'memory',
    label: 'Local Memory',
    title: 'Personal Research Memory Modal',
    description:
      'Manage what SIFRA remembers across research sessions. Review, edit, or purge persistent memory facts locally without syncing with remote servers.',
    imageSrc: '/assets/memory-modal.png',
    badge: 'Persistence • Memory Manager',
    highlights: [
      'Local persistent key-value memory store',
      'Total user control: inspect, edit, or delete any recalled fact',
      'Stored offline in data/memory.json with zero cloud synchronization',
    ],
  },
];

export const ProductExperienceSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('citations');
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section id="product-experience" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark text-content-inversePrimary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated border border-dark-border text-amber text-xs font-mono uppercase tracking-widest mb-4">
            <span>06</span>
            <span>•</span>
            <span>Actual Product Interface</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            The SIFRA Application Experience.
          </h2>
          <p className="text-base sm:text-lg text-content-inverseSecondary leading-relaxed font-normal">
            SIFRA is not a conceptual mockup. It is a fully functioning, beautiful research tool
            running in your browser at <span className="font-mono text-white">localhost:5000</span>.
          </p>
        </div>

        {/* Tab Navigation Controls (Apple Segmented Bar Style) */}
        <div className="flex items-center gap-1.5 p-1 rounded-squircle-md bg-dark-graphite border border-dark-border mb-8 overflow-x-auto">
          {TABS.map((tab) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-dark-elevated text-white font-semibold border border-dark-border shadow-apple-dark-sm'
                    : 'text-content-inverseTertiary hover:text-white hover:bg-dark-elevated/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Primary Product Showcase Window (Apple Mac Glass Aesthetic) */}
        <div className="rounded-squircle-xl bg-dark-graphite border border-dark-border shadow-apple-dark-lg overflow-hidden">
          {/* Window Chrome Header */}
          <div className="px-5 py-3.5 bg-dark border-b border-dark-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 text-xs font-mono text-content-inverseTertiary">
                SIFRA Workspace • http://localhost:5000
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-amber">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              <span>{activeTab.badge}</span>
            </div>
          </div>

          {/* Screenshot Presentation Canvas */}
          <div className="p-4 sm:p-8 bg-dark/60 flex flex-col items-center">
            <div className="w-full rounded-squircle-md overflow-hidden border border-dark-border shadow-apple-dark-md bg-black">
              <img
                src={activeTab.imageSrc}
                alt={activeTab.title}
                className="w-full h-auto object-cover max-h-[640px] transition-opacity duration-300"
                loading="lazy"
              />
            </div>

            {/* Contextual Detail Bar */}
            <div className="w-full mt-6 pt-6 border-t border-dark-border grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-left">
              <div className="md:col-span-6">
                <h4 className="text-lg font-bold text-white mb-2">{activeTab.title}</h4>
                <p className="text-xs sm:text-sm text-content-inverseSecondary leading-relaxed font-normal">
                  {activeTab.description}
                </p>
              </div>

              <div className="md:col-span-6 space-y-2">
                <span className="text-[11px] font-mono text-content-inverseTertiary uppercase tracking-wider block mb-2">
                  Key Verification Points
                </span>
                {activeTab.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-mono text-content-inversePrimary">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
