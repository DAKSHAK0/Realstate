import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AurumPageTransition } from '@/components/aurum-page-transition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aurum-estates.example'),
  title: {
    default: 'Aurum Estates | Spaces That Elevate the Way You Live.',
    template: '%s | Aurum Estates'
  },
  description:
    'Aurum Estates curates premium residences, signature villas, and investment-grade developments in prime locations—designed for elevated living and long-term value.',
  openGraph: {
    title: 'Aurum Estates | Spaces That Elevate the Way You Live.',
    description:
      'Premium real estate advisory for luxury residences, curated developments, and high-value property opportunities.',
    url: 'https://www.aurum-estates.example',
    siteName: 'Aurum Estates',
    images: [
      {
        url: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cinematic view of a luxury residence at Aurum Estates'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Aurum Estates',
    url: 'https://www.aurum-estates.example',
    slogan: 'Spaces That Elevate the Way You Live.',
    logo: 'https://www.aurum-estates.example/logo.png',
    description:
      'A premium real estate brand curating luxury residences, signature villas, and investment-grade properties in prime urban neighborhoods.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Level 21, Aurum Tower, Business District',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400001',
      addressCountry: 'IN'
    },
    telephone: '+91-22-4000-0000'
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <AurumPageTransition>
            <main className="flex-1 pt-20">{children}</main>
          </AurumPageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}

