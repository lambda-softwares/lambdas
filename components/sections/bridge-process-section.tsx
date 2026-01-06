import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Database, ArrowLeftRight, Brain, CheckCircle2 } from "lucide-react"

const processSteps = [
  {
    stage: "Traditional System",
    icon: Database,
    description: "Your current state: legacy systems, manual workflows, siloed data, slow decisions.",
    features: [
      "Existing ERP/CRM systems",
      "Manual processes",
      "Siloed data sources",
      "Limited automation",
    ],
    color: "from-gray-400 to-gray-500",
  },
  {
    stage: "The Bridge",
    icon: ArrowLeftRight,
    description: "Lsl integration layer: seamless connection, intelligent APIs, zero disruption.",
    features: [
      "API-first integration",
      "Microservices architecture",
      "Zero-disruption deployment",
      "Incremental enhancement",
    ],
    color: "from-[#324038] to-[#795953]",
  },
  {
    stage: "Intelligent System",
    icon: Brain,
    description: "Your future state: AI-powered automation, real-time insights, intelligent decisions.",
    features: [
      "AI-powered automation",
      "Real-time analytics",
      "Predictive insights",
      "Intelligent decision-making",
    ],
    color: "from-[#324038] to-blue-500",
  },
]

const timeline = [
  { week: "Weeks 1-2", milestone: "Assessment & Strategy", description: "Understand your systems, identify opportunities, design bridge architecture" },
  { week: "Weeks 3-4", milestone: "Quick Win Deployment", description: "Deploy first intelligent capability, demonstrate value, gather feedback" },
  { week: "Weeks 5-8", milestone: "Core Integration", description: "Build bridge layer, connect systems, enable AI capabilities" },
  { week: "Weeks 9-12", milestone: "Scale & Optimize", description: "Expand intelligent features, optimize performance, train teams" },
]

export function BridgeProcessSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[1.75rem] md:text-[2.125rem] font-semibold text-balance mb-4 leading-[1.21] tracking-[-0.01em]">
              How the Bridge Works
            </h2>
            <p className="text-[1.25rem] leading-[1.25] text-muted-foreground text-pretty max-w-3xl mx-auto">
              A visual journey from traditional systems to intelligent platforms—showing exactly how we bridge the gap.
            </p>
          </div>

          {/* Process Visualization */}
          <div className="mb-16">
            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-gray-400 via-[#324038] to-blue-500 -translate-y-1/2 z-0" />
              
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative z-10">
                    <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#324038]/30">
                      <CardHeader>
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-[1.375rem] leading-[1.27] tracking-[-0.01em] font-semibold mb-2">
                          {step.stage}
                        </CardTitle>
                        <CardDescription className="text-[1.0625rem] leading-[1.29]">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {step.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-[0.9375rem] text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-[#324038] mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    {/* Arrow between steps */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:flex absolute top-1/2 -right-3 z-20 items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-background border-2 border-[#324038] flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-[#324038]" />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline */}
          <Card className="border-2 border-[#324038]/20">
            <CardHeader>
              <CardTitle className="text-[1.5rem] leading-[1.25] tracking-[-0.01em] font-semibold text-center">
                Typical Transformation Timeline
              </CardTitle>
              <CardDescription className="text-center">
                Quick wins in weeks, full transformation in months—not years
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {index < timeline.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-[#324038] to-transparent z-0" />
                    )}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#324038] text-white flex items-center justify-center text-[0.875rem] font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="text-[0.875rem] font-semibold text-[#324038]">{item.week}</div>
                      </div>
                      <h4 className="font-semibold mb-2 text-[1.0625rem]">{item.milestone}</h4>
                      <p className="text-[0.9375rem] text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Principles */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-[#324038]/20">
              <CardContent className="pt-6 text-center">
                <div className="text-[2rem] font-bold text-[#324038] mb-2">0%</div>
                <p className="text-[0.9375rem] text-muted-foreground">Disruption</p>
                <p className="text-[0.875rem] text-muted-foreground mt-2">Operations continue uninterrupted</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#324038]/20">
              <CardContent className="pt-6 text-center">
                <div className="text-[2rem] font-bold text-[#324038] mb-2">100%</div>
                <p className="text-[0.9375rem] text-muted-foreground">System Preservation</p>
                <p className="text-[0.875rem] text-muted-foreground mt-2">All existing systems maintained</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#324038]/20">
              <CardContent className="pt-6 text-center">
                <div className="text-[2rem] font-bold text-[#324038] mb-2">3-6</div>
                <p className="text-[0.9375rem] text-muted-foreground">Months</p>
                <p className="text-[0.875rem] text-muted-foreground mt-2">To full transformation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

