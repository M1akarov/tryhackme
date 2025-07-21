import React, { useEffect, useRef, useState } from 'react';

const MatrixFace = () => {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const width = 300;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    const dots = [];
    const faceShape = [
      // Outline
      ...Array.from({ length: 50 }, (_, i) => {
        const angle = (i / 50) * Math.PI * 2;
        return {
          x: width/2 + Math.cos(angle) * 80,
          y: height/2 + Math.sin(angle) * 100,
          delay: Math.random() * 2000,
          targetAlpha: 0.6 + Math.random() * 0.4,
        };
      }),
      // Eyes
      ...Array.from({ length: 8 }, (_, i) => ({
        x: width/2 - 25 + (i < 4 ? 0 : 50),
        y: height/2 - 30 + (i % 4) * 8,
        delay: Math.random() * 1000 + 500,
        targetAlpha: 0.8 + Math.random() * 0.2,
      })),
      // Nose
      ...Array.from({ length: 4 }, (_, i) => ({
        x: width/2 - 2 + i,
        y: height/2 + 10 + i * 3,
        delay: Math.random() * 1500 + 800,
        targetAlpha: 0.7,
      })),
      // Mouth
      ...Array.from({ length: 12 }, (_, i) => {
        const curve = Math.sin((i / 12) * Math.PI) * 15;
        return {
          x: width/2 - 30 + i * 5,
          y: height/2 + 40 + curve,
          delay: Math.random() * 2000 + 1000,
          targetAlpha: 0.6 + Math.random() * 0.3,
        };
      }),
      // Random face details
      ...Array.from({ length: 30 }, () => ({
        x: width/2 + (Math.random() - 0.5) * 120,
        y: height/2 + (Math.random() - 0.5) * 160,
        delay: Math.random() * 3000,
        targetAlpha: 0.3 + Math.random() * 0.4,
      })),
    ];

    dots.forEach(dot => {
      dot.currentAlpha = 0;
      dot.size = 2 + Math.random() * 2;
      dot.pulseSpeed = 0.02 + Math.random() * 0.03;
      dot.pulseOffset = Math.random() * Math.PI * 2;
    });

    let startTime = Date.now();
    let animationId;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      ctx.clearRect(0, 0, width, height);
      
      dots.forEach(dot => {
        if (elapsed > dot.delay) {
          const fadeTime = elapsed - dot.delay;
          const fadeProgress = Math.min(fadeTime / 1000, 1);
          dot.currentAlpha = dot.targetAlpha * fadeProgress;
          
          const pulse = Math.sin(currentTime * dot.pulseSpeed + dot.pulseOffset) * 0.2 + 0.8;
          const alpha = dot.currentAlpha * pulse;
          
          ctx.globalAlpha = alpha;
          ctx.fillStyle = Math.random() > 0.7 ? '#ffffff' : '#00ff41';
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Random glitch effect
          if (Math.random() < 0.01) {
            ctx.fillStyle = '#ff0000';
            ctx.fill();
          }
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible]);

  return (
    <div className={`fixed top-1/2 right-20 transform -translate-y-1/2 z-10 transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <canvas
        ref={canvasRef}
        className="filter blur-[0.5px]"
        style={{ 
          imageRendering: 'pixelated',
          filter: 'contrast(1.2) brightness(1.1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-pulse" />
    </div>
  );
};

export default MatrixFace;