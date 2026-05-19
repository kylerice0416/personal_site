import { sanityFetch } from '@/sanity/lib/live'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import { Header } from '@/components/header'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default async function ContactPage() {
  const { data: settings } = await sanityFetch({ query: siteSettingsQuery })
  return (
    <div className="min-h-screen">
      <Header settings={settings} />
      <main>
        <Contact settings={settings} />
      </main>
      <Footer settings={settings} />
    </div>
  )
}
