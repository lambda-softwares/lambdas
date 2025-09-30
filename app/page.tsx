import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { ProofSection } from "@/components/sections/proof-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { CaseTeaserSection } from "@/components/sections/case-teaser-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PillarsSection />
        <HighlightsSection />
        <CaseTeaserSection />
        <ProofSection />
      </main>
      <Footer />
    </div>
  )
}
