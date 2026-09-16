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
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">
            Why OffersBox
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            More Than <span className="text-brand-blue">Just Deals</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            We bring you a smarter, simpler and safer way to save every day.
          </p>

          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {whyFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] ?? BadgeCheck
              return (
                <li key={feature.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue xl:h-14 xl:w-14">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink xl:text-lg">{feature.title}</h3>
                    <p className="mt-0.5 text-base text-ink-soft">{feature.desc}</p>
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
            className="h-auto w-full max-w-lg object-contain xl:max-w-xl"
          />
        </div>
      </div>
    </section>
  )
}
