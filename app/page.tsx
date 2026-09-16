import { Hero } from "@/components/offersbox/hero"
import { CategoriesSection } from "@/components/offersbox/categories-section"
import { HowItWorks } from "@/components/offersbox/how-it-works"
import { HotDeals } from "@/components/offersbox/hot-deals"
import { WhyOffersBox } from "@/components/offersbox/why-offersbox"
import { Testimonials } from "@/components/offersbox/testimonials"
import { CtaSection } from "@/components/offersbox/cta-section"
import { SiteFooter } from "@/components/offersbox/site-footer"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <CategoriesSection />
      <HowItWorks />
      <HotDeals />
      <WhyOffersBox />
      <Testimonials />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
