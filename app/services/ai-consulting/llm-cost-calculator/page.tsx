import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BookOpen, TrendingUp } from "lucide-react"
import { LLMCostCalculator } from "@/components/calculator/llm-cost-calculator"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LLM Cost-Benefit Calculator | On-Premise vs Cloud API Analysis",
  description:
    "Calculate break-even points for on-premise LLM deployment vs commercial API services. Compare costs, performance, and ROI for GPT-5, Claude-4, Gemini, and open-source models like Llama, Qwen, and GLM.",
  keywords: [
    "LLM cost calculator",
    "on-premise LLM",
    "cloud API comparison",
    "AI deployment cost",
    "break-even analysis",
    "GPT-5 pricing",
    "Claude-4 cost",
    "open-source LLM",
    "enterprise AI",
    "ROI calculator",
  ],
  openGraph: {
    title: "LLM Cost-Benefit Calculator - On-Premise vs Cloud API",
    description:
      "Determine when on-premise LLM deployment becomes economically viable vs commercial API services. Research-backed analysis.",
    type: "website",
  },
}

export default function LLMCostCalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="inline-flex">
                Research-Backed Analysis
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                LLM Deployment Cost Calculator
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Determine when on-premise LLM deployment becomes economically viable compared to commercial API
                services. Make informed decisions backed by peer-reviewed research.
              </p>
            </div>
          </div>
        </section>

        {/* Research Context */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <Alert className="max-w-5xl mx-auto">
              <BookOpen className="h-5 w-5" />
              <AlertTitle className="text-lg font-semibold">Based on Academic Research</AlertTitle>
              <AlertDescription className="mt-2 text-base leading-relaxed">
                This calculator implements the methodology from{" "}
                <span className="font-semibold">
                  &quot;A Cost-Benefit Analysis of On-Premise Large Language Model Deployment: Breaking Even with
                  Commercial LLM Services&quot;
                </span>{" "}
                by Guanzhong Pan and Haibo Wang (Carnegie Mellon University). The analysis covers 54 deployment
                scenarios across 9 open-source models and 5 commercial API providers.
                <Link
                  href="https://arxiv.org/abs/2502.01070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-indigo-600 hover:underline font-medium"
                >
                  View Research Paper →
                </Link>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Key Insights */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Key Research Findings</h2>
                <p className="text-lg text-muted-foreground">
                  Understand the economics before you deploy
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold text-lg">Small Models</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Break-even in as little as <strong className="text-foreground">0.3-3 months</strong> against
                    premium services. Ideal for SMEs with modest token volumes (&lt;10M/month).
                  </p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                    <h3 className="font-semibold text-lg">Medium Models</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Break-even ranges from <strong className="text-foreground">3.8-34 months</strong>. Sweet spot for
                    medium enterprises processing 10-50M tokens/month.
                  </p>
                </div>
                <div className="p-6 rounded-lg border bg-card">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                    <h3 className="font-semibold text-lg">Large Models</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Break-even extends to <strong className="text-foreground">3.5-69 months</strong>. Viable for
                    large enterprises with extreme workloads (&gt;50M tokens/month).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <LLMCostCalculator />
          </div>
        </section>

        {/* Methodology */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">Methodology</h2>
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">
                  Our calculator implements seven core equations from the research paper to model total cost of
                  ownership (TCO):
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Hardware Cost:</strong> C<sub>hardware</sub> = N<sub>GPU</sub> × C<sub>GPU</sub>
                  </li>
                  <li>
                    <strong>Electricity Cost:</strong> C<sub>electricity</sub> = N<sub>GPU</sub> × P<sub>GPU</sub> × H
                    <sub>operation</sub> × R<sub>electricity</sub>
                  </li>
                  <li>
                    <strong>Local Deployment:</strong> C<sub>local</sub>(t) = C<sub>hardware</sub> + C
                    <sub>electricity</sub> × t
                  </li>
                  <li>
                    <strong>API Cost:</strong> C<sub>API</sub>(t) = C<sub>API</sub>(Q<sub>capacity</sub>) × t
                  </li>
                  <li>
                    <strong>Break-even:</strong> Solve for t* where C<sub>local</sub>(t) = C<sub>API</sub>(t)
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Performance benchmarks (GPQA, MATH-500, MMLU-Pro, LiveCodeBench) are sourced from Artificial Analysis
                  and model providers. All pricing reflects commercial rates as of late 2024/early 2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Need Help With Your AI Deployment Strategy?</h2>
              <p className="text-lg text-indigo-100 leading-relaxed">
                Our AI architects can help you interpret these results, design hybrid deployment architectures, and
                implement the solution that maximizes your ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/services/ai-consulting"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore AI Consulting Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
