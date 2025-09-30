"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "hello@lsl.co.ke",
    action: "mailto:hello@lsl.co.ke",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Nairobi, Kenya",
    action: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "1-2 business days",
    action: null,
  },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank you for reaching out!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our AI architects will reach out within 1–2 business days to discuss your project and explore how we can
                help transform your systems.
              </p>
              <p className="text-muted-foreground">
                In the meantime, feel free to explore our{" "}
                <a href="/solutions" className="text-indigo-600 hover:text-indigo-700 underline">
                  solutions
                </a>{" "}
                or{" "}
                <a href="/services" className="text-indigo-600 hover:text-indigo-700 underline">
                  services
                </a>{" "}
                for more insights.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Contact Us
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">Let's build something intelligent</h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                Tell us about your system, data, and goals—we'll propose the fastest path to value. Whether you need AI
                integration, custom development, or strategic consulting, we're here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Start the conversation</CardTitle>
                    <CardDescription className="text-base">
                      Share your project details and we'll get back to you with a tailored approach.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm onSuccess={() => setIsSubmitted(true)} />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon
                      const content = (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-indigo-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      )

                      return info.action ? (
                        <a
                          key={index}
                          href={info.action}
                          className="block hover:bg-muted/50 p-4 rounded-lg transition-colors"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={index} className="p-4">
                          {content}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What to expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-indigo-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Initial Response</h4>
                        <p className="text-sm text-muted-foreground">We'll acknowledge your inquiry within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-indigo-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Discovery Call</h4>
                        <p className="text-sm text-muted-foreground">
                          30-minute call to understand your needs and challenges
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-indigo-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Proposal</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed approach, timeline, and investment outline
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
