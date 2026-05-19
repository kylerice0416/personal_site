import type { SiteSettings } from "@/sanity/lib/queries"

type Props = { settings: SiteSettings }

export function About({ settings }: Props) {
  const background = settings?.background ?? []

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
              {settings?.aboutPhilosophy ?? "Translation is more than converting words — it's about preserving the intent, tone, and cultural resonance of the original. I believe every project deserves the same attention to craft, whether it's a museum wall label or a game dialogue tree."}
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
