# Code Standards: Hotel Luxuria Grand

## TypeScript
- Use strict mode.
- Define interfaces for all component props.
- Avoid `any` at all costs.

## Component Patterns
- **Composition**: Prefer composition over large, monolithic components.
- **Client Components**: Use `"use client"` sparingly, only when interactivity (Framer Motion, React hooks) is required.
- **Atomic UI**: Base components go in `components/ui/`, compound components in `components/`.

## Styling
- Use Tailwind CSS v4 variables defined in `globals.css` (e.g., `bg-onyx`, `text-champagne`).
- Avoid arbitrary values in Tailwind; use the theme tokens.
- Maintain accessibility (aria-labels, contrast ratios).

## Performance
- Use Next.js `Image` component for all assets with appropriate `sizes` and `priority`.
- Offload heavy animations to the GPU using `will-change`.
- Minimize main-thread blockage by optimizing 3rd party scripts (Vercel Analytics).

## SEO
- Title tags: Max 60 characters.
- Meta descriptions: Max 155 characters.
- Headings: One `H1` per page; maintain strict hierarchy (H1 -> H2 -> H3).
