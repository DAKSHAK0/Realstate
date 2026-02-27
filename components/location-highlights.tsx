"use client";
import { motion } from 'framer-motion';
import type { LocationHighlight } from '@/data/properties';

interface LocationHighlightsProps {
  items: LocationHighlight[];
  city: string;
}

export function LocationHighlights({ items, city }: LocationHighlightsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr,1.4fr]">
      <div className="card-surface p-5 sm:p-6 space-y-4">
        <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
          Connected to What Matters
        </p>
        <h3 className="h3 text-lg">Location Highlights</h3>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between text-sm text-aurum-textMuted"
            >
              <span>{item.label}</span>
              <span className="text-xs text-aurum-textMuted/80">
                {item.distance} • {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card-surface relative overflow-hidden p-5 sm:p-6 flex flex-col gap-4"
      >
        <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
          Map Overview
        </p>
        <div className="relative flex-1 rounded-2xl border border-aurum-border/70 bg-[radial-gradient(circle_at_top,_rgba(211,164,95,0.2),_transparent_55%)]">
          <div className="absolute inset-6 rounded-2xl border border-dashed border-aurum-border/60" />
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-aurum-accent/70 bg-aurum-background/90 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-aurum-accent" />
          </div>
        </div>
        <p className="text-[11px] text-aurum-textMuted">
          The map representation is indicative and for experiential purposes. Exact
          coordinates, approach roads, and micro-market details are shared during a guided
          consultation for {city}.
        </p>
      </motion.div>
    </div>
  );
}


