import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MarketSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden" id="market">
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: '#00E5FF' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00E5FF' }}>
              06 / Market Positioning
            </span>
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] font-black text-signal leading-none">
            AFFORDABLE.<br />
            <span style={{ color: '#00E5FF' }}>ACCESSIBLE.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Pricing cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-sm p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(0,229,255,0.12) 0%, rgba(0,229,255,0.04) 100%)',
              border: '1px solid rgba(0,229,255,0.4)',
              boxShadow: '0 0 40px rgba(0,229,255,0.1)',
            }}
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#00E5FF' }}>
              Complete Package
            </p>
            <div className="font-display text-8xl font-black" style={{ color: '#00E5FF' }}>$70</div>
            <p className="text-lg mt-2 mb-6" style={{ color: 'rgba(248,250,252,0.7)' }}>Hockey set included</p>
            <div className="space-y-2">
              {['One-time purchase', 'No subscription fees', 'Indoor & outdoor use', 'All ages & skill levels'].map(f => (
                <div key={f} className="flex items-center gap-2 justify-center">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00E5FF' }} />
                  <span className="font-mono text-sm" style={{ color: 'rgba(248,250,252,0.7)' }}>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-sm p-10 text-center surface-card"
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(0,229,255,0.6)' }}>
              Add-On Only
            </p>
            <div className="font-display text-8xl font-black text-signal">$40</div>
            <p className="text-lg mt-2 mb-6" style={{ color: 'rgba(248,250,252,0.5)' }}>Pair with existing set</p>
            <div className="space-y-2">
              {['Electronics kit only', 'Compatible with standard sets', 'Quick DIY install', 'Same full functionality'].map(f => (
                <div key={f} className="flex items-center gap-2 justify-center">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(0,229,255,0.5)' }} />
                  <span className="font-mono text-sm" style={{ color: 'rgba(248,250,252,0.5)' }}>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '100%', label: 'System Reliability', sub: 'All skill levels' },
            { value: 'Solo', label: 'Training Mode', sub: 'No team needed' },
            { value: 'All Ages', label: 'Target Audience', sub: 'Beginner to pro' },
            { value: '$0', label: 'Recurring Cost', sub: 'One-time only' },
          ].map(({ value, label, sub }) => (
            <div key={label} className="surface-card rounded-sm p-6 text-center">
              <div className="font-display text-4xl font-black mb-1 glow-text-spark" style={{ color: '#00E5FF' }}>
                {value}
              </div>
              <p className="font-display text-sm font-bold text-signal tracking-wider uppercase">{label}</p>
              <p className="font-mono text-xs mt-1" style={{ color: 'rgba(248,250,252,0.4)' }}>{sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}