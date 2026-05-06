import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FooterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <footer ref={ref} className="relative py-24 overflow-hidden border-t"
      style={{ borderColor: 'rgba(0,229,255,0.1)' }}>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(0,229,255,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-6xl font-black mb-2"
              style={{ color: '#00E5FF', textShadow: '0 0 40px rgba(0,229,255,0.3)' }}>
              TROUBLE<br />SHOOTER
            </h2>
            <p className="font-display text-xl text-signal opacity-50 tracking-[0.2em] uppercase">
              Hockey Practice Made Simple
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(0,229,255,0.5)' }}>
                Team
              </p>
              <div className="space-y-2">
                {['Ariel Weissman', 'Dave Puro', 'Reuven Dubin'].map(name => (
                  <p key={name} className="font-display text-2xl font-bold text-signal tracking-wider">{name}</p>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(0,229,255,0.4)' }}>
                Presented At
              </p>
              <p className="font-display text-lg text-signal opacity-70">CIJE Innovation Day 2026</p>
              <p className="font-mono text-xs mt-1" style={{ color: 'rgba(0,229,255,0.4)' }}>
                Engineering for Entertainment & the Arts
              </p>
            </div>
          </motion.div>
        </div>

        <div className="h-px w-full mb-8" style={{ background: 'rgba(0,229,255,0.1)' }} />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs" style={{ color: 'rgba(248,250,252,0.3)' }}>
            © 2026 TroubleShooter. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: '#00E5FF' }} />
            <span className="font-mono text-xs tracking-wider" style={{ color: 'rgba(0,229,255,0.5)' }}>
              POC v1.0 — Mini Scale · Full Ice Vision
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}