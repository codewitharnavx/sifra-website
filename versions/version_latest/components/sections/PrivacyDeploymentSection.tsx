import React, { useState } from 'react';
import { ShieldCheck, Terminal, Copy, Check, Globe } from 'lucide-react';

const DEPLOY_COMMANDS = {
  docker: `# Step 1: Start containerized SearXNG metasearch hub
docker run -d \\
  --name sifra-searxng \\
  -p 8080:8080 \\
  -v ./searxng:/etc/searxng \\
  searxng/searxng:latest`,
  local: `# Step 2: Clone and run SIFRA locally
git clone https://github.com/codewitharnavx/SIFRA.git
cd SIFRA
npm install
npm run dev`,
  ollama: `# Step 3: Pull verified local reasoning model
ollama pull qwen2.5:7b-instruct
# SIFRA auto-discovers Ollama on http://127.0.0.1:11434`,
};

export const PrivacyDeploymentSection: React.FC = () => {
  const [deployTab, setDeployTab] = useState<'docker' | 'local' | 'ollama'>('docker');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DEPLOY_COMMANDS[deployTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="privacy-deployment" className="relative py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10">
      {/* Editorial Header */}
      <div className="max-w-4xl mb-16">
        <span className="text-amber font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
          Architectural Boundaries & Deployment
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
          Strict localhost perimeter. Zero cloud egress.
        </h2>
        <p className="text-base sm:text-lg text-stone mt-4 max-w-2xl leading-relaxed">
          Verify the architectural boundaries that protect your research. All model inference and document storage
          remain bound to localhost silicon; the only outbound connection is self-hosted metasearch.
        </p>
      </div>

      {/* Grid: Architectural Perimeter Diagram (7 cols) + Quickstart Terminal (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Network Security Topology Map (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline p-8 sm:p-10 relative flex flex-col justify-between min-h-[520px]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-hairline mb-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber" />
                <span className="text-xs font-mono uppercase tracking-wider text-white">Security Perimeter Boundary</span>
              </div>
              <span className="text-[10px] font-mono text-stone-dark">AIRTIGHT ENCLAVE</span>
            </div>

            {/* Visual Boundary Diagram */}
            <div className="rounded-xl bg-obsidian border-2 border-dashed border-hairline-amber p-6 mb-6 relative">
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-amber font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                <span>PROTECTED LOCALHOST PERIMETER (127.0.0.1)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-lg bg-charcoal/70 border border-hairline font-mono text-xs">
                  <div className="text-amber font-bold">Vite Frontend (:5173)</div>
                  <div className="text-[10px] text-stone">Zero cloud analytics trackers</div>
                </div>

                <div className="p-3 rounded-lg bg-charcoal/70 border border-hairline font-mono text-xs">
                  <div className="text-amber font-bold">Node.js Server (:3000)</div>
                  <div className="text-[10px] text-stone">Local orchestration & API hub</div>
                </div>

                <div className="p-3 rounded-lg bg-charcoal/70 border border-hairline font-mono text-xs">
                  <div className="text-amber font-bold">Ollama Daemon (:11434)</div>
                  <div className="text-[10px] text-stone">Host GPU/CPU neural inference</div>
                </div>

                <div className="p-3 rounded-lg bg-charcoal/70 border border-hairline font-mono text-xs">
                  <div className="text-amber font-bold">SQLite FTS5 (Disk)</div>
                  <div className="text-[10px] text-stone">library.db • 100% offline index</div>
                </div>
              </div>
            </div>

            {/* Strict Outbound Conduit */}
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-obsidian/70 border border-hairline font-mono text-xs">
              <div className="flex items-center gap-2 text-stone shrink-0">
                <Globe className="w-4 h-4 text-amber" />
                <span className="text-white font-bold">Sole Outbound Bridge:</span>
              </div>
              <div className="text-xs text-stone leading-relaxed">
                SearXNG Docker (<span className="text-amber">:8080</span>) sends sanitized HTTPS queries to public search providers. No cookies, no prompts, and no user accounts are ever transmitted.
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-hairline flex items-center justify-between font-mono text-xs text-stone">
            <span>Query Egress: Sanitized Metasearch Only</span>
            <span className="text-amber">Data Sovereignty: 100%</span>
          </div>
        </div>

        {/* Right: 1-Click Deployment Quickstart Terminal (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline p-8 sm:p-10 flex flex-col justify-between min-h-[520px]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-hairline mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-amber" />
                <span className="text-xs font-mono uppercase tracking-wider text-white">Quickstart Deployment</span>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs font-mono text-stone hover:text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-amber" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Quickstart Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-charcoal border border-hairline mb-4 font-mono text-xs">
              <button
                onClick={() => setDeployTab('docker')}
                className={`flex-1 py-1.5 rounded text-center transition-all ${
                  deployTab === 'docker' ? 'bg-amber text-obsidian font-bold' : 'text-stone hover:text-white'
                }`}
              >
                1. Docker
              </button>
              <button
                onClick={() => setDeployTab('local')}
                className={`flex-1 py-1.5 rounded text-center transition-all ${
                  deployTab === 'local' ? 'bg-amber text-obsidian font-bold' : 'text-stone hover:text-white'
                }`}
              >
                2. SIFRA Core
              </button>
              <button
                onClick={() => setDeployTab('ollama')}
                className={`flex-1 py-1.5 rounded text-center transition-all ${
                  deployTab === 'ollama' ? 'bg-amber text-obsidian font-bold' : 'text-stone hover:text-white'
                }`}
              >
                3. Model
              </button>
            </div>

            {/* Terminal Box */}
            <div className="rounded-xl bg-obsidian border border-hairline p-4 font-mono text-xs text-stone leading-relaxed overflow-x-auto min-h-[220px]">
              <pre className="whitespace-pre font-mono text-stone-light">
                {DEPLOY_COMMANDS[deployTab]}
              </pre>
            </div>
          </div>

          <div className="pt-6 border-t border-hairline flex items-center justify-between font-mono text-xs text-stone">
            <span>Prerequisites: Node 18+, Docker, Ollama</span>
            <span className="text-amber">MIT Open Source</span>
          </div>
        </div>
      </div>
    </section>
  );
};
