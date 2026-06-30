# danielmarko.com

Personal portfolio of Daniel Marko — projects at the intersection of AI, health and longevity
(Newagy, Mira, HAI, Prebudená Vitalita, Wellness Warriors). Bilingual SK / EN.

## Stack
- [Astro](https://astro.build) (static output) + Tailwind CSS v4
- Built-in i18n: Slovak default (`/`), English under `/en/`
- Deployed to **GitHub Pages** (the `gh-pages` branch) via `./scripts/deploy.sh`
- Custom domain: `danielmarko.com` (see `public/CNAME`)

## Develop
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # serve the built site
```

## Edit content
All project copy lives in **`src/data/projects.ts`** — one entry per project with `sk` and `en`
fields (tagline, summary, status, highlights). UI strings are in `src/i18n.ts`.
Images are in `src/assets/projects/` (Astro optimizes them at build time).

Change a file → `git commit && git push` (source) → `./scripts/deploy.sh` (build + publish to Pages).
