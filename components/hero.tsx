import Link from "next/link"

const focusAreas = [
  {
    title: "Museum & Cultural Translation",
    description: "Exhibition texts, catalogs, and wall labels with historical fidelity.",
  },
  {
    title: "Game Localization",
    description: "UI, dialogue, store listings, and patch notes for global launches.",
  },
  {
    title: "Marketing & Editorial",
    description: "Transcreation that preserves brand voice for new markets.",
  },
]

export function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
        Chinese ↔ English Translation
      </p>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-8">
        Translation that preserves tone, culture, and intent.
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-xl mb-10">
        Specializing in museum translation, game localization, and editorial adaptation for international audiences.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-20">
        <Link
          href="#portfolio"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          View Selected Work →
        </Link>
        <Link
          href="#contact"
          className="inline-flex items-center px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors"
        >
          Contact
        </Link>
      </div>

      <div className="border-t border-border pt-12">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8">
          Focus Areas
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div key={index}>
              <div className="w-8 h-1 bg-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
