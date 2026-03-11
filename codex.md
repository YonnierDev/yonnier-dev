# codex.md

## Project Overview

This repository is a personal portfolio site built with **React 18 + Vite + TypeScript + Tailwind CSS**.
It renders a single-page experience with smooth section navigation, dark mode support, and scroll-based reveal animations.

## Tech Stack

- **Runtime:** Node.js `>=18`
- **Frontend:** React 18, ReactDOM
- **Build tool:** Vite 5 (`@vitejs/plugin-react-swc`)
- **Styling:** Tailwind CSS + custom CSS utilities/animations
- **Language:** TypeScript

## NPM Scripts

- `npm run dev` → start local dev server
- `npm run build` → production build (`vite build --debug`)
- `npm run preview` → preview production build
- `npm run vercel-build` → build command used for Vercel deployments

## Source Structure

```text
src/
  App.tsx                 # main page composition and section layout
  main.tsx                # React entry point
  index.css               # Tailwind layers + custom classes + keyframes
  components/
    Navbar.tsx            # top nav, dark-mode toggle, smooth scroll handlers
    Hero.tsx              # landing section
    About.tsx             # about/profile section
    Skills.tsx            # skills cards
    Projects.tsx          # featured projects cards
    Contact.tsx           # contact links
    Footer.tsx            # footer
    Reveal.tsx            # IntersectionObserver-based reveal wrapper
public/
  favicon.png
  logo.svg
  logodev.jpeg
```

## UI/UX Notes

- Dark mode is toggled by adding/removing `dark` class on `document.documentElement` and persisted in `localStorage`.
- Smooth section scroll is implemented in components (anchor interception + `window.scrollTo`).
- Reveal animations use `Reveal.tsx` + `.reveal` and `.reveal.is-visible` in `index.css`.
- Background uses `.bg-animated` with radial gradients and slow animation in dark mode.

## Tailwind + Custom Styling

- Tailwind config extends `primary` color scale.
- Reusable utility classes in `src/index.css`:
  - `.section`, `.section-title`
  - `.btn`, `.btn-primary`, `.btn-outline`
  - `.card`

## Deployment

- Standard static build output is generated in `dist/`.
- Suitable for static hosts (Vercel, Netlify, static Nginx, etc.).

## Suggested Next Engineering Steps

1. Add linting (`eslint` + `typescript-eslint`) and format checks.
2. Add a basic component test setup (Vitest + Testing Library).
3. Externalize portfolio content (JSON/TS config) to simplify updates.
4. Add SEO/social metadata (Open Graph, Twitter cards, canonical URL).
