import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Smartphone, Building2, CloudCog, ShieldCheck, Cpu } from "lucide-react"

const deliverables = [
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description:
      "High-performing apps that engage users, open new channels, and are ready for search, recommendations, or assistants.",
  },
  {
    icon: Building2,
    title: "Enterprise Systems That Fit You",
    description:
      "Platforms that mirror your workflows end-to-end to eliminate inefficiencies and reduce costs across the business.",
  },
  {
    icon: CloudCog,
    title: "Cloud-Native & Hybrid Platforms",
    description:
      "Resilient, observable, and cost-efficient foundations that deploy in cloud, on-prem, or both as policy demands.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant by Design",
    description:
      "Governance, audit trails, privacy protections, and access controls embedded from day one for regulated environments.",
  },
  {
    icon: Cpu,
    title: "AI-Ready Foundations",
    description:
      "Architecture and data pathways prepared to plug into AI consulting & integration effortlessly when timing is right.",
  },
]

const workSteps = [
  {
    step: "Discovery & Planning",
    detail: "Align KPIs, risks, compliance, and operating realities.",
    outcome: "Outcome: clear roadmap and feasible plan.",
  },
  {
    step: "Agile Delivery",
    detail: "Sprints, demos, and stakeholder feedback to keep momentum.",
    outcome: "Outcome: visible progress and faster time to value.",
  },
  {
    step: "Quality & Assurance",
    detail: "Functional, performance, security, and AI-integration tests.",
    outcome: "Outcome: production-grade reliability.",
  },
  {
    step: "Deployment & Support",
    detail: "Monitored rollouts, scaling, cost controls, and SLAs.",
    outcome: "Outcome: smooth go-live and predictable operations.",
  },
]

const assurances = [
  "Interoperability: Contract-first APIs that integrate with ERPs, CRMs, and EMRs.",
  "Residency & Sovereignty: Cloud, on-prem, or hybrid aligned to policy.",
  "SLOs & Documentation: Availability and latency targets with runbooks and handover.",
  "Cost Awareness: Guidance on when to keep infrastructure lean versus invest for scale.",
]

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="inline-flex">
                Enterprise Software & Platforms
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Enterprise Software, Built for Intelligence</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                We design and deliver secure, scalable platforms that power your operations today and connect seamlessly to AI when you're ready.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Talk to a Solutions Architect
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground">Why This Matters</h2>
              <p>
                Enterprises must modernize core systems while preparing for AI. We build AI-ready platforms across cloud-native and hybrid environments that respect data sovereignty, keep costs predictable, and make future AI integration straightforward.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What We Deliver</h2>
              <p className="text-lg text-muted-foreground">
                Outcomes-focused engineering that keeps your platforms resilient today and ready for intelligence tomorrow.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
              {deliverables.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="h-full text-left">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="max-w-4xl mx-auto text-center mt-12">
              <p className="text-base text-muted-foreground">
                Need AI strategy or integration?
                <Link href="/services/ai-consulting" className="ml-2 font-semibold text-indigo-600 hover:underline">
                  AI Consulting & Integration
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto text-center mb-10 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
              <p className="text-lg text-muted-foreground">
                Delivery designed for enterprise stakeholders with transparency, governance, and measurable progress at every step.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
              {workSteps.map((step, index) => (
                <div key={step.step} className="rounded-2xl border bg-background p-6 text-left shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-semibold">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{step.step}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{step.detail}</p>
                      <p className="text-sm font-medium text-foreground">{step.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Enterprise Assurances</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {assurances.map((assurance, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="pt-6">
                      <CardDescription className="text-base leading-relaxed text-foreground">{assurance}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Build a platform that's ready for intelligence.</h2>
              <p className="text-lg text-muted-foreground">
                Let's architect the foundations that keep today's operations strong and make tomorrow's AI deployments seamless.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Talk to a Solutions Architect
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-4 inset-x-4 z-40 md:hidden">
        <Button asChild size="lg" className="w-full shadow-lg">
          <Link href="/contact">Talk to an AI Architect</Link>
        </Button>
      </div>
      <Footer />
    </div>
  )
}
