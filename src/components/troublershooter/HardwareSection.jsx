import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const components = [
  {
    id: 'arduino',
    name: 'Arduino Uno R3',
    count: '2x',
    role: 'The Brain',
    description: 'Two separate Arduinos run the goal logic and passer logic independently. The modular architecture allows each subsystem to be updated without impacting the other.',
    code: `void setup() {
  Serial.begin(9600);
  matrix.begin(0x70);
  randomSeed(analogRead(A0));
  hole0.init(); hole1.init();
  hole2.init(); hole3.init();
  hole4.init();
}`,
    category: 'MICROCONTROLLER',
  },
  {
    id: 'ir',
    name: 'IR Beam-Break Sensors',
    count: '5x',
    role: 'The Eyes',
    description: 'One sensor per scoring zone. When a ball passes through the tube, it breaks the IR beam. The active sensor pin is dynamically assigned based on which hole is lit.',
    code: `void loop() {
  scored = !digitalRead(sensorPin);
  if (currentState == RESET) {
    reset();
  } else if (currentState == RUN) {
    run();
  }
  delay(50);
}`,
    category: 'INPUT SENSOR',
  },
  {
    id: 'neopixel',
    name: 'Adafruit NeoPixel Strips',
    count: '5x',
    role: 'The Signal',
    description: '40 pixels per strip, one strip per scoring zone. Red = active target. Green = scored. Off = inactive. The visual feedback is instant and unambiguous.',
    code: `void run() {
  if (scored) {
    updateLEDs(chosenHole, 
               0, 255, 0); // Green
    score++;
    for (int i=0; i<3; i++) {
      blinkText(500);
    }
  } else {
    updateLEDs(chosenHole, 
               255, 0, 0); // Red
  }
}`,
    category: 'OUTPUT / VISUAL',
  },
  {
    id: 'segment',
    name: '7-Segment Display',
    count: '1x',
    role: 'The Scoreboard',
    description: 'Live score display using the Adafruit LED Backpack. Blinks "GOAL" using raw digit patterns on a score, then shows the updated count.',
    code: `void blinkText(int delayInterval) {
  matrix.writeDigitRaw(0, 0x3D); // G
  matrix.writeDigitRaw(1, 0x3F); // O
  matrix.writeDigitRaw(3, 0x77); // A
  matrix.writeDigitRaw(4, 0x38); // L
  matrix.writeDisplay();
  delay(delayInterval);
  matrix.clear();
  matrix.writeDisplay();
}`,
    category: 'OUTPUT / DISPLAY',
  },
  {
    id: 'ultrasonic',
    name: 'HC-SR04 Ultrasonic Sensor',
    count: '1x',
    role: 'The Trigger',
    description: 'Mounted on the ball passer. Detects stick proximity within 15 inches to trigger ball delivery. Prevents accidental double-dispense with a triggered state flag.',
    code: `void findDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, 
                    HIGH, 30000);
  distance = (duration*0.00531)/2;
}`,
    category: 'INPUT SENSOR',
  },
  {
    id: 'flywheel',
    name: 'Flywheel Motors + Servo',
    count: '2x + 2x',
    role: 'The Passer',
    description: 'Two DC motors spin at 255 PWM to propel the ball. Two servos (top/bottom gate) release balls one at a time, preventing jams. Motor spin-up is gradual to protect hardware.',
    code: `void sendball() {
  Bottomservo.write(70);
  delay(500);
  Bottomservo.write(0);
  delay(100);
  Topservo.write(70);
  delay(500);
  Topservo.write(0);
}`,
    category: 'OUTPUT / MECHANICAL',
  },
];

export default function HardwareSection() {
  const [activeComponent, setActiveComponent] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const active = components.find(c => c.id === activeComponent);

  return (
    <section className="relative py-32 overflow-hidden" id="hardware">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(0,229,255,0.03) 0%, transparent 60%)' }} />

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
              04 / Engineering Build
            </span>
          </div>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] font-black text-signal leading-none">
            HARDWARE<br />
            <span style={{ color: '#00E5FF' }}>ARCHITECTURE</span>
          </h2>
          <p className="mt-4 text-lg max-w-2xl" style={{ color: 'rgba(248,250,252,0.6)' }}>
            Click any component to reveal the exact code logic driving it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Component grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {components.map((comp, i) => (
              <motion.button
                key={comp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setActiveComponent(activeComponent === comp.id ? null : comp.id)}
                className="text-left surface-card rounded-sm p-5 transition-all duration-300 group"
                style={{
                  border: activeComponent === comp.id
                    ? '1px solid #00E5FF'
                    : '1px solid rgba(0,229,255,0.12)',
                  background: activeComponent === comp.id
                    ? 'rgba(0,229,255,0.08)'
                    : 'rgba(30,41,59,0.6)',
                  boxShadow: activeComponent === comp.id ? '0 0 20px rgba(0,229,255,0.2)' : 'none',
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-xs tracking-wider"
                    style={{ color: activeComponent === comp.id ? '#00E5FF' : 'rgba(0,229,255,0.5)' }}>
                    {comp.category}
                  </span>
                  <span className="font-display text-xl font-black"
                    style={{ color: activeComponent === comp.id ? '#00E5FF' : 'rgba(0,229,255,0.3)' }}>
                    {comp.count}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-signal mb-1 leading-tight">{comp.name}</h3>
                <p className="font-mono text-xs" style={{ color: 'rgba(0,229,255,0.6)' }}>{comp.role}</p>
              </motion.button>
            ))}
          </div>

          {/* Code / detail pane */}
          <div className="lg:sticky lg:top-8 h-fit">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-sm overflow-hidden"
                style={{ border: '1px solid rgba(0,229,255,0.25)', background: 'rgba(6,9,18,0.95)' }}
              >
                {/* Header */}
                <div className="px-6 py-4 flex items-center justify-between"
                  style={{ borderBottom: '1px solid rgba(0,229,255,0.15)', background: 'rgba(0,229,255,0.06)' }}>
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: '#00E5FF' }}>
                      {active.category}
                    </p>
                    <h3 className="font-display text-xl font-bold text-signal">{active.name}</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
                  </div>
                </div>
                {/* Description */}
                <div className="px-6 py-4" style={{ borderBottom: '1px solid rgba(0,229,255,0.08)' }}>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(248,250,252,0.75)' }}>
                    {active.description}
                  </p>
                </div>
                {/* Code */}
                <div className="px-6 py-4">
                  <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(0,229,255,0.4)' }}>
                    Arduino C++ — Core Logic
                  </p>
                  <pre className="font-mono text-sm leading-relaxed overflow-x-auto"
                    style={{ color: '#A8B9CC' }}>
                    {active.code.split('\n').map((line, i) => {
                      const highlighted = line
                        .replace(/(void|if|else|for|int|bool|const|return|delay|digitalRead|digitalWrite|analogWrite|digitalWrite|setup|loop)/g,
                          '<span style="color:#00E5FF">$1</span>')
                        .replace(/(\/\/.*)/g, '<span style="color:#546E7A;font-style:italic">$1</span>')
                        .replace(/(\d+)/g, '<span style="color:#F78C6C">$1</span>');
                      return (
                        <div key={i} className="flex">
                          <span className="select-none mr-4 text-xs w-5 text-right flex-shrink-0"
                            style={{ color: 'rgba(84,110,122,0.5)', lineHeight: '1.6' }}>
                            {i + 1}
                          </span>
                          <span dangerouslySetInnerHTML={{ __html: highlighted }} />
                        </div>
                      );
                    })}
                  </pre>
                </div>
              </motion.div>
            ) : (
              <div className="rounded-sm p-10 text-center h-64 flex flex-col items-center justify-center"
                style={{ border: '1px dashed rgba(0,229,255,0.2)', background: 'rgba(6,9,18,0.5)' }}>
                <p className="font-mono text-sm mb-2" style={{ color: 'rgba(0,229,255,0.4)' }}>
                  SELECT A COMPONENT
                </p>
                <p className="text-sm" style={{ color: 'rgba(248,250,252,0.3)' }}>
                  Click any hardware card to view its code logic
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Parts list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 surface-card rounded-sm p-8"
        >
          <h3 className="font-display text-2xl font-bold text-signal mb-6 tracking-wide">
            FULL PARTS LIST — GOAL SYSTEM
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              '2x Arduino Uno R3*',
              '5x Adafruit NeoPixel LED Strips (40px)*',
              '5x IR Beam-Break Sensors*',
              '2x Toggle Switches*',
              '1x Adafruit 7-Segment Display (I²C)',
              '1x Shooter Tutor Hockey Net & Cover',
              '1x LCD Display*',
              '2x DC Flywheel Motors*',
              '1x L298N Motor Driver*',
              '2x Servo Motors*',
              '1x HC-SR04 Ultrasonic Sensor*',
              '1x External AA Battery Pack (NeoPixel power)',
            ].map((part) => (
              <div key={part} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00E5FF' }} />
                <span className="font-mono text-sm" style={{ color: 'rgba(248,250,252,0.7)' }}>{part}</span>
              </div>
            ))}
          </div>
          <p className="font-mono text-xs mt-4" style={{ color: 'rgba(0,229,255,0.4)' }}>
            * Sourced from CIJE kit — $0 cost
          </p>
        </motion.div>
      </div>
    </section>
  );
}