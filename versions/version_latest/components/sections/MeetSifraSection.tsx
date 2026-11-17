import React, { useState } from 'react';
import { Cpu, Search, Database, MemoryStick, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ArchitectureCore3D } from '../3d/ArchitectureCore3D';

interface ArchitectureNode {
  id: string;
  number: string;
  title: string;
  role: string;
  port: string;
  serviceFile: string;
  concept: string;
  contract: string;
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'ai-engine',
    number: '01',
    title: 'Local Neural Monolith',
    role: 'On-Device Reasoning & Chain-of-Thought',
    port: '127.0.0.1:11434',
    serviceFile: 'services/ollamaService.js',
    concept:
      'Direct REST and streaming integration with local Ollama daemons running on host GPU or CPU silicon. Executes inference for models like Qwen 2.5, Llama 3.1, and DeepSeek-R1 with transparent collapsible <think> traces.',
    contract: `// services/ollamaService.js
export async function streamChatResponse(model, messages, onChunk) {
  const res = await fetch('http://127.0.0.1:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages, stream: true })
  });
  // Streams reasoning <think> tokens & grounded markdown output
}`,
  },
  {
    id: 'metasearch',
    number: '02',
    title: '5-Engine Metasearch Hub',
    role: 'Multi-Source Information Discovery',
    port: '127.0.0.1:8080',
    serviceFile: 'services/searxngService.js',
    concept:
      'Isolated Docker SearXNG container querying 5 search providers (DuckDuckGo, Google, Bing, Wikipedia, GitHub) simultaneously. Strips tracking query parameters, normalizes heterogenous payloads, and returns clean citations with zero user cookies.',
    contract: `// services/searxngService.js
export async function executeMetasearch(query, categories = ['general']) {
  const url = new URL('http://127.0.0.1:8080/search');
  url.searchParams.set('q', query);
  url.searchParams.set('format', 'json');
  const res = await fetch(url, { headers: { 'User-Agent': 'SIFRA-Local/1.0' } });
  return sanitizeAndDeduplicate(await res.json());
}`,
  },
  {
    id: 'sqlite-bm25',
    number: '03',
    title: 'Offline Knowledge Lattice',
    role: 'Local Document Retrieval & BM25 Scoring',
    port: 'data/library.db',
    serviceFile: 'services/libraryService.js',
    concept:
      'Full-text search virtual table residing on local disk using node:sqlite FTS5. Evaluates document relevance using the industry-standard BM25 ranking algorithm, supporting instantaneous offline research over user-saved pages.',
    contract: `// services/libraryService.js
export function searchOfflineLibrary(query, limit = 5) {
  const stmt = db.prepare(\`
    SELECT id, title, url, snippet, bm25(documents_fts) as rank
    FROM documents_fts
    WHERE documents_fts MATCH ?
    ORDER BY rank
    LIMIT ?
  \`);
  return stmt.all(query, limit);
}`,
  },
  {
    id: 'hardware-memory',
    number: '04',
    title: 'Hardware & Memory Vault',
    role: 'Host Silicon Adaptation & Autonomous Facts',
    port: 'Host CIM / nvidia-smi / user_facts.json',
    serviceFile: 'services/hardwareService.js',
    concept:
      'Detects host GPU VRAM to classify models into Optimal, Compatible, and Heavy tiers, preventing out-of-memory crashes. Features an autonomous background agent that extracts durable user facts without ever persisting passwords or API keys.',
    contract: `// services/hardwareService.js
export async function detectHostGpuVram() {
  const vramMb = await queryHostHardwareMetrics(); // CIM, nvidia-smi, ROCm, Metal
  return classifyModelTiers(vramMb); // Optimal, Compatible, Heavy
}`,
  },
];

export const MeetSifraSection: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(ARCHITECTURE_NODES[0].id);
  const [showCode, setShowCode] = useState(false);

  const activeNode = ARCHITECTURE_NODES.find((n) => n.id === selectedNodeId) || ARCHITECTURE_NODES[0];

  return (
    <section id="meet-sifra" className="relative py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto z-10">
      {/* Editorial Header */}
      <div className="max-w-4xl mb-16">
        <span className="text-amber font-mono text-xs uppercase tracking-widest font-semibold block mb-4">
          Architectural Topology
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
          Four decoupled subsystems, unified on host silicon.
        </h2>
      </div>

      {/* Split Interactive Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: 3D Deconstructed Research Intelligence System (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <ArchitectureCore3D selectedPillarId={selectedNodeId} />

          {/* Spatial Selector Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
            {ARCHITECTURE_NODES.map((node) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-amber text-obsidian border-amber font-bold shadow-subtle-elevation'
                      : 'bg-graphite border-hairline text-stone hover:text-white hover:border-amber/40'
                  }`}
                >
                  <div className="text-[10px] text-stone-dark">{node.number}</div>
                  <div className="truncate mt-0.5">{node.title.split(' ')[0]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Architecture Deep Dive Console (6 cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-graphite to-obsidian border border-hairline p-8 sm:p-10 flex flex-col justify-between min-h-[540px]">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-hairline mb-8">
              <div>
                <span className="text-xs font-mono text-amber font-bold block mb-1">
                  NODE {activeNode.number} • {activeNode.port}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeNode.title}
                </h3>
                <span className="text-xs font-mono text-stone">{activeNode.role}</span>
              </div>

              <button
                onClick={() => setShowCode(!showCode)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all ${
                  showCode
                    ? 'bg-amber text-obsidian border-amber font-bold'
                    : 'bg-charcoal text-stone border-hairline hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>{showCode ? 'View Concept' : 'View Code'}</span>
              </button>
            </div>

            {showCode ? (
              <div className="rounded-xl bg-obsidian border border-hairline p-5 font-mono text-xs overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-hairline text-[10px] text-stone-dark">
                  <span>{activeNode.serviceFile}</span>
                  <span className="text-amber">Verified Implementation</span>
                </div>
                <pre className="text-stone leading-relaxed whitespace-pre font-mono">
                  {activeNode.contract}
                </pre>
              </div>
            ) : (
              <div>
                <p className="text-base text-stone leading-relaxed font-normal mb-8">
                  {activeNode.concept}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-obsidian/70 border border-hairline flex items-center justify-between">
                    <span className="text-stone">Network Protocol:</span>
                    <span className="text-white font-bold">{activeNode.port}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-obsidian/70 border border-hairline flex items-center justify-between">
                    <span className="text-stone">Source Module:</span>
                    <span className="text-amber">{activeNode.serviceFile}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-hairline flex items-center justify-between text-xs font-mono text-stone">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber" />
              Verified in sifra/server.js
            </span>
            <span className="text-stone-dark">Zero Cloud Lock-in</span>
          </div>
        </div>
      </div>
    </section>
  );
};
