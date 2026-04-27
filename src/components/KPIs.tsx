import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell, 
  PieChart, 
  Pie, 
  LineChart, 
  Line 
} from 'recharts';
import { TrendingUp, Users, Target } from 'lucide-react';

const BAR_DATA = [
  { name: 'Jan', leads: 400 },
  { name: 'Feb', leads: 600 },
  { name: 'Mar', leads: 800 },
  { name: 'Apr', leads: 1200 },
  { name: 'May', leads: 1550 },
  { name: 'Jun', leads: 2100 },
];

const PIE_DATA = [
  { name: 'Blueprint', value: 400 },
  { name: 'Core MVP', value: 300 },
  { name: 'Enterprise', value: 200 },
  { name: 'Prototype', value: 100 },
];

const COLORS = ['#FFFFFF', '#71717A', '#3F3F46', '#27272A'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-card border border-border-subtle p-3 rounded-lg shadow-xl">
        <p className="text-xs font-black uppercase tracking-widest text-text-muted mb-1">{payload[0].payload.name}</p>
        <p className="text-sm font-bold text-white">{payload[0].value} {payload[0].dataKey === 'leads' ? 'Leads' : ''}</p>
      </div>
    );
  }
  return null;
};

export default function KPIs() {
  return (
    <section id="kpis" className="py-24 max-w-container px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tighter mb-4">Marketplace Performance</h2>
        <p className="text-text-description text-lg max-w-2xl mx-auto">
          Transparency in transmission. Monitoring the growth and efficacy of our elite consulting network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Users, label: 'Monthly Active Leads', val: '2,100+', trend: '+28%' },
          { icon: Target, label: 'Avg. Conversion Rate', val: '14.2%', trend: '+4.1%' },
          { icon: TrendingUp, label: 'Success Rate', val: '98.8%', trend: '+0.5%' },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-surface-card border border-border-subtle hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{stat.label}</span>
            </div>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-black tracking-tighter">{stat.val}</span>
              <span className="text-xs font-bold text-emerald-500 mb-1">{stat.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Leads Growth Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-surface-card border border-border-subtle overflow-hidden"
        >
          <h3 className="text-xl font-bold mb-8">Lead Acquistion Velocity</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BAR_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#71717A" 
                  fontSize={10} 
                  fontWeight={700}
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                <Bar dataKey="leads" radius={[4, 4, 0, 0]}>
                  {BAR_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === BAR_DATA.length - 1 ? '#FFFFFF' : '#3F3F46'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Popular Tiers Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-surface-card border border-border-subtle overflow-hidden"
        >
          <h3 className="text-xl font-bold mb-8">Service Tier Distribution</h3>
          <div className="h-[300px] w-full flex items-center">
            <div className="flex-1 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PIE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {PIE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-4">
              {PIE_DATA.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">{entry.name}</p>
                    <p className="text-sm font-bold text-white">{entry.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
