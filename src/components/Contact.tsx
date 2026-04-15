import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  const socials = [
    { name: 'GitHub', icon: <Github size={24} />, href: 'https://github.com/hmdLabs786/', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/habbanmadani/', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: <Facebook size={24} />, href: 'https://www.facebook.com/habban.madani', color: 'hover:text-blue-600' },
  ];

  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [popupMessage, setPopupMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setPopupMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setPopupMessage('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Success/Error Popup */}
      {status !== 'idle' && status !== 'loading' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
        >
          <div className="glass p-8 rounded-3xl border-white/10 max-w-sm w-full text-center shadow-2xl">
            <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              {status === 'success' ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              )}
            </div>
            <h4 className="text-xl font-bold mb-2">{status === 'success' ? 'Success!' : 'Error'}</h4>
            <p className="text-slate-400 mb-8">{popupMessage}</p>
            <button 
              onClick={() => setStatus('idle')}
              className="w-full py-3 bg-neon-blue text-luxury-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
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
            <div className="glass p-8 md:p-10 rounded-3xl border-white/5 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 font-mono ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-blue focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-400 font-mono ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-blue focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-400 font-mono ml-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-blue focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-neon-blue text-luxury-black font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-luxury-black/30 border-t-luxury-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-white/5 flex justify-center gap-8">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-500 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
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
