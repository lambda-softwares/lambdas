import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { ValuePropositionSection } from "@/components/sections/value-proposition-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { BridgeProcessSection } from "@/components/sections/bridge-process-section"
import { ProofSection } from "@/components/sections/proof-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { CaseTeaserSection } from "@/components/sections/case-teaser-section"
import { ObjectionsSection } from "@/components/sections/objections-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Conversion Flow: Hook → Value → Social Proof → Process → Services → Benefits → Results → Objections → Final Proof */}
        <Hero />
        <ValuePropositionSection />
        <TestimonialsSection />
        <BridgeProcessSection />
        <PillarsSection />
        <HighlightsSection />
        <CaseTeaserSection />
        <ObjectionsSection />
        <ProofSection />
      </main>
      <Footer />
    </div>
  )
}
