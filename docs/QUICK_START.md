# Quick Start Guide

Get your landing page up and running in 5 minutes.

## 1. Download/Clone the Template

All files are in your project directory:
- `index.html` - Main HTML file
- `styles.css` - Main styles
- `animations.css` - Animations and utilities
- `script.js` - Interactive features

## 2. Open in Browser

Double-click `index.html` or right-click → Open with Browser

Your landing page is now live locally!

## 3. Customize in 3 Steps

### Step 1: Update Brand Name (2 minutes)

Open `index.html` and find:

```html
<a href="#" class="logo">MyBrand</a>
```

Change to your company name:

```html
<a href="#" class="logo">YourBrand</a>
```

### Step 2: Update Colors (2 minutes)

Open `styles.css` and edit the variables at the top:

```css
:root {
    --primary-color: #0066cc;      /* Change this to your brand color */
    --secondary-color: #00d4ff;    /* Accent color */
    --accent-color: #ff6b35;       /* CTA color */
}
```

### Step 3: Update Content (5 minutes)

Find these sections in `index.html` and update:

- **Hero Section** - Main headline and subtitle
- **Features Section** - Your 6 key features
- **Pricing Section** - Your pricing plans
- **Testimonials** - Customer testimonials
- **Footer** - Your company info

## 4. Deploy (Choose One)

### Vercel (Easiest)

1. Go to https://vercel.com
2. Click "Deploy"
3. Select "Other" → Git
4. Upload your files
5. Click Deploy
6. Your site is live! 🎉

### Netlify

1. Go to https://app.netlify.com
2. Drag and drop your folder
3. Your site is live! 🎉

### GitHub Pages

1. Create GitHub account (free)
2. Create new repository
3. Upload files
4. Go to Settings → Pages
5. Select "Deploy from a branch"
6. Your site is live at `yourusername.github.io/repo-name` 🎉

### Traditional Hosting

1. Get FTP credentials from your host
2. Upload all files via FTP
3. Your site is live! 🎉

## 5. Make It SEO Friendly (5 minutes)

Update meta tags in `index.html`:

```html
<meta name="description" content="Your unique value proposition here">
<meta property="og:title" content="Your Product Name">
<meta property="og:description" content="Your description here">
```

## 6. Add Your Domain (Optional)

- Buy domain from Namecheap, GoDaddy, or Google Domains
- Point it to your hosting provider
- Update email address in footer

## Common Customizations

### Change Hero Image

Replace this line in `index.html`:

```html
<img src="https://via.placeholder.com/500x400" alt="Dashboard preview...">
```

With your image:

```html
<img src="your-image.jpg" alt="Your description">
```

### Add a Form

Create a Formspree account (free):

1. Go to https://formspree.io
2. Create new form
3. Get your form ID
4. Find `<form>` tag and update `action`:

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
    <!-- form fields -->
</form>
```

### Change Number of Features

Edit `features-grid` in `index.html`. Each feature is:

```html
<article class="feature-card">
    <div class="feature-card__icon">🚀</div>
    <h3>Feature Title</h3>
    <p>Feature description</p>
</article>
```

Copy/paste and edit as needed.

## Testing Before Launch

```
□ Open on phone - Does it look good?
□ Test all links - Do they work?
□ Test buttons - Do they work?
□ Check forms - Do they submit?
□ Test navigation - Can you navigate easily?
□ Google search - Can you find your site?
```

## Troubleshooting

### Images not showing
- Check file paths are correct
- Use absolute URLs: `https://example.com/image.jpg`
- Ensure image extensions are correct (.jpg, .png, .webp)

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Check CSS file is linked correctly in HTML

### Forms not submitting
- Verify Formspree form ID is correct
- Check form action URL matches
- Test in incognito/private mode

### Mobile looks broken
- Ensure viewport meta tag is present: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Test on real phone, not just browser DevTools

## Next Steps

1. **Add more content** - Refer to CUSTOMIZATION.md
2. **Improve performance** - Follow PERFORMANCE.md
3. **Ensure accessibility** - Check ACCESSIBILITY.md
4. **Set up analytics** - Add Google Analytics
5. **Get feedback** - Share with team and refine

## File Reference

| File | Purpose |
|------|---------|
| `index.html` | Page structure and content |
| `styles.css` | Layout and main styles |
| `animations.css` | Animations and utilities |
| `script.js` | Interactive features |
| `README.md` | Full documentation |
| `ACCESSIBILITY.md` | Accessibility guidelines |
| `CUSTOMIZATION.md` | How to customize |
| `PERFORMANCE.md` | Performance optimization |
| `QUICK_START.md` | This file |

## Support Resources

- **General Help**: https://developer.mozilla.org/
- **CSS Help**: https://css-tricks.com/
- **JavaScript Help**: https://javascript.info/
- **Design Help**: https://www.designsystems.com/
- **SEO Help**: https://moz.com/beginners-guide-to-seo

## 🎯 You're Ready!

Your landing page is ready to launch. Start with the 5-minute customization and deploy!

Questions? Refer to the other documentation files or search the web for specific help.

**Good luck! 🚀**
