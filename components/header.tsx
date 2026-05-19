"use client"

import { useState } from "react"
import Link from "next/link"
import type { SiteSettings } from "@/sanity/lib/queries"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

type Props = { settings: SiteSettings }

export function Header({ settings }: Props) {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              {settings?.name ?? 'Ai Chien'}
            </h1>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {settings?.subtitle ?? 'Translation & Localization'}
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeItem === item.name
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
