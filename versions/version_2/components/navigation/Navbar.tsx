import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Terminal, Cpu } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Overview' },
  { id: 'problem', label: 'The Problem' },
  { id: 'meet-sifra', label: 'Architecture' },
  { id: 'how-it-works', label: 'Workflow' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'product-experience', label: 'Experience' },
  { id: 'hardware-api', label: 'API & Hardware' },
  { id: 'privacy-deployment', label: 'Deployment' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian/90 backdrop-blur-md border-b border-hairline py-3.5 shadow-subtle-elevation'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none"
          aria-label="SIFRA Home"
        >
          <div className="w-8 h-8 rounded-lg bg-graphite border border-hairline flex items-center justify-center text-amber transition-all group-hover:border-amber/40">
            <Cpu className="w-4 h-4 text-amber" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-bold tracking-wider text-base text-white font-mono">
              SIFRA
              <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-stone">
              Autonomous Local AI
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-graphite/60 p-1.5 rounded-full border border-hairline backdrop-blur-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 rounded-full ${
                  isActive
                    ? 'bg-amber text-obsidian font-bold shadow-sm'
                    : 'text-stone hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* GitHub Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/codewitharnavx/SIFRA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-graphite hover:bg-graphite-hover text-white border border-hairline hover:border-amber/40 transition-all"
          >
            <Github className="w-3.5 h-3.5 text-amber" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://github.com/codewitharnavx/SIFRA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-graphite text-amber border border-hairline"
            aria-label="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-graphite border border-hairline text-stone hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian border-b border-hairline px-4 pt-3 pb-6 backdrop-blur-xl shadow-2xl transition-all">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-amber/15 text-amber font-bold border-l-2 border-amber'
                      : 'text-stone hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-hairline flex items-center justify-between text-xs font-mono text-stone">
            <span>SIFRA v1.0 • MIT License</span>
            <a
              href="https://github.com/codewitharnavx/SIFRA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber hover:underline"
            >
              <Github className="w-3.5 h-3.5" />
              <span>codewitharnavx/SIFRA</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
