import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'
import { blogPostQuery, blogPostSlugsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export async function generateStaticParams() {
  const { data: posts } = await sanityFetch({
    query: blogPostSlugsQuery,
    perspective: 'published',
    stega: false,
  })
  return (posts ?? [])
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }))
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-5 leading-relaxed text-muted-foreground">{children}</p>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-8 mb-3 text-foreground">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground my-8">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="underline underline-offset-2 hover:text-primary transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <figure className="my-10">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).width(1200).height(675).url()}
            alt={value?.alt ?? ''}
            fill
            className="object-cover"
          />
        </div>
        {value?.caption && (
          <figcaption className="text-center text-sm text-muted-foreground mt-3">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data: post } = await sanityFetch({ query: blogPostQuery, params: { slug } })

  if (!post) notFound()

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        ← Blog
      </Link>

      {post.publishedAt && (
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
          {formatDate(post.publishedAt)}
        </p>
      )}

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl mb-10">
        {post.title}
      </h1>

      {post.coverImage?.asset && (
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-16">
          <Image
            src={urlFor(post.coverImage).width(1200).height(675).url()}
            alt={post.coverImage.alt ?? post.title ?? ''}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {post.body && (
        <div className="max-w-2xl">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      )}
    </main>
  )
}
