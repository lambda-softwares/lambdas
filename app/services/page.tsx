import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Code, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Consulting & Integration",
    description:
      "Move from traditional IT to intelligent enterprise—safely, quickly, using what you already run.",
    href: "/services/ai-consulting",
    features: [
      "AI Readiness Roadmaps (ROI, risk, governance)",
      "Domain Models & Evaluations (accuracy, fairness, interpretability)",
      "System Integration (ERPs/CRMs/proprietary stacks without disruption)",
      "Agentic Automation (documents, compliance, fraud, support)",
      "Change & Training (enablement, playbooks, adoption)",
    ],
  },
  {
    icon: Code,
    title: "Enterprise Software & Digital Platforms",
    description:
      "Secure, scalable platforms that power operations today and connect seamlessly to AI tomorrow.",
    href: "/services/software-development",
    features: [
      "Web & Mobile Applications (engagement, growth)",
      "Custom Enterprise Systems (built around your workflows)",
      "Cloud-Native & Hybrid Platforms (resilience, observability, cost control)",
      "Security & Compliance (governance, privacy by design)",
      "DevOps & CI/CD (faster, safer releases)",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                Enterprise Services for the Intelligent Era
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                From legacy systems to intelligent enterprise, we modernize safely, integrate AI where it matters, and build platforms that scale—designed for security, compliance, and measurable ROI.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <div className="rounded-3xl border bg-muted/40 p-8 lg:p-10 text-left md:text-center space-y-6">
                <h2 className="text-2xl font-semibold">Who We Serve</h2>
                <div className="space-y-3 text-muted-foreground text-lg">
                  <p>Enterprises and public institutions with significant data, compliance mandates, and complex workflows.</p>
                  <p>Teams exploring AI pilots or production integrations—including on-prem and hybrid deployments for data-sensitive environments.</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-6">
                      <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-indigo-600" />
                      </div>
                      <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">How We Help:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="max-w-5xl mx-auto mt-20">
              <h2 className="text-3xl font-bold text-center mb-8">Why Lsl</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
                {[
                  "Africa-born, enterprise-ready: Local realities, global standards.",
                  "AI without disruption: Augment systems, don't rip-and-replace.",
                  "Governance & auditability: Compliance built in.",
                  "Cost-aware choices: Cloud APIs when speed matters; on-prem when control counts.",
                ].map((item, index) => (
                  <div key={index} className="rounded-2xl border bg-background p-6 shadow-sm">
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto mt-20">
              <h2 className="text-3xl font-bold text-center mb-10">Proof Snapshots</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    label: "Legal",
                    result: "Drafting time ↓ 60% via research/drafting copilot.",
                  },
                  {
                    label: "Agri",
                    result: "Yield forecast accuracy ↑ 18% (drone + IoT fusion).",
                  },
                  {
                    label: "Finance",
                    result: "$2M+ fraud blocked with real-time scoring.",
                  },
                ].map((proof, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{proof.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{proof.result}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground mb-6">Ready to modernize?</p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Talk to an AI Architect
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
