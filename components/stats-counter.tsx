'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface StatsCounterProps {
  label: string;
  suffix?: string;
  value: number;
  decimals?: number;
}

export function StatsCounter({ label, suffix = '+', value, decimals = 0 }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.4,
        ease: 'easeOut',
        onUpdate(v) {
          setDisplay(Number(v.toFixed(decimals)));
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, decimals]);

  return (
    <div ref={ref} className="space-y-1">
      <motion.p className="text-2xl sm:text-3xl font-display text-aurum-accent">
        {display}
        {suffix}
      </motion.p>
      <p className="text-xs text-aurum-textMuted uppercase tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}
