

## Optimizing for Netlify Prerendering + SEO

### What Netlify Prerender Does (No Code Needed)
The Netlify Prerender extension runs entirely on Netlify's side. It intercepts crawler/bot requests, renders your SPA in a headless browser, and returns the fully-rendered HTML. **You enable it in the Netlify dashboard** — no code changes needed for the extension itself.

### What We Should Do in Lovable

The goal is to ensure that when Netlify's headless browser renders each page, the resulting HTML is **rich, unique, and SEO-optimized**. Right now, all pages share the same `<title>` and `<meta>` tags from `index.html`.

#### 1. Add per-page SEO meta tags using `document.title` and meta tag updates
Create a reusable `SEOHead` component that dynamically sets:
- `document.title` 
- Meta description
- Open Graph title, description, URL
- Twitter card meta
- Canonical URL

Apply unique tags to each page: Home, Services, Gallery, Blog, Contact.

#### 2. Add JSON-LD structured data
Inject structured data scripts into each page for rich search results:
- **Home page**: `LocalBusiness` schema (name, address, phone, hours, services)
- **Home/Services page**: `FAQPage` schema from the existing FAQ data
- **Gallery**: `ImageGallery` schema
- **All pages**: `BreadcrumbList` schema

#### 3. Add semantic HTML improvements
- Ensure each page has exactly one `<h1>`
- Add `<nav>` landmarks, proper `aria-labels`
- Add `alt` text audit for images

#### 4. Add a sitemap
Create a `public/sitemap.xml` listing all routes with lastmod dates so crawlers discover every page.

#### 5. Update robots.txt
Add the sitemap URL reference.

### Files to Create/Edit
- **Create** `src/components/SEOHead.tsx` — reusable meta tag component
- **Create** `src/components/StructuredData.tsx` — JSON-LD component
- **Create** `public/sitemap.xml`
- **Edit** `public/robots.txt` — add Sitemap directive
- **Edit** all page files (`Index.tsx`, `Services.tsx`, `Blog.tsx`, `Gallery.tsx`, `Contact.tsx`) — add `SEOHead` + structured data
- **Edit** `netlify.toml` — add cache header for sitemap

### What You Do on Netlify's Side
1. Go to **Extensions > Prerender** in your Netlify project dashboard
2. Click **Enable prerendering**
3. Redeploy the site

