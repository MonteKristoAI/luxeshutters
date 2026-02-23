

# Add Visual Depth with Layered Backgrounds

## The Problem
Most sections currently use plain `bg-background` (white) or `bg-secondary/50` (light gray), creating a flat, monotonous feel with no visual rhythm between sections.

## Background Assignment Plan

Here is how each section will be styled (no layout changes):

| Section | Current | New Treatment |
|---------|---------|---------------|
| Hero | Dark image overlay | No change |
| Services | Radial gradients + texture | No change (already done) |
| Why Choose Us | Plain white | Light blue-gray gradient + subtle dot grid pattern |
| Gallery | Plain white | No change (white works here -- photos need clean bg) |
| About / Service Area | `bg-secondary/50` | Subtle angled gradient overlay with soft decorative shapes |
| Booking | Plain white | No change (form needs clean bg for usability) |
| Reviews | `bg-secondary/50` | Light cool-toned gradient (slightly different shade than About) |
| Blog | Plain white | No change (card-based, clean bg works) |
| Consultation (CTA) | Plain white | **Dark background** (navy/charcoal) with inverted text colors |

## What Gets Changed

### 1. WhyChooseUs.tsx -- Add subtle depth
- Replace `bg-background` with a soft gradient background (light blue-gray)
- Add a very faint technical grid/dot pattern overlay at low opacity (~3%)
- Adds visual separation from Services above it

### 2. AboutTeam.tsx -- Add decorative shapes
- Keep the `bg-secondary/50` base
- Add a subtle radial gradient blob (primary color at very low opacity) behind the content
- Add a faint geometric shape (circle or rounded rectangle) as a decorative element, positioned with `absolute` and low opacity

### 3. ReviewsSection.tsx -- Refine background
- Add a soft linear gradient (from slightly cooler tone to warm) on top of the existing `bg-secondary/50`
- Provides subtle visual distinction from the About section

### 4. ConsultationForm.tsx -- Dark CTA strip
- Change background to dark navy/charcoal (`hsl(215 25% 12%)`)
- Invert all text colors to white/light variants
- Update form card to use a slightly lighter dark shade with visible border
- Update labels, inputs, and button to work on dark backgrounds
- This creates a strong visual anchor near the bottom of the page

### 5. index.css -- Add reusable pattern utility
- Add a `.bg-grid-pattern` utility class with a subtle SVG dot/cross grid at very low opacity
- This keeps pattern definitions centralized and reusable

## Technical Details

### Files Modified
- `src/components/WhyChooseUs.tsx` -- background + pattern overlay
- `src/components/AboutTeam.tsx` -- decorative gradient shapes
- `src/components/ReviewsSection.tsx` -- refined gradient
- `src/components/ConsultationForm.tsx` -- dark background + inverted colors
- `src/index.css` -- reusable pattern utility class

### Design Rules Followed
- No heavy patterns -- all overlays at 2-4% opacity
- Only one dark section (CTA at bottom)
- No stock-image backgrounds added
- All changes are background/visual only -- zero layout modifications
- Color palette stays within existing CSS custom properties (primary, foreground, muted, etc.)

