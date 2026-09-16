import Image from "next/image"
import { ArrowRight, Play, BadgeCheck, CalendarClock, Boxes } from "lucide-react"
import { SiteHeader } from "./site-header"

const stats = [
  { icon: BadgeCheck, title: "Verified Offers", desc: "Trusted & safe" },
  { icon: CalendarClock, title: "Updated Daily", desc: "Fresh deals everyday" },
  { icon: Boxes, title: "Wide Range", desc: "1000+ brands" },
]

export function Hero() {
  return (
    <section id="home" className="hero-navy relative overflow-hidden">
      <SiteHeader />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-2 lg:gap-6 lg:pb-24 lg:pt-10">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/90">
            Same Brands. Bigger Savings.
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Everyday
            <br />
            <span className="text-gradient-orange">Savings Partner</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
            Curated deals, verified offers and exclusive discounts from your
            favourite brands — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#deals"
              className="inline-flex items-center gap-2 rounded-full gradient-orange px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-500/30 transition-transform hover:scale-[1.03]"
            >
              Explore Offers
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <Play className="h-3 w-3 fill-navy-2 text-navy-2" />
              </span>
              Watch How It Works
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((s) => (
              <div key={s.title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-white">{s.title}</dt>
                  <dd className="text-xs text-white/60">{s.desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:pl-4">
          <Image
            src="/assets/sections/hero_section.png"
            alt="OffersBox mobile app showing deals from Amazon, Flipkart, Myntra and Zomato"
            width={1600}
            height={1000}
            priority
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
