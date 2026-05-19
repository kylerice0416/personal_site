import Link from 'next/link'
import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/live'
import { blogPostsQuery, type BlogPostPreview } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function PostCard({ post }: { post: BlogPostPreview }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg border border-border mb-4">
        {post.coverImage?.asset ? (
          <div className="relative aspect-[16/9]">
            <Image
              src={urlFor(post.coverImage).width(800).height(450).url()}
              alt={post.coverImage.alt ?? post.title ?? ''}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] bg-muted" />
        )}
      </div>
      {post.publishedAt && (
        <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2">
          {formatDate(post.publishedAt)}
        </p>
      )}
      <h2 className="text-xl font-bold mb-2 group-hover:underline underline-offset-2 leading-snug">
        {post.title}
      </h2>
      {post.excerpt && (
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      )}
      <p className="text-sm mt-3">Read →</p>
    </Link>
  )
}

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: blogPostsQuery })
  const allPosts = posts ?? []

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">Blog</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl mb-16">
        Writing on translation, localization, and craft.
      </h1>

      {allPosts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </main>
  )
}
