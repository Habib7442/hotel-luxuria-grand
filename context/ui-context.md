# UI Context: Hotel Luxuria Grand

## Visual Language
The brand aesthetic is **Elite Luxury** with a dark, sophisticated palette and high-contrast gold accents.

### Color Tokens (Tailwind v4)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-onyx` | `#0B0B0C` | Primary Background |
| `--color-ivory` | `#F5F1E8` | Primary Heading Text |
| `--color-champagne` | `#C9A96E` | Accent, CTA, Italics |
| `--color-brass` | `#8C6F3F` | Secondary Accent, Hover states |
| `--color-aubergine` | `#2A1B2D` | Dark accents |

### Typography
- **Headings**: `Playfair Display` (Serif) - Elegant and authoritative.
- **Sub-headings**: `Cormorant Garamond` (Italic) - For a high-fashion, premium feel.
- **Body**: `Plus Jakarta Sans` (Sans-serif) - Modern, clean, and legible.

### Layout Patterns
- **Golden Ratio Spacing**: Use ample white space (onyx space) to let content breathe.
- **Glassmorphism**: Subtle `backdrop-blur` on navigation and overlay elements.
- **Animations**: Smooth transitions; avoid abrupt movements. GSAP is preferred for complex choreographies.

### Icons
- Use `lucide-react` icons.
- Default icon color: `text-champagne` or `text-ivory`.
