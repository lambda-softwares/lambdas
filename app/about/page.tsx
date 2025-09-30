import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const values = [
  {
    title: "Impact over hype",
    description:
      "We focus on measurable business outcomes, not flashy demos. Every AI solution we build drives real value.",
  },
  {
    title: "Security & ethics by default",
    description:
      "Privacy-first design, transparent algorithms, and responsible AI practices are built into everything we create.",
  },
  {
    title: "Local insight, global quality",
    description: "Rooted in Kenya with deep understanding of African challenges, but built to global standards.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <Badge variant="secondary" className="mb-4">
                  About Lsl
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                  Build transformative technology from Kenya to the world
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Lsl is a private limited company incorporated in Kenya, operating at the intersection of ICT and AI. We're positioned as Kenya's answer to global technology conglomerates, a hybrid company that consults, integrates, and builds.
                </p>
              </div>

              {/* Mission Section */}
              <Card className="mb-16 bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-center text-muted-foreground leading-relaxed">
                    Lsl exists to build transformative digital solutions that empower businesses, governments, and
                    individuals to thrive in an increasingly intelligent and connected world. We bridge the gap between
                    traditional IT systems and the AI-powered future through our specialized focus: AI-driven transformation of existing systems.
                  </p>
                </CardContent>
              </Card>

              {/* Business Model Section */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-8">Dual-Focus Business Model</h2>
                <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
                  Lsl operates under a unique dual-focus model that sets us apart from traditional technology companies:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Enterprise AI Transformation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        Partnering with businesses to integrate AI into core systems, automate workflows, and unlock real-time insights.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Product Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        Building consumer apps and co-creating domain-specific AI solutions in partnership with industry leaders.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <p className="text-center text-muted-foreground">
                      Our partnership based approach means we don't just deliver projects; we co-create solutions with
                      domain experts, regulators, and organizations, ensuring that our AI implementations are contextually accurate, compliant, and
                      genuinely impactful across 14+ industry sectors.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Vision Section */}
              <Card className="mb-20">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Our Vision & Positioning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-center text-muted-foreground leading-relaxed">
                    To become Kenya's answer to global technology conglomerates like Tencent—a hybrid company that consults,
                    integrates, and builds. We're creating an ecosystem of AI-powered enterprises, consumer apps, and
                    digital platforms that redefine how businesses operate and how individuals interact with technology.
                  </p>
                  <p className="text-center text-muted-foreground leading-relaxed">
                    Rooted in Kenya but global in ambition, Lsl is positioned to lead Africa's next wave of intelligent digital transformation while solving uniquely African challenges in law, agriculture, healthcare, and beyond.
                  </p>
                </CardContent>
              </Card>

              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {values.map((value, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div id="careers" className="text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We're always looking for talented individuals who share our vision of transforming Africa's technology
                  landscape.
                </p>
                <p className="text-muted-foreground">
                  Career opportunities coming soon. Follow us on social media for updates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
