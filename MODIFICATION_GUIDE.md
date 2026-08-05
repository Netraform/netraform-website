# Netraform Technologies — Modification Guide

This project is a Next.js (App Router) + TypeScript + Tailwind CSS site. Everything is organized cleanly across routes, components, and design tokens.

## 1. Getting it running

```bash
npm install
npm run dev        # Local dev server (http://localhost:3000)
npm run build      # Production Next.js build
npm run start      # Start production server locally
npm run type-check # Run TypeScript type checking
```

## 2. Where things live

```
app/                       ← Next.js App Router routes & pages
  layout.tsx               ← Root layout (Navbar, Footer, Fonts, Global Meta/SEO)
  globals.css              ← Tailwind directives & global styles
  page.tsx                 ← Homepage route (/)
  about/page.tsx           ← About page (/about)
  services/page.tsx        ← Services & Products (/services)
  innovation-hub/page.tsx  ← Innovation Hub (/innovation-hub)
  research/page.tsx        ← Research & Projects (/research)
  blog/page.tsx            ← Blog page (/blog)
  careers/page.tsx         ← Careers page (/careers)
  contact/page.tsx         ← Contact & FAQ (/contact)
  faq/page.tsx             ← FAQ page (/faq)
components/
  Navbar.tsx               ← Navigation header with dark mode toggle
  Footer.tsx               ← Global footer & newsletter signup
  sections/                ← Section components (Hero, WhatWeDo, FeaturedProjects, etc.)
  ui/                      ← Reusable UI elements (Button, Accordion, Counter, SectionHeading, etc.)
lib/                       ← Utility functions (utils.ts)
public/                    ← Static assets (logo NT.png, favicon, icons)
tailwind.config.js         ← Custom color palette, fonts, keyframes, and tokens
```

## 3. Common changes

### Edit page copy or section content
- Page-level content lives in `app/[route]/page.tsx`.
- Reusable section designs live in `components/sections/` (e.g. `Hero.tsx`, `WhatWeDo.tsx`, `FeaturedProjects.tsx`, `BlogPreview.tsx`).

### Change brand colors
Open `tailwind.config.js` → `theme.extend.colors`. Update the color tokens (`electric-blue`, `deep-blue`, `slate`, etc.).

### Add a new page / route
Create a new directory in `app/` with a `page.tsx` file (e.g., `app/team/page.tsx`). Add the route link to `navigation` in `components/Navbar.tsx` and `components/Footer.tsx`.

### Static Assets & Images
Place image assets in the `public/` directory and access them directly from `/` (e.g., `/NT.png`).

## 4. Building & Deploying

This Next.js application can be deployed directly to Vercel or any Node.js hosting platform:
```bash
npm run build
```
Vercel automatically detects Next.js App Router configuration and handles serverless deployment seamlessly.
