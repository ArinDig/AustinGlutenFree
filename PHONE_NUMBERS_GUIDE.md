# Phone Numbers Guide

## Current Status

The Austin Gluten Free directory currently has **placeholder phone numbers** (512-555-0123, etc.) that won't work for actual calling. While the Call button functionality is working perfectly, we need real phone numbers for it to be useful.

## Phone Numbers to Research

Here's a list of restaurants that need real phone numbers:

### Confirmed Austin Restaurants (Research Needed)
1. **Wild Wood Bakehouse** - Placeholder: (512) 555-0123
2. **Picnik** - Placeholder: (512) 555-0124  
   - Confirmed: 100% gluten-free restaurant
3. **Casa de Luz** - Placeholder: (512) 555-0125
4. **True Food Kitchen** - Placeholder: (512) 555-0126
5. **Bouldin Creek Cafe** - Placeholder: (512) 555-0127
6. **Koriente** - Placeholder: (512) 555-0128
7. **The Steeping Room** - Placeholder: (512) 555-0129
8. **Vinaigrette** - Placeholder: (512) 555-0130
9. **Snap Kitchen** - Placeholder: (512) 555-0131
10. **The Beer Plant** - Placeholder: (512) 555-0132
11. **Flower Child** - Placeholder: (512) 555-0133
12. **Sweet Ritual** - Placeholder: (512) 555-0134
13. **Bird, Bird Biscuit** - Placeholder: (512) 555-0135
    - Located in East Austin
14. **Salt Traders Coastal Cooking** - Placeholder: (512) 555-0143
    - Confirmed: 100% dedicated gluten-free seafood
15. **Bom Bakeshop** - Placeholder: (512) 555-0144
    - Confirmed: 100% gluten-free bakery, mochi donuts
16. **Zucchini Kill** - Placeholder: (512) 555-0145
    - Confirmed: Vegan & gluten-free bakery
17. **Ka-Prow** - Placeholder: (512) 555-0146
    - Thai cuisine with GF options
18. **Dia's Market** - Placeholder: (512) 555-0147
    - Specialty grocery with GF deli
19. **Uchi** - Placeholder: (512) 555-0148
    - High-end sushi restaurant
20. **Odd Duck** - Placeholder: (512) 555-0149
    - Farm-to-table with GF menu

## How to Update Phone Numbers

### Method 1: Manual Research
1. Visit each restaurant's official website
2. Look for contact information or "Contact Us" page
3. Note the phone number
4. Open `script.js` in the project
5. Find the restaurant by name
6. Replace the placeholder phone number with the real one

### Method 2: Google Maps
1. Search for "[Restaurant Name] Austin TX" on Google Maps
2. Click on the restaurant listing
3. The phone number will be displayed
4. Update in `script.js`

### Method 3: Direct Contact
1. Visit restaurants in person
2. Ask for their official phone number
3. Verify they're comfortable being listed in the directory
4. Update in `script.js`

## Example: How to Update a Phone Number

Open `script.js` and find the restaurant:

```javascript
{
    id: 13,
    name: "Bird, Bird Biscuit",
    // ... other fields ...
    phone: "(512) 555-0135",  // <- Replace this
}
```

Change to:

```javascript
{
    id: 13,
    name: "Bird, Bird Biscuit",
    // ... other fields ...
    phone: "(512) 123-4567",  // <- Real phone number
}
```

## Important Notes

- **Verify Permission**: Make sure restaurants are okay with being listed
- **Keep Updated**: Phone numbers can change - check periodically
- **Test Links**: After updating, test the Call button on mobile devices
- **Format**: Keep format as (512) XXX-XXXX for consistency

## Resources

- **Google Maps**: https://www.google.com/maps
- **Yelp**: https://www.yelp.com/austin
- **Restaurant Websites**: Search "[Restaurant Name] Austin" online

## Priority Restaurants

These are confirmed 100% gluten-free/celiac-safe - prioritize getting their numbers:

1. **Salt Traders Coastal Cooking** - 100% GF seafood
2. **Picnik** - 100% GF restaurant
3. **Bom Bakeshop** - 100% GF bakery
4. **Zucchini Kill** - 100% GF & vegan bakery

These are the safest options for celiacs and should be verified first!

