import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: '◎',
      title: 'Smart Targets',
      description: 'NeoPixel LED rings illuminate random scoring zones, forcing reactive decision-making on every shot.',
    },
    {
      icon: '⚡',
      title: 'Real-Time Scoring',
      description: 'IR beam-break sensors detect each score instantly. The 7-segment display updates live.',
    },
    {
      icon: '◈',
      title: 'Auto Ball Passer',
      description: 'Wave your stick — the ultrasonic sensor triggers two flywheel motors to deliver the ball automatically.',
    },
    {
      icon: '∞',
      title: 'Solo Training',
      description: 'No teammates, no coach, no ice time required. Train on your own schedule, anywhere.',
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden" id="solution">
      {/* Background accent */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(0,229,255,0.04) 0%, transparent 60%)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: '#00E5FF' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00E5FF' }}>
              02 / The Solution
            </span>
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] font-black text-signal leading-none mb-6">
            THE ALL-IN-ONE<br />
            <span style={{ color: '#00E5FF' }}>HOCKEY TRAINER</span>
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed" style={{ color: 'rgba(248,250,252,0.7)' }}>
            TroubleShooter is a smart, interactive training goal that combines randomized LED target prompts, 
            automated ball delivery, and instant sensor feedback — everything a player needs to drill alone and improve fast.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="surface-card rounded-sm p-6 group hover:bg-opacity-80 transition-all duration-300"
              style={{ background: 'rgba(30,41,59,0.6)' }}
            >
              <div className="text-3xl mb-4" style={{ color: '#00E5FF' }}>{f.icon}</div>
              <h3 className="font-display text-xl font-bold text-signal mb-2 tracking-wide">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.6)' }}>{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Prototype framing — key messaging */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-sm p-10 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(30,41,59,0.8) 100%)',
            border: '1px solid rgba(0,229,255,0.25)',
          }}
        >
          <div className="absolute top-0 left-0 w-1 h-full" style={{ background: '#00E5FF' }} />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: '#00E5FF' }} />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00E5FF' }}>
                  Prototype → What's Next
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold text-signal mb-4">
                THIS IS WHAT WE BUILT.<br />HERE'S WHERE IT'S GOING.
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(248,250,252,0.7)' }}>
                We built a fully working mini hockey training system — smart targets, auto ball delivery, live scoring, 
                all in one. The prototype runs on mini hockey to keep it accessible and demonstrable. 
                From here, the exact same system moves to a full-size ice hockey goal.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: 'rgba(0,229,255,0.15)', border: '1px solid rgba(0,229,255,0.3)' }}>
                  <span className="text-xs" style={{ color: '#00E5FF' }}>→</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-signal tracking-wider">BUILT. TESTED. RUNNING.</p>
                  <p className="text-sm" style={{ color: 'rgba(248,250,252,0.6)' }}>Every system is live and validated — IR detection, LED targeting, auto ball delivery, and real-time scoring all run together seamlessly.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: 'rgba(0,229,255,0.15)', border: '1px solid rgba(0,229,255,0.3)' }}>
                  <span className="text-xs" style={{ color: '#00E5FF' }}>→</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-signal tracking-wider">NEXT: FULL-SIZE ICE HOCKEY</p>
                  <p className="text-sm" style={{ color: 'rgba(248,250,252,0.6)' }}>The same sensors, the same code, the same logic — scaled up to a regulation ice hockey goal. TroubleShooter goes from proof of concept to real-world training tool.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: 'rgba(0,229,255,0.15)', border: '1px solid rgba(0,229,255,0.3)' }}>
                  <span className="text-xs" style={{ color: '#00E5FF' }}>→</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-signal tracking-wider">THEN: THE PLATFORM</p>
                  <p className="text-sm" style={{ color: 'rgba(248,250,252,0.6)' }}>App-connected leaderboards, adaptive difficulty, and competitive drills — TroubleShooter becomes the standard training tool for hockey players at every level.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}