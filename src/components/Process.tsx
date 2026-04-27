import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2, Rocket, SearchCheck } from 'lucide-react';

const STEPS = [
  {
    icon: SearchCheck,
    title: 'Discovery & Audit',
    desc: 'Deep analysis of your current technical landscape and requirements.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    icon: Terminal,
    title: 'System Design',
    desc: 'Architecting a scalable foundation with modern development standards.',
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    icon: Code2,
    title: 'Agile Development',
    desc: 'Continuous integration and delivery of polished, performant code.',
    color: 'bg-emerald-500/10 text-emerald-500'
  },
  {
    icon: Rocket,
    title: 'Deployment & Scale',
    desc: 'Automated launch protocols and infrastructure monitoring.',
    color: 'bg-orange-500/10 text-orange-500'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 max-w-container">
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">How we deploy.</h2>
        <p className="text-text-description max-w-xl mx-auto">
          A systematic approach to engineering that guarantees stability and speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STEPS.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group relative"
          >
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-surface-card border border-border-subtle hover:border-zinc-700 transition-all duration-300 h-full">
              <div className={`p-4 rounded-2xl mb-6 ${step.color}`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-text-description leading-relaxed">{step.desc}</p>
              
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 w-8 h-[2px] bg-border-subtle" />
              )}
            </div>
            
            <div className="absolute -top-4 -left-4 text-6xl font-black text-white/5 pointer-events-none">
              0{idx + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
