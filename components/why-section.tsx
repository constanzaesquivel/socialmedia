import { Check } from "lucide-react"

export function WhySection() {
  const benefits = [
    "Strong written English",
    "Experience working on web platforms & digital projects",
    "Comfortable in fast-paced, collaborative environments",
    "Detail-oriented without sounding robotic",
    "International mindset & expat perspective",
    "Currently improving French through intensive courses in Geneva",
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 text-center">
          What&apos;s Included
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center text-balance">
          Why This Offer Is Worth It
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border/50"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <p className="text-foreground leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
