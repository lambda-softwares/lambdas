export function ProofSection() {
  const partnerTypes = [
    "Legal Firms",
    "Agricultural Cooperatives",
    "Healthcare Providers",
    "Financial Institutions",
    "Manufacturing Companies",
    "Government Agencies"
  ]

  return (
    <section className="py-12 border-b">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground mb-8">Trusted by forward-thinking organizations across sectors</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {partnerTypes.map((partnerType, index) => (
              <div
                key={index}
                className="text-[1.0625rem] leading-[1.29] font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {partnerType}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
