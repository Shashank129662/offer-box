import Image from "next/image"
import { Star } from "lucide-react"
import { testimonials } from "./data"

export function Testimonials() {
  return (
    <section className="bg-surface-tint">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">
            Loved by Smart Shoppers
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Real People. <span className="text-brand-blue">Real Savings.</span>
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
                <p className="text-base leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6">
                <p className="text-base font-bold text-ink">{t.name}</p>
                <div className="mt-2 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
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
