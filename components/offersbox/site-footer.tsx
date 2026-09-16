import type { ComponentType, SVGProps } from "react"
import { Logo } from "./logo"
import { navLinks } from "./data"

type IconProps = SVGProps<SVGSVGElement>

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.5V7c0-.7.3-1 1-1h1.5V3.5H14c-2 0-3.5 1.5-3.5 3.5v1.5H8.5V11h2v9.5H14V11h2l.5-2.5H14Z" />
    </svg>
  )
}

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.7 3h2.9l-6.4 7.3L21.8 21h-5.9l-4.6-6-5.3 6H3l6.9-7.8L2.6 3h6l4.2 5.5L17.7 3Zm-1 16h1.6L8 4.7H6.3L16.7 19Z" />
    </svg>
  )
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.7-1.8C18.3 5 12 5 12 5s-6.3 0-7.9.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.7 1.8C5.7 19 12 19 12 19s6.3 0 7.9-.4a2.5 2.5 0 0 0 1.7-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5 3-5 3Z" />
    </svg>
  )
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.5 8.5v10H3.4v-10h3.1Zm-1.55-5A1.8 1.8 0 1 1 3.15 5.3 1.8 1.8 0 0 1 4.95 3.5ZM20.6 18.5h-3.1v-5.2c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.3H11s.04-9.1 0-10h3.1v1.4a3.1 3.1 0 0 1 2.8-1.5c2 0 3.6 1.3 3.6 4.2v5.9Z" />
    </svg>
  )
}

const socials: { label: string; icon: ComponentType<IconProps>; href: string }[] = [
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "X", icon: XIcon, href: "#" },
  { label: "YouTube", icon: YoutubeIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Logo variant="dark" />
            <p className="mt-3 text-sm text-ink-soft">
              Smarter Offers. Happier You.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-7 gap-y-3 lg:pt-1"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink transition-colors hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ul className="flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-lav text-ink transition-colors hover:bg-brand-blue hover:text-white"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            © 2024 OffersBox. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-ink-soft hover:text-brand-blue">
              Terms
            </a>
            <a href="#" className="text-xs text-ink-soft hover:text-brand-blue">
              Privacy
            </a>
            <a href="#" className="text-xs text-ink-soft hover:text-brand-blue">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
