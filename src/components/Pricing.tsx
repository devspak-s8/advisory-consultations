import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap } from 'lucide-react';

type Currency = 'USD' | 'EUR' | 'NGN';

const RATES = {
  USD: 1,
  EUR: 0.92,
  NGN: 1550, // Example rate
};

const SYMBOLS = {
  USD: '$',
  EUR: '€',
  NGN: '₦',
};

const TIERS = [
  {
    id: 'blueprint',
    name: 'System Blueprint',
    price: 1500,
    description: 'High-level architectural consulting and roadmap.',
    features: ['Infrastructure Audit', 'Tech Stack Selection', 'Scalability Roadmap', 'Risk Assessment'],
  },
  {
    id: 'mvp',
    name: 'Core MVP',
    price: 8500,
    description: 'Rapid production-ready product building.',
    popular: true,
    features: ['Functionality Design', 'Frontend/Backend Dev', 'Database Integration', 'Cloud Deployment'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Engine',
    price: 25000,
    description: 'High-scale systems and complex integrations.',
    features: ['Distributed Systems', 'Security Hardening', 'Legacy Migration', 'Performance Optimization'],
  },
  {
    id: 'prototype',
    name: 'Custom Prototype',
    price: 4500,
    description: 'Fixed-scope R&D tools and internal apps.',
    features: ['PoC Development', 'UX Prototype', 'API Layering', 'Tooling Setup'],
  },
];

interface PricingProps {
  onSelectTier: (tierName: string) => void;
}

export default function Pricing({ onSelectTier }: PricingProps) {
  const [currency, setCurrency] = useState<Currency>('USD');

  const formatPrice = (price: number) => {
    const converted = price * RATES[currency];
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(converted).replace(/[A-Z]+/, SYMBOLS[currency]);
  };

  return (
    <section id="pricing" className="py-24 max-w-container">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Strategic Tiers</h2>
          <p className="text-text-muted text-lg">Engineering solutions scaled to your project depth.</p>
        </div>
        
        <div className="flex bg-surface-card border border-border-subtle p-1 rounded-xl">
          {(['USD', 'EUR', 'NGN'] as Currency[]).map((cur) => (
            <button
              key={cur}
              onClick={() => setCurrency(cur)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                currency === cur ? 'bg-white text-black' : 'text-text-muted hover:text-white'
              }`}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TIERS.map((tier, idx) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
              tier.popular 
                ? 'bg-surface-card border-white ring-1 ring-white shadow-[0_0_30px_rgba(255,255,255,0.05)]' 
                : 'bg-surface-card border-border-subtle hover:border-white/30'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1">
                <Zap className="w-3 h-3" /> Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-black">{formatPrice(tier.price)}</span>
                <span className="text-text-muted text-sm font-medium">/project</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed min-h-[40px]">
                {tier.description}
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-text-description">
                  <CheckCircle2 className="w-4 h-4 text-white/40" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => onSelectTier(tier.name)}
              className={`w-full py-3 rounded-lg font-bold text-sm transition-all duration-200 active:scale-[0.98] ${
                tier.popular
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-transparent border border-border-subtle text-white hover:bg-border-subtle'
              }`}
            >
              Select Tier
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
