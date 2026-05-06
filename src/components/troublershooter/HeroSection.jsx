import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-void" id="hero">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Animated background orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)', transform: `translateY(${scrollY * 0.2}px)` }} />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)', transform: `translateY(${scrollY * -0.1}px)` }} />

      {/* Kinetic teal line across hero */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #00E5FF 30%, #00E5FF 70%, transparent 100%)', opacity: 0.4 }} />

      {/* Vertical accent line */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(180deg, transparent 0%, #00E5FF 30%, #00E5FF 70%, transparent 100%)', opacity: 0.3 }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-32">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px" style={{ background: '#00E5FF' }} />
          <span className="font-mono text-sm tracking-widest uppercase" style={{ color: '#00E5FF' }}>
            CIJE Innovation Day 2026
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="font-display text-[clamp(72px,14vw,180px)] font-black leading-none text-signal mb-2 tracking-tight">
            TROUBLE
          </h1>
          <h1 className="font-display text-[clamp(72px,14vw,180px)] font-black leading-none tracking-tight"
            style={{ color: '#00E5FF', textShadow: '0 0 60px rgba(0,229,255,0.4)' }}>
            SHOOTER
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-[clamp(18px,3vw,32px)] font-light tracking-[0.2em] uppercase mt-4 mb-12"
          style={{ color: 'rgba(248,250,252,0.6)' }}
        >
          Hockey Practice Made Simple
        </motion.p>

        {/* POC Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-3 mb-12 rounded-sm"
          style={{
            border: '1px solid rgba(0,229,255,0.4)',
            background: 'rgba(0,229,255,0.06)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: '#00E5FF' }} />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00E5FF' }}>
            Proof of Concept v1.0
          </span>
          <span className="text-xs font-mono" style={{ color: 'rgba(248,250,252,0.5)' }}>
            Mini Scale · Full Potential · Built for Ice
          </span>
        </motion.div>

        {/* Team + abstract */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-12 max-w-4xl"
        >
          <div>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(248,250,252,0.75)' }}>
              An interactive smart training system that guides players through shooting drills — improving accuracy, reaction time, and scoring instinct. No coach required.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(0,229,255,0.6)' }}>Team</p>
            {['Ariel Weissman', 'Dave Puro', 'Reuven Dubin'].map((name) => (
              <div key={name} className="flex items-center gap-3">
                <div className="w-4 h-px" style={{ background: '#00E5FF' }} />
                <span className="font-display text-lg tracking-wider text-signal">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-16 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(0,229,255,0.5)' }}>
            Scroll
          </span>
          <div className="w-px h-16 relative overflow-hidden" style={{ background: 'rgba(0,229,255,0.2)' }}>
            <motion.div
              className="absolute top-0 w-full"
              style={{ height: '40%', background: 'linear-gradient(180deg, #00E5FF, transparent)' }}
              animate={{ y: ['0%', '250%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Stats floating right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6"
      >
        {[
          { value: '5', label: 'Scoring Zones' },
          { value: '300+', label: 'Lines of Code' },
          { value: '2', label: 'Arduinos' },
          { value: '∞', label: 'Sessions' },
        ].map(({ value, label }) => (
          <div key={label} className="text-right">
            <div className="font-display text-3xl font-black glow-text-spark" style={{ color: '#00E5FF' }}>{value}</div>
            <div className="font-mono text-xs tracking-wider uppercase" style={{ color: 'rgba(248,250,252,0.4)' }}>{label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}