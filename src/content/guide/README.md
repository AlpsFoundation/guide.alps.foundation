# Guide Content

Each locale has its own MDX module:

- `en.mdx`
- `fr.mdx`
- `de.mdx`
- `it.mdx`
- `es.mdx`
- `pt.mdx`

Edit prose in the locale file's YAML frontmatter. Long copy should use folded block strings (`>-`) so translators can work paragraph by paragraph without touching TypeScript syntax. Shared resource links live in `src/data/guide-shared.ts`; page metadata and Open Graph copy live in `src/data/guide-meta.mjs`.
