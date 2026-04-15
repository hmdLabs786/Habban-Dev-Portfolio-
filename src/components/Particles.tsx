import React, { useEffect, useRef } from 'react';

export const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      twinkleSpeed: number;
      layer: number;

      constructor(layer: number) {
        this.layer = layer;
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        
        // Different properties based on layer
        if (layer === 0) { // Background stars
          this.size = Math.random() * 0.8 + 0.1;
          this.speedX = Math.random() * 0.02 - 0.01;
          this.speedY = Math.random() * 0.02 - 0.01;
          this.opacity = Math.random() * 0.3;
          this.twinkleSpeed = Math.random() * 0.005 + 0.002;
        } else if (layer === 1) { // Midground stars
          this.size = Math.random() * 1.2 + 0.2;
          this.speedX = Math.random() * 0.05 - 0.025;
          this.speedY = Math.random() * 0.05 - 0.025;
          this.opacity = Math.random() * 0.5;
          this.twinkleSpeed = Math.random() * 0.01 + 0.005;
        } else { // Foreground stars
          this.size = Math.random() * 1.8 + 0.5;
          this.speedX = Math.random() * 0.1 - 0.05;
          this.speedY = Math.random() * 0.1 - 0.05;
          this.opacity = Math.random() * 0.8;
          this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        }
        
        this.color = `rgba(255, 255, 255, `;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.twinkleSpeed;

        if (this.opacity > 1 || this.opacity < 0.1) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }

        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        ctx!.fillStyle = this.color + this.opacity * 0.6 + ')';
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      const isMobile = window.innerWidth < 768;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      
      // Reduced particle count for mobile to improve performance
      const bgCount = isMobile ? 60 : 150;
      const midCount = isMobile ? 30 : 80;
      const fgCount = isMobile ? 10 : 30;
      
      for (let i = 0; i < bgCount; i++) particles.push(new Particle(0));
      for (let i = 0; i < midCount; i++) particles.push(new Particle(1));
      for (let i = 0; i < fgCount; i++) particles.push(new Particle(2));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Use a simpler drawing method for better performance
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        
        ctx.fillStyle = p.color + p.opacity * 0.6 + ')';
        
        // For very small particles, fillRect is much faster than arc
        if (p.size < 1) {
          ctx.fillRect(p.x, p.y, p.size * 2, p.size * 2);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
};
