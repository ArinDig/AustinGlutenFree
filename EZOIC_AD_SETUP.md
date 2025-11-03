# Ezoic Ad Placement Setup Guide

This guide explains how to complete **Step 3: Ad Placements** from the [Ezoic Implementation Documentation](https://docs.ezoic.com/docs/ezoicads/implementation/).

## ✅ What's Already Done

1. ✅ **Step 1: Site Integration** - Ezoic scripts added to all pages
2. ✅ **Step 2: Ads.txt Setup** - Update script ready (`update_ads_txt.sh`)
3. ✅ **Step 3: Ad Placements** - Code structure prepared with placeholder locations

## 📍 Ad Placement Locations Prepared

I've added **4 strategic ad placement locations** in `index.html`:

1. **Top of Content** (after filters) - Placement ID: `101` (placeholder)
2. **Mid-Content - Restaurants Section** (after heading) - Placement ID: `102` (placeholder)
3. **After Restaurants Section** - Placement ID: `103` (placeholder)
4. **Mid-Content - About Section** - Placement ID: `104` (placeholder)

## 🚀 Next Steps

### Step 1: Create Ad Placements in Ezoic Dashboard

1. Log into your [Ezoic Dashboard](https://www.ezoic.com)
2. Navigate to **Ad Placements** or **EzoicAds** section
3. Create 4 ad placements (or work with your Ezoic Onboarding Specialist for recommendations)
4. **Note down the Placement IDs** - you'll need these numbers (e.g., `12345`, `67890`)

**Recommended Placement Types:**
- **Top Banner** - For placement after filters
- **In-Content** - For mid-content placements
- **Bottom Banner** - For after restaurants section
- **Sidebar** (if you add a sidebar) - For additional placements

### Step 2: Add Placement IDs to Your Website

1. Open `index.html` in your editor
2. Find the commented Ezoic ad placement sections (search for `<!-- Ezoic Ad Placement`)
3. Uncomment each placement block
4. Replace the placeholder IDs (`101`, `102`, `103`, `104`) with your actual Ezoic placement IDs

**Example:**

```html
<!-- BEFORE (commented with placeholder) -->
<!-- 
<div id="ezoic-pub-ad-placeholder-101"></div>
<script>
    ezstandalone.cmd.push(function () {
        ezstandalone.showAds(101);
    });
</script>
-->

<!-- AFTER (uncommented with real ID) -->
<div id="ezoic-pub-ad-placeholder-12345"></div>
<script>
    ezstandalone.cmd.push(function () {
        ezstandalone.showAds(12345);
    });
</script>
```

### Step 3: Optimize for Multiple Placements

According to Ezoic documentation, for pages with **multiple placements**, use a single `showAds()` call to reduce server requests:

**Instead of:**
```javascript
ezstandalone.showAds(12345);
ezstandalone.showAds(67890);
ezstandalone.showAds(11111);
```

**Do this (at the end of the page, before `</body>`):**
```javascript
ezstandalone.cmd.push(function() {
    ezstandalone.showAds(12345, 67890, 11111, 22222);
});
```

Update the initialization script at the bottom of `index.html` once you've added all your placement IDs.

### Step 4: Add Placements to Restaurant Pages

The same process applies to individual restaurant pages in the `restaurants/` directory:

1. Choose strategic locations (after hero section, mid-content, sidebar, etc.)
2. Add the placement code with your actual placement IDs
3. Use a single `showAds()` call if you have multiple placements per page

**Recommended Locations for Restaurant Pages:**
- After restaurant hero section
- Mid-content in the description section
- Before "Related Restaurants" section
- Sidebar (if you have one)

### Step 5: Test Your Placements

1. **Clear your browser cache**
2. **Visit your website**: `https://austinglutenfree.com`
3. **Verify ads appear** in the locations you configured
4. **Check mobile view** to ensure ads display correctly on all devices

### Step 6: Verify in Ezoic Dashboard

1. Check your **Ezoic Dashboard** → **Analytics** or **Ad Performance**
2. Verify impressions are being recorded
3. Monitor revenue and optimize placement positions if needed

## ⚠️ Important Notes

### DO NOT:
- ❌ Add any styling to the ad placeholder `<div>` elements
- ❌ Reserve space or add CSS to placeholder divs
- ❌ Use inline styles or classes on placeholder divs

This can result in empty white space if an ad doesn't load.

### DO:
- ✅ Place ads in natural content flow locations
- ✅ Use multiple placements per page (but combine in a single `showAds()` call)
- ✅ Test on mobile and desktop
- ✅ Monitor performance in Ezoic dashboard

## 📝 Quick Reference

**Ad Placement Code Template:**
```html
<div id="ezoic-pub-ad-placeholder-[YOUR_ID]"></div>
<script>
    ezstandalone.cmd.push(function () {
        ezstandalone.showAds([YOUR_ID]);
    });
</script>
```

**Multiple Placements (Optimized):**
```javascript
ezstandalone.cmd.push(function() {
    ezstandalone.showAds(101, 102, 103, 104);
});
```

## 🔗 Resources

- [Ezoic Implementation Documentation](https://docs.ezoic.com/docs/ezoicads/implementation/)
- [Ezoic Support](https://support.ezoic.com)
- [Ezoic Dashboard](https://www.ezoic.com)

## 🔄 Dynamic Content Handling

Your website uses **dynamic content** (restaurant cards are rendered dynamically when users search/filter). 

✅ **Already Configured:** The dynamic content handling has been implemented in `script.js`:

- When the restaurant grid updates (search/filter changes), Ezoic ads are automatically refreshed
- Uses `ezstandalone.showAds()` per [Ezoic Dynamic Content documentation](https://docs.ezoic.com/docs/ezoicads/dynamic-content/)
- Ensures ads display correctly even when content changes dynamically

**This means:**
- ✅ Ads will refresh automatically when users search or filter restaurants
- ✅ No additional configuration needed for dynamic content
- ✅ Works seamlessly with your existing dynamic rendering

**If you add ad placeholders within the dynamic content area** (like between restaurant cards), make sure to include them when calling `showAds()` with specific IDs.

### Advanced: Adding In-Content Ads Between Restaurant Cards

If you want to add ads between restaurant cards dynamically, you would:

1. Create "in-content" placements in Ezoic dashboard (e.g., IDs `108`, `109`)
2. Modify `renderRestaurants()` in `script.js` to insert ad placeholders between every N cards
3. Call `ezstandalone.showAds(108, 109)` after inserting the new placeholders

**Example for in-content ads:**
```javascript
// After inserting ad placeholders in the grid
ezstandalone.cmd.push(function () {
    ezstandalone.showAds(108, 109); // Your in-content placement IDs
});
```

## ✅ Setup Complete Checklist

- [ ] Created ad placements in Ezoic dashboard
- [ ] Got placement IDs from dashboard
- [ ] Updated placement IDs in `index.html`
- [ ] Uncommented ad placement code blocks
- [ ] Optimized with single `showAds()` call for multiple placements
- [ ] Added placements to restaurant pages (optional)
- [ ] Tested ads on live site
- [ ] Verified in Ezoic dashboard that ads are serving
- [x] Dynamic content handling configured (already done!)

Once all steps are complete, your Ezoic ads will start displaying and generating revenue! 🎉

## 📚 Additional Resources

- [Ezoic Dynamic Content Documentation](https://docs.ezoic.com/docs/ezoicads/dynamic-content/)
- [Ezoic Implementation Documentation](https://docs.ezoic.com/docs/ezoicads/implementation/)
- [Ezoic Support](https://support.ezoic.com)

