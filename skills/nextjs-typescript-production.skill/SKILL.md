---
name: nextjs-typescript-production
description: Use when building, implementing, converting, refactoring, or reviewing a production web application that must use Next.js App Router and TypeScript. Apply for frontend implementation, screenshot-to-code, Figma-to-code, page creation, component creation, API integration, or frontend refactoring. Enforces Next.js-only architecture, TypeScript-only source, pnpm-only package management, no Vite, no Bun, no npm/yarn, exact provided asset fidelity, production folder structure, accessibility, responsive design, and React/Next.js performance practices.
disable-model-invocation: false
---

# Next.js + TypeScript Production Skill

## Primary objective

Build production-quality web applications using:

- Next.js App Router
- React
- TypeScript
- pnpm
- modern CSS / Tailwind when appropriate
- server-first Next.js architecture

The implementation must be maintainable, accessible, responsive, performant, and visually faithful to the supplied reference.

## Hard technology constraints

MUST use:

- Next.js App Router
- TypeScript
- `.ts` and `.tsx` application source
- pnpm

MUST NOT use:

- Vite
- `vite.config.*`
- `import.meta.env`
- Bun
- `bun.lockb`
- `bun install`
- `bun run`
- npm
- yarn
- JavaScript application source
- `.js` / `.jsx` application files
- Vue / Nuxt
- Angular
- Svelte / SvelteKit
- Remix
- Gatsby
- Astro
- React Router as the primary application router
- TanStack Start
- TanStack Router
- TanStack Query unless the existing project explicitly requires it

If an existing project is Vite-based but the requested target is Next.js, migrate the implementation to Next.js instead of extending the Vite architecture.

## Package management

Use pnpm for all package operations.

Examples:

```bash
pnpm install
pnpm add <package>
pnpm add -D <package>
pnpm dev
pnpm build
pnpm lint
```

Do not introduce another package manager or lockfile.

## Project architecture

Prefer:

```text
project/
├── public/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── <route>/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── shared/
│   ├── features/
│   │   └── <feature>/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       ├── types.ts
│   │       └── index.ts
│   ├── services/
│   ├── hooks/
│   ├── lib/
│   ├── config/
│   ├── providers/
│   └── types/
├── next.config.ts
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

Do not create folders merely for convention. Add a directory when it has a clear responsibility.

## Component boundaries

- Keep components focused on one responsibility.
- Prefer reusable components when the same UI pattern appears more than once.
- Keep route-specific composition close to the route.
- Keep domain-specific components inside `features/<feature>`.
- Put generic primitives in `components/ui`.
- Put shared layout pieces in `components/layout`.
- Avoid giant page components.
- Avoid excessive prop drilling.
- Prefer composition over boolean-prop proliferation.
- Keep state close to where it is owned.
- Do not create abstractions before they are useful.

## Server and Client Components

Use Server Components by default.

Use `"use client"` only when the component genuinely requires:

- browser APIs
- event handlers/interactivity
- client-side state
- effects
- client-only libraries

Do not make an entire route a Client Component merely because one small interactive component needs client behavior.

## TypeScript standards

- Enable strict TypeScript.
- Prefer explicit domain types.
- Avoid `any`.
- Never use `@ts-ignore` or `@ts-nocheck` to hide implementation problems.
- Avoid unsafe type assertions.
- Type component props.
- Type API responses and service boundaries.
- Use discriminated unions where they improve correctness.
- Keep shared domain types in appropriate `types` or feature locations.

## Data and API architecture

Do not place large API implementations directly inside presentational components.

Use a service/API layer.

When HTTP requests are required, prefer a centralized Axios configuration rather than creating ad-hoc Axios clients throughout the codebase.

Keep:

- base URLs
- interceptors
- authentication behavior
- request/response normalization
- error handling

centralized.

Never hardcode API secrets or credentials.

Use environment variables for environment-specific configuration.

## Environment variables

Never expose secrets in client-side code.

Use `NEXT_PUBLIC_` only for values intentionally safe to expose to the browser.

Do not hardcode:

- API keys
- tokens
- passwords
- private URLs
- credentials

## Visual fidelity

When screenshots, reference images, Figma designs, or an assets directory are provided, treat them as the source of truth.

Do not redesign the UI unless explicitly requested.

Match:

- layout
- spacing
- typography
- font weights
- colors
- borders
- radius
- shadows
- gradients
- image dimensions
- cropping
- positioning
- iconography
- logo placement
- navigation
- cards
- buttons
- section heights
- responsive behavior

## Exact asset rule

If the user provides an asset, use the exact asset.

SAME ASSET > SAME VISUAL > APPROXIMATE ASSET

Never:

- replace a provided logo with a similar logo
- replace a supplied brand mark with text
- replace supplied icons with arbitrary icon-library icons
- use stock images when the supplied image exists
- generate a replacement illustration when the original exists
- redraw a provided SVG
- use a different font when the supplied font is available
- alter transparent assets unnecessarily
- distort aspect ratios
- use a low-resolution duplicate when a higher-quality source exists

Inspect the supplied asset directory before implementation.

## Screenshot implementation workflow

1. Inspect all screenshots.
2. Inspect the asset directory.
3. Map visible elements to exact assets.
4. Identify typography and visual tokens.
5. Identify repeated UI patterns.
6. Infer desktop/mobile responsive behavior.
7. Build the Next.js structure.
8. Implement reusable components.
9. Implement exact assets.
10. Compare the result against the reference.
11. Fix visual discrepancies.
12. Run typecheck, lint, and production build.

Screenshots are specifications, not inspiration.

## Accessibility

Use semantic HTML.

Ensure:

- keyboard accessibility
- visible focus states
- meaningful labels
- alt text for meaningful images
- decorative images marked appropriately
- sufficient contrast
- correct heading hierarchy
- accessible interactive controls
- logical tab order

Do not use clickable `<div>` elements when a semantic control is appropriate.

## Responsive behavior

Do not simply shrink desktop layouts.

Implement intentional behavior for:

- mobile
- tablet
- desktop
- large desktop when relevant

Preserve the design hierarchy and interaction model.

## Performance

Follow React and Next.js performance best practices.

Prefer:

- server rendering where appropriate
- minimal client JavaScript
- optimized images
- lazy loading when appropriate
- parallel data fetching
- avoiding request waterfalls
- stable component boundaries
- minimal unnecessary re-renders
- route-level code splitting through Next.js
- correct caching/revalidation strategies

Do not add memoization, state libraries, or abstractions without a measurable reason.

## Validation

Before declaring the implementation complete:

```bash
pnpm lint
pnpm build
```

Also verify:

- no Vite files
- no Bun files
- no npm/yarn lockfiles
- no accidental `.js`/`.jsx` source
- no hardcoded secrets
- no placeholder assets when real assets were supplied
- no broken images
- no console errors
- no obvious responsive regressions
- no inaccessible interactive controls

## Final rule

The final implementation must be a real Next.js + TypeScript application, not a Vite/React prototype disguised as a Next.js project.

When another generic instruction conflicts with these technology constraints, these Next.js + TypeScript + pnpm constraints take precedence.
