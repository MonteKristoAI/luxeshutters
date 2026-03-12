

## Add `window.prerenderReady` Signal for Faster Netlify Prerendering

### Current State
No `window.prerenderReady` signal exists in the codebase. The Netlify Prerender extension will wait for network idle or 10-second timeout instead of knowing exactly when content is ready.

### Goal
Implement a signal that tells Netlify's headless browser when page content (SEO meta tags, JSON-LD, main content) is fully rendered and safe to capture.

### Approach

Create a `usePrerenderReady` hook that sets `window.prerenderReady = true` once:
1. Route has changed and settled
2. SEOHead has updated meta tags
3. StructuredData is injected
4. Main content components have mounted

**Implementation:**

1. **Create `src/hooks/usePrerenderReady.ts`**
   - Hook that accepts a `ready` boolean parameter
   - Sets `window.prerenderReady = true` when ready
   - Resets to `false` on route changes
   - Includes TypeScript declaration for `window.prerenderReady`

2. **Update `src/App.tsx`**
   - Import and use the hook
   - Track when route transitions complete
   - Signal ready after a short delay (500ms) to allow SEO components to finish DOM updates

3. **Type Declaration**
   - Add to `src/vite-env.d.ts` or a new `global.d.ts`:
   ```typescript
   interface Window {
     prerenderReady?: boolean;
   }
   ```

### Expected Outcome
Netlify's prerender function captures the page faster (potentially <1 second vs 3-6 seconds), improving build/deploy performance and ensuring crawlers get complete HTML.

### Files to Modify
- Create: `src/hooks/usePrerenderReady.ts`
- Edit: `src/App.tsx`
- Edit: `src/vite-env.d.ts` (add window type)

