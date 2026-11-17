import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  isDarkSection: boolean;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Overview' },
  { id: 'problem', label: 'The Dilemma' },
  { id: 'meet-sifra', label: 'Architecture' },
  { id: 'how-it-works', label: 'Pipeline' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'product-experience', label: 'Experience' },
  { id: 'hardware-api', label: 'API & Hardware' },
  { id: 'privacy-deployment', label: 'Deployment' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, isDarkSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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

  // Apple-inspired adaptive surface styling with light-catch edge
  const navSurface = isDarkSection
    ? 'glass-nav-dark light-catch-edge border-b border-dark-borderSubtle text-content-inversePrimary'
    : 'glass-nav-light border-b border-surface-borderSubtle text-content-primary';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? `${navSurface} py-2.5 shadow-apple-sm` : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark with pointer-down spring feedback */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none btn-spring"
          aria-label="SIFRA Home"
        >
          <div
            className={`w-7 h-7 rounded-squircle-sm flex items-center justify-center font-mono font-bold text-xs transition-colors ${
              isDarkSection
                ? 'bg-dark-elevated text-white border border-dark-border'
                : 'bg-white text-content-primary border border-surface-border shadow-apple-sm'
            }`}
          >
            S
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`font-semibold tracking-title text-sm ${
                isDarkSection ? 'text-content-inversePrimary' : 'text-content-primary'
              }`}
            >
              SIFRA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
            <span
              className={`hidden sm:inline-block text-[11px] font-mono tracking-caption uppercase ${
                isDarkSection ? 'text-content-inverseTertiary' : 'text-content-secondary'
              }`}
            >
              Autonomous Local AI
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden lg:flex items-center gap-1 p-1 rounded-full transition-colors ${
            isDarkSection
              ? 'bg-dark-graphite/80 border border-dark-borderSubtle shadow-apple-dark-sm'
              : 'bg-white/85 border border-surface-border shadow-apple-sm'
          }`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1 text-xs font-medium tracking-normal rounded-full transition-all duration-200 btn-spring ${
                  isActive
                    ? isDarkSection
                      ? 'bg-dark-elevated text-content-inversePrimary font-semibold shadow-sm'
                      : 'bg-surface-soft text-content-primary font-semibold shadow-sm'
                    : isDarkSection
                    ? 'text-content-inverseSecondary hover:text-content-inversePrimary'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* GitHub & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/codewitharnavx/SIFRA"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-full btn-spring ${
              isDarkSection
                ? 'bg-dark-elevated hover:bg-dark-graphite text-content-inversePrimary border border-dark-border'
                : 'bg-white hover:bg-surface-soft text-content-primary border border-surface-border shadow-apple-sm'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://github.com/codewitharnavx/SIFRA"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-squircle-sm border btn-spring ${
              isDarkSection
                ? 'bg-dark-elevated text-content-inversePrimary border-dark-border'
                : 'bg-white text-content-primary border-surface-border shadow-apple-sm'
            }`}
            aria-label="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-squircle-sm border focus:outline-none btn-spring ${
              isDarkSection
                ? 'bg-dark-elevated border-dark-border text-content-inverseSecondary'
                : 'bg-white border-surface-border text-content-secondary shadow-apple-sm'
            }`}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Symmetric slide-fade down from origin) */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-4 pt-3 pb-6 border-b transition-all duration-200 ${
            isDarkSection
              ? 'bg-dark/95 backdrop-blur-xl border-dark-border text-content-inversePrimary'
              : 'bg-surface-warm/95 backdrop-blur-xl border-surface-border text-content-primary'
          }`}
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm transition-colors btn-spring ${
                    isActive
                      ? isDarkSection
                        ? 'bg-dark-elevated text-amber font-semibold'
                        : 'bg-surface-soft text-amber font-semibold'
                      : isDarkSection
                      ? 'text-content-inverseSecondary hover:bg-dark-graphite'
                      : 'text-content-secondary hover:bg-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div
            className={`mt-4 pt-4 border-t flex items-center justify-between text-xs font-mono ${
              isDarkSection ? 'border-dark-border text-content-inverseTertiary' : 'border-surface-border text-content-secondary'
            }`}
          >
            <span>SIFRA Open Source • Apache-2.0</span>
            <a
              href="https://github.com/codewitharnavx/SIFRA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber hover:underline"
            >
              <span>Repository</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
