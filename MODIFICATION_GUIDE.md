# Netraform Technologies — Modification Guide

This project is a React (Vite) + Tailwind CSS site. Everything is organised so you can
change one thing without hunting through the whole codebase.

## 1. Getting it running

```bash
cd netraform
npm install
npm run dev        # local dev server, usually http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## 2. Where things live

```
src/
  data/content.js         ← ALL text content: nav links, services, programs,
                             projects, testimonials, blog posts, stats, FAQs
  components/
    Navbar.jsx             ← top navigation
    Footer.jsx              ← footer
    LoadingScreen.jsx       ← initial page-load screen
    ui/                     ← reusable building blocks (Button, Accordion,
                              Counter, PageHeader, SectionHeading, Reveal,
                              NetworkPattern)
    sections/                ← one file per homepage section (Hero,
                              WhatWeDo, ProgramsSection, etc.) — these are
                              reused across inner pages too
  pages/                    ← one file per route (Home, About, Services,
                              Programs, Projects, Community, Blog, Contact,
                              FAQ, NotFound)
  App.jsx                    ← routing table — add new pages here
tailwind.config.js           ← colour palette, fonts, shadows, spacing tokens
index.html                   ← page title, SEO meta tags, Google Fonts
```

**Rule of thumb:** if you're changing *words*, go to `src/data/content.js`.
If you're changing *layout or design*, go to the matching component in
`src/components/sections/` or `src/components/ui/`.

## 3. Common changes

### Change any text (headline, service description, testimonial, etc.)
Open `src/data/content.js`. Every array (`services`, `programs`, `projects`,
`testimonials`, `blogPosts`, `stats`, `faqs`, `whyReasons`, `partners`) maps
directly to a section on the site. Edit the object, save — it updates
everywhere that array is used.

Hero headline/subheading and other one-off page copy live directly inside
the relevant component (e.g. `src/components/sections/Hero.jsx`) since
they're not repeated elsewhere.

### Add or remove a service / program / project card
In `src/data/content.js`, add or delete an entry from the relevant array
(`services`, `programs`, `projects`). The grid re-flows automatically —
no layout code to touch.

### Change colours
Open `tailwind.config.js` → `theme.extend.colors`. The five brand colours
are named `primary`, `navy`, `surface`, `muted`, `accent`. Change the hex
value once here and it updates across the entire site, since every
component uses these names (`bg-primary`, `text-navy`, etc.) instead of
raw hex codes.

### Change fonts
Open `tailwind.config.js` → `theme.extend.fontFamily`, and update the
Google Fonts `<link>` in `index.html` to match. `font-display` is used for
all headings, `font-body` for paragraph text.

### Add a new page
1. Create `src/pages/YourPage.jsx` (copy an existing simple page like
   `Projects.jsx` as a starting template).
2. Import it in `src/App.jsx` and add a `<Route path="/your-path" element={<YourPage />} />`.
3. Add it to the `nav` array in `src/data/content.js` if it should appear
   in the navbar/footer.

### Replace an image placeholder
Every image spot is currently a labelled grey box with a comment above it
specifying aspect ratio, style, and a suggested AI-image prompt (search
"Image slot" in the codebase to find them all). To replace one:
```jsx
// before
<div className="aspect-square rounded-xl2 bg-surface ...">[ About image ]</div>

// after
<img src="/images/about-team.jpg" alt="Netraform engineers collaborating"
     className="aspect-square rounded-xl2 object-cover w-full" />
```
Place real image files in the `public/` folder (e.g. `public/images/`) and
reference them with a leading `/`.

### Adjust spacing between sections
Sections use `py-24` (homepage/inner sections) or `py-20` (stats band) for
vertical padding — change the Tailwind spacing class directly on the
`<section>` tag if you want tighter or looser rhythm.

### Turn off / tone down animations
Section reveal-on-scroll is handled by `src/components/ui/Reveal.jsx`
(fade-up via Framer Motion). To disable site-wide, make it render
`children` directly without the motion wrapper. The stat counters live in
`src/components/ui/Counter.jsx`.

## 4. Inner pages not yet fully fleshed out

`About`, `Services`, `InnovationHub`, `Programs`, `Projects`, `Community`,
`Blog`, `Contact`, and `FAQ` are all built and routed, composed from the
same section components as the homepage plus a `PageHeader`. If you want a
page to feel more distinct from the homepage (e.g. a longer About page with
a team grid, or a Blog page with real article pages), add new section
components in `src/components/sections/` following the same pattern as the
existing ones, then drop them into the relevant page file.

## 5. Deploying

This is a static site after `npm run build` (output in `dist/`). Deploy the
same way you deployed 9jaLinks' frontend — Vercel is the simplest option:
```bash
npm install -g vercel
vercel --prod
```
Because this uses React Router with clean URLs (`/about`, `/contact`, etc.),
add a `vercel.json` rewrite so refreshing an inner page doesn't 404:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```
