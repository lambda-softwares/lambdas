import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/about#careers" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  contact: [
    { label: "Contact", href: "/contact" },
    { label: "Email", href: "mailto:hello@lsl.co.ke" },
  ],
}

const socialLinks = [
  { name: "X", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2" aria-label="Lsl home">
              <Image
                src="/Lsl_logo.svg"
                alt="Lsl"
                width={200}
                height={200}
                className="h-24 w-auto md:h-28"
                priority={false}
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              From software to intelligent systems. AI consulting, integration, and product development from Kenya to
              the world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get in touch</h3>
            <ul className="space-y-2 mb-4">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4">
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

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Lsl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
