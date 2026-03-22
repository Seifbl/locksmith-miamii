import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://arlington247lockrepair.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Emergency Locksmith Arlington VA | 24/7 Lockout Service — Call (703) 244-0559",
    template: "%s | arlington247lockrepair",
  },
  description:
    "Locked out in Arlington, VA? arlington247lockrepair provides 24/7 emergency locksmith service. Home, car & office lockouts. Average 20-min response. Licensed & insured. Call (703) 244-0559.",
  keywords: [
    "emergency locksmith arlington",
    "locksmith arlington va",
    "locked out arlington",
    "car lockout arlington",
    "house lockout arlington",
    "24 hour locksmith arlington",
    "locksmith near me arlington",
    "arlington locksmith",
    "emergency lockout service arlington va",
    "auto locksmith arlington",
    "residential locksmith arlington",
    "commercial locksmith arlington",
    "lock repair arlington",
    "key extraction arlington",
    "arlington va locksmith 24/7",
  ],
  openGraph: {
    title: "Emergency Locksmith Arlington VA | Locked Out? Call Now — 24/7",
    description:
      "Locked out in Arlington? 24/7 emergency locksmith. Home, car & office lockouts. 20-min response. Licensed & insured. Call (703) 244-0559.",
    url: BASE_URL,
    siteName: "arlington247lockrepair",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/keys-in-lock.jpg",
        width: 1200,
        height: 630,
        alt: "arlington247lockrepair — 24/7 Emergency Locksmith Service in Arlington VA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Locksmith Arlington VA | 24/7 — Call (703) 244-0559",
    description:
      "Locked out in Arlington? Fast, affordable 24/7 locksmith service. Home, car & office lockouts. 20-min response.",
    images: ["/images/keys-in-lock.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Replace with your actual Google Search Console verification code
    // google: "your-google-verification-code",
  },
  category: "Locksmith Service",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Locksmith"],
  "@id": BASE_URL,
  name: "arlington247lockrepair",
  description:
    "24/7 emergency locksmith service in Arlington, VA. Home lockout, car lockout, office lockout, key extraction. Fast 20-minute response. Licensed & insured.",
  telephone: "+17032440559",
  url: BASE_URL,
  image: `${BASE_URL}/images/keys-in-lock.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Arlington",
    addressLocality: "Arlington",
    addressRegion: "VA",
    postalCode: "22201",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.8816,
    longitude: -77.091,
  },
  areaServed: [
    { "@type": "City", name: "Arlington" },
    { "@type": "AdministrativeArea", name: "Arlington County" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 38.8816,
      longitude: -77.091,
    },
    geoRadius: "15",
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
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "512",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Locksmith Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Lockout Service",
          description: "Emergency residential lockout service in Arlington, VA. Houses, condos, apartments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Lockout Service",
          description: "Emergency auto lockout service in Arlington, VA. All makes and models.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Office / Commercial Lockout Service",
          description: "Emergency commercial lockout service in Arlington, VA. Offices, retail, warehouses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Key Extraction & Lock Repair",
          description: "Broken key extraction and on-the-spot lock repair in Arlington, VA.",
        },
      },
    ],
  },
  sameAs: [],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can you respond to an emergency lockout in Arlington?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our average response time is 20 minutes or less anywhere in Arlington County. We have mobile technicians stationed throughout Ballston, Clarendon, Crystal City, Rosslyn, and surrounding neighborhoods ready to dispatch 24/7 — including nights, weekends, and holidays.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a lockout service cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide upfront flat-rate pricing before any work begins — no hidden fees, no surprise charges, and no call-out fee. The exact cost depends on the type of lockout (residential, commercial, storefront, or auto). Call (703) 244-0559 for a free, no-obligation quote.",
      },
    },
    {
      "@type": "Question",
      name: "Are you available 24 hours a day, 7 days a week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. arlington247lockrepair operates 24 hours a day, 7 days a week, 365 days a year. Whether it's 2am on a Tuesday or Christmas morning, a real person will answer your call and dispatch a technician immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Will you damage my door or lock during a lockout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We use professional non-destructive entry techniques on every job. Your lock, door, and frame stay intact. We back this up with a no-damage guarantee. If any damage occurs during our service, we cover the repair at no cost to you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you service storefront and commercial locks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We specialize in commercial and storefront lockouts including glass storefront door locks, panic bars, push bars, access control systems, high-security deadbolts, and master key systems. We serve offices, retail shops, restaurants, and warehouses across Arlington.",
      },
    },
    {
      "@type": "Question",
      name: "Can you replace door hardware on the spot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our technicians carry a full inventory of commercial and residential door hardware including knobs, levers, deadbolts, hinges, and door closers. In most cases we can replace your hardware in a single visit — no need to schedule a follow-up.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install and repair emergency exit doors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We install, repair, and inspect emergency exit doors, panic hardware, and fire-rated door assemblies. We ensure your doors meet local fire codes, ADA requirements, and Virginia building regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Are your locksmiths licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every technician on our team is fully licensed in the state of Virginia, background-checked, and carries proof of insurance. We bring our credentials to every job so you can verify before we start.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of Arlington County and surrounding areas including Ballston, Clarendon, Courthouse, Crystal City, Pentagon City, Rosslyn, Shirlington, Columbia Pike, Cherrydale, Lyon Village, Bluemont, Westover, Fairlington, and more. Call us to confirm coverage for your location.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide ID to get a lockout service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For your safety and ours, we may ask for proof of residence or authorization (such as a photo ID, lease, or utility bill) before performing a lockout service. This protects you and ensures we're helping the rightful owner or tenant.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Arlington" />
        <meta name="geo.position" content="38.8816;-77.091" />
        <meta name="ICBM" content="38.8816, -77.091" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="NSQ1ozShi5v60xjJpaTrWg"
          async
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
