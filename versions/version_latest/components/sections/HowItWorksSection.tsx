import React, { useState, useEffect } from 'react';
import { Search, Database, Filter, FileText, Cpu, Play, CheckCircle2, ArrowRight } from 'lucide-react';

interface PipelineStage {
  step: string;
  name: string;
  subhead: string;
  latency: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  inputPayload: string;
  outputPayload: string;
}

const STAGES: PipelineStage[] = [
  {
    step: '01',
    name: 'Intent Routing & Disambiguation',
    subhead: 'Conversational Query Refinement',
    latency: '12 ms',
    icon: Search,
    description:
      'The Orchestrator evaluates the user prompt alongside conversation history. If the query references prior dialogue, pronouns are resolved and intent is targeted to web, local library, or dual retrieval.',
    inputPayload: 'User Prompt: "Compare it with SQLite FTS5" (context: earlier discussed Elasticsearch)',
    outputPayload: 'Disambiguated Query: "Compare Elasticsearch with SQLite FTS5 full-text search benchmark"',
  },
  {
    step: '02',
    name: 'Parallel Dual Fan-Out',
    subhead: 'SearXNG Docker (:8080) + SQLite FTS5',
    latency: '240 ms',
    icon: Database,
    description:
      'Concurrent retrieval queries are dispatched to the local SearXNG Docker container (aggregating DuckDuckGo, Google, Bing, Wikipedia, GitHub) and the offline SQLite document virtual table.',
    inputPayload: 'Target: 127.0.0.1:8080/search + data/library.db query',
    outputPayload: 'Retrieved: 34 raw web results + 8 offline document matches',
  },
  {
    step: '03',
    name: 'Filtering & BM25 Scoring',
    subhead: 'UTM Stripping & Relevance Ranking',
    latency: '38 ms',
    icon: Filter,
    description:
      'Tracking parameters (UTM, fbclid) are excised. Canonical URLs are deduplicated. Candidate passages are scored and ranked via the BM25 statistical relevance formula.',
    inputPayload: 'Raw payloads with redundant tracking tokens and markup',
    outputPayload: 'Top 8 normalized, high-relevance passages ranked by BM25 coefficient',
  },
  {
    step: '04',
    name: 'Grounded Context Construction',
    subhead: 'Injection Defense & Memory Merge',
    latency: '18 ms',
    icon: FileText,
    description:
      'Candidate passages are strictly demarcated within untrusted reference tags to prevent indirect prompt injection. Durable preferences from user_facts.json are appended securely.',
    inputPayload: 'Ranked candidate snippets + verified facts store',
    outputPayload: '<context source="verified_web" id="1">...strict bounds...</context>',
  },
  {
    step: '05',
    name: 'Local Neural Synthesis',
    subhead: 'Ollama Streaming & <think> Accordion',
    latency: 'Streaming',
    icon: Cpu,
    description:
      'Ollama streams inference tokens over localhost. Reasoning models stream transparent chain-of-thought within collapsible <think> tags before delivering the final markdown answer with citations.',
    inputPayload: 'Grounded system prompt sent to 127.0.0.1:11434/api/chat',
    outputPayload: '<think>Reasoning through BM25 vs FTS5...</think>\nSynthesized answer with [1][2] citations',
  },
];

export const HowItWorksSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // Simulation runner: step through stages 0 -> 4 automatically
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => {
        if (prev >= STAGES.length - 1) {
          setIsSimulating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const runSimulation = () => {
    setActiveStageIndex(0);
    setIsSimulating(true);
  };

  const activeStage = STAGES[activeStageIndex];

  return (
    <section id="how-it-works" className="relative py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10">
      {/* Editorial Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <div className="max-w-4xl">
          <span className="text-amber font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
            The Research Lifecycle
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            From raw question to verified truth.
          </h2>
          <p className="text-base sm:text-lg text-stone mt-4 max-w-2xl leading-relaxed">
            Follow the millisecond lifecycle of a query as it travels through local disambiguation,
            parallel metasearch, algorithmic BM25 scoring, and private neural synthesis.
          </p>
        </div>

        {/* Pipeline Simulation Trigger */}
        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber hover:bg-amber-hover text-obsidian font-mono font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 shrink-0 shadow-subtle-elevation"
        >
          <Play className="w-4 h-4 fill-obsidian" />
          <span>{isSimulating ? 'Simulating Pipeline...' : 'Simulate Query Cycle'}</span>
        </button>
      </div>

      {/* Visual Pipeline Station Strip (Horizontal Track) */}
      <div className="mb-12 relative">
        {/* Connecting track line */}
        <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-hairline z-0" />
        <div
          className="hidden lg:block absolute top-7 left-12 h-0.5 bg-amber transition-all duration-500 z-0"
          style={{ width: `${(activeStageIndex / (STAGES.length - 1)) * 90}%` }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            const isCompleted = activeStageIndex > idx;
            const Icon = stage.icon;

            return (
              <button
                key={stage.step}
                onClick={() => {
                  setIsSimulating(false);
                  setActiveStageIndex(idx);
                }}
                className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-graphite-card border-amber shadow-subtle-elevation scale-[1.02]'
                    : isCompleted
                    ? 'bg-graphite/80 border-hairline-amber text-stone'
                    : 'bg-graphite/40 border-hairline text-stone hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                      isActive
                        ? 'bg-amber text-obsidian'
                        : isCompleted
                        ? 'bg-amber/20 text-amber'
                        : 'bg-charcoal text-stone'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[11px] text-amber font-semibold">
                    {stage.latency}
                  </span>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-stone-dark uppercase">
                    Stage {stage.step}
                  </div>
                  <div className={`font-bold text-xs truncate mt-0.5 ${isActive ? 'text-white' : 'text-stone'}`}>
                    {stage.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Active Stage Telemetry & Payload Inspector */}
      <div className="rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline p-8 sm:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stage Details (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded bg-amber/15 border border-amber/30 text-amber font-mono text-xs font-bold">
                  STAGE {activeStage.step}
                </span>
                <span className="font-mono text-xs text-stone">{activeStage.subhead}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{activeStage.name}</h3>
              <p className="text-base text-stone leading-relaxed mb-6 font-normal">
                {activeStage.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian/80 border border-hairline flex items-center justify-between font-mono text-xs">
              <span className="text-stone">Measured Processing Latency:</span>
              <span className="text-amber font-bold">{activeStage.latency}</span>
            </div>
          </div>

          {/* Live Payload Inspector (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="rounded-xl bg-obsidian border border-hairline p-5 font-mono text-xs">
              <div className="text-[10px] text-stone-dark uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Ingested Stage Input</span>
                <span className="text-amber">127.0.0.1 Bus</span>
              </div>
              <div className="p-3 rounded bg-charcoal/50 border border-hairline text-stone text-[11px] leading-relaxed">
                {activeStage.inputPayload}
              </div>
            </div>

            <div className="rounded-xl bg-obsidian border border-hairline p-5 font-mono text-xs">
              <div className="text-[10px] text-stone-dark uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Sanitized Stage Output</span>
                <span className="text-amber">Verified Contract</span>
              </div>
              <div className="p-3 rounded bg-charcoal/50 border border-hairline text-stone-light text-[11px] leading-relaxed">
                {activeStage.outputPayload}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
