import React from 'react';
import { Github, ArrowUpRight, Terminal, Heart, Shield, Cpu, BookOpen } from 'lucide-react';

export const ClosingFooterSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="closing" className="relative bg-dark text-content-inversePrimary border-t border-dark-border light-catch-edge">
      {/* Upper Culmination / Call to Action */}
      <div className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated border border-dark-border text-amber text-xs font-mono uppercase tracking-caption mb-6">
          <span>Complete Autonomy</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-bold tracking-display text-white mb-6 leading-tight max-w-3xl">
          Your Research. Your Hardware. <br />
          <span className="text-content-inverseSecondary font-normal">No Subscriptions.</span>
        </h2>

        <p className="text-base sm:text-lg text-content-inverseSecondary max-w-2xl mb-10 leading-relaxed font-normal tracking-body">
          Break free from cloud search fees and privacy compromises. Deploy SIFRA locally
          and command an autonomous research intelligence bounded solely by your machine.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <a
            href="https://github.com/codewitharnavx/SIFRA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-squircle-md bg-white text-dark font-medium text-sm hover:bg-surface-soft transition-all shadow-apple-dark-md btn-spring"
          >
            <Github className="w-4 h-4" />
            <span>Clone Repository on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <button
            onClick={() => scrollTo('privacy-deployment')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-squircle-md bg-dark-elevated hover:bg-dark-graphite text-white font-medium text-sm border border-dark-border transition-all btn-spring"
          >
            <Terminal className="w-4 h-4 text-amber" />
            <span>Quick Start Guide</span>
          </button>
        </div>
      </div>

      {/* Refined Technical Footer */}
      <div className="border-t border-dark-border py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Wordmark & Identity */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-base text-white font-mono tracking-tight">SIFRA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
              <span className="text-xs font-mono text-content-inverseTertiary uppercase tracking-caption">
                v1.0 Local Intelligence
              </span>
            </div>
            <p className="text-xs sm:text-sm text-content-inverseSecondary leading-relaxed max-w-sm font-normal mb-4 tracking-body">
              Self-hosted autonomous AI research workspace and metasearch API. Runs locally with Ollama,
              SearXNG, and SQLite FTS5. Zero subscriptions, zero user telemetry.
            </p>
            <div className="text-xs font-mono text-content-inverseTertiary">
              Licensed under Apache-2.0 • Free and Open Source
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-caption text-white mb-4">Architecture</h4>
            <ul className="space-y-2 text-xs font-mono text-content-inverseSecondary">
              <li>
                <button onClick={() => scrollTo('problem')} className="hover:text-white transition-colors">
                  The AI Dilemma
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('meet-sifra')} className="hover:text-white transition-colors">
                  Four Pillars
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors">
                  Synthesis Pipeline
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} className="hover:text-white transition-colors">
                  Capabilities &amp; Reasoning
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-caption text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-xs font-mono text-content-inverseSecondary">
              <li>
                <a
                  href="https://github.com/codewitharnavx/SIFRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <button onClick={() => scrollTo('product-experience')} className="hover:text-white transition-colors">
                  Product Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hardware-api')} className="hover:text-white transition-colors">
                  Developer API
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('privacy-deployment')} className="hover:text-white transition-colors">
                  Deployment Guide
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-inverseTertiary">
          <div>
            Created by <a href="https://github.com/codewitharnavx" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Arnav</a> and open source contributors.
          </div>
          <div className="flex items-center gap-6">
            <span>Localhost:5000</span>
            <span>Ollama:11434</span>
            <span>SearXNG:8080</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
