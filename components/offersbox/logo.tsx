type LogoProps = {
  variant?: "light" | "dark"
  className?: string
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-ink"

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <BoxMark />
      <span className={`text-xl font-bold tracking-tight ${textColor}`}>
        Offers<span className="text-brand-orange">Box</span>
      </span>
    </span>
  )
}

function BoxMark() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="obx" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffa04d" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <path d="M24 5 43 15v3L24 27 5 18v-3L24 5Z" fill="url(#obx)" />
      <path d="M5 18l19 9v16L5 34V18Z" fill="#f97316" />
      <path d="M43 18l-19 9v16l19-9V18Z" fill="#e5620e" />
      <path
        d="M18 21.5v6l6 3v-6l-6-3Z"
        fill="#fff"
        opacity="0.9"
      />
    </svg>
  )
}
