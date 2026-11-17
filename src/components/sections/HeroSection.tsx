import React from 'react';
import { Github, ArrowRight, ShieldCheck, Database, Search, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-surface-warm text-content-primary overflow-hidden"
    >
      {/* Background Soft Grain & Vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35] bg-[radial-gradient(#C8CAC4_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-surface-border shadow-apple-sm text-xs font-mono text-content-secondary mb-8 transition-transform hover:scale-[1.02]">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="font-semibold text-content-primary">SIFRA v1.0</span>
          <span className="text-content-tertiary">•</span>
          <span>Self-Hosted Research Workspace</span>
        </div>

        {/* Primary Headline: Apple Editorial Scale */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-content-primary mb-6 leading-[1.08] max-w-4xl">
          Autonomous Research. Grounded by the Web.{' '}
          <span className="text-content-secondary font-normal block sm:inline">
            Bound to Your Machine.
          </span>
        </h1>

        {/* Clear, Concise Supporting Copy */}
        <p className="text-lg sm:text-xl text-content-secondary max-w-2xl mb-10 leading-relaxed font-normal">
          SIFRA unites local neural models, self-hosted SearXNG metasearch, and an offline SQLite BM25
          knowledge index into a private research engine and developer search API.
          Zero cloud subscriptions.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-16">
          <a
            href="https://github.com/codewitharnavx/SIFRA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-squircle-md bg-content-primary text-white font-medium text-sm hover:bg-black transition-all shadow-apple-md hover:shadow-apple-lg"
          >
            <Github className="w-4 h-4" />
            <span>Star on GitHub</span>
            <span className="ml-1 px-1.5 py-0.5 rounded text-[11px] font-mono bg-white/20 text-white">v1.0</span>
          </a>

          <button
            onClick={() => scrollTo('meet-sifra')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-squircle-md bg-white hover:bg-surface-soft text-content-primary font-medium text-sm border border-surface-border shadow-apple-sm transition-all"
          >
            <span>Explore Architecture</span>
            <ArrowRight className="w-4 h-4 text-content-secondary" />
          </button>
        </div>

        {/* Visual Showcase: The 2D SIFRA Neural Research Hub Diagram */}
        <div className="w-full max-w-4xl rounded-squircle-xl bg-white border border-surface-border shadow-apple-lg p-6 sm:p-8 relative overflow-hidden text-left">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-surface-borderSubtle mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs font-mono text-content-secondary tracking-wide">
                sifra://runtime/autonomous-loop
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-content-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>OLLAMA :11434 • DOCKER SEARXNG :8080 • FTS5 ACTIVE</span>
            </div>
          </div>

          {/* SIFRA Orchestration Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Stage 1: Local Input Query */}
            <div className="p-4 rounded-squircle-md bg-surface-soft/80 border border-surface-border">
              <div className="flex items-center justify-between mb-2">
                <span className="tag-mono text-content-secondary">01 Input Prompt</span>
                <Cpu className="w-4 h-4 text-content-secondary" />
              </div>
              <p className="text-sm font-semibold text-content-primary mb-1">
                "Compare SQLite BM25 vs Vector Search latency"
              </p>
              <p className="text-xs text-content-secondary">
                Locally parsed query with intent deconstruction & query expansion.
              </p>
            </div>

            {/* Stage 2: Parallel Grounded Retrieval */}
            <div className="p-4 rounded-squircle-md bg-white border border-amber-border shadow-apple-sm relative">
              <div className="flex items-center justify-between mb-2">
                <span className="tag-mono text-amber font-semibold">02 Dual Retrieval Hub</span>
                <div className="flex gap-1">
                  <Search className="w-3.5 h-3.5 text-amber" />
                  <Database className="w-3.5 h-3.5 text-amber" />
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-1.5 rounded bg-surface-soft font-mono">
                  <span className="text-content-primary">SearXNG (Docker)</span>
                  <span className="text-emerald-600 font-semibold">5 Engines Cleaned</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-surface-soft font-mono">
                  <span className="text-content-primary">SQLite FTS5 BM25</span>
                  <span className="text-emerald-600 font-semibold">Zero-Network Docs</span>
                </div>
              </div>
            </div>

            {/* Stage 3: Grounded Synthesis */}
            <div className="p-4 rounded-squircle-md bg-surface-soft/80 border border-surface-border">
              <div className="flex items-center justify-between mb-2">
                <span className="tag-mono text-content-secondary">03 Synthesis Output</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs text-content-primary mb-2 font-mono">
                "SQLite BM25 achieves sub-5ms retrieval without embedding GPUs [1][2]..."
              </p>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                <span>Verified Inline Citations</span>
              </div>
            </div>
          </div>

          {/* Footer Metrics */}
          <div className="mt-6 pt-4 border-t border-surface-borderSubtle flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-content-secondary">
            <div className="flex items-center gap-4">
              <span>Memory Footprint: <strong className="text-content-primary font-semibold">&lt; 150MB core</strong></span>
              <span>•</span>
              <span>Search APIs: <strong className="text-content-primary font-semibold">0 Paid Keys</strong></span>
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
