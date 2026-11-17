import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export interface ComputationalMachineProps {
  mode: 'hero' | 'exploded' | 'reassembled';
  activeSubsystem?: string | null;
  mousePos?: { x: number; y: number };
  dragRotation?: { x: number; y: number };
}

// 5 Metasearch Ingestion Engines in SIFRA
const METASEARCH_ENGINES = [
  { name: 'DuckDuckGo', angle: 0 },
  { name: 'Google', angle: (Math.PI * 2) / 5 },
  { name: 'Bing', angle: (Math.PI * 4) / 5 },
  { name: 'Wikipedia', angle: (Math.PI * 6) / 5 },
  { name: 'GitHub', angle: (Math.PI * 8) / 5 },
];

export const ComputationalMachine: React.FC<ComputationalMachineProps> = ({
  mode,
  activeSubsystem,
  mousePos = { x: 0, y: 0 },
  dragRotation = { x: 0, y: 0 },
}) => {
  const rootGroupRef = useRef<THREE.Group>(null);
  const reasoningMonolithRef = useRef<THREE.Group>(null);
  const coreDieRef = useRef<THREE.Mesh>(null);
  const metasearchConstellationRef = useRef<THREE.Group>(null);
  const knowledgeLatticeRef = useRef<THREE.Group>(null);
  const citationManifoldRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  // Materials representing an Autonomous Research Intelligence System
  const materials = useMemo(() => {
    return {
      // Dark Precision Graphite (Reasoning Monolith Chassis)
      graphite: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#222831'),
        roughness: 0.25,
        metalness: 0.85,
      }),
      // Satin Aluminium (Heatsinks, Structural Framing, Edge Bezels)
      aluminium: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E2E8F0'),
        roughness: 0.18,
        metalness: 0.92,
      }),
      // Brushed Titanium (Subsystem Cassettes & Outer Posts)
      titanium: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#64748B'),
        roughness: 0.28,
        metalness: 0.88,
      }),
      // Champagne Gold (Neural Bus Interposers, Pin Arrays & Citations)
      gold: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#D4AF37'),
        emissive: new THREE.Color('#5E4911'),
        emissiveIntensity: 0.35,
        roughness: 0.22,
        metalness: 0.9,
      }),
      // Smoked Optical Glass (Layered Compute Wafers)
      smokedGlass: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#94A3B8'),
        transparent: true,
        opacity: 0.45,
        roughness: 0.08,
        metalness: 0.2,
        transmission: 0.75,
        ior: 1.52,
      }),
      // Radiant Amber Optical Core (Active Neural Pulse)
      amberGlow: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#F59E0B'),
        emissive: new THREE.Color('#F59E0B'),
        emissiveIntensity: 2.2,
        roughness: 0.1,
        metalness: 0.4,
      }),
      // Ingestion Optical Laser Line
      laserConduit: new THREE.MeshBasicMaterial({
        color: new THREE.Color('#F59E0B'),
        transparent: true,
        opacity: 0.65,
      }),
      // Offline Knowledge Base Dark Substrate
      storageSubstrate: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#1E293B'),
        roughness: 0.4,
        metalness: 0.6,
      }),
    };
  }, []);

  useFrame((state, delta) => {
    if (!rootGroupRef.current) return;

    const time = state.clock.getElapsedTime();

    // 1. Natural Parallax & Drag Dynamics
    if (mode === 'hero') {
      const targetRotX = dragRotation.x + mousePos.y * 0.35 + Math.sin(time * 0.35) * 0.04;
      const targetRotY = dragRotation.y + mousePos.x * 0.55 + time * 0.12;
      rootGroupRef.current.rotation.x = THREE.MathUtils.damp(rootGroupRef.current.rotation.x, targetRotX, 4, delta);
      rootGroupRef.current.rotation.y = THREE.MathUtils.damp(rootGroupRef.current.rotation.y, targetRotY, 4, delta);
    } else if (mode === 'exploded') {
      const targetRotY = dragRotation.y + time * 0.1;
      const targetRotX = dragRotation.x + 0.16 + Math.sin(time * 0.25) * 0.04;
      rootGroupRef.current.rotation.x = THREE.MathUtils.damp(rootGroupRef.current.rotation.x, targetRotX, 4, delta);
      rootGroupRef.current.rotation.y = THREE.MathUtils.damp(rootGroupRef.current.rotation.y, targetRotY, 4, delta);
    } else {
      // Reassembled mode: serene, majestic, solid
      rootGroupRef.current.rotation.y = time * 0.12;
      rootGroupRef.current.rotation.x = 0.1 + Math.sin(time * 0.2) * 0.03;
    }

    // 2. Metasearch Ingestion Constellation Rotation (Satellite engines orbit the intelligence core)
    if (metasearchConstellationRef.current) {
      metasearchConstellationRef.current.rotation.y = time * 0.25;
    }

    // 3. Central Neural Core Breathing Pulse
    if (coreDieRef.current) {
      const pulse = 1 + Math.sin(time * 2.4) * 0.06;
      coreDieRef.current.scale.set(pulse, pulse, pulse);
    }

    // 4. Citation Manifold Rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.22;
      ring1Ref.current.rotation.x = Math.PI * 0.3 + Math.sin(time * 0.3) * 0.06;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.18;
      ring2Ref.current.rotation.y = Math.PI * 0.2 + Math.cos(time * 0.25) * 0.06;
    }

    // 5. Architectural Deconstruction based on Mode & Active Subsystem
    let targetMonolithY = 0;
    let targetMetasearchScale = 1;
    let targetKnowledgeY = -1.25;
    let targetCitationY = 1.35;

    if (mode === 'exploded') {
      targetMonolithY = activeSubsystem === 'ai-engine' ? 0.8 : 0.35;
      targetMetasearchScale = activeSubsystem === 'metasearch' ? 1.45 : 1.25;
      targetKnowledgeY = activeSubsystem === 'sqlite-bm25' ? -2.2 : -1.8;
      targetCitationY = activeSubsystem === 'hardware-memory' ? 2.3 : 1.9;
    } else {
      targetMonolithY = 0;
      targetMetasearchScale = 1;
      targetKnowledgeY = -1.25;
      targetCitationY = 1.35;
    }

    if (reasoningMonolithRef.current) {
      reasoningMonolithRef.current.position.y = THREE.MathUtils.damp(
        reasoningMonolithRef.current.position.y,
        targetMonolithY,
        5,
        delta
      );
    }
    if (metasearchConstellationRef.current) {
      const s = THREE.MathUtils.damp(
        metasearchConstellationRef.current.scale.x,
        targetMetasearchScale,
        5,
        delta
      );
      metasearchConstellationRef.current.scale.set(s, s, s);
    }
    if (knowledgeLatticeRef.current) {
      knowledgeLatticeRef.current.position.y = THREE.MathUtils.damp(
        knowledgeLatticeRef.current.position.y,
        targetKnowledgeY,
        5,
        delta
      );
    }
    if (citationManifoldRef.current) {
      citationManifoldRef.current.position.y = THREE.MathUtils.damp(
        citationManifoldRef.current.position.y,
        targetCitationY,
        5,
        delta
      );
    }
  });

  return (
    <group ref={rootGroupRef} scale={[1.2, 1.2, 1.2]}>
      {/* =================================================================== */}
      {/* 1. CENTRAL NEURAL REASONING MONOLITH (LOCAL OLLAMA INFERENCE)       */}
      {/* =================================================================== */}
      <group ref={reasoningMonolithRef} position={[0, 0, 0]}>
        {/* Layered Computational Silicon & Glass Wafers (Multi-tier Model Stack) */}
        {[-0.45, -0.22, 0, 0.22, 0.45].map((wy, wi) => (
          <group key={`wafer-${wi}`} position={[0, wy, 0]}>
            {/* Dark Graphite Processing Slab with Beveled Edges */}
            <mesh>
              <boxGeometry args={[1.5, 0.08, 1.5]} />
              <primitive
                object={
                  mode === 'exploded' && activeSubsystem === 'ai-engine'
                    ? materials.gold
                    : materials.graphite
                }
                attach="material"
              />
            </mesh>
            {/* Satin Aluminium Perimeter Heatsink Edge */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.56, 0.03, 1.56]} />
              <primitive object={materials.aluminium} attach="material" />
            </mesh>
            {/* Smoked Optical Glass Interposer Sheet */}
            <mesh position={[0, 0.05, 0]}>
              <boxGeometry args={[1.42, 0.02, 1.42]} />
              <primitive object={materials.smokedGlass} attach="material" />
            </mesh>
          </group>
        ))}

        {/* Central Luminous Neural Heart (The Reasoning Die) */}
        <mesh ref={coreDieRef} position={[0, 0, 0]}>
          <octahedronGeometry args={[0.48, 0]} />
          <primitive object={materials.amberGlow} attach="material" />
        </mesh>

        {/* Vertical Gold Neural Bus Conduits Linking All Wafers */}
        {[
          [-0.6, -0.6],
          [0.6, -0.6],
          [-0.6, 0.6],
          [0.6, 0.6],
        ].map(([bx, bz], bi) => (
          <mesh key={`bus-${bi}`} position={[bx, 0, bz]}>
            <cylinderGeometry args={[0.025, 0.025, 1.15, 8]} />
            <primitive object={materials.gold} attach="material" />
          </mesh>
        ))}

        {/* Outer Titanium Retention Posts (Chassis Pillars) */}
        {[
          [-0.82, -0.82],
          [0.82, -0.82],
          [-0.82, 0.82],
          [0.82, 0.82],
        ].map(([px, pz], pi) => (
          <mesh key={`post-${pi}`} position={[px, 0, pz]}>
            <cylinderGeometry args={[0.04, 0.04, 1.25, 8]} />
            <primitive object={materials.titanium} attach="material" />
          </mesh>
        ))}
      </group>

      {/* =================================================================== */}
      {/* 2. THE 5-ENGINE METASEARCH CONSTELLATION (SEARXNG LIVE WEB INGEST)   */}
      {/* =================================================================== */}
      <group ref={metasearchConstellationRef}>
        {METASEARCH_ENGINES.map((engine, idx) => {
          const radius = 2.35;
          const x = Math.cos(engine.angle) * radius;
          const z = Math.sin(engine.angle) * radius;
          const isEngineActive = mode === 'exploded' && activeSubsystem === 'metasearch';

          return (
            <group key={engine.name} position={[x, 0, z]}>
              {/* Floating Prism Ingestion Satellite Node */}
              <mesh>
                <octahedronGeometry args={[0.18, 0]} />
                <primitive
                  object={isEngineActive ? materials.amberGlow : materials.gold}
                  attach="material"
                />
              </mesh>
              {/* Satellite Titanium Protective Ring */}
              <mesh rotation={[Math.PI / 4, 0, 0]}>
                <torusGeometry args={[0.26, 0.015, 12, 32]} />
                <primitive object={materials.aluminium} attach="material" />
              </mesh>

              {/* Optical Ingestion Laser Line Feeding Into The Central Core */}
              <line>
                <bufferGeometry
                  attach="geometry"
                  onUpdate={(self) => {
                    self.setFromPoints([
                      new THREE.Vector3(0, 0, 0),
                      new THREE.Vector3(-x * 0.75, 0, -z * 0.75),
                    ]);
                  }}
                />
                <lineBasicMaterial color="#F59E0B" transparent opacity={0.5} />
              </line>
            </group>
          );
        })}
      </group>

      {/* =================================================================== */}
      {/* 3. THE OFFLINE KNOWLEDGE LATTICE (SQLITE FTS5 & BM25 MATRIX)        */}
      {/* =================================================================== */}
      <group ref={knowledgeLatticeRef} position={[0, -1.25, 0]}>
        {/* Foundation Storage Substrate Slab */}
        <mesh position={[0, -0.15, 0]}>
          <boxGeometry args={[2.5, 0.18, 2.5]} />
          <primitive
            object={
              mode === 'exploded' && activeSubsystem === 'sqlite-bm25'
                ? materials.gold
                : materials.storageSubstrate
            }
            attach="material"
          />
        </mesh>
        {/* Aluminium Border Housing */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[2.62, 0.05, 2.62]} />
          <primitive object={materials.aluminium} attach="material" />
        </mesh>

        {/* 4x4 Grid of Milled Knowledge Blocks (Local Indexed Document Partitions) */}
        {[-0.75, -0.25, 0.25, 0.75].map((gx, xi) =>
          [-0.75, -0.25, 0.25, 0.75].map((gz, zi) => (
            <mesh key={`grid-${xi}-${zi}`} position={[gx, 0.02, gz]}>
              <boxGeometry args={[0.38, 0.06, 0.38]} />
              <primitive object={materials.titanium} attach="material" />
            </mesh>
          ))
        )}

        {/* Central Local Index Access Point */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.06, 16]} />
          <primitive object={materials.amberGlow} attach="material" />
        </mesh>
      </group>

      {/* =================================================================== */}
      {/* 4. THE GROUNDED CITATION MANIFOLD (CONTEXT GROUNDING & VERIFICATION) */}
      {/* =================================================================== */}
      <group ref={citationManifoldRef} position={[0, 1.35, 0]}>
        {/* Upper Hardware Memory & Citation Retention Crown */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 0.14, 2.2]} />
          <primitive
            object={
              mode === 'exploded' && activeSubsystem === 'hardware-memory'
                ? materials.gold
                : materials.graphite
            }
            attach="material"
          />
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[2.3, 0.04, 2.3]} />
          <primitive object={materials.aluminium} attach="material" />
        </mesh>

        {/* Circular Citation Calibration Rings */}
        <mesh position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.65, 0.65, 0.03, 32]} />
          <primitive object={materials.titanium} attach="material" />
        </mesh>
        <mesh position={[0, 0.14, 0]}>
          <ringGeometry args={[0.3, 0.6, 24]} />
          <primitive object={materials.gold} attach="material" />
        </mesh>
      </group>

      {/* =================================================================== */}
      {/* 5. DUAL CITATION TRAJECTORY RINGS (INTERSECTING ORBITALS)           */}
      {/* =================================================================== */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.85, 0.018, 16, 120]} />
        <primitive object={materials.gold} attach="material" />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.15, 0.012, 16, 120]} />
        <primitive object={materials.aluminium} attach="material" />
      </mesh>
    </group>
  );
};
