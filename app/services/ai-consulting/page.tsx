import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

const valueCards = [
  {
    title: "AI Readiness Roadmaps",
    description: "Identify high-impact use cases with ROI, risk, and compliance mapped.",
  },
  {
    title: "Domain Models & Evaluations",
    description: "Build and tune models with accuracy, fairness, and interpretability; evaluate continuously.",
  },
  {
    title: "Seamless Integration",
    description: "Augment ERPs, CRMs, and proprietary systems via modular services—no rip-and-replace.",
  },
  {
    title: "Agentic Automation",
    description: "Document intake, fraud/compliance monitoring, and support bots that reduce cycle times and errors.",
  },
  {
    title: "Change & Training",
    description: "Playbooks and enablement so adoption sticks beyond the pilot.",
  },
]

const deploymentOptions = [
  {
    title: "Cloud API",
    description: "Fastest path to value for non-sensitive workloads and spiky demand.",
  },
  {
    title: "On-Prem",
    description: "Control, sovereignty, and cost predictability at scale; ideal for sensitive data and steady, high volume.",
  },
  {
    title: "Hybrid",
    description: "Sensitive tasks locally, burst and advanced use in cloud; best of both worlds.",
  },
]

const deploymentComparisons = [
  {
    category: "Time-to-Value",
    values: ["Days to weeks", "Weeks to months", "Weeks with phased rollout"],
  },
  {
    category: "Cost Predictability",
    values: ["Variable pay-per-use", "High predictability, capital aligned", "Blended: predictable core + elastic burst"],
  },
  {
    category: "Data Control",
    values: ["Vendor-managed", "Fully within your perimeter", "Sensitive data local, insights shared"],
  },
  {
    category: "Compliance",
    values: ["Shared responsibility", "Aligns with internal audit and regulators", "Targeted per workload"],
  },
  {
    category: "Performance at Scale",
    values: ["Elastic with usage", "High once provisioned", "Scale core locally, burst to cloud"],
  },
]

const deliverySteps = [
  {
    step: "Discover",
    detail: "Goals, KPIs, risks.",
    outcome: "Outcome: prioritized roadmap.",
  },
  {
    step: "Design",
    detail: "Architecture, data contracts, success metrics.",
    outcome: "Outcome: cost-/compliance-balanced blueprint.",
  },
  {
    step: "Build",
    detail: "Models, services, evaluators.",
    outcome: "Outcome: early value with quality signals.",
  },
  {
    step: "Integrate",
    detail: "Feature flags, blue/green, observability.",
    outcome: "Outcome: safe rollout without downtime.",
  },
  {
    step: "Adopt",
    detail: "Training, handover, SLAs.",
    outcome: "Outcome: measurable ROI and sustained usage.",
  },
]

const governanceItems = [
  "Access & Identity: SSO, RBAC/ABAC, least-privilege enforced.",
  "Data Controls: Residency, masking, retention, audit trails.",
  "AI Safety: Guardrails, red-teaming, bias/toxicity checks with human-in-the-loop where required.",
  "Regulatory Fit: Kenya DPA, GDPR principles, sector readiness for healthcare, finance, and public sector.",
]

const outcomes = [
  "Lower cost and predictability via automation plus the right deployment economics.",
  "Faster, smarter decisions grounded in your data, not demos.",
  "Freedom from lock-in with flexible architectures across API, local, and hybrid.",
  "Compliance by design with auditability and controls built in.",
]

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="inline-flex">
                AI Consulting & Integration
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">AI Consulting & Integration</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                We integrate AI into the systems you already trust—automating work, accelerating decisions, and keeping governance tight. Cloud APIs when speed matters; on-prem or hybrid when control and cost predictability win.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground">The Enterprise Challenge</h2>
              <p>
                Legacy keeps the lights on but slows change. Pure API-only AI can be fast but risks lock-in, unpredictable spend, and data governance gaps.
              </p>
              <p>
                The answer is intelligence embedded into your existing stack with the right deployment model for your risk, cost, and compliance profile.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
              <p className="text-lg text-muted-foreground">
                Move from exploration to outcomes with AI that fits your operations, risk posture, and data estate.
              </p>
            </div>
            <div className="max-w-5xl mx-auto space-y-6">
              {valueCards.map((card) => (
                <div key={card.title} className="rounded-2xl border bg-background p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12 text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Deployment Choices</h2>
                <p className="text-lg text-muted-foreground">
                  Cloud API | On-Prem | Hybrid—pick the deployment that balances time-to-value, control, and cost.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3 mb-10">
                {deploymentOptions.map((option) => (
                  <Card key={option.title} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{option.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border">
                <table className="w-full text-sm md:text-base">
                  <thead className="bg-muted/60">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Decision Lens</th>
                      {deploymentOptions.map((option) => (
                        <th key={option.title} className="px-4 py-3 text-left font-semibold text-foreground">
                          {option.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {deploymentComparisons.map((row) => (
                      <tr key={row.category} className="border-t bg-background">
                        <td className="px-4 py-3 font-medium text-foreground">{row.category}</td>
                        {row.values.map((value, index) => (
                          <td key={index} className="px-4 py-3 text-muted-foreground align-top">{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Delivery Approach</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  From first workshop to scaled adoption, each stage balances value, compliance, and change management.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-5">
                {deliverySteps.map((step, index) => (
                  <div key={step.step} className="text-center md:text-left space-y-4">
                    <div className="mx-auto md:mx-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-500/70 bg-white text-indigo-600 font-semibold">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{step.step}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.detail}</p>
                      <p className="text-sm font-medium text-foreground">{step.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Governance, Security & Compliance</h2>
              <ul className="space-y-4 text-base text-muted-foreground leading-relaxed">
                {governanceItems.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-10 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Outcomes You Can Expect</h2>
                <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed text-left md:text-center">
                  {outcomes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 md:justify-center">
                      <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-base text-muted-foreground">
                Need AI-ready platforms?
                <Link href="/services/software-development" className="ml-2 font-semibold text-indigo-600 hover:underline">
                  Enterprise Software & Digital Platforms
                </Link>
              </p>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">See where AI pays off first.</p>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Talk to an AI Architect
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
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
