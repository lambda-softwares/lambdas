import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Lightbulb, Code, Rocket, Users, TrendingUp } from "lucide-react"

const approachSteps = [
  {
    step: "Discovery & AI Readiness Assessment",
    icon: Search,
    description: "Map operational pain points, data maturity, and system architecture",
    details: "We identify high-impact use cases, assess your current systems, and create a prioritized roadmap with ROI, risk, and compliance considerations.",
  },
  {
    step: "Co-Design & Prototyping",
    icon: Lightbulb,
    description: "Domain experts and AI engineers collaborate on a focused, high-impact prototype",
    details: "Your industry experts work alongside our AI engineers to design solutions that solve real problems. We validate concepts quickly with working prototypes.",
  },
  {
    step: "Development & Integration",
    icon: Code,
    description: "Embed AI into existing systems using APIs and microservices",
    details: "We build intelligent capabilities and integrate them seamlessly into your existing ERPs, CRMs, and proprietary systems—no rip-and-replace required.",
  },
  {
    step: "Deployment & Governance Setup",
    icon: Rocket,
    description: "Risk controls, documentation, compliance alignment, and audit layers",
    details: "Every rollout includes governance frameworks, audit trails, compliance controls, and security measures aligned with Kenya's Data Protection Act and GDPR principles.",
  },
  {
    step: "Team Training & Change Management",
    icon: Users,
    description: "Ensure your teams can fully leverage the intelligent system",
    details: "We provide comprehensive training, playbooks, and enablement programs so your teams can adopt and maximize the value of your new intelligent systems.",
  },
  {
    step: "Continuous Optimization",
    icon: TrendingUp,
    description: "Monitor performance and iterate to improve accuracy, uptime, and ROI",
    details: "We track performance metrics, optimize models, and iterate continuously to improve accuracy, reduce costs, and maximize your return on investment.",
  },
]

export function ApproachSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[1.75rem] md:text-[2.125rem] font-semibold text-balance mb-4 leading-[1.21] tracking-[-0.01em]">
              Our Approach
            </h2>
            <p className="text-[1.25rem] leading-[1.25] text-muted-foreground text-pretty max-w-3xl mx-auto">
              A proven six-step process that takes you from discovery to continuous optimization—ensuring measurable outcomes at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approachSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#324038]/30 relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#324038] text-white flex items-center justify-center text-[0.875rem] font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <CardHeader className="pt-8">
                    <div className="w-14 h-14 rounded-xl bg-[#324038]/10 flex items-center justify-center mb-4 group-hover:bg-[#324038]/20 transition-colors">
                      <Icon className="h-7 w-7 text-[#324038]" />
                    </div>
                    <CardTitle className="text-[1.25rem] leading-[1.25] tracking-[-0.01em] font-semibold mb-2">
                      {step.step}
                    </CardTitle>
                    <CardDescription className="text-[1.0625rem] leading-[1.29] font-medium text-[#324038]">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground">
                      {step.details}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-[#324038]/5 to-[#795953]/5 border-2 border-[#324038]/20">
              <CardContent className="pt-6">
                <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                  From first workshop to scaled adoption, each stage balances value, compliance, and change management. 
                  <span className="font-semibold text-foreground"> No broken handovers. No vendor fragmentation.</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

