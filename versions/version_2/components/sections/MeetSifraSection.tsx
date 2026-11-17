import React, { useState } from 'react';
import { Cpu, Search, Database, MemoryStick, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface Pillar {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  codeTag: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'ai-engine',
    icon: Cpu,
    title: 'Local AI Reasoning Engine',
    subtitle: 'Native Ollama Integration (:11434)',
    description:
      'Direct REST integration with local Ollama daemons executing inference on host GPU or CPU. Features dynamic prompt enhancement and supports multi-turn chain-of-thought through collapsible <think> tags.',
    specs: [
      { label: 'Protocols', value: 'Localhost HTTP REST / Stream' },
      { label: 'Supported Models', value: 'Qwen 2.5, Llama 3.1/3.2, DeepSeek-R1' },
      { label: 'Reasoning Mode', value: 'Collapsible <think> accordion' },
    ],
    codeTag: 'services/ollamaService.js',
  },
  {
    id: 'metasearch',
    icon: Search,
    title: 'Self-Hosted Metasearch Hub',
    subtitle: 'Containerized SearXNG in Docker (:8080)',
    description:
      'Isolated Docker container aggregating results from 5 major search providers simultaneously. Automatically normalizes heterogeneous payloads and strips tracking query parameters before ingestion.',
    specs: [
      { label: 'Default Engines', value: 'DuckDuckGo, Google, Bing, Wikipedia, GitHub' },
      { label: 'Privacy Guard', value: 'Zero user account tracking' },
      { label: 'Payload Format', value: 'Sanitized JSON Contracts' },
    ],
    codeTag: 'services/searxngService.js',
  },
  {
    id: 'sqlite-bm25',
    icon: Database,
    title: 'Offline Document Index',
    subtitle: 'SQLite FTS5 with BM25 Ranking',
    description:
      'Full-text search virtual table residing in data/library.db. Evaluates document relevance using the industry-standard BM25 ranking algorithm, supporting instantaneous offline research over user-saved pages.',
    specs: [
      { label: 'Engine', value: 'node:sqlite + FTS5 Extension' },
      { label: 'Relevance Scoring', value: 'BM25 Algorithmic Ranking' },
      { label: 'Offline Capability', value: '100% Zero-Internet Querying' },
    ],
    codeTag: 'services/libraryService.js',
  },
  {
    id: 'hardware-memory',
    icon: MemoryStick,
    title: 'Hardware Intelligence & Memory',
    subtitle: 'GPU Tiering & Autonomous Fact Store',
    description:
      'Detects host GPU VRAM (via nvidia-smi, Windows CIM, ROCm) to classify models into Optimal, Compatible, and Heavy tiers. Features a background agent that extracts durable user facts without saving credentials.',
    specs: [
      { label: 'Hardware Detection', value: 'NVIDIA, AMD, Intel, Apple Silicon, CPU' },
      { label: 'Memory Extraction', value: 'Background turn analysis' },
      { label: 'Security Heuristics', value: 'API keys & passwords blocked' },
    ],
    codeTag: 'services/hardwareService.js',
  },
];

export const MeetSifraSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>(PILLARS[0].id);

  const selectedPillar = PILLARS.find((p) => p.id === activePillar) || PILLARS[0];

  return (
    <section id="meet-sifra" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-hairline text-amber text-[11px] font-mono uppercase tracking-widest mb-4">
          Scene 03 • Architecture Revealed
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          Meet SIFRA's Four Architectural Pillars
        </h2>
        <p className="text-base sm:text-lg text-stone leading-relaxed">
          SIFRA is engineered as a decoupled modular system where local inference, containerized search,
          and offline storage communicate seamlessly over verified JSON contracts.
        </p>
      </div>

      {/* Architectural Stations Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Pillar Navigation Station */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          {PILLARS.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            const Icon = pillar.icon;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                  isSelected
                    ? 'bg-graphite-card border-hairline-amber text-white shadow-subtle-elevation'
                    : 'bg-graphite/60 border-hairline text-stone hover:border-white/15 hover:text-white'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? 'bg-amber text-obsidian font-bold' : 'bg-charcoal text-stone'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-sm text-white">{pillar.title}</h3>
                    {isSelected && <ArrowUpRight className="w-4 h-4 text-amber" />}
                  </div>
                  <p className="text-xs font-mono text-stone mb-1">{pillar.subtitle}</p>
                  <span className="text-[11px] font-mono text-stone-dark">{pillar.codeTag}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Station Technical Spec */}
        <div className="lg:col-span-7 rounded-2xl bg-graphite border border-hairline p-8 relative overflow-hidden flex flex-col justify-between min-h-[460px]">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-hairline mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-charcoal border border-hairline flex items-center justify-center text-amber">
                  <selectedPillar.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedPillar.title}</h3>
                  <span className="text-xs font-mono text-amber">{selectedPillar.subtitle}</span>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded bg-charcoal border border-hairline text-xs font-mono text-stone">
                {selectedPillar.codeTag}
              </span>
            </div>

            <p className="text-sm text-stone leading-relaxed mb-8">
              {selectedPillar.description}
            </p>

            {/* Technical Specifications */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-amber" />
                <span>Verified Implementation Specs</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedPillar.specs.map((spec, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-obsidian border border-hairline">
                    <div className="text-[10px] font-mono text-stone-dark uppercase mb-1">{spec.label}</div>
                    <div className="text-xs font-bold text-white font-mono">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Localhost Port Isolation */}
          <div className="mt-8 pt-6 border-t border-hairline flex items-center justify-between text-xs font-mono text-stone">
            <span className="flex items-center gap-2 text-stone-light">
              <ShieldCheck className="w-4 h-4 text-amber" />
              <span>Strict Localhost Port Binding</span>
            </span>
            <span>Zero Cloud Relays</span>
          </div>
        </div>
      </div>
    </section>
  );
};
