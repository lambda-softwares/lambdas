import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Building2, Smartphone } from "lucide-react"

const pillars = [
  {
    icon: Brain,
    title: "AI Consulting & Integration",
    description: "Transform traditional IT systems into intelligent, automated platforms. From readiness assessments to production deployment and team training.",
    href: "/services/ai-consulting",
  },
  {
    icon: Building2,
    title: "Industry-Specific Solutions",
    description: "Partnership-based co-development of AI solutions across 14+ sectors. Contextually accurate, compliant, and genuinely impactful.",
    href: "/solutions",
  },
  {
    icon: Smartphone,
    title: "Consumer Innovation Labs",
    description: "In-house apps that solve everyday problems while serving as testing grounds for enterprise AI technologies.",
    href: "/products",
  },
]

export function PillarsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[1.75rem] md:text-[2.125rem] font-semibold text-balance mb-4 leading-[1.21] tracking-[-0.01em]">Three ways we transform your business</h2>
            <p className="text-[1.25rem] leading-[1.25] text-muted-foreground text-pretty max-w-2xl mx-auto">
              From AI strategy to consumer products, we deliver measurable outcomes across every layer of your
              technology stack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <Card key={index} className="relative group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-[1.25rem] leading-[1.25] tracking-[-0.01em]">{pillar.title}</CardTitle>
                    <CardDescription className="text-[1.0625rem] leading-[1.29]">{pillar.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      <Link href={pillar.href}>Learn more →</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
