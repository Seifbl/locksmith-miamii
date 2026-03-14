import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emergency Locksmith Miami | Locked Out? Call Now — 24/7",
  description:
    "Locked out in Miami? QuickLock provides 24/7 emergency locksmith service across Miami-Dade. Home, car & office lockouts. Average 20-min response. Call (305) 555-0192.",
  keywords:
    "emergency locksmith miami, locked out miami, car lockout miami, house lockout miami, 24 hour locksmith miami, locksmith near me miami, miami locksmith",
  openGraph: {
    title: "Emergency Locksmith Miami | Locked Out? Call Now — 24/7",
    description:
      "Locked out in Miami? 24/7 emergency locksmith. Home, car & office lockouts. 20-min response. Licensed & insured.",
    url: "https://quicklockmami.com",
    siteName: "QuickLock Miami",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://quicklockmami.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Locksmith"],
  name: "QuickLock Miami",
  description:
    "24/7 emergency locksmith service in Miami. Home lockout, car lockout, office lockout, key extraction.",
  telephone: "+13055550192",
  url: "https://quicklockmami.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Miami",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33101",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.7617,
    longitude: -80.1918,
  },
  areaServed: {
    "@type": "City",
    name: "Miami",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "512",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
