import { useState, useEffect } from 'react';

export interface ScrollState {
  progress: number; // 0 to 1
  activeSection: string;
  isReducedMotion: boolean;
  isMobile: boolean;
  isDarkSection: boolean;
}

const SECTION_IDS = [
  'hero',
  'problem',
  'meet-sifra',
  'how-it-works',
  'capabilities',
  'product-experience',
  'hardware-api',
  'privacy-deployment',
  'closing',
];

const DARK_SECTIONS = ['meet-sifra', 'product-experience', 'privacy-deployment'];

export function useScrollState(): ScrollState {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    // Check reduced motion media query
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Check viewport width
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      setProgress(currentProgress);

      // Determine active section for nav
      const scrollCenter = scrollY + window.innerHeight * 0.35;
      let matchedSection = 'hero';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollCenter >= top && scrollCenter < top + height) {
            matchedSection = id;
            break;
          }
        }
      }
      setActiveSection(matchedSection);
      setIsDarkSection(DARK_SECTIONS.includes(matchedSection));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { progress, activeSection, isReducedMotion, isMobile, isDarkSection };
}
