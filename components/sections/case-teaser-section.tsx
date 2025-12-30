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
            <h2 className="text-[1.75rem] md:text-[2.125rem] font-semibold text-balance mb-4 leading-[1.21] tracking-[-0.01em]">What success looks like</h2>
            <p className="text-[1.25rem] leading-[1.25] text-muted-foreground text-pretty max-w-2xl mx-auto">
              Real outcomes from our AI integration and development projects across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cases.map((caseItem, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[1.0625rem] leading-[1.29] font-semibold">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[1.0625rem] leading-[1.29] mb-4">{caseItem.description}</CardDescription>
                  <Link
                    href={caseItem.href}
                    className="inline-flex items-center text-[0.9375rem] leading-[1.33] font-semibold text-[#324038] hover:text-[#3d4f45] transition-colors"
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
