# Storyblok x Next.js Boilerplate

A modern Next.js boilerplate integrated with Storyblok CMS, featuring the Visual Editor, Tailwind CSS 4, and TypeScript.

## Prerequisites

- Node.js 18+
- A [Storyblok](https://www.storyblok.com/) account and space

## Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Configure environment variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN=your_preview_token_here
```

You can find your preview token in Storyblok under **Settings → Access Tokens**.

### 3. Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

## Visual Editor Setup

To enable live editing in Storyblok's Visual Editor:

1. Go to your Storyblok space → **Settings** → **Visual Editor**
2. Set the **Preview URL** to `https://localhost:3000/`
3. Run the dev server with HTTPS:

```bash
yarn dev --experimental-https
```

## Project Structure

```
app/
├── components/
│   ├── storyblok/       # Storyblok content components
│   │   ├── Feature.tsx
│   │   ├── Grid.tsx
│   │   ├── Page.tsx
│   │   └── Teaser.tsx
│   └── StoryblokProvider.tsx
├── lib/
│   └── storyblok.ts     # Storyblok SDK configuration
├── globals.css          # Tailwind CSS styles
├── layout.tsx           # Root layout
└── page.tsx             # Home page
```

## Adding New Components

1. Create a new component in `app/components/storyblok/`:

```tsx
import { storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

interface HeroBlok extends SbBlokData {
    title?: string;
    subtitle?: string;
}

export default function Hero({ blok }: { blok: HeroBlok }) {
    return (
        <section {...storyblokEditable(blok)}>
            <h1>{blok.title}</h1>
            <p>{blok.subtitle}</p>
        </section>
    );
}
```

2. Register it in `app/lib/storyblok.ts`:

```tsx
import Hero from "@components/storyblok/Hero";

const components = {
    // ...existing components
    hero: Hero,
};
```

3. Create the matching content type in Storyblok's Block Library.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **CMS**: [Storyblok](https://www.storyblok.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: TypeScript

## Useful Links

- [Storyblok React SDK](https://github.com/storyblok/storyblok-react)
- [Storyblok Next.js Guide](https://www.storyblok.com/docs/guide/integrations/nextjs)
- [Next.js Documentation](https://nextjs.org/docs)

## Deployment

Deploy to [Vercel](https://vercel.com/) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Remember to add your `NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN` environment variable in your deployment settings.
