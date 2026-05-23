import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function CtaSection() {
  const includes = [
    "Available full-time ASAP",
    "EU citizen",
    "Based in Geneva",
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
          Limited-Time Offer
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-10 text-balance">
          Don&apos;t sleep on this one.
        </h2>
        
        <div className="flex flex-col gap-3 mb-10 max-w-xs mx-auto">
          {includes.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-foreground">
              <span>{item}</span>
              <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <Check className="w-4 h-4" />
                Included
              </span>
            </div>
          ))}
        </div>

        <Button 
          size="lg" 
          className="h-12 px-8 text-base font-medium rounded-full"
          asChild
        >
          <a href="mailto:cesquiveln@icloud.com">Claim this offer</a>
        </Button>
        
        <p className="text-xs text-muted-foreground mt-3 italic">
          (No promo code needed)
        </p>
      </div>
    </section>
  )
}
