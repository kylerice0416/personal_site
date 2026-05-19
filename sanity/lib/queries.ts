import { defineQuery } from 'next-sanity'

export const heroQuery = defineQuery(`*[_type == "hero"][0]{
  eyebrow,
  headline,
  subtext,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  focusAreasEyebrow,
  focusAreas[]{ title, description }
}`)

export const servicesQuery = defineQuery(`*[_type == "service"] | order(order asc){
  _id,
  number,
  title,
  description,
  deliverables
}`)

export const portfolioProjectsQuery = defineQuery(`*[_type == "portfolioProject"] | order(order asc){
  _id,
  year,
  sector,
  title,
  client,
  details,
  caseStudy
}`)

export const testimonialsQuery = defineQuery(`*[_type == "testimonial"] | order(order asc){
  _id,
  quote,
  author
}`)

export const faqItemsQuery = defineQuery(`*[_type == "faqItem"] | order(order asc){
  _id,
  question,
  answer
}`)

export const caseStudiesQuery = defineQuery(`*[_type == "caseStudy"] | order(order asc){
  _id,
  number,
  category,
  title,
  description,
  challenge,
  approach,
  outcome
}`)

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  name,
  tagline,
  subtitle,
  email,
  location,
  locationSubtext,
  languages,
  responseTime,
  footerDescription,
  aboutPhilosophy,
  background[]{ period, title, description },
  contactProjectTypes,
  resumeFile{ asset->{ url } }
}`)

export const featuredWorkQuery = defineQuery(`*[_type == "featuredWork"][0]{
  metrics[]{ value, label },
  sectionHeading,
  featuredProjects[]{ category, title, description, hasCaseStudy }
}`)

export const ctaQuery = defineQuery(`*[_type == "cta"][0]{
  heading,
  buttonLabel,
  buttonHref
}`)

// TypeScript types for component props
export type HeroData = {
  eyebrow?: string | null
  headline?: string | null
  subtext?: string | null
  primaryCtaLabel?: string | null
  primaryCtaHref?: string | null
  secondaryCtaLabel?: string | null
  secondaryCtaHref?: string | null
  focusAreasEyebrow?: string | null
  focusAreas?: Array<{ title?: string; description?: string }> | null
} | null

export type ServiceItem = {
  _id: string
  number?: string | null
  title?: string | null
  description?: string | null
  deliverables?: string[] | null
}

export type PortfolioProjectItem = {
  _id: string
  year?: string | null
  sector?: string | null
  title?: string | null
  client?: string | null
  details?: string | null
  caseStudy?: boolean | null
}

export type TestimonialItem = {
  _id: string
  quote?: string | null
  author?: string | null
}

export type FaqItem = {
  _id: string
  question?: string | null
  answer?: string | null
}

export type CaseStudyItem = {
  _id: string
  number?: string | null
  category?: string | null
  title?: string | null
  description?: string | null
  challenge?: string | null
  approach?: string[] | null
  outcome?: string | null
}

export type SiteSettings = {
  name?: string | null
  tagline?: string | null
  subtitle?: string | null
  email?: string | null
  location?: string | null
  locationSubtext?: string | null
  languages?: string | null
  responseTime?: string | null
  footerDescription?: string | null
  aboutPhilosophy?: string | null
  background?: Array<{ period?: string; title?: string; description?: string }> | null
  contactProjectTypes?: string[] | null
  resumeFile?: { asset?: { url?: string | null } | null } | null
} | null

export type FeaturedWorkData = {
  metrics?: Array<{ value?: string; label?: string }> | null
  sectionHeading?: string | null
  featuredProjects?: Array<{ category?: string; title?: string; description?: string; hasCaseStudy?: boolean }> | null
} | null

export type CtaData = {
  heading?: string | null
  buttonLabel?: string | null
  buttonHref?: string | null
} | null

export const blogPostsQuery = defineQuery(`*[_type == "blogPost"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  coverImage{ asset, hotspot, crop, alt },
  excerpt
}`)

export const blogPostSlugsQuery = defineQuery(`*[_type == "blogPost"]{ "slug": slug.current }`)

export const blogPostQuery = defineQuery(`*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  coverImage{ asset, hotspot, crop, alt },
  excerpt,
  body
}`)

export type BlogPostPreview = {
  _id: string
  title?: string | null
  slug?: string | null
  publishedAt?: string | null
  coverImage?: { asset?: any; hotspot?: any; crop?: any; alt?: string | null } | null
  excerpt?: string | null
}

export type BlogPostFull = BlogPostPreview & {
  body?: any[] | null
}
