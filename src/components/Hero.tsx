import React from 'react';
import { motion } from 'motion/react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Magnetic } from './Magnetic';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Web', 'App Development', 'AI Chatbots', 'Automation'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Glowing Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Circular Glowing Sides */}
        <motion.div 
          className="absolute -left-[10%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-neon-blue/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -right-[10%] top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Primary Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-neon-blue/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-900/10 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '15s' }} />

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-neon-blue font-mono tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8 flex items-center justify-center gap-6">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-neon-blue/50" />
              Full Stack & AI
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-neon-blue/50" />
            </h2>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                Habban
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-blue-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                Madani
              </span>
            </h1>

            <p className="text-base md:text-xl text-slate-400 max-w-xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
              Engineering the future through <br className="hidden md:block" />
              <span className="text-white font-medium inline-block min-w-[220px] mt-2">
                {text}
                <Cursor cursorColor="#38bdf8" />
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Magnetic strength={0.2}>
                <motion.a
                  href="#projects"
                  className="group relative px-12 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:bg-neon-blue hover:text-white hover:shadow-[0_0_40px_rgba(56,189,248,0.6)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <motion.a
                  href="#contact"
                  className="px-12 py-5 glass border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue/50 to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.5em] text-slate-600 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
};
