import Image from "next/image"
import {
  ShoppingBag,
  Laptop,
  Plane,
  Utensils,
  Sparkles,
  Sofa,
  HeartPulse,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react"
import { trustedBrands, categories } from "./data"

const iconMap: Record<string, LucideIcon> = {
  "shopping-bag": ShoppingBag,
  laptop: Laptop,
  plane: Plane,
  utensils: Utensils,
  sparkles: Sparkles,
  sofa: Sofa,
  "heart-pulse": HeartPulse,
  grid: LayoutGrid,
}

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-surface-tint">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        {/* Trusted by strip */}
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Trusted by 500k+ smart shoppers
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {trustedBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-14 w-28 items-center justify-center rounded-2xl border border-black/5 bg-white px-4 shadow-sm sm:h-16 sm:w-32"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={40}
                className="h-6 w-auto object-contain sm:h-7"
              />
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="relative mt-16">
          <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
            Explore More, Spend Less
          </span>

          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Deals for
                <br />
                <span className="text-brand-blue">Every Part</span> of Your Life
              </h2>
              <p className="mt-4 max-w-md text-base text-ink-soft">
                From fashion to food, travel to tech — find the best offers
                across categories, only on OffersBox.
              </p>
            </div>

            <div className="hidden shrink-0 items-center gap-2 pb-2 lg:flex">
              <Image
                src="/assets/sections/category-callout.png"
                alt=""
                width={220}
                height={120}
                className="h-auto w-44 object-contain"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Category circles */}
        <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? LayoutGrid
            return (
              <li key={cat.label} className="flex flex-col items-center text-center">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full shadow-sm ring-1 ring-black/5"
                  style={{ backgroundColor: `${cat.tint}1a` }}
                >
                  <Icon className="h-7 w-7" style={{ color: cat.tint }} />
                </span>
                <span className="mt-3 text-xs font-semibold leading-tight text-ink">
                  {cat.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
