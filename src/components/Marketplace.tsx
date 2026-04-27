import { 
  Search, 
  Bell, 
  TrendingUp, 
  BarChart3, 
  Building2, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Linkedin,
  Twitter,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Pricing from './Pricing';
import StartProject from './StartProject';
import Process from './Process';

// --- Shared Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}: any) => {
  const base = "px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 active:scale-[0.98]";
  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "bg-transparent border border-border-subtle text-white hover:bg-border-subtle",
    ghost: "bg-transparent text-text-muted hover:text-white"
  };

  return (
    <button className={`${base} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- Layout Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-container flex justify-between items-center h-16">
        <div className="flex items-center gap-12">
          <span className="text-lg font-bold tracking-widest">ADVISORY</span>
          <nav className="hidden md:flex gap-8">
            <a href="#what-we-do" className="text-text-muted hover:text-white transition-colors text-sm font-medium">What we do</a>
            <a href="#pricing" className="text-text-muted hover:text-white transition-colors text-sm font-medium">Tiers</a>
            <a href="#contact" className="text-text-muted hover:text-white transition-colors text-sm font-medium">Initiate</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hidden md:block py-2 text-sm">
            Work with us
          </Button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-card border-b border-border-subtle overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#what-we-do" onClick={() => setIsOpen(false)} className="text-text-muted hover:text-white py-2 border-b border-border-subtle/50">What we do</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="text-text-muted hover:text-white py-2 border-b border-border-subtle/50">Tiers</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-text-muted hover:text-white py-2">Initiate</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="max-w-container relative z-10 text-center flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 border border-border-subtle bg-surface-card rounded-full px-4 py-1 mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[10px] font-black tracking-widest text-text-description uppercase">System Intelligence Active</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
      >
        FUNDRAISING<br />
        RE-ENGINEERED.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-text-description max-w-xl mb-12 leading-relaxed"
      >
        We clear the technical and narrative debt holding back your seed or Series A. Elite pitch design, stress-tests, and narrative positioning.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 text-lg">Start Project</Button>
        <Button onClick={() => document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' })} variant="secondary" className="px-10 py-4 text-lg">Our Process</Button>
      </motion.div>
    </div>

    {/* Background Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-50" />
  </section>
);

const Footer = () => (
  <footer className="border-t border-border-subtle py-20 bg-background">
    <div className="max-w-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <span className="text-xl font-bold tracking-widest block mb-8">ADVISORY</span>
          <p className="text-text-muted text-sm max-w-xs leading-relaxed">
            Premium engineering consultancy for founders who value speed, technical depth, and scalability.
          </p>
        </div>
        {[
          { 
            title: 'Protocol', 
            links: ['Discovery', 'Engineering', 'Deployment', 'Scale'] 
          },
          { 
            title: 'Company', 
            links: ['About Us', 'Careers', 'Privacy', 'Terms'] 
          },
          { 
            title: 'Status', 
            links: ['LinkedIn', 'X / Twitter', 'Network Status'] 
          }
        ].map(col => (
          <div key={col.title}>
            <h5 className="text-white text-sm font-black uppercase tracking-widest mb-8">{col.title}</h5>
            <ul className="space-y-4">
              {col.links.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-text-muted hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-text-muted font-black tracking-widest uppercase">
        <p>© 2024 ADVISORY Engineering. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Safety</a>
            <a href="#" className="hover:text-white transition-colors">Press</a>
          </div>
          <div className="flex items-center gap-2 bg-surface-card border border-border-subtle px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>Operational Active</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function Marketplace() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="space-y-4 px-4 overflow-hidden">
        <Process />
        <Pricing onSelectTier={handleSelectTier} />
        <StartProject selectedTier={selectedTier} />
      </div>
      <Footer />
    </div>
  );
}

import { Code2 } from 'lucide-react';
