import { sanityFetch } from '@/sanity/lib/live'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import { Header } from '@/components/header'
import { About } from '@/components/about'
import { Footer } from '@/components/footer'

export default async function AboutPage() {
  const { data: settings } = await sanityFetch({ query: siteSettingsQuery })
  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      <main>
        <About settings={settings} />
      </main>
      <Footer settings={settings} />
    </div>
  )
}
