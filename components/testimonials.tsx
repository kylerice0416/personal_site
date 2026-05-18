const testimonials = [
  {
    quote: "Ai's work felt like our own writing — only better.",
    author: "Curator, National Museum",
  },
  {
    quote: "She caught nuance our previous vendors couldn't see.",
    author: "Producer, Indie Game Studio",
  },
  {
    quote: "Campaign copy that landed in Mandarin markets exactly as intended.",
    author: "Brand Director, Fashion House",
  },
]

export function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-12">
        Testimonials
      </p>
      
      <div className="grid md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
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
