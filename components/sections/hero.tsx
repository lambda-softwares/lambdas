import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[2.125rem] md:text-[2.75rem] lg:text-[3.5rem] font-semibold text-balance mb-6 leading-[1.2] tracking-[-0.02em]">
            The Bridge from Software to <span className="text-[#324038]">Intelligent Systems</span>
          </h1>
          <div className="text-[1.25rem] md:text-[1.375rem] text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto leading-[1.25] flex flex-col gap-4">
            <p>Most enterprises still run on outdated systems manual workflows, siloed data, and slow decisions. We help you modernize without disruption, embedding AI into what you already use, co-developing domain solutions, and testing future technologies in our innovation labs.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-[1.0625rem] leading-[1.29] px-8 py-6">
              <Link href="/contact">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-[1.0625rem] leading-[1.29] px-8 py-6">
              <Link href="/solutions">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#324038]/10 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  )
}
