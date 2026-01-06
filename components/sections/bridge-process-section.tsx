import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, ArrowLeftRight, Brain, CheckCircle2, Zap, TrendingUp } from "lucide-react"

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
    bgColor: "bg-gray-50",
    borderColor: "border-gray-300",
  },
  {
    stage: "The Bridge",
    icon: ArrowLeftRight,
    description: "lsl integration layer: seamless connection, intelligent APIs, zero disruption.",
    features: [
      "API-first integration",
      "Microservices architecture",
      "Zero-disruption deployment",
      "Incremental enhancement",
    ],
    color: "from-[#324038] to-[#795953]",
    bgColor: "bg-gradient-to-br from-[#324038]/5 to-[#795953]/5",
    borderColor: "border-[#324038]/30",
    isHighlight: true,
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
    bgColor: "bg-gradient-to-br from-blue-50 to-[#324038]/5",
    borderColor: "border-[#324038]/30",
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
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#324038]/10 to-transparent" />
      </div>

      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[1.5rem] md:text-[1.875rem] font-semibold text-balance mb-4 leading-[1.25] tracking-[-0.01em]">
              How the Bridge Works
            </h2>
            <p className="text-[1.125rem] leading-[1.5] text-muted-foreground text-pretty max-w-3xl mx-auto">
              A visual journey from traditional systems to intelligent platforms—showing exactly how we bridge the gap.
            </p>
          </div>

          {/* Process Visualization - Architectural Diagram Style */}
          <div className="mb-12">
            <div className="relative">
              {/* Bridge Visual - Horizontal Flow */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
                {/* Bridge structure */}
                <div className="relative h-full">
                  {/* Bridge base */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-[#324038] to-[#324038] opacity-20 rounded-full" />
                  {/* Bridge supports */}
                  <div className="absolute left-1/3 top-0 w-1 h-full bg-[#324038] opacity-30" />
                  <div className="absolute right-1/3 top-0 w-1 h-full bg-[#324038] opacity-30" />
                  {/* Bridge deck */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#324038]/40 to-transparent rounded-full" />
                </div>
              </div>

              {/* Steps Grid */}
              <div className="grid md:grid-cols-3 gap-5 lg:gap-6 relative z-10">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  const isMiddle = index === 1
                  
                  return (
                    <div key={index} className="relative">
                      {/* Connection Arrow - Mobile */}
                      {index < processSteps.length - 1 && (
                        <div className="lg:hidden absolute top-1/2 -right-3 z-20 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-background border-2 border-[#324038] flex items-center justify-center shadow-lg">
                            <ArrowLeftRight className="h-4 w-4 text-[#324038]" />
                          </div>
                        </div>
                      )}

                      {/* Connection Arrow - Desktop */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 z-20 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-background border-3 border-[#324038] flex items-center justify-center shadow-xl">
                            <ArrowLeftRight className="h-5 w-5 text-[#324038]" />
                          </div>
                        </div>
                      )}

                      {/* Step Card */}
                      <div className={`relative h-full ${isMiddle ? 'lg:scale-105 lg:-translate-y-2' : ''}`}>
                        <Card className={`h-full group transition-all duration-500 border-2 ${step.borderColor} ${step.bgColor} hover:shadow-2xl hover:border-[#324038]/50 ${isMiddle ? 'ring-2 ring-[#324038]/20' : ''}`}>
                          {/* Card Header with Icon */}
                          <CardHeader className="relative pb-4">
                            {/* Icon Container */}
                            <div className={`relative mb-5 ${isMiddle ? 'mb-6' : ''}`}>
                              {/* Icon Background with Glow */}
                              <div className={`w-16 h-16 ${isMiddle ? 'w-20 h-20' : ''} rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 ${isMiddle ? 'ring-4 ring-[#324038]/30' : ''}`}>
                                <Icon className={`${isMiddle ? 'h-10 w-10' : 'h-8 w-8'} text-white`} />
                              </div>
                              
                              {/* Decorative Elements for Middle Card */}
                              {isMiddle && (
                                <>
                                  <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#324038]/20 animate-pulse" />
                                  <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-[#795953]/20 animate-pulse delay-300" />
                                </>
                              )}
                            </div>

                            <CardTitle className={`text-center ${isMiddle ? 'text-[1.25rem]' : 'text-[1.125rem]'} leading-[1.3] tracking-[-0.01em] font-semibold mb-3 ${isMiddle ? 'text-[#324038]' : ''}`}>
                              {step.stage}
                            </CardTitle>
                            <CardDescription className="text-center text-[1rem] leading-[1.5]">
                              {step.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent>
                            <ul className="space-y-3">
                              {step.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3 text-[0.9375rem]">
                                  <div className={`mt-0.5 flex-shrink-0 ${isMiddle ? 'text-[#324038]' : 'text-muted-foreground'}`}>
                                    {isMiddle ? (
                                      <Zap className="h-4 w-4" />
                                    ) : (
                                      <CheckCircle2 className="h-4 w-4" />
                                    )}
                                  </div>
                                  <span className={isMiddle ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>

                          {/* Decorative Bottom Border for Middle Card */}
                          {isMiddle && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#324038] to-transparent opacity-50" />
                          )}
                        </Card>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Key Metrics - Visual Stats */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            <div className="relative group">
              <Card className="h-full border-2 border-[#324038]/20 hover:border-[#324038]/40 transition-all duration-300 hover:shadow-xl">
                <CardContent className="pt-5 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#324038]/10 mb-4 group-hover:bg-[#324038]/20 transition-colors">
                    <CheckCircle2 className="h-7 w-7 text-[#324038]" />
                  </div>
                  <div className="text-[2rem] font-bold text-[#324038] mb-2">0%</div>
                  <p className="text-[1rem] font-semibold text-foreground mb-1">Disruption</p>
                  <p className="text-[0.9375rem] text-muted-foreground">Operations continue uninterrupted</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative group">
              <Card className="h-full border-2 border-[#324038]/20 hover:border-[#324038]/40 transition-all duration-300 hover:shadow-xl">
                <CardContent className="pt-5 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#324038]/10 mb-4 group-hover:bg-[#324038]/20 transition-colors">
                    <Database className="h-7 w-7 text-[#324038]" />
                  </div>
                  <div className="text-[2rem] font-bold text-[#324038] mb-2">100%</div>
                  <p className="text-[1rem] font-semibold text-foreground mb-1">System Preservation</p>
                  <p className="text-[0.9375rem] text-muted-foreground">All existing systems maintained</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative group">
              <Card className="h-full border-2 border-[#324038]/20 hover:border-[#324038]/40 transition-all duration-300 hover:shadow-xl">
                <CardContent className="pt-5 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#324038]/10 mb-4 group-hover:bg-[#324038]/20 transition-colors">
                    <TrendingUp className="h-7 w-7 text-[#324038]" />
                  </div>
                  <div className="text-[2rem] font-bold text-[#324038] mb-2">3-6</div>
                  <p className="text-[1rem] font-semibold text-foreground mb-1">Months</p>
                  <p className="text-[0.9375rem] text-muted-foreground">To full transformation</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline - Enhanced Visual */}
          <Card className="border-2 border-[#324038]/20 bg-gradient-to-br from-muted/30 to-background">
            <CardHeader>
              <CardTitle className="text-[1.25rem] leading-[1.3] tracking-[-0.01em] font-semibold text-center">
                Typical Transformation Timeline
              </CardTitle>
              <CardDescription className="text-center text-[1rem]">
                Quick wins in weeks, full transformation in months—not years
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#324038]/20 via-[#324038]/40 to-[#324038]/20" />
                
                <div className="grid md:grid-cols-4 gap-5 relative">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Connector */}
                      {index < timeline.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#324038]/40 to-transparent z-0" />
                      )}
                      
                      <div className="relative z-10 bg-background rounded-lg p-4 border border-[#324038]/10 hover:border-[#324038]/30 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#324038] to-[#795953] text-white flex items-center justify-center text-[0.875rem] font-bold flex-shrink-0 shadow-lg">
                            {index + 1}
                          </div>
                          <div className="text-[0.875rem] font-semibold text-[#324038]">{item.week}</div>
                        </div>
                        <h4 className="font-semibold mb-2 text-[1rem] text-foreground">{item.milestone}</h4>
                        <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
