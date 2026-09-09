# Troubleshooting & FAQ Guide

Common issues and how to fix them quickly.

## Table of Contents

1. [Display & Layout Issues](#display--layout-issues)
2. [Functionality Issues](#functionality-issues)
3. [Performance Issues](#performance-issues)
4. [Deployment Issues](#deployment-issues)
5. [Frequently Asked Questions](#frequently-asked-questions)

---

## Display & Layout Issues

### Problem: Page looks broken on mobile

**Symptoms:** Layout shifts, text too small, buttons unclickable

**Solutions:**
1. Check viewport meta tag in `index.html`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. Test with browser DevTools (F12 → Device toolbar)

3. Check media queries in `styles.css` are working:
   ```css
   @media (max-width: 768px) {
       /* Styles for tablets */
   }
   ```

4. Ensure buttons are 44px+ (for touch):
   ```css
   .btn {
       padding: 1rem 2rem;  /* At least 44px height */
   }
   ```

### Problem: Images are broken or not showing

**Symptoms:** Gray box with question mark, or broken image icon

**Solutions:**
1. Check image file exists and path is correct:
   ```html
   <!-- Check file name and path -->
   <img src="dashboard.jpg" alt="description">
   ```

2. Use full URL if hosted separately:
   ```html
   <img src="https://example.com/images/dashboard.jpg" alt="description">
   ```

3. Check file extension matches:
   - `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.gif`

4. Verify image permissions on server

5. Check browser console (F12) for errors

### Problem: Colors are wrong or not applying

**Symptoms:** CSS custom properties not working, wrong colors

**Solutions:**
1. Clear browser cache:
   - Windows: Ctrl + Shift + Delete
   - Mac: Cmd + Shift + Delete

2. Hard refresh page:
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R

3. Check CSS is linked correctly in `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   <link rel="stylesheet" href="animations.css">
   ```

4. Verify CSS variables are defined in `styles.css`:
   ```css
   :root {
       --primary-color: #0066cc;  /* Check this exists */
   }
   ```

5. Check for typos in color values (should be #RGB or valid color name)

### Problem: Fonts look different/default

**Symptoms:** Page using system fonts, not custom fonts

**Solutions:**
1. Check font import in `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
   ```

2. Verify font is applied in CSS:
   ```css
   body {
       font-family: 'Inter', sans-serif;
   }
   ```

3. Check font name matches exactly (case-sensitive)

4. Wait 5 seconds for Google Fonts to load

5. Check if font service (Google Fonts) is accessible in your region

### Problem: Layout is too wide or doesn't fit screen

**Symptoms:** Horizontal scrollbar appears, content goes off-screen

**Solutions:**
1. Check max-width on container:
   ```css
   .container {
       max-width: 1200px;  /* Make sure this exists */
   }
   ```

2. Check padding on body/html doesn't overflow

3. Verify images have max-width: 100%

4. Test with browser DevTools responsiveness

### Problem: Text is too small on mobile

**Symptoms:** Can't read without zooming

**Solutions:**
1. Check base font size:
   ```css
   body {
       font-size: 16px;  /* Minimum for readability */
   }
   ```

2. Verify no zoom prevention:
   ```html
   <!-- DON'T use this -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
   ```

3. Check heading sizes scale down on mobile:
   ```css
   @media (max-width: 768px) {
       h1 { font-size: 2rem; }  /* Smaller on mobile */
   }
   ```

---

## Functionality Issues

### Problem: Links don't work

**Symptoms:** Clicking links does nothing

**Solutions:**
1. Check href attribute exists and is correct:
   ```html
   <a href="#features">Go to features</a>  <!-- # for anchor links -->
   <a href="https://example.com">External</a>  <!-- Full URL for external -->
   ```

2. Verify anchor ID exists:
   ```html
   <a href="#pricing">View pricing</a>
   <!-- ... -->
   <section id="pricing">Pricing</section>  <!-- ID must match -->
   ```

3. Check for typos in URLs

4. Verify links don't have `href="#"` (goes to top)

5. Check browser console (F12) for JavaScript errors

### Problem: Buttons don't do anything

**Symptoms:** Buttons click but nothing happens

**Solutions:**
1. Check button has `type="button"` or `type="submit"`:
   ```html
   <button type="button">Click me</button>
   ```

2. Verify onclick handler exists (if needed):
   ```html
   <button type="button" onclick="doSomething()">Click me</button>
   ```

3. Check for JavaScript errors (F12 → Console)

4. Verify script.js is loaded (F12 → Sources)

5. Check button isn't disabled:
   ```html
   <!-- Remove if present -->
   <button disabled>Can't click</button>
   ```

### Problem: Forms don't submit

**Symptoms:** Clicking submit does nothing or page reloads

**Solutions:**
1. Check form has correct action:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

2. Verify form ID in Formspree matches

3. Check required fields are filled:
   ```html
   <input type="email" name="email" required>  <!-- required attribute -->
   ```

4. Test in incognito mode (clears cookies/cache)

5. Check browser console for errors

6. Verify form service (Formspree, etc.) is working

### Problem: Smooth scrolling doesn't work

**Symptoms:** Page jumps instead of scrolling smoothly

**Solutions:**
1. Check CSS smooth scroll is enabled:
   ```css
   html {
       scroll-behavior: smooth;
   }
   ```

2. Ensure script.js is loaded and initialized

3. Check for JavaScript errors (F12 → Console)

4. Test in different browsers (some older browsers don't support smooth scroll)

### Problem: Mobile menu doesn't toggle

**Symptoms:** Hamburger menu icon doesn't open/close menu

**Solutions:**
1. Check script.js is loaded:
   ```html
   <script src="script.js" defer></script>
   ```

2. Check for JavaScript errors (F12 → Console)

3. Verify menu HTML structure is correct

4. Test in incognito mode

5. Check if JavaScript is enabled in browser

### Problem: Animations not showing

**Symptoms:** Elements appear instantly, no fade-in or slide effects

**Solutions:**
1. Check animations.css is linked:
   ```html
   <link rel="stylesheet" href="animations.css">
   ```

2. Verify CSS animations are defined in animations.css

3. Check user hasn't enabled "reduce motion":
   ```css
   @media (prefers-reduced-motion: reduce) {
       /* Animations disabled here */
   }
   ```

4. Clear cache (animations might be cached)

---

## Performance Issues

### Problem: Page loads slowly

**Symptoms:** Takes > 3 seconds to load

**Solutions:**
1. Run Lighthouse (F12 → Lighthouse):
   - Performance tab shows where time is spent
   - Follow recommendations

2. Compress images:
   - Use https://tinypng.com
   - Convert to WebP format
   - Reduce dimensions

3. Minify CSS and JavaScript:
   ```bash
   csso styles.css -o styles.min.css
   terser script.js -o script.min.js
   ```

4. Enable browser caching (server-side)

5. Use a CDN (Cloudflare, AWS CloudFront)

6. Remove unused CSS (see PERFORMANCE.md)

### Problem: Images take forever to load

**Symptoms:** Blank spaces where images should be for several seconds

**Solutions:**
1. Compress images (see above)

2. Use lazy loading:
   ```html
   <img src="image.jpg" loading="lazy">
   ```

3. Serve responsive sizes:
   ```html
   <img srcset="small.jpg 480w, large.jpg 1200w" src="large.jpg">
   ```

4. Use modern formats (WebP):
   ```html
   <picture>
       <source srcset="image.webp" type="image/webp">
       <img src="image.jpg">
   </picture>
   ```

### Problem: Page feels janky or sluggish

**Symptoms:** Scrolling is not smooth, animations stutter

**Solutions:**
1. Check animations use GPU-accelerated properties (transform, opacity):
   ```css
   /* Good */
   transform: translateY(10px);
   opacity: 0.5;

   /* Bad - causes repaints */
   top: 10px;
   left: 50px;
   ```

2. Reduce animation complexity

3. Close other browser tabs/apps

4. Update browser to latest version

5. Test on different devices

---

## Deployment Issues

### Problem: Site shows "Not Found" error

**Symptoms:** 404 error when visiting domain

**Solutions:**
1. Verify files were uploaded:
   - Check FTP/file manager
   - Ensure all files are in root directory
   - Especially `index.html`

2. Check domain points to correct server:
   - Use `nslookup yourdomain.com`
   - Verify DNS records

3. Wait 24-48 hours for DNS propagation

4. Check hosting provider status page

5. Contact hosting support if files are there

### Problem: CSS/JS files not loading

**Symptoms:** Page has no styling, buttons don't work

**Solutions:**
1. Check file paths are absolute:
   ```html
   <!-- Good -->
   <link rel="stylesheet" href="/styles.css">
   <script src="/script.js"></script>

   <!-- Bad - relative path -->
   <link rel="stylesheet" href="styles.css">
   ```

2. Verify files were uploaded to server

3. Check file permissions (should be readable)

4. Hard refresh (Ctrl+Shift+R)

5. Check browser console (F12) for 404 errors

### Problem: HTTPS not working

**Symptoms:** Site shows "Not Secure" warning

**Solutions:**
1. Verify SSL certificate is installed (most hosts do this automatically)

2. Check if HTTPS is enabled in hosting settings

3. Update links to use https://:
   ```html
   <!-- Use absolute HTTPS URLs -->
   <img src="https://yourdomain.com/image.jpg">
   ```

4. Add redirect from HTTP to HTTPS (ask hosting provider)

5. Test with https://www.ssllabs.com/ssltest/

### Problem: Forms not submitting after deployment

**Symptoms:** Forms work locally but not on live site

**Solutions:**
1. Check Formspree form ID is correct:
   ```html
   <form action="https://formspree.io/f/XXXXX" method="POST">
   ```

2. Verify form is actually submitting (check console)

3. Test with different email provider

4. Check spam folder for Formspree confirmation

5. Verify domain is verified in Formspree settings

### Problem: Different layout on live site vs local

**Symptoms:** Page looks different after deployment

**Solutions:**
1. Check viewport meta tag:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. Verify CSS files uploaded correctly

3. Check for absolute vs relative paths

4. Clear CDN cache (if using one)

5. Test in incognito mode

---

## Frequently Asked Questions

### Q: How do I change the colors?
**A:** Edit the CSS variables in `styles.css` at the top:
```css
:root {
    --primary-color: #0066cc;  /* Change these */
    --secondary-color: #00d4ff;
}
```

### Q: Can I use this template with my domain?
**A:** Yes! See [DEPLOYMENT.md](DEPLOYMENT.md) for instructions on:
- Buying a domain
- Pointing domain to your host
- Setting up HTTPS

### Q: Do I need coding skills?
**A:** Basic HTML knowledge helps. You only need to:
1. Edit text in `index.html`
2. Change colors in `styles.css`
3. Deploy to hosting

### Q: Is this mobile responsive?
**A:** Yes! Test on your phone. The template uses mobile-first responsive design.

### Q: Can I use this commercially?
**A:** Yes, absolutely! Feel free to use for client projects.

### Q: How long before I see Google rankings?
**A:** 3-6 months typically. See [SEO_MARKETING.md](SEO_MARKETING.md) for strategies.

### Q: What's the difference between the CSS files?
**A:** 
- `styles.css` - Layout, typography, main components
- `animations.css` - Animations, interactions, utilities

### Q: Do I need to pay for hosting?
**A:** You have free options:
- Netlify (drag and drop, free tier)
- Vercel (free tier)
- GitHub Pages (free)

### Q: Why is my page slow?
**A:** Usually images. See PERFORMANCE.md for optimization tips.

### Q: Can I add a blog?
**A:** Yes! See CUSTOMIZATION.md → Adding Sections → Add a Blog Section

### Q: How do I track visitors?
**A:** Add Google Analytics (free). See SEO_MARKETING.md → Analytics Setup

### Q: What if I have a JavaScript error?
**A:** Open F12 (Developer Tools) → Console tab and look for red errors. Also check:
1. script.js is loaded
2. No typos in function names
3. Elements exist in HTML

### Q: Can I remove sections?
**A:** Yes! Just delete the `<section>` tag from `index.html`.

### Q: How do I add more features?
**A:** Copy existing feature cards and edit them:
```html
<article class="feature-card">
    <div class="feature-card__icon">🚀</div>
    <h3>Your Feature</h3>
    <p>Your description</p>
</article>
```

### Q: Where do I put my logo?
**A:** Update the logo in the navbar:
```html
<a href="#" class="logo">YourBrand</a>
```

Or replace with an image:
```html
<a href="#" class="logo">
    <img src="logo.png" alt="Logo" height="40">
</a>
```

### Q: How do I collect email addresses?
**A:** Add a form. See CUSTOMIZATION.md → Forms & CTAs.

### Q: Can I use different fonts?
**A:** Yes! See CUSTOMIZATION.md → Typography.

### Q: Why is the hero image placeholder?
**A:** It's a placeholder. Replace with your own image:
```html
<img src="your-image.jpg" alt="Your description">
```

### Q: Do I need SSL/HTTPS?
**A:** Yes, Google requires it. Most hosting includes free SSL.

### Q: How do I get more traffic?
**A:** See SEO_MARKETING.md for strategies including:
- Search engine optimization
- Content marketing
- Paid ads
- Social media

### Q: Can I use this for different industries?
**A:** Yes! Update the content and images for your industry.

### Q: How often should I update content?
**A:** 
- Blog: Weekly or monthly
- Testimonials: As you get them
- Pricing: When it changes
- Contact info: When it changes

### Q: What if I need help?
**A:** 
1. Check the relevant guide (README.md, CUSTOMIZATION.md, etc.)
2. Search the documentation
3. Check browser console (F12) for errors
4. Ask in web development forums or communities

### Q: Can I duplicate sections?
**A:** Yes! Copy-paste the entire `<section>` block and edit.

### Q: How do I make the form send to my email?
**A:** Use Formspree (free, no backend needed):
1. Go to https://formspree.io
2. Create form with your email
3. Get form ID
4. Update form action in HTML

### Q: What's the best way to A/B test?
**A:** Use Formspree or Google Analytics to track form submissions. Change one element at a time.

### Q: Do I need a privacy policy?
**A:** Yes, if you collect email or use analytics. Add link in footer.

### Q: Can I make the page password protected?
**A:** Yes, ask your hosting provider (usually simple setup).

### Q: How do I disable animations?
**A:** Comment out animations.css link in HTML or set CSS animations to 0 duration.

### Q: Can I use video as background?
**A:** Yes! See CUSTOMIZATION.md → Add Video Background

### Q: What if nothing works?
**A:** 
1. Check browser console (F12) for errors
2. Clear cache (Ctrl+Shift+Delete)
3. Hard refresh (Ctrl+Shift+R)
4. Try different browser
5. Check hosting support

---

## Getting More Help

### Documentation to check first:
1. [INDEX.md](INDEX.md) - Start here for navigation
2. [README.md](README.md) - General overview
3. [QUICK_START.md](QUICK_START.md) - Quick setup
4. [CUSTOMIZATION.md](CUSTOMIZATION.md) - How to modify
5. [DEPLOYMENT.md](DEPLOYMENT.md) - How to deploy

### Online Resources:
- MDN Web Docs: https://developer.mozilla.org/
- CSS-Tricks: https://css-tricks.com/
- Stack Overflow: https://stackoverflow.com/
- Web.dev: https://web.dev/

### When reporting an issue, include:
- What you tried
- What happened (error message if any)
- What you expected to happen
- Which file(s) you modified
- Browser and device info

---

## Common Error Messages

### "Uncaught ReferenceError: X is not defined"
**Fix:** Check that:
1. Variable is declared before use
2. script.js is loaded
3. No typos in variable names

### "Cannot read property 'X' of null"
**Fix:** Element with that ID doesn't exist. Check:
1. Element exists in HTML
2. ID matches exactly
3. No typos

### "Unexpected token < in JSON"
**Fix:** HTML being returned instead of JSON. Check:
1. API endpoint is correct
2. Server is responding with JSON, not HTML

### "CORS error"
**Fix:** Different domain issue. Check:
1. APIs have CORS enabled
2. Using https, not http
3. Domain is whitelisted

---

**Remember: Most issues have simple fixes. Check the browser console (F12) first!**

**Happy troubleshooting! 🔧**
