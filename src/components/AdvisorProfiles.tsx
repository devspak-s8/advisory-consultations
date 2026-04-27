import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Building2, User2, Star } from 'lucide-react';

const ADVISORS = [
  {
    id: 'sarah-chen',
    name: "Sarah Chen",
    role: "Ex-Stripe, Head of Growth",
    expertise: ["PLG Strategy", "Payment Infrastructure", "International Scaling"],
    company: "Stripe",
    bio: "Sarah led growth at Stripe during its most aggressive expansion phase. She specializes in building high-conversion funnels for B2B SaaS.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 'david-marcus',
    name: "David Marcus",
    role: "SaaS Founder (Exit $200M)",
    expertise: ["Series B Fundraising", "Product-Market Fit", "Leadership"],
    company: "AcquiredCo",
    bio: "As a multiple-exit founder, David knows exactly what VCs look for in the Series B crunch. He provides the war-room perspective for scaling founders.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 'elena-rodriguez',
    name: "Elena Rodriguez",
    role: "Fractional CTO, ex-FAANG",
    expertise: ["Cloud Arch", "Distributed Systems", "Team Engineering"],
    company: "Meta",
    bio: "Elena was a Principal Engineer at Meta. She helps startups avoid technical debt by architecting for 10x scale from day one.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300"
  }
];

export default function AdvisorProfiles() {
  return (
    <section id="advisors" className="py-24 max-w-container px-4">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-black tracking-tighter mb-4">The Elite Registry</h2>
          <p className="text-text-description text-lg max-w-xl">
            Direct access to the minds who built the world's most successful tech companies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {ADVISORS.map((advisor, idx) => (
          <motion.div
            key={advisor.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group bg-surface-card border border-border-subtle rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-xl"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={advisor.img} 
                alt={advisor.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-xl">
                <Star className="w-3 h-3 fill-black" /> Top 1%
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">{advisor.name}</h3>
                <p className="text-text-muted text-sm font-medium">{advisor.role}</p>
              </div>

              <div className="flex gap-4 items-center mb-6 text-text-description">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">{advisor.company}</span>
                </div>
              </div>

              <p className="text-sm text-text-description leading-relaxed mb-6">
                {advisor.bio}
              </p>

              <div className="space-y-4 mb-8">
                 <p className="text-[10px] font-black tracking-widest text-text-muted uppercase">Expertise</p>
                 <div className="flex flex-wrap gap-2">
                    {advisor.expertise.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-text-description">
                        {skill}
                      </span>
                    ))}
                 </div>
              </div>

              <button className="w-full py-4 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white/90 transition-all active:scale-[0.98]">
                Request Consultation
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
