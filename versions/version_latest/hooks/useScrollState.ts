import { useState, useEffect } from 'react';

export interface ScrollState {
  progress: number; // 0 to 1
  activeSection: string;
  sceneIndex: number; // 1 to 9
  isReducedMotion: boolean;
  isMobile: boolean;
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

export function useScrollState(): ScrollState {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [sceneIndex, setSceneIndex] = useState(1);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

      // Map progress smoothly across the 9 scenes
      const scene = Math.min(Math.floor(currentProgress * 9) + 1, 9);
      setSceneIndex(scene);

      // Determine active section for nav
      const scrollCenter = scrollY + window.innerHeight * 0.38;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollCenter >= top && scrollCenter < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { progress, activeSection, sceneIndex, isReducedMotion, isMobile };
}
