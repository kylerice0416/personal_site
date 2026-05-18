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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedWork />
      <Services />
      <Portfolio />
      <CaseStudies />
      <FAQ />
      <Testimonials />
      <CTA />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
