import Link from "next/link"
import type { SiteSettings } from "@/sanity/lib/queries"

const sitemapLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
]

type Props = { settings: SiteSettings }

export function Footer({ settings }: Props) {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-2">{settings?.name ?? 'Ai Chien'}</h3>
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-4">
              {settings?.tagline ?? 'Chinese ↔ English'}
            </p>
            <p className="text-muted-foreground text-sm max-w-xs">
              {settings?.footerDescription ?? 'Translation that preserves tone, culture, and intent.'}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-4">
              Sitemap
            </p>
            <ul className="space-y-2">
              {sitemapLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-4">
              Contact
            </p>
            <p className="text-muted-foreground mb-2">{settings?.email ?? 'hello@aichien.studio'}</p>
            <p className="text-muted-foreground text-sm">
              {settings?.location ?? 'Taipei'} · {settings?.locationSubtext ?? 'Remote worldwide'}
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {settings?.name ?? 'Ai Chien'}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
