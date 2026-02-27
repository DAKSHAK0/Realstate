import type { Metadata } from 'next';
import { SectionHeader } from '@/components/section-header';
import { FAQItem } from '@/components/faq-item';

export const metadata: Metadata = {
  title: 'Contact & Enquiries',
  description:
    'Share your requirements and timelines with Aurum Estates. Our advisory team will connect with curated options and a clear next step.',
  alternates: {
    canonical: '/contact'
  }
};

const faqs = [
  {
    q: 'How do I schedule a site visit?',
    a: 'Share your preferred dates, time slots and the properties you are interested in. Our team will confirm availability, align with the developer and share a consolidated visit plan.'
  },
  {
    q: 'Are the listings verified?',
    a: 'Yes. We work with developers and projects that meet internal checks across approvals, delivery history and reputation. Any nuances or watch-outs are shared transparently during our conversations.'
  },
  {
    q: 'Do you help with investment properties?',
    a: 'We advise on both primary residences and investment-led acquisitions, with a focus on micro-markets where rental demand and long-term resilience are supported by data.'
  },
  {
    q: 'Can I request a callback?',
    a: 'Absolutely. Share a convenient time window and a brief note on what you are exploring. A senior advisor will connect with you within the next business day.'
  },
  {
    q: 'Do you assist with documentation?',
    a: 'Yes. We coordinate with developers, legal counsel and financial institutions to help you navigate documentation, from allotment to registration.'
  },
  {
    q: 'Are there ready-to-move options available?',
    a: 'Our portfolio spans ready-to-move, near-possession and under-construction homes. If you are on a compressed timeline, we prioritise options where handover is aligned.'
  },
  {
    q: 'Can I get recommendations based on budget?',
    a: 'Yes. Once we understand your budget, preferred locations and timelines, we share a calibrated shortlist rather than an exhaustive list, so decisions remain manageable.'
  },
  {
    q: 'How soon will your team respond?',
    a: 'During working hours, most enquiries receive a first response within a few hours. For enquiries received after hours or on holidays, we respond on the next business day.'
  }
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a
    }
  }))
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="section-padding pt-10">
        <div className="container-max space-y-10">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s help you find the right space."
            subtitle="Share a few details and our team will connect with you to understand where you are in your search and what you are optimising for."
          />
          <div className="grid gap-10 lg:grid-cols-[1.6fr,1.1fr]">
            <section
              id="visit"
              aria-label="Enquiry form"
              className="card-surface p-6 sm:p-7 space-y-4"
            >
              <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                Enquiry Form
              </p>
              <h2 className="h3 text-lg">Share your requirements.</h2>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-aurum-textMuted">Name</label>
                    <input
                      required
                      name="name"
                      className="input mt-1"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-aurum-textMuted">Email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="input mt-1"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-aurum-textMuted">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      className="input mt-1"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-aurum-textMuted">
                      Preferred Location
                    </label>
                    <input
                      name="location"
                      className="input mt-1"
                      placeholder="e.g., South Mumbai, Bandra, Alibaug"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-aurum-textMuted">Budget Range</label>
                    <input
                      name="budget"
                      className="input mt-1"
                      placeholder="e.g., ₹6–10 Cr"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-aurum-textMuted">Property Interest</label>
                    <select name="interest" className="input mt-1 bg-aurum-surface">
                      <option>Luxury Apartments</option>
                      <option>Signature Villas</option>
                      <option>Penthouse Residences</option>
                      <option>Smart Homes</option>
                      <option>Investment Properties</option>
                      <option>Open to Recommendations</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-aurum-textMuted">Message</label>
                  <textarea
                    name="message"
                    className="textarea mt-1 min-h-[100px]"
                    placeholder="Share your timelines, family needs or any specific preferences."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-xs tracking-[0.22em] uppercase"
                >
                  Submit Enquiry
                </button>
                <p className="text-[11px] text-aurum-textMuted">
                  Once we receive your enquiry, a senior advisor will review it and reach
                  out with a suggested next step—whether that is a discovery call, a
                  shortlist or a guided site visit plan.
                </p>
              </form>
            </section>

            <aside className="space-y-6">
              <div className="card-surface p-5 space-y-3">
                <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                  Direct Contact
                </p>
                <p className="text-sm text-aurum-textMuted">
                  Phone: +91-22-4000-0000
                  <br />
                  Email: enquiries@aurumestates.in
                  <br />
                  Office: Level 21, Aurum Tower, Mumbai
                  <br />
                  Hours: Mon–Sat, 10:00–19:00
                </p>
              </div>
              <div className="card-surface p-5 space-y-3">
                <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
                  What happens next
                </p>
                <ol className="space-y-2 text-sm text-aurum-textMuted">
                  <li>1. We review your requirements and timelines.</li>
                  <li>2. We connect with relevant options and context.</li>
                  <li>3. We arrange a guided consultation or site visits.</li>
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-10 lg:grid-cols-[1.5fr,1.4fr]">
          <div className="space-y-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Thought-through answers before you even ask."
              subtitle="If a question is important to your decision, it is important to us."
            />
          </div>
          <div className="card-surface p-6 space-y-2">
            {faqs.map((item) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pb-20">
        <div className="container-max">
          <div className="card-surface px-6 py-7 text-center space-y-3">
            <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
              A Calm Close
            </p>
            <h2 className="h2">
              Tell us what you&apos;re looking for, and we&apos;ll guide you with clarity.
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Whether you are just beginning to explore or ready to take a decision, we
              will meet you where you are and move at a pace that feels right for you and
              your family.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

