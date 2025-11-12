# Clouds Above Earth — Next.js 14

A modern, high-performance, SEO-ready site for a lo-fi music brand. Built with Next.js 14 App Router, TypeScript, TailwindCSS, Framer Motion, shadcn/ui patterns, MDX-ready blog structure, Vercel OG images, and Vercel Analytics.

## Run locally

```bash
pnpm i # or npm i, yarn
pnpm dev
```

## Deploy

1. Push this repo to GitHub
2. Import to Vercel
3. Set Framework: Next.js, Root Directory: .
4. Build command: `next build` (default)
5. Add `NEXT_PUBLIC_SITE_URL` if you want canonical URLs

## Structure
- App Router in `src/app`
- Pages: Home, Playlists, Blog, Gallery, Contact
- API: `/api/og` for dynamic OG images
- SEO: metadata, sitemap, robots

## Content
- Replace images under `/public/covers`
- Swap playlist data in `src/app/playlists/page.tsx`
- Blog structure in `src/app/blog` (MDX-ready later)

## Styling & Theme
- Tailwind config includes brand palette and animations
- Dark by default, cosmic lo-fi aesthetic

## Notes
- This starter avoids external DB; connect CMS later if needed
- Forms use server actions (no API route needed)
