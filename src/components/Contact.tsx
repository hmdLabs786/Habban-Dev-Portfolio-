import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  const socials = [
    { name: 'GitHub', icon: <Github size={24} />, href: 'https://github.com/hmdLabs786/', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/habbanmadani/', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: <Facebook size={24} />, href: 'https://www.facebook.com/habban.madani', color: 'hover:text-blue-600' },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Get In <span className="text-neon-blue">Touch</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-luxury-black transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">Email Me</p>
                  <p className="text-xl font-bold">habban.madani786@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-luxury-black transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">Location</p>
                  <p className="text-xl font-bold">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-luxury-black transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">Call Me</p>
                  <p className="text-xl font-bold">+92 309 2792622</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-10 rounded-3xl border-white/5 space-y-8 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 group ${social.color}`}
                  >
                    <div className="text-neon-blue group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <span className="font-bold">{social.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="p-6 rounded-2xl bg-neon-blue/5 border border-neon-blue/20">
                <p className="text-slate-300 text-center italic">
                  "Let's build something amazing together."
                </p>
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
