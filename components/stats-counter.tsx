'use client';

import { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface StatsCounterProps {
  label: string;
  suffix?: string;
  value: number;
  decimals?: number;
}

export function StatsCounter({ label, suffix = '+', value, decimals = 0 }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const controls = useAnimation();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    controls.start({ count: value, transition: { duration: 1.4, ease: 'easeOut' } });
  }, [inView, controls, value]);

  useEffect(() => {
    controls.stop();
    controls.set({ count: 0 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    controls.start(({ count }: any) => {
      setDisplay(Number(count?.toFixed?.(decimals) ?? value));
    });
  }, [controls, value, decimals]);

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

