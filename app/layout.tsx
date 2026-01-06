import type React from "react"
import type { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ChatWidget } from "@/components/chat/chat-widget"

const SITE_URL = "https://www.lsl.co.ke"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Lsl - Bridge from traditional software to intelligent systems",
    template: "%s | Lsl",
  },
  description:
    "Kenya-native, globally oriented AI consulting, integration, and product-development company. We bridge the gap from traditional software to intelligent systems, helping businesses across 14+ industries transform operations through AI integration, co-development, and innovation.",
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
    title: "Lsl - Bridge from traditional software to intelligent systems",
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
    title: "Lsl - Bridge from traditional software to intelligent systems",
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
      logo: new URL("/lsl-logo.png", SITE_URL).toString(),
      description: "Kenya-native, globally oriented AI consulting, integration, and product-development company. We bridge the gap from traditional software to intelligent systems, helping businesses across 14+ industries transform operations through AI integration, co-development, and innovation.",
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
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        <Suspense>
          {children}
          <Analytics />
          <ChatWidget />
        </Suspense>
      </body>
    </html>
  )
}
