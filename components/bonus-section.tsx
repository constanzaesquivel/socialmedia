export function BonusSection() {
  const bonuses = [
    "Genuinely enjoys making digital content clearer, cleaner, and more engaging",
    "Comfortable working between technical and non-technical teams",
    "Learns fast and adapts quickly",
    "Understands how important concise copy and strong visuals are when people only spend 30 seconds reading a page",
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
          Included at No Extra Cost
        </h2>
        <div className="space-y-4">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border/50"
            >
              <span className="flex-shrink-0 text-muted-foreground font-mono text-sm mt-0.5">
                0{index + 1}
              </span>
              <p className="text-foreground leading-relaxed">{bonus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
