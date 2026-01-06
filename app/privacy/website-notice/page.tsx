import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function WebsitePrivacyNoticePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">
                  Website Privacy Notice
                </Badge>
                <h1 className="text-[2.125rem] md:text-[2.75rem] font-semibold text-balance mb-6 leading-[1.2] tracking-[-0.02em]">
                  Website Privacy Notice
                </h1>
                <p className="text-[1.25rem] leading-[1.25] text-muted-foreground">
                  Effective date: 1 January 2026 | Version: 1.1
                </p>
                <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mt-4 max-w-2xl mx-auto">
                  This Website Privacy Notice explains how Lambda Softwares Limited (LSL) ("we", "us", "our") processes personal data collected through our website. 
                  It is intended as a short, high-level notice. For full details, please refer to our{" "}
                  <Link href="/privacy" className="text-[#324038] hover:underline font-medium">
                    Privacy Policy (Controller Notice)
                  </Link>
                  .
                </p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">1. What we collect</h2>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li>Contact details you submit (name, email address, phone number, organization) via forms or email links</li>
                    <li>Technical data (IP address, device and browser information, access logs)</li>
                    <li>Cookie identifiers and analytics data (where enabled)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">2. Why we collect it</h2>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li>To respond to enquiries and provide requested information</li>
                    <li>To operate, secure, and improve our website</li>
                    <li>To measure website and marketing performance, where enabled and consented to where required</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">3. Legal bases</h2>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li>Legitimate interests (website operation, security, and business communications)</li>
                    <li>Consent (non-essential cookies and analytics where required)</li>
                    <li>Contract or steps prior to entering a contract (where you request our services)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">4. Data controller</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    Lambda Softwares Limited (LSL) is the data controller for personal data collected through this website.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">5. Sharing of data</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    We may share website data with hosting, analytics, and email service providers who act under contract, confidentiality, and data protection obligations.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">6. International processing</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    Our website infrastructure and service providers may process data outside Kenya. Where this occurs, appropriate safeguards are applied in accordance with the Kenya Data Protection Act, 2019 and GDPR-aligned standards.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">7. Cookies</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                    We use strictly necessary cookies for core functionality and security. Analytics or marketing cookies are used only where enabled and, where required, with your consent. You may manage cookies via your browser settings and our cookie banner (where implemented).
                  </p>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    For more information, see our{" "}
                    <Link href="/privacy/cookies" className="text-[#324038] hover:underline">Cookie Notice</Link>.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">8. Automated decision-making</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    We do not carry out automated decision-making or profiling through this website that produces legal or similarly significant effects.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">9. Our processor role</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                    When lsl provides AI, system integration, or managed services to clients, we typically act as a data processor under client instructions and a written Data Processing Agreement (DPA).
                  </p>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    lsl is currently undergoing registration with the Office of the Data Protection Commissioner (ODPC) as a data processor.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">10. Your rights</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                    You may request access, correction, deletion, restriction, objection, portability (where applicable), or withdraw consent. Contact us using the details below.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">11. Contact details</h2>
                  <div className="bg-muted/30 p-6 rounded-lg space-y-2 text-[1.0625rem]">
                    <p><strong>Email:</strong> <a href="mailto:lambda@denning.pro" className="text-[#324038] hover:underline">lambda@denning.pro</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+254702931388" className="text-[#324038] hover:underline">+254 702 931 388</a></p>
                    <p><strong>Location:</strong> Nairobi, Kenya</p>
                    <p className="mt-4">
                      <strong>Privacy contact:</strong>{" "}
                      <a href="mailto:privacy@lambdasoftwares.tech" className="text-[#324038] hover:underline">privacy@lambdasoftwares.tech</a> (recommended)
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">12. Complaints</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    You may lodge a complaint with the Office of the Data Protection Commissioner (ODPC) in Kenya if concerns are not resolved.
                  </p>
                </section>

                <div className="bg-muted/30 p-6 rounded-lg border border-border/50 mt-8">
                  <h3 className="text-[1.25rem] font-semibold mb-3">Need More Details?</h3>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    For comprehensive information about how we process personal data, please see our{" "}
                    <Link href="/privacy" className="text-[#324038] hover:underline font-medium">full Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

