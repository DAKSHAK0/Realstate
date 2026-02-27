import { motion } from 'framer-motion';
import type { FloorPlan } from '@/data/properties';

interface FloorPlanPreviewProps {
  plans: FloorPlan[];
}

export function FloorPlanPreview({ plans }: FloorPlanPreviewProps) {
  return (
    <div className="grid-auto-fit">
      {plans.map((plan) => (
        <motion.div
          key={plan.id}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
          className="card-surface p-5 flex flex-col gap-3"
        >
          <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
            Floor Plan
          </p>
          <h3 className="h3 text-base">{plan.label}</h3>
          <p className="text-sm text-aurum-textMuted">
            {plan.bedrooms} bedrooms • {plan.bathrooms} bathrooms
          </p>
          <p className="text-sm text-aurum-accent">{plan.area}</p>
          <div className="mt-3 h-24 rounded-2xl border border-dashed border-aurum-border/80 bg-[radial-gradient(circle_at_top,_rgba(211,164,95,0.15),_transparent_55%)]" />
          <p className="text-[11px] text-aurum-textMuted">
            Indicative layout for representation. Detailed drawings and measurements are
            shared during consultation.
          </p>
        </motion.div>
      ))}
    </div>
  );
}

