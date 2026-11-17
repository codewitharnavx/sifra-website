import React from 'react';
import { Github, ArrowDown, Sparkles } from 'lucide-react';
import { HeroCore3D } from '../3d/HeroCore3D';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Editorial Column (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
          {/* Subtle System Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-graphite border border-hairline text-stone text-[11px] font-mono uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
            <span>Autonomous Local AI Research Workspace</span>
          </div>

          {/* Large High-Contrast Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.05] font-sans">
            Grounded research on your own hardware.
          </h1>

          {/* Concise Editorial Sub-headline */}
          <p className="text-base sm:text-lg text-stone max-w-xl mb-10 leading-relaxed font-normal">
            SIFRA unites local Ollama reasoning with a self-hosted SearXNG metasearch hub and an offline SQLite BM25 knowledge index.
            Live web citations, zero subscription fees, and complete prompt sovereignty.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://github.com/codewitharnavx/SIFRA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber hover:bg-amber-hover text-obsidian font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-subtle-elevation hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4 text-obsidian" />
              <span>Get Started on GitHub</span>
            </a>

            <button
              onClick={() => scrollTo('problem')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-graphite hover:bg-graphite-hover text-white border border-hairline hover:border-amber/40 text-xs font-mono uppercase tracking-wider transition-all"
            >
              <span>Explore The System</span>
              <ArrowDown className="w-3.5 h-3.5 text-amber" />
            </button>
          </div>
        </div>

        {/* Right 3D Apparatus Column (6 cols) */}
        <div className="lg:col-span-6 w-full flex items-center justify-center z-10">
          <HeroCore3D />
        </div>
      </div>
    </section>
  );
};
