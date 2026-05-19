import type { ServiceItem } from "@/sanity/lib/queries"

type Props = { services: ServiceItem[] }

export function Services({ services }: Props) {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
        Services
      </p>

      <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl mb-6">
        Four ways I help teams cross languages.
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Every engagement is shaped around the source material — its tone, its audience, and the constraints of where it will land.
      </p>

      <div className="border-t border-border">
        {services.map((service) => (
          <div key={service._id} className="border-b border-border py-12 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-1">
              <span className="text-sm text-primary font-medium">{service.number}</span>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                Deliverables
              </p>
              <ul className="space-y-2">
                {(service.deliverables ?? []).map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
