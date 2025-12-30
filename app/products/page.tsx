import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, BookOpen, PiggyBank, Heart, Users, Music, Smartphone, ArrowRight } from "lucide-react"

const focusAreas = [
  {
    icon: Briefcase,
    title: "Productivity & Work",
    description:
      "Tools that help individuals and SMEs stay lean and effective think task managers, document organizers, and collaboration hubs.",
  },
  {
    icon: BookOpen,
    title: "Education & Learning",
    description:
      "Adaptive learning platforms, AI tutors, and coding labs that make learning more accessible for all.",
  },
  {
    icon: PiggyBank,
    title: "Finance & Wealth",
    description:
      "Micro-savings, smart budgeting, and AI-powered wallets driving financial literacy and inclusion.",
  },
  {
    icon: Heart,
    title: "Lifestyle & Well-being",
    description:
      "Fitness, meditation, and nutrition apps designed to support healthier living every day.",
  },
  {
    icon: Users,
    title: "Social & Community",
    description:
      "Platforms that bring creators, communities, and local economies closer together.",
  },
  {
    icon: Music,
    title: "Entertainment & Media",
    description:
      "Personalized discovery of music, podcasts, and digital storytelling powered by AI.",
  },
  {
    icon: Smartphone,
    title: "Utility & Convenience",
    description:
      "Everyday essentials like ride-sharing, delivery tracking, smart homes, and secure digital IDs.",
  },
]

const whyPoints = [
  {
    title: "Innovation Labs",
    description: "We prototype fast, validate with small user groups, and refine before scaling.",
  },
  {
    title: "Proof Before Scale",
    description: "Concepts are tested internally before they reach clients, reducing delivery risk.",
  },
  {
    title: "Enterprise Advantage",
    description: "Every experiment strengthens our ability to deliver AI solutions with confidence and real-world grounding.",
  },
]

export const metadata: Metadata = {
  title: "Innovation Labs | Lsl",
  description:
    "Lsl’s Innovation Labs explores future consumer apps and AI patterns. We prototype, validate with real users, and transfer proven ideas into enterprise solutions.",
  alternates: {
    canonical: "https://www.lsl.co.ke/products",
  },
  openGraph: {
    title: "Lsl Innovation Labs",
    description: "From prototypes to pilots—how we build and learn before scaling AI to the enterprise.",
    url: "https://www.lsl.co.ke/products",
  },
  robots: "index,follow",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                In-House Consumer Apps
              </Badge>
              <h1 className="text-[2.125rem] md:text-[2.75rem] font-semibold text-balance mb-6 leading-[1.2] tracking-[-0.02em]">
                Innovation Labs
              </h1>
              <p className="text-[1.0625rem] leading-[1.29] font-semibold text-indigo-700 text-pretty max-w-2xl mx-auto">
                Where future ideas are built, tested, and proven.
              </p>
              <p className="mt-4 text-[1.25rem] leading-[1.25] text-muted-foreground text-pretty max-w-3xl mx-auto">
                At Lsl, Innovation Labs is our sandbox for consumer apps, AI patterns, and new digital experiences. Every
                prototype isn't just an experiment, it's a real-world testbed that validates concepts, reveals adoption
                patterns, and sharpens the enterprise solutions we deliver to our clients.
              </p>
            </div>

            <div id="intro" className="max-w-4xl mx-auto text-center mb-16 space-y-6">
              <h2 className="text-[1.375rem] md:text-[1.75rem] font-semibold leading-[1.27] tracking-[-0.01em]">Exploring What's Next, Today</h2>
              <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                Innovation Labs is where Lsl turns bold ideas into working prototypes. We build fast, test with real
                users, and learn what sticks. Every experiment is more than a concept it's a proof point that feeds
                directly into stronger, smarter enterprise solutions.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-[1.375rem] md:text-[1.75rem] font-semibold mb-3 leading-[1.27] tracking-[-0.01em]">Focus Areas Under Exploration</h2>
                <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                  Each initiative keeps us close to real users and real-world impact.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {focusAreas.map((area, index) => {
                  const Icon = area.icon
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-indigo-600" />
                          </div>
                        <CardTitle className="text-[1.25rem] leading-[1.25] tracking-[-0.01em] font-semibold">{area.title}</CardTitle>
                        </div>
                      <CardDescription className="text-[1.0625rem] leading-[1.29]">{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0" />
                  </Card>
                )
              })}
            </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-12 max-w-5xl mx-auto text-center">
              <h2 className="text-[1.375rem] md:text-[1.75rem] font-semibold mb-6 leading-[1.27] tracking-[-0.01em]">Why This Matters</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {whyPoints.map((point) => (
                  <div key={point.title} className="bg-background/60 rounded-xl border border-border/60 p-6">
                    <h3 className="font-semibold text-[1.0625rem] leading-[1.29] mb-2">{point.title}</h3>
                    <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground">{point.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-10 mb-6">
                Interested in partnering with us on a consumer app, licensing our technology, or exploring standalone
                ventures?
              </p>
              <Button asChild>
                <Link href="/contact">
                  Discuss Partnership Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
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
