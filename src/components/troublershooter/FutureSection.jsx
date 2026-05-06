import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    phase: 'Current',
    label: 'POC v1.0',
    title: 'Mini Scale Proof of Concept',
    description: 'Working prototype on a mini hockey set. All core systems validated: IR detection, LED targeting, auto ball delivery, live scoring. Every subsystem is designed to scale.',
    status: 'COMPLETE',
    statusColor: '#00E5FF',
    items: ['5-zone LED targeting', 'IR beam detection', 'Auto ball passer', 'Live 7-segment scoreboard'],
  },
  {
    phase: 'Phase 2',
    label: 'Full-Scale Ice Hockey',
    title: 'Rink-Size Installation',
    description: 'Direct scale-up of the POC to a regulation-size hockey goal. Same sensor architecture, expanded frame, adapted for real pucks and ice rink conditions.',
    status: 'PLANNED',
    statusColor: 'rgba(0,229,255,0.5)',
    items: ['Full NHL-spec goal dimensions', 'Real puck compatibility', 'Rink-grade hardware housing', 'Wireless score transmission'],
  },
  {
    phase: 'Phase 3',
    label: 'Competitive Platform',
    title: 'App + Leaderboard',
    description: 'Cloud-connected scoring with competitive app. Head-to-head challenges, personal bests, and shareable drill sessions.',
    status: 'ROADMAP',
    statusColor: 'rgba(0,229,255,0.3)',
    items: ['Cloud-synced leaderboards', 'Head-to-head challenges', 'Drill session recording', 'Progress analytics'],
  },
  {
    phase: 'Phase 4',
    label: 'Adaptive Intelligence',
    title: 'Dynamic Difficulty Engine',
    description: 'The system learns the player. Target timing, frequency, and zone bias adapt automatically based on historical accuracy data.',
    status: 'VISION',
    statusColor: 'rgba(0,229,255,0.2)',
    items: ['ML-driven difficulty', 'Zone bias calibration', 'Response time tracking', 'Player profiling'],
  },
];

export default function FutureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden" id="future"
      style={{
        background: 'linear-gradient(180deg, #060912 0%, #071018 50%, #060912 100%)',
      }}>
      {/* Pre-dawn gradient overlay */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.06) 0%, transparent 50%)' }} />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: '#00E5FF' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00E5FF' }}>
              05 / Evolutionary Horizon
            </span>
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] font-black text-signal leading-none">
            BUILT TO<br />
            <span style={{ color: '#00E5FF' }}>GROW</span>
          </h2>
          <p className="mt-4 text-xl max-w-2xl leading-relaxed" style={{ color: 'rgba(248,250,252,0.6)' }}>
            The mini prototype is step one. The technology scales seamlessly — from tabletop to full ice rink, 
            from solo drill to competitive platform.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, #00E5FF, rgba(0,229,255,0.1))' }} />

          <div className="grid lg:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center mb-8">
                  <div className="w-6 h-6 rounded-full border-2 relative z-10"
                    style={{
                      borderColor: phase.statusColor,
                      background: i === 0 ? phase.statusColor : '#060912',
                      boxShadow: i === 0 ? `0 0 15px ${phase.statusColor}` : 'none',
                    }} />
                </div>

                <div className="surface-card rounded-sm p-6 h-full"
                  style={{
                    borderTop: `2px solid ${phase.statusColor}`,
                    background: i === 0 ? 'rgba(0,229,255,0.05)' : 'rgba(30,41,59,0.5)',
                  }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs tracking-widest uppercase"
                      style={{ color: phase.statusColor }}>
                      {phase.phase}
                    </span>
                    <span className="font-mono text-xs px-2 py-1 rounded-sm"
                      style={{
                        color: phase.statusColor,
                        background: `${phase.statusColor}15`,
                        border: `1px solid ${phase.statusColor}30`,
                      }}>
                      {phase.status}
                    </span>
                  </div>

                  <p className="font-mono text-xs mb-2" style={{ color: 'rgba(248,250,252,0.4)' }}>
                    {phase.label}
                  </p>
                  <h3 className="font-display text-xl font-bold text-signal mb-3 tracking-wide leading-tight">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(248,250,252,0.6)' }}>
                    {phase.description}
                  </p>

                  <div className="space-y-2">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: phase.statusColor }} />
                        <span className="font-mono text-xs" style={{ color: 'rgba(248,250,252,0.5)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}