"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const managementTeam = [
  { name: "Robert J. Helm, CPA", role: "Partner", image: "/team/robert-helm.webp", href: "#" },
  { name: "Thomas J. Everett, CPA, CGMA", role: "Partner", image: "/team/thomas-everett.webp", href: "#" },
  { name: "Mathew J. Solidum, CPA", role: "Managing Partner", image: "/team/matthew-solidum.webp", href: "#" },
  { name: "Amanda J. Kastler, CPA, CFE", role: "Partner", image: "/team/amanda-kastler.webp", href: "#" },
  { name: "Stephanie J. Rice, CPA, CFE", role: "Partner", image: "/team/stephanie-brown.webp", href: "#" },
  { name: "Carrie C. Brown, CPA", role: "Partner", image: "/team/carrie-brown.webp", href: "#" },
  { name: "Katie S. Porter, CPA", role: "Manager", image: "/team/katie-porter.webp", href: "#" },
  { name: "Marissa L. Randolph, CPA", role: "Manager", image: "/team/marissa-randolph.webp", href: "#" },
  { name: "Laurie D. Bebee", role: "Partner", image: "/team/laurie-bebee.webp", href: "#" },
  { name: "Nichole Springer, CPA", role: "Manager", image: "/team/nichole-springer.webp", href: "#" },
  { name: "Dana J. Vermule, CPA", role: "Partner", image: "/team/dana-vermule.webp", href: "#" },
  { name: "Saralyn Forsman, CPA", role: "Manager", image: "/team/saralyn-glascock.webp", href: "#" },
  { name: "Briana Bates, CPA", role: "Manager", image: "/team/briana-bates.webp", href: "#" },
  { name: "Brittany K. Hopp, CPA, CFE, CVA", role: "Partner", image: "/team/brittany-hopp.webp", href: "#" },
  { name: "Stephen Gintz, CPA", role: "Partner", image: "/team/stephen-gintz.webp", href: "#" },
]

const additionalTeam = [
  "Laurie D. Bebee",
  "Nichole Springer, CPA",
  "Dana J. Vermule, CPA",
  "Saralyn Forsman, CPA",
  "Briana Bates, CPA",
  "Brittany K. Hopp, CPA, CFE, CVA",
  "Stephen Gintz, CPA",
]

type TeamMember = {
  name: string
  role: string
  image: string
  href: string
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

function TeamCard({
  member,
  alwaysShowButton = false,
}: {
  member: TeamMember
  alwaysShowButton?: boolean
}) {
  return (
    <Card className="group h-full overflow-hidden border-border bg-card p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[22rem] sm:h-[24rem] lg:h-80 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
      </div>

      <CardContent className="px-4 pt-0 pb-8 text-center">
        <h3 className="mt-3 text-[18px] font-semibold text-primary">{member.name}</h3>
        <p className="mt-1 text-[14px] text-muted-foreground">{member.role}</p>

        <Button
          asChild
          className={
            alwaysShowButton
              ? "mt-4 px-8 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90"
              : "mt-4 px-8 py-2.5 bg-primary text-primary-foreground opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary/90"
          }
        >
          <Link href={member.href}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function Team() {
  const [itemsPerSlide, setItemsPerSlide] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 640) {
        setItemsPerSlide(2) // tablet
      } else {
        setItemsPerSlide(1) // mobile
      }
    }

    updateItemsPerSlide()
    window.addEventListener("resize", updateItemsPerSlide)
    return () => window.removeEventListener("resize", updateItemsPerSlide)
  }, [])

  const slides = useMemo(
    () => chunkArray(managementTeam, itemsPerSlide),
    [itemsPerSlide]
  )

  useEffect(() => {
    if (currentSlide > slides.length - 1) {
      setCurrentSlide(0)
    }
  }, [slides.length, currentSlide])

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our People
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our clients benefit from years of combined experience, expertise, and dedication.
          </p>
        </div>

        {/* MOBILE / TABLET CAROUSEL */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full shrink-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {slide.map((member) => (
                      <TeamCard
                        key={member.name}
                        member={member}
                        alwaysShowButton
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTROLS + PAGINATION */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${currentSlide === index
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* LAPTOP GRID: 3 COLUMNS */}
        <div className="hidden gap-8 lg:grid xl:hidden lg:grid-cols-3">
          {managementTeam.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* LARGE SCREEN GRID: 4 COLUMNS */}
        <div className="hidden gap-8 xl:grid xl:grid-cols-4">
          {managementTeam.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}