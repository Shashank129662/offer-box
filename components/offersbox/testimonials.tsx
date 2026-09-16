import Image from "next/image"
import { Star } from "lucide-react"
import { testimonials } from "./data"

export function Testimonials() {
  return (
    <section className="bg-surface-tint">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
            Loved by Smart Shoppers
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Real People. <span className="text-brand-blue">Real Savings.</span>
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
                <p className="text-sm leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-5">
                <p className="text-sm font-bold text-ink">{t.name}</p>
                <div className="mt-1.5 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
