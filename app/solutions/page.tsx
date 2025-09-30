import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Scale,
  Wheat,
  Heart,
  DollarSign,
  GraduationCap,
  Factory,
  ShoppingCart,
  Truck,
  Zap,
  Wifi,
  Building,
  Film,
  Home,
  MapPin,
} from "lucide-react"

const sectors = [
  {
    icon: Scale,
    title: "Legal ",
    description: "Research copilots, drafting, statutory timelines, compliance monitoring",
    href: "/solutions/legal-tech",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Drone analytics, soil health, pest detection, supply chain optimization",
    href: "/solutions/agritech",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "AI triage, predictive analytics, imaging diagnostics, digital health assistants",
    href: "/solutions/healthcare",
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Credit scoring, fraud detection, robo-advisory, market sentiment analysis",
    href: "/solutions/finance",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Adaptive learning, AI grading, career guidance, virtual classrooms",
    href: "/solutions/education",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Predictive maintenance, digital twins, quality control, supply forecasting",
    href: "/solutions/manufacturing",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    description: "Recommendation engines, dynamic pricing, inventory forecasting, fraud prevention",
    href: "/solutions/retail",
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    description: "Route optimization, predictive maintenance, autonomous delivery, traffic management",
    href: "/solutions/transport-logistics",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Smart grid forecasting, renewable analytics, fault detection, ESG compliance",
    href: "/solutions/energy-utilities",
  },
  {
    icon: Wifi,
    title: "Telecom & ICT",
    description: "Fraud prevention, churn prediction, intelligent customer service, network planning",
    href: "/solutions/telecom-ict",
  },
  {
    icon: Building,
    title: "Public Sector",
    description: "Citizen service bots, predictive crime analysis, policy assessment, e-governance",
    href: "/solutions/public-sector",
  },
  {
    icon: Film,
    title: "Media & Entertainment",
    description: "Content recommendations, automated subtitling, deepfake detection, AI art generation",
    href: "/solutions/media-entertainment",
  },
  {
    icon: Home,
    title: "Real Estate & Construction",
    description: "Property valuation, AI project costing, smart building optimization, safety monitoring",
    href: "/solutions/real-estate-construction",
  },
  {
    icon: MapPin,
    title: "Tourism & Hospitality",
    description: "AI travel planners, dynamic pricing, virtual concierges, sentiment analysis",
    href: "/solutions/tourism-hospitality",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">
                  Industry Solutions
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">AI That Understands Your Domain</h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                  Generic AI isn’t enough. That’s why we partner with domain experts to co-develop solutions that are
                  context-aware, compliant, and genuinely impactful.
                </p>
                <div className="mt-8 flex justify-center">
                  <span className="inline-flex rounded-full bg-indigo-50/80 px-6 py-2 text-base font-semibold text-indigo-700 shadow-sm">
                    Wherever you work, we bring AI that understands your world.
                  </span>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 bg-muted/30 border border-border/70 rounded-2xl p-8 mb-16">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Why generic AI fails</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Most models don’t understand your rules, workflows, or compliance risks, leading to costly mistakes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our co-creation approach</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We co-build with industry experts, validate against real use cases, and bake governance into every
                    release.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">The result</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AI that solves actual problems delivered production-ready, compliant, and adoption-friendly.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sectors.map((sector, index) => {
                  const Icon = sector.icon
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                          <Icon className="h-6 w-6 text-indigo-600" />
                        </div>
                        <CardTitle className="text-lg leading-tight">{sector.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">{sector.description}</CardDescription>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="text-center mt-16">
                <p className="text-lg text-muted-foreground mb-6">
                  Don't see your industry? We work across all sectors to solve unique challenges.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-lg font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  Discuss your industry needs →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
