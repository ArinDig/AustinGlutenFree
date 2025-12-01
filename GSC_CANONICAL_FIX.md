# Google Search Console Canonical URL Fix

**Date:** December 1, 2025  
**Issue:** "Alternate page with proper canonical tag" errors in Google Search Console

## Problems Identified

### 1. Duplicate Homepage URLs
**Error URL:** `https://austinglutenfree.com/index.html`

**Cause:** All internal links across the site were pointing to `index.html` instead of the root `/`, causing Google to discover and attempt to index both:
- `https://austinglutenfree.com/` (preferred canonical)
- `https://austinglutenfree.com/index.html` (duplicate)

### 2. Query Parameter URLs
**Error URL:** `https://austinglutenfree.com/?search=%7B&search_term_string%7D`

**Cause:** This appears to be a legacy URL from when the `SearchAction` schema was present (now removed). Google may have cached this URL or found it through external links.

## Solutions Implemented

### 1. Updated All Internal Links (36 files modified)
- **Before:** `href="index.html"` or `href="../index.html"`
- **After:** `href="/"` or `href="../"`
- **Files affected:** All restaurant pages, about.html, privacy-policy.html, guides

**Example changes:**
```html
<!-- Before -->
<a href="../index.html">Home</a>
<a href="index.html#restaurants">Restaurants</a>

<!-- After -->
<a href="../">Home</a>
<a href="/#restaurants">Restaurants</a>
```

### 2. Enhanced Canonical Redirect Script
Updated the JavaScript redirect in `index.html` to handle:
- **www to non-www** (existing)
- **HTTP to HTTPS** (existing)
- **`/index.html` to `/`** (new)
- **Query parameters on homepage** (new)

```javascript
// Redirect /index.html to root /
if (pathname === '/index.html') {
    newPathname = '/';
    needsRedirect = true;
}

// Remove query parameters from homepage
if ((pathname === '/' || pathname === '/index.html') && search) {
    search = '';
    needsRedirect = true;
}
```

### 3. Updated robots.txt
Added explicit disallow rule for `index.html`:

```
# Prevent indexing of index.html (redirect to root instead)
Disallow: /index.html
```

## Expected Results

### Immediate (Within Hours)
1. Any user visiting `austinglutenfree.com/index.html` will be redirected to `austinglutenfree.com/`
2. Any homepage URL with query parameters will be cleaned to the root URL
3. Search engines will see consistent canonical signals

### Short-term (1-2 weeks)
1. Google will re-crawl the updated pages
2. `robots.txt` will prevent new indexing attempts of `/index.html`
3. All internal link equity will flow to the canonical root URL

### Long-term (2-4 weeks)
1. Google Search Console errors should resolve as Google recognizes the redirect
2. The duplicate `/index.html` URL should drop from Google's index
3. The malformed query parameter URL should be deprioritized/removed

## Validation Steps

### 1. Test Redirects
- Visit `https://austinglutenfree.com/index.html` → Should redirect to `https://austinglutenfree.com/`
- Visit `https://austinglutenfree.com/?test=123` → Should redirect to `https://austinglutenfree.com/`
- Visit `https://austinglutenfree.com/#restaurants` → Should stay (hash anchors are fine)

### 2. Check Internal Links
- Navigate through the site from any restaurant page
- Click "Home" links → Should go to root `/`, not `/index.html`
- Check browser address bar → Should show clean URLs

### 3. Monitor Google Search Console
1. Go to **Index > Pages** in GSC
2. Check "Alternate page with proper canonical tag" section
3. Click "Validate Fix" after Google re-crawls (usually takes a few days)
4. Monitor for decrease in affected pages over 2-4 weeks

### 4. Verify robots.txt
- Visit `https://austinglutenfree.com/robots.txt`
- Confirm `Disallow: /index.html` is present
- Use Google Search Console > Settings > robots.txt tester to verify

## Additional Notes

- **No content changes:** Only URL structure and redirects were modified
- **SEO-safe:** All changes follow Google's best practices for canonical URLs
- **User experience:** Cleaner URLs in address bar, faster redirects
- **No 404s:** The redirect script handles all variations gracefully

## Next Steps

1. **Wait 3-5 days** for Google to re-crawl your site
2. **Validate the fix** in Google Search Console under the affected URLs
3. **Monitor** the "Pages" report to see the error count decrease
4. **Check GitHub Pages** deployment to ensure changes are live

## Technical Details

**Commit:** 65902fd  
**Branch:** main  
**Files Changed:** 36  
**Lines Modified:** 332 insertions, 314 deletions  

All changes have been committed and pushed to GitHub. GitHub Pages should automatically deploy the updates within 5-10 minutes.

