import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Sliders, Cpu, Send, Code, Sparkles } from 'lucide-react';

type Lang = 'curl' | 'python' | 'node';

const CODE_EXAMPLES: Record<Lang, { title: string; code: string }> = {
  curl: {
    title: 'cURL • Search & Grounded Answer',
    code: `curl -X POST http://localhost:5000/api/chat \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Explain SQLite BM25 vs Vector Search latency",
    "deep_research": true,
    "model": "qwen2.5:7b"
  }'`,
  },
  python: {
    title: 'Python • Async Streaming Client',
    code: `import httpx
import json

async def query_sifra(prompt: str):
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "http://localhost:5000/api/chat",
            json={
                "message": prompt,
                "deep_research": True,
                "model": "qwen2.5:7b"
            },
            timeout=60.0
        )
        data = response.json()
        print("Answer:", data["response"])
        print("Citations:", json.dumps(data["citations"], indent=2))`,
  },
  node: {
    title: 'Node.js • Native Fetch Client',
    code: `const response = await fetch('http://localhost:5000/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'Compare SQLite FTS5 vs Vector embeddings',
    deep_research: true,
    model: 'qwen2.5:7b'
  })
});

const { response: answer, citations } = await response.json();
console.log('Grounded Answer:', answer);
console.log('Verified Citations:', citations);`,
  },
};

const RAM_TIERS = [
  {
    tier: '8 GB RAM / 4 GB VRAM',
    category: 'Lightweight & Edge',
    models: ['llama3.2:1b', 'llama3.2:3b', 'qwen2.5:3b'],
    context: '4,096 tokens',
    latency: '~45 ms / token',
    note: 'Zero swapping on ultrabooks and standard consumer laptops.',
  },
  {
    tier: '16 GB RAM / 8 GB VRAM',
    category: 'Balanced Research (Recommended)',
    models: ['qwen2.5:7b', 'llama3.1:8b', 'deepseek-r1:8b'],
    context: '8,192 tokens',
    latency: '~28 ms / token',
    note: 'Optimal reasoning and search context synthesis with <think> mode.',
  },
  {
    tier: '32+ GB RAM / 16+ GB VRAM',
    category: 'Deep Synthesis Workstation',
    models: ['qwen2.5:14b', 'deepseek-r1:14b', 'llama3.1:70b-q4'],
    context: '16,384 tokens',
    latency: '~18 ms / token',
    note: 'Extended multi-turn synthesis with deep iterative document indexing.',
  },
];

export const HardwareApiSection: React.FC = () => {
  const [activeLang, setActiveLang] = useState<Lang>('curl');
  const [copied, setCopied] = useState(false);
  const [selectedTierIdx, setSelectedTierIdx] = useState(1);

  // Simulated API Interactive Workbench State
  const [simQuery, setSimQuery] = useState('Compare SQLite FTS5 BM25 vs Vector Search latency');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResponse, setSimResponse] = useState<string | null>(null);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_EXAMPLES[activeLang].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimResponse(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimResponse(
        `SQLite FTS5 delivers sub-5ms query latency using native BM25 term frequency-inverse document frequency ranking [1]. In local benchmarks with up to 100,000 technical documents, BM25 executes in under 4ms on consumer CPUs with zero GPU VRAM consumption, whereas dense vector embeddings require 40–120ms and 2GB+ VRAM [2].\n\nCitations:\n[1] SQLite FTS5 Extension Documentation (sqlite.org/fts5.html)\n[2] Local SIFRA Retrieval Benchmarks (data/library.db)`
      );
    }, 600);
  };

  return (
    <section id="hardware-api" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-surface-soft text-content-primary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-surface-border text-content-secondary text-xs font-mono uppercase tracking-widest mb-4 shadow-apple-sm">
            <span>07</span>
            <span>•</span>
            <span>Technical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-content-primary mb-6 leading-tight">
            Hardware Intelligence & Headless API.
          </h2>
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-normal">
            SIFRA pairs automatic hardware profiling with a standardized REST API, allowing developers
            to integrate local research synthesis into existing scripts, bots, and CI pipelines.
          </p>
        </div>

        {/* Part 1: Hardware-Aware Model Recommender */}
        <div className="rounded-squircle-xl bg-white border border-surface-border shadow-apple-md p-6 sm:p-10 mb-12">
          <div className="flex items-center justify-between pb-6 border-b border-surface-borderSubtle mb-6">
            <div>
              <span className="tag-mono text-amber font-semibold block mb-1">
                Subsystem 01 • Memory Profiling
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-content-primary">
                Hardware-Aware Model Selection
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-content-secondary">
              <Cpu className="w-4 h-4 text-amber" />
              <span>Host Controller Inspection</span>
            </div>
          </div>

          {/* Tier Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {RAM_TIERS.map((tier, idx) => {
              const isSelected = selectedTierIdx === idx;
              return (
                <button
                  key={tier.tier}
                  onClick={() => setSelectedTierIdx(idx)}
                  className={`text-left p-4 rounded-squircle-sm border transition-all text-xs font-mono ${
                    isSelected
                      ? 'bg-content-primary text-white border-content-primary shadow-apple-sm'
                      : 'bg-surface-soft text-content-secondary border-surface-border hover:bg-white hover:text-content-primary'
                  }`}
                >
                  <div className="font-bold mb-1">{tier.tier}</div>
                  <div className={`text-[11px] ${isSelected ? 'text-white/80' : 'text-content-tertiary'}`}>
                    {tier.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Tier Specifications */}
          <div className="p-5 rounded-squircle-md bg-surface-soft border border-surface-border text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 pb-4 border-b border-surface-borderSubtle">
              <div>
                <span className="text-content-tertiary block mb-1">Recommended Models:</span>
                <span className="text-content-primary font-bold">
                  {RAM_TIERS[selectedTierIdx].models.join(', ')}
                </span>
              </div>
              <div>
                <span className="text-content-tertiary block mb-1">Context Window:</span>
                <span className="text-content-primary font-bold">
                  {RAM_TIERS[selectedTierIdx].context}
                </span>
              </div>
              <div>
                <span className="text-content-tertiary block mb-1">Estimated Speed:</span>
                <span className="text-emerald-600 font-bold">
                  {RAM_TIERS[selectedTierIdx].latency}
                </span>
              </div>
            </div>
            <p className="text-content-secondary leading-relaxed">
              <strong className="text-content-primary">Engineering Note:</strong> {RAM_TIERS[selectedTierIdx].note}
            </p>
          </div>
        </div>

        {/* Part 2: Interactive Developer API & Simulated Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Code Viewer */}
          <div className="lg:col-span-6 rounded-squircle-xl bg-dark text-content-inversePrimary border border-dark-border shadow-apple-dark-md overflow-hidden">
            <div className="px-5 py-3.5 bg-dark-graphite border-b border-dark-border flex items-center justify-between">
              <div className="flex gap-2">
                {(['curl', 'python', 'node'] as Lang[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeLang === lang
                        ? 'bg-dark-elevated text-amber font-semibold'
                        : 'text-content-inverseTertiary hover:text-white'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-dark-elevated hover:bg-dark-graphite text-content-inverseSecondary hover:text-white transition-colors"
                aria-label="Copy Code Snippet"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <pre className="p-5 text-xs font-mono text-content-inverseSecondary overflow-x-auto leading-relaxed">
              <code>{CODE_EXAMPLES[activeLang].code}</code>
            </pre>
          </div>

          {/* Right: Simulated Interactive Preview Widget */}
          <div className="lg:col-span-6 rounded-squircle-xl bg-white border border-surface-border shadow-apple-md p-6">
            {/* Obligatory Disclaimer Banner */}
            <div className="px-3 py-1.5 rounded bg-amber-soft border border-amber-border text-amber text-[10px] font-mono uppercase tracking-wider mb-4 font-semibold text-center">
              SIMULATED PREVIEW — NOT CONNECTED TO YOUR LOCAL SIFRA INSTANCE
            </div>

            <h4 className="text-base font-bold text-content-primary mb-2">
              Interactive Search & Answer Simulator
            </h4>
            <p className="text-xs text-content-secondary mb-4 leading-relaxed">
              Test how the SIFRA <code>/api/chat</code> endpoint formats queries and attaches source citations.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={simQuery}
                  onChange={(e) => setSimQuery(e.target.value)}
                  placeholder="Enter sample query..."
                  className="flex-1 px-3 py-2 rounded-md bg-surface-soft border border-surface-border text-content-primary focus:outline-none focus:border-amber"
                />
                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="px-4 py-2 rounded-md bg-content-primary text-white font-medium hover:bg-black transition-all flex items-center gap-1.5 shrink-0"
                >
                  {isSimulating ? (
                    <span>Running...</span>
                  ) : (
                    <>
                      <span>Execute</span>
                      <Play className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {/* Simulation Result Area */}
              {simResponse && (
                <div className="mt-4 p-4 rounded-md bg-surface-soft border border-amber-border text-content-primary text-xs leading-relaxed whitespace-pre-wrap animate-fadeIn">
                  {simResponse}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
