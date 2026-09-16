import Image from "next/image"
import { Fragment } from "react"
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
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="relative flex justify-center lg:justify-start">
          <Image
            src="/assets/sections/best_deals_section.png"
            alt="Best deals, verified offers and daily updated coupons"
            width={900}
            height={720}
            className="h-auto w-full max-w-md object-contain xl:max-w-lg"
          />
        </div>

        <div>
          <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">
            How OffersBox Works
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Save in <span className="text-brand-orange">3 Simple Steps</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            Finding and using the best offers has never been easier.
          </p>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-2">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Search
              return (
                <Fragment key={step.title}>
                  <div className="flex flex-col sm:flex-1">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/25 xl:h-[4.5rem] xl:w-[4.5rem]">
                      <Icon className="h-7 w-7 xl:h-8 xl:w-8" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-ink xl:text-xl">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-ink-soft">
                      {step.desc}
                    </p>
                  </div>

                  {i < steps.length - 1 && (
                    <Image
                      src="/assets/sections/curved-dashed-arrow-hq.png"
                      alt=""
                      aria-hidden="true"
                      width={120}
                      height={64}
                      className="mt-3 hidden h-9 w-16 shrink-0 self-start object-contain sm:block xl:h-11 xl:w-20"
                    />
                  )}
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
