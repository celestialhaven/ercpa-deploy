import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Youtube, href: "https://youtube.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={140}
                height={50}
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm text-black">
              Certified Public Accountants serving businesses and individuals
              for over 50 years.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#680001] text-white transition hover:opacity-90"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE LOCATIONS */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center lg:text-left">

            {/* Springfield */}
            <div>
              <h3 className="text-lg font-semibold">Springfield</h3>
              <p className="mt-3 text-sm text-black leading-relaxed">
                2305 S. Blackman Road, Suite D<br />
                Springfield, MO 65809<br />
                <span className="block mt-2"><strong>P</strong> 417.887.0585</span>
                <span><strong>F</strong> 417.732.1003</span>
              </p>
            </div>

            {/* Republic */}
            <div>
              <h3 className="text-lg font-semibold">Republic</h3>
              <p className="mt-3 text-sm text-black leading-relaxed">
                760 East U.S. Highway 60<br />
                Republic, MO 65738<br />
                <span className="block mt-2"><strong>P</strong> 417.732.7252</span>
                <span><strong>F</strong> 417.732.1003</span>
              </p>
            </div>

            {/* Branson */}
            <div>
              <h3 className="text-lg font-semibold">Branson</h3>
              <p className="mt-3 text-sm text-black leading-relaxed">
                192 Expressway Lane, Suite 240<br />
                Branson, MO 65616<br />
                <span className="block mt-2"><strong>P</strong> 417.336.4169</span>
                <span><strong>F</strong> 417.339.4669</span>
              </p>
            </div>

          </div>

          {/* RECENT NEWS */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h3 className="text-lg font-semibold">Recent News</h3>

            <div className="mt-4 space-y-2 text-sm text-black">
              <p className="hover:text-black transition cursor-pointer">
                From the Ground Up: Elliott, Robinson & Co. headquarters addition
              </p>
              <p className="hover:text-black transition cursor-pointer">
                Elliott Robinson & Co Expands Headquarters
              </p>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-black/30/20 pt-8">
          <p className="text-center text-sm text-black">
            &copy; {new Date().getFullYear()} Elliott, Robinson & Company, LLP. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}