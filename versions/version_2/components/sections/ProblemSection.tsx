import React from 'react';
import { AlertCircle, CloudOff, Lock, CheckCircle2, Zap } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-hairline text-amber text-[11px] font-mono uppercase tracking-widest mb-4">
          Scene 02 • Deconstruction
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          The Artificial Compromise in Modern AI Research
        </h2>
        <p className="text-base sm:text-lg text-stone leading-relaxed">
          Until now, choosing how to research with AI forced developers to sacrifice either their current knowledge
          or their sovereignty.
        </p>
      </div>

      {/* Editorial Split Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Column: The Two Flawed Paths (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Path 1: Cloud Search APIs */}
          <div className="p-7 rounded-2xl bg-graphite border border-hairline relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-charcoal border border-hairline flex items-center justify-center text-stone">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Commercial Cloud APIs</h3>
                <span className="text-xs font-mono text-stone">The Subscription Tax & Data Trail</span>
              </div>
            </div>
            <p className="text-sm text-stone leading-relaxed mb-4">
              Search APIs like Google Custom Search, Bing, or Tavily provide fresh answers, but require mandatory credit card billing, recurring per-seat fees, and transmit private queries and prompts across third-party corporate servers.
            </p>
            <div className="text-[11px] font-mono text-stone-dark flex items-center gap-2">
              <span>Trade-off:</span>
              <span className="text-white">Current data, but zero local autonomy</span>
            </div>
          </div>

          {/* Path 2: Isolated Local Models */}
          <div className="p-7 rounded-2xl bg-graphite border border-hairline relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-charcoal border border-hairline flex items-center justify-center text-stone">
                <CloudOff className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Isolated Local LLMs</h3>
                <span className="text-xs font-mono text-stone">The Frozen Cutoff Barrier</span>
              </div>
            </div>
            <p className="text-sm text-stone leading-relaxed mb-4">
              Running an Ollama model locally provides privacy and zero API costs, but its knowledge is permanently frozen at training time. It cannot verify recent documentation, breaking library changes, or real-time web facts.
            </p>
            <div className="text-[11px] font-mono text-stone-dark flex items-center gap-2">
              <span>Trade-off:</span>
              <span className="text-white">Complete privacy, but zero real-time awareness</span>
            </div>
          </div>
        </div>

        {/* Right Column: SIFRA Architectural Convergence (5 cols) */}
        <div className="lg:col-span-5 p-8 rounded-2xl bg-graphite-card border border-hairline-amber flex flex-col justify-between relative shadow-subtle-elevation">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-amber-soft border border-hairline-amber text-amber text-[10px] font-mono uppercase tracking-wider mb-4 font-bold">
              The SIFRA Solution
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Self-Hosted Search Convergence</h3>
            <p className="text-sm text-stone leading-relaxed mb-6">
              SIFRA eliminates the compromise by orchestrating an isolated SearXNG Docker metasearch container and an offline SQLite BM25 knowledge index on your machine:
            </p>

            <ul className="space-y-4 text-xs font-mono text-stone-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
                <span>SearXNG queries 5 public engines in parallel without tracking cookies or user accounts.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
                <span>SQLite FTS5 BM25 retrieves personal offline documents simultaneously.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
                <span>Ollama synthesizes answers with verifiable inline citations ([1], [2]) on your hardware.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-hairline flex items-center justify-between text-xs font-mono">
            <span className="text-stone">Live Intelligence</span>
            <span className="text-amber font-bold">Zero Cloud Subscriptions</span>
          </div>
        </div>
      </div>

      {/* Technical Clarity Footnote */}
      <div className="p-4 rounded-xl bg-graphite/50 border border-hairline text-xs text-stone flex items-start sm:items-center gap-3">
        <Lock className="w-4 h-4 text-amber shrink-0 mt-0.5 sm:mt-0" />
        <p>
          <strong className="text-white">Technical Architecture Note:</strong> While application state, database indexing, and neural inference occur exclusively on your machine, live metasearch connects directly to external search providers via SearXNG to fetch public web results.
        </p>
      </div>
    </section>
  );
};
