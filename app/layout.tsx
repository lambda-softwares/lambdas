import type React from "react"
import type { Metadata } from "next"
import { Domine, Karla, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const SITE_URL = "https://www.lsl.co.ke"

const oswald = Oswald({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

const domine = Domine({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-domine",
  display: "swap",
})

const karla = Karla({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Lsl - From software to intelligent systems",
    template: "%s | Lsl",
  },
  description:
    "Kenya's technology transformation partner. We integrate AI into existing systems, build domain-specific AI products across 14+ industries, and ship consumer apps. Private limited company specializing in AI consulting, industry solutions, and product innovation.",
  keywords: ["AI consulting Kenya", "software development", "artificial intelligence", "system integration", "AgriTech", "FinTech", "LegalTech", "HealthTech", "Industry 4.0", "consumer apps", "technology transformation"],
  authors: [{ name: "Lsl" }],
  creator: "Lsl",
  publisher: "Lsl",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "https://www.lsl.co.ke",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.lsl.co.ke",
    siteName: "Lsl",
    title: "Lsl - From software to intelligent systems",
    description: "We integrate AI into existing systems, build domain-specific AI products, and ship consumer apps.",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "Lsl - AI Integration & Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lsl_ke",
    creator: "@lsl_ke",
    title: "Lsl - From software to intelligent systems",
    description: "We integrate AI into existing systems, build domain-specific AI products, and ship consumer apps.",
    images: ["/og/og-default.png"],
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
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Lsl",
      url: "https://www.lsl.co.ke",
      logo: new URL("/Lsl_logo.svg", SITE_URL).toString(),
      description: "Kenya's technology transformation partner offering AI consulting, industry-specific solutions across 14+ sectors, consumer app development, and system integration services. Private limited company specializing in AI-driven transformation of existing systems.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KE",
      },
      sameAs: ["https://www.linkedin.com/company/lsl", "https://x.com/lsl_ke"],
    }),
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${domine.variable} ${karla.variable}`}>
      <body className="antialiased">
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
