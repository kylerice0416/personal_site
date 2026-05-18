import Link from "next/link"

export function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-primary text-primary-foreground rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-3xl md:text-5xl font-bold">Have a project in mind?</h2>
        <Link
          href="#contact"
          className="inline-flex items-center px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:bg-primary-foreground/90 transition-colors whitespace-nowrap"
        >
          Start a conversation →
        </Link>
      </div>
    </section>
  )
}
