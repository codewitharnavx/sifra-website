import React, { useState } from 'react';
import { Terminal, Cpu, Play, Copy, Check, Code2 } from 'lucide-react';

interface HardwareProfile {
  vram: string;
  tier: 'Lightweight' | 'Optimal' | 'Heavy';
  recommendedModel: string;
  contextWindow: string;
  quantization: string;
  description: string;
}

const HARDWARE_PROFILES: HardwareProfile[] = [
  {
    vram: '4 GB - 6 GB',
    tier: 'Lightweight',
    recommendedModel: 'llama3.2:3b / qwen2.5:3b',
    contextWindow: '4K - 8K tokens',
    quantization: 'Q4_K_M (Fast, low memory footprint)',
    description: 'Designed for laptops and entry-level dedicated GPUs. Fast retrieval latency with minimal host memory usage.',
  },
  {
    vram: '8 GB - 12 GB',
    tier: 'Optimal',
    recommendedModel: 'qwen2.5:7b-instruct / llama3.1:8b',
    contextWindow: '16K - 32K tokens',
    quantization: 'Q4_K_M / Q8_0 (Balanced precision)',
    description: 'The golden balance for modern research. Deep multi-query decomposition, fast token generation, and grounded footnotes.',
  },
  {
    vram: '16 GB - 24 GB+',
    tier: 'Heavy',
    recommendedModel: 'deepseek-r1:14b / llama3.3:70b-q2',
    contextWindow: '32K - 64K tokens',
    quantization: 'Q8_0 / Q4_K_M (Maximum reasoning depth)',
    description: 'Unlocks multi-turn chain-of-thought with deep reasoning models and long-context document synthesis.',
  },
];

const CODE_EXAMPLES = {
  curl: `curl -X POST http://127.0.0.1:3000/api/research/query \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "Compare SQLite FTS5 vs BM25 ranking algorithms",
    "mode": "deep_research",
    "max_sources": 8,
    "model": "qwen2.5:7b-instruct"
  }'`,
  typescript: `import { SifraClient } from '@sifra/sdk';

const sifra = new SifraClient({
  endpoint: 'http://127.0.0.1:3000',
});

const stream = await sifra.research.streamQuery({
  query: 'Compare SQLite FTS5 vs BM25 ranking algorithms',
  mode: 'deep_research',
  model: 'qwen2.5:7b-instruct',
});

for await (const chunk of stream) {
  if (chunk.type === 'citation') console.log('Citation:', chunk.source);
  if (chunk.type === 'token') process.stdout.write(chunk.text);
}`,
  python: `import requests
import json

payload = {
    "query": "Compare SQLite FTS5 vs BM25 ranking algorithms",
    "mode": "deep_research",
    "max_sources": 8,
    "model": "qwen2.5:7b-instruct"
}

response = requests.post(
    "http://127.0.0.1:3000/api/research/query",
    json=payload,
    stream=True
)

for line in response.iter_lines():
    if line:
        print(json.loads(line))`,
};

export const HardwareApiSection: React.FC = () => {
  const [selectedVramIndex, setSelectedVramIndex] = useState(1); // Default to 8-12 GB (Optimal)
  const [codeLang, setCodeLang] = useState<'curl' | 'typescript' | 'python'>('curl');
  const [copied, setCopied] = useState(false);
  const [isSimulatingApi, setIsSimulatingApi] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);

  const activeHardware = HARDWARE_PROFILES[selectedVramIndex];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_EXAMPLES[codeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateApi = () => {
    setIsSimulatingApi(true);
    setSimulatedResponse(null);

    setTimeout(() => {
      setIsSimulatingApi(false);
      setSimulatedResponse(JSON.stringify(
        {
          status: 'success',
          execution_time_ms: 384,
          grounded_model: activeHardware.recommendedModel,
          citations: [
            { id: 1, title: 'SQLite FTS5 Documentation', url: 'https://sqlite.org/fts5.html', bm25_score: 0.94 },
            { id: 2, title: 'BM25 Ranking Algorithm Details', url: 'https://en.wikipedia.org/wiki/Okapi_BM25', bm25_score: 0.89 }
          ],
          synthesis: 'SQLite FTS5 compiles natively without daemon overhead, providing BM25 ranking directly over disk virtual tables.'
        },
        null,
        2
      ));
    }, 800);
  };

  return (
    <section id="hardware-api" className="relative py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10">
      {/* Editorial Header */}
      <div className="max-w-4xl mb-16">
        <span className="text-amber font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
          Hardware & Developer API
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
          Hardware-aware computation & developer API.
        </h2>
        <p className="text-base sm:text-lg text-stone mt-4 max-w-2xl leading-relaxed">
          SIFRA adapts dynamically to host GPU silicon while exposing a unified localhost REST API
          for developers to integrate grounded research into agentic pipelines.
        </p>
      </div>

      {/* Split Workstation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Hardware Intelligence Console (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline p-8 sm:p-10 flex flex-col justify-between min-h-[560px]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-hairline mb-6">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-amber" />
                <span className="text-xs font-mono uppercase tracking-wider text-white">VRAM Tier Diagnostics</span>
              </div>
              <span className="text-[10px] font-mono text-stone-dark">CIM / nvidia-smi</span>
            </div>

            <div className="text-sm text-stone mb-6">
              Select available host GPU VRAM to inspect SIFRA's automated model allocation and quantization recommendations:
            </div>

            {/* VRAM Tier Buttons */}
            <div className="grid grid-cols-3 gap-2 mb-8">
              {HARDWARE_PROFILES.map((p, idx) => {
                const isSelected = selectedVramIndex === idx;
                return (
                  <button
                    key={p.vram}
                    onClick={() => setSelectedVramIndex(idx)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      isSelected
                        ? 'bg-amber text-obsidian border-amber font-bold shadow-subtle-elevation'
                        : 'bg-graphite border-hairline text-stone hover:text-white hover:border-amber/40'
                    }`}
                  >
                    <div className="text-xs font-mono">{p.vram}</div>
                    <div className="text-[10px] uppercase font-mono mt-0.5">{p.tier}</div>
                  </button>
                );
              })}
            </div>

            {/* Hardware Profile Specs */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-obsidian/70 border border-hairline flex items-center justify-between">
                <span className="text-stone">Recommended Model:</span>
                <span className="text-white font-bold">{activeHardware.recommendedModel}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-obsidian/70 border border-hairline flex items-center justify-between">
                <span className="text-stone">Context Capacity:</span>
                <span className="text-white">{activeHardware.contextWindow}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-obsidian/70 border border-hairline flex items-center justify-between">
                <span className="text-stone">Quantization Profile:</span>
                <span className="text-amber">{activeHardware.quantization}</span>
              </div>
            </div>

            <p className="text-sm text-stone mt-6 leading-relaxed font-normal">
              {activeHardware.description}
            </p>
          </div>

          <div className="pt-6 border-t border-hairline flex items-center justify-between font-mono text-xs text-stone">
            <span>Detection: Auto-Negotiated</span>
            <span className="text-amber">GPU Headroom Protected</span>
          </div>
        </div>

        {/* Right Side: Developer API Terminal (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline p-8 sm:p-10 flex flex-col justify-between min-h-[560px]">
          <div>
            {/* Terminal Header & Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-hairline mb-6 gap-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-amber" />
                <span className="text-xs font-mono uppercase tracking-wider text-white">Local REST API Endpoint</span>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-charcoal border border-hairline">
                {(['curl', 'typescript', 'python'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCodeLang(lang)}
                    className={`px-3 py-1 rounded font-mono text-xs uppercase transition-all ${
                      codeLang === lang
                        ? 'bg-amber text-obsidian font-bold'
                        : 'text-stone hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Display */}
            <div className="relative rounded-xl bg-obsidian border border-hairline p-5 font-mono text-xs overflow-x-auto mb-6">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-hairline text-[10px] text-stone-dark">
                <span>POST /api/research/query</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-stone hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-amber" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="text-stone leading-relaxed whitespace-pre font-mono">
                {CODE_EXAMPLES[codeLang]}
              </pre>
            </div>

            {/* Interactive Live Query Simulation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handleSimulateApi}
                disabled={isSimulatingApi}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber hover:bg-amber-hover text-obsidian font-mono font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-obsidian" />
                <span>{isSimulatingApi ? 'Executing API Call...' : 'Test Simulated Response'}</span>
              </button>
              <span className="text-xs font-mono text-stone-dark">Simulated localhost:3000 response</span>
            </div>

            {/* Simulated Response Box */}
            {simulatedResponse && (
              <div className="rounded-xl bg-obsidian/90 border border-hairline-amber p-4 font-mono text-xs text-stone leading-relaxed overflow-x-auto">
                <div className="text-[10px] text-amber uppercase tracking-wider mb-2 font-bold">
                  HTTP 200 OK • application/json
                </div>
                <pre className="text-stone-light">{simulatedResponse}</pre>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-hairline flex items-center justify-between font-mono text-xs text-stone">
            <span>Zero Third-Party API Key Required</span>
            <span className="text-amber">OpenAPI Contract Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
