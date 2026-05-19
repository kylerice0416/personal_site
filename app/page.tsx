import { sanityFetch } from '@/sanity/lib/live'
import {
  heroQuery,
  featuredWorkQuery,
  faqItemsQuery,
  testimonialsQuery,
  ctaQuery,
} from '@/sanity/lib/queries'
import { SiteShell } from '@/components/site-shell'
import { Hero } from '@/components/hero'
import { FeaturedWork } from '@/components/featured-work'
import { FAQ } from '@/components/faq'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'

export default async function Home() {
  const [
    { data: hero },
    { data: featuredWork },
    { data: faqItems },
    { data: testimonials },
    { data: cta },
  ] = await Promise.all([
    sanityFetch({ query: heroQuery }),
    sanityFetch({ query: featuredWorkQuery }),
    sanityFetch({ query: faqItemsQuery }),
    sanityFetch({ query: testimonialsQuery }),
    sanityFetch({ query: ctaQuery }),
  ])

  return (
    <SiteShell>
      <main>
        <Hero data={hero} />
        <FeaturedWork data={featuredWork} />
        <FAQ items={faqItems ?? []} />
        <Testimonials testimonials={testimonials ?? []} />
        <CTA data={cta} />
      </main>
    </SiteShell>
  )
}
