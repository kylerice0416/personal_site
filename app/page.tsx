import { sanityFetch } from '@/sanity/lib/live'
import {
  heroQuery,
  servicesQuery,
  portfolioProjectsQuery,
  testimonialsQuery,
  faqItemsQuery,
  caseStudiesQuery,
  siteSettingsQuery,
  featuredWorkQuery,
  ctaQuery,
} from '@/sanity/lib/queries'

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { CaseStudies } from "@/components/case-studies"
import { FAQ } from "@/components/faq"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { FeaturedWork } from "@/components/featured-work"

export default async function Home() {
  const [
    { data: hero },
    { data: services },
    { data: portfolioProjects },
    { data: testimonials },
    { data: faqItems },
    { data: caseStudies },
    { data: siteSettings },
    { data: featuredWork },
    { data: cta },
  ] = await Promise.all([
    sanityFetch({ query: heroQuery }),
    sanityFetch({ query: servicesQuery }),
    sanityFetch({ query: portfolioProjectsQuery }),
    sanityFetch({ query: testimonialsQuery }),
    sanityFetch({ query: faqItemsQuery }),
    sanityFetch({ query: caseStudiesQuery }),
    sanityFetch({ query: siteSettingsQuery }),
    sanityFetch({ query: featuredWorkQuery }),
    sanityFetch({ query: ctaQuery }),
  ])

  return (
    <main className="min-h-screen">
      <Header settings={siteSettings} />
      <Hero data={hero} />
      <FeaturedWork data={featuredWork} />
      <Services services={services ?? []} />
      <Portfolio projects={portfolioProjects ?? []} />
      <CaseStudies studies={caseStudies ?? []} />
      <FAQ items={faqItems ?? []} />
      <Testimonials testimonials={testimonials ?? []} />
      <CTA data={cta} />
      <About settings={siteSettings} />
      <Contact settings={siteSettings} />
      <Footer settings={siteSettings} />
    </main>
  )
}
