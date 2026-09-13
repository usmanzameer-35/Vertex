# Vertex Energy & Industrial Solutions

Premium corporate website for technical procurement, industrial supply and field support.

## Stack

- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS v4
- Lucide React

## Development

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
npm run start
```

The project is structured for a standard Vercel deployment. Set `NEXT_PUBLIC_SITE_URL` in Vercel to the verified production URL. Local development falls back to `http://localhost:3000`.

Copy `.env.example` to `.env.local` for local configuration. Do not commit `.env.local`.

## Content architecture

Verified company contact details, services, process and solution detail live in `data/site.ts`. Update that file when approved company information changes. The leadership page contains only attributed professional background and should be expanded only from verified source material.

## RFQ integration

`components/rfq-form.tsx` validates and prepares the enquiry payload. `app/api/rfq/route.ts` currently performs server-side required-field and email validation, then returns `delivery: not-configured`. Connect this route to an approved email, CRM or server-side storage provider before presenting a submitted-success state. Do not add credentials to the repository.

## SEO and assets

Page metadata is defined in route files. `app/sitemap.ts` and `app/robots.ts` use `NEXT_PUBLIC_SITE_URL`; they fall back to localhost locally and must receive the verified Vertex URL in production. Replace `public/hero-industrial.png` with approved Vertex photography when available. A company profile download should only be enabled after the approved PDF is added to `public/`.

## Future content

Projects, case studies, partners, certifications, vendor registrations and client portals are intentionally not published until verified information exists.