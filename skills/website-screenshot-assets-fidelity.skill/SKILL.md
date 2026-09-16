---
name: website-screenshot-assets-fidelity
description: Use when the user provides website screenshots, reference images, exported website assets, logos, icons, fonts, illustrations, or an assets folder and wants the interface reproduced in code. Treat screenshots and supplied assets as the visual source of truth and preserve exact asset identity, cropping, transparency, typography, layout, spacing, and responsive behavior. Do not substitute similar assets or redesign the reference.
disable-model-invocation: false
---

# Website Screenshot + Asset Fidelity

## Purpose

Reconstruct the supplied website/reference as accurately as practical.

The supplied screenshots and asset directory are evidence of the intended interface. They are not loose inspiration.

## Required order

### Phase 1 — Inspect

Before writing UI code:

1. Inspect every supplied screenshot.
2. Inspect the entire supplied assets directory.
3. Group assets into:
   - logos
   - brand marks
   - icons
   - hero images
   - product images
   - illustrations
   - backgrounds
   - badges
   - decorative graphics
   - fonts
4. Identify image dimensions, transparency, aspect ratios, and likely usage.
5. Identify repeated assets and variants.

Do not start coding before understanding the available assets.

### Phase 2 — Build an asset map

Create an internal mapping:

```text
Screenshot section → visual element → exact asset file
```

Examples:

```text
Hero → phone illustration → public/assets/hero-phone.png
Header → brand logo → public/assets/logo.svg
Category card → category illustration → public/assets/category-01.png
```

Use the exact supplied file whenever it exists.

## Exact asset policy

The hierarchy is:

1. Exact supplied asset
2. Existing project asset that is demonstrably identical
3. Only if no exact asset exists, an explicitly requested replacement

Do NOT:

- use a similar logo
- use a different brand logo
- substitute an icon from Lucide/Font Awesome/etc. when the exact icon exists
- generate a fake brand mark
- recreate supplied artwork with CSS
- redraw supplied SVG paths
- use stock photography instead of supplied imagery
- replace a transparent PNG/WebP with a flattened image
- change the supplied image's aspect ratio
- crop important content
- unnecessarily recolor supplied assets
- lower image quality
- replace supplied fonts with a generic font

## Transparency

If an asset has a transparent background:

- preserve transparency
- do not add a background rectangle
- do not flatten it into a screenshot
- preserve its intended visual edges

## Image sizing and cropping

Preserve the visual relationship shown in the screenshot.

Use:

- explicit width/height where appropriate
- `object-fit` intentionally
- `object-position` when the reference requires it
- `overflow-hidden` only when the screenshot demonstrates clipping

Do not stretch images.

## Logos and brand assets

Brand logos must remain visually accurate.

Do not replace a supplied logo with:

```text
text
emoji
generic icon
CSS drawing
different SVG
```

If the asset exists, use it.

## Icons

If an exact icon asset exists, use it.

Do not substitute a visually different icon simply because it has the same semantic meaning.

For Figma exports, follow the Figma design-to-code asset guidance and preserve exported assets rather than manually recreating paths.

## Typography

Identify:

- font family
- font weight
- font size
- line height
- letter spacing
- casing

If font files are supplied, load and use them correctly.

Do not default to Inter unless the reference actually uses Inter or no stronger source exists.

## Screenshot reconstruction

Match:

- page width
- content max-width
- section spacing
- vertical rhythm
- horizontal alignment
- typography
- colors
- borders
- radius
- shadows
- imagery
- icon placement
- header/navigation
- cards
- buttons
- footer
- responsive changes

Do not "improve" the design unless the user explicitly asks for redesign.

## Responsive inference

When only desktop screenshots are provided:

- infer responsive behavior conservatively
- preserve content hierarchy
- avoid inventing new UI
- collapse navigation only when appropriate
- stack content when necessary
- maintain image relationships
- keep touch targets usable

When mobile screenshots are supplied, treat them as equally authoritative.

## Quality verification

After implementation, compare the result against the supplied screenshots.

Check:

- asset identity
- image crop
- image sharpness
- transparency
- logo accuracy
- typography
- spacing
- alignment
- colors
- borders
- shadows
- section heights
- responsive behavior

Fix discrepancies rather than rationalizing them.

## No placeholders

If the user supplied the real asset, never leave:

```text
placeholder.svg
placeholder.png
generic-logo.svg
sample-image.jpg
```

in the finished UI for that element.

## Completion standard

The result should look like an implementation of the supplied website, not a newly designed website inspired by it.
