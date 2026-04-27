import React from 'react';
import { motion } from 'motion/react';
import { 
  Puzzle, 
  BookOpen, 
  Layout, 
  TrendingUp, 
  Mic2, 
  Wrench,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

const SCOPE_ITEMS = [
  {
    icon: Puzzle,
    title: 'Stress-Testing Your Idea',
    desc: 'We dig into your startup with uncomfortable questions to find the proof points. Why would anyone pay? What is the real ROI?',
    side: 'left'
  },
  {
    icon: BookOpen,
    title: 'Narrative Positioning',
    desc: 'Translating complex tech into value. We turn "verifying code" into "trust infrastructure that saves millions".',
    side: 'right'
  },
  {
    icon: Layout,
    title: 'Deck Restructuring',
    desc: 'Reordering your story for maximum investor impact. From Problem to Team, every slide is engineered to hit.',
    side: 'left'
  },
  {
    icon: TrendingUp,
    title: 'Path to Returns',
    desc: 'Sharpening pricing and revenue models. We make your metrics look investable by highlighting clear scalability.',
    side: 'right'
  },
  {
    icon: Mic2,
    title: 'Communication Coaching',
    desc: 'Removing jargon and fixing your explanation. A 60-second pitch that sounds confident, not just technical.',
    side: 'left'
  },
  {
    icon: Wrench,
    title: 'Hands-on Execution',
    desc: 'If needed, we rewrite your entire deck, redesign slides, and draft investor emails that get replies.',
    side: 'right'
  }
];

export default function Process() {
  return (
    <section id="what-we-do" className="py-24 max-w-container">
      <div className="text-center mb-24 px-4">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-widest uppercase mb-4"
        >
          No Buzzwords. Just Results.
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">
          What we actually <span className="text-text-muted">do</span>.
        </h2>
        <p className="text-text-description max-w-2xl mx-auto text-lg">
          We strip away the noise and focus on turning confusing ideas into investor-ready businesses.
        </p>
      </div>

      <div className="space-y-12">
        {SCOPE_ITEMS.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: item.side === 'left' ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex flex-col ${item.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
          >
            <div className="flex-1 w-full">
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-8 rounded-3xl bg-surface-card border border-border-subtle group hover:border-white/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-text-description leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
            <div className="hidden md:block w-px h-24 bg-border-subtle relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white]" />
            </div>
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>

      {/* What they DON'T do */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-12 rounded-[3rem] bg-white text-black text-center"
      >
        <div className="flex justify-center mb-6 text-black">
          <AlertTriangle className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-black tracking-tight mb-4 uppercase">The Honest Truth</h3>
        <p className="text-black/70 max-w-2xl mx-auto text-lg font-medium">
          We don't build your product, we don't get you customers, and we never guarantee funding. If your startup is weak, we can only polish it—not fix it. We turn messy slides into clear stories.
        </p>
      </motion.div>

      <div className="mt-32 text-center">
        <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3 italic">
           <Lightbulb className="w-6 h-6 text-yellow-500" />
           Turn "Confusing Idea + Messy Slides" into "Clear Story + Investor-Friendly Business"
        </h3>
      </div>
    </section>
  );
}
