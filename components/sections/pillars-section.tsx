import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Building2, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

const pillars = [
  {
    icon: Brain,
    title: "AI Consulting & Integration",
    description: "Bridge traditional IT systems to intelligent, automated platforms. Zero-disruption integration from readiness assessments to production deployment and team training.",
    href: "/services/ai-consulting",
    // Roycroft Bottle Green #324038 with White Mink #EFEEE9
    gradientFrom: "rgba(50, 64, 56, 0.08)",
    gradientVia: "rgba(239, 238, 233, 0.12)",
    gradientTo: "rgba(239, 238, 233, 0.15)",
    borderFrom: "rgba(50, 64, 56, 1)",
    borderTo: "rgba(121, 89, 83, 1)",
    iconBg: "bg-[#324038]/10",
    iconColor: "text-[#324038]",
    iconGlow: "shadow-[0_0_20px_rgba(50,64,56,0.3)]",
    buttonColor: "#324038",
  },
  {
    icon: Building2,
    title: "Industry-Specific Solutions",
    description: "Co-build domain-specific AI tools in partnership with sector experts and enterprise clients. We co-create solutions with industry experts—clients bring domain knowledge; lsl engineers bring AI expertise.",
    href: "/solutions",
    // Sequoia Dusk #795953 with White Mink #EFEEE9
    gradientFrom: "rgba(121, 89, 83, 0.08)",
    gradientVia: "rgba(239, 238, 233, 0.12)",
    gradientTo: "rgba(239, 238, 233, 0.15)",
    borderFrom: "rgba(121, 89, 83, 1)",
    borderTo: "rgba(50, 64, 56, 1)",
    iconBg: "bg-[#795953]/10",
    iconColor: "text-[#795953]",
    iconGlow: "shadow-[0_0_20px_rgba(121,89,83,0.3)]",
    buttonColor: "#795953",
  },
  {
    icon: Smartphone,
    title: "Consumer Innovation Labs",
    description: "In-house consumer app development allows lsl to experiment with new technologies, validate AI patterns before enterprise deployment, build products that solve everyday problems, and transfer successful architectures into enterprise-grade systems.",
    href: "/products",
    // White Mink #EFEEE9 with Matt Black #151515 accents
    gradientFrom: "rgba(239, 238, 233, 0.95)",
    gradientVia: "rgba(239, 238, 233, 0.98)",
    gradientTo: "rgba(239, 238, 233, 1)",
    borderFrom: "rgba(21, 21, 21, 0.2)",
    borderTo: "rgba(50, 64, 56, 0.3)",
    iconBg: "bg-[#151515]/5",
    iconColor: "text-[#324038]",
    iconGlow: "shadow-[0_0_20px_rgba(21,21,21,0.2)]",
    buttonColor: "#324038",
  },
]

export function PillarsSection() {
  const FeaturedIcon = pillars[0].icon
  
  return (
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[1.5rem] md:text-[1.875rem] font-semibold text-balance mb-4 leading-[1.25] tracking-[-0.01em]">Three ways we bridge traditional to intelligent</h2>
            <p className="text-[1.125rem] leading-[1.5] text-muted-foreground text-pretty max-w-2xl mx-auto">
              From bridging legacy systems with AI to co-developing intelligent solutions, we transform your business without disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Large Featured Card - AI Consulting */}
            <Card
                  className={cn(
                    "relative group overflow-hidden md:col-span-2",
                    "border-2 border-transparent",
                    "hover:scale-[1.02] hover:-translate-y-1",
                    "transition-all duration-300 ease-out",
                    "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
                    "hover:shadow-[0_8px_30px_rgba(50,64,56,0.2)]",
                    "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
                    "before:bg-gradient-to-r before:from-[#324038] before:to-[#795953]",
                    "before:opacity-0 before:transition-opacity before:duration-300",
                    "before:group-hover:opacity-100 before:-z-10"
                  )}
                  style={{
                    background: `linear-gradient(to bottom right, ${pillars[0].gradientFrom}, ${pillars[0].gradientVia}, ${pillars[0].gradientTo})`,
                  }}
                >
                  <div className="relative z-20 p-6">
                    <CardHeader className="p-0 mb-5">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                          "transition-all duration-300",
                          "group-hover:scale-110",
                          pillars[0].iconBg
                        )}
                      >
                        <FeaturedIcon
                          className={cn(
                            "h-7 w-7 transition-all duration-300",
                            pillars[0].iconColor,
                            "group-hover:shadow-[0_0_20px_rgba(50,64,56,0.3)]"
                          )}
                        />
                      </div>
                  <CardTitle className="text-[1.25rem] md:text-[1.5rem] leading-[1.3] tracking-[-0.01em] mb-3">
                    {pillars[0].title}
                  </CardTitle>
                  <CardDescription className="text-[1rem] leading-[1.5] text-muted-foreground">
                    {pillars[0].description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Button
                    asChild
                    size="lg"
                    className="font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:brightness-110"
                    style={{ backgroundColor: pillars[0].buttonColor, color: "#EFEEE9" }}
                  >
                    <Link href={pillars[0].href}>See How We Bridge Systems →</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Smaller Cards Stack */}
            <div className="flex flex-col gap-5 md:col-span-1">
              {pillars.slice(1).map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <Card
                    key={index}
                    className={cn(
                      "relative group overflow-hidden",
                      "border-2 border-transparent",
                      "hover:scale-[1.02] hover:-translate-y-1",
                      "transition-all duration-300 ease-out",
                      "shadow-[0_4px_15px_rgba(0,0,0,0.06)]",
                      "hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)]",
                      "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
                      index === 0 
                        ? "before:bg-gradient-to-r before:from-[#795953] before:to-[#324038]"
                        : "before:bg-gradient-to-r before:from-[#151515] before:to-[#324038]",
                      "before:opacity-0 before:transition-opacity before:duration-300",
                      "before:group-hover:opacity-100 before:-z-10"
                    )}
                    style={{
                      background: `linear-gradient(to bottom right, ${pillar.gradientFrom}, ${pillar.gradientVia}, ${pillar.gradientTo})`,
                    }}
                  >
                    <div className="relative z-20 p-5">
                      <CardHeader className="p-0 mb-4">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center mb-4",
                            "transition-all duration-300",
                            "group-hover:scale-110",
                            pillar.iconBg
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-5 w-5 transition-all duration-300",
                              pillar.iconColor,
                              index === 0 
                                ? "group-hover:shadow-[0_0_20px_rgba(121,89,83,0.3)]"
                                : "group-hover:shadow-[0_0_20px_rgba(50,64,56,0.3)]"
                            )}
                          />
                        </div>
                        <CardTitle className="text-[1.125rem] leading-[1.33] tracking-[-0.01em] mb-2">
                          {pillar.title}
                        </CardTitle>
                        <CardDescription className="text-[1rem] leading-[1.5] text-muted-foreground">
                          {pillar.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Button
                          asChild
                          variant="ghost"
                          className={cn(
                            "p-0 h-auto font-semibold transition-all duration-300 hover:translate-x-1",
                            index === 0 ? "text-[#795953] hover:text-[#6b4f49]" : "text-[#795953] hover:text-[#6b4f49]"
                          )}
                        >
                          <Link href={pillar.href}>
                            Explore Bridge Approach →
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
