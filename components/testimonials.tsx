import type { TestimonialItem } from "@/sanity/lib/queries"

type Props = { testimonials: TestimonialItem[] }

export function Testimonials({ testimonials }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-12">
        Testimonials
      </p>

      <div className="grid md:grid-cols-3 gap-12">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id}>
            <p className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>
            <p className="text-muted-foreground">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
