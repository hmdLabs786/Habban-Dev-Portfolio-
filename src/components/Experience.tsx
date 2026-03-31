import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'PHP Developer Intern',
    company: 'Internee.pk',
    period: '2025 - 2026',
    description: 'Developing robust backend solutions using PHP and MySQL, focusing on performance optimization and API integration.',
  },
];

export const Experience: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 bg-luxury-navy/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work <span className="text-neon-blue">Experience</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my expertise.
          </p>
        </motion.div>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 origin-top hidden md:block"
            style={{ scaleY }}
          />
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(56,189,248,1)] -translate-x-1.5 z-10 hidden md:block" />

                <div className="w-full md:w-1/2">
                  <div className="glass p-8 rounded-2xl border-white/5 hover:border-neon-blue/20 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-neon-blue/10 text-neon-blue">
                        <Briefcase size={20} />
                      </div>
                      <span className="text-sm font-mono text-neon-blue">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-slate-300 font-medium mb-4">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
