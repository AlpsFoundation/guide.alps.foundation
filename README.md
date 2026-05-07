![](public/og-image.png)

# guide.alps.foundation

A single-page guide for students who want to start a psychedelic society at their university — registration, ethics, programming formats, and how to plug into the European network coordinated by [ALPS](https://alps.foundation).

The whole site is one Astro page (`src/pages/index.astro`) with content authored as inline data arrays in the frontmatter. Visual direction is documented in [`DESIGN.md`](./DESIGN.md).

## Stack

- **Astro 6** with the `@astrojs/cloudflare` adapter — deployed as a Cloudflare Worker, custom domain `guide.alps.foundation`.
- **Tailwind v4** via `@tailwindcss/vite`. Design tokens live in `src/styles/global.css` under `@theme`.
- **Switzer** (variable, self-hosted from `public/fonts/`) and **Tabler Icons** (inlined as raw SVG).
- **pnpm** package manager, Node `>=22.12.0`.

## Commands

| Command                | Action                                                    |
| :--------------------- | :-------------------------------------------------------- |
| `pnpm install`         | Install dependencies                                      |
| `pnpm dev`             | Start the dev server at `localhost:4321`                  |
| `pnpm build`           | Build to `./dist/` (client assets in `dist/client/`)      |
| `pnpm preview`         | Preview the production build locally                      |
| `pnpm astro check`     | Type-check `.astro` files                                 |
| `pnpm generate-types`  | Regenerate Cloudflare Worker bindings (`wrangler types`)  |
| `pnpm generate-og`     | Regenerate `public/og-image.png` (see below)              |

## Editing content

All copy lives in the frontmatter constants of `src/pages/index.astro` (`registrationSteps`, `principles`, `isItems`, `notItems`, `ethics`, `formats`, `palaPillars`, `namingAdvice`, `resources`, `timeline`, `remember`). Edit those arrays — the markup `.map()`s over them.

## Open Graph image

`public/og-image.png` is the social preview shown when the page is shared. It is committed to the repo and regenerated as a one-off via:

```sh
pnpm generate-og
```

The script (`scripts/generate-og.mjs`) uses headless Chromium (Playwright) to render an HTML layout with the real Switzer woff2 font and the masked ALPS logo gradient, then screenshots a 1200×630 PNG. Run it again whenever the title or tagline changes — the source strings live at the top of the script.

First-time setup on a new machine:

```sh
pnpm install
npx playwright install chromium
```

## Deployment

Pushes to `main` deploy to Cloudflare. `wrangler.jsonc` configures the production hostname and the static asset binding; `@astrojs/cloudflare` writes the effective `dist/server/wrangler.json` at build time, pointing the assets binding at `dist/client/`.
