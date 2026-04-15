import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Youtube, href: "https://youtube.com" },
]

const navigation = {
  services: [
    { name: "Business Services", href: "#services" },
    { name: "Individual Services", href: "#services" },
    { name: "Specialized Services", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#careers" },
  ],
  resources: [
    { name: "Contact Us", href: "#contact" },
    { name: "Client Portal", href: "#" },
    { name: "News & Updates", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* GRID */}
        <div className="grid gap-12 text-center lg:grid-cols-4 lg:text-left">

          {/* LOGO + ABOUT */}
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="flex items-center justify-center gap-3 lg:justify-start">
              <Image
                src="/ercpa.webp"
                alt="Logo"
                width={120}
                height={40}
                className="h-14 w-auto object-contain sm:h-16 md:h-20 lg:h-24"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Certified Public Accountants serving businesses and individuals 
              for over 50 years.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-5 flex justify-center gap-2 md:justify-start">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 text-[#680001] transition hover:bg-gray-300 hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-4 flex flex-col items-center space-y-3 lg:items-start">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 flex flex-col items-center space-y-3 lg:items-start">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="mt-4 flex flex-col items-center space-y-3 lg:items-start">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Elliott, Robinson & Company, LLP. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}