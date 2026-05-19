import { sanityFetch } from '@/sanity/lib/live'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import { Header } from './header'
import { Footer } from './footer'

export async function SiteShell({ children }: { children: React.ReactNode }) {
  const { data: settings } = await sanityFetch({ query: siteSettingsQuery })
  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      {children}
      <Footer settings={settings} />
    </div>
  )
}
