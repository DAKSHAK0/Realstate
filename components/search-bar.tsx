'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { locations, propertyTypes } from '@/data/properties';

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (formData: FormData) => {
    const location = formData.get('location')?.toString() || '';
    const type = formData.get('type')?.toString() || '';
    const minBudget = formData.get('minBudget')?.toString() || '';
    const maxBudget = formData.get('maxBudget')?.toString() || '';

    const params = new URLSearchParams(searchParams.toString());
    if (location) params.set('location', location);
    else params.delete('location');

    if (type) params.set('type', type);
    else params.delete('type');

    if (minBudget) params.set('minBudget', minBudget);
    else params.delete('minBudget');

    if (maxBudget) params.set('maxBudget', maxBudget);
    else params.delete('maxBudget');

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <form
      action={handleSubmit}
      className="card-surface flex flex-col gap-4 border border-aurum-border/80 p-4 sm:flex-row sm:items-end sm:gap-6 sm:p-5"
    >
      <div className="flex-1 space-y-1">
        <label className="text-[11px] uppercase tracking-[0.22em] text-aurum-textMuted">
          Location
        </label>
        <select
          name="location"
          className="input bg-aurum-surface"
          defaultValue={searchParams.get('location') || ''}
        >
          <option value="">Any Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1 space-y-1">
        <label className="text-[11px] uppercase tracking-[0.22em] text-aurum-textMuted">
          Property Type
        </label>
        <select
          name="type"
          className="input bg-aurum-surface"
          defaultValue={searchParams.get('type') || ''}
        >
          <option value="">Any Type</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1 space-y-1">
        <label className="text-[11px] uppercase tracking-[0.22em] text-aurum-textMuted">
          Budget Range (₹ Cr)
        </label>
        <div className="flex gap-2">
          <input
            name="minBudget"
            type="number"
            step="0.1"
            min="0"
            placeholder="Min"
            className="input"
            defaultValue={searchParams.get('minBudget') || ''}
          />
          <input
            name="maxBudget"
            type="number"
            step="0.1"
            min="0"
            placeholder="Max"
            className="input"
            defaultValue={searchParams.get('maxBudget') || ''}
          />
        </div>
      </div>
      <div className="sm:w-auto w-full">
        <button
          type="submit"
          className="btn-primary w-full justify-center text-xs tracking-[0.22em] uppercase"
        >
          Search
        </button>
      </div>
    </form>
  );
}

