import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ComputationalMachine } from './ComputationalMachine';

interface ArchitectureCore3DProps {
  selectedPillarId: string;
}

export const ArchitectureCore3D: React.FC<ArchitectureCore3DProps> = ({ selectedPillarId }) => {
  const [dragRotation, setDragRotation] = useState({ x: 0.22, y: -0.5 });
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
      // Ignored
    }
  };

  if (!webGLSupported) {
    return (
      <div className="w-full h-full min-h-[420px] flex items-center justify-center bg-graphite rounded-2xl border border-hairline p-6">
        <div className="text-center font-mono text-stone text-xs">
          <div className="text-amber mb-2 font-bold">[EXPLODED SUBSYSTEM SCHEMATIC]</div>
          <div>Active Node: {selectedPillarId.toUpperCase()}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`relative w-full h-[460px] lg:h-[540px] rounded-2xl bg-gradient-to-b from-graphite/70 via-graphite/35 to-obsidian border border-hairline overflow-hidden select-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      {/* Telemetry HUD Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone font-semibold">
          EXPLODED TOPOLOGY • {selectedPillarId.toUpperCase()}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10 text-[11px] font-mono text-amber pointer-events-none">
        FOUR-POINT DECOUPLING
      </div>

      <div className="absolute bottom-4 left-4 z-10 text-[11px] font-mono text-stone-dark pointer-events-none flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-amber rounded-xs" />
        <span>DRAG TO ROTATE DECONSTRUCTED CHASSIS</span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 text-[11px] font-mono text-stone-light pointer-events-none">
        BUS INTERCONNECT: REST / JSON / FTS5
      </div>

      <Canvas
        camera={{ position: [0, 0.4, 5.6], fov: 38 }}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: 1,
          toneMappingExposure: 1.15,
        }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.55} color="#FAFAF7" />
        <directionalLight position={[6, 9, 6]} intensity={1.9} color="#FFFFFF" />
        <directionalLight position={[-6, 5, -5]} intensity={1.7} color="#E2E8F0" />
        <directionalLight position={[-3, -4, 4]} intensity={0.8} color="#94A3B8" />
        <pointLight position={[0, 0.1, 0]} intensity={2.8} color="#F59E0B" distance={5.5} />

        <Suspense fallback={null}>
          <ComputationalMachine
            mode="exploded"
            activeSubsystem={selectedPillarId}
            dragRotation={dragRotation}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
