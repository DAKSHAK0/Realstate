import Link from 'next/link';

const year = new Date().getFullYear();

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'Featured Residences', href: '/properties?featured=true' },
  { label: 'About Aurum', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

const categories = [
  'Luxury Apartments',
  'Signature Villas',
  'Penthouse Residences',
  'Smart Homes',
  'Investment Properties',
  'New Launches'
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-aurum-border/60 bg-aurum-surface/70 backdrop-blur-xl">
      <div className="container-max py-12 lg:py-16 space-y-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="pill">Aurum Estates</div>
            <p className="h3">Spaces That Elevate the Way You Live.</p>
            <p className="body-large max-w-xl">
              Aurum Estates partners with leading developers and architects to present
              thoughtfully designed residences in prime urban neighborhoods—balancing
              aesthetics, comfort, and long-term value.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-[0.2em] uppercase text-aurum-textMuted">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm text-aurum-textMuted">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-aurum-text transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-[0.2em] uppercase text-aurum-textMuted">
              Property Categories
            </p>
            <ul className="space-y-2 text-sm text-aurum-textMuted">
              {categories.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr,1fr,1fr] items-start">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.2em] uppercase text-aurum-textMuted">
              Office
            </p>
            <p className="text-sm text-aurum-textMuted">
              Level 21, Aurum Tower
              <br />
              Financial &amp; Business District
              <br />
              Mumbai, Maharashtra 400001
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-[0.2em] uppercase text-aurum-textMuted">
              Contact
            </p>
            <p className="text-sm text-aurum-textMuted">
              Phone: +91-22-4000-0000
              <br />
              Email: enquiries@aurumestates.in
              <br />
              Hours: Mon–Sat, 10:00–19:00
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-[0.2em] uppercase text-aurum-textMuted">
              Stay Informed
            </p>
            <form className="space-y-2">
              <input
                type="email"
                className="input"
                placeholder="Email for curated launch updates"
                aria-label="Email for curated launch updates"
              />
              <button type="submit" className="btn-secondary w-full justify-center text-xs">
                Receive Launch Briefings
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-aurum-border/60 pt-6">
          <p className="text-xs text-aurum-textMuted">
            © {year} Aurum Estates. All rights reserved.
          </p>
          <p className="text-[11px] text-aurum-textMuted">
            This experience is conceptual and intended for portfolio demonstration of a
            luxury real estate interface.
          </p>
        </div>
      </div>
    </footer>
  );
}

