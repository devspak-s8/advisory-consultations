import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface StartProjectProps {
  selectedTier: string | null;
}

export default function StartProject({ selectedTier }: StartProjectProps) {
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', brief: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('transmitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', brief: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 max-w-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight mb-6">Initiate Protocol</h2>
          <p className="text-text-description text-lg mb-10 leading-relaxed">
            Our engineering team is ready to analyze your requirements. Provide the details below to start the transmission.
          </p>
          
          <div className="space-y-6">
            {[
              { title: 'Response Time', desc: 'Typical turnaround within 24 standard hours.' },
              { title: 'Security First', desc: 'All data is encrypted post-transmission.' },
              { title: 'Global Reach', desc: 'Available for remote deployment worldwide.' }
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-border-subtle bg-surface-card/30">
                <div className="p-2 bg-white/5 rounded-lg h-fit">
                  <Info className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-card border border-border-subtle p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <AnimatePresence>
            {selectedTier && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-3 rounded-xl border border-white/20 bg-white/5 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Selected Configuration: {selectedTier}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Transmission Received</h3>
              <p className="text-text-muted">Our core team will respond shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-bold border-b border-white"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. John Wick"
                  className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-white focus:border-white transition-colors outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-white focus:border-white transition-colors outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-text-muted mb-2">Project Brief</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about the challenge..."
                  className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 text-white focus:border-white transition-colors outline-none resize-none"
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                />
              </div>
              
              <button
                disabled={status === 'transmitting'}
                className="w-full bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-all disabled:opacity-50"
              >
                {status === 'transmitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Initiate Transmission
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
