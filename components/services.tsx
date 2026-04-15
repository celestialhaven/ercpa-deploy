import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  UserRound,
  FileText,
  Users,
  Briefcase,
  Newspaper,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Business Services",
    caption:
      "Core Business Services | Audit Services | Consulting Services | Specialized Business Services",
    cta: "Explore Business Services",
    href: "/",
  },
  {
    icon: UserRound,
    title: "Individual Services",
    caption:
      "Personal Tax | Consulting Services | Estate & Gift Planning",
    cta: "Explore Individual Services",
    href: "/",
  },
  {
    icon: FileText,
    title: "Specialized Services",
    caption:
      "Business Valuations | Cost Segregation | Fraud | Internal Controls | Litigation Support | Non-profit Organizations",
    cta: "Explore Specialized Services",
    href: "/",
  },
  {
    icon: Users,
    title: "Staff Profiles",
    caption:
      "Our clients benefit from the years of combined experience, expertise, and diverse background of our staff.",
    cta: "Meet Our Team",
    href: "/",
  },
  {
    icon: Briefcase,
    title: "Careers",
    caption:
      "Available Positions | Atmosphere | Advancement | Workload | Compensation | Recruiting",
    cta: "View Career Opportunities",
    href: "/",
  },
  {
    icon: Newspaper,
    title: "Videos & News",
    caption: "Testimonial Videos | Firm News",
    cta: "Read More",
    href: "/",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#f5f5f5] py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a0000]">
            Explore Our Firm
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Professional Accounting & Advisory Solutions
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Explore the services, people, and opportunities that define our firm.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Card
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-border/70 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <CardContent className="flex h-full flex-col px-8 py-10 text-center">
                  
                  <div
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#7a0000] transition-transform duration-300 group-hover:-translate-y-[10px]"
                  >
                    <Icon
                      className="h-7 w-7 text-gray-600"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* ✅ UPDATED HEADER (matches hero style) */}
                  <h3 className="mt-6 font-serif text-[1.35rem] font-bold leading-tight tracking-tight text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[100px] text-sm leading-7 text-muted-foreground">
                    {service.caption}
                  </p>

                  <div className="mt-auto pt-6">
                    <Button
                      asChild
                      variant="outline"
                      className="group/btn rounded-full border-[#7a0000] px-6 text-[#7a0000] hover:bg-[#7a0000] hover:text-white"
                    >
                      <Link href={service.href}>
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}