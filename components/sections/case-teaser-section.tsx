import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const cases = [
  {
    title: "Legal: Statutory timelines & drafting copilot",
    description: "Reduced drafting time by 60% with AI-powered legal research and document generation.",
    href: "/solutions",
  },
  {
    title: "Agri: Yield forecasting from drone+IoT",
    description: "Improved forecast accuracy by 18% using computer vision and sensor data analysis.",
    href: "/solutions",
  },
  {
    title: "Finance: Real-time fraud scoring",
    description: "Prevented $2M+ in fraudulent transactions with ML-powered risk assessment.",
    href: "/solutions",
  },
]

export function CaseTeaserSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">What success looks like</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Real outcomes from our AI integration and development projects across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cases.map((caseItem, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">{caseItem.description}</CardDescription>
                  <Link
                    href={caseItem.href}
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Explore solutions
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/solutions">
                View all solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
