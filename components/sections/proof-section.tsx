export function ProofSection() {
  const clientTypes = [
    "Legal Firms",
    "Agricultural Cooperatives",
    "Healthcare Facilities",
    "Financial Institutions",
    "Manufacturing Companies",
    "Government Agencies",
    "Retail & FMCG Businesses",
    "Payment Providers",
    "Public Sector Programs",
  ]

  const industries = [
    "Legal",
    "Finance",
    "Agricultural cooperatives",
    "Manufacturing",
    "Healthcare",
    "Government agencies",
    "Retail & FMCG",
    "Insurance",
    "Logistics",
    "Education",
    "Marketing & Communications",
    "Energy",
    "Public sector agencies",
    "NGOs & development organizations",
  ]

  return (
    <section className="py-12" style={{ borderBottom: "1px solid rgba(121, 89, 83, 0.05)" }}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground mb-4">
            Trusted by forward-thinking organizations across sectors
          </p>
          <p className="text-[1.0625rem] font-semibold text-[#324038] mb-8">
            50+ enterprises bridged from traditional to intelligent systems
          </p>
          <div className="mb-8">
            <h3 className="text-[0.9375rem] font-semibold text-muted-foreground mb-4">Clients We Serve:</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
              {clientTypes.map((clientType, index) => (
                <div
                  key={index}
                  className="text-[1rem] leading-[1.31] font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {clientType}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[0.9375rem] font-semibold text-muted-foreground mb-4">Industries We Support:</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 opacity-60">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="text-[0.9375rem] leading-[1.33] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
