import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    phase: 'INPUT',
    title: 'Target Activates',
    description: 'A random NeoPixel LED ring illuminates one of 5 scoring zones. The system ensures the same zone never repeats consecutively.',
    detail: 'randHole = random(0, 5) — no repeat logic enforced',
    color: '#00E5FF',
  },
  {
    number: '02',
    phase: 'TRIGGER',
    title: 'Ball Delivered',
    description: 'The player waves their stick in front of the ultrasonic distance sensor. When proximity is detected (<15 inches), the servo mechanism releases a ball.',
    detail: 'HC-SR04 ultrasonic → servo trigger at <15"',
    color: '#00E5FF',
  },
  {
    number: '03',
    phase: 'EXECUTION',
    title: 'Player Shoots',
    description: 'The player aims at the illuminated zone and shoots. The system tracks the active hole and monitors only the corresponding IR sensor.',
    detail: 'Active sensorPin = IR[chosenHole]',
    color: '#00E5FF',
  },
  {
    number: '04',
    phase: 'DETECTION',
    title: 'Hit Confirmed',
    description: 'The IR beam-break sensor detects the ball passing through the correct tube. LED flashes green for a score, red if missed.',
    detail: 'scored = !digitalRead(sensorPin)',
    color: '#00E5FF',
  },
  {
    number: '05',
    phase: 'FEEDBACK',
    title: 'Score Updates',
    description: 'On a successful hit, the score increments, "GOAL" blinks on the 7-segment display, and the system resets for the next target.',
    detail: 'blinkText(500) × 3 → matrix.print(score)',
    color: '#00E5FF',
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 grid-overlay opacity-20" />

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
              03 / Game Flow
            </span>
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] font-black text-signal leading-none">
            THE TACTICAL<br />
            <span style={{ color: '#00E5FF' }}>LOOP</span>
          </h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent, #00E5FF 10%, #00E5FF 90%, transparent)' }} />

          <div className="space-y-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-10 items-start group"
              >
                {/* Timeline node */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 group-hover:scale-150 transition-transform duration-300"
                    style={{ borderColor: '#00E5FF', background: '#060912', boxShadow: '0 0 10px rgba(0,229,255,0.4)' }} />
                </div>

                {/* Step content */}
                <div className="surface-card rounded-sm p-6 group-hover:border-spark/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(0,229,255,0.5)' }}>
                      {step.phase}
                    </span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(0,229,255,0.15)' }} />
                    <span className="font-display text-2xl font-black opacity-20" style={{ color: '#00E5FF' }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-signal mb-2 tracking-wide">{step.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(248,250,252,0.65)' }}>
                    {step.description}
                  </p>
                </div>

                {/* Code detail */}
                <div className="surface-card rounded-sm p-4 flex items-center"
                  style={{ background: 'rgba(6,9,18,0.8)' }}>
                  <code className="font-mono text-sm" style={{ color: '#00E5FF' }}>
                    {step.detail}
                  </code>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}