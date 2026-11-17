import React from 'react';
import { Github, ArrowDown, Cpu, Search, Database, Shield } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* System Metadata Tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-graphite border border-hairline text-stone text-[11px] font-mono uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber" />
          <span>Local Research Workspace • Self-Hosted Search API</span>
        </div>

        {/* Primary Headline: High-Contrast Warm White Typography */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] font-sans max-w-3xl">
          Autonomous Research. Grounded by the Web.{' '}
          <span className="text-stone-light">Bound to Your Machine.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg text-stone max-w-2xl mb-10 leading-relaxed font-normal">
          SIFRA unites local neural models, self-hosted SearXNG metasearch, and an offline SQLite BM25
          knowledge index into a private research workspace and developer search API.
          Zero commercial search subscriptions.
        </p>

        {/* CTAs: Deliberate Metallic Amber & Graphite Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="https://github.com/codewitharnavx/SIFRA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber hover:bg-amber-hover text-obsidian font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-subtle-elevation hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4 text-obsidian" />
            <span>Get Started on GitHub</span>
          </a>

          <button
            onClick={() => scrollTo('meet-sifra')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-graphite hover:bg-graphite-hover text-white border border-hairline hover:border-amber/40 text-xs font-mono uppercase tracking-wider transition-all"
          >
            <span>Explore Architecture</span>
            <ArrowDown className="w-3.5 h-3.5 text-amber" />
          </button>
        </div>

        {/* Architectural Precision Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl pt-8 border-t border-hairline text-left">
          <div className="p-3.5 rounded-xl bg-graphite/80 border border-hairline flex items-center gap-3">
            <Cpu className="w-4 h-4 text-amber shrink-0" />
            <div>
              <div className="text-xs font-mono font-semibold text-white">Local Ollama</div>
              <div className="text-[11px] text-stone">On-device neural inference</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-graphite/80 border border-hairline flex items-center gap-3">
            <Search className="w-4 h-4 text-amber shrink-0" />
            <div>
              <div className="text-xs font-mono font-semibold text-white">Docker SearXNG</div>
              <div className="text-[11px] text-stone">5-Engine parallel metasearch</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-graphite/80 border border-hairline flex items-center gap-3">
            <Database className="w-4 h-4 text-amber shrink-0" />
            <div>
              <div className="text-xs font-mono font-semibold text-white">SQLite BM25</div>
              <div className="text-[11px] text-stone">Offline document index</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-graphite/80 border border-hairline flex items-center gap-3">
            <Shield className="w-4 h-4 text-amber shrink-0" />
            <div>
              <div className="text-xs font-mono font-semibold text-white">Zero Subscriptions</div>
              <div className="text-[11px] text-stone">No search API keys</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest uppercase text-stone">Scene 01 • Assembled Core</span>
        <div className="w-4 h-7 rounded-full border border-hairline flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-amber animate-bounce" />
        </div>
      </div>
    </section>
  );
};
