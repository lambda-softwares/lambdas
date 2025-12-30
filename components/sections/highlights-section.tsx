import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Globe2, Handshake, Puzzle, Rocket, ShieldCheck, Workflow } from "lucide-react"

const highlights = [
  {
    icon: Rocket,
    title: "End-to-End AI Expertise",
    description:
      "We take you from readiness to production. Strategy, model development, system integration, and team training all handled under one roof no vendor juggling, no broken handovers.",
  },
  {
    icon: Workflow,
    title: "Practical, Not Hype",
    description:
      "We build AI that works in the real world: document intake, fraud detection, compliance monitoring, and customer support automating what matters most to your bottom line.",
  },
  {
    icon: Puzzle,
    title: "Legacy-Friendly Integration",
    description:
      "Your existing systems aren’t obsolete. We amplify them with APIs and microservices so you gain intelligence without expensive rip-and-replace migrations.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant by Default",
    description:
      "Every build comes with governance, audit trails, and risk controls baked in. From Kenya’s Data Protection Act to GDPR principles, compliance is in our DNA.",
  },
  {
    icon: Handshake,
    title: "Partner, Not Vendor",
    description:
      "We co-create with your industry experts. You bring the domain knowledge, we bring the AI engineering together we deliver tools that actually solve your sector’s problems.",
  },
  {
    icon: Globe2,
    title: "Africa-Born, Globally Ready",
    description:
      "We’re rooted in Kenya’s innovation ecosystem but designed for global scale. Local realities understood, solutions built to world-class standards.",
  },
]

export function HighlightsSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(50,64,56,0.08),_transparent_55%)]" />
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 flex flex-col gap-6">
            <h2 className="text-[1.75rem] md:text-[2.125rem] font-semibold text-balance leading-[1.21] tracking-[-0.01em]">Why Enterprises Choose Lsl</h2>
            <p className="text-[1.25rem] leading-[1.25] text-muted-foreground text-pretty max-w-3xl mx-auto">
              At Lsl, we don't just deliver AI solutions, we deliver trust, transformation, and results. Here's why leading
              businesses and forward-looking organizations choose us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              const order = String(index + 1).padStart(2, "0")

              return (
                <Card
                  key={highlight.title}
                  className="group relative flex h-full flex-col overflow-hidden border border-border/60 bg-background/75 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#324038]/30 hover:shadow-[0_24px_55px_-25px_rgba(50,64,56,0.25)]"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#324038]/60 via-[#795953]/50 to-[#151515]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#324038]/10 text-[#324038] shadow-inner shadow-[#324038]/10">
                          <Icon className="h-7 w-7" aria-hidden="true" />
                        </span>
                        <CardTitle className="text-[1.25rem] leading-[1.25] tracking-[-0.01em]">{highlight.title}</CardTitle>
                      </div>
                      <span className="text-[1.75rem] leading-[1.21] font-semibold text-[#324038]/70">{order}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-[1.0625rem] leading-[1.29] text-left text-muted-foreground">
                      {highlight.description}
                    </CardDescription>
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
