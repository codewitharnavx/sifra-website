import React from 'react';
import { CloudOff, ShieldAlert, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-surface-soft text-content-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-surface-border text-content-secondary text-xs font-mono uppercase tracking-widest mb-4 shadow-apple-sm">
            <span>02</span>
            <span>•</span>
            <span>The Fundamental Trade-off</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-content-primary mb-6 leading-tight">
            The AI Research Dilemma: Current Knowledge or Digital Sovereignty.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
            Every developer and researcher who uses AI for deep technical inquiry is currently forced
            into an unacceptable architectural compromise.
          </p>
        </div>

        {/* Asymmetric Editorial Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          {/* Path A: Commercial Cloud AI (Darker tint / Warning tone) */}
          <div className="lg:col-span-6 p-8 rounded-squircle-xl bg-white border border-surface-border shadow-apple-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-squircle-sm bg-red-50 text-red-600 flex items-center justify-center mb-6">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="tag-mono text-red-600 font-semibold mb-2 block">
                The Cloud Black Box
              </span>
              <h3 className="text-2xl font-bold text-content-primary mb-4">
                Commercial Cloud Search APIs
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed mb-6">
                Cloud AI research tools (Perplexity, OpenAI Search, Google Gemini) provide fresh web answers,
                but every single prompt, confidential codebase query, and internal research note is transmitted
                to third-party remote servers. They require monthly recurring seat licenses, rate-limit your
                deep queries, and hold your research history hostage behind proprietary accounts.
              </p>
            </div>

            <div className="pt-4 border-t border-surface-borderSubtle">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-content-secondary">Core Penalty:</span>
                <span className="text-red-600 font-semibold">Zero Privacy • High Recurring Cost</span>
              </div>
            </div>
          </div>

          {/* Path B: Isolated Local LLMs (Light tint / Cold tone) */}
          <div className="lg:col-span-6 p-8 rounded-squircle-xl bg-white border border-surface-border shadow-apple-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-squircle-sm bg-amber-50 text-amber flex items-center justify-center mb-6">
                <CloudOff className="w-5 h-5" />
              </div>
              <span className="tag-mono text-amber font-semibold mb-2 block">
                The Air-Gapped Island
              </span>
              <h3 className="text-2xl font-bold text-content-primary mb-4">
                Isolated Local Models
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed mb-6">
                Running Ollama locally guarantees that weights run on your GPU and data never leaves your SSD.
                However, weights are frozen at their training cutoff date. When you ask about recent library APIs,
                security patches, or breaking changes from yesterday, local models hallucinate or flatly refuse,
                incapable of accessing live documentation.
              </p>
            </div>

            <div className="pt-4 border-t border-surface-borderSubtle">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-content-secondary">Core Penalty:</span>
                <span className="text-amber font-semibold">Zero Awareness • Frozen Knowledge</span>
              </div>
            </div>
          </div>
        </div>

        {/* The SIFRA Breakthrough Banner: High Impact Linear-Style Showcase */}
        <div className="p-8 sm:p-10 rounded-squircle-xl bg-dark text-content-inversePrimary border border-dark-border shadow-apple-dark-md relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated border border-dark-border text-amber text-xs font-mono uppercase tracking-wider mb-4 font-medium">
              The SIFRA Synthesis
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Sovereign Inference Orchestrating Live Metasearch.
            </h3>
            <p className="text-sm sm:text-base text-content-inverseSecondary leading-relaxed mb-6">
              SIFRA terminates the false dichotomy. By bundling a self-hosted SearXNG Docker container
              and an offline SQLite FTS5 engine directly onto your host, your local neural models query the live
              web without proprietary API keys or user tracking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-dark-border">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <span className="text-xs text-content-inverseSecondary font-mono">
                  100% Local Inference on host GPU/CPU
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <span className="text-xs text-content-inverseSecondary font-mono">
                  5 Live Search Engines via Docker SearXNG
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <span className="text-xs text-content-inverseSecondary font-mono">
                  Zero Subscriptions or Tracking Cookies
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Engineering Disclosure Footnote */}
        <div className="mt-8 px-6 py-4 rounded-squircle-md bg-white border border-surface-border text-xs text-content-secondary flex items-start gap-3">
          <span className="font-mono text-content-primary font-semibold shrink-0">Architectural Note:</span>
          <p>
            Local neural inference and SQLite document indexing run completely offline on your host. Live metasearch connects through your local SearXNG container to public search engine endpoints to gather open web results without account tracking.
          </p>
        </div>
      </div>
    </section>
  );
};
