"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Phone } from "lucide-react"

const topLinks = [
  { name: "Pay Online", href: "#" },
  { name: "Client Portal", href: "#" },
  { name: "Staff Profiles", href: "#" },
  { name: "Contact Us", href: "#" },
]

const navigation = [
  { name: "About us", href: "#" },
  { name: "Business Services", href: "#" },
  { name: "Individual Services", href: "#" },
  { name: "Specialized Services", href: "#" },
  { name: "Careers", href: "#" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Header - not sticky */}
      <div className="w-full hidden lg:block bg-[#680001] text-white">
        <div className="mx-auto flex h-[52px] max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="hidden items-center gap-3 md:flex">
            {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="flex h-7 w-7 items-center justify-center bg-white text-[#680001] transition hover:bg-gray-200"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
            <a
              href="tel:4178870585"
              className="flex items-center gap-2 transition hover:opacity-80"
            >
              <Phone className="h-4 w-4" />
              417.887.0585
            </a>
            <Link href="#" className="transition hover:opacity-80">
              Pay Online
            </Link>
            <Link href="#" className="transition hover:opacity-80">
              Client Portal
            </Link>
            <Link href="#" className="transition hover:opacity-80">
              Staff Profiles
            </Link>
            <Link href="#" className="transition hover:opacity-80">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header - sticky */}
      <div className="sticky top-0 z-50 w-full border-b border-border bg-[#f3f3f3]">
        <div className="mx-auto flex h-[75px] lg:h-[95px] max-w-7xl items-center justify-between px-2 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={120}
              height={40}
              className="h-16 w-auto object-contain sm:h-16 md:h-16 lg:h-[72px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-[var(--primary)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-12 w-12 flex items-center justify-center 
                            text-black hover:text-black 
                            hover:bg-transparent focus:bg-transparent active:bg-transparent"
                >
                  <Menu className="h-9 w-9 scale-x-200" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[320px] bg-white p-0 sm:w-[380px] lg:hidden"
              >
                <div className="flex h-full flex-col">
                  {/* Top area */}
                  <div className="border-b border-border px-6 py-5">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center"
                    >
                      <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={140}
                        height={45}
                        className="h-12 w-auto object-contain"
                      />
                    </Link>
                  </div>

                  {/* Scrollable content */}
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    {/* Main navigation */}
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Main Menu
                      </p>

                      <nav className="flex flex-col gap-1">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-md px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </nav>
                    </div>

                    {/* Utility links */}
                    <div className="mt-8 border-t border-border pt-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Quick Links
                      </p>

                      <div className="flex flex-col gap-1">
                        {topLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom contact area */}
                  <div className="border-t border-border bg-muted/40 px-6 py-5">
                    <div className="space-y-4">
                      <a
                        href="tel:4178870585"
                        className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#680001] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                      >
                        <Phone className="h-4 w-4" />
                        <span>417.887.0585</span>
                      </a>

                      <div className="flex items-center justify-center gap-3">
                        {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                          <Link
                            key={i}
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-[#680001] transition hover:bg-gray-100"
                          >
                            <Icon className="h-4 w-4" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  )
}