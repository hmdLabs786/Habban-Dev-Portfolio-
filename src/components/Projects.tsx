import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Store',
    description: 'A premium shopping experience with seamless checkout and AI-powered recommendations.',
    image: 'https://picsum.photos/seed/shop/800/600',
    github: 'https://github.com/hmdLabs786/Full-Stack-Online-Ecommerce-Store.git',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time analytics and engagement tracking for multi-platform social management.',
    image: 'https://picsum.photos/seed/dashboard/800/600',
    github: 'https://github.com/hmdLabs786/Social-Media-Dashboard.git',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative workspace with drag-and-drop task tracking and automated notifications.',
    image: 'https://picsum.photos/seed/task/800/600',
    github: 'https://github.com/hmdLabs786/Task-Management-System.git',
  },
  {
    title: 'File Management System',
    description: 'Secure cloud storage solution with advanced encryption and file sharing capabilities.',
    image: 'https://picsum.photos/seed/files/800/600',
    github: 'https://github.com/hmdLabs786/File-Management-System.git',
  },
  {
    title: 'News Website',
    description: 'Dynamic content delivery platform with real-time updates and personalized feeds.',
    image: 'https://picsum.photos/seed/news/800/600',
    github: 'https://github.com/hmdLabs786/Dastan-AI.git',
  },
  {
    title: 'Sustainable Living App',
    description: 'Community-driven platform for eco-friendly lifestyle tracking and carbon footprint reduction.',
    image: 'https://picsum.photos/seed/eco/800/600',
    github: 'https://github.com/hmdLabs786/Sustanify.git',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-neon-blue">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my ability to deliver high-quality digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <TiltCard className="group h-full">
                <div className="relative rounded-2xl overflow-hidden glass border-white/10 h-full flex flex-col p-8 transition-all duration-500 hover:border-neon-blue/30">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                      <Github size={24} />
                    </div>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-neon-blue transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  <div className="pt-6 border-t border-white/5">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-neon-blue hover:text-white transition-colors group/link"
                    >
                      View Repository 
                      <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                    </a>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/0 via-neon-blue/5 to-neon-blue/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
