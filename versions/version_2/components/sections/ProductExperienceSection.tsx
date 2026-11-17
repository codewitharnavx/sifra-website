import React, { useState } from 'react';
import { Maximize2, CheckCircle2, ChevronRight } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
  highlights: string[];
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'citations',
    title: 'Grounded Answers with Numbered Citations',
    tag: 'Factual Synthesis',
    image: '/assets/chat-citations.png',
    description:
      'Responses are synthesized using only retrieved source snippets. Numbered bracketed citations ([1], [2]) directly link to verified origin cards displaying the source title, domain, and publication date.',
    highlights: [
      'Hoverable / clickable inline citations',
      'Source provenance card with canonical URL',
      'Zero hallucinated references outside candidate pool',
    ],
  },
  {
    id: 'welcome',
    title: 'Minimalist Workspace & Hardware Bar',
    tag: 'Composer Interface',
    image: '/assets/hero-welcome-screen.png',
    description:
      'The initial screen provides a distraction-free research console. The bottom bar automatically detects your active GPU, system memory, and confirms zero cloud telemetry.',
    highlights: [
      'Multi-mode selector: web, local, or both',
      'Live hardware detection badge (e.g. RTX GPU + VRAM)',
      'Quick action prompts for immediate research',
    ],
  },
  {
    id: 'hardware-modal',
    title: 'Hardware-Aware Model Recommender',
    tag: 'Silicon Intelligence',
    image: '/assets/hardware-model-modal.png',
    description:
      'SIFRA evaluates your installed Ollama models against detected VRAM and RAM, sorting them into Optimal (100% GPU offload), Compatible (hybrid), and Heavy tiers.',
    highlights: [
      'Real-time VRAM allocation calculations',
      'One-click model pulling and deletion',
      'Prevents out-of-memory system freezes',
    ],
  },
  {
    id: 'memory-modal',
    title: 'Autonomous Memory Subsystem',
    tag: 'Long-Term Memory',
    image: '/assets/memory-modal.png',
    description:
      'Inspect memories captured autonomously across research sessions. View detected preferences, edit or delete records, or manually add persistent project directives.',
    highlights: [
      'Background fact extraction across chats',
      'Heuristic credential and token sanitizer',
      'Full user override and deletion control',
    ],
  },
  {
    id: 'conversation-view',
    title: 'Multi-Turn Research Threads',
    tag: 'Deep Dialogue',
    image: '/assets/chat-conversation-view.png',
    description:
      'Follow-up queries resolve conversational context. Features rich typography, mathematical typesetting via KaTeX ($ and $$), and syntax-highlighted code blocks with copy actions.',
    highlights: [
      'Context-aware pronoun resolution',
      'PrismJS code highlighting with one-click copy',
      'KaTeX LaTeX mathematical notation rendering',
    ],
  },
];

export const ProductExperienceSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const currentItem = SHOWCASE_ITEMS[selectedIdx];

  return (
    <section id="product-experience" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-hairline text-amber text-[11px] font-mono uppercase tracking-widest mb-4">
          Scene 06 • Product Experience
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          The SIFRA Application Experience
        </h2>
        <p className="text-base sm:text-lg text-stone leading-relaxed">
          Authentic interface captures from the working SIFRA application. Designed for deep focus, technical transparency, and verifiable citations.
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
        {/* Left: Thumbnail Selector & Content Details */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          {SHOWCASE_ITEMS.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-graphite-card border-hairline-amber text-white shadow-subtle-elevation'
                    : 'bg-graphite/60 border-hairline text-stone hover:border-white/15 hover:text-white'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-charcoal text-amber tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-amber translate-x-1' : 'text-stone-dark'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Featured High-Res Screenshot Canvas */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-obsidian border border-hairline p-3 sm:p-4 shadow-subtle-elevation relative group overflow-hidden">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-hairline mb-3 text-xs font-mono text-stone">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-charcoal" />
                <span className="w-2.5 h-2.5 rounded-full bg-charcoal" />
                <span className="w-2.5 h-2.5 rounded-full bg-charcoal" />
                <span className="ml-2 text-white font-semibold">{currentItem.title}</span>
              </div>
              <button
                onClick={() => setModalImage(currentItem.image)}
                className="flex items-center gap-1.5 text-[11px] text-amber hover:underline font-mono"
                aria-label="Enlarge Screenshot"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Enlarge</span>
              </button>
            </div>

            {/* The Image */}
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-lg bg-graphite cursor-pointer"
              onClick={() => setModalImage(currentItem.image)}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs font-mono text-amber bg-obsidian/90 px-3 py-1 rounded border border-hairline-amber">
                  Click to inspect full resolution
                </span>
              </div>
            </div>

            {/* Description & Feature Checklist below the active screenshot */}
            <div className="mt-4 p-4 rounded-xl bg-graphite border border-hairline">
              <p className="text-xs sm:text-sm text-stone leading-relaxed mb-3">
                {currentItem.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-stone font-mono">
                {currentItem.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber shrink-0" />
                    <span className="truncate">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Inspection */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-obsidian rounded-2xl border border-hairline-amber overflow-hidden shadow-2xl p-2">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-graphite border border-hairline text-white text-xs font-mono hover:bg-charcoal"
            >
              Close (ESC)
            </button>
            <img src={modalImage} alt="Expanded Preview" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};
