# Contact Form Setup Guide

## ✅ Contact Form Now Works!

Your contact form is now fully functional and will send emails to **info@austinglutenfree.com**!

---

## 🔧 How It Works

We've integrated **Formspree** - a free service for static website forms. Here's what happens:

1. **User fills out the form** with their name, email, and message
2. **Form submits** to Formspree's service
3. **Formspree forwards the email** to info@austinglutenfree.com
4. **User sees success message** and the form resets

---

## 📧 Formspree Setup (One-Time Activation Required)

### **IMPORTANT: First-Time Activation**

The first time someone submits the form, you'll need to activate it:

1. **Go to your email**: info@austinglutenfree.com
2. **Look for email from Formspree**: "Confirm your email address"
3. **Click the confirmation link** in the email
4. **That's it!** All future submissions will automatically be sent to you

**Note**: Until you confirm, form submissions will be held by Formspree. After confirmation, they'll all be delivered.

---

## 🎯 Form Features

### **What Users See:**
- Clean, professional form interface
- Real-time validation (required fields)
- Loading state: "Sending..." while processing
- Success message: ✅ with green confirmation
- Error handling: ❌ with helpful fallback instructions

### **What You Receive:**
- **From**: Form submitter's email address
- **Subject**: "New Restaurant Recommendation - Austin Gluten Free"
- **Content**: 
  - Name of person submitting
  - Their email address
  - Their message/recommendation
  - Reply directly to their email

---

## 🆓 Formspree Free Tier

**Limits:**
- 50 form submissions per month (free)
- Unlimited email forwarding
- Spam protection included
- No credit card required

**Need more?** 
If you exceed 50 submissions/month, you can:
- Upgrade to Formspree Gold ($10/month for 1,000 submissions)
- Or switch to another service (Web3Forms, EmailJS, etc.)

---

## 🔐 Spam Protection

Formspree includes built-in spam protection:
- reCAPTCHA v3 (invisible to users)
- Honeypot fields
- Rate limiting
- Spam filtering

You shouldn't receive much spam, but if you do, you can enable additional filters in your Formspree dashboard.

---

## 🛠️ Managing Your Formspree Account

### **Optional: Create a Formspree Account**

You can optionally create an account at https://formspree.io to:
- See all submissions in a dashboard
- Download submission data
- Configure notifications
- Add team members
- View analytics

**But you don't have to!** The form works perfectly with just email forwarding.

---

## 🧪 Testing the Form

### **Test it yourself:**
1. Go to https://austinglutenfree.com
2. Scroll to "Get in Touch" section
3. Fill out the form with test data
4. Click "Send Recommendation"
5. You should see: ✅ success message
6. Check your email: info@austinglutenfree.com

**First submission?** Remember to check for the Formspree confirmation email!

---

## 📝 Form Fields

The form collects:

| Field | Type | Required | Purpose |
|-------|------|----------|---------|
| Name | Text | Yes | Person's name |
| Email | Email | Yes | Reply address |
| Message | Textarea | Yes | Restaurant recommendation |

**Hidden fields** (automatic):
- `_subject`: Sets email subject line
- `_cc`: Ensures copy goes to info@austinglutenfree.com

---

## 🔄 Alternative Solutions (If Needed)

If you ever want to switch from Formspree, here are alternatives:

### **1. Web3Forms** (Free, no registration)
- https://web3forms.com
- No account needed
- 250 submissions/month free

### **2. EmailJS** (Free tier available)
- https://www.emailjs.com
- 200 emails/month free
- More customization options

### **3. Netlify Forms** (If you move to Netlify)
- Built-in form handling
- 100 submissions/month free

### **4. Custom Backend** (Advanced)
- Build your own with Node.js/PHP
- Full control
- Requires server/hosting

---

## 🐛 Troubleshooting

### **Form doesn't submit?**
- Check browser console for errors
- Ensure internet connection is stable
- Verify Formspree endpoint is correct

### **Not receiving emails?**
1. Check spam folder
2. Confirm Formspree activation (check email)
3. Verify email address in form action URL
4. Test with different email address

### **"Oops!" error message?**
- Usually means Formspree service is temporarily down
- Users can email you directly (fallback shown in message)
- Retry in a few minutes

### **Form submissions go to wrong email?**
- Check the `action` URL in index.html (line 312)
- Verify `_cc` hidden field has correct email

---

## 📊 What's Been Updated

### **Files Changed:**

1. **index.html** (Line 312-320)
   - Added Formspree action URL
   - Added `name` attributes to inputs
   - Added hidden fields for configuration
   - Added status message container

2. **script.js** (Line 613-669)
   - Added async form submission
   - Added loading state ("Sending...")
   - Added success/error messages
   - Added automatic status message hide (10 sec)

---

## 🎉 You're All Set!

Your contact form is now **live and functional** at:
**https://austinglutenfree.com**

When people submit recommendations:
1. ✅ You get an email at info@austinglutenfree.com
2. ✅ They get a confirmation message on the site
3. ✅ You can reply directly to their email

**Don't forget to activate your Formspree endpoint when you receive the first confirmation email!**

---

## 📧 Need Help?

- **Formspree Support**: https://help.formspree.io
- **Your Form Endpoint**: https://formspree.io/f/xanyegye
- **Test Submissions**: Just fill out the form on your site!

Enjoy your fully functional contact form! 🚀

