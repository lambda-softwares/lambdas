import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

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
                <h1 className="text-[2.125rem] md:text-[2.75rem] font-semibold text-balance mb-6 leading-[1.2] tracking-[-0.02em]">Privacy Policy</h1>
                <p className="text-[1.25rem] leading-[1.25] text-muted-foreground">Last updated: January 2024</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Information We Collect</h2>
                <p>
                  When you contact us through our website, we collect information you provide directly, such as your
                  name, email address, company information, and any messages you send us.
                </p>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our services that may interest you</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2>Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy or as required by law.
                </p>

                <h2>Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:hello@lsl.co.ke" className="text-indigo-600 hover:text-indigo-700">
                    hello@lsl.co.ke
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
