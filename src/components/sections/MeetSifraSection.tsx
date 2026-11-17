import React, { useState } from 'react';
import { Cpu, Search, Database, HardDrive, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface PillarDetail {
  id: string;
  name: string;
  role: string;
  port: string;
  description: string;
  metrics: string[];
  protocol: string;
}

const PILLARS: PillarDetail[] = [
  {
    id: 'ollama',
    name: 'Local Neural Engine',
    role: 'Ollama Daemon',
    port: ':11434',
    description:
      'Direct HTTP streaming integration with local Ollama runtimes. Executes quantized neural models entirely in host VRAM or system RAM with chain-of-thought reasoning and prompt enhancement.',
    metrics: ['0 ms Cloud Latency', 'Qwen 2.5 • Llama 3.2 • DeepSeek-R1', '<think> Accordion Support'],
    protocol: 'Localhost REST / NDJSON Stream',
  },
  {
    id: 'searxng',
    name: 'Metasearch Hub',
    role: 'Docker SearXNG Container',
    port: ':8080',
    description:
      'Containerized privacy-preserving metasearch aggregator. Dispatches queries simultaneously across 5 major public engines, strips tracking cookies and UTM parameters, and returns clean JSON.',
    metrics: ['5 Engines Queried in Parallel', 'Zero Tracking Cookies', 'Automatic Query Normalization'],
    protocol: 'Docker Bridge HTTP JSON',
  },
  {
    id: 'sqlite',
    name: 'Offline Knowledge Index',
    role: 'SQLite FTS5 + BM25',
    port: 'In-Process',
    description:
      'Zero-dependency local document store using SQLite Full-Text Search 5. Scores document snippets with native BM25 relevance ranking, eliminating the need for expensive vector databases and GPU embedding models.',
    metrics: ['Sub-5ms Query Latency', 'BM25 Term Weighting', 'Zero External Network Access'],
    protocol: 'In-Memory / data/library.db',
  },
  {
    id: 'hardware',
    name: 'Hardware Intelligence',
    role: 'System Capability Inspector',
    port: 'OS CIM / CLI',
    description:
      'Probes available host RAM and detected GPU VRAM (via nvidia-smi or Windows CIM) at launch. Recommends the exact model parameter size (1B, 3B, 7B, 14B) that will run comfortably without swapping.',
    metrics: ['Live VRAM Discovery', 'Zero Guesswork Configuration', 'Tiered Architecture Matching'],
    protocol: 'Host System WMI / Sysfs',
  },
];

export const MeetSifraSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>('ollama');
  const activePillar = PILLARS.find((p) => p.id === selectedPillar) || PILLARS[0];

  return (
    <section id="meet-sifra" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark text-content-inversePrimary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated border border-dark-border text-amber text-xs font-mono uppercase tracking-widest mb-4">
            <span>03</span>
            <span>•</span>
            <span>Architectural Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Engineered for Autonomy. Four Coordinated Pillars.
          </h2>
          <p className="text-base sm:text-lg text-content-inverseSecondary leading-relaxed font-normal">
            SIFRA does not rely on opaque cloud microservices. The entire application operates through
            four tightly coordinated components running locally on your hardware.
          </p>
        </div>

        {/* Custom 2D Interactive Architecture Diagram & Hub */}
        <div className="rounded-squircle-xl bg-dark-graphite border border-dark-border p-6 sm:p-10 shadow-apple-dark-lg mb-12">
          {/* Architecture Visual Topology */}
          <div className="mb-10 pb-10 border-b border-dark-border">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono text-content-inverseTertiary uppercase tracking-wider">
                SIFRA Inter-Process Topology Map
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All Daemons Bound to 127.0.0.1
              </span>
            </div>

            {/* SVG Connecting Flow Diagram */}
            <div className="relative py-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {PILLARS.map((pillar) => {
                  const isSelected = selectedPillar === pillar.id;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setSelectedPillar(pillar.id)}
                      className={`text-left p-5 rounded-squircle-md transition-all duration-200 border relative ${
                        isSelected
                          ? 'bg-dark-elevated border-amber text-white shadow-apple-dark-md scale-[1.02]'
                          : 'bg-dark/60 border-dark-border text-content-inverseSecondary hover:bg-dark-elevated hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono text-amber font-semibold">
                          {pillar.port}
                        </span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-amber" />}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{pillar.name}</h4>
                      <p className="text-xs text-content-inverseTertiary font-mono">{pillar.role}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Deep Pillar Inspection Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono text-amber mb-3">
                <span>INSPECTOR</span>
                <span>•</span>
                <span>{activePillar.protocol}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{activePillar.name}</h3>
              <p className="text-sm sm:text-base text-content-inverseSecondary leading-relaxed mb-6 font-normal">
                {activePillar.description}
              </p>

              <div className="space-y-2.5">
                {activePillar.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-mono text-content-inversePrimary">
                    <ShieldCheck className="w-4 h-4 text-amber shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-squircle-md bg-dark border border-dark-border font-mono text-xs">
              <div className="flex items-center justify-between text-content-inverseTertiary pb-3 border-b border-dark-border mb-3">
                <span>COMPONENT CONTRACT</span>
                <span className="text-amber">{activePillar.port}</span>
              </div>
              <div className="space-y-2 text-content-inverseSecondary">
                <div>
                  <span className="text-content-inverseTertiary">Module:</span>{' '}
                  <span className="text-white">services/{activePillar.id}Service.js</span>
                </div>
                <div>
                  <span className="text-content-inverseTertiary">Transport:</span>{' '}
                  <span className="text-white">{activePillar.protocol}</span>
                </div>
                <div>
                  <span className="text-content-inverseTertiary">Isolation:</span>{' '}
                  <span className="text-emerald-400">Host Loopback Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
