import type { ServiceItem, ServicesPageData } from "@/sanity/lib/queries"

type Props = { services: ServiceItem[]; page: ServicesPageData }

export function Services({ services, page }: Props) {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
        {page?.eyebrow ?? 'Services'}
      </p>

      <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl mb-6">
        {page?.headline ?? 'Four ways I help teams cross languages.'}
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mb-16">
        {page?.subheading ?? 'Every engagement is shaped around the source material — its tone, its audience, and the constraints of where it will land.'}
      </p>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {services.map((service) => (
          <div key={service._id} className="bg-background p-10 flex flex-col gap-4">
            <span className="text-sm text-primary font-medium">{service.number}</span>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
