import { sanityFetch } from '@/sanity/lib/live'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const { data: settings } = await sanityFetch({ query: siteSettingsQuery })

  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      {children}
      <Footer settings={settings} />
    </div>
  )
}
