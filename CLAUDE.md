# Hande Kurtulus Yildiz — Portfolio Website Rebuild

## Mission

Rebuild the portfolio website at `https://github.com/handekyldz/portfolio-website` from the ground up. The current codebase was auto-generated from Figma (via Figma-to-code) and suffers from poor maintainability, bloated assets, unreadable component names, and Figma-specific import patterns. The goal is to recreate the **exact same visual design and user experience** with a clean, performant, production-ready Next.js codebase that will be deployed on **Vercel (v0)**.

---

## Current Project Analysis

### What exists today

- **Stack:** Vite + React 18 + TypeScript + Tailwind CSS v4 + Framer Motion + Radix UI + shadcn/ui
- **Pages (7 routes):**
  - `/` — Landing page (hero bio + 2-column project grid with 5 project cards)
  - `/avc` — Project detail: "Avocado" — Brand & Web Design case study
  - `/glc` — Project detail: "Glacis" — Brand Design case study
  - `/dashboard` — Project detail: Procurement Dashboard Design case study
  - `/marketing-design` — Marketing Design projects listing page
  - `/amazon-kbeauty-week` — Amazon K-Beauty Week marketing case study
  - `/newrequest` — Request Creation Flow Redesign case study
- **Assets:** 43 PNG images totaling ~109 MB (many are 2–22 MB unoptimized PNGs with cryptographic hash filenames)
- **Fonts:** "Tiempos Text" (serif, for headings) and "Plus Jakarta Sans" (sans-serif, for body/UI)
- **Design signature colors:** Deep navy `#0A0047`, soft lavender `#F3F1FF` / `#CEC6FF`, near-black `#1C1C1F` / `#0C0C0D`, muted gray `#4B4B51`, white `#FFFFFF`

### What's wrong (problems to fix)

1. **Figma-generated code:** Components are named `Frame`, `Frame2`, `Frame3`… `Frame11`, making maintenance impossible. SVG paths are stored as hashed TypeScript objects imported from files like `svg-dhscn3c2eb.ts`.
2. **`figma:asset/` import pattern:** Images use `import img from "figma:asset/hash.png"` resolved via 43+ Vite aliases — this is fragile and nonstandard.
3. **Massive unoptimized images:** 43 PNGs averaging ~2.5 MB each. No WebP/AVIF, no responsive `srcset`, no lazy loading strategy.
4. **Duplicate layout code:** Separate components exist for 390px, 768px, and 1220px layouts instead of using responsive CSS.
5. **Bloated dependencies:** 30+ Radix UI packages imported but most are unused (accordion, calendar, menubar, OTP input, etc.). Only `dialog` (Sheet for mobile nav) is actually used.
6. **No SEO:** Missing meta tags, Open Graph, structured data, sitemap.
7. **No image alt text:** All images have `alt=""`.
8. **Click-delegation pattern:** Navigation works via parent `onClick` with `target.closest('[data-name="Project card"]')` — fragile and inaccessible.

---

## Target Architecture

### Tech Stack

```
Next.js 14+ (App Router)
TypeScript (strict)
Tailwind CSS v4
Framer Motion (motion/react)
next/image (for automatic WebP/AVIF, responsive srcset, lazy loading)
Vercel deployment (v0)
```

### Minimal Dependencies

Only install what's actually needed:

```json
{
  "dependencies": {
    "next": "latest",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest",
    "canvas-confetti": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "typescript": "latest",
    "tailwindcss": "latest",
    "@tailwindcss/postcss": "latest"
  }
}
```

Do NOT install: Radix UI, shadcn/ui, recharts, embla-carousel, react-hook-form, react-day-picker, input-otp, cmdk, vaul, sonner, react-resizable-panels, next-themes, or any other unused dependency.

### Folder Structure

```
/
├── public/
│   ├── fonts/
│   │   ├── TiemposText-Regular.woff2
│   │   └── PlusJakartaSans-Regular.woff2  (+ other weights if needed)
│   ├── images/
│   │   ├── projects/
│   │   │   ├── avocado-hero.webp
│   │   │   ├── avocado-thumb.webp
│   │   │   ├── glacis-hero.webp
│   │   │   ├── glacis-thumb.webp
│   │   │   ├── dashboard-hero.webp
│   │   │   ├── dashboard-thumb.webp
│   │   │   ├── ikea-thumb.webp
│   │   │   ├── newrequest-hero.webp
│   │   │   ├── newrequest-thumb.webp
│   │   │   ├── kbeauty-thumb.webp
│   │   │   └── ... (all project detail images)
│   │   └── profile/
│   │       └── hande-avatar.webp
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx           (root layout with fonts, metadata, analytics)
│   │   ├── page.tsx             (landing page)
│   │   ├── projects/
│   │   │   ├── avocado/page.tsx
│   │   │   ├── glacis/page.tsx
│   │   │   ├── dashboard/page.tsx
│   │   │   └── new-request/page.tsx
│   │   └── marketing-design/
│   │       ├── page.tsx
│   │       └── amazon-kbeauty/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx   (replaces Sheet dependency — build from scratch)
│   │   ├── ui/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   ├── BackButton.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── TagBadge.tsx     (category + year badge)
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── FadeInOnScroll.tsx
│   │   │   ├── ConfidentialModal.tsx
│   │   │   └── ConfettiTrigger.tsx
│   │   └── icons/
│   │       └── Logo.tsx         (the "hnd." SVG logo)
│   ├── data/
│   │   └── projects.ts          (all project metadata in one typed array)
│   ├── lib/
│   │   └── utils.ts             (cn helper, preventImageDownload)
│   └── styles/
│       └── globals.css
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Detailed Build Instructions

### Phase 1: Project Setup

1. Create a new Next.js project: `npx create-next-app@latest hnd-portfolio --typescript --tailwind --app --src-dir`
2. Clean out default boilerplate.
3. Configure `next.config.js`:
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     images: {
       formats: ['image/avif', 'image/webp'],
       deviceSizes: [640, 768, 1024, 1280, 1536],
     },
   };
   module.exports = nextConfig;
   ```
4. Set up fonts in the root layout using `next/font/local` for Tiempos Text, and `next/font/google` for Plus Jakarta Sans (it's on Google Fonts).

### Phase 2: Image Optimization (CRITICAL)

This is an image-heavy portfolio. Image handling is the #1 performance factor.

1. **Convert all 43 PNGs to WebP** using `cwebp` or `sharp` with quality 80–85. Target: each image under 200 KB for thumbnails, under 500 KB for hero images.
2. **Rename files semantically.** Map the current hash filenames to meaningful names by cross-referencing the import statements:
   - `424e9261...png` → used as first project card image on landing → `avocado-thumb.webp`
   - `ead7220d...png` → second project card → `glacis-thumb.webp`
   - `b7610cb6...png` → third project card → `dashboard-thumb.webp`
   - etc.
3. **Use `next/image` everywhere.** Every `<img>` must become `<Image>` with:
   - `width` and `height` props (or `fill` with a sized container)
   - `sizes` prop for responsive behavior
   - `priority` for above-the-fold images (hero images only)
   - `loading="lazy"` is automatic for non-priority images
   - `placeholder="blur"` with `blurDataURL` for better perceived performance
4. **Create image thumbnails** (low resolution ~20px wide) for blur placeholders.
5. **Provide descriptive `alt` text** for every project image (e.g., "Avocado brand identity — landing page design showcase").

### Phase 3: Data Layer

Create `src/data/projects.ts`:

```typescript
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  thumbnail: string;
  thumbnailAlt: string;
  href: string;
  isConfidential?: boolean;
  isExternal?: boolean;
}

export const projects: Project[] = [
  {
    id: "avocado",
    slug: "avocado",
    title: "A Fresh Identity for a Complex Service Model",
    subtitle: "Avocado",
    category: "BRAND & WEB DESIGN",
    year: "2025",
    thumbnail: "/images/projects/avocado-thumb.webp",
    thumbnailAlt: "Avocado brand identity and web design project",
    href: "/projects/avocado",
  },
  {
    id: "glacis",
    slug: "glacis",
    title: "Designing a Bold Identity with Practical Clarity",
    subtitle: "Glacis",
    category: "BRAND DESIGN",
    year: "2025",
    thumbnail: "/images/projects/glacis-thumb.webp",
    thumbnailAlt: "Glacis brand design project",
    href: "/projects/glacis",
  },
  {
    id: "dashboard",
    slug: "dashboard",
    title: "Procurement Dashboard Design",
    subtitle: "Dashboard",
    category: "PRODUCT DESIGN",
    year: "2025",
    thumbnail: "/images/projects/dashboard-thumb.webp",
    thumbnailAlt: "Procurement dashboard interface design",
    href: "/projects/dashboard",
  },
  {
    id: "ikea",
    slug: "ikea",
    title: "IKEA High Friction Interaction Study",
    subtitle: "IKEA UX Study",
    category: "PRODUCT DESIGN",
    year: "2025",
    thumbnail: "/images/projects/ikea-thumb.webp",
    thumbnailAlt: "IKEA high friction interaction UX study",
    href: "#",
    isConfidential: true,
  },
  {
    id: "newrequest",
    slug: "new-request",
    title: "Request Creation Flow Redesign",
    subtitle: "New Request",
    category: "PRODUCT DESIGN",
    year: "2025",
    thumbnail: "/images/projects/newrequest-thumb.webp",
    thumbnailAlt: "Request creation flow redesign project",
    href: "/projects/new-request",
  },
];

export const marketingProjects: Project[] = [
  {
    id: "kbeauty",
    slug: "amazon-kbeauty",
    title: "Amazon K-Beauty Week",
    subtitle: "Amazon K-Beauty",
    category: "MARKETING DESIGN",
    year: "2025",
    thumbnail: "/images/projects/kbeauty-thumb.webp",
    thumbnailAlt: "Amazon K-Beauty Week marketing design",
    href: "/marketing-design/amazon-kbeauty",
  },
  // Add more marketing projects from the original MarketingDesign page
];
```

### Phase 4: Core Components

#### Nav.tsx
- Sticky top navigation with blur-on-scroll effect (`backdrop-blur-md bg-white/90 shadow-sm` when scrolled)
- "hnd." SVG logo on the left with magnetic hover effect (Framer Motion spring)
- Desktop: inline nav links (Work, Marketing design, Contact) with underline hover animation
- Mobile: hamburger icon that opens a **custom slide-out panel** (build with Framer Motion `AnimatePresence` — do NOT install Radix Dialog/Sheet)
- Use Next.js `<Link>` for navigation, not `onClick` delegation
- "Contact" links to `mailto:handekyldz@gmail.com`
- "Work" scrolls to the `#projects` section on the home page

#### Footer.tsx
- Deep navy background (`#0A0047`) with rounded corners (`rounded-[32px]`)
- Large "hnd." logo with lavender gradient fill (`#CEC6FF` → `#F3F1FF`)
- CTA text: "Let's build something good together!" in Tiempos Text
- Circular mail button (lavender background with arrow-up-right icon)
- Social links: LinkedIn (`https://www.linkedin.com/in/handeky/`), Contra (`https://contra.com/hande_kurtulus_yildiz_6b4dzzct`)

#### ProjectCard.tsx
- Reusable card component accepting `Project` data
- Aspect ratio `574:320` for thumbnail container
- Image zoom on hover (`scale-105` transition, 500ms ease-out)
- Title + category badge + year below the image
- Custom cursor effect on hover (desktop only, hide for touch devices)
- If `isConfidential`, clicking opens the `ConfidentialModal` instead of navigating
- Use `<Link>` wrapping the entire card for accessible navigation

#### ProjectGrid.tsx
- 2-column responsive grid on desktop (`md:grid-cols-2`), single column on mobile
- Staggered `FadeInOnScroll` animation (delay increases per card: 0, 0.1, 0.2…)
- Gap of 24px between cards

#### FadeInOnScroll.tsx
- IntersectionObserver-based fade+slide animation
- Triggers once when element enters viewport (threshold 0.1, rootMargin -100px bottom)
- Animates from `opacity: 0, y: 20` to `opacity: 1, y: 0` over 600ms

#### CustomCursor.tsx
- Only visible on desktop (check for pointer device with `matchMedia`)
- Shows a "View" text circle cursor when hovering over project cards
- Follows mouse with slight spring delay
- Hidden when not hovering over interactive project elements

#### ConfidentialModal.tsx
- Simple centered modal with overlay (`bg-black/20`)
- Title: "Confidential Project"
- Body: "This project is under NDA, get in touch with me to learn more."
- Close button (X icon) and "Close" text button
- Use Framer Motion for enter/exit animation
- Trap focus inside modal for accessibility

#### ConfettiTrigger.tsx (hook)
- Fires confetti from both sides when user scrolls to bottom of project detail pages
- Colors: `['#8B5CF6', '#C4B5FD', '#A78BFA', '#78787D', '#E11D48', '#5EEAD4']`
- Duration: 0.5 seconds
- Only triggers once per page visit

#### MobileMenu.tsx
- Full custom implementation — no Radix Sheet dependency
- Slides in from right side (300px–400px wide)
- Backdrop overlay that closes menu on click
- Menu items: Work, Marketing design, Contact
- Animated with Framer Motion `AnimatePresence`
- Focus trap and `Escape` key to close
- Prevent body scroll when open

### Phase 5: Page Layouts

#### Landing Page (`/`)
- `<Nav />` at top
- Hero section:
  - Small avatar image + "Available for freelance" tag (green dot indicator)
  - Main heading (Tiempos Text, 40px desktop / 32px mobile): "I'm Hande, a multidisciplinary designer shaping products, brands and experiences."
  - Body text (Plus Jakarta Sans, 16px, `#4B4B51`): "I work across product, brand and visual design…"
- `<ProjectGrid />` with all 5 projects from `projects` array
- `<Footer />`

#### Project Detail Pages (`/projects/[slug]`)
All project detail pages share the same layout structure:
- `<Nav />`
- Back button ("← Work") that navigates to home page
- Hero image (full width, priority loading)
- Project metadata section:
  - Left side: Project title (Tiempos Text)
  - Right side: Short intro paragraph
- Content sections with full-bleed images and descriptive text blocks
- Swipe navigation between project detail pages (previous/next)
- Confetti trigger at scroll bottom
- `<Footer />`

Content for each project detail page should be extracted from the existing code:
- **Avocado** (`1220ProjectDetailAvocado.tsx`): 7 images, brand & web design case study
- **Glacis** (`1220ProjectDetailGlacis.tsx`): 6 images, brand design case study
- **Dashboard** (`1220ProjectDetailDashboard.tsx`): 4 images, procurement dashboard
- **New Request** (`NewRequestProject.tsx`): 2 images, request creation flow redesign

#### Marketing Design Page (`/marketing-design`)
- Same nav/footer pattern
- Hero: "Marketing Design Projects" heading + intro paragraph
- Project grid with marketing project cards
- Each card links to its detail page

#### Amazon K-Beauty Week Page (`/marketing-design/amazon-kbeauty`)
- Full case study page extracted from `1220MarketingDesign-54-1483.tsx`
- Back button → Marketing Design page

### Phase 6: Styling & Typography

#### Tailwind Config
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A0047',
        lavender: {
          light: '#F3F1FF',
          DEFAULT: '#CEC6FF',
        },
        body: '#4B4B51',
        heading: '#1C1C1F',
      },
      fontFamily: {
        serif: ['Tiempos Text', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
};
export default config;
```

#### Global CSS
```css
/* Prevent image downloads */
img {
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar (subtle) */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-thumb { background: #d1d1d6; border-radius: 3px; }
```

### Phase 7: SEO & Metadata

In `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: {
    default: 'Hande Kurtulus Yildiz — Multidisciplinary Designer',
    template: '%s | Hande Kurtulus Yildiz',
  },
  description: 'Portfolio of Hande Kurtulus Yildiz — a multidisciplinary designer shaping products, brands and experiences. Specializing in product design, brand identity, and visual design for SaaS and e-commerce.',
  keywords: ['portfolio', 'designer', 'product design', 'brand design', 'UX design', 'UI design'],
  authors: [{ name: 'Hande Kurtulus Yildiz' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hnd.design', // update with actual domain
    title: 'Hande Kurtulus Yildiz — Multidisciplinary Designer',
    description: 'Portfolio showcasing product, brand and visual design work.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
};
```

Add unique `metadata` exports to each project page with relevant titles and descriptions.

### Phase 8: Performance Targets

After the build, verify these performance goals:

- **Lighthouse Performance:** 95+
- **Lighthouse Accessibility:** 100
- **Lighthouse SEO:** 100
- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** < 0.1
- **Total page weight (landing):** < 1 MB (transferred)
- **First load JS:** < 100 KB
- **All images served as WebP or AVIF**
- **No layout shifts from images** (all images have explicit dimensions)

### Phase 9: Deployment Prep

1. Ensure `next.config.js` is production-ready.
2. Add a `vercel.json` if needed for redirects (old routes → new routes):
   ```json
   {
     "redirects": [
       { "source": "/avc", "destination": "/projects/avocado", "permanent": true },
       { "source": "/glc", "destination": "/projects/glacis", "permanent": true },
       { "source": "/dashboard", "destination": "/projects/dashboard", "permanent": true },
       { "source": "/newrequest", "destination": "/projects/new-request", "permanent": true },
       { "source": "/amazon-kbeauty-week", "destination": "/marketing-design/amazon-kbeauty", "permanent": true }
     ]
   }
   ```
3. Test the build locally: `npm run build && npm start`
4. Deploy to Vercel.

---

## Design Reference: Key Visual Details to Preserve

- **Logo "hnd.":** SVG wordmark. On hover: magnetic pull effect (logo moves 30% toward cursor position) + scale 1.15. Spring physics: damping 15, stiffness 150.
- **Nav underline animation:** Each nav link has a bottom border that expands from `width: 0` to `width: 100%` on hover (300ms ease-out).
- **Nav scroll state:** Background transitions to `bg-white/90 backdrop-blur-md shadow-sm` after 10px scroll.
- **Project card hover:** Image scales to 105% over 500ms ease-out.
- **Footer shape:** `rounded-[32px]` container, navy `#0A0047` background.
- **Footer logo:** Large "hnd." with linear gradient from `#CEC6FF` to `#F3F1FF`, at 72% opacity.
- **Footer CTA button:** Circular lavender `#F3F1FF` background, arrow-up-right icon, links to `mailto:handekyldz@gmail.com`.
- **Back button on detail pages:** Arrow left icon + "Work" text. On hover: subtle background slide-in from left, arrow nudges left by 4px. Spring animation.
- **Confetti on scroll-end:** Fires from both bottom corners, 6 colors, 0.5s duration, 3 particles per frame per side.
- **Page transitions:** Content fades in from below (20px) with 600ms duration, staggered per section.
- **Avatar tag:** Small avatar image with a green "Available" indicator dot next to it.

---

## Content: Exact Copy from the Original Site

### Hero Section
**Heading:** "I'm Hande, a multidisciplinary designer shaping products, brands and experiences."

**Body:** "I work across product, brand and visual design with a practical mindset. I collaborate with SaaS and e-commerce teams, often partnering with C-level stakeholders to shape both products and visual identities. I enjoy guiding projects from early ideas to launch and bringing clarity to every stage of the process."

### Marketing Design Page
**Heading:** "Marketing Design Projects"

**Body:** "I enjoy working across disciplines and exploring new design spaces. Collaborating on marketing projects allowed me to step outside product focused work and create visual experiences that connect brands with people across both physical and digital touchpoints."

### Footer CTA
"Let's build something good together!"

### Confidential Modal
**Title:** "Confidential Project"
**Body:** "This project is under NDA, get in touch with me to learn more."

---

## Important Notes for Claude Code

1. **Do NOT copy the Figma-generated code.** Rewrite everything from scratch with clean, semantic component names and proper React patterns.
2. **Every image must use `next/image`.** No raw `<img>` tags anywhere.
3. **No unused dependencies.** If you don't need a library, don't install it.
4. **Mobile-first responsive design.** Start with mobile layout, add breakpoints for `md:` and `lg:`.
5. **Accessible markup:** Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`), proper heading hierarchy, focus management, ARIA labels where needed.
6. **The original images are in `/src/assets/` of the old repo.** You'll need to convert them from PNG to WebP and rename them. Reference the old import statements to identify which image is used where.
7. **Keep animations subtle and performant.** Use `transform` and `opacity` only (GPU-composited properties). No layout-triggering animations.
8. **Test on mobile viewport (390px) and desktop (1220px+).** These were the explicit breakpoints in the original Figma design.
