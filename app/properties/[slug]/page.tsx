import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { properties } from '@/data/properties';
import { PropertyGallery } from '@/components/property-gallery';
import { AmenityCard } from '@/components/amenity-card';
import { FloorPlanPreview } from '@/components/floor-plan-preview';
import { LocationHighlights } from '@/components/location-highlights';
import { InquiryForm } from '@/components/inquiry-form';
import { PropertyCard } from '@/components/property-card';

interface PropertyDetailProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PropertyDetailProps): Metadata {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) return {};

  return {
    title: `${property.name} – ${property.location}`,
    description: property.headline,
    alternates: {
      canonical: `/properties/${property.slug}`
    },
    openGraph: {
      title: property.name,
      description: property.description,
      images: [
        {
          url: property.heroImage,
          width: 1200,
          height: 630,
          alt: property.name
        }
      ]
    }
  };
}

export default function PropertyDetailPage({ params }: PropertyDetailProps) {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) notFound();

  const related = properties.filter(
    (p) => p.id !== property.id && (p.city === property.city || p.featured)
  );

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.aurum-estates.example/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Properties',
        item: 'https://www.aurum-estates.example/properties'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: property.name,
        item: `https://www.aurum-estates.example/properties/${property.slug}`
      }
    ]
  };

  const listingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: property.name,
    description: property.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.city,
      addressCountry: property.country
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
      />
      <section className="section-padding pt-10">
        <div className="container-max space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-aurum-textMuted">
              {property.location}
            </p>
            <h1 className="h1">{property.name}</h1>
            <p className="text-sm text-aurum-textMuted max-w-2xl">
              {property.headline}
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-aurum-textMuted">
              <span className="pill border-aurum-border/60 bg-transparent">
                From {property.startingPrice}
              </span>
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
          </div>
          <PropertyGallery images={property.gallery} name={property.name} />
        </div>
      </section>

      <section className="section-padding pt-6">
        <div className="container-max grid gap-8 lg:grid-cols-[1.7fr,1.1fr]">
          <div className="space-y-6">
            <div className="card-surface p-6 space-y-3">
              <h2 className="h3 text-lg">Property Overview</h2>
              <p className="text-sm text-aurum-textMuted leading-relaxed">
                {property.description}
              </p>
              <ul className="mt-2 space-y-2 text-sm text-aurum-textMuted">
                {property.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="grid-auto-fit">
              <div className="card-surface p-5 space-y-3">
                <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                  Trust &amp; Process
                </p>
                <p className="text-sm text-aurum-text">
                  Verified listing with structured documentation support and guided
                  walkthroughs.
                </p>
              </div>
              <div className="card-surface p-5 space-y-3">
                <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                  Engagement
                </p>
                <p className="text-sm text-aurum-text">
                  Schedule a visit, request a detailed financial illustration or share your
                  current shortlist to compare.
                </p>
              </div>
            </div>
          </div>
          <InquiryForm context={property.name} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max space-y-6">
          <h2 className="h3 text-lg">Amenities</h2>
          <div className="grid-auto-fit">
            {property.amenities.map((amenity) => (
              <AmenityCard key={amenity.id} label={amenity.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max space-y-6">
          <h2 className="h3 text-lg">Floor Plans</h2>
          <FloorPlanPreview plans={property.floorPlans} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max space-y-6">
          <h2 className="h3 text-lg">Location</h2>
          <LocationHighlights items={property.locationHighlights} city={property.city} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-8 lg:grid-cols-[1.6fr,1.2fr] items-center">
          <div className="card-surface p-6 space-y-3">
            <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
              Virtual Experience
            </p>
            <p className="text-sm text-aurum-textMuted">
              Detailed walkthrough videos, material boards and elevation studies are shared
              during guided consultations or private previews.
            </p>
            <p className="text-[11px] text-aurum-textMuted">
              If you are viewing this experience remotely, our team can arrange a fully
              hosted virtual walkthrough and documentation briefing.
            </p>
          </div>
          <div className="card-surface h-52 sm:h-64 rounded-3xl border border-dashed border-aurum-border/70 bg-[radial-gradient(circle_at_top,_rgba(211,164,95,0.2),_transparent_60%)]" />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-max space-y-6">
            <h2 className="h3 text-lg">Related Residences</h2>
            <div className="grid-auto-fit">
              {related.slice(0, 3).map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

