import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CoreMesh } from './CoreMesh';
import { FallbackCanvas } from './FallbackCanvas';

interface AutonomousCoreCanvasProps {
  sceneIndex: number;
  scrollProgress: number;
  isReducedMotion: boolean;
  isMobile: boolean;
}

class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn('WebGL Rendering issue encountered, falling back to 2D Canvas:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const AutonomousCoreCanvas: React.FC<AutonomousCoreCanvasProps> = ({
  sceneIndex,
  scrollProgress,
  isReducedMotion,
  isMobile,
}) => {
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

  if (!webGLSupported || isReducedMotion) {
    return <FallbackCanvas sceneIndex={sceneIndex} />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <WebGLErrorBoundary fallback={<FallbackCanvas sceneIndex={sceneIndex} />}>
        <Canvas
          dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
          camera={{ position: [0, 0, 6.8], fov: 42 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full"
        >
          {/* Museum-Grade Warm Lighting Setup */}
          <ambientLight intensity={0.45} color="#FAFAF7" />
          <directionalLight position={[6, 8, 4]} intensity={1.1} color="#FFFFFF" />
          <directionalLight position={[-6, -4, -4]} intensity={0.4} color="#A4A49D" />
          <pointLight position={[0, 0, 1]} intensity={0.9} color="#C99A62" distance={5} />

          <Suspense fallback={null}>
            <CoreMesh sceneIndex={sceneIndex} scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
};
