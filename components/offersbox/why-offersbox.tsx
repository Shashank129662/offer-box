import Image from "next/image"
import {
  BadgeCheck,
  Layers,
  HandHeart,
  MousePointerClick,
  CalendarClock,
  PiggyBank,
  type LucideIcon,
} from "lucide-react"
import { whyFeatures } from "./data"

const iconMap: Record<string, LucideIcon> = {
  "badge-check": BadgeCheck,
  layers: Layers,
  "hand-heart": HandHeart,
  "mouse-pointer-click": MousePointerClick,
  "calendar-clock": CalendarClock,
  "piggy-bank": PiggyBank,
}

export function WhyOffersBox() {
  return (
    <section id="why" className="bg-white">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:py-24">
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
            Why OffersBox
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            More Than <span className="text-brand-blue">Just Deals</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-ink-soft">
            We bring you a smarter, simpler and safer way to save every day.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {whyFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] ?? BadgeCheck
              return (
                <li key={feature.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{feature.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-soft">{feature.desc}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/sections/offersbox-new-giftbox.png"
            alt="OffersBox box filled with offers from Amazon, Myntra, Flipkart and Zomato"
            width={1000}
            height={900}
            className="h-auto w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  )
}
