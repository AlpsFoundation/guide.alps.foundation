# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project

Single-page Astro 6 site at `guide.alps.foundation`: a guide for starting a psychedelic student association at a university. The entire page is one file: `src/pages/index.astro`. Content is hand-authored as inline data arrays in the frontmatter and rendered with Tailwind utility classes.

## Commands

Package manager is **pnpm**; Node `>=22.12.0`.

- `pnpm dev` — local dev server (Astro on `localhost:4321`)
- `pnpm build` — production build to `./dist/`
- `pnpm preview` — preview the built site locally
- `pnpm astro check` — type-check `.astro` files
- `pnpm generate-types` — `wrangler types`, regenerates Cloudflare Worker bindings (`worker-configuration.d.ts`)

There is no test runner, lint config, or formatter configured.

## Architecture

- **Astro 6 + MDX integration**, output via the **`@astrojs/cloudflare` adapter**. Deployed as a Cloudflare Worker; `wrangler.jsonc` maps the custom domain `guide.alps.foundation` and binds `./dist` as static assets (`ASSETS`). The Worker entrypoint is `@astrojs/cloudflare/entrypoints/server` (no custom server code).
- **Tailwind v4** is wired through `@tailwindcss/vite` (not the Astro integration). Design tokens are declared with the `@theme` block in `src/styles/global.css` — the custom `paper`, `ink`, `ink-soft`, `rule`, and `olive-{50..950}` colors and the Switzer font come from there. Add new tokens there rather than in a Tailwind config (there is none).
- **Switzer fonts** are self-hosted from `public/fonts/` via `@font-face` in `global.css`. The ALPS logo uses a CSS `mask: url('/alps-logo.svg')` so the SVG is recolored via CSS background gradients (`.alps-logo-mask`).
- **Tabler icons** are imported as raw SVG strings (`@tabler/icons/outline/<name>.svg?raw`) and inlined with Astro's `set:html` directive. The wrapper span uses class `guide-icon`, which sizes the SVG via `width/height: 100%` in `global.css`. Pattern to add a new icon: add the import at the top of `index.astro`, then `<span class="guide-icon h-X w-X" set:html={IconFoo} />`.
- **Section reveals** are progressive-enhancement only: any element marked `data-reveal` starts hidden (when the `.js` class is on `<html>`) and is revealed by an `IntersectionObserver` at the bottom of `index.astro`. Honors `prefers-reduced-motion`. Stagger is via inline `--reveal-delay` set by the `revealStyle(index)` helper.

## Design system

`DESIGN.md` is the source of truth for visual direction — Swiss-modernist, monochrome-first, restrained motion, no decorative primary color, no card-heavy patterns. When adding or restyling sections, read it first; the olive palette in `global.css` is the implementation of its "ambient spectrum" rule and should not be promoted into a CTA accent color.

## Content edits

Page content lives in the frontmatter constants of `src/pages/index.astro` (`registrationSteps`, `principles`, `isItems`, `notItems`, `ethics`, `formats`, `palaPillars`, `namingAdvice`, `resources`, `timeline`, `remember`). Edit those arrays rather than the JSX-like markup below — the markup `.map()`s over them.
