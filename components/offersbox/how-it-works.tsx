import Image from "next/image"
import { Search, Pointer, Gift, type LucideIcon } from "lucide-react"
import { steps } from "./data"

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  "hand-pointer": Pointer,
  gift: Gift,
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="relative flex justify-center lg:justify-start">
          <Image
            src="/assets/sections/best_deals_section.png"
            alt="Best deals, verified offers and daily updated coupons"
            width={900}
            height={720}
            className="h-auto w-full max-w-md object-contain"
          />
        </div>

        <div>
          <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
            How OffersBox Works
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Save in <span className="text-brand-orange">3 Simple Steps</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-ink-soft">
            Finding and using the best offers has never been easier.
          </p>

          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Search
              return (
                <li key={step.title} className="flex flex-col">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/25">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {step.desc}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
