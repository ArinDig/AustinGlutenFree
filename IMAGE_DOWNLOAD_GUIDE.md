# Image Download Guide for austinglutenfree.com

## 🎯 **Quick Manual Method (Recommended)**

### **Step 1: Visit Your Website**
1. Open your browser and go to `austinglutenfree.com`
2. Navigate through your website to find the images you want

### **Step 2: Download Images**
1. **Right-click** on any image you want to use
2. Select **"Save image as..."**
3. Save to the appropriate folder:
   - `images/` for general images
   - `images/restaurants/` for restaurant photos
   - `images/logos/` for logos and branding

### **Step 3: Organize Images**
- **Hero Background**: Save as `images/hero-background.jpg`
- **Restaurant Photos**: Save as `images/restaurants/1-1.jpg`, `1-2.jpg`, etc.
- **Logo**: Save as `images/logos/logo.png`

## 🤖 **Automated Method (Python Script)**

### **Option A: Use the Python Script**
```bash
# Install required packages
pip install -r requirements.txt

# Run the image downloader
python download_images.py
```

### **Option B: Browser Developer Tools**
1. **Open austinglutenfree.com** in Chrome/Firefox
2. **Press F12** to open Developer Tools
3. **Go to Network tab**
4. **Refresh the page**
5. **Filter by "Images"**
6. **Right-click and save** the images you need

## 📁 **Image Organization Structure**

```
images/
├── hero-background.jpg          # Main hero image
├── restaurants/                 # Restaurant photos
│   ├── 1-1.jpg                 # Wild Wood Bakehouse - Main
│   ├── 1-2.jpg                 # Wild Wood Bakehouse - Interior
│   ├── 1-3.jpg                 # Wild Wood Bakehouse - Food
│   ├── 2-1.jpg                 # Picnik - Main
│   ├── 2-2.jpg                 # Picnik - Interior
│   ├── 2-3.jpg                 # Picnik - Food
│   └── ...                     # Continue for all restaurants
├── logos/                      # Brand assets
│   ├── logo.png                # Main logo
│   ├── favicon.ico             # Website favicon
│   └── badge-certified.png     # Safety badges
└── ui/                         # UI elements
    ├── pattern-bg.png          # Background patterns
    └── divider.png             # Section dividers
```

## 🎨 **Recommended Images to Download**

### **Hero Section:**
- Main hero background image
- Any overlay graphics or patterns

### **Restaurant Photos:**
- **Main Photo**: Restaurant exterior or interior
- **Food Photos**: Signature gluten-free dishes
- **Atmosphere**: Dining area, kitchen, or staff

### **Brand Assets:**
- Main Austin Gluten Free logo
- Favicon (if you have one)
- Safety certification badges
- Any custom icons or graphics

## 🔧 **Image Optimization Tips**

### **File Sizes:**
- **Hero Background**: 1920x1080px (under 500KB)
- **Restaurant Photos**: 400x300px (under 200KB each)
- **Logos**: 200x100px (under 50KB)

### **Formats:**
- **Photos**: Use JPG for photographs
- **Logos**: Use PNG for logos with transparency
- **Icons**: Use SVG when possible

### **Compression:**
- Use tools like TinyPNG or ImageOptim
- Maintain quality while reducing file size
- Test loading speed on mobile devices

## 🚀 **Quick Start Commands**

### **Install Python Dependencies:**
```bash
pip install requests beautifulsoup4 lxml
```

### **Run the Downloader:**
```bash
python download_images.py
```

### **Manual Download Checklist:**
- [ ] Visit austinglutenfree.com
- [ ] Download hero background image
- [ ] Download restaurant photos (3 per restaurant)
- [ ] Download logo and branding assets
- [ ] Organize images in correct folders
- [ ] Test website with new images
- [ ] Optimize image file sizes

## 📱 **Testing Your Images**

### **After Downloading:**
1. **Open index.html** in your browser
2. **Check hero section** for background image
3. **Verify restaurant cards** show photos correctly
4. **Test mobile responsiveness**
5. **Check loading speed**

### **Troubleshooting:**
- **Images not showing**: Check file paths and names
- **Slow loading**: Compress images further
- **Mobile issues**: Test on different screen sizes
- **Broken images**: Check file formats and permissions

## 🎯 **Pro Tips**

### **Best Practices:**
- **High Quality**: Use the highest resolution images available
- **Consistent Sizing**: Keep restaurant photos similar dimensions
- **Fast Loading**: Compress images for web performance
- **Mobile First**: Test on mobile devices first
- **Backup**: Keep original high-res images as backup

### **Image Sources:**
- **Your Website**: Primary source for brand consistency
- **Restaurant Websites**: Additional photos from restaurant sites
- **Stock Photos**: Professional food photography if needed
- **Social Media**: Instagram/Facebook photos from restaurants

---

**Ready to download your images and make the website look amazing!** 🎉
