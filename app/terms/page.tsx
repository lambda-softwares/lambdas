import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">
                  Terms of Service
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Terms of Service</h1>
                <p className="text-xl text-muted-foreground">Last updated: January 2024</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2>Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of
                  this agreement.
                </p>

                <h2>Services</h2>
                <p>
                  Lsl provides AI consulting, software development, and technology integration services. Specific terms
                  for each engagement will be outlined in separate service agreements.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion and
                  other matters related to the site are protected under applicable copyrights, trademarks and other
                  proprietary rights.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                  Lsl shall not be liable for any indirect, incidental, special, consequential or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>

                <h2>Governing Law</h2>
                <p>
                  These terms shall be interpreted and governed in accordance with the laws of Kenya, without regard to
                  its conflict of law provisions.
                </p>

                <h2>Contact Information</h2>
                <p>
                  Questions about the Terms of Service should be sent to us at{" "}
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
