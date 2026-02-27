import { motion } from 'framer-motion';

interface AgentCardProps {
  name: string;
  role: string;
  focus: string;
}

export function AgentCard({ name, role, focus }: AgentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="card-surface p-5 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-aurum-text">{name}</p>
          <p className="text-xs text-aurum-textMuted">{role}</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-aurum-accent/40 to-aurum-accentSoft/60" />
      </div>
      <p className="text-xs text-aurum-textMuted leading-relaxed">{focus}</p>
    </motion.div>
  );
}

