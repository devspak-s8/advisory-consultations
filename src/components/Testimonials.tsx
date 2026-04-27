import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Advisory didn't just fix our pitch, they re-engineered how we think about our business. We raised our Series A in record time.",
    author: "James Wilson",
    company: "Foundry.ai",
    advisor: "David Marcus",
    role: "CEO & Founder"
  },
  {
    quote: "The technical audit saved us months of rework. Elena's perspective on distributed systems is world-class.",
    author: "Marcus Thorne",
    company: "Nexus Labs",
    advisor: "Elena Rodriguez",
    role: "Founder"
  },
  {
    quote: "Sarah's PLG playbook transformed our conversion rates. The depth of expertise here is genuinely unmatched.",
    author: "Chen Wei",
    company: "Looming Systems",
    advisor: "Sarah Chen",
    role: "Head of Product"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 max-w-container px-4">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black tracking-tighter mb-4">Transmission Success</h2>
        <p className="text-text-description text-lg max-w-2xl mx-auto">
          Voices from the frontier. How elite guidance reshaped the trajectory of high-growth ventures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative p-10 rounded-[2.5rem] bg-surface-card border border-border-subtle hover:border-zinc-700 transition-all duration-500 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="mb-8 p-3 bg-white/5 w-fit rounded-2xl">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <p className="text-lg font-medium leading-relaxed mb-10 text-white/90">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black text-xs text-text-muted">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">{t.role} @ {t.company}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">Advisor: {t.advisor}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-white fill-white" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
