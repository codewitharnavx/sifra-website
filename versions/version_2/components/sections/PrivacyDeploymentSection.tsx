import React, { useState } from 'react';
import { Terminal, CheckCircle2, AlertCircle, Copy, Check, ExternalLink } from 'lucide-react';

export const PrivacyDeploymentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'windows' | 'linux'>('windows');
  const [copiedScript, setCopiedScript] = useState<boolean>(false);

  const setupCommands = {
    windows: `# 1. Clone the repository
git clone https://github.com/codewitharnavx/SIFRA.git
cd SIFRA

# 2. Run automated setup (checks Docker, Ollama, Node.js)
setup.bat

# 3. Launch all Sifra services (SearXNG + Backend + Frontend)
"Start Sifra.bat"`,
    linux: `# 1. Clone the repository
git clone https://github.com/codewitharnavx/SIFRA.git
cd SIFRA

# 2. Make setup executable and run
chmod +x setup.sh
./setup.sh

# 3. Start all services
npm run dev`,
  };

  const copyScript = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <section id="privacy-deployment" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-hairline text-amber text-[11px] font-mono uppercase tracking-widest mb-4">
          Scene 08 • Local Boundaries & Deployment
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          Architectural Transparency & 1-Click Launch
        </h2>
        <p className="text-base sm:text-lg text-stone leading-relaxed">
          Clear, honest boundaries of what stays on your computer and how to get SIFRA running in minutes.
        </p>
      </div>

      {/* Part 1: Architecture Boundaries Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Strictly Localhost Box */}
        <div className="rounded-2xl bg-graphite border border-hairline p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-charcoal border border-hairline text-stone flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-amber" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">What Runs Exclusively on Your Machine</h3>
              <span className="text-xs font-mono text-stone">100% Local Execution</span>
            </div>
          </div>

          <ul className="space-y-4 text-xs font-mono text-stone leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">Neural Model Inferences:</strong> All token generation, chain-of-thought thinking, and prompt construction run locally on your GPU/CPU via Ollama.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">Personal Document Database:</strong> Saved articles, page text, and FTS5 BM25 index remain in <code>data/library.db</code> on your local disk.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">Autonomous Memories:</strong> Fact extraction runs locally; no preference data or project context is synced to external servers.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">Application Orchestration:</strong> Express REST server binds strictly to <code>127.0.0.1</code>; zero usage telemetry is collected.
              </div>
            </li>
          </ul>
        </div>

        {/* External Web Boundaries Box */}
        <div className="rounded-2xl bg-graphite border border-hairline p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-charcoal border border-hairline text-stone flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-amber" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">When SIFRA Contacts External Providers</h3>
              <span className="text-xs font-mono text-stone">Live Metasearch Channel</span>
            </div>
          </div>

          <ul className="space-y-4 text-xs font-mono text-stone leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">SearXNG Public Metasearch:</strong> When web search is requested, SearXNG queries DuckDuckGo, Google, Bing, Wikipedia, and GitHub to fetch public result snippets.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">Zero User Tracking:</strong> Queries are fanned out without cookies, logins, or tracking identifiers, shielding your identity from single-provider profiling.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">User-Directed Web Crawler:</strong> When you submit a URL to your library, Cheerio fetches the page directly from that site, strictly enforcing SSRF defenses against local networks.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
              <div>
                <strong className="text-white">Offline Mode Available:</strong> Selecting <code>local</code> mode turns off web connections entirely, operating purely on your indexed SQLite library.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Part 2: 1-Click Launch & Setup Guide */}
      <div className="rounded-2xl bg-obsidian border border-hairline p-8 sm:p-10 shadow-subtle-elevation">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-hairline mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-amber" />
              <span className="text-xs font-mono uppercase text-amber font-bold">Quick Start</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Get SIFRA Running in 3 Steps</h3>
          </div>

          {/* OS Switcher */}
          <div className="flex items-center gap-1.5 bg-graphite p-1.5 rounded-lg border border-hairline">
            <button
              onClick={() => setActiveTab('windows')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                activeTab === 'windows' ? 'bg-amber text-obsidian font-bold' : 'text-stone hover:text-white'
              }`}
            >
              Windows (.bat)
            </button>
            <button
              onClick={() => setActiveTab('linux')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                activeTab === 'linux' ? 'bg-amber text-obsidian font-bold' : 'text-stone hover:text-white'
              }`}
            >
              Linux / macOS (.sh)
            </button>
          </div>
        </div>

        {/* Script Console */}
        <div className="relative rounded-xl bg-graphite border border-hairline p-5 font-mono text-xs text-stone-light overflow-x-auto shadow-inner">
          <button
            onClick={() => copyScript(setupCommands[activeTab])}
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded bg-charcoal text-stone hover:text-white transition-all text-xs"
            aria-label="Copy Installation Commands"
          >
            {copiedScript ? <Check className="w-3.5 h-3.5 text-amber" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedScript ? 'Copied' : 'Copy'}</span>
          </button>
          <pre className="pr-20 leading-relaxed">{setupCommands[activeTab]}</pre>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-stone">
          <span>Prerequisites: Docker (for SearXNG), Ollama, Node.js 18+</span>
          <a
            href="https://github.com/codewitharnavx/SIFRA#installation--quick-start"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber hover:underline"
          >
            <span>View Full Installation Guide</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
