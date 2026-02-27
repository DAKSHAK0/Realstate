import type { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import { properties } from '@/data/properties';
import { HeroImage } from '@/components/hero-image';
import { SectionHeader } from '@/components/section-header';
import { PropertyCard } from '@/components/property-card';
import { AmenityCard } from '@/components/amenity-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { SearchBar } from '@/components/search-bar';
import { StatsCounter } from '@/components/stats-counter';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Luxury Residences & Curated Developments',
  description:
    'Discover a curated selection of luxury residences, villas and penthouses in prime neighbourhoods with Aurum Estates—designed for elevated living.',
  alternates: {
    canonical: '/'
  }
};

const featured = properties.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      <section className="section-padding pt-10 lg:pt-16">
        <div className="container-max grid gap-10 lg:grid-cols-[1.5fr,1.1fr] items-center">
          <div className="space-y-6">
            <div className="badge-soft">Spaces That Elevate the Way You Live.</div>
            <h1 className="h1">
              Discover exceptional residences designed for{' '}
              <span className="text-aurum-accent">elevated living</span>.
            </h1>
            <p className="body-large">
              Aurum Estates curates a focused portfolio of luxury homes, villas and
              high-rise residences in prime neighbourhoods—bringing together design,
              comfort and long-term value under one considered advisory.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="btn-primary text-xs tracking-[0.22em] uppercase">
                Explore Properties
              </button>
              <a
                href="/contact#visit"
                className="btn-secondary text-xs tracking-[0.22em] uppercase"
              >
                Schedule a Visit
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <StatsCounter label="Homes Curated Across Prime Micro-markets" value={120} />
              <StatsCounter label="Years of Combined Advisory Experience" value={18} />
              <StatsCounter label="Families Guided to a Considered Purchase" value={500} />
            </div>
          </div>
          <HeroImage />
        </div>
        <div className="container-max mt-8">
          <Suspense fallback={<div className="h-14 bg-aurum-surface/50 rounded-full animate-pulse" />}>
            <SearchBar />
          </Suspense>
        </div>
      </section>

      <section className="section-padding pt-6">
        <div className="container-max">
          <div className="grid gap-6 rounded-3xl border border-aurum-border/70 bg-aurum-surface/60 px-6 py-6 sm:px-8 sm:py-7 lg:grid-cols-4">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                Verified Listings
              </p>
              <p className="text-sm text-aurum-text">
                Every home is reviewed for developer track record, approvals and delivery
                history.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                Prime Locations
              </p>
              <p className="text-sm text-aurum-text">
                Micro-markets selected for connectivity, social infrastructure and long-term
                livability.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                Expert Guidance
              </p>
              <p className="text-sm text-aurum-text">
                Advisory-led conversations that prioritise clarity over pressure.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                Seamless Experience
              </p>
              <p className="text-sm text-aurum-text">
                From first viewing to documentation, every step is orchestrated for ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max space-y-10">
          <SectionHeader
            eyebrow="Featured Residences"
            title="Curated homes for considered buyers."
            subtitle="A focused selection of residences, villas and penthouses across established neighbourhoods, each with a clear story of design, location and value."
          />
          <div className="grid-auto-fit">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-10 lg:grid-cols-[1.2fr,1.4fr] items-center">
          <div className="space-y-4">
            <SectionHeader
              eyebrow="Lifestyle & Brand Promise"
              title="Homes that respect the way you live."
              subtitle="We look beyond carpet area and views to understand how you live—how you entertain, work, unwind and host—so the home serves every layer of your life."
            />
            <ul className="space-y-2 text-sm text-aurum-textMuted">
              <li>
                • Calm, layered interiors that prioritise light, proportions and tactility.
              </li>
              <li>
                • Spatial planning that separates private, family and entertaining zones
                with clarity.
              </li>
              <li>
                • Thought-through storage, utility and staff circulation to keep the home
                feeling composed.
              </li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Skyline views', 'Hotel-inspired amenities', 'Landscape-led living', 'Discreet security'].map(
              (item) => (
                <AmenityCard key={item} label={item} />
              )
            )}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max space-y-10">
          <SectionHeader
            eyebrow="Prime Locations"
            title="Address is more than a pin on the map."
            subtitle="We focus on neighbourhoods where daily life—schools, work, culture and connectivity—comes together effortlessly."
          />
          <div className="grid gap-8 lg:grid-cols-[1.6fr,1.2fr]">
            <div className="card-surface p-6 space-y-4">
              <p className="text-sm text-aurum-textMuted">
                Our portfolio currently spans select pockets of South Mumbai, Bandra–Juhu
                belt, emerging business corridors and coastal second-home destinations such
                as Alibaug—each chosen for its long-term livability and resilience.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-aurum-textMuted">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-aurum-textMuted mb-1">
                    Mumbai
                  </p>
                  <p>Skyline residences, penthouses and ready-to-move family homes.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-aurum-textMuted mb-1">
                    Alibaug &amp; Coastal
                  </p>
                  <p>Low-density villas designed as generational holiday homes.</p>
                </div>
              </div>
            </div>
            <div className="card-surface p-6">
              <div className="relative h-60 rounded-2xl border border-dashed border-aurum-border/70 bg-[radial-gradient(circle_at_top,_rgba(211,164,95,0.2),_transparent_60%)]">
                <div className="absolute inset-8 rounded-2xl border border-aurum-border/80" />
                <div className="absolute top-10 left-14 h-3 w-3 rounded-full bg-aurum-accent" />
                <div className="absolute bottom-14 right-16 h-2.5 w-2.5 rounded-full bg-aurum-accent/70" />
              </div>
              <p className="mt-3 text-[11px] text-aurum-textMuted">
                Interactive map experiences and micro-market deep dives are part of every
                guided consultation with Aurum Estates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max space-y-10">
          <SectionHeader
            eyebrow="Why Aurum Estates"
            title="A calm, advisory-led buying journey."
            subtitle="From the first shortlist to documentation, we guide you with context, not pressure."
          />
          <div className="grid-auto-fit">
            <div className="card-surface p-6 space-y-3">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                Curated Portfolio
              </p>
              <p className="text-sm text-aurum-text">
                We work with a limited number of developers and projects at any given time
                to ensure depth over volume.
              </p>
            </div>
            <div className="card-surface p-6 space-y-3">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                Transparent Guidance
              </p>
              <p className="text-sm text-aurum-text">
                We share the upside and the watch-outs—delivery track records, micro-market
                nuances and documentation checkpoints.
              </p>
            </div>
            <div className="card-surface p-6 space-y-3">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                End-to-End Support
              </p>
              <p className="text-sm text-aurum-text">
                From initial discovery to site visits, negotiations and paperwork, the
                process is orchestrated so you can focus on decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max space-y-10">
          <SectionHeader
            eyebrow="Client Testimonials"
            title="Trusted by families, professionals and investors."
            subtitle="Our clients often come through referral. We take that trust seriously."
          />
          <div className="grid-auto-fit">
            <TestimonialCard
              quote="Aurum translated a broad brief into three sharply relevant options. The conversation was always about fit, never about urgency."
              name="Ananya & Rohan Mehta"
              role="Upgrading to a larger family home in South Mumbai"
            />
            <TestimonialCard
              quote="The team brought a rare combination of market data and design sensibility. Every visit felt purposeful rather than overwhelming."
              name="Vikram Shah"
              role="First-time luxury home buyer, Bandra"
            />
            <TestimonialCard
              quote="For our investment portfolio, Aurum filtered projects where both rental yield and long-term resilience made sense."
              name="Global Family Office"
              role="Residential investment mandate across select micro-markets"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Find a home that matches the life you’re building."
        subtitle="Share where you are in your search—early exploration, shortlisting or ready-to-decide—and we will meet you there with clarity and context."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="Browse Properties"
        secondaryHref="/properties"
      />
    </>
  );
}

