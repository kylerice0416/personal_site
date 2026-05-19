import type { CaseStudyItem } from "@/sanity/lib/queries"

type Props = { studies: CaseStudyItem[] }

export function CaseStudies({ studies }: Props) {
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
        {studies.map((study) => (
          <div key={study._id} className="border-b border-border py-16">
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
                  {(study.approach ?? []).map((item, index) => (
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
