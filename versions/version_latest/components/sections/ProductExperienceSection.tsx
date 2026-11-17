import React, { useState } from 'react';
import { ZoomIn, X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  tabLabel: string;
  title: string;
  caption: string;
  imageSrc: string;
  annotations: { label: string; desc: string }[];
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'welcome',
    tabLabel: '01. Welcome & Model Launch',
    title: 'The Sovereign Research Workspace',
    caption: 'Initial desktop launch interface displaying active Ollama daemon, hardware tier status, and quick research query presets.',
    imageSrc: '/assets/hero-welcome-screen.png',
    annotations: [
      { label: 'Active Ollama Model Selector', desc: 'Instant local model switching between Qwen 2.5, Llama 3.2, and DeepSeek-R1' },
      { label: 'Search Status Indicator', desc: 'Real-time Docker SearXNG bridge connection check' },
      { label: 'Research Query Starters', desc: 'Pre-configured research templates for architecture, benchmarking, and code exploration' },
    ],
  },
  {
    id: 'conversation',
    tabLabel: '02. Multi-Turn Dialogue',
    title: 'Contextual Multi-Turn Conversation View',
    caption: 'Full conversational dialogue view featuring prompt enhancement, multi-turn pronoun resolution, and contextual follow-ups.',
    imageSrc: '/assets/chat-conversation-view.png',
    annotations: [
      { label: 'Dynamic Prompt Enhancer', desc: 'Automatically restructures vague inquiries into optimal technical search prompts' },
      { label: 'Conversational Continuity', desc: 'Maintains dialogue context while resolving ambiguous follow-up pronouns' },
      { label: 'Markdown Code Rendering', desc: 'Syntax-highlighted code blocks with copy-to-clipboard functionality' },
    ],
  },
  {
    id: 'citations',
    tabLabel: '03. Grounded Citations',
    title: 'Verified Reference Cards & Footnotes',
    caption: 'Deep research answers accompanied by interactive citation badges, verified URL previews, and BM25 relevance scores.',
    imageSrc: '/assets/chat-citations.png',
    annotations: [
      { label: 'Numbered Citation Badges', desc: 'Direct clickable links back to original canonical web sources' },
      { label: 'BM25 Relevance Scoring', desc: 'Source rank derived from statistical BM25 algorithm over retrieved candidate passages' },
      { label: 'Sanitized Snippets', desc: 'Scrubbed of tracking parameters and ads before model ingestion' },
    ],
  },
  {
    id: 'hardware',
    tabLabel: '04. Hardware Modal',
    title: 'Host GPU VRAM Detection & Tier Classification',
    caption: 'Real-time system diagnostics modal querying host hardware to classify models into Optimal, Compatible, and Heavy tiers.',
    imageSrc: '/assets/hardware-model-modal.png',
    annotations: [
      { label: 'Automated VRAM Discovery', desc: 'Queries nvidia-smi, Apple Metal, or Windows CIM for exact physical VRAM' },
      { label: 'Model Tier Guidance', desc: 'Prevents out-of-memory crashes by marking heavy models clearly' },
      { label: 'Quantization Advice', desc: 'Recommends 4-bit, 8-bit, or FP16 models matching available host memory' },
    ],
  },
  {
    id: 'memory',
    tabLabel: '05. Autonomous Memory',
    title: 'Durable User Facts & Memory Management',
    caption: 'Dedicated memory bank modal displaying extracted user preferences, development stack facts, and hardware configurations.',
    imageSrc: '/assets/memory-modal.png',
    annotations: [
      { label: 'Autonomous Extraction', desc: 'Captures facts across conversation turns without explicit prompting' },
      { label: 'Manual Fact Editing', desc: 'Delete, edit, or pin specific preferences at any time' },
      { label: 'Credential Blocking', desc: 'Built-in regex heuristics actively prevent passwords and tokens from persisting' },
    ],
  },
];

export const ProductExperienceSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(SHOWCASE_ITEMS[0].id);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeItem = SHOWCASE_ITEMS.find((item) => item.id === activeTabId) || SHOWCASE_ITEMS[0];

  return (
    <section id="product-experience" className="relative py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10">
      {/* Editorial Header */}
      <div className="max-w-4xl mb-16">
        <span className="text-amber font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
          The Product in Action
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
          The SIFRA research workspace.
        </h2>
        <p className="text-base sm:text-lg text-stone mt-4 max-w-2xl leading-relaxed">
          Inspect genuine application captures from the running SIFRA desktop workspace.
          From model auto-discovery to live multi-turn research dialogues and verified web citation footnotes.
        </p>
      </div>

      {/* Workflow Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {SHOWCASE_ITEMS.map((item) => {
          const isActive = activeTabId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTabId(item.id)}
              className={`px-5 py-3 rounded-xl border font-mono text-xs whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber text-obsidian border-amber font-bold shadow-subtle-elevation'
                  : 'bg-graphite border-hairline text-stone hover:text-white hover:border-amber/40'
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Main Expansive Product Frame */}
      <div className="rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline overflow-hidden shadow-2xl">
        {/* Browser Chrome Header */}
        <div className="px-6 py-4 bg-charcoal/80 border-b border-hairline flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-obsidian border border-hairline" />
            <span className="w-3 h-3 rounded-full bg-obsidian border border-hairline" />
            <span className="w-3 h-3 rounded-full bg-obsidian border border-hairline" />
            <span className="ml-3 font-mono text-xs text-stone-dark">http://localhost:5173 — SIFRA Local Workspace</span>
          </div>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian border border-hairline text-stone hover:text-white font-mono text-xs transition-colors"
          >
            <ZoomIn className="w-3.5 h-3.5 text-amber" />
            <span>Full Resolution</span>
          </button>
        </div>

        {/* Screenshot Viewport (Large Scale) */}
        <div className="relative bg-obsidian p-4 sm:p-10 flex items-center justify-center">
          <img
            src={activeItem.imageSrc}
            alt={activeItem.title}
            className="w-full max-h-[720px] object-contain rounded-xl border border-hairline shadow-subtle-elevation"
          />
        </div>

        {/* Real Interface Annotations Bar */}
        <div className="p-8 sm:p-10 bg-graphite/60 border-t border-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h3 className="text-xl font-bold text-white mb-2">{activeItem.title}</h3>
              <p className="text-sm text-stone leading-relaxed font-normal">
                {activeItem.caption}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeItem.annotations.map((ann, i) => (
                <div key={i} className="p-4 rounded-xl bg-obsidian/70 border border-hairline">
                  <div className="text-xs font-mono font-bold text-amber mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{ann.label}</span>
                  </div>
                  <div className="text-[11px] text-stone leading-relaxed">
                    {ann.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-md p-4 sm:p-8 flex flex-col justify-center items-center">
          <div className="w-full max-w-6xl flex items-center justify-between pb-4 border-b border-hairline text-white">
            <span className="font-mono text-sm font-bold">{activeItem.title}</span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-lg bg-graphite border border-hairline hover:bg-charcoal text-stone hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full max-w-6xl flex-1 flex items-center justify-center p-4 overflow-auto">
            <img
              src={activeItem.imageSrc}
              alt={activeItem.title}
              className="max-w-full max-h-[85vh] object-contain rounded-xl border border-hairline"
            />
          </div>
        </div>
      )}
    </section>
  );
};
