import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Brain, Code, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Consulting & Integration",
    description:
      "Move from traditional IT to intelligent enterprise safely, quickly, and with your current stack. We embed AI into existing systems to automate workflows and enable real-time decisions.",
    href: "/services/ai-consulting",
    features: [
      "AI Readiness Assessments",
      "Custom Model Development",
      "System Integration",
      "Process Automation",
      "Change Management & Training",
    ],
  },
  {
    icon: Code,
    title: "Software Development & ICT Solutions",
    description:
      "Secure, scalable web/mobile and platform engineering. From custom enterprise systems to cloud-native applications, we build technology that grows with your business.",
    href: "/services/software-development",
    features: [
      "Web and Mobile Applications",
      "Custom Enterprise Systems",
      "Cloud-Native Architecture",
      "Security & Compliance",
      "DevOps & CI/CD",
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
              <Badge variant="secondary" className="mb-4">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                Enterprise Services for the Intelligent Era
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                From legacy systems to intelligent enterprises, we help organizations modernize safely, integrate AI where it matters, and build software platforms that scale. Our services are designed for enterprises that demand security, compliance, and measurable ROI.
              </p>
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
                        <h4 className="font-semibold mb-3">Key Capabilities:</h4>
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

            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground mb-6">Ready to transform your technology stack?</p>
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
      <Footer />
    </div>
  )
}
