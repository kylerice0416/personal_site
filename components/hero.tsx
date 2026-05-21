import Link from "next/link"
import Image from "next/image"
import type { HeroData } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { TypewriterWord } from "@/components/typewriter-word"

type Props = { data: HeroData }

export function Hero({ data }: Props) {
  const focusAreas = data?.focusAreas ?? []
  const heroImage = data?.heroImage?.asset ? urlFor(data.heroImage).url() : null

  return (
    <section id="home" className="max-w-7xl mx-auto px-6 pt-20 md:pt-32">
      <div className="relative isolate pb-20 md:pb-32">
        {heroImage && (
          <div className="absolute inset-y-0 right-0 w-[55%] -z-10">
            <Image
              src={heroImage}
              alt={data?.heroImage?.alt ?? ''}
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>
        )}

        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
          {data?.eyebrow ?? 'Chinese ↔ English Translation'}
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl mb-8">
          {data?.headline ?? 'Translation that preserves tone, culture, and intent —'}{' '}
          <TypewriterWord
            zh={data?.animatedPhraseZh ?? '世界'}
            en={data?.animatedPhraseEn ?? 'the world.'}
          />
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mb-10">
          {data?.subtext ?? 'Specializing in museum translation, game localization, and editorial adaptation for international audiences.'}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href={data?.primaryCtaHref ?? '/portfolio'}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            {data?.primaryCtaLabel ?? 'View Selected Work →'}
          </Link>
          <Link
            href={data?.secondaryCtaHref ?? '/contact'}
            className="inline-flex items-center px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors"
          >
            {data?.secondaryCtaLabel ?? 'Contact'}
          </Link>
        </div>
      </div>

      <div className="border-t border-border pt-12 pb-20 md:pb-32">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8">
          {data?.focusAreasEyebrow ?? 'Focus Areas'}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div key={index}>
              <div className="w-8 h-1 bg-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
