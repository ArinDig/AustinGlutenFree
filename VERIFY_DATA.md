# Data Verification Guide

## ⚠️ IMPORTANT: Current Data Status

### 📞 **Phone Numbers: ALL PLACEHOLDERS**
All phone numbers are currently **fake placeholder numbers** (512-555-xxxx series). These will NOT work for actual calling.

### 📍 **Addresses: MOSTLY PLACEHOLDERS**
Only 10 out of 30 restaurants have addresses added, and these are **placeholder addresses** that need verification.

---

## 📋 Current Data Status

### ✅ Restaurants WITH Addresses (Need Verification):
1. **Wild Wood Bakehouse**
   - Address: 3016 Guadalupe St, Austin, TX 78705
   - Phone: (512) 555-0123 ❌ PLACEHOLDER
   - Status: ⚠️ NEEDS VERIFICATION

2. **Picnik**
   - Address: 1720 Barton Springs Rd, Austin, TX 78704
   - Phone: (512) 555-0124 ❌ PLACEHOLDER
   - Status: ⚠️ NEEDS VERIFICATION
   - Note: Confirmed 100% GF restaurant

3. **Casa de Luz**
   - Address: 1000 E 11th St, Austin, TX 78702
   - Phone: (512) 555-0125 ❌ PLACEHOLDER
   - Status: ⚠️ NEEDS VERIFICATION

4. **True Food Kitchen**
   - Address: 3600 N Capital of Texas Hwy, Austin, TX 78746
   - Phone: (512) 555-0126 ❌ PLACEHOLDER
   - Status: ⚠️ NEEDS VERIFICATION

5. **Bouldin Creek Cafe**
   - Address: 1900 S 1st St, Austin, TX 78704
   - Phone: (512) 555-0127 ❌ PLACEHOLDER
   - Status: ⚠️ NEEDS VERIFICATION

6. **Koriente**
   - Address: 311 Colorado St, Austin, TX 78701
   - Phone: (512) 555-0128 ❌ PLACEHOLDER
   - Status: ⚠️ NEEDS VERIFICATION

7. **The Steeping Room**
   - Address: 4400 N Lamar Blvd #120, Austin, TX 78756
   - Phone: (512) 555-0129 ❌ PLACEHOLDER
   - Status: ⚠️ NEEDS VERIFICATION

8. **Salt Traders Coastal Cooking**
   - Address: 409 W 2nd St, Austin, TX 78701
   - Phone: (512) 555-0143 ❌ PLACEHOLDER
   - Status: ⚠️ NEEDS VERIFICATION
   - Note: ⭐ 100% DEDICATED GF - PRIORITY TO VERIFY

9. **Bom Bakeshop**
   - Address: 4919 Airport Blvd #102, Austin, TX 78751
   - Phone: (512) 555-0144 ❌ PLACEHOLDER
   - Status: ⚠️ NEEDS VERIFICATION
   - Note: ⭐ 100% DEDICATED GF - PRIORITY TO VERIFY

10. **Uchi**
    - Address: 801 S Lamar Blvd, Austin, TX 78704
    - Phone: (512) 555-0148 ❌ PLACEHOLDER
    - Status: ⚠️ NEEDS VERIFICATION

### ❌ Restaurants WITHOUT Addresses (20 restaurants):
11. Vinaigrette
12. Snap Kitchen
13. The Beer Plant
14. Flower Child
15. Sweet Ritual
16. Bird, Bird Biscuit
17-30. (Various duplicates and other restaurants)

---

## 🎯 Verification Priority

### Priority 1: 100% Dedicated Gluten-Free Restaurants
These are celiac-safe and should be verified first:

1. **Salt Traders Coastal Cooking** (100% GF Seafood)
   - Current Address: 409 W 2nd St, Austin, TX 78701
   - Current Phone: (512) 555-0143
   - ⚠️ VERIFY: Address, Phone, Hours

2. **Picnik** (100% GF Restaurant)
   - Current Address: 1720 Barton Springs Rd, Austin, TX 78704
   - Current Phone: (512) 555-0124
   - ⚠️ VERIFY: Address, Phone, Hours

3. **Bom Bakeshop** (100% GF Bakery)
   - Current Address: 4919 Airport Blvd #102, Austin, TX 78751
   - Current Phone: (512) 555-0144
   - ⚠️ VERIFY: Address, Phone, Hours

4. **Zucchini Kill** (Vegan & GF Bakery)
   - Current Address: MISSING
   - Current Phone: (512) 555-0145
   - ⚠️ NEEDS: Address, Real Phone, Hours

### Priority 2: Well-Known Austin Restaurants
5. **Uchi** (High-end sushi)
6. **True Food Kitchen** (Chain with GF focus)
7. **Bouldin Creek Cafe** (Popular vegetarian cafe)

### Priority 3: Remaining Restaurants

---

## 📝 How to Verify Data

### Method 1: Google Search
1. Search "[Restaurant Name] Austin TX"
2. Check Google Maps listing for:
   - Address
   - Phone number
   - Hours
   - Website

### Method 2: Restaurant Websites
1. Visit official website (listed in script.js)
2. Look for "Contact" or "Locations" page
3. Note down verified information

### Method 3: Call/Visit
1. Call the placeholder number won't work, so search online first
2. Or visit in person to verify
3. Ask permission to be listed in your directory

### Method 4: Yelp/Google Reviews
1. Check Yelp listing
2. Verify address and phone
3. Read recent reviews to confirm still open

---

## ✏️ How to Update Verified Data

### Update Address:
```javascript
// In script.js, find the restaurant and add/update:
address: "123 Real Street, Austin, TX 78701",
```

### Update Phone Number:
```javascript
// In script.js, find the restaurant and update:
phone: "(512) 123-4567",  // Replace 555-xxxx with real number
```

---

## 🚨 Critical Issues to Check

1. **Restaurant Still Open?**
   - Some restaurants may have closed
   - Check Google Maps / Yelp for current status

2. **Multiple Locations?**
   - Some restaurants (Picnik, Snap Kitchen, True Food Kitchen) may have multiple locations
   - Pick the most convenient or list multiple entries

3. **Correct GF Status?**
   - Verify which restaurants are:
     - 100% dedicated GF
     - Have extensive GF menu
     - Have some GF options
   
4. **Duplicates?**
   - I noticed there might be duplicate entries (restaurants 5-7 duplicated as 14-16)
   - Need to clean these up

---

## 📊 Summary

- **Total Restaurants**: 30
- **With Addresses**: 10 (all need verification)
- **Without Addresses**: 20
- **All Phone Numbers**: PLACEHOLDERS (none verified)
- **Priority to Verify**: 4 dedicated GF restaurants

---

## 🎯 Recommended Next Steps

1. **Start with Priority 1**: Verify the 4 dedicated GF restaurants
2. **Use Google Maps**: Quickest way to get addresses and phone numbers
3. **Update script.js**: Replace placeholder data with verified info
4. **Test**: Check Call and Directions buttons work with real data
5. **Remove Duplicates**: Clean up any duplicate restaurant entries

Would you like me to help you look up specific restaurants right now?

