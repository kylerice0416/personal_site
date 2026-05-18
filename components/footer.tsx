import Link from "next/link"

const sitemapLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "About", href: "#about" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-2">Ai Chien</h3>
            <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-4">
              Chinese ↔ English
            </p>
            <p className="text-muted-foreground text-sm max-w-xs">
              Translation that preserves tone, culture, and intent.
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
            <p className="text-muted-foreground mb-2">hello@aichien.studio</p>
            <p className="text-muted-foreground text-sm">Taipei · Remote worldwide</p>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ai Chien. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
