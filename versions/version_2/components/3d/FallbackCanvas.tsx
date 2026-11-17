import React, { useEffect, useRef } from 'react';

interface FallbackCanvasProps {
  sceneIndex: number;
}

export const FallbackCanvas: React.FC<FallbackCanvasProps> = ({ sceneIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.24;

      // Soft architectural radial tone
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        baseRadius * 0.1,
        centerX,
        centerY,
        baseRadius * 2.0
      );
      gradient.addColorStop(0, 'rgba(201, 154, 98, 0.04)');
      gradient.addColorStop(0.6, 'rgba(17, 21, 26, 0.02)');
      gradient.addColorStop(1, 'rgba(9, 11, 14, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle, slow rotating mechanical guide rings
      angle += 0.0015;

      // Ring 1: Fine Hairline (Graphite / Stone)
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 0.85, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(164, 164, 157, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Ring 2: Precision Quadrant Ticks (Amber)
      ctx.beginPath();
      ctx.setLineDash([4, 16]);
      ctx.arc(centerX, centerY, baseRadius * 1.25, angle, angle + Math.PI * 2);
      ctx.strokeStyle = 'rgba(201, 154, 98, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      // Registration Crosshairs
      const crossSize = 14;
      ctx.strokeStyle = 'rgba(201, 154, 98, 0.35)';
      ctx.lineWidth = 1;
      // Center
      ctx.beginPath();
      ctx.moveTo(centerX - crossSize, centerY);
      ctx.lineTo(centerX + crossSize, centerY);
      ctx.moveTo(centerX, centerY - crossSize);
      ctx.lineTo(centerX, centerY + crossSize);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sceneIndex]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block opacity-70" />
    </div>
  );
};
