# Architecture: Hotel Luxuria Grand

## Stack
| Layer | Technology | Role |
|-------|------------|------|
| Framework | Next.js 15 (App Router) | Core Application |
| Language | TypeScript | Type Safety |
| Styling | Tailwind CSS v4 | Design System |
| Animations | GSAP / Framer Motion | Luxury Visuals |
| Deployment | Vercel | Hosting & Edge |
| Analytics | Vercel Analytics | User Insights |

## System Boundaries
- `app/`: Routing and Layouts.
- `components/`: UI components (Atomic design).
- `public/`: Static assets (Optimized WebP images).
- `lib/`: Utility functions and global types.

## Storage Model
- **No Database**: The current version is a static/server-rendered frontend with no persistent user data storage.
- **WhatsApp**: All transactional state (bookings) is offloaded to WhatsApp.

## Auth Model
- **Public Access**: No authentication required for the current scope.

## Invariants (Rules)
1. **Premium Aesthetic**: All components must adhere to the "Onyx & Gold" palette.
2. **Performance First**: No blocking scripts; images must be optimized (WebP/AVIF).
3. **SEO Critical**: Every page must have a unique title, description, and canonical tag.
4. **Mobile Excellence**: All interactions must be touch-friendly and perfectly responsive.
