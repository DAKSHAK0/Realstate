"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { locations, propertyTypes } from '@/data/properties';

type SortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc';

interface FilterSidebarProps {
  mobile?: boolean;
}

export function FilterSidebar({ mobile = false }: FilterSidebarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const status = searchParams.get('status') || '';
  const sort = (searchParams.get('sort') as SortOption) || 'featured';

  const applyFilter = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (!value) params.delete(key);
      else params.set(key, value);
    });
    router.push(`/properties?${params.toString()}`);
  };

  const sidebar = (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-aurum-textMuted">
          Location
        </p>
        <select
          className="input bg-aurum-surface"
          defaultValue={searchParams.get('location') || ''}
          onChange={(e) => applyFilter({ location: e.target.value || null })}
        >
          <option value="">Any</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-aurum-textMuted">
          Property Type
        </p>
        <select
          className="input bg-aurum-surface"
          defaultValue={searchParams.get('type') || ''}
          onChange={(e) => applyFilter({ type: e.target.value || null })}
        >
          <option value="">Any</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-aurum-textMuted">
          Status
        </p>
        <div className="flex flex-wrap gap-2">
          {['Ready', 'New Launch', 'Under Construction'].map((label) => {
            const value = label.replace(' ', '-');
            const active = status === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() =>
                  applyFilter({ status: active ? null : (value as string) })
                }
                className={`px-3 py-1 rounded-full text-xs border ${active
                    ? 'border-aurum-accent bg-aurum-accent/10 text-aurum-accent'
                    : 'border-aurum-border text-aurum-textMuted'
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.22em] text-aurum-textMuted">
          Sort By
        </p>
        <select
          className="input bg-aurum-surface"
          value={sort}
          onChange={(e) => applyFilter({ sort: e.target.value })}
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>
      </div>
    </div>
  );

  if (!mobile) {
    return <aside className="card-surface p-5 space-y-6">{sidebar}</aside>;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-secondary w-full justify-center text-xs tracking-[0.22em] uppercase md:hidden"
      >
        Filters &amp; Sort
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-aurum-surface p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                  Refine Search
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 rounded-full border border-aurum-border flex items-center justify-center text-xs"
                  aria-label="Close filters"
                >
                  ✕
                </button>
              </div>
              {sidebar}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
