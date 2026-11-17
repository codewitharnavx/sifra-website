import React from 'react';
import { Github, ArrowUpRight, Cpu, BookOpen, Shield, Code2, Terminal } from 'lucide-react';

export const ClosingFooterSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="closing" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-t border-hairline z-10 bg-obsidian/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        {/* Culmination Banner */}
        <div className="rounded-3xl bg-graphite border border-hairline-amber p-8 sm:p-14 text-center relative overflow-hidden shadow-subtle-elevation mb-20">
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-soft text-amber text-[10px] font-mono uppercase tracking-widest mb-6 border border-hairline-amber font-bold">
              Scene 09 • Full Physical Reassembly
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              Take Control of Your Research
            </h2>

            <p className="text-base sm:text-lg text-stone leading-relaxed mb-10 max-w-2xl mx-auto">
              Run SIFRA on your own machine. Grounded web intelligence, offline document retrieval, and private neural synthesis without monthly search subscriptions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/codewitharnavx/SIFRA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber hover:bg-amber-hover text-obsidian font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-subtle-elevation hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-obsidian" />
                <span>Star on GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-obsidian" />
              </a>

              <a
                href="https://github.com/codewitharnavx/SIFRA#installation--quick-start"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-charcoal hover:bg-charcoal-subtle text-white border border-hairline text-xs font-mono uppercase tracking-wider transition-all"
              >
                <Terminal className="w-4 h-4 text-amber" />
                <span>Quick Start Guide</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-hairline text-sm">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-graphite border border-hairline flex items-center justify-center text-amber">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg font-mono tracking-wider text-white">SIFRA</span>
            </div>
            <p className="text-stone text-xs sm:text-sm leading-relaxed max-w-md mb-6">
              Autonomous local AI research workspace and self-hosted search API. Developed and maintained by{' '}
              <a
                href="https://github.com/codewitharnavx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:underline"
              >
                @codewitharnavx
              </a>
              . Licensed under the permissive MIT Open Source License.
            </p>
            <div className="text-xs font-mono text-stone-dark">
              Zero cloud search subscriptions • 100% On-Device Inferences
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">Sections</h3>
            <ul className="space-y-2.5 text-xs text-stone font-mono">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-amber transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('problem')} className="hover:text-amber transition-colors">
                  The Problem
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('meet-sifra')} className="hover:text-amber transition-colors">
                  Architecture
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="hover:text-amber transition-colors">
                  Workflow Pipeline
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-amber transition-colors">
                  Core Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('product-experience')} className="hover:text-amber transition-colors">
                  Product Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hardware-api')} className="hover:text-amber transition-colors">
                  Hardware & API
                </button>
              </li>
            </ul>
          </div>

          {/* Documentation Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">Repository</h3>
            <ul className="space-y-2.5 text-xs text-stone font-mono">
              <li>
                <a
                  href="https://github.com/codewitharnavx/SIFRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5 text-amber" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/codewitharnavx/SIFRA/blob/main/docs/ARCHITECTURE.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber" />
                  <span>Architecture Docs</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/codewitharnavx/SIFRA/blob/main/docs/DEVELOPMENT_LOG.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber transition-colors flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-amber" />
                  <span>Development Log</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/codewitharnavx/SIFRA/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-amber" />
                  <span>MIT License</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone gap-4">
          <div>
            © {new Date().getFullYear()} SIFRA. Open-source software created by{' '}
            <a
              href="https://github.com/codewitharnavx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:underline"
            >
              @codewitharnavx
            </a>
            .
          </div>
          <div className="flex items-center gap-3">
            <span>Built with React, Three.js & Tailwind</span>
            <span>•</span>
            <span className="text-amber">Autonomous Research Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
