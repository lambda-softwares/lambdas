import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, AlertCircle, CheckCircle2, Clock, Shield, DollarSign } from "lucide-react"

const objections = [
  {
    icon: AlertCircle,
    question: "Won't this disrupt our operations?",
    answer: "Zero-disruption integration. We work alongside your existing systems, deploying AI capabilities incrementally. Your operations continue uninterrupted while intelligence is added layer by layer.",
    highlight: "No downtime. No training delays. No business interruption.",
  },
  {
    icon: DollarSign,
    question: "What about our existing investments?",
    answer: "We amplify, not replace. Your ERP, CRM, and proprietary systems stay exactly as they are—we enhance them with intelligent APIs and microservices. Protect your investment while gaining AI capabilities.",
    highlight: "100% of your existing systems preserved and enhanced.",
  },
  {
    icon: Clock,
    question: "How long does transformation take?",
    answer: "Quick wins in weeks, full transformation in months. We start with high-impact use cases that deliver ROI fast, then scale systematically. Most clients see measurable results within 30-60 days.",
    highlight: "First results in 30-60 days. Full transformation in 3-6 months.",
  },
  {
    icon: Shield,
    question: "What about security and compliance?",
    answer: "Built-in from day one. Every integration includes governance, audit trails, and risk controls. We're compliant with Kenya's Data Protection Act, GDPR principles, and industry-specific regulations.",
    highlight: "Security and compliance baked into every solution.",
  },
]

export function ObjectionsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[1.75rem] md:text-[2.125rem] font-semibold text-balance mb-4 leading-[1.21] tracking-[-0.01em]">
              Common Concerns, Clear Answers
            </h2>
            <p className="text-[1.25rem] leading-[1.25] text-muted-foreground text-pretty max-w-3xl mx-auto">
              We address your concerns upfront because transparency builds trust. Here's how we handle the questions that matter most.
            </p>
          </div>

          {/* Objections Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {objections.map((objection, index) => {
              const Icon = objection.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#324038]/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#324038]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#324038]/20 transition-colors">
                        <Icon className="h-6 w-6 text-[#324038]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-[1.25rem] leading-[1.25] tracking-[-0.01em] font-semibold mb-2">
                          {objection.question}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[1.0625rem] leading-[1.29] mb-4">
                      {objection.answer}
                    </CardDescription>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[#324038]/5 border border-[#324038]/10">
                      <CheckCircle2 className="h-4 w-4 text-[#324038] mt-0.5 flex-shrink-0" />
                      <p className="text-[0.9375rem] font-medium text-[#324038]">
                        {objection.highlight}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Trust Signals */}
          <Card className="bg-gradient-to-r from-[#324038]/5 to-[#795953]/5 border-2 border-[#324038]/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-[2rem] font-bold text-[#324038] mb-2">0%</div>
                  <p className="text-[0.9375rem] text-muted-foreground">Disruption Rate</p>
                </div>
                <div>
                  <div className="text-[2rem] font-bold text-[#324038] mb-2">100%</div>
                  <p className="text-[0.9375rem] text-muted-foreground">System Preservation</p>
                </div>
                <div>
                  <div className="text-[2rem] font-bold text-[#324038] mb-2">30-60</div>
                  <p className="text-[0.9375rem] text-muted-foreground">Days to First Results</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-[1.0625rem] text-muted-foreground mb-6">
              Still have questions? Let's discuss your specific situation.
            </p>
            <Button asChild size="lg" className="bg-[#324038] hover:bg-[#3d4f45]">
              <Link href="/contact">
                See How We Do It Risk-Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

