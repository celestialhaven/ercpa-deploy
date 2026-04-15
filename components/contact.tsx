"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Get in Touch
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Experience Our Services?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Let's start planning. Whether you need tax advice, business consulting,
            or audit services, we're here to help.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* FORM SIDE */}
          <div className="self-start w-full rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Send Us a Message
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <FieldGroup>
                  <Field className="space-y-3">
                    <FieldLabel className="text-sm font-medium text-foreground">
                      First Name
                    </FieldLabel>
                    <Input
                      placeholder="John"
                      required
                      className="h-12 rounded-xl border-border bg-background px-4"
                    />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field className="space-y-3">
                    <FieldLabel className="text-sm font-medium text-foreground">
                      Last Name
                    </FieldLabel>
                    <Input
                      placeholder="Smith"
                      required
                      className="h-12 rounded-xl border-border bg-background px-4"
                    />
                  </Field>
                </FieldGroup>
              </div>

              <FieldGroup>
                <Field className="space-y-3">
                  <FieldLabel className="text-sm font-medium text-foreground">
                    Email Address
                  </FieldLabel>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12 rounded-xl border-border bg-background px-4"
                  />
                </Field>
              </FieldGroup>

              <div className="grid gap-6 sm:grid-cols-2">
                <FieldGroup>
                  <Field className="space-y-3">
                    <FieldLabel className="text-sm font-medium text-foreground">
                      Organization
                    </FieldLabel>
                    <Input
                      placeholder="Company name (optional)"
                      className="h-12 rounded-xl border-border bg-background px-4"
                    />
                  </Field>
                </FieldGroup>

                <FieldGroup>
                  <Field className="space-y-3">
                    <FieldLabel className="text-sm font-medium text-foreground">
                      Service Interest
                    </FieldLabel>
                    <Select>
                      <SelectTrigger className="h-12 rounded-xl border-border bg-background px-4">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tax">Tax Services</SelectItem>
                        <SelectItem value="audit">Audit Services</SelectItem>
                        <SelectItem value="consulting">Business Consulting</SelectItem>
                        <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                        <SelectItem value="estate">Estate Planning</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </div>

              <FieldGroup>
                <Field className="space-y-3">
                  <FieldLabel className="text-sm font-medium text-foreground">
                    Message
                  </FieldLabel>
                  <Textarea
                    placeholder="Tell us about your needs..."
                    rows={6}
                    required
                    className="min-h-[160px] rounded-xl border-border bg-background px-4 py-3"
                  />
                </Field>
              </FieldGroup>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-xl text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>

          {/* CONTACT INFO SIDE */}
          <div className="flex flex-col justify-center gap-8">

            {/* TOP: CONTACT CARD */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Contact Information
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Prefer to reach us directly? Use the details below and our team will be happy to assist you.
              </p>

              <div className="mt-8 space-y-7">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">Address</p>
                    <p className="leading-relaxed text-muted-foreground">
                      Springfield, Missouri
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:417-865-0700"
                      className="text-accent transition hover:underline"
                    >
                      (417) 865-0700
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:info@ercpa.com"
                      className="text-accent transition hover:underline"
                    >
                      info@ercpa.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">Office Hours</p>
                    <p className="leading-relaxed text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔥 NEW: BOTTOM SECTION */}
            <div className="flex flex-col gap-6">

              {/* RECENT NEWS */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
                <h4 className="font-serif text-lg font-semibold text-foreground">
                  Recent News
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Stay updated with the latest insights, tax updates, and company news from our team.
                </p>

                {/* NEWS ITEMS */}
                <div className="mt-6 space-y-5">

                  {/* ITEM 1 */}
                  <div className="flex gap-4">
                    <img
                      src="/team/placeholder.webp"
                      alt="news"
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-foreground leading-snug">
                        2026 Tax Updates You Should Know
                      </h5>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        Key changes in tax regulations that may impact your business and personal finances this year.
                      </p>
                      <a
                        href="/blog/tax-updates"
                        className="mt-2 inline-block text-xs font-medium text-accent hover:underline"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="flex gap-4">
                    <img
                      src="/team/placeholder.webp"
                      alt="news"
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-foreground leading-snug">
                        Smart Financial Planning for Growth
                      </h5>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        Learn how strategic financial planning can help your business scale efficiently.
                      </p>
                      <a
                        href="/blog/financial-planning"
                        className="mt-2 inline-block text-xs font-medium text-accent hover:underline"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>

                </div>

                {/* VIEW ALL */}
                <a
                  href="/blog"
                  className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
                >
                  View All Articles →
                </a>
              </div>

              {/* CAREERS */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
                <h4 className="font-serif text-lg font-semibold text-foreground">
                  Careers
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Join our growing team of professionals and build a rewarding career with us.
                </p>

                {/* FEATURED JOB */}
                <div className="mt-6">
                  <div className="flex gap-4">
                    <img
                      src="/team/placeholder.webp"
                      alt="career"
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-foreground leading-snug">
                        Senior Tax Associate
                      </h5>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        We’re looking for an experienced professional to support our growing client base in tax planning and compliance.
                      </p>
                      <a
                        href="/careers/senior-tax-associate"
                        className="mt-2 inline-block text-xs font-medium text-accent hover:underline"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>

                {/* VIEW ALL */}
                <a
                  href="/careers"
                  className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
                >
                  View All Opportunities →
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}