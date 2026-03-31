import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Cursor } from './components/Cursor';
import { Particles } from './components/Particles';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-luxury-black text-slate-200 selection:bg-neon-blue selection:text-luxury-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue z-[60] origin-left shadow-[0_0_10px_rgba(56,189,248,1)]"
        style={{ scaleX }}
      />

      <Cursor />
      <Particles />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 bg-luxury-navy/30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-extrabold tracking-tighter text-white">
            <span className="text-neon-blue">H</span>ABBAN<span className="text-neon-blue">-</span>DEV
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Habban-Dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
