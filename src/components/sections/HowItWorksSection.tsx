import React, { useState } from 'react';
import { ArrowRight, Check, Play, RefreshCw, Terminal, Search, Database, Cpu, FileText } from 'lucide-react';

interface Stage {
  step: string;
  title: string;
  action: string;
  description: string;
  inputExample: string;
  outputExample: string;
  module: string;
}

const STAGES: Stage[] = [
  {
    step: '01',
    title: 'Context & Query Analysis',
    action: 'Prompt Deconstruction & Enhancement',
    description:
      'The incoming research prompt is analyzed by the local model. SIFRA decomposes complex multifaceted queries into clean, discrete search keywords tailored for both web metasearch and document retrieval.',
    inputExample: '"Explain how SQLite FTS5 BM25 compares to vector embeddings for small codebases"',
    outputExample: 'Generated queries: ["sqlite fts5 bm25 algorithm", "bm25 vs embeddings latency code"]',
    module: 'services/ollamaService.js (enhancePrompt)',
  },
  {
    step: '02',
    title: 'Dual-Channel Retrieval',
    action: 'Parallel Metasearch & Offline FTS5',
    description:
      'SIFRA triggers simultaneous asynchronous requests: dispatching clean queries to the local Docker SearXNG container across 5 engines, while simultaneously running MATCH queries across data/library.db with SQLite FTS5.',
    inputExample: 'Parallel query dispatch -> SearXNG :8080 & SQLite library.db',
    outputExample: '18 Raw Web Results (DuckDuckGo, Google, GitHub) + 4 Local Library Docs matched',
    module: 'services/searxngService.js & services/sqliteService.js',
  },
  {
    step: '03',
    title: 'Ranking & Normalization',
    action: 'BM25 Scoring & Link Sanitization',
    description:
      'Search results are deduplicated and stripped of affiliate tokens, UTM parameters, and tracking headers. Local documents and web snippets are scored with BM25 term frequency-inverse document frequency weighting.',
    inputExample: '18 Web Results + 4 Local Docs',
    outputExample: 'Top 6 Highest-Relevance Snippets (Average relevance score: 0.892)',
    module: 'utils/searchParser.js',
  },
  {
    step: '04',
    title: 'Grounded Context Assembly',
    action: 'Token Budget Alignment & Attribution Indexing',
    description:
      'The top-ranked passages are assembled into an augmented system context with strict source indexing. Each source is numbered ([1], [2], [3]), bounding the LLM to cite verifiable claims directly.',
    inputExample: 'Indexed contexts with [1]: SQLite FTS5 docs, [2]: Architecture benchmark',
    outputExample: 'Augmented Prompt Context: 2,840 tokens (within Ollama context window)',
    module: 'services/researchOrchestrator.js',
  },
  {
    step: '05',
    title: 'Answer Synthesis & Citations',
    action: 'Streaming Local LLM Inference',
    description:
      'The local model streams its response via NDJSON chunks. Citations are emitted as interactive inline pills linked to the exact source URLs and local document titles, preventing ungrounded hallucinations.',
    inputExample: 'Augmented context passed to selected model (e.g., Qwen 2.5 7B)',
    outputExample: '"SQLite FTS5 uses BM25 ranking [1], delivering sub-millisecond lookups without GPU VRAM [2]."',
    module: 'controllers/chatController.js',
  },
];

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-surface-paper text-content-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-surface-border text-content-secondary text-xs font-mono uppercase tracking-widest mb-4 shadow-apple-sm">
            <span>04</span>
            <span>•</span>
            <span>Execution Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-content-primary mb-6 leading-tight">
            How Research Transforms into Grounded Answers.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
            From raw input query to cited synthesis, every step occurs transparently on your machine
            in five verifiable stages.
          </p>
        </div>

        {/* Interactive Step-by-Step Pipeline Scrubber */}
        <div className="rounded-squircle-xl bg-white border border-surface-border shadow-apple-md p-6 sm:p-10 mb-8">
          {/* Step Track */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-8 pb-6 border-b border-surface-borderSubtle">
            {STAGES.map((s, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-2 sm:p-3 rounded-squircle-sm transition-all text-xs font-mono ${
                    isActive
                      ? 'bg-content-primary text-white font-semibold shadow-apple-sm'
                      : isPast
                      ? 'bg-surface-soft text-content-primary'
                      : 'text-content-tertiary hover:bg-surface-soft'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span>{s.step}</span>
                    {isPast && <Check className="w-3 h-3 text-emerald-600" />}
                  </div>
                  <div className="hidden sm:block truncate text-[11px]">{s.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <span className="tag-mono text-amber font-semibold mb-2 block">
                Stage {STAGES[activeStep].step} • {STAGES[activeStep].action}
              </span>
              <h3 className="text-2xl font-bold text-content-primary mb-4">
                {STAGES[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed mb-6 font-normal">
                {STAGES[activeStep].description}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-content-tertiary">
                <span>Underlying Handler:</span>
                <span className="text-content-primary font-medium">{STAGES[activeStep].module}</span>
              </div>
            </div>

            {/* Live Data Simulation Box */}
            <div className="lg:col-span-5 p-5 rounded-squircle-md bg-surface-soft border border-surface-border font-mono text-xs">
              <div className="text-[11px] text-content-tertiary uppercase tracking-wider mb-2">
                Input Payload
              </div>
              <div className="p-2.5 rounded bg-white border border-surface-border mb-4 text-content-secondary break-words">
                {STAGES[activeStep].inputExample}
              </div>

              <div className="text-[11px] text-content-tertiary uppercase tracking-wider mb-2">
                Processed Output
              </div>
              <div className="p-2.5 rounded bg-white border border-amber-border text-content-primary font-medium break-words">
                {STAGES[activeStep].outputExample}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
