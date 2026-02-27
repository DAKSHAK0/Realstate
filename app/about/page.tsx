import type { Metadata } from 'next';
import { SectionHeader } from '@/components/section-header';
import { AgentCard } from '@/components/agent-card';
import { CTASection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'About Aurum Estates',
  description:
    'Aurum Estates is a premium real estate brand focused on curated luxury residences, villas and investment-grade opportunities.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding pt-10">
        <div className="container-max space-y-10">
          <SectionHeader
            eyebrow="About Aurum Estates"
            title="A focused practice at the intersection of real estate and design."
            subtitle="Aurum Estates was founded with a simple premise: discerning buyers deserve clear, calm and well-informed guidance when making one of their most meaningful decisions."
          />
          <div className="grid gap-8 lg:grid-cols-[1.6fr,1.2fr] items-start">
            <div className="space-y-6">
              <div className="card-surface p-6 space-y-3">
                <h2 className="h3 text-lg">Who we are</h2>
                <p className="text-sm text-aurum-textMuted leading-relaxed">
                  We are a small, senior-led advisory practice working with a limited number
                  of mandates at a time. Our team combines backgrounds in real estate,
                  architecture and financial services, enabling us to evaluate a home from
                  every relevant angle—design, delivery, documentation and long-term value.
                </p>
              </div>
              <div className="grid-auto-fit">
                <div className="card-surface p-6 space-y-3">
                  <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                    Our Philosophy
                  </p>
                  <p className="text-sm text-aurum-text">
                    Property is more than a transaction. It anchors lifestyle, identity and
                    generational planning.
                  </p>
                  <p className="text-sm text-aurum-textMuted">
                    We start by understanding how you live today and what you are building
                    towards—then shape the search and conversations accordingly.
                  </p>
                </div>
                <div className="card-surface p-6 space-y-3">
                  <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                    Our Promise
                  </p>
                  <ul className="space-y-2 text-sm text-aurum-textMuted">
                    <li>• Transparent, context-rich guidance.</li>
                    <li>• Selectively chosen developers and projects.</li>
                    <li>• Professional documentation and process support.</li>
                    <li>• Respect for your time, privacy and decision-making pace.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="card-surface p-6 space-y-3">
                <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                  Why clients trust us
                </p>
                <p className="text-sm text-aurum-textMuted">
                  Many of our conversations start with a referral—from a family, advisor or
                  developer we have worked with before. We honour that trust through clear
                  disclosure, diligent evaluation and a calm advisory tone, even when
                  timelines are compressed.
                </p>
              </div>
              <div className="grid-auto-fit">
                <AgentCard
                  name="Meera Rao"
                  role="Principal, Residential Advisory"
                  focus="Leads luxury residential mandates with a focus on South Mumbai and Bandra–Juhu, blending market insight with an architect’s eye for proportion and light."
                />
                <AgentCard
                  name="Arjun Patel"
                  role="Director, Investments & Strategy"
                  focus="Advises professionals and families on investment-grade acquisitions across select micro-markets, with an emphasis on yield and resilience."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max space-y-8">
          <SectionHeader
            eyebrow="The Aurum Experience"
            title="A journey designed to feel composed, informed and personal."
            subtitle="We structure every interaction—from the first call to key handover—so you always know what to expect next."
          />
          <div className="grid-auto-fit">
            <div className="card-surface p-6 space-y-3">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                01 • Understanding You
              </p>
              <p className="text-sm text-aurum-textMuted">
                We begin with a detailed conversation around your current home, preferred
                locations, lifestyle patterns, timelines and financial considerations.
              </p>
            </div>
            <div className="card-surface p-6 space-y-3">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                02 • Curated Shortlist
              </p>
              <p className="text-sm text-aurum-textMuted">
                You receive a tight shortlist with clear pros, watch-outs and market
                context—so each visit has a defined purpose.
              </p>
            </div>
            <div className="card-surface p-6 space-y-3">
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                03 • Guided Visits &amp; Closure
              </p>
              <p className="text-sm text-aurum-textMuted">
                Our team manages site visits, negotiations and documentation checklists,
                ensuring a smooth path from intent to possession.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Explore how Aurum Estates can support your search."
        subtitle="Whether you are at the first step or evaluating a final shortlist, we can help you view the decision through the lens of both lifestyle and long-term value."
        primaryLabel="Connect with Our Team"
        primaryHref="/contact"
        secondaryLabel="Browse Current Listings"
        secondaryHref="/properties"
      />
    </>
  );
}

