"use client";
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left'
}: SectionHeaderProps) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className={`flex flex-col gap-3 ${alignment} max-w-2xl`}
    >
      {eyebrow && <div className="badge-soft">{eyebrow}</div>}
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="body-large">{subtitle}</p>}
    </motion.div>
  );
}


