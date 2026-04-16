"use client"

import { useState } from "react"
import { CheckCircle, Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const approach = [
  "We Listen",
  "We Evaluate",
  "We Create Solutions Designed to Meet Your Needs",
]

export function About() {
  const [open, setOpen] = useState(false)

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elliott-robinson-office.webp"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* Gradient Overlay (premium effect) */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-white">
              Our Story
            </p>

            <h2 className="mt-2 font-serif text-4xl font-bold tracking-tight leading-tight text-white sm:text-4xl lg:text-5xl">
              Celebrating 50+ Years of Trusted Service
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Since our founding, Elliott, Robinson & Company has been dedicated to providing
              exceptional accounting and advisory services to businesses and individuals
              throughout the Springfield area and beyond.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Our team of certified public accountants brings decades of combined experience
              across diverse industries, ensuring that no matter your financial needs,
              we have the expertise to help you succeed.
            </p>

            {/* PLAY BUTTON */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="mt-8 inline-flex items-center gap-2 px-8 py-6 text-base font-semibold rounded-lg cursor-pointer">
                  <Play className="h-4 w-4 fill-current" />
                  Watch Our Story
                </Button>
              </DialogTrigger>

              <DialogContent
                className="!w-[95vw] !max-w-[1200px] border-0 bg-black p-0 overflow-hidden
                          [&>button]:bg-white 
                          [&>button]:text-black 
                          [&>button]:opacity-60 
                          [&>button]:rounded-full
                          [&>button]:p-2
                          [&>button]:hover:bg-gray-200"
              >
                <div className="w-full aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/97rbLLDMguY?autoplay=1"
                    title="Our Story Video"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 shadow-2xl">

              <h3 className="font-serif text-2xl font-semibold text-white">
                Our Approach
              </h3>

              <div className="mt-6 space-y-4">
                {approach.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <CheckCircle className="h-4 w-4 text-white/90 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]" />
                    </div>

                    <p className="text-lg text-white">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/20 pt-8">
                <h4 className="font-serif text-lg font-semibold text-white">
                  Our Mission
                </h4>
                <p className="mt-2 text-white/70">
                  Where Clients Come First — We are committed to building lasting
                  relationships based on integrity, expertise, and personalized service.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}