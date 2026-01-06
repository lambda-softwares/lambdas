import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeftRight } from "lucide-react"

const cases = [
  {
    before: "Manual legal research and drafting",
    after: "AI-powered copilot with real-time research",
    title: "Legal: Statutory timelines & drafting copilot",
    description: "Reduced drafting time by 60% with AI-powered legal research and document generation.",
    bridgeMethod: "Integrated AI layer into existing legal management system without disruption",
    metrics: "60% time reduction, 0% disruption",
    href: "/solutions",
  },
  {
    before: "Manual yield estimation from spreadsheets",
    after: "Real-time forecasting from drone and IoT data",
    title: "Agri: Yield forecasting from drone+IoT",
    description: "Improved forecast accuracy by 18% using computer vision and sensor data analysis.",
    bridgeMethod: "Bridged existing farm management system with intelligent analytics layer",
    metrics: "18% accuracy improvement, weeks to deploy",
    href: "/solutions",
  },
  {
    before: "Rule-based fraud detection with delays",
    after: "Real-time ML-powered risk scoring",
    title: "Finance: Real-time fraud scoring",
    description: "Prevented $2M+ in fraudulent transactions with ML-powered risk assessment.",
    bridgeMethod: "Enhanced existing payment system with intelligent fraud detection APIs",
    metrics: "$2M+ prevented, zero false positives",
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
              Real outcomes from enterprises that chose the bridge approach—transformation without disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cases.map((caseItem, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#324038]/30">
                <CardHeader>
                  {/* Before → After Indicator */}
                  <div className="mb-4 p-3 rounded-lg bg-muted/50 border border-border/50">
                    <div className="flex items-center justify-between gap-2 text-[0.875rem]">
                      <div className="flex-1">
                        <div className="text-[0.75rem] text-muted-foreground mb-1">Before</div>
                        <div className="font-medium text-foreground line-through opacity-60">{caseItem.before}</div>
                      </div>
                      <ArrowLeftRight className="h-4 w-4 text-[#324038] flex-shrink-0" />
                      <div className="flex-1 text-right">
                        <div className="text-[0.75rem] text-muted-foreground mb-1">After</div>
                        <div className="font-medium text-[#324038]">{caseItem.after}</div>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-[1.0625rem] leading-[1.29] font-semibold mb-2">{caseItem.title}</CardTitle>
                  <CardDescription className="text-[1.0625rem] leading-[1.29] mb-3">{caseItem.description}</CardDescription>
                  
                  {/* Bridge Method Callout */}
                  <div className="p-3 rounded-lg bg-[#324038]/5 border border-[#324038]/10 mb-3">
                    <div className="flex items-start gap-2">
                      <ArrowLeftRight className="h-4 w-4 text-[#324038] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-[0.75rem] font-semibold text-[#324038] mb-1">Bridge Method</div>
                        <div className="text-[0.875rem] text-muted-foreground">{caseItem.bridgeMethod}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="text-[0.875rem] font-medium text-[#324038]">
                    {caseItem.metrics}
                  </div>
                </CardHeader>
                <CardContent>
                  <Link
                    href={caseItem.href}
                    className="inline-flex items-center text-[0.9375rem] leading-[1.33] font-semibold text-[#324038] hover:text-[#3d4f45] transition-colors"
                  >
                    See How We Bridge Systems
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-[#324038] hover:bg-[#3d4f45]">
              <Link href="/solutions">
                View All Transformation Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
