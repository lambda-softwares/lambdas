"use client"

import { type FocusEvent, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const serviceLinks = [
  { label: "AI Consulting & Integration", href: "/services/ai-consulting" },
  { label: "Enterprise Software & Platforms", href: "/services/software-development" },
]

const navigation = [
  { label: "Services", href: "/services", children: serviceLinks },
  { label: "Solutions", href: "/solutions" },
  { label: "Labs", href: "/products" },
  { label: "About", href: "/about" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const handleServicesBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null
    if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
      setIsServicesOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ borderBottom: "1px solid rgba(121, 89, 83, 0.08)" }}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="Lsl home">
          <Image
            src="/lsl-logo.png"
            alt="Lsl"
            width={140}
            height={140}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  onFocus={() => setIsServicesOpen(true)}
                  onBlur={handleServicesBlur}
                >
                  <Link
                    href={item.href}
                    className="text-[1rem] leading-[1.31] font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-0.5"
                    aria-haspopup="menu"
                    aria-expanded={isServicesOpen}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isServicesOpen ? "rotate-180" : "rotate-0",
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                  <div
                    className={cn(
                      "absolute left-0 z-20 mt-2 w-56 rounded-md border bg-popover p-2 shadow-md transition-all",
                      isServicesOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0",
                    )}
                  >
                    <div className="flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                      className="rounded-sm px-2 py-1.5 text-[1rem] leading-[1.31] text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-[1rem] leading-[1.31] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Talk to an AI Architect</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <div key={item.href} className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className="text-[1.0625rem] leading-[1.29] font-semibold hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-[1rem] leading-[1.31] text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="mt-8">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Talk to an AI Architect
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
