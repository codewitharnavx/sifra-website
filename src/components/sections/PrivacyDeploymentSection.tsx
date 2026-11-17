import React, { useState } from 'react';
import { ShieldCheck, Server, Globe, Terminal, Copy, Check, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export const PrivacyDeploymentSection: React.FC = () => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyCommand = (cmd: string, stepIndex: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const DEPLOY_STEPS = [
    {
      step: '01',
      title: 'Clone & Install Dependencies',
      desc: 'Clone the repository and install lightweight local Node.js dependencies.',
      cmd: 'git clone https://github.com/codewitharnavx/SIFRA.git\ncd SIFRA && npm install',
    },
    {
      step: '02',
      title: 'Spin Up SearXNG Container',
      desc: 'Launch the isolated SearXNG Docker container on localhost:8080.',
      cmd: 'docker compose -f docker-compose.searxng.yml up -d',
    },
    {
      step: '03',
      title: 'Launch Ollama & SIFRA Workspace',
      desc: 'Ensure your local Ollama daemon is running, then boot the SIFRA web workspace.',
      cmd: 'ollama serve\nnpm start',
    },
  ];

  return (
    <section id="privacy-deployment" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-dark text-content-inversePrimary">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated border border-dark-border text-amber text-xs font-mono uppercase tracking-caption mb-4">
            <span>Security &amp; Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-title text-white mb-6 leading-tight">
            Transparent Boundaries. 5-Minute Local Setup.
          </h2>
          <p className="text-base sm:text-lg text-content-inverseSecondary leading-relaxed font-normal tracking-body">
            We provide exact architectural transparency regarding what never leaves your computer,
            and how SIFRA safely queries open search engines.
          </p>
        </div>

        {/* Part 1: Transparent Architectural Boundary Diagram */}
        <div className="rounded-squircle-xl bg-dark-graphite border border-dark-border p-6 sm:p-10 shadow-apple-dark-lg mb-16 light-catch-edge">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5 tracking-title">
            <ShieldCheck className="w-5 h-5 text-amber" />
            <span>Data Boundary Architecture</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Local Zone */}
            <div className="p-6 rounded-squircle-md bg-dark border border-emerald-500/30">
              <div className="flex items-center justify-between pb-3 border-b border-dark-border mb-4">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-caption">
                  100% In-Host / Offline
                </span>
                <Server className="w-4 h-4 text-emerald-400" />
              </div>

              <ul className="space-y-3 text-xs font-mono text-content-inverseSecondary">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Prompt text, conversation history, and user sessions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Neural inference weights &amp; token generation (Ollama).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Document index database (SQLite data/library.db).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Long-term research memory (data/memory.json).</span>
                </li>
              </ul>
            </div>

            {/* Outbound Network Zone */}
            <div className="p-6 rounded-squircle-md bg-dark border border-amber/30">
              <div className="flex items-center justify-between pb-3 border-b border-dark-border mb-4">
                <span className="text-xs font-mono text-amber font-bold uppercase tracking-caption">
                  Outbound via SearXNG Only
                </span>
                <Globe className="w-4 h-4 text-amber" />
              </div>

              <ul className="space-y-3 text-xs font-mono text-content-inverseSecondary">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 shrink-0" />
                  <span>Sanitized search terms sent to public search engines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 shrink-0" />
                  <span>Zero user identifiers, IP logging, or account cookies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 shrink-0" />
                  <span>Tracking queries, affiliate tags, and UTM tokens stripped.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber mt-2 shrink-0" />
                  <span>No proprietary telemetry sent to SIFRA maintainers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Part 2: Step-by-Step Production Deployment Guide */}
        <div className="rounded-squircle-xl bg-dark-graphite border border-dark-border p-6 sm:p-10 shadow-apple-dark-lg light-catch-edge">
          <div className="flex items-center justify-between pb-6 border-b border-dark-border mb-8">
            <div>
              <span className="tag-mono text-amber font-semibold block mb-1">
                Zero Cloud Dependencies
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-title">
                Launch SIFRA in Three Commands
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-content-inverseTertiary">
              <span>Docker &amp; Node.js Ready</span>
            </div>
          </div>

          <div className="space-y-6">
            {DEPLOY_STEPS.map((s, idx) => (
              <div key={s.step} className="p-5 rounded-squircle-md bg-dark border border-dark-border font-mono text-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-amber font-bold">{s.step}</span>
                    <span className="text-white font-semibold">{s.title}</span>
                  </div>
                  <button
                    onClick={() => copyCommand(s.cmd, idx)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-dark-elevated text-content-inverseSecondary hover:text-white transition-colors btn-spring"
                    aria-label={`Copy Step ${s.step} Command`}
                  >
                    {copiedStep === idx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedStep === idx ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-content-inverseTertiary mb-3 font-sans text-xs tracking-body">{s.desc}</p>
                <pre className="p-3 rounded bg-black/60 border border-dark-border text-amber overflow-x-auto">
                  <code>{s.cmd}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
