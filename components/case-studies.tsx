const caseStudies = [
  {
    number: "01",
    category: "Cultural Translation",
    title: "Museum Exhibition Translation",
    description: "Bilingual exhibition for a permanent gallery on Taiwanese modern history. 18,000 source words across wall labels, audio guides, and a printed catalog.",
    challenge: "Period-specific terminology and politically sensitive vocabulary needed to read fluently in English without flattening historical specificity.",
    approach: [
      "Built a project-specific glossary with the curatorial team across two review rounds.",
      "Used a register matrix to map wall-label brevity against catalog-essay depth.",
      "Coordinated with the in-house designer on text expansion and line-break logic.",
    ],
    outcome: "Delivered six weeks ahead of opening. Catalog adopted as the bilingual reference for two touring versions of the exhibition.",
  },
  {
    number: "02",
    category: "Game Localization",
    title: "RPG Game Localization",
    description: "Complete localization of an indie RPG including dialogue, UI, lore entries, and store listings for Traditional Chinese markets.",
    challenge: "Maintaining the game's distinctive narrative voice while working within strict character limits for UI elements.",
    approach: [
      "Created character voice profiles to ensure consistency across 50,000+ words of dialogue.",
      "Developed variable-aware templates for dynamically generated text.",
      "Conducted multiple LQA passes with native-speaking playtesters.",
    ],
    outcome: "Launch-day localization with zero critical bugs. Player reviews specifically praised the natural-feeling Chinese dialogue.",
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
        Case Studies
      </p>
      
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-6">
        How the work actually gets made.
      </h2>
      
      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Three engagements broken down — the constraints, the process, and what shipped.
      </p>
      
      <div className="border-t border-border">
        {caseStudies.map((study) => (
          <div key={study.number} className="border-b border-border py-16">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-3">
                <p className="text-sm text-muted-foreground mb-1">Case {study.number}</p>
                <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">{study.category}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h3>
                <p className="text-lg text-muted-foreground">{study.description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8 mb-8">
              <div className="md:col-span-3" />
              <div className="md:col-span-4">
                <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-4">Challenge</p>
                <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-4">Approach</p>
                <ul className="space-y-3">
                  {study.approach.map((item, index) => (
                    <li key={index} className="flex gap-3 text-muted-foreground">
                      <span>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3" />
              <div className="md:col-span-9">
                <div className="bg-muted rounded-lg p-6">
                  <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2">Outcome</p>
                  <p className="font-medium">{study.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
