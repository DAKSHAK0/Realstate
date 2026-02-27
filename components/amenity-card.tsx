import { motion } from 'framer-motion';

interface AmenityCardProps {
  label: string;
}

export function AmenityCard({ label }: AmenityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="card-surface px-4 py-3 flex items-center justify-between gap-3"
    >
      <p className="text-sm text-aurum-text">{label}</p>
      <span className="h-7 w-7 rounded-full border border-aurum-border flex items-center justify-center text-[10px] text-aurum-textMuted">
        ✓
      </span>
    </motion.div>
  );
}

