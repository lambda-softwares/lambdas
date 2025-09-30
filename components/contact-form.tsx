"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Loader2 } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  sector: z.string().min(1, "Please select your industry"),
  message: z.string().min(10, "Please provide more details about your project"),
  budget: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected"), // Honeypot field
})

type ContactFormData = z.infer<typeof contactSchema>

const sectors = [
  "Legal & Justice",
  "Agriculture (AgriTech)",
  "Healthcare & Life Sciences",
  "Finance & FinTech",
  "Education & Training",
  "Manufacturing & Industry 4.0",
  "Retail & E-Commerce",
  "Transport & Logistics",
  "Energy & Utilities",
  "Telecommunications & ICT",
  "Public Sector & Governance",
  "Media & Entertainment",
  "Real Estate & Construction",
  "Tourism & Hospitality",
  "Consumer Apps",
  "Other",
]

const budgetRanges = ["Exploration", "$10k-$50k", "$50k-$200k", "$200k+"]

interface ContactFormProps {
  onSuccess: () => void
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitTime] = useState(Date.now())

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      sector: "",
      message: "",
      budget: "",
      honeypot: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    // Timing check - prevent too fast submissions
    const timeTaken = Date.now() - submitTime
    if (timeTaken < 3000) {
      console.log("Submission too fast, likely bot")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        onSuccess()
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      // In a real app, you'd show an error message to the user
      alert("We could not submit your request. Please email hello@lsl.co.ke.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input {...field} tabIndex={-1} autoComplete="off" />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company *</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sector"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {sector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What problem are you solving? *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your current systems, challenges, and what you're hoping to achieve with AI integration..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget range</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range (optional)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-4">
          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            We'll only use your info to contact you about this request.
          </p>
        </div>
      </form>
    </Form>
  )
}
