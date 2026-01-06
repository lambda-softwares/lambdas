import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

// Placeholder structure - replace with actual testimonials when available
const testimonials = [
  {
    quote: "Lsl transformed our legacy systems without disrupting operations. The bridge approach meant we kept everything that worked while gaining AI capabilities we never thought possible.",
    author: "Client Name",
    title: "CTO",
    company: "Company Name",
    logo: null, // Add logo path when available
    metrics: "60% faster decisions, 40% cost reduction",
  },
  {
    quote: "We were skeptical about AI integration, but Lsl's zero-disruption guarantee gave us confidence. They delivered exactly as promised—intelligent systems without the chaos.",
    author: "Client Name",
    title: "Operations Director",
    company: "Company Name",
    logo: null,
    metrics: "Zero downtime, 3-month ROI",
  },
  {
    quote: "The partnership approach made all the difference. Lsl understood our industry challenges and built solutions that actually solve real problems, not just tech demos.",
    author: "Client Name",
    title: "CEO",
    company: "Company Name",
    logo: null,
    metrics: "18% accuracy improvement, full compliance",
  },
]

// Placeholder for client logos - replace with actual logos when available
const clientLogos = [
  { name: "Client Logo 1", logo: null },
  { name: "Client Logo 2", logo: null },
  { name: "Client Logo 3", logo: null },
  { name: "Client Logo 4", logo: null },
  { name: "Client Logo 5", logo: null },
]

const metrics = [
  { value: "85%", label: "Faster Decision Making" },
  { value: "60%", label: "Cost Reduction" },
  { value: "50+", label: "Enterprises Transformed" },
  { value: "0%", label: "Disruption Rate" },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-2 hover:border-[#324038]/30 transition-colors">
                <CardContent className="pt-5">
                  <div className="text-[1.875rem] md:text-[2.25rem] font-bold text-[#324038] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-[0.9375rem] text-muted-foreground">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-[1.5rem] md:text-[1.875rem] font-semibold text-balance mb-4 leading-[1.25] tracking-[-0.01em]">
                What Our Clients Say
              </h2>
              <p className="text-[1.125rem] leading-[1.5] text-muted-foreground text-pretty max-w-3xl mx-auto">
                Real results from enterprises that chose the bridge approach over rip-and-replace.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-[#324038]/30">
                  <CardContent className="pt-5">
                    <Quote className="h-7 w-7 text-[#324038]/30 mb-4" />
                    <p className="text-[1rem] leading-[1.5] text-foreground mb-5">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-[0.9375rem]">{testimonial.author}</div>
                      <div className="text-[0.875rem] text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </div>
                      {testimonial.metrics && (
                        <div className="mt-2 text-[0.875rem] font-medium text-[#324038]">
                          {testimonial.metrics}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trusted By Section */}
          <div>
            <p className="text-center text-[0.9375rem] text-muted-foreground mb-6">
              Trusted by forward-thinking organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-60">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-12 w-32 bg-muted rounded-lg border border-border/50"
                  title={client.name}
                >
                  {client.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={client.logo} alt={client.name} className="max-h-10 max-w-24 object-contain" />
                  ) : (
                    <span className="text-[0.75rem] text-muted-foreground">{client.name}</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-[0.875rem] text-muted-foreground mt-4">
              Logos will be added as client partnerships are finalized
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

