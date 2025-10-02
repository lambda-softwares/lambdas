import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            The Bridge from Software to <span className="text-indigo-600">Intelligent Systems</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>Most enterprises still run on outdated systems manual workflows, siloed data, and slow decisions. We help you modernize without disruption, embedding AI into what you already use, co-developing domain solutions, and testing future technologies in our innovation labs.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-lg px-8 py-6">
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
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/20 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  )
}
