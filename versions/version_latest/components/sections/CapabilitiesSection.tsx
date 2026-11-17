import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Shield, Check } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  // Exhibit 1 state: Research Mode Toggle (Default vs Deep)
  const [researchMode, setResearchMode] = useState<'default' | 'deep'>('deep');

  // Exhibit 2 state: Thinking Accordion Open/Closed
  const [isThinkingOpen, setIsThinkingOpen] = useState(true);

  // Exhibit 3 state: Security Filter Toggle
  const [filterActive, setFilterActive] = useState(true);

  return (
    <section id="capabilities" className="relative py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10">
      {/* Editorial Header */}
      <div className="max-w-4xl mb-16">
        <span className="text-amber font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
          Core Research Capabilities
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
          Deep grounding, transparent reasoning, and protected memory.
        </h2>
        <p className="text-base sm:text-lg text-stone mt-4 max-w-2xl leading-relaxed">
          SIFRA replaces generic AI chat completions with deep recursive research, audit-grade chain-of-thought traces,
          and an autonomous memory vault guarded against credential leaks.
        </p>
      </div>

      {/* 3 Distinct Visual Demonstrations */}
      <div className="space-y-16">
        {/* Exhibit 1: Dual Research Mode Matrix (Split Comparison) */}
        <div className="rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-hairline mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber font-bold block mb-1">
                EXHIBIT 01 • ADAPTIVE GROUNDING MATRIX
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Default Answer vs Deep Research Mode</h3>
            </div>

            {/* Mode Selector Pill */}
            <div className="inline-flex items-center p-1 rounded-xl bg-charcoal border border-hairline">
              <button
                onClick={() => setResearchMode('default')}
                className={`px-5 py-2.5 rounded-lg font-mono text-xs uppercase transition-all ${
                  researchMode === 'default'
                    ? 'bg-amber text-obsidian font-bold shadow-subtle-elevation'
                    : 'text-stone hover:text-white'
                }`}
              >
                Default Grounding (5 Sources)
              </button>
              <button
                onClick={() => setResearchMode('deep')}
                className={`px-5 py-2.5 rounded-lg font-mono text-xs uppercase transition-all ${
                  researchMode === 'deep'
                    ? 'bg-amber text-obsidian font-bold shadow-subtle-elevation'
                    : 'text-stone hover:text-white'
                }`}
              >
                Deep Research (8 Sources + Multi-Query)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 font-normal text-base text-stone leading-relaxed">
              {researchMode === 'default' ? (
                <div>
                  <p className="mb-4">
                    In <strong className="text-white">Default Mode</strong>, SIFRA generates a targeted single-pass search query, queries SearXNG across 5 engines in parallel, extracts up to 5 verified passages, and synthesizes an immediate grounded response.
                  </p>
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="flex items-center gap-2 text-white">
                      <Check className="w-4 h-4 text-amber" />
                      <span>Single-hop query routing</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Check className="w-4 h-4 text-amber" />
                      <span>5 verified source citations</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Check className="w-4 h-4 text-amber" />
                      <span>Sub-second retrieval overhead</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="mb-4">
                    In <strong className="text-white">Deep Research Mode</strong>, SIFRA deconstructs your question into multiple sub-inquiries, surveys up to 8 diverse web and library passages, resolves conflicting information, and cross-references source URLs with footnotes.
                  </p>
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="flex items-center gap-2 text-white">
                      <Check className="w-4 h-4 text-amber" />
                      <span>Iterative multi-query decomposition</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Check className="w-4 h-4 text-amber" />
                      <span>Up to 8 verified sources & cross-referencing</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Check className="w-4 h-4 text-amber" />
                      <span>Comprehensive bibliography citations</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Visual Telemetry Monitor */}
            <div className="lg:col-span-7 rounded-xl bg-obsidian border border-hairline p-6 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-hairline mb-4 text-stone-dark text-[11px]">
                <span>ORCHESTRATOR TELEMETRY</span>
                <span className="text-amber">CONFIG: {researchMode.toUpperCase()}</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-stone">Query Fan-Out Count:</span>
                  <span className="text-white font-bold">{researchMode === 'deep' ? '3 Iterative Passes' : '1 Single Pass'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone">Max Ingested Passages:</span>
                  <span className="text-white font-bold">{researchMode === 'deep' ? '8 Verified Documents' : '5 Top Passages'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone">Citation Deduplication:</span>
                  <span className="text-amber font-semibold">Active (Canonical URLs merged)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone">Prompt Guardrail Check:</span>
                  <span className="text-amber font-semibold">Enforced (HTML & UTM scrubbed)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibit 2: Transparent Chain-of-Thought Reasoning Terminal */}
        <div className="rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline p-8 sm:p-12">
          <span className="text-xs font-mono uppercase tracking-widest text-amber font-bold block mb-1">
            EXHIBIT 02 • REASONING TRANSPARENCY
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Collapsible &lt;think&gt; Accordion</h3>
          <p className="text-base text-stone max-w-2xl mb-8 leading-relaxed">
            For models like DeepSeek-R1 and Qwen 2.5, SIFRA extracts internal chain-of-thought tokens into an interactive collapsible accordion, keeping the final synthesis clean while preserving full auditability.
          </p>

          <div className="rounded-xl bg-obsidian border border-hairline overflow-hidden font-mono text-xs">
            {/* Collapsible Accordion Header */}
            <button
              onClick={() => setIsThinkingOpen(!isThinkingOpen)}
              className="w-full px-6 py-4 bg-charcoal/70 border-b border-hairline flex items-center justify-between text-left hover:bg-charcoal transition-colors"
            >
              <div className="flex items-center gap-3">
                {isThinkingOpen ? (
                  <ChevronDown className="w-4 h-4 text-amber" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-stone" />
                )}
                <span className="text-stone font-bold">Thought Process (18.4s)</span>
                <span className="text-[10px] text-stone-dark px-2.5 py-0.5 rounded bg-obsidian border border-hairline">
                  &lt;think&gt; tags parsed
                </span>
              </div>
              <span className="text-xs text-amber font-semibold">
                {isThinkingOpen ? 'Click to collapse' : 'Click to inspect reasoning'}
              </span>
            </button>

            {/* Accordion Content */}
            {isThinkingOpen && (
              <div className="p-6 text-stone-dark bg-obsidian/90 border-b border-hairline leading-relaxed text-xs space-y-2.5">
                <p className="text-stone">
                  1. User asked to compare SQLite FTS5 with Elasticsearch for local embedded workloads.
                </p>
                <p>
                  2. SearXNG returned 8 results. Evaluating BM25 ranking: node:sqlite includes native FTS5 with zero daemon overhead.
                </p>
                <p>
                  3. Elasticsearch requires JVM container and ~2GB idle RAM. Discarding JVM memory overhead for single-user desktop research.
                </p>
                <p className="text-amber">
                  4. Formulating synthesized conclusion: SQLite FTS5 is ideal for zero-dependency offline local research.
                </p>
              </div>
            )}

            {/* Final Synthesized Output */}
            <div className="p-6 text-white leading-relaxed text-sm">
              <div className="text-[10px] font-mono text-stone-dark uppercase mb-3">Final Synthesized Answer</div>
              <p className="mb-3 text-stone-light leading-relaxed">
                For embedded local research, <strong className="text-white">SQLite FTS5</strong> delivers algorithmic BM25 relevance ranking with zero auxiliary daemon memory footprint, compiling directly into the host binary [1].
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-amber mt-5">
                <span>Sources:</span>
                <span className="px-2.5 py-1 rounded bg-graphite border border-hairline text-stone">[1] sqlite.org/fts5.html</span>
                <span className="px-2.5 py-1 rounded bg-graphite border border-hairline text-stone">[2] sifra/services/libraryService.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibit 3: Autonomous Memory Vault & Security Filter */}
        <div className="rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-hairline mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber font-bold block mb-1">
                EXHIBIT 03 • DURABLE MEMORY SUBSYSTEM
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Autonomous Fact Store with Credential Shield</h3>
              <p className="text-base text-stone max-w-xl mt-2 leading-relaxed">
                SIFRA autonomously captures durable user preferences in data/user_facts.json while strictly blocking passwords, API keys, and sensitive tokens.
              </p>
            </div>

            {/* Security Shield Toggle */}
            <button
              onClick={() => setFilterActive(!filterActive)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border font-mono text-xs uppercase transition-all ${
                filterActive
                  ? 'bg-amber text-obsidian border-amber font-bold shadow-subtle-elevation'
                  : 'bg-charcoal text-stone border-hairline'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>{filterActive ? 'Credential Shield: ACTIVE' : 'Credential Shield: BYPASSED'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            {/* Accepted User Facts */}
            <div className="p-6 rounded-xl bg-obsidian border border-hairline">
              <div className="text-[11px] text-amber uppercase tracking-wider mb-4 flex items-center justify-between font-bold">
                <span>Durable Retained Facts (user_facts.json)</span>
                <Check className="w-4 h-4 text-amber" />
              </div>
              <div className="space-y-3 text-stone">
                <div className="p-3 rounded-lg bg-charcoal/40 border border-hairline flex items-center justify-between">
                  <span>Development Stack</span>
                  <span className="text-white font-bold">TypeScript / React 18</span>
                </div>
                <div className="p-3 rounded-lg bg-charcoal/40 border border-hairline flex items-center justify-between">
                  <span>Hardware VRAM</span>
                  <span className="text-white font-bold">16 GB (NVIDIA RTX 4080)</span>
                </div>
                <div className="p-3 rounded-lg bg-charcoal/40 border border-hairline flex items-center justify-between">
                  <span>Preferred Model</span>
                  <span className="text-white font-bold">qwen2.5:7b-instruct</span>
                </div>
              </div>
            </div>

            {/* Blocked Credentials Simulation */}
            <div className="p-6 rounded-xl bg-obsidian border border-hairline">
              <div className="text-[11px] text-stone-dark uppercase tracking-wider mb-4 flex items-center justify-between font-bold">
                <span>Intercepted Sensitive Tokens (Security Filter)</span>
                <span className="text-amber">BLOCKED</span>
              </div>
              <div className="space-y-3 text-stone">
                <div className="p-3 rounded-lg bg-charcoal/40 border border-hairline flex items-center justify-between">
                  <span className="line-through text-stone-dark">API Key: sk-ant-api03-***</span>
                  <span className="text-amber text-[10px]">Excised from memory</span>
                </div>
                <div className="p-3 rounded-lg bg-charcoal/40 border border-hairline flex items-center justify-between">
                  <span className="line-through text-stone-dark">Bearer Token: eyJhbGci...</span>
                  <span className="text-amber text-[10px]">Excised from memory</span>
                </div>
                <div className="p-3 rounded-lg bg-charcoal/40 border border-hairline flex items-center justify-between">
                  <span className="line-through text-stone-dark">Password: ********</span>
                  <span className="text-amber text-[10px]">Excised from memory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
