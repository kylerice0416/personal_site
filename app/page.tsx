import { sanityFetch } from '@/sanity/lib/live'
import {
  heroQuery,
  featuredWorkQuery,
  faqItemsQuery,
  testimonialsQuery,
  ctaQuery,
  translationShowcaseQuery,
} from '@/sanity/lib/queries'
import { SiteShell } from '@/components/site-shell'
import { Hero } from '@/components/hero'
import { TranslationSlider } from '@/components/translation-slider'
import { FeaturedWork } from '@/components/featured-work'
import { FAQ } from '@/components/faq'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'

export default async function Home() {
  const [
    { data: hero },
    { data: translationShowcase },
    { data: featuredWork },
    { data: faqItems },
    { data: testimonials },
    { data: cta },
  ] = await Promise.all([
    sanityFetch({ query: heroQuery }),
    sanityFetch({ query: translationShowcaseQuery }),
    sanityFetch({ query: featuredWorkQuery }),
    sanityFetch({ query: faqItemsQuery }),
    sanityFetch({ query: testimonialsQuery }),
    sanityFetch({ query: ctaQuery }),
  ])

  return (
    <SiteShell>
      <main>
        <Hero data={hero} />
        <TranslationSlider data={translationShowcase} />
        <FeaturedWork data={featuredWork} />
        <FAQ items={faqItems ?? []} limit={4} />
        <Testimonials testimonials={testimonials ?? []} />
        <CTA data={cta} />
      </main>
    </SiteShell>
  )
}
