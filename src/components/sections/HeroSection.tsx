import React, { useState } from 'react';
import { Github, ArrowRight, ShieldCheck, Database, Search, Cpu, Sparkles, Terminal } from 'lucide-react';

interface HeroQueryScenario {
  id: string;
  label: string;
  prompt: string;
  searxngEngines: string;
  localDocs: string;
  synthesis: string;
  citations: string[];
}

const HERO_SCENARIOS: HeroQueryScenario[] = [
  {
    id: 'bm25-vs-vectors',
    label: 'BM25 vs Vector Latency',
    prompt: 'Compare SQLite FTS5 BM25 vs dense vector search latency for local repositories',
    searxngEngines: 'DuckDuckGo, Google, GitHub (18 results)',
    localDocs: 'docs/library.db (3 internal benchmarks)',
    synthesis:
      'SQLite FTS5 BM25 achieves sub-5ms query latency on consumer CPUs [1], avoiding the 40–120ms latency and 2GB+ VRAM overhead of neural embedding models [2].',
    citations: ['SQLite FTS5 Official Specification', 'SIFRA Engine Benchmark 2026'],
  },
  {
    id: 'deepseek-r1-cot',
    label: 'DeepSeek-R1 <think> Grounding',
    prompt: 'Analyze chain-of-thought token streams when grounding with live SearXNG snippets',
    searxngEngines: 'DuckDuckGo, Wikipedia, Bing (14 results)',
    localDocs: 'research/cot-parser.md',
    synthesis:
      'SIFRA intercepts raw <think> tokens, verifying each step against sanitized search payloads [1] before emitting final inline citations [2].',
    citations: ['SearXNG Query Sanitizer', 'Local Ollama Stream Protocol'],
  },
  {
    id: 'vram-profiler',
    label: 'Hardware Profiling',
    prompt: 'Detect host GPU VRAM and recommend optimal model parameter quantization tier',
    searxngEngines: 'Ollama Model Registry (8 models)',
    localDocs: 'system/hardware-profile.json',
    synthesis:
      'Automatic OS CIM probing detects 8GB host VRAM, selecting Qwen 2.5 7B Q4_K_M to eliminate OS memory swapping [1][2].',
    citations: ['Windows CIM / nvidia-smi probe', 'Ollama Model Tier Matrix'],
  },
];

export const HeroSection: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('bm25-vs-vectors');
  const scenario = HERO_SCENARIOS.find((s) => s.id === activeScenarioId) || HERO_SCENARIOS[0];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-surface-warm text-content-primary overflow-hidden"
    >
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.28] bg-[radial-gradient(#C8CAC4_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-surface-border shadow-apple-sm text-xs font-mono text-content-secondary mb-7 transition-transform hover:scale-[1.01] btn-spring">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="font-semibold text-content-primary">SIFRA v1.0</span>
          <span className="text-content-tertiary">•</span>
          <span>Self-Hosted Research Workspace &amp; Search API</span>
        </div>

        {/* Primary Headline: Apple Editorial Scale with Optical Tracking & Inverse Leading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-display text-content-primary mb-6 leading-[1.05] max-w-4xl">
          Autonomous Research. Grounded by the Web.{' '}
          <span className="text-content-secondary font-normal block sm:inline">
            Bound to Your Machine.
          </span>
        </h1>

        {/* Concise Supporting Copy */}
        <p className="text-base sm:text-lg text-content-secondary max-w-2xl mb-8 leading-relaxed font-normal tracking-body">
          SIFRA unites local neural models, self-hosted SearXNG metasearch, and an offline SQLite BM25
          knowledge index into a private research engine and developer search API.
          Zero cloud subscriptions.
        </p>

        {/* Action CTAs with Apple-inspired pointer-down spring feedback */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-14">
          <a
            href="https://github.com/codewitharnavx/SIFRA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-squircle-md bg-content-primary text-white font-medium text-sm hover:bg-black transition-all shadow-apple-md hover:shadow-apple-lg btn-spring"
          >
            <Github className="w-4 h-4" />
            <span>Star on GitHub</span>
            <span className="ml-1 px-1.5 py-0.5 rounded text-[11px] font-mono bg-white/20 text-white">v1.0</span>
          </a>

          <button
            onClick={() => scrollTo('meet-sifra')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-squircle-md bg-white hover:bg-surface-soft text-content-primary font-medium text-sm border border-surface-border shadow-apple-sm transition-all btn-spring"
          >
            <span>Explore Architecture</span>
            <ArrowRight className="w-4 h-4 text-content-secondary" />
          </button>
        </div>

        {/* The 2D SIFRA Neural Research Hub Interactive Dispatcher */}
        <div className="w-full max-w-4xl rounded-squircle-xl bg-white border border-surface-border shadow-apple-lg p-5 sm:p-7 relative overflow-hidden text-left light-catch-edge-light">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-borderSubtle mb-5">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
              </div>
              <span className="text-xs font-mono text-content-secondary tracking-wide">
                sifra://engine/live-orchestration
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-content-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OLLAMA :11434 • SEARXNG :8080 • SQLite BM25 IN-PROCESS</span>
            </div>
          </div>

          {/* Interactive Query Chips */}
          <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-content-tertiary shrink-0">
              Sample Prompt:
            </span>
            {HERO_SCENARIOS.map((s) => {
              const isSelected = activeScenarioId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveScenarioId(s.id)}
                  className={`px-3 py-1 text-xs font-mono rounded-full whitespace-nowrap transition-all duration-150 btn-spring ${
                    isSelected
                      ? 'bg-content-primary text-white font-medium shadow-apple-sm'
                      : 'bg-surface-soft text-content-secondary hover:text-content-primary hover:bg-white border border-surface-border'
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* The 3-Node Orchestration Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 relative mb-5">
            {/* Stage 1: Input Query */}
            <div className="p-3.5 rounded-squircle-md bg-surface-soft/80 border border-surface-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="tag-mono text-content-secondary">01 • Input Deconstruction</span>
                  <Cpu className="w-3.5 h-3.5 text-content-secondary" />
                </div>
                <p className="text-xs font-medium text-content-primary mb-2 line-clamp-2">
                  "{scenario.prompt}"
                </p>
              </div>
              <span className="text-[10px] font-mono text-content-tertiary">
                Parsed by local LLM prompt enhancement
              </span>
            </div>

            {/* Stage 2: Dual Parallel Retrieval Hub */}
            <div className="p-3.5 rounded-squircle-md bg-white border border-amber-border shadow-apple-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="tag-mono text-amber font-semibold">02 • Dual Retrieval</span>
                  <div className="flex gap-1">
                    <Search className="w-3 h-3 text-amber" />
                    <Database className="w-3 h-3 text-amber" />
                  </div>
                </div>
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="p-1.5 rounded bg-surface-soft text-[11px] flex justify-between">
                    <span className="text-content-primary truncate mr-1">SearXNG (Docker)</span>
                    <span className="text-emerald-600 font-semibold shrink-0">Cleaned</span>
                  </div>
                  <div className="p-1.5 rounded bg-surface-soft text-[11px] flex justify-between">
                    <span className="text-content-primary truncate mr-1">SQLite FTS5</span>
                    <span className="text-emerald-600 font-semibold shrink-0">&lt;5ms</span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-amber mt-2">
                Parallel async execution (zero user cookies)
              </span>
            </div>

            {/* Stage 3: Grounded Synthesis with Citations */}
            <div className="p-3.5 rounded-squircle-md bg-surface-soft/80 border border-surface-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="tag-mono text-content-secondary">03 • Verified Synthesis</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <p className="text-xs text-content-primary leading-relaxed mb-2 font-mono line-clamp-3">
                  "{scenario.synthesis}"
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-amber">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                <span>Verified Citations Attached</span>
              </div>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="pt-3 border-t border-surface-borderSubtle flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-content-secondary">
            <div className="flex items-center gap-3">
              <span>Memory: <strong className="text-content-primary font-semibold">&lt; 150MB core</strong></span>
              <span>•</span>
              <span>Paid APIs: <strong className="text-content-primary font-semibold">$0.00 / month</strong></span>
            </div>
            <div className="text-content-secondary">
              Fully Local Inference Engine
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
