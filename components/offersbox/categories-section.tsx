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
  // Duplicate the brand list so the marquee can loop seamlessly.
  const marqueeBrands = [...trustedBrands, ...trustedBrands]

  return (
    <section id="categories" className="bg-surface-tint">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:py-24">
        {/* Trusted by strip */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft lg:text-sm">
          Trusted by 500k+ smart shoppers
        </p>
        <div className="marquee-mask mt-8 overflow-hidden">
          <div className="marquee-track gap-4 sm:gap-6">
            {marqueeBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white px-5 shadow-sm sm:h-20 sm:w-40"
                aria-hidden={i >= trustedBrands.length}
              >
                <Image
                  src={brand.src}
                  alt={i < trustedBrands.length ? brand.name : ""}
                  width={140}
                  height={48}
                  className="h-7 w-auto object-contain sm:h-8"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="relative mt-20">
          <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">
            Explore More, Spend Less
          </span>

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Deals for
                <br />
                <span className="text-brand-blue">Every Part</span> of Your Life
              </h2>
              <p className="mt-5 max-w-lg text-lg text-ink-soft">
                From fashion to food, travel to tech — find the best offers
                across categories, only on OffersBox.
              </p>
            </div>

            <div className="hidden shrink-0 items-center gap-2 pb-2 lg:flex">
              <Image
                src="/assets/sections/category-callout.png"
                alt=""
                width={260}
                height={140}
                className="h-auto w-52 object-contain xl:w-60"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Category circles */}
        <ul className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? LayoutGrid
            return (
              <li key={cat.label} className="flex flex-col items-center text-center">
                <button
                  type="button"
                  className="group flex flex-col items-center focus:outline-none"
                >
                  <span
                    className="flex h-20 w-20 items-center justify-center rounded-full shadow-sm ring-1 ring-black/5 transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-lg group-focus-visible:-translate-y-1.5 xl:h-24 xl:w-24"
                    style={{ backgroundColor: `${cat.tint}1a` }}
                  >
                    <Icon
                      className="h-8 w-8 transition-transform duration-300 ease-out group-hover:scale-110 xl:h-9 xl:w-9"
                      style={{ color: cat.tint }}
                    />
                  </span>
                  <span className="mt-4 text-sm font-semibold leading-tight text-ink transition-colors group-hover:text-brand-blue">
                    {cat.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
