import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Future', href: '#future' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(6,9,18,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,229,255,0.1)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
          <a href="#hero" onClick={e => handleNav(e, '#hero')}
            className="font-display text-xl font-black tracking-wider"
            style={{ color: '#00E5FF', textShadow: '0 0 20px rgba(0,229,255,0.4)' }}>
            TS
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => handleNav(e, item.href)}
                className="font-mono text-xs tracking-widest uppercase transition-colors duration-200 hover:text-spark"
                style={{ color: 'rgba(248,250,252,0.5)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="font-mono text-xs tracking-wider" style={{ color: 'rgba(0,229,255,0.5)' }}>
            CIJE 2026
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-px w-full" style={{ background: 'rgba(0,229,255,0.1)' }}>
          <div className="h-full transition-all duration-100"
            style={{ width: `${scrollProgress}%`, background: '#00E5FF', boxShadow: '0 0 8px rgba(0,229,255,0.6)' }} />
        </div>
      </motion.nav>

      {/* Right-side vertical progress ruler */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-1">
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            onClick={e => handleNav(e, item.href)}
            className="group flex items-center gap-2"
          >
            <div className="w-px h-6 transition-all duration-200 group-hover:bg-spark"
              style={{ background: 'rgba(0,229,255,0.2)' }} />
            <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity tracking-wider"
              style={{ color: '#00E5FF', fontSize: '10px' }}>
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}