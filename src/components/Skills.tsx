import React from 'react';
import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'APIs', level: 85 },
      { name: 'Databases', level: 80 },
    ],
  },
  {
    title: 'AI & Automation',
    skills: [
      { name: 'Flowise', level: 85 },
      { name: 'n8n', level: 80 },
      { name: 'Make.com', level: 90 },
      { name: 'Chatbots', level: 85 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'Docker', level: 60 },
      { name: 'Figma', level: 70 },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-luxury-navy/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-neon-blue">Skills</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and expertise in building modern digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-neon-blue/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-neon-blue">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-neon-blue">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-neon-blue shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
