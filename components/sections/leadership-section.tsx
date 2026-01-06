import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Code, Brain, Settings } from "lucide-react"

const leadership = [
  {
    name: "Rosa Valentine W. Wachuka",
    role: "Chief Executive Officer",
    icon: Briefcase,
    description:
      "Provides strategic, operational, and innovation leadership across lsl's AI consulting, integration, and product-development divisions. With a foundation in law, systems thinking, and governance, she oversees cross-industry enterprise engagements, compliance, partnerships, and the company's transition from software to intelligent systems.",
    responsibilities: [
      "Overall vision and execution",
      "Global expansion",
      "Enterprise engagements",
      "Compliance & partnerships",
    ],
  },
  {
    name: "Kelvin Wachanga Geita",
    role: "Chief Operations Officer",
    icon: Settings,
    description:
      "Leads operational strategy and delivery across lsl's multi-industry AI projects. He oversees execution frameworks, client success, implementation pipelines, internal process optimization, and integration workflows that ensure seamless deployment of intelligent systems in enterprise environments.",
    responsibilities: [
      "Operational efficiency",
      "Resource planning",
      "Client success",
      "Organizational scaling",
    ],
  },
  {
    name: "Iain Mosima Nyakundi",
    role: "Chief Technical Officer",
    icon: Code,
    description:
      "A full-stack developer who directs lsl's technical architecture, engineering standards, and product infrastructure. He oversees system design, API and microservice integration, security engineering, model deployment pipelines, and overarching technical governance.",
    responsibilities: [
      "Technical architecture",
      "Security engineering",
      "System design",
      "Technical governance",
    ],
  },
  {
    name: "Winston Karanja Ngige",
    role: "Head of AI & ML Engineering",
    icon: Brain,
    description:
      "A certified AI engineer who leads lsl's AI and machine-learning engineering division, focusing on model development, training, optimization, and deployment across 14+ sectors. He manages the development of domain-specific AI systems including fraud-scoring engines, document-intake automation, forecasting models, and legal copilots.",
    responsibilities: [
      "Model development & training",
      "AI system deployment",
      "Research & experimentation",
      "Applied machine learning",
    ],
  },
]

export function LeadershipSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[1.75rem] md:text-[2.125rem] font-semibold text-balance mb-4 leading-[1.21] tracking-[-0.01em]">
              Leadership Team
            </h2>
            <p className="text-[1.25rem] leading-[1.25] text-muted-foreground text-pretty max-w-3xl mx-auto">
              Experienced leaders driving lsl's mission to bridge traditional software and intelligent systems across Africa and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => {
              const Icon = leader.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#324038]/30">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-[#324038]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#324038]/20 transition-colors">
                        <Icon className="h-8 w-8 text-[#324038]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-[1.375rem] leading-[1.27] tracking-[-0.01em] font-semibold mb-1">
                          {leader.name}
                        </CardTitle>
                        <CardDescription className="text-[1.0625rem] leading-[1.29] font-medium text-[#324038]">
                          {leader.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-6">
                      {leader.description}
                    </p>
                    <div>
                      <h4 className="text-[0.9375rem] font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {leader.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-[0.9375rem] text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#324038] mt-2 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

