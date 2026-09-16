import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="hero-navy relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-16">
        <div className="max-w-lg">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Ready to Start Saving?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
            Join thousands of smart shoppers who trust OffersBox for the best
            deals, every day.
          </p>
          <a
            href="#deals"
            className="mt-8 inline-flex items-center gap-2 rounded-full gradient-orange px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-500/30 transition-transform hover:scale-[1.03]"
          >
            Explore Offers
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/sections/offersbox-cta-v2.png"
            alt="Gift box with a discount tag — sweeter offers happen here"
            width={900}
            height={500}
            className="h-auto w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  )
}
