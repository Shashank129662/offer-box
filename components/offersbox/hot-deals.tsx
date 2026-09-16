import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { deals } from "./data"

export function HotDeals() {
  return (
    <section id="deals" className="bg-surface-tint">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
              Today&apos;s Highlights
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Grab These <span className="text-brand-blue">Hot Deals</span>
            </h2>
            <p className="mt-3 text-base text-ink-soft">
              Handpicked offers from top brands, updated daily.
            </p>
          </div>
          <a
            href="#deals"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-light"
          >
            View All Offers
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {deals.map((deal) => (
            <li
              key={deal.brand}
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-9 items-center justify-center">
                <Image
                  src={deal.brandSrc}
                  alt={deal.brand}
                  width={110}
                  height={32}
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="mt-3 flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-surface-lav">
                <Image
                  src={deal.image}
                  alt={`${deal.brand} deal`}
                  width={220}
                  height={160}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-ink">{deal.discount}</p>
                <p className="mt-0.5 text-xs text-ink-soft">{deal.category}</p>
              </div>
              <button
                type="button"
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full gradient-orange px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                Get Deal
                <ArrowRight className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
