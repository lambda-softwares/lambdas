import Head from "next/head"

interface SeoHeadProps {
  title?: string
  description?: string
  ogImage?: string
  canonical?: string
  jsonLd?: object
}

export function SeoHead({
  title = "Lsl - From software to intelligent systems",
  description = "We integrate AI into existing systems, build domain-specific AI products, and ship consumer apps.",
  ogImage = "/og/og-default.png",
  canonical,
  jsonLd,
}: SeoHeadProps) {
  const fullTitle = title.includes("Lsl") ? title : `${title} | Lsl`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://www.lsl.co.ke${ogImage}`} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.lsl.co.ke${ogImage}`} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* JSON-LD */}
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </Head>
  )
}
