"use client";
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <motion.figure
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="card-surface p-6 flex flex-col gap-4"
    >
      <p className="text-sm sm:text-base text-aurum-text leading-relaxed">
        “{quote}”
      </p>
      <figcaption className="mt-2">
        <p className="text-sm font-medium text-aurum-text">{name}</p>
        <p className="text-xs text-aurum-textMuted">{role}</p>
      </figcaption>
    </motion.figure>
  );
}


