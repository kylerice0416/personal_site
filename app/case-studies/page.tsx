import { sanityFetch } from '@/sanity/lib/live'
import { caseStudiesQuery } from '@/sanity/lib/queries'
import { SiteShell } from '@/components/site-shell'
import { CaseStudies } from '@/components/case-studies'

export default async function CaseStudiesPage() {
  const { data: studies } = await sanityFetch({ query: caseStudiesQuery })
  return (
    <SiteShell>
      <main>
        <CaseStudies studies={studies ?? []} />
      </main>
    </SiteShell>
  )
}
