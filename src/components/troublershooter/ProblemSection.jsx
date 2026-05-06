import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function ProblemCard({ number, title, description, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="surface-card rounded-sm p-8 h-full transition-all duration-300 group-hover:border-spark/30"
        style={{ borderLeft: '3px solid #00E5FF' }}>
        <div className="font-display text-6xl font-black mb-4 opacity-20" style={{ color: '#00E5FF' }}>
          {String(number).padStart(2, '0')}
        </div>
        <h3 className="font-display text-2xl font-bold text-signal mb-3 tracking-wide">{title}</h3>
        <p className="text-base leading-relaxed" style={{ color: 'rgba(248,250,252,0.65)' }}>{description}</p>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: '-100px' });

  const problems = [
    {
      title: 'Hard to Practice Solo',
      description: 'Simulating a goalie, randomized targets, and real-time pass-receive drills on your own is nearly impossible without purpose-built equipment.',
    },
    {
      title: 'Expensive & Inaccessible',
      description: 'Structured coaching and ice time are costly. Players who want focused, repetitive skill training have no affordable solo-practice solution.',
    },
    {
      title: 'No All-in-One System',
      description: 'Existing tools address isolated skills. No product on the market combines passing, shooting, reaction training, and live feedback into a single device.',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden" id="problem">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Section label */}
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: '#00E5FF' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00E5FF' }}>
              01 / The Problem
            </span>
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] font-black text-signal leading-none">
            WHY HOCKEY<br />
            <span style={{ color: '#00E5FF' }}>TRAINING IS BROKEN</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} number={i + 1} title={p.title} description={p.description} delay={i * 0.15} />
          ))}
        </div>

        {/* Divider line */}
        <div className="mt-24 h-px w-full opacity-20" style={{ background: 'linear-gradient(90deg, #00E5FF, transparent)' }} />
      </div>
    </section>
  );
}