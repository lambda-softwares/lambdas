import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          {/* Problem Statement */}
          <div className="mb-6">
            <p className="text-[1.0625rem] md:text-[1.25rem] text-muted-foreground font-medium mb-4">
              Stuck with traditional software that can't adapt?
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-[2.125rem] md:text-[2.75rem] lg:text-[3.5rem] font-semibold text-balance mb-6 leading-[1.2] tracking-[-0.02em]">
            Bridge from Traditional Software to <span className="text-[#324038]">Intelligent Systems</span>
          </h1>

          {/* Powerful Subheadline */}
          <p className="text-[1.375rem] md:text-[1.5rem] font-medium text-foreground mb-6 max-w-3xl mx-auto leading-[1.3]">
            Transform legacy systems into intelligent platforms—without disruption, without replacement, without risk
          </p>

          {/* Value Proposition */}
          <div className="text-[1.125rem] md:text-[1.25rem] text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto leading-[1.4]">
            <p className="mb-4">
              We at lsl analyse your current systems setup, and help you 10x your productivity. No rip-and-replace. No vendor lock-in. Just a seamless integration that amplifies what you already have.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-[0.9375rem] text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#324038]" />
              <span>Zero-disruption guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#324038]" />
              <span>Keep your existing systems</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#324038]" />
              <span>Quick wins in weeks</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="text-[1.0625rem] leading-[1.29] px-8 py-6 bg-[#324038] hover:bg-[#3d4f45]">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-[1.0625rem] leading-[1.29] px-8 py-6 border-2">
              <Link href="/solutions">
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-[0.9375rem] text-muted-foreground">
            Trusted by forward-thinking enterprises across 14+ industries
          </p>
        </div>
      </div>

      {/* Background decoration with bridge visual suggestion */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#324038]/10 to-transparent rounded-full blur-3xl" />
        {/* Bridge visual element */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#324038]/20 to-transparent opacity-30" />
      </div>
    </section>
  )
}
