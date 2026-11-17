import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ComputationalMachine } from './ComputationalMachine';

export const HeroCore3D: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dragRotation, setDragRotation] = useState({ x: 0.15, y: -0.45 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setWebGLSupported(supported);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x: nx, y: ny });

    if (isDragging) {
      const deltaX = (e.clientX - dragStartRef.current.x) * 0.007;
      const deltaY = (e.clientY - dragStartRef.current.y) * 0.007;
      setDragRotation((prev) => ({
        x: Math.max(-1.1, Math.min(1.1, prev.x + deltaY)),
        y: prev.y + deltaX,
      }));
      dragStartRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if already released
    }
  };

  if (!webGLSupported) {
    return (
      <div className="w-full h-full min-h-[480px] flex items-center justify-center bg-graphite rounded-2xl border border-hairline p-8">
        <div className="text-center font-mono text-stone text-xs">
          <div className="w-24 h-24 mx-auto mb-4 border border-amber/40 rounded-xl flex items-center justify-center text-amber font-bold">
            [3D ENGINE]
          </div>
          <div className="text-white font-bold tracking-wider">SOVEREIGN COMPUTATIONAL APPARATUS</div>
          <div className="text-[10px] text-stone-dark mt-1">WebGL 2.0 Inactive • Static Mode</div>
        </div>
      </div>
    );
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`relative w-full h-[520px] sm:h-[580px] lg:h-[640px] rounded-2xl bg-gradient-to-b from-graphite/80 via-graphite/40 to-obsidian border border-hairline overflow-hidden select-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      {/* Precision Instrument HUD Overlay */}
      <div className="absolute top-4 left-4 flex items-center gap-2.5 z-10 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone font-semibold">
          AUTONOMOUS COMPUTE APPARATUS • TITANIUM / SILICON
        </span>
      </div>

      <div className="absolute top-4 right-4 text-[11px] font-mono text-amber z-10 pointer-events-none">
        REST :11434 / :8080
      </div>

      <div className="absolute bottom-4 left-4 text-[11px] font-mono text-stone-dark z-10 pointer-events-none flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-amber rounded-xs" />
        <span className="text-stone">DRAG IN 360° TO INSPECT INTERNAL ARCHITECTURE</span>
      </div>

      <div className="absolute bottom-4 right-4 text-[11px] font-mono text-stone-light z-10 pointer-events-none">
        BM25 / WAL / FTS5
      </div>

      {/* Museum-Grade 3D Studio Canvas */}
      <Canvas
        camera={{ position: [0, 0.35, 4.8], fov: 38 }}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: 1, // ACESFilmicToneMapping
          toneMappingExposure: 1.15,
        }}
        className="w-full h-full"
      >
        {/* Crisp Lighting Rig: Key, Rim, Fill, & Core Radiation */}
        <ambientLight intensity={0.55} color="#FAFAF7" />
        {/* Key Light: High Specular Glints on Titanium & Aluminium */}
        <directionalLight position={[7, 9, 6]} intensity={1.9} color="#FFFFFF" />
        {/* Sharp Rim Light: Silhouettes Corner Pillars Against Dark Background */}
        <directionalLight position={[-7, 5, -5]} intensity={1.7} color="#E2E8F0" />
        {/* Soft Low Fill: Lifts Shadowed Undercuts & Vents */}
        <directionalLight position={[-4, -4, 4]} intensity={0.8} color="#94A3B8" />
        {/* Radiating Internal Core Point Light */}
        <pointLight position={[0, 0.1, 0]} intensity={2.5} color="#F59E0B" distance={4.8} />

        <Suspense fallback={null}>
          <ComputationalMachine
            mode="hero"
            mousePos={mousePos}
            dragRotation={dragRotation}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
