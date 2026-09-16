"use client"

import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { navLinks } from "./data"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8">
      <a href="#home" aria-label="OffersBox home">
        <Logo variant="light" />
      </a>

      <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-base font-medium text-white/85 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="#deals"
          className="hidden items-center gap-2 rounded-full gradient-orange px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-transform hover:scale-[1.03] sm:inline-flex"
        >
          Explore Offers
          <ArrowRight className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-full z-30 mt-2 rounded-2xl border border-white/10 bg-navy-1/95 p-4 backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#deals"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-orange px-5 py-2.5 text-sm font-semibold text-white"
            >
              Explore Offers
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
