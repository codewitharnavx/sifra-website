import React from 'react';
import { ShieldCheck, Zap, Lock, Globe, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="relative py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10">
      {/* Massive Editorial Section Header */}
      <div className="max-w-4xl mb-20">
        <span className="text-amber font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
          The Sovereignty Dilemma
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
          The false choice between cloud surveillance and frozen local weights.
        </h2>
      </div>

      {/* Asymmetric Contrast Composition (Large Scale Typography & Negative Space) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        {/* Left Pole: The Cloud Tax */}
        <div className="lg:col-span-6 flex flex-col justify-between border-t border-hairline pt-8">
          <div>
            <div className="flex items-center gap-3 text-stone-dark font-mono text-xs uppercase tracking-widest mb-6">
              <span>01 / Commercial Cloud APIs</span>
            </div>

            <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono mb-6 tracking-tight">
              $20<span className="text-stone text-xl font-sans font-normal">/seat/mo + per-token fees</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Your research queries belong to corporate servers.
            </h3>

            <p className="text-base text-stone leading-relaxed font-normal mb-8">
              Google Custom Search, Bing, Tavily, and Perplexity provide fresh answers, but require recurring billing, mandatory API keys, and transmit private prompts and proprietary research topics across third-party networks.
            </p>
          </div>

          <div className="text-xs font-mono text-amber flex items-center gap-2 pt-4 border-t border-hairline/60">
            <Lock className="w-3.5 h-3.5" />
            <span>Fails enterprise privacy & zero-retention audits</span>
          </div>
        </div>

        {/* Right Pole: The Frozen Enclave */}
        <div className="lg:col-span-6 flex flex-col justify-between border-t border-hairline pt-8">
          <div>
            <div className="flex items-center gap-3 text-stone-dark font-mono text-xs uppercase tracking-widest mb-6">
              <span>02 / Isolated Local Models</span>
            </div>

            <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono mb-6 tracking-tight">
              Cutoff: <span className="text-stone text-xl font-sans font-normal">Permanently Frozen</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Private silicon, completely blind to today's web.
            </h3>

            <p className="text-base text-stone leading-relaxed font-normal mb-8">
              Running Ollama locally is private, free, and fast, but offline weights cannot verify breaking software releases, new documentation, or live facts. On current technical inquiries, isolated LLMs hallucinate with high confidence.
            </p>
          </div>

          <div className="text-xs font-mono text-amber flex items-center gap-2 pt-4 border-t border-hairline/60">
            <Globe className="w-3.5 h-3.5" />
            <span>Fails real-time verification & grounding standards</span>
          </div>
        </div>
      </div>

      {/* SIFRA Convergence Banner: Dissolving the Compromise */}
      <div className="rounded-2xl bg-gradient-to-r from-graphite via-charcoal to-graphite border border-hairline-amber p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber/15 border border-amber/30 text-amber text-[11px] font-mono uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>SIFRA'S ZERO-COMPROMISE CONVERGENCE</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Live web grounding. Hosted on your own machine. Zero subscriptions.
          </h3>

          <p className="text-base text-stone leading-relaxed font-normal mb-6">
            SIFRA orchestrates local Ollama reasoning over an isolated Docker SearXNG container and an offline SQLite BM25 library. Queries are sanitized, fetched locally, synthesized on host silicon, and stored permanently on your machine.
          </p>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-white">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber" />
              <span>$0 API Search Subscriptions</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber" />
              <span>100% On-Device Prompt Privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber" />
              <span>Multi-Engine Real-Time Citations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
