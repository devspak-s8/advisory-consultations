import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "How are advisors vetted for the network?",
    a: "We only accept individuals who have held VP, Head of, or Principal engineering roles at unicorn-scale companies. Every advisor undergoes a technical and narrative audit before activation."
  },
  {
    q: "Is there a long-term commitment required?",
    a: "No. Our protocol is designed for high-impact, short-burst tactical advice. You can book single sessions or multi-week sprints depending on your current hurdle."
  },
  {
    q: "Does Advisory take equity in my startup?",
    a: "None. We operate on a fixed-tier or hourly rate model. Your cap table remains untouched while you gain elite-level intelligence."
  },
  {
    q: "Can I switch advisors if the focus changes?",
    a: "Absolutely. Founders often start with a 'System Blueprint' advisor and transition to a 'Growth' or 'GTM' specialist as the product matures."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 max-w-container px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="p-3 bg-white/5 w-fit rounded-2xl mb-6">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-black tracking-tighter mb-4">Operational Intelligence</h2>
            <p className="text-text-description">
              Common protocols and clearing points for founders entering the network.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-border-subtle rounded-2xl overflow-hidden bg-surface-card/30 hover:border-white/20 transition-colors"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {activeIndex === idx ? <Minus className="w-5 h-5 text-white/50" /> : <Plus className="w-5 h-5 text-white/50" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-description leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
