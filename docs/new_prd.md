# Hotel Luxuria Grand — Website Product Requirements Document

> **Project:** Direct-booking marketing site for Hotel Luxuria Grand, Silchar
> **Stack:** Next.js 14+ (App Router), TypeScript, Sanity CMS, Razorpay, eZee Booking Engine
> **Owner:** [Engineering Lead]
> **Status:** Draft v0.1 — for review
> **Last updated:** 2026-05-03

---

## 0. TL;DR

We are building a Next.js 14+ marketing-and-booking website for **Hotel Luxuria Grand**, an upscale property in Silchar, Assam. The site has two equally weighted goals:

1. **Premium brand showcase** — make a regional Northeast Indian hotel feel as polished as a Taj or Oberoi micro-site, so first-time visitors trust the property on sight.
2. **Direct-booking engine** — capture bookings on our own domain with our own GST receipts, instead of paying 15–22% commission to MakeMyTrip, Booking.com, and Goibibo.

Success means: **>30% of total bookings land directly on the website within 12 months of launch**, **Lighthouse 95+ across all categories**, and **a homepage that an outsider would assume belongs to a ₹15,000/night hotel** even though our top suite is ₹6,500.

---

## 1. Document Control

| Field | Value |
|---|---|
| Document version | 0.1 |
| Status | Draft (pre-review) |
| Project codename | `lg-web` |
| Target launch | T+12 weeks from kickoff |
| Stakeholders | Owner/Operator, Front-of-House Manager, Engineering Lead, Designer, Marketing |
| Repo | `gh:luxuriagrand/lg-web` (TBD) |
| Production URL | `https://hotelluxuriagrand.com` (TBD — see §22 Open Questions) |

---

## 2. Background & Strategic Context

### 2.1 The property
- Hotel Luxuria Grand is located on **Ghungoor Kuarpar Road, near Saint Capino School, Silchar, Assam**.
- Contact: **+91 91810 43994 / +91 91810 99018** · luxuriagrand2025@gmail.com
- 7 room categories: Standard → President Suite (₹2,200–₹6,500/night, before tax).
- Brand identity already defined: ornate gold "HG" crowned monogram on black, with ivory accents.

### 2.2 The market reality (research finding — important)
Per the **Assam Cabinet announcement (March 2026)**, **Polo Hotels Group** has been approved to build Silchar's **first** true 5-star hotel — a ₹103 crore, 100-room property with multiple specialty restaurants, resort-style pool, full-service spa, and modern banquets. **It is not yet built.**

**Therefore, today, no genuine 5-star exists in Silchar.** Hotel Luxuria Grand sits in the upscale/premium tier alongside:
- Hotel Cachar Club (4-star, est. 1897) — heritage incumbent
- Hotel Borail View, Orbit Hotel, Hotel Riya Palace, J C International — mid-tier
- Hotel Ellora, Hotel Nakshatra — budget/mid

### 2.3 Strategic implication
The brief — *"make a 5-star, million-dollar website"* — should be read as:
> **"Position Luxuria Grand as the most refined hospitality experience available in Silchar today, before the Polo Hotels 5-star opens in 2-3 years."**

We will **not** make literal "5-star" claims (those are regulated by Govt. of India / Ministry of Tourism star classification). We will use language like *"luxury,"* *"refined,"* *"premium,"* *"signature suite,"* and let the design carry the perception.

### 2.4 Why this site matters now
1. **OTA commission drag** — 15-22% of every MakeMyTrip / Goibibo booking is given away.
2. **Window of opportunity** — once Polo's 5-star opens, organic search and brand perception will tilt. Owning the digital narrative now compounds.
3. **Wedding/banquet market** — Silchar hosts major Bengali, Manipuri, and Assamese weddings. A premium events page can capture inquiries that voice/walk-in cannot scale.

---

## 3. Goals, Non-Goals, and Success Metrics

### 3.1 Goals (what we ARE doing)
| ID | Goal | Why |
|---|---|---|
| G1 | Build a direct-booking site on `hotelluxuriagrand.com` | Reduce OTA commission drag |
| G2 | Visual brand showcase that feels luxury-tier | Capture price-insensitive guests, weddings |
| G3 | Wedding & banquet lead capture | High-margin, high-volume in Silchar |
| G4 | Real-time room availability + payment | Conversion, GST compliance |
| G5 | SEO dominance for "hotels in Silchar," "luxury hotel Silchar," "Silchar wedding venue" | Organic acquisition |
| G6 | <2.0s LCP, 95+ Lighthouse on mobile 4G | Premium feel + SEO ranking |

### 3.2 Non-Goals (what we are NOT doing in v1)
- ❌ Native mobile apps (web-first; PWA optional in v2)
- ❌ Loyalty program backend (out of scope; gift-card capability in v2)
- ❌ Multi-property / multi-tenant (single property only)
- ❌ Multilingual at launch (English first; Bengali/Hindi in v1.1)
- ❌ Live chat agent (use WhatsApp Business deep link instead)
- ❌ User accounts / login (booking is guest-checkout style)

### 3.3 Success metrics (90-day post-launch)

| Metric | Target | How measured |
|---|---|---|
| Direct-booking share of total bookings | ≥ 30% | PMS reports cross-checked with Razorpay |
| Lighthouse Performance (mobile) | ≥ 95 | Vercel Analytics + manual run |
| LCP (mobile, 4G) | < 2.0 s | Real-user CrUX via GA4 |
| Wedding/banquet inquiry leads | ≥ 25 / month | CRM / Resend inbox |
| Organic search traffic to site | ≥ 8,000 sessions / month | GA4 |
| Booking funnel conversion (visit → confirmed) | ≥ 2.5% | PostHog funnel |

---

## 4. Audience & Personas

### 4.1 Primary persona: **The Visiting Executive — "Ananya"**
- 32, finance manager at a Kolkata bank, in Silchar for branch audit.
- Books on phone at 11pm. Won't trust a hotel that looks like a 2010 GeoCities page.
- Pays via UPI, expects GST invoice for reimbursement.
- Cares about: clean rooms, fast Wi-Fi, working A/C, breakfast, easy airport pickup.

### 4.2 Secondary persona: **The Wedding Planner Family — "Ranjan & Mou"**
- Father of bride; budget ₹15-25 lakh wedding for 400 guests.
- Inquiry happens via WhatsApp, then walk-in inspection, then negotiation.
- Cares about: banquet capacity, kitchen, accommodation block for guests, parking, decor flexibility.
- Site role: **lead-capture and credibility-establishing**, not transactional.

### 4.3 Tertiary persona: **The Northeast Tourist — "Riya"**
- 28, Bangalore-based traveller, doing a Cachar/Haflong/Mizoram trip.
- Books 3-day stays, wants character + amenities + Instagrammable spaces.
- Books via OTA today; we want her to compare prices and book direct.

### 4.4 Anti-persona (do NOT design for)
- Backpackers seeking ₹500/night dorms — not our segment.

---

## 5. Competitive Landscape

### 5.1 Direct (Silchar)
| Hotel | Tier | Strengths | Their site |
|---|---|---|---|
| Hotel Cachar Club | 4★ deluxe (since 1897) | Heritage, location, polo bar | `hotelcacharclub.com` — dated |
| Orbit Hotel | 3★+ | Conferences | Hotelsgds template — generic |
| Hotel Borail View | 3★ | Location | OTA-only |
| Polo Hotels (incoming) | True 5★ (2027-2028) | Group, scale, capital | Group site — corporate |

### 5.2 Aspirational (regional / global)
| Brand | What to learn |
|---|---|
| **Taj Hotels** (`tajhotels.com`) | Editorial photography, restraint, color discipline |
| **The Oberoi** (`oberoihotels.com`) | Refined typography, slow-paced motion |
| **ITC Hotels** (`itchotels.com`) | Storytelling, dining-as-hero |
| **Aman Resorts** (`aman.com`) | Reductive design, image-first, generous whitespace |
| **The Lodhi, Delhi** (`thelodhi.com`) | Modern Indian luxury done well |
| **Soho House** (`sohohouse.com`) | Members-club intimacy, photography |

### 5.3 What we'll steal (gracefully)
- **From Aman:** silence and whitespace as luxury signals
- **From Taj:** confident typography and warm narrative voice
- **From The Lodhi:** modernist geometry with Indian warmth
- **From Soho House:** personality in copy, no corporate-speak

---

## 6. Brand & Visual Design System

### 6.1 Brand essence
**"Considered luxury, locally rooted."** Not flashy gold-everything Bollywood luxury — disciplined, editorial, warm. Think *Conde Nast Traveller* photo essay, not banquet-hall flyer.

### 6.2 Color palette

```
PRIMARY
  --onyx          #0B0B0C   (near-black, deep with subtle warmth)
  --ivory         #F5F1E8   (off-white with cream warmth)
  --champagne     #C9A96E   (refined gold — NOT yellow)
  --brass         #8C6F3F   (depth gold for hover/borders)

SECONDARY
  --aubergine     #2A1B2D   (deep purple-brown, used sparingly for surfaces)
  --terracotta    #B5573A   (warm accent for CTAs in light mode)

NEUTRAL SCALE
  --slate-900     #1A1A1B
  --slate-700     #3A3A3D
  --slate-500     #6B6B70
  --slate-300     #B5B5BA
  --slate-100     #ECECED
  --slate-50      #F8F8F8

SEMANTIC
  --success       #4A7C59
  --warning       #C8902A
  --error         #B0413E
  --info          #4A6FA5
```

**Use rules:**
- **Onyx + Ivory** are the two foundation colors — every page is dominated by these.
- **Champagne** is reserved for: primary CTAs, brand mark, accent rules, key numerals (rates).
- **Brass** is the hover/active state of champagne and used for fine borders.
- **Aubergine** appears at most on 1 section per page (e.g., dining feature).
- **Terracotta** reserved for booking CTAs in light mode where champagne is too low contrast.
- **Avoid pure black `#000000`** — too harsh for warm-luxury. Always use `--onyx`.
- **Avoid yellow `#FFD700`-style gold** — looks cheap. Use champagne/brass.

### 6.3 Typography

```
DISPLAY (h1, hero, large quotes)
  Font:   Cormorant Garamond (Google Fonts)
  Weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
  Style:  Italic available — use for editorial flourishes
  Why:    Refined, literary, free of generic-luxury baggage. Beautiful at large sizes.

HEADLINE / SUBHEAD (h2, h3)
  Font:   Fraunces (variable, Google Fonts)
  Axes:   wght 100-900, opsz 9-144, SOFT 0-100
  Why:    Modern serif with personality and optical sizing — feels fresh, not stuffy.

BODY (paragraphs, lists, navigation)
  Font:   Inter (variable, Google Fonts)
  Why:    Best-in-class screen rendering, tabular numerals for rates, strong i18n.

UI / NUMBERS / FORMS
  Font:   Inter, with `font-feature-settings: "tnum", "case"`

OPTIONAL (i18n v1.1)
  Bengali/Assamese: Hind Siliguri
  Hindi: Hind
```

**Type scale (rem, root = 16px):**
```
Display XL:  6.0    (96px)   — hero only
Display L:   4.5    (72px)
Display M:   3.5    (56px)
Display S:   2.75   (44px)
H1:          2.25   (36px)
H2:          1.75   (28px)
H3:          1.375  (22px)
H4:          1.125  (18px)
Body L:      1.125  (18px)   — long-form
Body:        1.0    (16px)
Body S:      0.875  (14px)
Caption:     0.75   (12px)
```

**Line-heights:** Display 1.05, Headlines 1.2, Body 1.6, UI 1.4.
**Tracking:** Display -0.02em, Headlines -0.01em, Body 0, Eyebrow/labels +0.08em uppercase.

### 6.4 Spacing & layout

8-pt baseline grid. Container max-widths:
- Editorial: `max-w-[68ch]` (~700px)
- Default: `max-w-[1280px]`
- Wide image: `max-w-[1440px]`
- Full-bleed: 100vw

Section padding: `py-24 md:py-32 lg:py-40` for hero; `py-20 md:py-24` for content sections. **Generosity is the luxury signal.**

### 6.5 Motion language

- **Slow and deliberate.** Default duration `600-800ms`, easing `cubic-bezier(0.16, 1, 0.3, 1)` (out-quint).
- Page transitions: 400ms cross-fade with subtle 8px upward translate on enter.
- Image reveals: parallax `0.2` factor + `clip-path` reveal, never bouncy.
- Hover states: 250ms ease-out, scale max 1.02, no rotation.
- **Respect `prefers-reduced-motion`** — disable all transforms, keep only opacity transitions.
- Library: **Framer Motion** with shared layout transitions for room cards.

### 6.6 Photography direction

This is **the single biggest visual investment**. Without genuine photography, everything else fails.

**Required shoot list (commission a hospitality photographer; budget ₹80k-1.5L):**
1. Hero: **golden-hour exterior** of the entrance with HG monogram visible (1×, used everywhere)
2. Each room category × 3 angles: wide, bed-detail, bathroom (7 categories × 3 = 21 frames)
3. Lobby × 2 (day, evening with lighting)
4. Banquet hall: empty wide, set-up wedding, set-up corporate (3 frames)
5. Restaurant/dining × 4 (wide, table-top, signature dish, chef portrait)
6. Lifestyle: 3 staged "guest moments" — a couple at breakfast, a family in the suite, a businessperson on the phone with a laptop (NOT stock-photo style)
7. Detail textures × 6 — fabric, brass fixtures, monogram on towel, key card, signature dish, view from balcony

**Treatment:** documentary editorial — natural light where possible, warm color grade (S-curve, +5 vibrance, slight magenta lift in shadows). **No flash. No HDR. No Instagram filters.**

**Aspect ratios in code:** 16:9 (hero), 4:5 (vertical room features), 3:2 (gallery default), 1:1 (Instagram crops).

### 6.7 Iconography

- Use **Lucide React** (consistent with shadcn) — line icons, 1.5px stroke, 24px default.
- Custom SVGs only for: HG monogram, amenity icons (slipper, towel, butler bell, etc. — commission a small pack).
- Never mix line + filled icons in the same view.

### 6.8 Imagery do's and don'ts

**DON'T:**
- Stock photos of generic hotel beds
- AI-generated interiors (a guest will spot it instantly and trust collapses)
- Heavy vignette or "moody" presets
- Flash-bounced photos taken by the hotel staff on a phone

**DO:**
- Hire a local hospitality photographer for one full-day shoot
- Use real staff in lifestyle shots (with releases)
- Re-shoot every 18 months as decor evolves

---

## 7. Information Architecture

### 7.1 Sitemap

```
/
├── /rooms                          (index of all 7 room types)
│   ├── /rooms/standard
│   ├── /rooms/deluxe
│   ├── /rooms/super-deluxe
│   ├── /rooms/executive
│   ├── /rooms/suite
│   ├── /rooms/executive-suite
│   └── /rooms/president-suite
├── /dining                         (restaurant + room service)
├── /weddings-and-events            (banquet, corporate, social)
├── /gallery                        (curated albums)
├── /offers                         (seasonal packages)
├── /journal                        (MDX-powered blog: travel guides, hotel stories)
│   └── /journal/[slug]
├── /about                          (story, leadership, address)
├── /contact                        (form, map, phones, WhatsApp)
├── /book                           (booking flow)
│   ├── /book/select                (room + dates + guests)
│   ├── /book/guest-details
│   ├── /book/payment
│   └── /book/confirmation
└── /legal
    ├── /legal/privacy
    ├── /legal/terms
    ├── /legal/cancellation-policy
    └── /legal/refund-policy
```

### 7.2 Primary navigation (sticky, transparent over hero, solid on scroll)

```
[HG monogram]    Rooms · Dining · Weddings · Gallery · Journal · Contact    [Book Now ›]
```

Mobile: hamburger → full-screen overlay nav with the same items, plus a prominent phone CTA.

### 7.3 Footer (4 columns + bottom strip)

| Stay | Experience | Connect | Property |
|---|---|---|---|
| Rooms & Suites | Dining | +91 91810 43994 | Ghungoor Kuarpar Road |
| Offers | Weddings & Events | +91 91810 99018 | Near Saint Capino School |
| Book Now | Gallery | WhatsApp · Email | Silchar, Assam, India |
| Group bookings | Journal | Instagram · Facebook | Get directions |

Bottom: `© 2026 Hotel Luxuria Grand · Privacy · Terms · Cancellation`

### 7.4 What's intentionally NOT in nav
- "Spa" / "Pool" — only add if those amenities actually exist (open question §22).
- "Membership" / "Loyalty" — v2.
- "Login" — guest-checkout only.

---

## 8. Page Specifications

### 8.1 `/` Home

**Goal:** In 5 seconds, the visitor knows this is a refined hotel in Silchar. In 30 seconds, they've started a booking or saved an inquiry.

**Sections (top-to-bottom):**

1. **Hero** — full-bleed exterior photograph at golden hour, HG monogram top-left, transparent nav. Headline in Cormorant Italic: *"A new chapter in Silchar's luxury story."* Sub: *"Seven categories of refined accommodation on Ghungoor Kuarpar Road, in the heart of Cachar."* Primary CTA: `Reserve your stay`. Secondary: `Discover the property`. **Booking widget** (room dates + guests) docks at bottom of hero on desktop.

2. **Trust strip (3 plinths, no bullets)** — small champagne text labels + numerals:
   `Established 2025 · 7 room categories · Direct booking lowest price`

3. **Room teaser** — three vertical 4:5 images side-by-side: Suite, Executive Suite, President Suite. Each with name, starting rate, "Explore →".

4. **The story** — editorial paragraph about the property, paired with a tall portrait image. Cormorant display headline.

5. **Dining** — full-width 16:9 hero of signature dish + restaurant interior. Brief copy. CTA `View menu` or `Reserve a table`.

6. **Weddings & events** — secondary hero, wedding-set banquet image, copy emphasizing scale + service. CTA `Plan your celebration`.

7. **Gallery preview** — 6-image masonry, CTA `View full gallery`.

8. **Map + contact strip** — Mapbox embed centered on Ghungoor Kuarpar Road, address card to the right with phone, email, hours.

9. **Footer.**

**Notable interactions:**
- Booking widget validates dates and persists to `/book/select` via URL params.
- Hero photograph subtle Ken Burns zoom (0.5% over 12s) — desktop only, motion-reduced.

### 8.2 `/rooms` Index

Filterable grid (by category, by occupancy). Each card: 4:5 image, name, brief, starting rate, sleeps badge, "View details →". Sort: by price asc/desc.

### 8.3 `/rooms/[slug]` Detail

- Hero: 16:9 wide image of the room
- Below-the-fold: 3-image gallery (carousel on mobile)
- Description (~150 words editorial)
- Features grid: bed type, view, max occupancy, sq ft, in-room amenities (with icons)
- **Sticky right rail (desktop) / sticky bottom bar (mobile):** rate card with Single/Double tabs, "Reserve" CTA — pre-fills `/book/select` with this room.
- Related rooms (3) at bottom

### 8.4 `/dining`
Editorial — restaurant intro, signature dishes (3-4 with photography), opening hours, room service note, CTA `Call to reserve a table`.

### 8.5 `/weddings-and-events`
- Hero
- Capacity table (banquet hall: seated, theatre, cocktail counts — TBD by ops)
- 3-step inquiry promise: *"Tell us about your event → site visit → custom proposal"*
- Inquiry form (date, guest count, type, budget, message) → Resend → ops inbox + WhatsApp deep link
- Recent celebrations gallery (with permission)

### 8.6 `/gallery`
Albums: Property, Rooms, Dining, Weddings, Lifestyle. Lightbox on click (Yet Another React Lightbox). Lazy-load with `next/image`.

### 8.7 `/journal`
MDX posts. Categories: *Stay*, *Silchar*, *Cuisine*, *Stories*. SEO play — capture searches like "things to do in Silchar," "Kachakanti temple visit guide," "Barak Valley travel."

### 8.8 `/about`
Brand story (~300 words), founder portrait, address, philosophy quote, monogram detail shot.

### 8.9 `/contact`
Form (name, email, phone, message), WhatsApp deep link, phone CTAs, Mapbox map, hours.

### 8.10 Booking flow `/book/*`

**`/book/select`**
- Room cards with live availability badge ("3 rooms left at this rate"), Single/Double rate toggle, date picker (react-day-picker)
- Cart sidebar — selected rooms, dates, guest count, subtotal, GST estimate, total

**`/book/guest-details`**
- Guest 1 details (name, email, phone, ID type, ID number — for hotel registry)
- Special requests textarea
- Estimated arrival time

**`/book/payment`**
- Razorpay checkout (UPI / cards / netbanking / wallets)
- GST details optional (for corporate stays)
- Cancellation policy summary in plain English
- T&Cs checkbox

**`/book/confirmation`**
- Booking ID
- All details
- "Add to calendar" (.ics download)
- WhatsApp deep link with pre-filled message
- Email confirmation auto-sent via Resend

---

## 9. Content Model & CMS Schema (Sanity)

```ts
// /sanity/schemas/room.ts
export const room = defineType({
  name: 'room',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', validation: r => r.required() },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'category', type: 'string', options: {
        list: ['Standard','Deluxe','Super Deluxe','Executive','Suite','Executive Suite','President Suite']
    }},
    { name: 'rateSingle', type: 'number', validation: r => r.required().min(0) },
    { name: 'rateDouble', type: 'number', validation: r => r.required().min(0) },
    { name: 'extraPersonRate', type: 'number', initialValue: 500 },
    { name: 'sqft', type: 'number' },
    { name: 'maxOccupancy', type: 'number' },
    { name: 'bedConfig', type: 'string' },
    { name: 'view', type: 'string' },
    { name: 'shortDescription', type: 'text', rows: 3 },
    { name: 'longDescription', type: 'array', of: [{ type: 'block' }] },
    { name: 'amenities', type: 'array', of: [{ type: 'reference', to: [{ type: 'amenity' }] }] },
    { name: 'heroImage', type: 'image', options: { hotspot: true } },
    { name: 'gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'order', type: 'number' },
    { name: 'isActive', type: 'boolean', initialValue: true },
    { name: 'seo', type: 'seoFields' },
  ],
})

// other documents:
// - amenity {name, icon, description}
// - diningVenue {name, type, hours, signatureDishes[], gallery[]}
// - event {title, type, capacity, gallery[], testimonial}
// - galleryAlbum {title, slug, category, images[]}
// - journalPost {title, slug, author, category, body (Portable Text), heroImage, publishedAt}
// - testimonial {quote, author, source, rating, date}
// - offer {title, validFrom, validTo, includedRooms[], discountPct, image, terms}
// - page {slug, title, hero, sections[ heroBlock | imageTextBlock | galleryBlock | ctaBlock ]}
// - siteSettings {brand, contact, social, openGraph, schemaOrg, navigation, footer}
```

**Why Sanity:**
- Free tier covers our content volume (3 users, 10k docs, 1M API CDN req)
- Real-time collab editing (multiple admin staff)
- Best-in-class image pipeline (`@sanity/image-url`, hotspot crops, AVIF/WebP)
- GROQ queries are succinct vs. Contentful GraphQL boilerplate
- Trade-off vs. **Payload CMS**: Payload is self-hosted (more control, more ops); Sanity hosted (faster start, recurring cost only at scale)

---

## 10. Technical Architecture

### 10.1 Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | RSC, streaming, edge, partial prerendering |
| Language | **TypeScript** (strict mode) | Type safety on content shapes |
| Styling | **Tailwind CSS v4 + shadcn/ui** | Token-driven, fast, accessible primitives |
| Animation | **Framer Motion** | Best DX for declarative motion |
| Forms | **react-hook-form + Zod** | Performant, validated, typed |
| CMS | **Sanity v3** | See §9 |
| Image | `next/image` + Sanity image pipeline | Auto AVIF/WebP, blur placeholders |
| Payment | **Razorpay** | India-default, GST receipts, UPI |
| Booking engine | **eZee Absolute / Reservation** | Best regional India PMS, OTA channel mgr |
| Email | **Resend** | Clean API, generous free tier |
| Maps | **Mapbox GL JS** | Better aesthetic control, custom style |
| Search (journal/site) | **Algolia DocSearch (free tier)** | Optional v1.1 |
| Date picker | **react-day-picker** | Accessible, themable |
| Lightbox | **yet-another-react-lightbox** | Accessible, works with Next images |
| MDX | `@next/mdx` + `@vercel/mdx-remote` | For journal |
| Analytics | **GA4 + PostHog + Vercel Analytics** | Funnels + RUM + product |
| Errors | **Sentry** | Frontend + API routes |
| Hosting | **Vercel** | Edge runtime, ISR, preview branches |

### 10.2 Rendering strategy

| Route | Mode | Why |
|---|---|---|
| `/` | ISR (revalidate 3600s) | Hot path, content changes monthly |
| `/rooms`, `/rooms/[slug]` | ISR (revalidate 3600s, on-demand on Sanity webhook) | Stable, instant on edit |
| `/dining`, `/about`, `/weddings-and-events` | ISR | Stable content |
| `/gallery` | ISR | Stable; revalidate on album add |
| `/journal/[slug]` | SSG with on-demand revalidation | SEO content |
| `/book/*` | Dynamic (Node runtime) | Real-time inventory + payments |
| `/api/*` | Edge or Node depending on route | Booking → Node; webhooks → Edge |

### 10.3 Folder structure

```
/app
  /(marketing)
    /page.tsx                  # Home
    /rooms/page.tsx
    /rooms/[slug]/page.tsx
    /dining/page.tsx
    /weddings-and-events/page.tsx
    /gallery/page.tsx
    /journal/page.tsx
    /journal/[slug]/page.tsx
    /about/page.tsx
    /contact/page.tsx
    /offers/page.tsx
    /legal/[slug]/page.tsx
    /layout.tsx                # marketing layout w/ nav + footer
  /(booking)
    /book/select/page.tsx
    /book/guest-details/page.tsx
    /book/payment/page.tsx
    /book/confirmation/page.tsx
    /layout.tsx                # minimal booking layout
  /api
    /availability/route.ts     # GET ?from&to&rooms
    /book/route.ts             # POST create booking
    /razorpay/webhook/route.ts # POST verify
    /contact/route.ts          # POST contact form
    /events-inquiry/route.ts   # POST events inquiry
    /sanity/webhook/route.ts   # POST revalidatePath
  /sitemap.ts
  /robots.ts
  /opengraph-image.tsx
/components
  /ui                          # shadcn primitives
  /brand                       # logo, monogram
  /sections                    # hero, room-card, story-block, etc.
  /booking                     # widget, summary, payment
/lib
  /sanity                      # client, queries, image
  /razorpay                    # checkout, verify
  /ezee                        # booking engine adapter
  /seo                         # schema, og helpers
  /analytics                   # ga, posthog, events
/sanity                        # studio (embed at /studio)
/styles
  /globals.css                 # tokens
/public                        # static assets, OG images
```

### 10.4 Environment variables

```
# CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
SANITY_WEBHOOK_SECRET=

# Payments
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

# Booking engine (eZee)
EZEE_HOTEL_CODE=
EZEE_AUTH_CODE=
EZEE_API_BASE=https://live.ipms247.com/booking/reservation_api/...

# Email
RESEND_API_KEY=
TRANSACTIONAL_FROM=reservations@hotelluxuriagrand.com
OPS_INBOX=ops@hotelluxuriagrand.com

# Maps
NEXT_PUBLIC_MAPBOX_TOKEN=

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Errors
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
```

Stored in Vercel project (production / preview / development scopes).

---

## 11. Booking Engine Integration

### 11.1 Build vs. integrate?

**Decision: Integrate, do not build.**

Building a real-time inventory engine from scratch means writing PMS sync, channel management, overbooking guards, OTA reconciliation — months of work + ongoing ops. We integrate with a hosted PMS that already does this.

### 11.2 Vendor evaluation

| Vendor | Pros | Cons | Verdict |
|---|---|---|---|
| **eZee Absolute** | India-strong, GST built in, cheap (~₹3k/mo), API + iframe, channel mgr | UI looks dated; some legacy SOAP endpoints | **Recommended v1** |
| STAAH | Modern UI, fast | More expensive (~₹5-7k/mo) | Strong v1 alternative |
| Cloudbeds | Best DX, modern API | Pricey for this scale | v2 if international |
| Hotelogix | India-friendly | Less mature API | Backup |

### 11.3 Integration pattern

Two layers:

**Layer A — iframe fallback (week 1):**
- eZee provides a hosted booking widget. Embed on `/book` while we build the custom flow.
- Lets the hotel start taking bookings on Day 1 of launch.

**Layer B — custom flow with API (weeks 2-6):**
- `/api/availability` proxies to eZee `getRateAndInventory`
- `/api/book` proxies to eZee `createReservation` with our own payment hold via Razorpay
- Razorpay webhook → confirm reservation in eZee + send Resend confirmation email
- Hourly cron job reconciles any drift between Razorpay payments and eZee reservations
- Failed payment → release hold automatically

### 11.4 Failure modes & guards

- **Inventory race:** lock on selection (5 min hold via session ID), release on timeout
- **Webhook missing:** poll eZee for booking status if Razorpay confirmed but eZee didn't echo within 60s
- **Double-charge:** idempotency key per `bookingId` on `/api/book`
- **PMS down:** fallback message → lead capture form → ops calls back

---

## 12. Payments (Razorpay)

- **Checkout JS** (not Standard) for in-page modal — better UX
- Methods enabled: UPI, all cards (Visa/Master/Amex/Rupay), netbanking, wallets, EMI
- **GST receipts:** generated server-side after webhook confirmation, PDF via `pdf-lib`, linked in confirmation email
- Refunds: handled in Razorpay dashboard manually for v1; programmatic refund API in v1.1
- 3DS / OTP: handled by Razorpay
- **PCI scope:** zero — we never see card details

---

## 13. SEO Strategy

### 13.1 Schema.org JSON-LD (server-side, in `<head>`)

- `Hotel` on `/` and all room pages — with `priceRange`, `starRating` (set to **4** honestly, not 5), `address`, `geo`, `telephone`, `image`, `amenityFeature`, `numberOfRooms`
- `Room` on each `/rooms/[slug]` — with `bed`, `occupancy`, `floorSize`, `offers` (with `price`)
- `LocalBusiness` for footer
- `Article` on each `/journal/[slug]`
- `BreadcrumbList` on all detail pages
- `FAQPage` on `/contact` and offers pages
- `Event` on banquet/wedding pages

### 13.2 Meta strategy

- Title pattern: `{Page Title} — Hotel Luxuria Grand, Silchar`
- Description: 140-155 chars, action-oriented
- OG image: dynamically generated per page via `app/opengraph-image.tsx` (Edge runtime)
- Twitter card: `summary_large_image`
- Canonical URLs on every page

### 13.3 Local SEO (highest leverage)

- **Google Business Profile** — claim and optimize: 25+ photos, weekly posts, Q&A, services list, menu
- NAP consistency (Name/Address/Phone) across: GBP, JustDial, Yellow Pages, Triposo, IndiaOnline, MakeMyTrip, Booking.com, Goibibo
- **Hyper-local pages:** journal posts targeting `"hotels in Silchar"`, `"hotels near NIT Silchar"`, `"hotels near Silchar railway station"`, `"hotels near Silchar airport"`, `"wedding venue Silchar"`, `"banquet hall Silchar"`
- Inbound links from: NIT Silchar guest stay page, Cachar tourism, local press

### 13.4 Sitemap & robots

- `app/sitemap.ts` generated from Sanity content
- `app/robots.ts` allows all except `/api/*` and `/studio/*`
- Submit to Google Search Console + Bing Webmaster

### 13.5 Content cadence (post-launch)

- 2 journal posts/month
- Update GBP weekly
- Refresh hero photo seasonally
- Add seasonal offers monthly

---

## 14. Performance Budgets

### 14.1 Core Web Vitals targets (mobile, slow 4G)

| Metric | Target | Hard cap |
|---|---|---|
| LCP | < 2.0 s | 2.5 s |
| INP | < 150 ms | 200 ms |
| CLS | < 0.05 | 0.1 |
| FCP | < 1.5 s | 2.0 s |
| TTFB | < 600 ms | 800 ms |

### 14.2 Bundle budgets

| Bundle | Target gzipped |
|---|---|
| Initial JS (route segment + shared) | ≤ 180 KB |
| Per-route JS (additional) | ≤ 50 KB |
| Initial CSS | ≤ 30 KB |
| Hero image (LCP) | ≤ 120 KB at viewport size |

### 14.3 Image strategy

- All images via `next/image` with Sanity URL transformer
- Format priority: AVIF → WebP → JPEG fallback
- `sizes` attribute set per breakpoint
- LQIP blur placeholders from Sanity asset metadata
- Lazy-load below-the-fold; `priority` only on hero
- Hero LCP image preloaded via `<link rel="preload" as="image">`

### 14.4 Performance enforcement

- Lighthouse CI in GitHub Actions on every PR (fail build if score drops below 90 mobile)
- `next-bundle-analyzer` weekly review
- Vercel Speed Insights for real-user monitoring

---

## 15. Analytics & Observability

### 15.1 Tools

- **GA4** — funnel reporting, demographics, search terms
- **PostHog** — product analytics, session replay (sampled 10%), feature flags
- **Vercel Analytics + Speed Insights** — RUM Core Web Vitals
- **Sentry** — error tracking on client + API routes

### 15.2 Event taxonomy (PostHog + GA4)

```
page_view (auto)
hero_cta_clicked     {cta: 'reserve' | 'discover'}
room_card_clicked    {room: 'suite' | ...}
room_detail_viewed   {room: '...', source: 'index' | 'home_teaser' | 'related'}
booking_started      {room: '...', from: ISO, to: ISO}
booking_dates_changed
booking_guest_details_completed
booking_payment_initiated  {amount: number, room: string}
booking_payment_succeeded  {amount: number, room: string, bookingId: string}
booking_payment_failed     {code: string, reason: string}
contact_form_submitted     {topic: string}
events_inquiry_submitted   {guests: number, type: string}
whatsapp_clicked           {source: 'header'|'footer'|'contact'|'confirmation'}
phone_clicked              {source: '...'}
gallery_image_opened       {album: string, index: number}
journal_post_read          {slug: string, scroll_depth_pct: number}
```

### 15.3 Server-side tracking
- Razorpay webhook → server-side `booking_payment_succeeded` event (eliminates ad-blocker drift)
- Conversions API to GA4 via Measurement Protocol

### 15.4 Dashboards
- "Acquisition" — sources, search terms, organic vs. paid
- "Conversion" — booking funnel from `booking_started` to `booking_payment_succeeded`
- "Quality" — Core Web Vitals by route
- "Errors" — Sentry top issues

---

## 16. Accessibility (WCAG 2.2 AA)

- Color contrast: all text ≥ 4.5:1 (validate champagne/ivory pairs in tooling)
- Visible focus rings on all interactive elements (`outline: 2px solid var(--champagne)`)
- Skip-to-content link
- Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`)
- Alt text on every image (Sanity field required)
- Form labels associated, errors announced
- Keyboard navigable end-to-end (test booking flow without mouse)
- Lightbox/modals trap focus, restore on close
- `prefers-reduced-motion` removes parallax + Ken Burns + page-transitions
- Tested with: axe DevTools, VoiceOver, NVDA, keyboard-only

---

## 17. Internationalization (Phased)

| Phase | Languages | Approach |
|---|---|---|
| v1 | English (en-IN) only | — |
| v1.1 | + Hindi (hi-IN) | next-intl, route-prefix `/hi` |
| v1.2 | + Bengali (bn-IN) | route-prefix `/bn` (Silchar is Bengali-majority) |
| v2 | + Assamese (as-IN) | optional |

Sanity localized fields for all marketing copy; rate card / booking flow English-only at first.

---

## 18. DevOps, CI/CD, Deployment

### 18.1 Hosting

- **Vercel** Pro plan (~$20/mo)
- Edge regions: Mumbai (`bom1`) primary; Frankfurt (`fra1`) secondary
- Production branch: `main`
- Preview branches per PR with branch URL

### 18.2 CI (GitHub Actions on every PR)

```
lint        → eslint, prettier check
typecheck   → tsc --noEmit
test:unit   → vitest (utility functions, schemas)
test:e2e    → playwright (booking smoke test against preview URL)
lhci        → lighthouse-ci (mobile, fail < 90)
build       → next build
```

### 18.3 Branch model

`main` (prod) ← PR ← feature branches. Required: 1 review, all checks green, no merge to main outside PR.

### 18.4 Secrets & rotation

- Stored in Vercel Environment Variables (production / preview / development scopes)
- Razorpay + Sanity tokens rotated quarterly
- Webhook secrets rotated on any incident

### 18.5 Rollback

- Vercel one-click rollback to previous deployment
- Feature flags via PostHog for risky changes (e.g., new booking flow)

### 18.6 Monitoring & alerting

- Sentry: P1 alert if error rate > 1% over 5 min on `/book/*`
- Vercel: deployment failure → Slack/Email
- Razorpay webhook failures → Sentry breadcrumb + PagerDuty (optional v2)
- Daily: Lighthouse CI summary in Slack

---

## 19. Security & Compliance

- HTTPS only; HSTS header; secure cookies
- CSP header (no `unsafe-inline`; scripts via nonce)
- Rate-limit on `/api/contact`, `/api/events-inquiry`, `/api/book` (Vercel firewall + Upstash Redis)
- Razorpay webhook signature verification mandatory
- Sanity webhook signature verification mandatory
- **DPDP Act 2023 (India)** compliance: clear consent for cookies, data deletion endpoint, privacy notice in plain English
- **GST compliance:** invoices include GSTIN, state code, breakup
- No PCI scope (Razorpay-hosted)
- Backups: Sanity has automatic versioned content; export weekly to S3 as belt-and-suspenders
- Honeypot fields + reCAPTCHA v3 on public forms

---

## 20. Roadmap & Milestones

### v1.0 — Launch (T+12 weeks)
- All 10 marketing pages live
- All 7 room pages with photography
- Booking engine integrated (eZee + Razorpay)
- SEO + analytics + Sentry live
- GBP claimed and optimized

### v1.1 — Polish (T+16 weeks)
- Hindi locale
- Programmatic refunds
- Algolia search
- Journal: 6 launch posts
- A/B test on hero CTA wording

### v1.2 — Reach (T+22 weeks)
- Bengali locale
- WhatsApp Business API integration (auto inquiry replies)
- Loyalty/gift-card mini-feature

### v2.0 — Scale (T+9 months)
- PWA (offline gallery, install)
- Live chat (Crisp / Intercom)
- Membership / direct-booking incentive program
- Multi-property support if ownership expands

---

## 21. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Photography budget not approved | M | **Critical** — kills the visual claim | Treat as hard launch dependency; secure ₹1L budget early |
| Polo Hotels' 5-star marketing | H (in 18-24 mo) | M | Build brand equity now; entrench SEO |
| eZee API stability | M | H | iframe fallback; weekly reconciliation cron |
| Razorpay webhook drops | L | H | Polling fallback + idempotency keys |
| GST/legal compliance | M | H | Engage CA for invoice format review pre-launch |
| Content authoring bottleneck (single ops person) | H | M | Train 2 staff on Sanity Studio; pre-load 30 days of content |
| OTA price-parity rules | M | M | Direct-booking discount stays modest (5%); use email-list-only deeper offers |
| Review velocity gap (vs. competitors who've existed since 1897) | H | M | Post-stay email asking for Google review; respond to all reviews within 24h |

---

## 22. Open Questions (require owner decision)

1. **Domain** — has `hotelluxuriagrand.com` been registered? Is `.in` preferred?
2. **Spa / Pool** — does the property have these? (Affects nav, schema, rate justification.)
3. **Banquet capacity** — exact seated/theatre/cocktail counts for the hall?
4. **Restaurant name** — does the in-house restaurant have its own brand, or is it "Hotel Luxuria Grand Restaurant"?
5. **Photography budget** — confirm ₹1-1.5L allocation? Without this, the site cannot achieve its visual goal.
6. **Star classification** — has the property pursued formal Govt. of India star classification? (We need to know what we can legally claim.)
7. **Existing PMS** — is there already a PMS in use (Hotelogix, eZee, IDS)? If yes, integrate that one to avoid migration.
8. **MakeMyTrip listing accuracy** — should we update the MMT listing in parallel (different images, accurate amenities) to align brand?
9. **GST registration** — confirm GSTIN and HSN code for hotel services (998552).
10. **Founder/owner photograph** — willing to be on the about page for credibility?
11. **Wedding gallery permissions** — do we have signed releases from past weddings?
12. **Brand naming** — visiting card says **"Hotel Luxuria Grand"**, MakeMyTrip URL says **"hotel_luxuria_grand"** — confirm canonical capitalization (we recommend "Hotel Luxuria Grand").

---

## 23. Existing Prototype — Live Audit

> **Audited URL:** `https://hotel-luxuria-grand.vercel.app/`
> **Audit date:** 2026-05-03
> **Method:** headless Chromium @ 1440×900 desktop and 375×812 mobile, full DOM extraction, `<head>` analysis, content cross-check against the catalog/visiting card.

### 23.1 What's working ✓

1. **Brand identity is on-brief.** Gold-on-dark, ornate "HG" crowned monogram, all-caps eyebrow labels — the prototype honors the visiting card. Many prototypes invent a palette; this one didn't.
2. **Hero display type is correct.** A two-line "THE ART OF / GRAND LIVING" with the second line in italic gold is exactly the editorial flourish a luxury site needs.
3. **Mobile has a hamburger and the room cards collapse to a carousel.** Responsive scaffolding is in place.
4. **Hero image and key fonts are preloaded.** Performance instinct is right (`<link rel="preload">` for hero JPEG and 4 woff2 fonts).
5. **Page title and meta description exist** and read naturally.
6. **Sticky nav with primary "RESERVE NOW" CTA on the right** — correct hierarchy.
7. **Footer is comprehensive** — full address, two phones, email, social row, "Official Digital Card" block. Good information architecture for a regional hotel.

### 23.2 What's broken — confirmed live ✗

| # | Severity | Issue | Evidence | Fix |
|---|---|---|---|---|
| 1 | **P0 — DATA INTEGRITY** | **Room names are completely invented.** Live shows: "Executive Suite," **"Luxury Sanctuary,"** **"Twin Deluxe."** Catalog rate card has: Standard, Deluxe, Super Deluxe, Executive, Suite, Executive Suite, **President** Suite. | DOM extract @ 2026-05-03 | Use the seven actual category names. Anything else collapses trust the moment a guest cross-references MakeMyTrip. |
| 2 | **P0 — DATA INTEGRITY** | **Room rates are wrong.** Live shows: ₹8,500 / ₹6,500 / ₹5,000 per night. Catalog max is **₹6,500** (President Suite double); single occupancy starts at ₹2,200. Charging guests an "advertised" rate higher than the catalog is a legal/regulatory risk. | DOM extract | Replace with single/double rates from the catalog (§ Decisions). Show both occupancy bands. |
| 3 | **P0 — DATA INTEGRITY** | **Address conflict.** Trust strip + hero subhead say **"NIT Road, Silchar."** Footer says **"Ghungoor Kuarpar Road, Near Saint Captino School, Silchar-788010."** Visiting card says **"Ghungoor Kuarpar Road, Near Saint Capino School."** | Live render | Pick one canonical address (the visiting card's), correct the misspelling **"Captino" → "Capino"**, fix everywhere. Also: NIT Silchar campus is on NIT Road but the hotel is on Ghungoor Kuarpar Road — they are *different roads*. |
| 4 | **P0 — DATA INTEGRITY** | **Phone number formatting differs from visiting card.** Visiting card: `9181043994 / 9181099018`. Live: `+91 81043 99400 / +91 81099 01800`. Either they're being mis-grouped (a "0" is duplicated/missing) or these are different numbers. | Visiting card vs. DOM | Verify with owner, then standardize as `+91 91810 43994` / `+91 91810 99018` (Indian +91 + 10-digit). Inconsistent NAP destroys local SEO. |
| 5 | **P0 — UX** | **Three rendered room cards out of seven categories.** No `/rooms` index, no detail pages, no Single/Double rate toggle. | Nav extract | Build the index + 7 detail pages per §8. Ensure the category that walks in clicking gets the actual rate they'll be charged. |
| 6 | **P0 — UX** | **Massive empty space mid-page.** The desktop full-page render shows a ~1,000px tall empty dark band between the room carousel and the footer where the "Our Story / Your Luxury" section should be. The DOM extract finds the "OUR STORY YOUR LUXURY" heading but no visible content beneath it on the deployed render. | Full-page screenshot | Either the section isn't responsive, content is missing from the deployed env, or images failed to load. Investigate; restore content. |
| 7 | **P0 — TRUST** | **No source on "Excellent 4.5 / 5".** Anonymous ratings imply fabrication. | Trust strip | Cite: "4.5/5 — 200+ Google Reviews" with a `rel="noopener"` link to the GBP listing. If you don't have 200+ reviews yet, change the claim. |
| 8 | **P1 — SEO** | **Zero structured data.** No JSON-LD `<script type="application/ld+json">` for `Hotel`, `LocalBusiness`, or `Room`. Search engines have no way to surface rate cards or rich results. | `<head>` HTML | Implement schema per §13.1 + Appendix B. Highest-leverage SEO fix on this site. |
| 9 | **P1 — SEO/SOCIAL** | **No Open Graph tags. No Twitter card. No canonical URL.** Sharing the site on WhatsApp/Slack/Twitter will produce a blank preview. | `<head>` HTML | Add `og:title`, `og:description`, `og:image`, `og:url`, `og:type=website`, `twitter:card=summary_large_image`, plus `<link rel="canonical">`. Use `app/opengraph-image.tsx` for dynamic OG images. |
| 10 | **P1 — DESIGN** | **Background is dark-purple/aubergine, not onyx.** The hex appears to be roughly `#1d0d1a` / `#23131e` band — reads "dated lounge" not "considered luxury." | Visual | Move to onyx `#0B0B0C` as primary background. Aubergine `#2A1B2D` reserved for one accent section per page (§6.2). |
| 11 | **P1 — DESIGN** | **CTAs are saturated yellow `~#FFD300`, not champagne.** Reads inexpensive. | Visual | Migrate to `--champagne #C9A96E` with `--brass #8C6F3F` hover (§6.2). |
| 12 | **P1 — DESIGN** | **Hero photograph is dim, cloudy, and shows the building from across the street with palm trees and a parking lot in foreground.** The building reads as "competent business hotel," not luxury. | Hero render | Commission the golden-hour shot in §6.6 — this is the single biggest visual unlock. Until that exists, use a tightly-cropped detail (entrance archway, monogram on door) instead. |
| 13 | **P1 — UX** | **No date/guest booking widget on home.** Two CTAs ("Start Your Journey" and "Call to Book") punt the booking decision off-site. | Hero render | Add a docked DateRange + Guests + "Check availability" widget at hero bottom. |
| 14 | **P1 — UX** | **No dining, weddings, gallery, or offers sections on home.** Wedding/banquet alone could be the highest-margin business line in Silchar — invisible to homepage visitors. | Section list | Implement §8.1 fully (story, dining, weddings, gallery teaser, map). |
| 15 | **P1 — A11Y / TRUST** | **Logo positioning overlaps centered nav text on desktop.** "HOTEL LUXURIA" centered text is being painted underneath the upper-left logo image. | Visual | Restructure nav as left-logo / center-spacer / right-links, OR center the logo with links flanking. |
| 16 | **P2 — COPY** | **Generic copywriting** — "The pinnacle of Barak Valley luxury with sweeping views" applies to no specific room. "Luxury Sanctuary / Twin Deluxe / Executive Suite" — three names, three pieces of identical generic flattery. | Card content | Rewrite each room blurb with specifics: square footage, bed config, view direction, in-room amenity that actually exists, occupancy. |
| 17 | **P2 — COPY** | **"Silchar's most glamorous destination"** — adjective-heavy, evidence-light. Compare to Aman: "_Tucked into the cliffs above the Pacific_" — concrete > effusive. | Hero subhead | Lead with where, not how-amazing. Suggested: *"Seven categories of refined accommodation on Ghungoor Kuarpar Road, in the heart of Cachar."* |
| 18 | **P2 — PERF** | **Multiple legacy/transpiled bundles + a `nomodule` script.** Indicates Babel ES5 fallback being shipped to modern browsers. Adds ~30-60KB unnecessarily. | `<head>` HTML | Drop `nomodule` shim by setting `target: "es2020"` or higher in TS/Next config. |
| 19 | **P2 — PERF** | **Browserbase test classes are leaking into the production CSS** (`.bb-custom-select-*` rules baked into the page). Either dev tooling injected these or they were copy-pasted. | `<head>` `<style>` | Remove. |
| 20 | **P2 — UX** | **"Hotel Luxuria Grand SILCHAR" is the brand wordmark in nav AND the section "OFFICIAL DIGITAL CARD" in the footer is empty/placeholder.** Two oddities: redundant ALL CAPS "SILCHAR" tagline in the wordmark, and an unfinished QR-card block. | Footer render | Drop the redundant "SILCHAR" suffix from the wordmark. Either implement the digital card (vCard download + QR) or remove the section. |
| 21 | **P2 — A11Y** | **All-caps body labels everywhere.** Eyebrow labels (`LOCATION`, `RATING`, `EXPERIENCE`, `NAVIGATION`, `CONNECT`) shout — and lose word-shape recognition for screen readers and dyslexic users. | Visual | Limit ALL-CAPS to micro-labels (≤3 words, ≥0.08em tracking, no longer-form copy). Use sentence-case for everything else. |
| 22 | **P2 — A11Y** | **Yellow text on purple background** — likely fails WCAG AA contrast in several rate-badge and CTA-text combinations. | Visual | Verify all pairs ≥ 4.5:1; champagne-on-onyx is safer than yellow-on-purple. |

### 23.3 Honest verdict

**Score: 4.5/10 — a competent v0 with serious data-integrity bugs.**

The instincts are right (gold-on-dark, italic serif, sticky reserve CTA, mobile carousel). The execution has **four P0 data-integrity bugs that would cause guest disputes and tax/legal risk in production**:

1. Made-up room names that don't exist.
2. Made-up rates that exceed the actual catalog.
3. Two contradictory addresses on the same page.
4. Phone number formatting that doesn't match the visiting card.

These four alone would get this site rejected at any real hospitality QA review.

Beyond data integrity, the site is missing **all the conversion machinery a booking-driven hotel site requires**: no booking widget, no dining/weddings/gallery sections, no schema markup, no OG tags, only 3 of 7 room categories visible.

**The good news:** these are all fixable in 4–6 weeks of focused work without rewriting the visual direction. The brand instinct is sound; the implementation needs senior-engineer rigor.

### 23.4 Recommended fix sequence (week-by-week)

| Week | Outcome |
|---|---|
| 1 | **Data integrity sweep** — fix room names/rates/address/phones (P0 #1-4). Single source of truth: the catalog + visiting card. |
| 1 | **Schema + OG/Twitter** — add Hotel, LocalBusiness, Room JSON-LD; OG tags; canonical URLs (P1 #8-9). |
| 2 | **Visual system migration** — onyx + champagne tokens; replace yellow CTAs; fix nav overlap; sentence-case body copy (P1 #10-11, #15; P2 #21). |
| 2 | **Restore missing sections** — story, dining, weddings, gallery teaser, contact map (P1 #14). |
| 3 | **Photography shoot** — 1-day commissioned hospitality photographer; 30-frame deliverable (P1 #12). Single biggest trust unlock. |
| 4 | **All 7 room detail pages + booking widget** — match catalog SKUs and rates (P0 #5; P1 #13). |
| 5 | **Booking engine integration** — eZee iframe layer A; Razorpay handoff (§11). |
| 6 | **A11y, perf, SEO polish** — axe pass, drop nomodule shim, Lighthouse 95+ on mobile (P2 #18-22). |

### 23.5 Things to verify with the owner BEFORE coding the fixes

- The two visiting-card phone numbers — read them off the original card and confirm exact digits (we suspect a typo in the prototype).
- Has the property pursued formal Govt. of India star classification? If not, do not use "5-star" anywhere on the site (Tourism Ministry regulation).
- Does the property *actually* offer everything the homepage/footer implies? (Concierge service, banquet capacity, restaurant — confirm before claiming.)
- Does the founder/owner have a current, source-cited Google or MMT review average? If yes, cite it; if not, drop the "4.5/5" claim until it's true.
- Is "Hotel Luxuria Grand" the legal name on the GST registration? It must match for invoices.

---

## Appendix A — Sample Sanity GROQ Queries

```groq
// Room index page
*[_type == "room" && isActive] | order(order asc) {
  _id, name, slug, category, rateSingle, rateDouble, maxOccupancy,
  "heroImage": heroImage.asset->{ url, metadata { lqip, dimensions } },
  shortDescription
}

// Single room detail
*[_type == "room" && slug.current == $slug][0] {
  ...,
  "amenities": amenities[]->{ name, "icon": icon.asset->url },
  "gallery": gallery[]{ ..., asset->{ url, metadata { lqip, dimensions } } }
}

// Site settings (header, footer, brand)
*[_type == "siteSettings"][0]
```

## Appendix B — Sample Hotel JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hotel Luxuria Grand",
  "description": "An upscale hotel in Silchar, Assam offering refined accommodations across seven categories, with banquet, dining, and event facilities.",
  "image": "https://hotelluxuriagrand.com/og/home.jpg",
  "url": "https://hotelluxuriagrand.com",
  "telephone": "+919181043994",
  "priceRange": "₹2200-₹6500",
  "starRating": { "@type": "Rating", "ratingValue": "4" },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ghungoor Kuarpar Road, Near Saint Capino School",
    "addressLocality": "Silchar",
    "addressRegion": "Assam",
    "postalCode": "788015",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 24.8333, "longitude": 92.7789 },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Banquet Hall", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true }
  ],
  "numberOfRooms": "[FILL]",
  "checkinTime": "12:00",
  "checkoutTime": "11:00"
}
```

## Appendix C — Type-token CSS (Tailwind config snippet)

```js
// tailwind.config.ts (excerpt)
export default {
  theme: {
    extend: {
      colors: {
        onyx: '#0B0B0C',
        ivory: '#F5F1E8',
        champagne: { DEFAULT: '#C9A96E', dark: '#8C6F3F' },
        aubergine: '#2A1B2D',
        terracotta: '#B5573A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        headline: ['var(--font-fraunces)', 'Fraunces', 'serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-l':  ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-m':  ['3.5rem', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-s':  ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      transitionTimingFunction: { 'out-quint': 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
}
```

---

**End of PRD v0.1**
