"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
      className="section-padding"
    >
      <div className="container-max">
        <div className="card-surface relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(211,164,95,0.26),_transparent_60%)] pointer-events-none" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="badge-soft">Aurum Estates</p>
              <h2 className="h2">{title}</h2>
              <p className="body-large">{subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="btn-secondary justify-center text-xs tracking-[0.18em] uppercase"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


