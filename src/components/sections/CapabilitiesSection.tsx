import React, { useState } from 'react';
import { Cpu, Search, Database, HardDrive, Brain, Terminal, Shield, Code, Sparkles, ChevronDown } from 'lucide-react';

interface ModelReasoningSample {
  modelTag: string;
  thoughtTokens: number;
  thoughtText: string;
  synthesis: string;
}

const MODEL_SAMPLES: Record<string, ModelReasoningSample> = {
  'deepseek-r1': {
    modelTag: 'deepseek-r1:8b',
    thoughtTokens: 1420,
    thoughtText:
      '1. Need to cross-examine SQLite FTS5 vs vector databases.\n2. Querying SearXNG for FTS5 latency benchmarks.\n3. Found 3 sources: SQLite BM25 achieves <5ms on 100k docs without GPU vector embeddings.\n4. Formulating answer with verifiable source citations [1][2].',
    synthesis:
      'SQLite FTS5 uses the BM25 probabilistic relevance algorithm [1], enabling instant lexical matching without external vector stores [2].',
  },
  'qwen2.5': {
    modelTag: 'qwen2.5:7b',
    thoughtTokens: 980,
    thoughtText:
      '1. Analyzing query context for metasearch intent.\n2. Deconstructing into targeted keywords for SearXNG engines.\n3. Scoring local markdown documentation with BM25 term weighting.\n4. Synthesizing grounded technical answer with inline links [1].',
    synthesis:
      'SIFRA automatically strips affiliate tokens and tracking parameters from SearXNG payloads [1], delivering clean markdown citations to local context buffers.',
  },
  'llama3.2': {
    modelTag: 'llama3.2:3b',
    thoughtTokens: 640,
    thoughtText:
      '1. Edge device execution: checking host memory envelope.\n2. Allocating 2.2GB VRAM for 3B quantized weights.\n3. Direct retrieval from data/library.db with zero cloud calls.\n4. Emitting cited response [1].',
    synthesis:
      'Quantized 3B models run comfortably on ultrabooks with 8GB RAM [1], sustaining 45+ tokens per second on consumer CPUs.',
  },
};

export const CapabilitiesSection: React.FC = () => {
  const [thinkOpen, setThinkOpen] = useState(true);
  const [selectedModel, setSelectedModel] = useState<'deepseek-r1' | 'qwen2.5' | 'llama3.2'>('deepseek-r1');
  const sample = MODEL_SAMPLES[selectedModel];

  return (
    <section id="capabilities" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white text-content-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft border border-surface-border text-content-secondary text-xs font-mono uppercase tracking-caption mb-4">
            <span>Verified Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-title text-content-primary mb-6 leading-tight">
            Engineered for Deep Work. Zero Subscriptions.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal tracking-body">
            Every capability in SIFRA is implemented as an inspectable local module, verified from
            actual application source code.
          </p>
        </div>

        {/* Varied Editorial Composition */}
        <div className="space-y-6">
          {/* Hero Feature 1: Deep Research with Chain-of-Thought Think Mode */}
          <div className="p-7 sm:p-10 rounded-squircle-xl bg-surface-soft border border-surface-border shadow-apple-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center light-catch-edge-light">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-surface-border text-xs font-mono text-amber font-semibold mb-3 shadow-apple-sm">
                <Brain className="w-3.5 h-3.5" />
                <span>Deep Research &amp; Think Mode</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-title text-content-primary mb-4">
                Transparent Chain-of-Thought with Collapsible &lt;think&gt; Accordions.
              </h3>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-6 tracking-body font-normal">
                When using reasoning models like DeepSeek-R1 or Qwen 2.5 Coder, SIFRA captures and
                renders raw cognitive tokens inside an interactive collapsible thought trace. You see
                exactly what the model reasoned before it committed to the final answer.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-content-secondary">
                {(['deepseek-r1', 'qwen2.5', 'llama3.2'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedModel(m)}
                    className={`px-3 py-1 rounded-md border transition-all btn-spring ${
                      selectedModel === m
                        ? 'bg-content-primary text-white border-content-primary font-semibold shadow-apple-sm'
                        : 'bg-white text-content-secondary border-surface-border hover:bg-surface-soft'
                    }`}
                  >
                    {m === 'deepseek-r1' ? 'DeepSeek-R1 8B' : m === 'qwen2.5' ? 'Qwen 2.5 7B' : 'Llama 3.2 3B'}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Think Mode Simulator */}
            <div className="lg:col-span-6 bg-white p-5 rounded-squircle-md border border-surface-border shadow-apple-sm font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-surface-borderSubtle mb-3">
                <span className="text-content-secondary text-[11px]">Inference Trace: {sample.modelTag}</span>
                <span className="text-emerald-600 font-semibold text-[11px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Streaming Active
                </span>
              </div>

              {/* Collapsible thought accordion */}
              <div className="rounded-md border border-amber-border bg-amber-soft/30 overflow-hidden mb-3">
                <button
                  onClick={() => setThinkOpen(!thinkOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-left text-amber font-semibold text-xs hover:bg-amber-soft/50 transition-colors btn-spring"
                  aria-expanded={thinkOpen}
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>&lt;thought_process&gt; ({sample.thoughtTokens} tokens)</span>
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${thinkOpen ? 'rotate-180' : ''}`} />
                </button>
                {thinkOpen && (
                  <div className="px-3 py-2.5 text-[11px] text-content-secondary border-t border-amber-border/40 leading-relaxed bg-white whitespace-pre-line font-mono">
                    {sample.thoughtText}
                  </div>
                )}
              </div>

              <div className="p-3 rounded bg-surface-soft text-content-primary text-xs leading-relaxed">
                {sample.synthesis}
              </div>
            </div>
          </div>

          {/* Two-Column Asymmetric Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 2: Hardware Profiling */}
            <div className="p-7 sm:p-8 rounded-squircle-xl bg-surface-soft border border-surface-border shadow-apple-sm flex flex-col justify-between light-catch-edge-light">
              <div>
                <div className="w-10 h-10 rounded-squircle-sm bg-white border border-surface-border flex items-center justify-center text-content-primary mb-6 shadow-apple-sm">
                  <HardDrive className="w-5 h-5 text-amber" />
                </div>
                <span className="tag-mono text-content-secondary mb-2 block">
                  Hardware Inspector
                </span>
                <h3 className="text-xl font-bold tracking-title text-content-primary mb-3">
                  Automatic VRAM &amp; RAM Profiling
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed mb-6 tracking-body font-normal">
                  SIFRA queries system controllers (Windows CIM, <code>nvidia-smi</code>, or <code>lspci</code>)
                  at launch to determine host resources, suggesting the optimal parameter tier (1B, 3B, 7B, 14B)
                  to eliminate memory paging and out-of-memory crashes.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-borderSubtle flex items-center justify-between text-xs font-mono text-content-secondary">
                <span>Supported: Windows, Linux, macOS</span>
                <span className="text-content-primary font-medium">Automatic Tiering</span>
              </div>
            </div>

            {/* Feature 3: SQLite FTS5 */}
            <div className="p-7 sm:p-8 rounded-squircle-xl bg-surface-soft border border-surface-border shadow-apple-sm flex flex-col justify-between light-catch-edge-light">
              <div>
                <div className="w-10 h-10 rounded-squircle-sm bg-white border border-surface-border flex items-center justify-center text-content-primary mb-6 shadow-apple-sm">
                  <Database className="w-5 h-5 text-amber" />
                </div>
                <span className="tag-mono text-content-secondary mb-2 block">
                  Zero-Vector Search
                </span>
                <h3 className="text-xl font-bold tracking-title text-content-primary mb-3">
                  SQLite FTS5 with Native BM25 Ranking
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed mb-6 tracking-body font-normal">
                  Index personal notes, PDF exports, and markdown repos directly into <code>data/library.db</code>.
                  Native BM25 full-text indexing matches queries instantaneously without transmitting documents
                  to cloud embedding providers.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-borderSubtle flex items-center justify-between text-xs font-mono text-content-secondary">
                <span>Storage: Local File Database</span>
                <span className="text-content-primary font-medium">Zero Cloud Egress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
