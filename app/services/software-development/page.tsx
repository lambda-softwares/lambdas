import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Globe, Shield, Cloud, Smartphone } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Web & Mobile Applications",
    description: "Intuitive, high-performing apps designed to delight users, scale with demand, and drive engagement.",
  },
  {
    icon: Cloud,
    title: "Custom Enterprise Systems",
    description:
      "Tailored platforms that streamline operations across the enterprise designed around your unique workflows, not forced into one-size-fits-all systems.",
  },
  {
    icon: Shield,
    title: "Cloud-Native Platforms",
    description:
      "Architected for resilience and scale with built-in automation and monitoring so your business stays always-on and cost-efficient.",
  },
  {
    icon: Smartphone,
    title: "Secure & Compliant Solutions",
    description:
      "Systems built with governance, auditability, and privacy protections at the core ready for regulatory scrutiny and enterprise adoption.",
  },
]

const technologies = [
  "Next.js & React",
  "React Native",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "AWS/GCP/Azure",
  "Docker & Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Vercel",
  "LangChain",
  "Model Context Protocol (MCP) & FastMCP",
  "Eliza",
  "Hugging Face Transformers",
  "PyTorch",
  "Ray (Ray Tune / RLlib)",
  "Vector Databases (pgvector, Pinecone, Weaviate)",
]

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Intelligent Software Engineering
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                Software Built to Evolve with You
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-8">
                From enterprise systems to cloud-native applications, we deliver technology that grows with your business, adapts to change, and unlocks new opportunities for automation and intelligence.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What we build</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-indigo-600" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Technologies we use</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Modern, battle-tested engineering tooling paired with AI-native frameworks so we can ship intelligent,
                production-ready products.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-muted/50 rounded-lg px-4 py-3 text-sm font-medium text-center hover:bg-muted transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our development process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Discovery & Planning</h3>
                    <p className="text-muted-foreground">
                      We align on goals, map constraints, and design a roadmap that balances business priorities, compliance, and technical feasibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Agile Development</h3>
                    <p className="text-muted-foreground">
                      We build in short cycles with regular demos and feedback loops, so you see progress at every stage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Testing & Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      We validate functionality, performance, and security with rigorous testing at every level.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Deployment & Support</h3>
                    <p className="text-muted-foreground">
                      We manage rollout with monitoring, scaling, and long-term maintenance options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your next application?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your requirements and create a solution that scales with your business.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
