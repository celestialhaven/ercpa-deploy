import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[65dvh] sm:min-h-[75vh] lg:min-h-[85vh] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/ercpa-video-header-1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-5xl text-center text-white">
          <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium sm:mb-6 sm:text-sm">
            <Award className="h-4 w-4 shrink-0" />
            <span className="truncate sm:whitespace-nowrap">
              Celebrating 50+ Years of Excellence
            </span>
          </p>

          <h1 className="mx-auto max-w-6xl text-balance text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            Trusted Accounting Services
            <span className="block">for Growing Businesses</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base lg:text-lg">
            Professional tax, accounting, and advisory services tailored to your business goals.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="w-full border border-white/30 text-white hover:bg-white/95 hover:text-black sm:w-auto"
              asChild
            >
              <Link href="tel:4178870585" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                417-887-0585
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}