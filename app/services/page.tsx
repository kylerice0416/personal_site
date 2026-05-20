import { sanityFetch } from '@/sanity/lib/live'
import { servicesQuery, servicesPageQuery, faqItemsQuery } from '@/sanity/lib/queries'
import { SiteShell } from '@/components/site-shell'
import { Services } from '@/components/services'
import { FAQ } from '@/components/faq'

export default async function ServicesPage() {
  const [{ data: services }, { data: page }, { data: faqItems }] = await Promise.all([
    sanityFetch({ query: servicesQuery }),
    sanityFetch({ query: servicesPageQuery }),
    sanityFetch({ query: faqItemsQuery }),
  ])
  return (
    <SiteShell>
      <main>
        <Services services={services ?? []} page={page} />
        <FAQ items={faqItems ?? []} limit={8} />
      </main>
    </SiteShell>
  )
}
