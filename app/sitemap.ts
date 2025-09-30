import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lsl.co.ke"

  const routes = [
    "",
    "/about",
    "/services",
    "/services/ai-consulting",
    "/services/software-development",
    "/solutions",
    "/solutions/legal-tech",
    "/solutions/agritech",
    "/solutions/healthcare",
    "/solutions/finance",
    "/solutions/education",
    "/solutions/manufacturing",
    "/solutions/retail",
    "/solutions/transport-logistics",
    "/solutions/energy-utilities",
    "/solutions/telecom-ict",
    "/solutions/public-sector",
    "/solutions/media-entertainment",
    "/solutions/real-estate-construction",
    "/solutions/tourism-hospitality",
    "/products",
    "/contact",
    "/privacy",
    "/terms",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
