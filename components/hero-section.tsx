export function HeroSection() {
  const details = [
    { label: "Role", value: "Content Manager" },
    { label: "Format", value: "Full-time" },
    { label: "Location", value: "Geneva, CH" },
    { label: "Languages", value: "EN · ES · FR (in progress)" },
  ]

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-background to-background" />
      
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
          Today&apos;s Featured Offer
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight mb-10 text-balance">
          Constanza Esquivel
        </h1>
        
        {/* Details table */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-10">
          {details.map((detail, index) => (
            <div key={index} className="text-center">
              <p className="text-xs tracking-wider text-muted-foreground uppercase mb-1">
                {detail.label}
              </p>
              <p className="text-foreground font-medium">{detail.value}</p>
            </div>
          ))}
        </div>
        
        <span className="inline-block px-5 py-2.5 text-sm font-medium text-foreground bg-accent rounded-full">
          Available Full-Time ASAP
        </span>
      </div>
      
      {/* Subtle decorative line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-border" />
      </div>
    </section>
  )
}
