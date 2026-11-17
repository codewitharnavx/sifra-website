import React, { useState } from 'react';
import { Copy, Check, Play, Cpu, Info } from 'lucide-react';
import { API_EXAMPLES } from '../../data/mockData';

export const HardwareApiSection: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('search');
  const [selectedLanguage, setSelectedLanguage] = useState<'curl' | 'python' | 'javascript'>('curl');
  const [copied, setCopied] = useState<boolean>(false);

  // Simulated interactive preview states
  const [simQuery, setSimQuery] = useState<string>('React 19 Server Actions & state mutations');
  const [simMode, setSimMode] = useState<string>('both');
  const [simLoading, setSimLoading] = useState<boolean>(false);
  const [simResult, setSimResult] = useState<any>(API_EXAMPLES.search.sampleResponse);

  const activeSpec = API_EXAMPLES[selectedEndpoint];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSimulation = () => {
    setSimLoading(true);
    setTimeout(() => {
      setSimResult({
        success: true,
        query: simQuery,
        mode: simMode,
        total: 3,
        timing: { searchMs: Math.floor(130 + Math.random() * 40) },
        results: [
          {
            id: 1,
            title: `Retrieved Documentation for: ${simQuery}`,
            url: 'https://react.dev/reference/rsc/server-actions',
            domain: 'react.dev',
            snippet: `Verified excerpt matching query '${simQuery}'. Server Actions allow asynchronous mutations without manual API endpoints.`,
            source: simMode === 'local' ? 'local' : 'web',
            score: 0.96,
          },
          {
            id: 2,
            title: 'Action State Optimization & Transitions',
            url: 'https://react.dev/reference/react/useActionState',
            domain: 'react.dev',
            snippet: 'useActionState manages pending actions, optimistic responses, and server errors seamlessly.',
            source: simMode === 'local' ? 'local' : 'web',
            score: 0.92,
          },
          {
            id: 3,
            title: 'Local Knowledge Base Reference',
            url: 'local://library/architecture-notes.md',
            domain: 'localhost:library',
            snippet: 'Internal architecture guideline for decoupling client UI mutations from background indexing.',
            source: 'local',
            score: 0.89,
          },
        ],
      });
      setSimLoading(false);
    }, 600);
  };

  return (
    <section id="hardware-api" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-hairline text-amber text-[11px] font-mono uppercase tracking-widest mb-4">
          Scene 07 • Hardware Architecture & API
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          Silicon Intelligence & Headless API
        </h2>
        <p className="text-base sm:text-lg text-stone leading-relaxed">
          SIFRA pairs deep hardware awareness with clean REST endpoints, serving both as an interactive workspace and a headless search API for autonomous agents.
        </p>
      </div>

      {/* Part 1: Hardware-Aware GPU Tiering Visualizer */}
      <div className="rounded-2xl bg-graphite border border-hairline p-8 sm:p-10 mb-16 shadow-subtle-elevation">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-hairline mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-charcoal border border-hairline text-amber flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Hardware Detection & Model Tiering Engine</h3>
              <p className="text-xs font-mono text-stone">services/hardwareService.js</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-stone bg-obsidian px-3 py-1.5 rounded-lg border border-hairline">
            <span className="w-2 h-2 rounded-full bg-amber" />
            <span>NVIDIA • AMD ROCm • Apple Silicon • CPU</span>
          </div>
        </div>

        <p className="text-sm text-stone leading-relaxed mb-8 max-w-3xl">
          At startup, SIFRA queries operating system video controllers (via <code>nvidia-smi</code>, Windows CIM <code>Win32_VideoController</code>, or <code>lspci</code>) to discover installed GPU VRAM and available RAM, classifying candidate models into three unambiguous operational tiers:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Optimal Tier */}
          <div className="p-6 rounded-xl bg-obsidian border border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded bg-charcoal text-amber text-[10px] font-mono font-bold uppercase tracking-wider border border-hairline-amber">
                  Tier 1: Optimal
                </span>
                <span className="text-xs font-mono text-amber">100% VRAM</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Full GPU Acceleration</h4>
              <p className="text-xs text-stone leading-relaxed mb-4">
                The entire model weights and KV cache fit comfortably within detected VRAM with at least 15% headroom for SearXNG and OS buffers.
              </p>
            </div>
            <div className="pt-3 border-t border-hairline text-[11px] font-mono text-stone-dark">
              Zero RAM paging • Maximum token latency (~60–90 t/s)
            </div>
          </div>

          {/* Compatible Tier */}
          <div className="p-6 rounded-xl bg-obsidian border border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded bg-charcoal text-stone-light text-[10px] font-mono font-bold uppercase tracking-wider border border-hairline">
                  Tier 2: Compatible
                </span>
                <span className="text-xs font-mono text-stone-light">Hybrid Offload</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Layer Splitting</h4>
              <p className="text-xs text-stone leading-relaxed mb-4">
                Models that fit in VRAM with tightly managed context, or offload partial attention layers across high-speed system RAM.
              </p>
            </div>
            <div className="pt-3 border-t border-hairline text-[11px] font-mono text-stone-dark">
              Balanced speed (~25–45 t/s) • Safe execution
            </div>
          </div>

          {/* Resource Intensive Tier */}
          <div className="p-6 rounded-xl bg-obsidian border border-hairline flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded bg-charcoal text-stone text-[10px] font-mono font-bold uppercase tracking-wider border border-hairline">
                  Tier 3: Intensive
                </span>
                <span className="text-xs font-mono text-stone">Memory Pressure</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">CPU-Bound Paging</h4>
              <p className="text-xs text-stone leading-relaxed mb-4">
                Models exceeding recommended VRAM limits. The UI displays an explicit warning before invocation to avoid freezing host workflows.
              </p>
            </div>
            <div className="pt-3 border-t border-hairline text-[11px] font-mono text-stone-dark">
              Heavily throttled token rate • Memory warning
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Headless Developer REST API & Simulated Preview */}
      <div className="rounded-2xl bg-graphite border border-hairline p-8 sm:p-10 shadow-subtle-elevation">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-hairline mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-charcoal text-amber font-bold border border-hairline-amber">
                Headless REST API
              </span>
              <span className="text-xs font-mono text-stone">Port 5000</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Call SIFRA from Scripts, CLI & Autonomous Agents</h3>
          </div>

          {/* Endpoint Switcher */}
          <div className="flex items-center gap-1.5 bg-obsidian p-1.5 rounded-lg border border-hairline self-start sm:self-auto">
            {Object.keys(API_EXAMPLES).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedEndpoint(key)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                  selectedEndpoint === key
                    ? 'bg-amber text-obsidian font-bold'
                    : 'text-stone hover:text-white'
                }`}
              >
                /{key}
              </button>
            ))}
          </div>
        </div>

        {/* Code Viewer & Interactive Simulated Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Language Code Examples */}
          <div className="lg:col-span-6 bg-obsidian rounded-xl border border-hairline overflow-hidden shadow-inner">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-hairline bg-charcoal/40 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                {(['curl', 'python', 'javascript'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-2.5 py-1 rounded transition-colors uppercase ${
                      selectedLanguage === lang
                        ? 'bg-white/10 text-amber font-bold'
                        : 'text-stone hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleCopy(activeSpec[selectedLanguage])}
                className="flex items-center gap-1.5 text-stone hover:text-white transition-colors"
                aria-label="Copy Code to Clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-amber" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="p-4 overflow-x-auto text-xs font-mono text-stone-light leading-relaxed max-h-[360px]">
              <pre>{activeSpec[selectedLanguage]}</pre>
            </div>

            <div className="p-3 bg-charcoal/20 border-t border-hairline text-[11px] font-mono text-stone flex items-center justify-between">
              <span>Endpoint: <strong className="text-white">{activeSpec.endpoint}</strong></span>
              <span className="px-2 py-0.5 rounded bg-charcoal text-amber">{activeSpec.method}</span>
            </div>
          </div>

          {/* Right Column: Simulated Interactive Query Console */}
          <div className="lg:col-span-6 bg-obsidian rounded-xl border border-hairline p-5 shadow-inner flex flex-col justify-between">
            <div>
              {/* Mandatory Simulated Disclaimer Badge */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-charcoal border border-hairline text-stone text-[11px] font-mono mb-4">
                <Info className="w-4 h-4 shrink-0 text-amber" />
                <span>SIMULATED PREVIEW — NOT CONNECTED TO YOUR LOCAL SIFRA INSTANCE</span>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-mono text-stone mb-1.5">
                  Test Query Simulation
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={simQuery}
                    onChange={(e) => setSimQuery(e.target.value)}
                    className="flex-1 bg-graphite border border-hairline rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-amber"
                    placeholder="Enter a test query..."
                  />
                  <button
                    onClick={runSimulation}
                    disabled={simLoading}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber text-obsidian font-mono font-bold text-xs hover:bg-amber-hover transition-all disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{simLoading ? 'Running...' : 'Run'}</span>
                  </button>
                </div>
              </div>

              {/* Mode Selection */}
              <div className="flex items-center gap-3 mb-4 text-xs font-mono text-stone">
                <span>Mode:</span>
                {(['both', 'web', 'local'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSimMode(m)}
                    className={`px-2.5 py-1 rounded text-[11px] uppercase transition-colors ${
                      simMode === m ? 'bg-amber text-obsidian font-bold' : 'hover:text-white'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Simulated Output Console */}
              <div className="rounded-lg bg-graphite border border-hairline p-3.5 font-mono text-[11px] text-stone-light overflow-x-auto max-h-[220px]">
                <pre>{JSON.stringify(simResult, null, 2)}</pre>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-hairline text-[10px] font-mono text-stone-dark text-right">
              Normalized Contract Output • Verified Response Format
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
