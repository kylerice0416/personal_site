import type { FeaturedWorkData } from "@/sanity/lib/queries"

type Props = { data: FeaturedWorkData }

export function FeaturedWork({ data }: Props) {
  const metrics = data?.metrics ?? []
  const featuredProjects = data?.featuredProjects ?? []

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="border border-border rounded-lg p-8 md:p-12 mb-16">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8">
          Selected Metrics
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</p>
              <p className="text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-2xl">
            {data?.sectionHeading ?? 'Selected translation and localization projects.'}
          </h2>
        </div>
        <a href="/portfolio" className="hidden md:inline-flex items-center text-sm hover:underline">
          Full Portfolio ↗
        </a>
      </div>

      <div className="space-y-4">
        {featuredProjects.map((project, index) => (
          <div key={index} className="border border-border rounded-lg p-8">
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-3">
              {project.category}
            </p>
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
