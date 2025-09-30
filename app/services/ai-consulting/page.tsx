import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, Target, Cog, Zap } from "lucide-react"

const capabilities = [
  {
    title: "AI Readiness Assessments",
    description:
      "A structured audit of your digital maturity covering infrastructure, data governance, staff capabilities, and compliance readiness. We produce a roadmap that pinpoints where AI can add the most value and how to deploy it with minimal disruption.",
  },
  {
    title: "Custom AI Models",
    description:
      "Domain-specific models engineered to solve real problems: credit risk scoring for financial institutions, yield prediction and disease detection for agriculture, litigation timeline forecasting for legal practice. Every model is tuned for accuracy, fairness, and interpretability.",
  },
  {
    title: "Seamless System Integration",
    description:
      "Embedded intelligence without the replatforming headache. We integrate AI into legacy systems, ERPs, CRMs, and proprietary software through APIs, microservices, and modular components—preserving your existing investments while enhancing them.",
  },
  {
    title: "Process Automation",
    description:
      "AI-powered agents that take on repetitive and complex tasks such as document classification, customer support, fraud detection, and regulatory monitoring—freeing your teams for higher-value work.",
  },
  {
    title: "Change Management & Training",
    description:
      "Beyond the build, we arm your teams with playbooks, enablement, and hands-on training so AI-driven processes are adopted smoothly and sustained for the long term.",
  },
]

const deliverySteps = [
  {
    step: "Discover",
    blurb: "Define business goals, map constraints, and align on measurable KPIs.",
  },
  {
    step: "Design",
    blurb: "Architect the solution, define data contracts, and set success metrics.",
  },
  {
    step: "Build",
    blurb: "Develop models, services, evaluators, and dashboards—tested against real data.",
  },
  {
    step: "Integrate",
    blurb: "Deploy safely using feature flags, blue/green rollouts, and full observability.",
  },
  {
    step: "Adopt",
    blurb: "Train teams, hand over playbooks, and define SLAs for long-term success.",
  },
]

const outcomes = [
  {
    icon: Target,
    title: "Cost reduction via automation",
    description: "Eliminate manual processes and reduce operational overhead",
  },
  {
    icon: Zap,
    title: "Faster, smarter decisions",
    description: "Real-time insights and predictive analytics for competitive advantage",
  },
  {
    icon: Cog,
    title: "Compliance-by-design and future-proofing",
    description: "Built-in governance and scalable architecture for long-term success",
  },
]

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                AI Consulting & Integration
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                From traditional IT to an Intelligent, Impactful enterprise
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mt-6">
                At Lsl, we help organizations evolve their technology from static infrastructure into dynamic,
                insight-driven systems. By integrating AI into your existing stack, we transform workflows, unlock
                intelligence, and deliver measurable impact without forcing costly rip-and-replace. Your systems stay
                familiar; the outcomes accelerate and compound.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose AI Integration */}
        <section className="py-16">
          <div className="container">
            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl border border-indigo-100/60 bg-gradient-to-br from-white via-indigo-50/40 to-slate-50 shadow-lg">
              <span className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl" />
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-indigo-100/60">
                <div className="p-10 md:p-12">
                  <span className="mb-4 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                    The Challenge
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">IT built for yesterday’s problems</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Manual workflows, siloed data, and slow decision cycles make it hard to move at the speed customers
                    expect. Legacy systems weren’t designed with intelligence in mind.
                  </p>
                </div>
                <div className="p-10 md:p-12 bg-white/70">
                  <span className="mb-4 inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold text-indigo-600">
                    Our Promise
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Systems that become teammates</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We embed AI into what you already run,automating routine work, unlocking insights, and elevating
                    customer experience. Your stack evolves without costly rip-and-replace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What we do</h2>
              <p className="text-lg text-muted-foreground text-center mb-10">
                We turn AI from a buzzword into business value—embedding it where it creates measurable impact.
              </p>
              <div className="space-y-6">
                {capabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Approach */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Our delivery approach</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  From strategy to adoption, we guide you through a proven path that delivers AI safely and at speed.
                </p>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute top-16 left-12 right-12 h-0.5 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-100" />

                <div className="grid gap-10 md:grid-cols-5">
                  {deliverySteps.map((step, index) => (
                    <div key={step.step} className="relative flex flex-col items-center text-center md:text-left">
                      <div className="relative z-10 flex items-center md:flex-col md:items-start md:gap-4 gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-500/70 bg-white text-indigo-600 shadow-md font-semibold">
                          {(index + 1).toString().padStart(2, "0")}
                        </div>
                        <div className="max-w-xs md:max-w-none">
                          <h3 className="text-xl font-semibold md:text-left">{step.step}</h3>
                          <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed md:text-left">
                            {step.blurb}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Outcomes you can expect</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {outcomes.map((outcome, index) => {
                  const Icon = outcome.icon
                  return (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-indigo-600" />
                        </div>
                        <CardTitle className="text-xl">{outcome.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">{outcome.description}</CardDescription>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
