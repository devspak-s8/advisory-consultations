import React from 'react';
import { motion } from 'motion/react';

const BRANDS = [
  "STRIPE", "META", "GOOGLE", "AIRBNB", "NETFLIX", "TESLA", "COINBASE", "DATADOG"
];

export default function Network() {
  return (
    <section className="py-24 border-y border-border-subtle bg-surface-card/20 overflow-hidden">
      <div className="max-w-container px-4">
        <p className="text-[10px] font-black tracking-[0.2em] text-text-muted uppercase text-center mb-12">
          Advisors sourced from high-growth engineering cultures
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {BRANDS.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-black tracking-tighter"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
