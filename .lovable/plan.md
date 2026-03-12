

## Full SEO Optimization Plan for Luxe Shutters

### Critical Issues Found
- **Reviews** reference Arizona locations (Scottsdale, Phoenix, Mesa, Tempe) — must be changed to NSW towns
- **Footer** mentions "Phoenix metro area" — must say Regional NSW
- **Hero H1** is not keyword-targeted
- **Service descriptions** are too short (1-2 sentences vs. required 150-250 words)
- **No location landing pages** exist
- **LocalBusiness schema** missing `areaServed`, `hasOfferCatalog`, `sameAs`
- **Internal linking** is minimal — services, blog, and location pages are not cross-linked

---

### Step 1 — Hero Section SEO Rewrite
**File:** `src/components/HeroSection.tsx`

- Change H1 to: *"Premium Plantation Shutters, Blinds & Curtains in Regional NSW"*
- Subheadline: *"Custom window furnishings supplied and installed across Wagga Wagga, Griffith, Temora and surrounding NSW areas."*
- Change CTA button text from "Get a Free Quote" → "Get a Free Measure & Quote"
- Change "Call Us" button to actually call (currently scrolls to gallery)
- Update trust chips to include local keywords

### Step 2 — Expand Service Descriptions (150-250 words each)
**File:** `src/pages/Services.tsx`

Expand all 6 service `intro` fields with SEO-rich content covering:
- What the product is
- Benefits for Australian homes (heat, UV, energy efficiency)
- Installation process overview
- Why Luxe Shutters is the trusted choice in Regional NSW
- Natural keyword variations (e.g. "plantation shutters Wagga Wagga", "blinds installation NSW")

Also update `summary` fields in `src/components/ServicesPreview.tsx` with slightly richer descriptions and add service area mentions.

### Step 3 — Local SEO: Service Area Mentions
**Files:** `src/components/WhyChooseUs.tsx`, `src/components/AboutTeam.tsx`, `src/components/ServicesPreview.tsx`, `src/components/Footer.tsx`

- Add "Serving Wagga Wagga, Griffith, Temora, Young and Regional NSW" naturally into section intros
- Fix Footer: replace "Phoenix metro area" with Regional NSW copy
- Fix review locations (Step 3b below)

**File:** `src/data/clinicData.ts` (Step 3b — Fix Reviews)
- Change all review locations from Arizona cities to NSW towns: Wagga Wagga, Temora, Griffith, Young, Cootamundra, West Wyalong, Junee, Cowra

### Step 4 — Location Landing Pages (8 pages)
**New files:**
- `src/pages/locations/ShuttersWaggaWagga.tsx`
- `src/pages/locations/BlindsWaggaWagga.tsx`
- `src/pages/locations/CurtainsWaggaWagga.tsx`
- `src/pages/locations/ZipscreensWaggaWagga.tsx`
- `src/pages/locations/ShuttersGriffith.tsx`
- `src/pages/locations/BlindsGriffith.tsx`
- `src/pages/locations/CurtainsGriffith.tsx`
- `src/pages/locations/ZipscreensGriffith.tsx`

Each page (300-500 words) includes: SEO H1, introduction, benefits for local homeowners, installation process, local trust section mentioning the specific city, CTA. Uses existing `Header`, `Footer`, `SEOHead`, `StructuredData` components. Reuses existing service images.

To keep it DRY, create a shared `src/pages/locations/LocationPage.tsx` template component that accepts city, product, and content props, plus a `src/data/locationPages.ts` data file.

**File:** `src/App.tsx` — Add routes for `/shutters-wagga-wagga`, `/blinds-wagga-wagga`, etc.

### Step 5 — FAQ SEO Expansion
**Files:** `src/components/FAQSection.tsx`, `src/pages/Index.tsx` (HOME_FAQS), `src/pages/Services.tsx` (FAQS)

Add high-intent search queries:
- "How much do plantation shutters cost in NSW?"
- "Are plantation shutters better than blinds?"
- "What window coverings work best in hot Australian climates?"
- "Do you install shutters in Wagga Wagga?"
- "Do you offer free in-home quotes?"
- "How long does shutter installation take?"
- "Are motorised blinds worth it?"

Update FAQPage schema to include the new questions.

### Step 6 — Image Alt Text SEO
**Files:** `src/data/galleryData.ts`, `src/components/ServicesPreview.tsx`, `src/pages/Services.tsx`

Update all alt text to include location + product keywords:
- "Plantation shutter installation in Wagga Wagga NSW home"
- "Outdoor zipscreen blinds installed on Regional NSW patio"
- "Premium custom curtains in Temora NSW living room"
- etc.

### Step 7 — Meta Tags Optimization
**Files:** All page components with `SEOHead`

Updated meta tags:
- **Home title:** "Plantation Shutters & Blinds Regional NSW | Luxe Shutters"
- **Home description:** "Premium plantation shutters, blinds and curtains installed across Wagga Wagga, Temora and Regional NSW. Book a free in-home measure and quote today."
- **Services title:** "Shutters, Blinds & Curtains Installation | Luxe Shutters Regional NSW"
- **Gallery title:** "Our Work — Shutter & Blind Installations Regional NSW | Luxe Shutters"
- **Blog title:** "Window Furnishing Tips & Guides | Luxe Shutters Blog"
- **Contact title:** "Contact Luxe Shutters — Free Measure & Quote Regional NSW"

### Step 8 — Internal Linking
**Files:** `src/components/ServicesPreview.tsx`, `src/components/FAQSection.tsx`, `src/components/BlogPreview.tsx`, `src/components/Footer.tsx`

- Add "Services" links in FAQ answers (e.g., "Learn more about our plantation shutters" → `/services#shutters`)
- Add location page links in Footer under a new "Service Areas" section
- Link blog post titles to relevant service sections
- Add "View our shutters" / "View our blinds" links in location pages back to `/services`

### Step 9 — Blog SEO Strategy (20 Topics)
**File:** `src/data/clinicData.ts` — Expand `BLOG_POSTS` array with 15 additional SEO-targeted topics

Topics include:
1. Plantation Shutters vs Blinds: What's Best for Australian Homes
2. How Much Do Plantation Shutters Cost in NSW
3. Best Window Coverings for Hot Australian Summers
4. Zip Screens vs Outdoor Blinds: Which Is Right for Your Patio
5. Curtains vs Blinds for Privacy in Your Home
6. Are Motorised Blinds Worth the Investment
7. How to Choose the Right Shutters for Your Home
8. Energy-Efficient Window Furnishings for NSW Homes
9. Security Roller Shutters: Protection and Insulation Guide
10. Window Furnishing Trends for Australian Homes
11. How Shutters Increase Your Property Value
12. Outdoor Living Ideas with Zipscreens and Awnings
13. Child-Safe Window Coverings: A Parent's Guide
14. Timber vs PVC Shutters: Which Material Is Best
15. How to Measure Your Windows for Blinds and Shutters
16-20. (additional local/seasonal topics)

### Step 10 — Structured Data Enhancement
**File:** `src/components/StructuredData.tsx`

Enhance `LOCAL_BUSINESS_DATA`:
- Add `areaServed` array with all service cities
- Add `hasOfferCatalog` with product list
- Add `sameAs` with Facebook and Instagram URLs
- Add `geo` coordinates for Temora
- Add `aggregateRating` (4.9 / 183 reviews)

Add `Service` schema for each product category.

### Step 11 — CTA Copy Improvements
**Files:** `src/components/BookingSection.tsx`, `src/components/HeroSection.tsx`, `src/pages/Services.tsx`, `src/components/ConsultationForm.tsx`

Update CTA copy across the site:
- "Get a Free Quote" → "Get Your Free Measure & Quote"
- "Contact us" → "Speak With Our Team"
- "Request a Free Consultation" → "Book a Free Home Consultation"
- Add urgency/trust text near CTAs: "No obligation. We come to you."

### Step 12 — Sitemap & Robots Update
**File:** `public/sitemap.xml` — Add all 8 location page URLs
**File:** `public/robots.txt` — Already correct, no changes needed

---

### Summary of Files Modified
| Area | Files |
|------|-------|
| Hero | `HeroSection.tsx` |
| Services | `Services.tsx`, `ServicesPreview.tsx` |
| Data | `clinicData.ts`, `galleryData.ts`, `locationPages.ts` (new) |
| Location pages | `LocationPage.tsx` (new template) + 8 location pages |
| FAQ | `FAQSection.tsx`, `Index.tsx`, `Services.tsx` |
| Schema | `StructuredData.tsx` |
| Meta | All page components |
| Footer | `Footer.tsx` |
| Internal links | Multiple components |
| Sitemap | `sitemap.xml` |
| Routing | `App.tsx` |

