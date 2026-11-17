import React, { useState } from 'react';
import {
  Brain,
  Search,
  Database,
  Cpu,
  ShieldCheck,
  MemoryStick,
  Sliders,
  Terminal,
} from 'lucide-react';

interface Capability {
  id: string;
  category: 'neural' | 'retrieval' | 'platform';
  title: string;
  badge: string;
  description: string;
  impact: string;
  tags: string[];
}

const CAPABILITIES: Capability[] = [
  {
    id: 'deep-research',
    category: 'neural',
    title: 'Deep Research Mode',
    badge: '8-Source Breadth',
    description:
      'Expands candidate search retrieval to 8 independent sources and extracts the top 6 dense passages, constructing a thorough analytical synthesis with full cross-source citations.',
    impact: 'Ideal for complex architectural decisions and competitive technology comparisons.',
    tags: ['Multi-Passage', 'Cross-Validation', 'Deep Synthesis'],
  },
  {
    id: 'think-mode',
    category: 'neural',
    title: 'Think Mode & Reasoning Traces',
    badge: 'Collapsible <think>',
    description:
      'Detects reasoning models (like DeepSeek-R1) and extracts chain-of-thought tokens, rendering them inside an interactive collapsible accordion so you can audit the reasoning steps without cluttering the final answer.',
    impact: 'Transparency into model logic, math proofs, and internal assumptions.',
    tags: ['CoT Tracing', 'Auditability', 'Clean UI'],
  },
  {
    id: 'autonomous-memory',
    category: 'platform',
    title: 'Autonomous Memory Subsystem',
    badge: 'Credential-Sanitized',
    description:
      'Background extraction agent parses conversation turns to record user preferences, active frameworks, and project constraints. Heuristic filters strictly block passwords and API tokens.',
    impact: 'Your local AI remembers your preferred languages and workflows across separate chats.',
    tags: ['Zero-Telemetry Memory', 'Preference Cache', 'Safe Heuristics'],
  },
  {
    id: 'prompt-enhancer',
    category: 'neural',
    title: 'AI Prompt Enhancer',
    badge: 'One-Click Refinement',
    description:
      'Transforms brief, ambiguous prompts into structured research directives before dispatching to the orchestrator, ensuring optimal retrieval precision.',
    impact: 'Saves time drafting comprehensive search queries.',
    tags: ['Query Expansion', 'Structure Optimization', 'Precision'],
  },
  {
    id: 'polite-crawler',
    category: 'retrieval',
    title: 'Polite Crawler with SSRF Defense',
    badge: 'Security-Hardened',
    description:
      'Background web scraper with Cheerio that verifies target IP addresses post-DNS resolution to block localhost or private subnet probing. Parses robots.txt and limits download payload sizes.',
    impact: 'Safely archive web documentation into your local SQLite knowledge base.',
    tags: ['SSRF Guard', 'Robots.txt Parser', 'Content Extraction'],
  },
  {
    id: 'hardware-tiers',
    category: 'platform',
    title: 'Hardware-Aware GPU Tiering',
    badge: 'Auto VRAM Detection',
    description:
      'Queries host video controller and system memory to classify Ollama models into Optimal (100% GPU VRAM), Compatible (hybrid offload), and Resource Intensive (CPU-bound) tiers.',
    impact: 'Guarantees you run models that fit your GPU without freezing your operating system.',
    tags: ['nvidia-smi', 'Win32_VideoController', 'VRAM Allocation'],
  },
];

export const CapabilitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'neural' | 'retrieval' | 'platform'>('all');

  const filtered = activeCategory === 'all'
    ? CAPABILITIES
    : CAPABILITIES.filter((c) => c.category === activeCategory);

  return (
    <section id="capabilities" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-hairline text-amber text-[11px] font-mono uppercase tracking-widest mb-4">
          Scene 05 • Capability Expansion
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          Verified Core Capabilities
        </h2>
        <p className="text-base sm:text-lg text-stone leading-relaxed">
          Engineered for developers, researchers, and engineers who demand verifiable facts, reproducible citations, and local sovereignty.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Capabilities' },
            { id: 'neural', label: 'Neural Intelligence' },
            { id: 'retrieval', label: 'Search & Crawler' },
            { id: 'platform', label: 'Hardware & Memory' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber text-obsidian font-bold shadow-sm'
                  : 'bg-graphite text-stone hover:text-white border border-hairline'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-graphite border border-hairline p-7 hover:border-amber/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded bg-charcoal text-amber font-mono text-[11px] font-semibold border border-hairline-amber uppercase tracking-wider">
                  {item.badge}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-dark">{item.category}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-stone leading-relaxed mb-6">{item.description}</p>
            </div>

            <div className="pt-4 border-t border-hairline">
              <div className="text-[11px] text-stone mb-3">
                <strong className="text-white font-mono">Impact:</strong> {item.impact}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-charcoal text-[10px] font-mono text-stone-dark"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
