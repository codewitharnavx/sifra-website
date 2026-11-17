import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CoreMeshProps {
  sceneIndex: number;
  scrollProgress: number;
}

export const CoreMesh: React.FC<CoreMeshProps> = ({ sceneIndex, scrollProgress }) => {
  const rootGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const plateTopRef = useRef<THREE.Group>(null);
  const plateBottomRef = useRef<THREE.Group>(null);
  const plateLeftRef = useRef<THREE.Group>(null);
  const plateRightRef = useRef<THREE.Group>(null);
  const dataPacketsGroupRef = useRef<THREE.Group>(null);
  const railsGroupRef = useRef<THREE.Group>(null);

  // Materials palette (Matte Graphite, Brushed Titanium, Metallic Amber, Dark Ceramic)
  const materials = useMemo(() => {
    return {
      graphite: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#11151A'),
        roughness: 0.65,
        metalness: 0.25,
      }),
      titanium: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#252C35'),
        roughness: 0.35,
        metalness: 0.75,
      }),
      amberMetal: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#C99A62'),
        emissive: new THREE.Color('#9D7651'),
        emissiveIntensity: 0.35,
        roughness: 0.25,
        metalness: 0.85,
      }),
      ceramic: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#191E24'),
        roughness: 0.45,
        metalness: 0.15,
      }),
      dataPacket: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FAFAF7'),
        emissive: new THREE.Color('#C99A62'),
        emissiveIntensity: 1.2,
        roughness: 0.1,
        metalness: 0.9,
      }),
      wireframeHairline: new THREE.MeshBasicMaterial({
        color: new THREE.Color('#C99A62'),
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      }),
    };
  }, []);

  // 5 Data Packet crystalline tokens for information flow
  const packetOffsets = useMemo(() => [0, 0.2, 0.4, 0.6, 0.8], []);

  useFrame((state, delta) => {
    if (!rootGroupRef.current) return;

    const time = state.clock.getElapsedTime();

    // 1. Subtle, slow ambient drift (NOT rapid spinning)
    rootGroupRef.current.rotation.y = time * 0.03 + scrollProgress * 0.8;
    rootGroupRef.current.rotation.x = Math.sin(time * 0.05) * 0.03;

    // 2. Physical Transformation Targets based on Scroll Progress (0 to 1)
    // Progress segments:
    // 0.00 - 0.12: Scene 1 (Assembled Core)
    // 0.12 - 0.24: Scene 2 (Deconstruction - Plates slide out)
    // 0.24 - 0.38: Scene 3 (Architecture Revealed - Exploded stations)
    // 0.38 - 0.50: Scene 4 (Information Flow - Data packets active)
    // 0.50 - 0.62: Scene 5 (Capability Expansion - Fan out)
    // 0.62 - 0.74: Scene 6 (Product Experience - Recede to background)
    // 0.74 - 0.85: Scene 7 (Hardware Monolith - Vertical alignment)
    // 0.85 - 0.93: Scene 8 (Local Boundaries - Guard perimeter)
    // 0.93 - 1.00: Scene 9 (Reassembly - Smooth return to Assembled Core)

    let targetSeparation = 0.0;
    let targetZPosition = 0.0;
    let targetPacketsOpacity = 0.0;
    let targetMonolith = 0.0;

    if (scrollProgress < 0.12) {
      // Scene 1: Fully Assembled
      targetSeparation = 0.0;
      targetZPosition = 0.0;
      targetPacketsOpacity = 0.0;
      targetMonolith = 0.0;
    } else if (scrollProgress < 0.24) {
      // Scene 2: Deconstruction
      const t = (scrollProgress - 0.12) / 0.12;
      targetSeparation = THREE.MathUtils.lerp(0.0, 1.4, t);
      targetZPosition = 0.0;
      targetPacketsOpacity = 0.1;
      targetMonolith = 0.0;
    } else if (scrollProgress < 0.38) {
      // Scene 3: Architecture Stations
      targetSeparation = 1.6;
      targetZPosition = 0.0;
      targetPacketsOpacity = 0.3;
      targetMonolith = 0.0;
    } else if (scrollProgress < 0.50) {
      // Scene 4: Information Flow
      targetSeparation = 1.8;
      targetZPosition = 0.2;
      targetPacketsOpacity = 1.0;
      targetMonolith = 0.0;
    } else if (scrollProgress < 0.62) {
      // Scene 5: Capability Expansion
      targetSeparation = 2.1;
      targetZPosition = -0.3;
      targetPacketsOpacity = 0.4;
      targetMonolith = 0.0;
    } else if (scrollProgress < 0.74) {
      // Scene 6: Product Experience (Engine recedes, lets screenshots shine)
      targetSeparation = 1.2;
      targetZPosition = -3.8; // Move deep into background
      targetPacketsOpacity = 0.1;
      targetMonolith = 0.0;
    } else if (scrollProgress < 0.85) {
      // Scene 7: Hardware Monolith (Vertical architectural collapse)
      targetSeparation = 0.6;
      targetZPosition = -0.5;
      targetPacketsOpacity = 0.2;
      targetMonolith = 1.0;
    } else if (scrollProgress < 0.93) {
      // Scene 8: Local Boundaries
      targetSeparation = 0.8;
      targetZPosition = 0.0;
      targetPacketsOpacity = 0.3;
      targetMonolith = 0.6;
    } else {
      // Scene 9: Full Reassembly (Glides back to 0 separation)
      const t = (scrollProgress - 0.93) / 0.07;
      targetSeparation = THREE.MathUtils.lerp(0.8, 0.0, t);
      targetZPosition = 0.0;
      targetPacketsOpacity = 0.0;
      targetMonolith = 0.0;
    }

    // Smooth interpolation with delta time
    const lerpFactor = Math.min(delta * 4, 1);

    // Root Z depth
    rootGroupRef.current.position.z = THREE.MathUtils.lerp(
      rootGroupRef.current.position.z,
      targetZPosition,
      lerpFactor
    );

    // Plate translations (Separation on X and Y)
    if (plateTopRef.current && plateBottomRef.current && plateLeftRef.current && plateRightRef.current) {
      // Vertical Plates
      plateTopRef.current.position.y = THREE.MathUtils.lerp(
        plateTopRef.current.position.y,
        1.15 + targetSeparation * (targetMonolith > 0.5 ? 0.4 : 1.0),
        lerpFactor
      );
      plateBottomRef.current.position.y = THREE.MathUtils.lerp(
        plateBottomRef.current.position.y,
        -1.15 - targetSeparation * (targetMonolith > 0.5 ? 0.4 : 1.0),
        lerpFactor
      );

      // Horizontal Plates (contract inward on Monolith)
      plateLeftRef.current.position.x = THREE.MathUtils.lerp(
        plateLeftRef.current.position.x,
        -1.15 - targetSeparation * (targetMonolith > 0.5 ? 0.2 : 1.0),
        lerpFactor
      );
      plateRightRef.current.position.x = THREE.MathUtils.lerp(
        plateRightRef.current.position.x,
        1.15 + targetSeparation * (targetMonolith > 0.5 ? 0.2 : 1.0),
        lerpFactor
      );

      // Rotation tilts during expansion
      plateTopRef.current.rotation.x = THREE.MathUtils.lerp(
        plateTopRef.current.rotation.x,
        targetSeparation * 0.15,
        lerpFactor
      );
      plateBottomRef.current.rotation.x = THREE.MathUtils.lerp(
        plateBottomRef.current.rotation.x,
        -targetSeparation * 0.15,
        lerpFactor
      );
    }

    // Animate Data Packets along guide channels in Scene 4
    if (dataPacketsGroupRef.current) {
      dataPacketsGroupRef.current.children.forEach((child, idx) => {
        const offset = packetOffsets[idx];
        const progressInLoop = (time * 0.35 + offset) % 1.0;
        const angle = progressInLoop * Math.PI * 2;
        const radius = 1.3 + targetSeparation * 0.6;

        child.position.x = Math.cos(angle) * radius;
        child.position.y = Math.sin(angle) * radius;
        child.position.z = Math.sin(angle * 2) * 0.2;
        child.rotation.x = time * 2;
        child.rotation.y = time * 3;

        // Scale based on targetPacketsOpacity
        child.scale.setScalar(targetPacketsOpacity * 0.12);
      });
    }

    // Central Core subtle breathing
    if (coreRef.current) {
      const corePulse = 1.0 + Math.sin(time * 1.5) * 0.02;
      coreRef.current.scale.set(corePulse, corePulse, corePulse);
      coreRef.current.rotation.y = -time * 0.05;
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, 0, 0]}>
      {/* 1. Central Computational Unit (Internal Core Cylinder & Amber Seam) */}
      <mesh ref={coreRef}>
        <cylinderGeometry args={[0.9, 0.9, 1.8, 32]} />
        <primitive object={materials.ceramic} attach="material" />
      </mesh>

      {/* Internal Amber Core Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.92, 0.025, 16, 64]} />
        <primitive object={materials.amberMetal} attach="material" />
      </mesh>

      {/* 2. Top Precision Curved Plate (SearXNG Metasearch Station) */}
      <group ref={plateTopRef} position={[0, 1.15, 0]}>
        <mesh>
          <boxGeometry args={[1.6, 0.18, 1.6]} />
          <primitive object={materials.titanium} attach="material" />
        </mesh>
        {/* Amber Contact Pins */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.12, 16]} />
          <primitive object={materials.amberMetal} attach="material" />
        </mesh>
      </group>

      {/* 3. Bottom Precision Curved Plate (SQLite BM25 Document Chassis) */}
      <group ref={plateBottomRef} position={[0, -1.15, 0]}>
        <mesh>
          <boxGeometry args={[1.6, 0.18, 1.6]} />
          <primitive object={materials.titanium} attach="material" />
        </mesh>
        {/* Amber Contact Pins */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.12, 16]} />
          <primitive object={materials.amberMetal} attach="material" />
        </mesh>
      </group>

      {/* 4. Left Precision Curved Plate (Hardware Controller Shield) */}
      <group ref={plateLeftRef} position={[-1.15, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.18, 1.6, 1.6]} />
          <primitive object={materials.graphite} attach="material" />
        </mesh>
        {/* Hairline Edge Detail */}
        <mesh scale={[1.02, 1.02, 1.02]}>
          <boxGeometry args={[0.18, 1.6, 1.6]} />
          <primitive object={materials.wireframeHairline} attach="material" />
        </mesh>
      </group>

      {/* 5. Right Precision Curved Plate (Autonomous Memory Bus) */}
      <group ref={plateRightRef} position={[1.15, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.18, 1.6, 1.6]} />
          <primitive object={materials.graphite} attach="material" />
        </mesh>
        {/* Hairline Edge Detail */}
        <mesh scale={[1.02, 1.02, 1.02]}>
          <boxGeometry args={[0.18, 1.6, 1.6]} />
          <primitive object={materials.wireframeHairline} attach="material" />
        </mesh>
      </group>

      {/* 6. Precision Guide Rails (Chassis Struts connecting the apparatus) */}
      <group ref={railsGroupRef}>
        {[
          [-0.75, -0.75],
          [0.75, -0.75],
          [-0.75, 0.75],
          [0.75, 0.75],
        ].map(([rx, rz], i) => (
          <mesh key={i} position={[rx, 0, rz]}>
            <cylinderGeometry args={[0.02, 0.02, 2.5, 8]} />
            <primitive object={materials.amberMetal} attach="material" />
          </mesh>
        ))}
      </group>

      {/* 7. Information Flow Data Packets (Active in Scene 4) */}
      <group ref={dataPacketsGroupRef}>
        {packetOffsets.map((_, i) => (
          <mesh key={i}>
            <octahedronGeometry args={[1, 0]} />
            <primitive object={materials.dataPacket} attach="material" />
          </mesh>
        ))}
      </group>
    </group>
  );
};
