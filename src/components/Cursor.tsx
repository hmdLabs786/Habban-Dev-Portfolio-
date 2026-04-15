import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const Cursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const glowConfig = { damping: 30, stiffness: 150, mass: 1 };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  const glowX = useSpring(mouseX, glowConfig);
  const glowY = useSpring(mouseY, glowConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-neon-blue pointer-events-none z-[9999] hidden md:block"
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none z-[9998] hidden md:block"
        style={{ 
          x: glowX, 
          y: glowY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
    </>
  );
};
