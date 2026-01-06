import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">
                  Privacy Policy
                </Badge>
                <h1 className="text-[2.125rem] md:text-[2.75rem] font-semibold text-balance mb-6 leading-[1.2] tracking-[-0.02em]">
                  Privacy Policy (Controller Notice)
                </h1>
                <p className="text-[1.25rem] leading-[1.25] text-muted-foreground">
                  Effective date: 1 January 2026 | Version: 1.1
                </p>
                <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mt-4 max-w-2xl mx-auto">
                  This Privacy Policy explains how we collect, use, share, store, and protect personal data when we act as a data controller. 
                  For a shorter overview, see our{" "}
                  <Link href="/privacy/website-notice" className="text-[#324038] hover:underline font-medium">
                    Website Privacy Notice
                  </Link>
                  .
                </p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                  <h2 className="text-[1.375rem] font-semibold mb-3">Quick Reference</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                    When we process personal data on behalf of a client as a data processor, the client's privacy notice and our Data Processing Agreement (DPA) apply.
                  </p>
                </div>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">1. Who we are</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                    We are an AI consulting, integration, and product-development company headquartered in Nairobi, Kenya. We build and integrate AI-enabled systems for organizations and also develop consumer-facing applications.
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg space-y-2 text-[1.0625rem]">
                    <p><strong>Legal name:</strong> Lambda Softwares Limited (LSL)</p>
                    <p><strong>Country:</strong> Kenya</p>
                    <p><strong>City:</strong> Nairobi</p>
                    <p><strong>Website:</strong> <a href="https://www.lambdasoftwares.tech" className="text-[#324038] hover:underline">https://www.lambdasoftwares.tech</a></p>
                    <p><strong>Email:</strong> <a href="mailto:lambda@denning.pro" className="text-[#324038] hover:underline">lambda@denning.pro</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+254702931388" className="text-[#324038] hover:underline">+254 702 931 388</a></p>
                    <p><strong>Postal address:</strong> Nairobi, Kenya</p>
                    <p className="mt-4">
                      <strong>Privacy contact:</strong> Data Protection Officer / Privacy Lead –{" "}
                      <a href="mailto:privacy@lambdasoftwares.tech" className="text-[#324038] hover:underline">privacy@lambdasoftwares.tech</a> (recommended)
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">2. Scope</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">This policy applies to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li>Our website and marketing pages</li>
                    <li>Pre-contract engagements (sales, demos, proposals)</li>
                    <li>Our internal operations (recruitment, HR, finance, vendor management)</li>
                    <li>Our consumer applications and innovation-lab products (if and when launched)</li>
                    <li>Events, webinars, and community programs we host or co-host</li>
                  </ul>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mt-4">
                    <strong>Client services note:</strong> When we provide services that involve client-controlled data (e.g., deploying models into a client system), the client is typically the data controller and we act as a data processor.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">3. Key definitions</h2>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li><strong>Personal data:</strong> information relating to an identified or identifiable individual</li>
                    <li><strong>Sensitive personal data:</strong> special categories (e.g., health, biometrics) requiring heightened protection</li>
                    <li><strong>Controller:</strong> the party that determines the purposes and means of processing</li>
                    <li><strong>Processor:</strong> the party that processes personal data on behalf of the controller</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">4. Personal data we collect</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">Depending on how you interact with us, we may collect:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li>Identity and contact data (name, email, phone, organization, job title)</li>
                    <li>Account data (login identifiers, authentication tokens, user preferences) for our apps where applicable</li>
                    <li>Communications (messages you send us, support tickets, call notes)</li>
                    <li>Business and contract data (billing contacts, invoices, purchase orders)</li>
                    <li>Recruitment data (CV, work history, education, references) if you apply for a role</li>
                    <li>Technical data (IP address, device identifiers, browser type, log data, cookie identifiers)</li>
                    <li>Event participation data (attendance, dietary preferences if voluntarily provided)</li>
                  </ul>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mt-4">
                    We do not intentionally collect children's data. If our products target minors in the future, we will implement age-gating and appropriate parental/guardian consent mechanisms.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">5. Sources of personal data</h2>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li>Directly from you (forms, emails, calls, meetings, events)</li>
                    <li>From your organization (where your employer engages us)</li>
                    <li>From publicly available sources (e.g., corporate websites, professional profiles) where lawful</li>
                    <li>From cookies and similar technologies on our website (see{" "}
                      <Link href="/privacy/cookies" className="text-[#324038] hover:underline">Cookies section</Link>)
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">6. Why we process personal data and our legal bases</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                    We process personal data for the purposes below. We rely on legal bases recognized under the Kenya Data Protection Act, 2019 and aligned with the GDPR:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border text-[1.0625rem]">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="border border-border p-3 text-left font-semibold">Purpose</th>
                          <th className="border border-border p-3 text-left font-semibold">Legal basis (Kenya DPA / GDPR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3">Provide and improve our services</td>
                          <td className="border border-border p-3">Contract; legitimate interests; and/or consent (where required)</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Respond to inquiries and provide customer support</td>
                          <td className="border border-border p-3">Legitimate interests; contract</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Sales, marketing, and relationship management</td>
                          <td className="border border-border p-3">Legitimate interests; consent for certain marketing/cookies</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Operate our website and ensure security</td>
                          <td className="border border-border p-3">Legitimate interests; legal obligation where applicable</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Recruitment and hiring</td>
                          <td className="border border-border p-3">Legitimate interests; steps prior to entering a contract</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Compliance and legal requirements (tax, audit, dispute)</td>
                          <td className="border border-border p-3">Legal obligation; legitimate interests</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3">Research and product development for our own consumer apps (where applicable)</td>
                          <td className="border border-border p-3">Legitimate interests; consent where required; contract for app users</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">7. Cookies and similar technologies</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                    We use cookies and similar technologies to operate our website, remember preferences, analyze traffic, and (where permitted) support marketing.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li><strong>Strictly necessary cookies:</strong> required for core site functionality and security</li>
                    <li><strong>Analytics cookies:</strong> help us understand site usage and improve performance</li>
                    <li><strong>Marketing cookies:</strong> used to measure and improve campaigns (used only with consent where required)</li>
                  </ul>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mt-4">
                    You can manage cookie preferences via your browser settings and, where implemented, our cookie banner/consent manager. For more details, see our{" "}
                    <Link href="/privacy/cookies" className="text-[#324038] hover:underline">Cookie Notice</Link>.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">8. Sharing of personal data</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">We may share personal data with:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li>Service providers (e.g., hosting, email, analytics, customer support tools) under contract and confidentiality</li>
                    <li>Professional advisers (lawyers, auditors, insurers) where necessary</li>
                    <li>Government or regulators where required by law or to protect rights</li>
                    <li>Event partners where you register for a co-hosted event (we will disclose this at registration)</li>
                  </ul>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mt-4 font-semibold">
                    We do not sell personal data.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">9. International transfers</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    Some of our service providers may process data outside Kenya or the EEA/UK. Where transfers occur, we implement appropriate safeguards, such as contractual protections, vendor due diligence, and, where applicable, Standard Contractual Clauses or equivalent mechanisms.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">10. Data security</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    We implement technical and organizational measures appropriate to the risk, which may include access controls, encryption in transit, logging, backups, secure development practices, and least-privilege access management. No method of transmission or storage is 100% secure; however, we continually improve controls.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">11. Data retention</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    We retain personal data only as long as necessary for the purposes described above, unless a longer period is required or permitted by law. We maintain a retention schedule and perform periodic reviews. When data is no longer required, we delete, anonymize, or securely archive it.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">12. Automated decision-making and profiling</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    Where we use automated decision-making or profiling in our own products, we will provide clear notices and, where required, offer meaningful information about the logic involved and the expected consequences. You may object to certain types of profiling or request human review where applicable.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">13. Your rights</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">Subject to applicable law, you have rights including:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    <li><strong>Access:</strong> request confirmation and a copy of your personal data</li>
                    <li><strong>Correction:</strong> request correction of inaccurate or incomplete data</li>
                    <li><strong>Deletion:</strong> request deletion where grounds apply</li>
                    <li><strong>Objection:</strong> object to processing based on legitimate interests or for direct marketing</li>
                    <li><strong>Restriction:</strong> request limitation of processing in certain circumstances</li>
                    <li><strong>Portability:</strong> receive certain data in a structured, commonly used format (where applicable)</li>
                    <li><strong>Withdraw consent:</strong> where processing is based on consent, at any time</li>
                  </ul>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mt-4">
                    To exercise rights, contact us using the details in section 1. We may need to verify your identity.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">14. Complaints</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    If you have concerns, contact us first so we can address them. You also have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) in Kenya and, where applicable, a supervisory authority in the EEA/UK.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">15. Changes to this policy</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will post updates on our website and update the effective date. Material changes may be notified via email or in-product notices where appropriate.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">16. Appendix: Client services (processor role) summary</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                    When lsl processes personal data as a processor for a client, we do so under a written contract/DPA. In that context, the client controls the purposes and means of processing, and the client is responsible for providing notices to data subjects.
                  </p>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    lsl is currently undergoing registration with the Office of the Data Protection Commissioner (ODPC) as a data processor.
                  </p>
                </section>

                <div className="bg-muted/30 p-6 rounded-lg border border-border/50 mt-8">
                  <h3 className="text-[1.25rem] font-semibold mb-3">Contact Us</h3>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-2">
                    For privacy-related inquiries, please contact:
                  </p>
                  <ul className="list-none space-y-1 text-[1.0625rem] leading-[1.29]">
                    <li><strong>Email:</strong> <a href="mailto:privacy@lambdasoftwares.tech" className="text-[#324038] hover:underline">privacy@lambdasoftwares.tech</a> (recommended)</li>
                    <li><strong>General:</strong> <a href="mailto:lambda@denning.pro" className="text-[#324038] hover:underline">lambda@denning.pro</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+254702931388" className="text-[#324038] hover:underline">+254 702 931 388</a></li>
                    <li><strong>Location:</strong> Nairobi, Kenya</li>
                  </ul>
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
