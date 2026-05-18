"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What language pairs do you cover?",
    answer: "I specialize in Chinese (Traditional & Simplified) to English and English to Chinese translation. This includes Mandarin-based written Chinese for Taiwan, Hong Kong, and Mainland China markets.",
  },
  {
    question: "Do you work directly or through agencies?",
    answer: "Both. I work directly with cultural institutions, game studios, and brands, as well as through select localization agencies on larger projects that require team coordination.",
  },
  {
    question: "What's a typical turnaround?",
    answer: "It depends on the project scope and complexity. A 5,000-word marketing piece might take 5-7 business days including review. Game localization projects are scoped by milestone. I always provide realistic timelines upfront.",
  },
  {
    question: "Can you handle CAT tools and TMs?",
    answer: "Yes. I work with memoQ, Trados, Memsource, and Crowdin. I can integrate with existing translation memories and termbase workflows, or help establish them for new projects.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Absolutely. I routinely work under NDA for game studios, fashion brands, and cultural institutions. Confidentiality is standard practice.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">FAQ</p>
        </div>
        
        <div className="md:col-span-9">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
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
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16">
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Start a conversation →
        </a>
      </div>
    </section>
  )
}
