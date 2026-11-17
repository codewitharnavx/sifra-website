import React, { useState } from 'react';
import { Github, Copy, Check, Terminal, ArrowUpRight, Cpu } from 'lucide-react';
import { ReassembledCore3D } from '../3d/ReassembledCore3D';

export const ClosingFooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const cloneCmd = 'git clone https://github.com/codewitharnavx/SIFRA.git';

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="closing" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10 border-t border-hairline">
      {/* Cinematic Culmination: Asymmetric Reassembly Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left Column: Final Closing Headline & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="text-amber font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
            Sovereign Research Architecture
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.05]">
            Own your research.{' '}
            <span className="text-stone-light block mt-1">Run SIFRA today.</span>
          </h2>

          <p className="text-base sm:text-lg text-stone max-w-xl mb-10 leading-relaxed font-normal">
            Break free from recurring cloud search subscriptions and query surveillance.
            Deploy SIFRA onto your workstation in under five minutes.
          </p>

          {/* Quick Clone Terminal Box */}
          <div className="w-full max-w-xl rounded-xl bg-graphite border border-hairline p-4 mb-8 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3 overflow-hidden">
              <Terminal className="w-4 h-4 text-amber shrink-0" />
              <span className="text-stone-light truncate">{cloneCmd}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian border border-hairline text-stone hover:text-white transition-colors shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-amber" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://github.com/codewitharnavx/SIFRA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber hover:bg-amber-hover text-obsidian font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-subtle-elevation"
            >
              <Github className="w-4 h-4 text-obsidian" />
              <span>Clone Repository on GitHub</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-graphite hover:bg-graphite-hover text-white border border-hairline text-xs font-mono uppercase tracking-wider transition-all"
            >
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Reassembled Core Stage (5 cols) */}
        <div className="lg:col-span-5 w-full flex items-center justify-center">
          <ReassembledCore3D />
        </div>
      </div>

      {/* Engineering Footer Bar */}
      <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-stone-dark gap-4">
        <div className="flex items-center gap-2 text-stone">
          <Cpu className="w-4 h-4 text-amber" />
          <span>SIFRA • Sovereign Information Framework for Research & Analysis</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-stone">MIT Open Source License</span>
          <a
            href="https://github.com/codewitharnavx/SIFRA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>GitHub Repository</span>
            <ArrowUpRight className="w-3 h-3 text-amber" />
          </a>
        </div>
      </div>
    </footer>
  );
};
