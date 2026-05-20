import Link from "next/link"
import type { SiteSettings } from "@/sanity/lib/queries"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
]

type Props = { settings: SiteSettings }

export function Header({ settings }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold tracking-tight">
              {settings?.name ?? 'Ai Chien'}
            </h1>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {settings?.subtitle ?? 'Translation & Localization'}
            </p>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
