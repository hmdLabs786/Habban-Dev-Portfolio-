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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      
      // Layered star distribution
      for (let i = 0; i < 150; i++) particles.push(new Particle(0));
      for (let i = 0; i < 80; i++) particles.push(new Particle(1));
      for (let i = 0; i < 30; i++) particles.push(new Particle(2));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
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
