import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2, XCircle, Zap, Shield, Puzzle } from "lucide-react"

const differentiators = [
  {
    icon: Puzzle,
    title: "We Don't Replace—We Bridge",
    description: "Your existing systems aren't obsolete. We amplify them with intelligent APIs and microservices, so you gain AI capabilities without expensive migrations.",
  },
  {
    icon: Zap,
    title: "No Disruption, No Vendor Lock-In",
    description: "Zero-disruption integration means your operations continue smoothly. Plus, you own your data and systems—no proprietary platforms required.",
  },
  {
    icon: Shield,
    title: "Security & Compliance Built-In",
    description: "Every integration comes with governance, audit trails, and risk controls baked in. From Kenya's Data Protection Act to GDPR, compliance is in our DNA.",
  },
]

const comparison = [
  {
    others: "Build systems from scratch and lock you in",
    lsl: "Supercharge existing systems for quick wins and ROI",
  },
  {
    others: "Build systems that ease day-to-day operations in the name of increasing efficiency",
    lsl: "Build systems that analyze huge amounts of data quickly to identify inefficiencies in the first place",
  },
  {
    others: "Months of disruption and system changeover processes",
    lsl: "Zero-disruption deployment alongside your operations",
  },
  {
    others: "High upfront costs with uncertain outcomes",
    lsl: "Quick wins in weeks, measurable ROI in months",
  },
]

export function ValuePropositionSection() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[1.5rem] md:text-[1.875rem] font-semibold text-balance mb-4 leading-[1.25] tracking-[-0.01em]">
              What Makes Lsl Different
            </h2>
            <p className="text-[1.125rem] leading-[1.5] text-muted-foreground text-pretty max-w-3xl mx-auto">
              While others replace, we bridge. While others disrupt, we integrate. While others lock you in, we set you free.
            </p>
          </div>

          {/* Differentiators */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#324038]/30">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-xl bg-[#324038]/10 flex items-center justify-center mb-4 group-hover:bg-[#324038]/20 transition-colors">
                      <Icon className="h-5 w-5 text-[#324038]" />
                    </div>
                    <CardTitle className="text-[1.125rem] leading-[1.33] tracking-[-0.01em] font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[1rem] leading-[1.5]">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Others vs lsl Comparison */}
          <Card className="mb-10 border-2 border-[#324038]/20">
            <CardHeader>
              <CardTitle className="text-[1.25rem] leading-[1.3] tracking-[-0.01em] font-semibold text-center">
                What Others Do vs. How We Do It
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Others */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <h3 className="text-[1rem] font-semibold">What Others Do</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {comparison.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-[1rem] text-muted-foreground">
                        <XCircle className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                        <span>{item.others}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* lsl */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="h-5 w-5 text-[#324038]" />
                    <h3 className="text-[1rem] font-semibold">How We Do It</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {comparison.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-[1rem] text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-[#324038] mt-1 flex-shrink-0" />
                        <span>{item.lsl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-[#324038]/5 to-[#795953]/5 rounded-2xl p-6 md:p-8 mb-10">
            <h3 className="text-[1.25rem] font-semibold text-center mb-6">
              Keep Your Existing Systems + Add AI Intelligence
            </h3>
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#324038] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Protect Your Investment</h4>
                  <p className="text-[0.9375rem] text-muted-foreground">
                    Your existing ERP, CRM, and proprietary systems continue to run—we enhance them, not replace them.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#324038] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Add Intelligence Layer</h4>
                  <p className="text-[0.9375rem] text-muted-foreground">
                    AI-powered automation, insights, and decision-making capabilities layered on top of your current stack.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#324038] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Zero Disruption</h4>
                  <p className="text-[0.9375rem] text-muted-foreground">
                    Integration happens alongside your operations. No downtime, no training delays, no business interruption.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#324038] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Own Your Future</h4>
                  <p className="text-[0.9375rem] text-muted-foreground">
                    No vendor lock-in. Your data stays yours. Your systems stay yours. You control your intelligent transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-[#324038] hover:bg-[#3d4f45]">
              <Link href="/contact">
                See How We Bridge Your Systems
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

