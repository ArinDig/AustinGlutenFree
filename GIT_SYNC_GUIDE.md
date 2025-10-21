# Git Sync Guide

## ✅ Git Repository Setup Complete!

Your local project is now connected to your GitHub repository at:
**https://github.com/arindig/AustinGlutenFree**

Website: **https://arindig.github.io/AustinGlutenFree/**

---

## 🚀 Ready to Push!

Everything is set up and ready. To push your changes to GitHub, run:

```bash
git push -u origin main
```

**Note:** You may be prompted for your GitHub credentials or need to authenticate.

---

## 📝 What's Been Set Up

### 1. Git Initialized
- ✅ Repository initialized in your project folder
- ✅ All files added and committed
- ✅ Remote origin configured

### 2. Files Committed (82 files)
- ✅ Main website files (index.html, styles.css, script.js)
- ✅ All 26 restaurant locations
- ✅ Professional food photography (78+ images)
- ✅ Documentation files (README, guides, etc.)
- ✅ .gitignore configured

### 3. Commit Message
```
"Update Austin Gluten Free directory: 26 locations, multiple chains, working Call & Directions buttons"
```

---

## 🔄 Future Updates - How to Sync

After you make changes to your website, sync them with:

```bash
# 1. Check what changed
git status

# 2. Add your changes
git add .

# 3. Commit with a message
git commit -m "Description of your changes"

# 4. Push to GitHub
git push
```

---

## 📋 Common Git Commands

### Check Status
```bash
git status
```
See what files have changed

### View History
```bash
git log --oneline
```
See your commit history

### Pull Latest Changes
```bash
git pull
```
Get latest changes from GitHub (if you edit online)

### Create a Branch
```bash
git checkout -b new-feature
```
Work on features without affecting main

---

## 🌐 GitHub Pages Deployment

Your website is set up for GitHub Pages. After pushing:

1. Go to: https://github.com/arindig/AustinGlutenFree
2. Navigate to **Settings** → **Pages**
3. Ensure source is set to **main branch**
4. Your site will be live at: https://arindig.github.io/AustinGlutenFree/

**Note:** It may take a few minutes for changes to appear on the live site after pushing.

---

## 🔐 Authentication

If prompted for credentials, you have options:

### Option 1: Personal Access Token (Recommended)
1. Go to GitHub.com → Settings → Developer Settings → Personal Access Tokens
2. Generate a new token with "repo" permissions
3. Use the token as your password when prompted

### Option 2: SSH Keys
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub
cat ~/.ssh/id_ed25519.pub
# Copy and add to GitHub Settings → SSH Keys
```

Then use SSH URL:
```bash
git remote set-url origin git@github.com:arindig/AustinGlutenFree.git
```

---

## 📦 What's Included in This Commit

### Core Files
- index.html (main page with 26 restaurants)
- styles.css (complete styling)
- script.js (all functionality)
- README.md (project documentation)

### Documentation
- ALL_LOCATIONS_ADDED.md
- CLEANED_RESTAURANT_LIST.md
- DIRECTIONS_UPDATE.md
- PHONE_NUMBERS_GUIDE.md
- VERIFY_DATA.md
- And more!

### Images
- Hero background image
- 78+ restaurant images (26 locations × 3 photos each)
- Professional food photography

### Features
- ✅ 26 restaurant locations
- ✅ Multiple locations for chains (Picnik, Flower Child, True Food Kitchen, Snap Kitchen)
- ✅ Working Call buttons (tel: links)
- ✅ Working Directions buttons (Google Maps integration)
- ✅ Clickable email link
- ✅ Search & filter functionality
- ✅ Mobile responsive design
- ✅ Yelp-like image galleries
- ✅ Copyright updated to 2025

---

## 🎯 Next Steps

1. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

2. **Verify on GitHub:**
   Visit https://github.com/arindig/AustinGlutenFree

3. **Check Live Site:**
   Visit https://arindig.github.io/AustinGlutenFree/
   (May take a few minutes to update)

4. **Update Phone Numbers:**
   As you verify real restaurant phone numbers, update script.js and commit changes

5. **Add More Restaurants:**
   Add new restaurants to script.js, commit, and push

---

## 💡 Tips

- **Commit Often:** Make small, frequent commits with clear messages
- **Test Locally First:** Always test changes at http://localhost:8000 before pushing
- **Branch for Big Changes:** Create a branch for major updates
- **Pull Before Push:** If editing from multiple places, pull first

---

## 🆘 Troubleshooting

### "Permission denied"
→ Set up SSH keys or use Personal Access Token

### "Repository not found"
→ Check repository name and your GitHub username

### "Changes would be overwritten"
→ Run `git stash` then `git pull`

### "Merge conflict"
→ Resolve conflicts in files, then `git add .` and `git commit`

---

## 📞 Quick Reference

**Push changes:**
```bash
git add .
git commit -m "Your message"
git push
```

**Repository:** https://github.com/arindig/AustinGlutenFree  
**Website:** https://arindig.github.io/AustinGlutenFree/  
**Branch:** main

Your Austin Gluten Free directory is ready to go live! 🚀

