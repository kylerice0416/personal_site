const background = [
  {
    period: "2024 — Present",
    title: "Independent practice",
    description: "Cultural, game, and editorial localization for direct clients and select agency partners.",
  },
  {
    period: "2020 — 2024",
    title: "Senior Translator, Localization Studio",
    description: "Lead linguist on AAA + indie game launches. Built term bases adopted across teams.",
  },
  {
    period: "2017 — 2020",
    title: "Editorial Translator",
    description: "Long-form essays and literary nonfiction for English-language publishers.",
  },
  {
    period: "MA Translation Studies",
    title: "University, 2017",
    description: "Focus on cross-cultural editorial adaptation.",
  },
]

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
        About
      </p>
      
      <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16">About</h2>
      
      <div className="border-t border-border">
        <div className="grid md:grid-cols-12 gap-8 py-12 border-b border-border">
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">Philosophy</p>
          </div>
          <div className="md:col-span-9">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Translation is more than converting words — it&apos;s about preserving the intent, tone, and cultural resonance of the original. I believe every project deserves the same attention to craft, whether it&apos;s a museum wall label or a game dialogue tree.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 py-12">
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">Background</p>
          </div>
          <div className="md:col-span-9">
            <div className="space-y-8">
              {background.map((item, index) => (
                <div key={index} className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-4">
                    <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{item.period}</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-semibold mb-1">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
