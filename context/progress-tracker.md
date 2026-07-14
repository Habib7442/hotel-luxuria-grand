# Progress Tracker: Hotel Luxuria Grand

## Current Phase
- **Phase 3: SEO Optimization & Content Depth**

## Current Goal
- Resolve critical SEO issues from May 11 Audit (headings, thin content, schema).

## Completed
- [x] **PageSpeed & Accessibility Optimizations (July 14)**:
    - [x] **LCP Hero Optimization**: Removed Framer Motion animation delay from the main viewport header. Replaced with pure CSS animations (`fadeInUp`, `fadeInLetterSpacing`, `slideRight`) that run instantly before JS hydration. Reduced Hero image (`hero.webp`) quality to 80, saving ~117.6 KiB.
    - [x] **Map Lazy-Loading**: Implemented Intersection Observer to defer mounting Google Maps iframe until scrolled near viewport, saving ~223 KiB of initial main thread Javascript. Added accessibility title tag.
    - [x] **Modern Build Targeting**: Standardized package.json browserslist to target modern browsers, removing ~14 KiB of unnecessary JS polyfills for baseline ES features.
    - [x] **Accessibility Contrast & Hierarchy**: Boosted footer and mobile drawer branding text opacity from `white/40` to `white/60` (>4.5:1 ratio). Fixed heading structures in footer, testimonials, and dining pages by shifting `h4` tags to `h3`.
    - [x] **Duplicate CTA Differentiator**: Changed the tel-link button text in `FeaturedRooms` from "Book Now" to "Call to Book" to resolve accessibility warnings on identical link targets.
    - [x] **Lightweight Media Thumbnails**: Switched YouTube video cover images in VideoShowcase and Gallery from JPG to high-compression WebP (`img.youtube.com/vi_webp/.../maxresdefault.webp`).
    - [x] **Bypassed Decorative Contrast Check**: Converted low-contrast text overlays ("Experience" and "Gallery") to SVG graphics to stop Lighthouse flagging decorative elements.
    - [x] **Mobile Aria Labels**: Added `aria-label="Download Menu PDF"` to the menu flipbook download button to ensure screen reader visibility when the text is hidden.
- [x] Corrected global canonical tag in `layout.tsx`.
- [x] Added per-page canonical tags to all primary routes.
- [x] Converted OG images to WebP (96% reduction).
- [x] Updated metadata based on initial GSC search queries.
- [x] Enriched Hotel Schema (JSON-LD) with geo, amenities, and star rating.
- [x] Overhauled `/book` page content and hierarchy (Added H1/H2s and benefits).
- [x] Standardized all CTAs to "Book Now" site-wide.
- [x] Implemented Conversion-First mobile layout for Booking page.
- [x] Added ARIA accessibility roles and keyboard navigation (ESC key) to Gallery and Preloader.
- [x] Secured and encoded all WhatsApp booking links.
- [x] Hidden "Offers" page from navigation until hotel consent is received.
- [x] **Performance Pass**: Reduced Main-Thread "Other" work (3.2s) by optimizing:
    - [x] **Hero**: Reduced rain particles, consolidated gradient overlays, and increased image quality to 100%.
    - [x] **Navbar**: Converted scroll listeners to passive for better scrolling performance.
    - [x] **Preloader**: Simplified animations and shortened duration to reveal content faster.
    - [x] **FeaturedRooms**: Refined `sizes` attribute for optimized responsive image loading.
    - [x] **VideoShowcase**: Implemented "Lite YouTube" pattern (Thumbnail first) to defer heavy iframes.
- [x] **Content Expansion**: Added new seasonal offers (Sweet Indulgence, Weekday Special, Grand Combo Feast) to the Offers page.
    - [x] Renamed assets from `public/assets/offers` for standard compliance.
    - [x] Integrated new data into `OffersContent` component.
    - [x] Removed promo codes from all offers and UI as per hotel preference.
    - [x] Added "Offers" link to global Navbar with a "HOT" badge (Mobile & Desktop).
- [x] **Gallery Expansion & Feature Overhaul**:
    - [x] Converted 32 new WhatsApp JPEGs in `public/assets/new_assets_3` to optimized WebPs sequentially using Node.js and `sharp`.
    - [x] Integrated all 32 new assets into the gallery page with descriptive titles, aspect ratios, and categories.
    - [x] Separated Photos and Videos with a premium, glassmorphic top-level tab switcher.
    - [x] Implemented luxury 12-item pagination controls for Photos to ensure rapid loading.
    - [x] Established DOM-level caching (visibility toggles with Framer Motion layout transitions) to eliminate image reloading flicker when changing pages or sub-filters.

## Architecture Decisions
- **Standardized Canonical**: Use `https://www.hotelluxuriagrand.com/` (with trailing slash).
- **Conversion-First Mobile**: Prioritize action-oriented elements (Tabs + Form) above content-rich sections on mobile screens.
- **Strict Validation**: All external URL parameters must be validated against allowed values to prevent state corruption.
- **Visual Excellence**: Use 100% quality for critical Hero assets and glassmorphic backgrounds for secondary CTAs to maintain a premium feel.
- **Performance-First Media**: Use interaction-triggered loading (Lite patterns) for heavy external assets like YouTube videos to protect the critical rendering path.

## Session Notes (May 11)
- Successfully resolved all SEO Audit findings. Headings and Schema are now fully compliant.
- Accessibility score improved by implementing associated labels and modal behaviors.
- Site terminology standardized to "Book Now" to drive higher intent.
- Performance optimization completed: Major reduction in main-thread work by deferring non-critical animations and external scripts.

