import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { deals } from "./data"

export function HotDeals() {
  return (
    <section id="deals" className="bg-surface-tint">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">
              Today&apos;s Highlights
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              Grab These <span className="text-brand-blue">Hot Deals</span>
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Handpicked offers from top brands, updated daily.
            </p>
          </div>
          <a
            href="#deals"
            className="inline-flex items-center gap-1.5 text-base font-semibold text-brand-orange transition-colors hover:text-brand-orange-light"
          >
            View All Offers
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {deals.map((deal) => (
            <li
              key={deal.brand}
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 items-center justify-center">
                <Image
                  src={deal.brandSrc}
                  alt={deal.brand}
                  width={130}
                  height={36}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="mt-3 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-surface-lav">
                <Image
                  src={deal.image}
                  alt={`${deal.brand} deal`}
                  width={260}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 text-center">
                <p className="text-xl font-bold text-ink">{deal.discount}</p>
                <p className="mt-1 text-sm text-ink-soft">{deal.category}</p>
              </div>
              <button
                type="button"
                className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full gradient-orange px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
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
