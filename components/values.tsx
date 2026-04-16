import {
  Shield,
  Heart,
  Sparkles,
  Target,
  Flame,
  Award,
  Briefcase
} from "lucide-react"

const values = [
  { icon: Shield, label: "Integrity" },
  { icon: Heart, label: "Dedicated" },
  { icon: Sparkles, label: "Sincere" },
  { icon: Target, label: "Trustworthy" },
  { icon: Flame, label: "Passionate" },
  { icon: Award, label: "Confident" },
  { icon: Briefcase, label: "Professional" },
]

export function Values() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What We Stand For
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            These principles guide everything we do and define who we are as a firm.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-6">
          {values.map((value) => (
            <div
              key={value.label}
              className="
                group flex items-center 
                gap-1 sm:gap-2
                rounded-full border border-border bg-card 
                px-4 py-2 sm:px-6 sm:py-3
                text-sm sm:text-base
                transition-all hover:border-accent hover:shadow-md
              "
            >
              <value.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent transition-transform group-hover:scale-110" />
              <span className="font-medium text-foreground">{value.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
