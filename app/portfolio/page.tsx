import { sanityFetch } from '@/sanity/lib/live'
import { portfolioProjectsQuery } from '@/sanity/lib/queries'
import { SiteShell } from '@/components/site-shell'
import { Portfolio } from '@/components/portfolio'

export default async function PortfolioPage() {
  const { data: projects } = await sanityFetch({ query: portfolioProjectsQuery })
  return (
    <SiteShell>
      <main>
        <Portfolio projects={projects ?? []} />
      </main>
    </SiteShell>
  )
}
