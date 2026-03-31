import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-neon-blue">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with a deep interest in AI and Automation. 
                My journey in tech is driven by a desire to create intelligent, efficient, and 
                visually stunning digital solutions that solve real-world problems.
              </p>
              <p>
                With expertise spanning from frontend aesthetics to robust backend architectures, 
                I specialize in building scalable web applications and integrating advanced AI 
                systems to streamline workflows and enhance user experiences.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <h4 className="text-white font-bold text-2xl">15+</h4>
                  <p className="text-sm">AI Solutions</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-2xl">10+</h4>
                  <p className="text-sm">Web Apps</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 glass p-2">
              <img
                src="https://iili.io/B3MxXRt.jpg"
                alt="Habban Madani"
                className="rounded-xl transition-all duration-700 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-neon-blue/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
