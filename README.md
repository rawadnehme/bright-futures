# Bright Futures [(https://brightfuturesnonprofit.com)]

A student-run charity website helping classmates at Bryant Middle School (Dearborn, MI) get the school supplies they need to succeed. 100% of donations go directly to students.

Built with React 18, Vite 6, Tailwind CSS, and Framer Motion.

## About

Bright Futures connects donors directly with students in need — no middlemen, no overhead. Every dollar goes straight to kids who show up to school without the basics: pencils, notebooks, or learning materials.

## Stack

- **React 18** + **Vite 6** — single-page app, no router (anchor navigation)
- **Framer Motion** — scroll reveals, hand-drawn SVG underlines, animated counters, magnetic CTA, page-level parallax
- **Tailwind CSS** + custom theme tokens (ink / paper / amber)
- **Fraunces** (display) + **Inter** (body) via Google Fonts
- **Satori** + **@resvg/resvg-js** — programmatic OG image + favicon generation at build time
- **lucide-react** for icons

## Getting started

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev
```

Dev server runs at [http://localhost:5173](http://localhost:5173).

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build (`prebuild` regenerates OG image + favicons) |
| `npm run preview` | Preview the production build locally |
| `npm run og` | Regenerate `public/og-image.png` + favicons without running a full build |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint with auto-fix |

## Project structure

```
src/
  App.jsx                      Entry composition
  main.jsx                     React root
  index.css                    Theme tokens + base styles
  data/content.js              Single source of truth for all copy + payment tags
  lib/cn.js                    clsx + tailwind-merge helper
  components/
    Nav.jsx                    Floating nav + mobile sheet
    ScrollProgress.jsx         Top scroll bar
    Hero.jsx                   Parallax hero with floating glyphs
    Mission.jsx                Sticky-note value cards
    Story.jsx                  Split image + narrative
    Impact.jsx                 Animated counters
    Donate.jsx                 CashApp + Venmo cards
    Footer.jsx
    motion/
      Reveal.jsx               Fade-up on view + Stagger primitives
      Underline.jsx            SVG hand-drawn underline (pathLength anim)
      Counter.jsx              Count-up animation
      MagneticButton.jsx       Cursor-tracking CTA
scripts/
  generate-og.mjs              Satori-based OG + favicon generator
public/
  og-image.png                 Generated
  favicon.svg, favicon-32.png, apple-touch-icon.png
  robots.txt, sitemap.xml, 404.html, site.webmanifest
```

## Editing content

Every piece of user-facing copy, suggested donation amount, payment tag, and email lives in [`src/data/content.js`](src/data/content.js). Touch nothing else when updating the site's words.

## SEO

- Full Open Graph + Twitter Card meta in [`index.html`](index.html)
- JSON-LD `NGO` + `WebSite` schemas inline
- [`public/robots.txt`](public/robots.txt) + [`public/sitemap.xml`](public/sitemap.xml)
- [`public/site.webmanifest`](public/site.webmanifest) for PWA installability
- `og-image.png` is regenerated on every build, so it always matches current copy. Customize the design in [`scripts/generate-og.mjs`](scripts/generate-og.mjs).

## Deploying to GitHub Pages

Pushing to `main` automatically deploys via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow:

1. Installs deps with `npm ci`
2. Runs `npm run lint`
3. Runs `npm run build` (which triggers `prebuild` → OG generator)
4. Copies `dist/index.html` → `dist/404.html` for anchor-friendly fallback
5. Uploads the artifact and deploys via `actions/deploy-pages@v4`

**One-time setup:**
1. Push this repo to GitHub
2. **Settings → Pages → Source: GitHub Actions**

This repo is configured to deploy at **[brightfuturesnonprofit.com](https://brightfuturesnonprofit.com/)**.

If you rename the repo or move the site to a different path, update:

1. `VITE_BASE_PATH` in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
2. `canonical`, `og:url`, `twitter` and `JSON-LD` URLs in [`index.html`](index.html)
3. URLs in [`public/sitemap.xml`](public/sitemap.xml), [`public/robots.txt`](public/robots.txt), and [`public/site.webmanifest`](public/site.webmanifest)
4. The back-link in [`public/404.html`](public/404.html)

## Contact

**brightfuturessupplies@gmail.com**
