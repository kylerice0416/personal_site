"use client"

import { useState, useMemo } from "react"
import type { PortfolioProjectItem } from "@/sanity/lib/queries"

type Props = { projects: PortfolioProjectItem[] }

export function Portfolio({ projects }: Props) {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = useMemo(() => {
    const sectors = projects.map((p) => p.sector).filter(Boolean) as string[]
    return ["All", ...Array.from(new Set(sectors))]
  }, [projects])

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.sector === activeCategory)

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
        Portfolio
      </p>

      <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-10">
        Selected projects across cultures and contexts.
      </h2>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "border border-border hover:bg-muted"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="hidden md:grid grid-cols-12 gap-4 py-4 text-xs tracking-[0.15em] text-muted-foreground uppercase border-b border-border">
          <div className="col-span-1">Year</div>
          <div className="col-span-2">Sector</div>
          <div className="col-span-3">Project</div>
          <div className="col-span-5">Details</div>
          <div className="col-span-1">Link</div>
        </div>

        {filteredProjects.map((project) => (
          <div key={project._id} className="grid md:grid-cols-12 gap-4 py-6 border-b border-border items-start">
            <div className="md:col-span-1 text-muted-foreground text-sm">{project.year}</div>
            <div className="md:col-span-2 text-sm">{project.sector}</div>
            <div className="md:col-span-3">
              <p className="font-semibold">{project.title}</p>
              {project.client && (
                <p className="text-sm text-muted-foreground">{project.client}</p>
              )}
            </div>
            <div className="md:col-span-5 text-sm text-muted-foreground">
              {project.details}
              {project.caseStudy && (
                <span className="ml-1 underline cursor-pointer hover:text-foreground">Case study →</span>
              )}
            </div>
            <div className="md:col-span-1 text-muted-foreground">—</div>
          </div>
        ))}
      </div>
    </section>
  )
}
