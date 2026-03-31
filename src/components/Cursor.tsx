import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-neon-blue pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none z-[9998] hidden md:block"
        animate={{ x: mousePosition.x - 128, y: mousePosition.y - 128 }}
        transition={{ type: 'spring', damping: 30, stiffness: 150, mass: 1 }}
      />
    </>
  );
};
