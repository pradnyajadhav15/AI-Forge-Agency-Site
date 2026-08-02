# AI Forge Agency

Premium AI + web creative agency site.
Next.js 15 (App Router) - TypeScript - Tailwind CSS - Framer Motion - Lucide React.

## Run locally

    npm install
    npm run dev

Open http://localhost:3000

## Where things live

- `lib/content.ts` - all copy and project data. Edit here, not in components.
- `lib/art.tsx`    - generative SVG plates. Replace with real screenshots when you have them.
- `app/globals.css`- design tokens and the editorial component classes.
- `components/`    - one file per section.

## Replacing a project plate with a real screenshot

In `components/SelectedWork.tsx`, swap the `<Plate />` for:

    <Image src="/work/wanderlust.jpg" alt="" fill className="object-cover" />

Drop the file in `public/work/`.

## Deploy

    git init
    git add .
    git commit -m "AI Forge Agency"

Push to GitHub, then import the repo on vercel.com. No environment variables needed.
