"use client"

import { useState } from "react"
import type { SiteSettings } from "@/sanity/lib/queries"

const defaultProjectTypes = [
  "Cultural / museum translation",
  "Game localization",
  "Marketing localization",
  "Editorial / literary",
  "Technical documentation",
  "Other",
]

type Props = { settings: SiteSettings }

export function Contact({ settings }: Props) {
  const projectTypes =
    settings?.contactProjectTypes && settings.contactProjectTypes.length > 0
      ? settings.contactProjectTypes
      : defaultProjectTypes

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: projectTypes[0],
    about: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
        Contact
      </p>

      <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl mb-6">
        Tell me about the source.
      </h2>

      <p className="text-lg text-muted-foreground max-w-xl mb-12">
        A few sentences about the project, deadline, and audience is plenty to start. I respond within two working days.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2">Email</p>
            <p className="font-medium">{settings?.email ?? 'hello@aichien.studio'}</p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2">Based in</p>
            <p className="font-medium">{settings?.location ?? 'Taipei, Taiwan'}</p>
            <p className="text-muted-foreground text-sm">{settings?.locationSubtext ?? 'Working with clients worldwide'}</p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2">Languages</p>
            <p className="font-medium">{settings?.languages ?? 'English · 繁體中文 · 简体中文'}</p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2">Response Time</p>
            <p className="font-medium">{settings?.responseTime ?? 'Within 2 working days'}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border border-border rounded-lg p-8 bg-card">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-xs tracking-[0.15em] text-muted-foreground uppercase block mb-3">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-xs tracking-[0.15em] text-muted-foreground uppercase block mb-3">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-xs tracking-[0.15em] text-muted-foreground uppercase block mb-3">
              Company / Studio (optional)
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors"
            />
          </div>

          <div className="mb-6">
            <label className="text-xs tracking-[0.15em] text-muted-foreground uppercase block mb-3">
              Project Type
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="mb-8">
            <label className="text-xs tracking-[0.15em] text-muted-foreground uppercase block mb-3">
              About the Project
            </label>
            <textarea
              value={formData.about}
              onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              placeholder="Source language, audience, approximate word count, deadline..."
              rows={4}
              className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Send message →
          </button>
        </form>
      </div>
    </section>
  )
}
