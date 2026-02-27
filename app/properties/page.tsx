import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { properties } from '@/data/properties';
import { SectionHeader } from '@/components/section-header';
import { PropertyCard } from '@/components/property-card';
import { SearchBar } from '@/components/search-bar';
import { FilterSidebar } from '@/components/filter-sidebar';

export const metadata: Metadata = {
  title: 'Luxury Properties & Curated Listings',
  description:
    'Browse a curated selection of luxury apartments, villas and penthouses across prime neighbourhoods with Aurum Estates.',
  alternates: {
    canonical: '/properties'
  }
};

function applyFilters(searchParams: { [key: string]: string | string[] | undefined }) {
  let filtered = [...properties];

  const location = typeof searchParams.location === 'string' ? searchParams.location : '';
  const type = typeof searchParams.type === 'string' ? searchParams.type : '';
  const status = typeof searchParams.status === 'string' ? searchParams.status : '';
  const sort = typeof searchParams.sort === 'string' ? searchParams.sort : 'featured';

  if (location) {
    filtered = filtered.filter((p) => p.city === location);
  }
  if (type) {
    filtered = filtered.filter((p) => p.type === type);
  }
  if (status) {
    const mapping: Record<string, string> = {
      Ready: 'Ready',
      'New-Launch': 'New Launch',
      'Under-Construction': 'Under Construction'
    };
    const mapped = mapping[status] || status;
    filtered = filtered.filter((p) => p.status === mapped);
  }

  if (sort === 'price-asc' || sort === 'price-desc') {
    const parsePrice = (price: string) => {
      const match = price.replace(/[^0-9.]/g, '');
      return Number(match || '0');
    };
    filtered.sort((a, b) => {
      const av = parsePrice(a.startingPrice);
      const bv = parsePrice(b.startingPrice);
      return sort === 'price-asc' ? av - bv : bv - av;
    });
  } else if (sort === 'newest') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
  }

  return filtered;
}

interface PropertiesPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const filtered = applyFilters(searchParams);

  if (!filtered) notFound();

  const featuredCollection = filtered.filter((p) => p.featured);

  return (
    <>
      <section className="section-padding pt-10">
        <div className="container-max space-y-8">
          <SectionHeader
            eyebrow="Properties"
            title="A curated view of luxury and investment-grade homes."
            subtitle="Use filters to align by location, typology and budget. Each listing is presented with clarity so you can shortlist with confidence."
          />
          <SearchBar />
        </div>
      </section>

      <section className="section-padding pt-4">
        <div className="container-max grid gap-8 lg:grid-cols-[0.9fr,2fr]">
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>
          <div className="space-y-8">
            <div className="lg:hidden">
              <FilterSidebar mobile />
            </div>
            <div className="flex items-center justify-between text-xs text-aurum-textMuted">
              <p>
                Showing <span className="text-aurum-text">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'residence' : 'residences'} aligned with your
                filters.
              </p>
            </div>
            <div className="grid-auto-fit">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>

            {featuredCollection.length > 0 && (
              <div className="space-y-4 pt-4">
                <h3 className="text-sm uppercase tracking-[0.2em] text-aurum-textMuted">
                  Signature Edit
                </h3>
                <div className="card-surface p-5 text-sm text-aurum-textMuted">
                  A focused set of residences that represent the design and delivery
                  standards Aurum Estates seeks out—ideal for buyers who prefer clarity over
                  breadth.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

