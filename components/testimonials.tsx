import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "We&apos;ve been with Elliott Robinson for almost 50 years. I look at them as part of my team.",
    author: "Jeff Neuenschwander",
    role: "Avis Budget Licensee",
    category: "Client Impact",
  },
  {
    quote: "Elliott was one of those firms that I wanted my cherished students to go to.",
    author: "Dr. Penny Clayton",
    role: "Drury University, Retired Accounting Professor",
    category: "Career Development Impact",
  },
  {
    quote: "They help more businesses get created, expand, and grow, and create economic opportunity for everyone who lives here.",
    author: "Matt Morrow",
    role: "Springfield Area Chamber of Commerce President",
    category: "Community Impact",
  },
]

export function Testimonials() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Testimonials
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Making an Impact
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            Hear from the clients, educators, and community leaders who have 
            experienced the Elliott Robinson difference.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur"
            >
              <CardContent className="pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
                  {testimonial.category}
                </p>
                <Quote className="mb-4 h-8 w-8 text-primary-foreground/30" />
                <blockquote className="text-lg leading-relaxed text-primary-foreground">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-6 border-t border-primary-foreground/10 pt-6">
                  <p className="font-semibold text-primary-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
