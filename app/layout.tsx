import type React from "react";
import type { Metadata } from "next";
import { Manrope, DM_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/core/header";
import { Footer } from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";
import { GEO_CONFIG } from "@/lib/geo-config";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-nunito-sans",
});

/**
 * Site names: https://developers.google.com/search/docs/appearance/site-names
 * - `name` = preferred site name; `alternateName` = fallbacks if preferred unavailable
 *   (acronym, domain, other common forms — not a duplicate of `name`).
 */
export const metadata: Metadata = {
  applicationName: "Wise Accelerate",
  title: {
    default: "Wise Accelerate | Software Development & AI-Powered Engineering",
    template: "%s | Wise Accelerate",
  },
  description:
    "Wise Accelerate delivers expert fullstack developers supercharged by AI co-pilots. Transform your business with cutting-edge software development, AI integration, and mobile app solutions.",
  keywords: [
    "Wise Accelerate",
    "wise accelerate",
    "software development",
    "AI integration",
    "fullstack developers",
    "mobile app development",
    "IT agency",
  ],
  authors: [{ name: "Wise Accelerate", url: GEO_CONFIG.baseUrl }],
  creator: "Wise Accelerate",
  publisher: "Wise Accelerate",
  metadataBase: new URL(GEO_CONFIG.baseUrl),
  alternates: {
    canonical: "/",
  },
  /** Geo signals for generative engine optimization */
  other: {
    "geo.region": GEO_CONFIG.geoRegion,
    "geo.placename": GEO_CONFIG.geoPlacename,
  },
  openGraph: {
    title: "Wise Accelerate | Software Development & AI-Powered Engineering",
    description:
      "Wise Accelerate delivers expert fullstack developers supercharged by AI co-pilots. Transform your business with cutting-edge software development.",
    url: GEO_CONFIG.baseUrl,
    siteName: "Wise Accelerate",
    locale: GEO_CONFIG.locale,
    type: "website",
    images: [
      {
        url: "/logo-2026.png",
        width: 1200,
        height: 630,
        alt: "Wise Accelerate Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wise Accelerate | Software Development",
    description:
      "Wise Accelerate delivers expert fullstack developers supercharged by AI co-pilots.",
    images: ["/logo-2026.png"],
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
  icons: {
    icon: [
      // { url: "/favicon-28.png", sizes: "28x28", type: "image/png" },
      // { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }, temporary removed to test logo
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = GEO_CONFIG.baseUrl;
  const websiteId = `${siteUrl}/#website`;
  const organizationId = `${siteUrl}/#organization`;
  const logoUrl = `${siteUrl}/logo-2026.png`;

  const siteNameAlternates = ["WiseAccelerate", "Wise Accelerate"] as const;

  const googleMapsSameAs =
    "https://maps.app.goo.gl/YF3TWW17jSfCyERz5" as const;
  const organizationSameAs = [
    googleMapsSameAs,
    "https://www.linkedin.com/company/wise-accelerate",
    "https://www.facebook.com/wiseaccelerate",
  ] as const;

  const professionalServiceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Wise Accelerate",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dolphin Plaza Tower, 28 P. Trần Bình, Từ Liêm",
      addressLocality: "Hanoi",
      postalCode: "100000",
      addressCountry: "VN",
    },
    sameAs: [...organizationSameAs],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@id": `${siteUrl}/#website`,
    "@type": "WebSite",
    name: "Wise Accelerate",
    url: siteUrl,
    inLanguage: GEO_CONFIG.inLanguage,
    areaServed: GEO_CONFIG.areasServed,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wise Accelerate",
    alternateName: ["Wise Accelerate", "WiseAccelerate"],
    url: siteUrl,
    logo: logoUrl,
    description:
      "Wise Accelerate delivers expert fullstack developers supercharged by AI co-pilots. Transform your business with cutting-edge software development, AI integration, and mobile app solutions.",
    foundingDate: "2020",
    legalName: "W Digital Services Pty Ltd",
    address: {
      "@type": "PostalAddress",
      addressCountry: GEO_CONFIG.headquarters.country,
      ...(GEO_CONFIG.headquarters.addressRegion && {
        addressRegion: GEO_CONFIG.headquarters.addressRegion,
      }),
      ...(GEO_CONFIG.headquarters.addressLocality && {
        addressLocality: GEO_CONFIG.headquarters.addressLocality,
      }),
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@wiseaccelerate.com",
      contactType: "customer service",
      areaServed: GEO_CONFIG.areasServed,
    },
    sameAs: [...organizationSameAs],
    areaServed: GEO_CONFIG.areasServed,
    knowsAbout: [
      "Software Development",
      "AI Integration",
      "Fullstack Development",
      "Mobile App Development",
      "Web Application Development",
    ],
  };

  const siteNamesStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "Wise Accelerate",
        alternateName: [...siteNameAlternates],
        inLanguage: GEO_CONFIG.inLanguage,
        publisher: { "@id": organizationId },
        areaServed: GEO_CONFIG.areasServed,
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Wise Accelerate",
        alternateName: [...siteNameAlternates, "W Digital Services Pty Ltd"],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        description:
          "Wise Accelerate delivers expert fullstack developers supercharged by AI co-pilots. Transform your business with cutting-edge software development, AI integration, and mobile app solutions.",
        foundingDate: "2020",
        legalName: "W Digital Services Pty Ltd",
        address: {
          "@type": "PostalAddress",
          addressCountry: GEO_CONFIG.headquarters.country,
          ...(GEO_CONFIG.headquarters.addressRegion && {
            addressRegion: GEO_CONFIG.headquarters.addressRegion,
          }),
          ...(GEO_CONFIG.headquarters.addressLocality && {
            addressLocality: GEO_CONFIG.headquarters.addressLocality,
          }),
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@wiseaccelerate.com",
          contactType: "customer service",
          areaServed: GEO_CONFIG.areasServed,
        },
        sameAs: [...organizationSameAs],
        areaServed: GEO_CONFIG.areasServed,
        knowsAbout: [
          "Software Development",
          "AI Integration",
          "Fullstack Development",
          "Mobile App Development",
          "Web Application Development",
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteNamesStructuredData),
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${dmSans.variable} ${nunitoSans.variable} bg-transparent font-manrope`}
        suppressHydrationWarning
      >
        <div className="fixed top-0 w-full z-[40]">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
