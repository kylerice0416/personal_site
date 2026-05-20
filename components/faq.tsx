"use client"

import { useState } from "react"
import type { FaqItem } from "@/sanity/lib/queries"

type Props = { items: FaqItem[]; limit?: number }

export function FAQ({ items, limit }: Props) {
  items = limit ? items.slice(0, limit) : items
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">FAQ</p>
        </div>

        <div className="md:col-span-9">
          {items.map((faq, index) => (
            <div key={faq._id} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg md:text-xl font-semibold pr-8">{faq.question}</span>
                <span className="text-2xl text-muted-foreground flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-6 pr-12">
                  <p className="text-muted-foreground leading-relaxed">
                  {faq.answer?.split('\\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Start a conversation →
        </a>
      </div>
    </section>
  )
}
