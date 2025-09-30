# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint (note: linting errors are ignored during builds per next.config.mjs)

## Architecture Overview

This is a Next.js 14 application for Lsl (a Kenya-based AI consulting and software development company) built with:

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **TypeScript**: Strict mode enabled
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Analytics**: Vercel Analytics integration

### Project Structure

```
/app/                    # Next.js App Router pages
  /[page]/              # Static pages (about, contact, services, etc.)
  /services/            # Service-specific pages with nested routes
  layout.tsx            # Root layout with metadata and analytics
  page.tsx              # Homepage with sectioned components

/components/            # React components
  /sections/            # Page section components (hero, proof, pillars, etc.)
  /ui/                  # shadcn/ui component library
  header.tsx            # Site navigation
  footer.tsx            # Site footer

/content/               # MDX content files
  /solutions/           # Solution-specific content (agritech.mdx, legal-tech.mdx)

/lib/                   # Utility functions
  utils.ts              # cn() utility for Tailwind class merging
  mdx.ts                # MDX processing utilities

/hooks/                 # Custom React hooks
/styles/                # Global styles
/public/                # Static assets
```

### Key Configuration

- **shadcn/ui**: Configured with "new-york" style, RSC support, CSS variables, and neutral base color
- **Path aliases**: `@/*` maps to root, with specific aliases for components, utils, ui, lib, and hooks
- **Build optimizations**: ESLint and TypeScript errors are ignored during builds
- **Images**: Unoptimized for static export compatibility

### Component Architecture

The homepage follows a sectioned layout pattern:
- `Header` - Navigation component
- `Hero` - Main landing section
- `ProofSection` - Social proof/testimonials
- `PillarsSection` - Core service pillars
- `HighlightsSection` - Key features/highlights
- `CaseTeaserSection` - Case study previews
- `Footer` - Site footer

### Styling System

- Uses Tailwind CSS with the shadcn/ui design system
- `cn()` utility function combines clsx and tailwind-merge for conditional classes
- CSS variables enabled for theming
- Inter font loaded via Next.js font optimization

### SEO & Metadata

Comprehensive SEO setup including:
- Open Graph tags for social sharing
- Twitter Cards
- Structured data (JSON-LD) for organization schema
- Robots.txt and sitemap generation