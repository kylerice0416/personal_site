import { sanityFetch } from '@/sanity/lib/live'
import { servicesQuery } from '@/sanity/lib/queries'
import { SiteShell } from '@/components/site-shell'
import { Services } from '@/components/services'

export default async function ServicesPage() {
  const { data: services } = await sanityFetch({ query: servicesQuery })
  return (
    <SiteShell>
      <main>
        <Services services={services ?? []} />
      </main>
    </SiteShell>
  )
}
