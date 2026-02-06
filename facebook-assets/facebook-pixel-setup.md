# Facebook Pixel Installation Guide

## What is Facebook Pixel?

Facebook Pixel is a piece of code that tracks visitor actions on your website. This allows you to:
- Measure ad performance
- See which ads lead to website visits
- Create retargeting campaigns for site visitors
- Build lookalike audiences
- Track conversions (page views, time on site, etc.)

**CRITICAL:** Install this BEFORE running ads so you can track results!

---

## Step 1: Create Your Pixel

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Click the green **"+"** button or "Connect Data Sources"
3. Select **"Web"**
4. Select **"Facebook Pixel"**
5. Click **"Connect"**
6. Name your pixel: **"Austin Gluten Free"**
7. Optional: Enter website URL: `austinglutenfree.com`
8. Click **"Continue"**

---

## Step 2: Get Your Pixel Code

You'll see three installation options:
1. **Partner Integration** (for platforms like Shopify, WordPress)
2. **Manually Install Code** ← Choose this one
3. **Email Instructions**

Select **"Manually Install Code Yourself"**

You'll see code that looks like this:

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID_HERE');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
```

**Copy this entire code block!**

---

## Step 3: Add Pixel to Your Website

### OPTION A: Add to All Pages at Once (RECOMMENDED)

Since most of your pages already have a similar structure, we can add it to the `<head>` section of each page.

**For Homepage (`index.html`):**

Find this section in your `<head>`:

```html
<!-- Ezoic Ad Tag -->
<script data-ezoic="1">
...
</script>
```

**Add the Facebook Pixel code RIGHT AFTER the Ezoic script (before the closing `</head>` tag):**

```html
<!-- Ezoic Ad Tag -->
<script data-ezoic="1">
...
</script>

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID_HERE'); <!-- REPLACE WITH YOUR ACTUAL PIXEL ID -->
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

</head>
```

**Repeat for:**
- All restaurant detail pages (`restaurants/*.html`)
- All guide pages (`guides/*.html`)
- Blog pages (`blog/*.html`)

---

### OPTION B: Python Script to Add Automatically

I can create a Python script that automatically adds the Facebook Pixel to all your HTML files!

Just provide your Pixel ID, and I'll add it to every page in one go.

---

## Step 4: Test Your Pixel

1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome extension

2. Visit your website: `austinglutenfree.com`

3. Click the Pixel Helper icon in your browser toolbar

4. You should see:
   - ✅ Green checkmark
   - "Facebook Pixel" with your Pixel ID
   - "PageView" event detected

5. Visit a few different pages (restaurant detail, guides, etc.)

6. Each page should trigger a new "PageView" event

---

## Step 5: Set Up Custom Events (Optional but Recommended)

Beyond basic PageViews, you can track specific actions:

### Event 1: View Restaurant Detail Page

Add this code to all restaurant detail pages (`restaurants/*.html`), in the `<script>` section:

```javascript
// Facebook Pixel - View Restaurant
fbq('track', 'ViewContent', {
  content_name: 'Restaurant Detail', // Or specific restaurant name
  content_category: 'Restaurant',
  content_type: 'restaurant_detail'
});
```

### Event 2: View Guide Page

Add this code to all guide pages (`guides/*.html`):

```javascript
// Facebook Pixel - View Guide
fbq('track', 'ViewContent', {
  content_name: 'Guide', // Or specific guide name like "Pizza Guide"
  content_category: 'Guide',
  content_type: 'guide'
});
```

### Event 3: Click External Link (Restaurant Website/Phone)

Add this to links that go to restaurant websites or trigger phone calls:

```html
<a href="https://restaurant-website.com" 
   onclick="fbq('track', 'Contact');">
  Visit Website
</a>
```

---

## Step 6: Verify Events in Facebook

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Click on your pixel name
3. Click "Test Events" tab
4. Visit your website
5. You should see events appearing in real-time!

---

## What Happens Next?

Once your pixel is installed and collecting data:

### After 1 Day:
- You can see basic website traffic
- Verify pixel is working correctly

### After 3-7 Days:
- Enough data to create Custom Audience of site visitors
- Can start retargeting campaign

### After 14+ Days:
- Enough data to create Lookalike Audience
- Can optimize campaigns based on pixel data

---

## Privacy & Legal Compliance

### Update Your Privacy Policy

Add language about Facebook Pixel tracking. Example text:

> **Facebook Pixel**
> 
> We use Facebook Pixel to measure the effectiveness of our advertising and understand how visitors use our website. Facebook may use this information to show you relevant advertisements on Facebook and Instagram.
> 
> You can opt out of Facebook advertising by adjusting your [Facebook Ad Preferences](https://www.facebook.com/ads/preferences).

### Add to Your Website Footer

You should link to your privacy policy from the footer of your website if you don't already.

---

## Troubleshooting

### Pixel Not Showing Up?
- Clear your browser cache
- Check that you copied the ENTIRE pixel code (including `<script>` tags)
- Make sure there are no typos in the Pixel ID
- Check browser console for JavaScript errors

### Pixel Shows Red X?
- Usually means duplicate pixel code (pixel installed twice)
- Or incorrect pixel ID

### Events Not Tracking?
- Make sure custom event code comes AFTER the pixel initialization code
- Check for JavaScript errors in browser console
- Verify event name spelling (case-sensitive)

---

## Quick Checklist

- [ ] Created Facebook Pixel in Events Manager
- [ ] Copied pixel code
- [ ] Added pixel code to all pages
- [ ] Tested pixel with Facebook Pixel Helper extension
- [ ] Verified events showing in Events Manager
- [ ] (Optional) Set up custom events for restaurant/guide pages
- [ ] Updated privacy policy to mention Facebook Pixel
- [ ] Ready to launch ads!

---

**Want me to create the Python script to automatically add the pixel to all your pages? Just provide your Pixel ID and I'll do it in seconds!**

