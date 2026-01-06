import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CookieNoticePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">
                  Cookie Notice
                </Badge>
                <h1 className="text-[2.125rem] md:text-[2.75rem] font-semibold text-balance mb-6 leading-[1.2] tracking-[-0.02em]">
                  Cookie Notice
                </h1>
                <p className="text-[1.25rem] leading-[1.25] text-muted-foreground">
                  Effective date: 1 January 2026 | Version: 1.1
                </p>
                <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Lambda Softwares Limited (LSL) uses cookies and similar technologies to ensure our website functions properly and to understand how it is used.
                </p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">Types of cookies we use</h2>
                  
                  <div className="bg-muted/30 p-6 rounded-lg border border-border/50 mb-6">
                    <h3 className="text-[1.25rem] font-semibold mb-3">Strictly necessary cookies</h3>
                    <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                      Required for website functionality and security. These cookies are essential for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg border border-border/50 mb-6">
                    <h3 className="text-[1.25rem] font-semibold mb-3">Analytics cookies</h3>
                    <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                      Help us understand website usage and improve performance. These cookies are used only where enabled and consented to where required. They allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most and least popular and see how visitors move around the site.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                    <h3 className="text-[1.25rem] font-semibold mb-3">Marketing cookies</h3>
                    <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                      Used to measure campaign effectiveness. These cookies are used only where enabled and consented to. They may be set through our site by our advertising partners to build a profile of your interests and show you relevant content on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">Managing cookies</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                    You can control cookies through your browser settings and, where implemented, our cookie consent banner. Disabling certain cookies may affect site functionality.
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                    <h3 className="text-[1.25rem] font-semibold mb-3">Browser settings</h3>
                    <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-4">
                      Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience using our website. You can find out more about how to manage cookies in popular browsers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] leading-[1.29] text-muted-foreground">
                      <li>Google Chrome</li>
                      <li>Mozilla Firefox</li>
                      <li>Apple Safari</li>
                      <li>Microsoft Edge</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">Cookie consent banner</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    Where implemented, our cookie consent banner allows you to choose which types of cookies you accept. You can change your preferences at any time through the banner or your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-[1.5rem] font-semibold mb-4">More information</h2>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground">
                    For more information on how we process personal data, including data collected through cookies, please see our{" "}
                    <Link href="/privacy" className="text-[#324038] hover:underline">Privacy Policy</Link> and{" "}
                    <Link href="/privacy/website-notice" className="text-[#324038] hover:underline">Website Privacy Notice</Link>.
                  </p>
                </section>

                <div className="bg-muted/30 p-6 rounded-lg border border-border/50 mt-8">
                  <h3 className="text-[1.25rem] font-semibold mb-3">Contact Us</h3>
                  <p className="text-[1.0625rem] leading-[1.29] text-muted-foreground mb-2">
                    If you have questions about our use of cookies, please contact:
                  </p>
                  <ul className="list-none space-y-1 text-[1.0625rem] leading-[1.29]">
                    <li><strong>Email:</strong> <a href="mailto:lambda@denning.pro" className="text-[#324038] hover:underline">lambda@denning.pro</a></li>
                    <li><strong>Privacy contact:</strong> <a href="mailto:privacy@lambdasoftwares.tech" className="text-[#324038] hover:underline">privacy@lambdasoftwares.tech</a></li>
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

