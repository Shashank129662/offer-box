# Project Engineering Rules

## Framework

This project MUST use:

- Next.js
- Next.js App Router
- React
- TypeScript
- pnpm

These are non-negotiable project requirements.

## Forbidden technologies

DO NOT introduce:

- Vite
- vite.config.ts
- Vite configuration
- Bun
- bun.lock
- bun.lockb
- bunfig.toml
- bun install
- bun run
- npm
- package-lock.json
- yarn
- yarn.lock
- TanStack Start
- TanStack Router
- TanStack Query unless explicitly requested
- React Router as the primary router
- JavaScript application source
- .js application files
- .jsx application files

## Package manager

Use pnpm exclusively.

Use:

pnpm install
pnpm add <package>
pnpm add -D <package>
pnpm dev
pnpm build
pnpm lint

Never use:

npm install
npm run
yarn
bun
bunx

The repository MUST contain pnpm-lock.yaml.

## Next.js architecture

Use the Next.js App Router.

Routes belong under:

src/app/

Use:

page.tsx
layout.tsx
loading.tsx
error.tsx
not-found.tsx
route.ts

when appropriate.

Do not create a TanStack route tree.

Do not create:

router.tsx
routeTree.gen.ts
start.ts

unless explicitly required for a non-Next.js integration.

## TypeScript

All application code must use TypeScript.

Use:

.ts
.tsx

Do not create:

.js
.jsx

Avoid any.

Never use @ts-ignore or @ts-nocheck to hide errors.

## Components

Prefer:

src/components/ui/
src/components/layout/
src/components/shared/

Feature-specific components should live under:

src/features/<feature>/

Keep components focused and reusable.

Avoid giant page components.

Prefer composition over excessive boolean props.

## Server Components

Use Server Components by default.

Only add:

"use client"

when client-side interactivity, state, effects, browser APIs, or a client-only library genuinely requires it.

Do not convert an entire page to a Client Component unnecessarily.

## API architecture

Keep API communication out of large presentational components.

Use a service/API layer.

Use centralized Axios configuration when HTTP APIs are required.

Never hardcode:

- API keys
- tokens
- passwords
- secrets

Use environment variables.

## Visual fidelity

When screenshots, Figma designs, reference images, or an assets folder are supplied:

Treat them as the source of truth.

Do not redesign the interface unless explicitly requested.

Match:

- layout
- spacing
- typography
- font weights
- colors
- borders
- radii
- shadows
- images
- icons
- logos
- image cropping
- image positioning
- responsive behavior

## Exact asset rule

If an exact supplied asset exists, use it.

SAME ASSET > SIMILAR ASSET

Never replace:

- supplied logos with similar logos
- supplied icons with generic icons
- supplied images with stock images
- supplied illustrations with generated illustrations
- supplied fonts with arbitrary fonts

Inspect the assets directory before implementing the interface.

Preserve:

- transparency
- aspect ratio
- resolution
- cropping
- positioning

## Screenshot workflow

Before implementation:

1. Inspect all screenshots.
2. Inspect all provided assets.
3. Map screenshot elements to exact asset files.
4. Identify fonts and typography.
5. Identify reusable components.
6. Identify responsive behavior.
7. Implement the Next.js architecture.
8. Implement the visual design.
9. Compare implementation against the screenshots.
10. Fix discrepancies.

Screenshots are specifications, not inspiration.

## SEO

Every production page should consider:

- title
- description
- canonical URL
- Open Graph metadata
- Twitter metadata
- semantic headings
- image alt text
- internal links
- robots directives
- sitemap
- structured data where appropriate

Use Next.js metadata APIs.

Never invent structured-data facts.

## Accessibility

Use semantic HTML.

Ensure:

- keyboard accessibility
- visible focus
- accessible labels
- meaningful alt text
- correct heading hierarchy
- logical tab order
- accessible interactive controls
- sufficient contrast

## Performance

Prefer:

- Server Components
- minimal client JavaScript
- optimized images
- parallel data fetching
- avoiding request waterfalls
- appropriate caching
- route-level code splitting
- minimal unnecessary re-renders

Do not add unnecessary libraries.

## Validation

Before considering the task complete:

pnpm lint
pnpm build

Also verify:

- no Vite files
- no Bun files
- no npm/yarn lockfiles
- no TanStack routing
- no accidental JS/JSX source
- no hardcoded secrets
- no placeholder assets where real assets exist
- no broken images
- no obvious responsive problems

## Priority

When instructions conflict:

1. Existing project requirements
2. This AGENTS.md
3. User's explicit request
4. Relevant project skills
5. Generic framework conventions

The final implementation MUST remain a Next.js + TypeScript + pnpm project.