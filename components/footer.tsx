import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/about#careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Website Privacy Notice", href: "/privacy/website-notice" },
    { label: "Cookie Notice", href: "/privacy/cookies" },
    { label: "Terms", href: "/terms" },
  ],
  contact: [
    { label: "Contact", href: "/contact" },
    { label: "Email", href: "mailto:lambda@denning.pro" },
    { label: "Phone", href: "tel:+254702931388" },
  ],
}

const socialLinks = [
  { name: "X", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#EFEEE9", borderTop: "1px solid rgba(121, 89, 83, 0.05)" }}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2" aria-label="Lsl home">
              <Image
                src="/lsl-logo.png"
                alt="Lsl"
                width={200}
                height={200}
                className="h-24 w-auto md:h-28"
                priority={false}
              />
            </Link>
            <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground max-w-xs mb-4">
              Kenya-native, globally oriented AI consulting, integration, and product-development company. Bridge from traditional software to intelligent systems.
            </p>
            <div className="flex flex-col gap-2 text-[0.875rem] text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#324038]"></span>
                <span>Zero-disruption guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#324038]"></span>
                <span>100% system preservation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#324038]"></span>
                <span>Security & compliance built-in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] leading-[1.33] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] leading-[1.33] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get in touch</h3>
            <ul className="flex flex-col gap-2 mb-4">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] leading-[1.33] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: "1px solid rgba(121, 89, 83, 0.08)" }}>
          <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground">© 2026 Lsl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
