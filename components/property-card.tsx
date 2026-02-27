import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'featured';
}

export function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const href = `/properties/${property.slug}`;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
      className="card-surface overflow-hidden flex flex-col"
    >
      <Link href={href} className="group relative block overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image
            src={property.heroImage}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 400px, 100vw"
          />
          {property.badge && (
            <div className="absolute left-4 top-4 badge-soft backdrop-blur">
              {property.badge}
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.22em] text-aurum-textMuted">
            {property.location}
          </p>
          <h3 className="h3 text-base sm:text-lg">{property.name}</h3>
          <p className="text-xs text-aurum-textMuted">
            From <span className="text-aurum-accent">{property.startingPrice}</span>
          </p>
        </div>

        <p className="text-sm text-aurum-textMuted line-clamp-2">
          {property.headline}
        </p>

        <div className="flex flex-wrap gap-3 text-xs text-aurum-textMuted">
          <span className="pill border-aurum-border/60 bg-transparent">
            {property.bedrooms} Bed • {property.bathrooms} Bath
          </span>
          <span className="pill border-aurum-border/60 bg-transparent">
            {property.area}
          </span>
          <span className="pill border-aurum-border/60 bg-transparent">
            {property.status}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <Link
            href={href}
            className="text-xs tracking-[0.2em] uppercase text-aurum-text hover:text-aurum-accent transition"
          >
            View Details
          </Link>
          {variant === 'featured' && (
            <span className="inline-flex items-center gap-2 rounded-full bg-aurum-accent/10 px-3 py-1 text-[11px] text-aurum-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-aurum-accent" />
              Featured Release
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

