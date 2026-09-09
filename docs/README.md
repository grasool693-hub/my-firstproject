# Landing Page Template

A modern, fully responsive landing page template built with HTML5, CSS3, and vanilla JavaScript. Includes best practices for accessibility, performance, and SEO.

## Features

✅ **Responsive Design** - Mobile-first approach with breakpoints at 480px, 768px, and 1024px
✅ **Accessibility** - WCAG 2.1 AA compliant with semantic HTML, ARIA labels, and keyboard navigation
✅ **Performance** - Optimized for speed with lazy loading, smooth animations, and minimal dependencies
✅ **SEO-Friendly** - Semantic markup, meta tags, proper heading hierarchy
✅ **Interactive** - Scroll animations, smooth navigation, form validation, ripple effects
✅ **Dark Mode** - Automatically detects user's system preference
✅ **No Dependencies** - Pure vanilla JavaScript and CSS

## Project Structure

```
.
├── index.html          # HTML structure & semantic markup
├── styles.css          # Main styling & layout
├── animations.css      # Animations, interactions & utilities
├── script.js           # Interactive features & vanilla JS
├── README.md           # This file
├── ACCESSIBILITY.md    # Accessibility guidelines
└── CUSTOMIZATION.md    # How to customize the template
```

## Quick Start

1. **Download or clone** this repository
2. **Open `index.html`** in your browser
3. **Customize** the content, colors, and branding
4. **Deploy** to your hosting provider

No build process needed — this is pure HTML, CSS, and JavaScript.

## File Sizes

- `index.html` - ~8 KB
- `styles.css` - ~18 KB
- `animations.css` - ~12 KB
- `script.js` - ~8 KB
- **Total** - ~46 KB (uncompressed)

After gzip compression, expect ~12-15 KB total.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## Customization

### Change Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00d4ff;
    --accent-color: #ff6b35;
    /* ... etc */
}
```

### Change Fonts

Update the font import in `index.html` and override in `styles.css`:

```css
:root {
    --font-family: 'Your Font', sans-serif;
}
```

### Add Sections

Copy the structure of an existing section (features, pricing, testimonials) and adapt it to your needs.

### Modify Navigation

Edit `.nav-links` in `index.html` to add/remove navigation items.

### Update Hero Image

Replace the placeholder image URL in the hero section with your own image.

## JavaScript Features

The template includes the following interactive features:

- **Scroll to Top Button** - Auto-hides when at top of page
- **Smooth Scrolling** - Anchor links scroll smoothly to sections
- **Scroll Animations** - Cards fade in as they enter viewport
- **Mobile Navigation** - Hamburger menu that toggles on small screens
- **Form Validation** - Real-time validation for email/required fields
- **Active Navigation Link** - Highlights the current section
- **Lazy Image Loading** - Images load only when visible
- **Keyboard Navigation** - Full keyboard support for accessibility

Disable any feature by commenting out its initialization in the `domReady()` function at the end of `script.js`.

## Performance Tips

1. **Optimize Images**
   - Use modern formats (WebP with fallbacks)
   - Compress images to <100 KB per image
   - Use appropriate dimensions (don't load 4000px images for mobile)

2. **Minimize CSS**
   ```bash
   # Using csso-cli
   csso styles.css -o styles.min.css
   csso animations.css -o animations.min.css
   ```

3. **Minify JavaScript**
   ```bash
   # Using terser
   terser script.js -o script.min.js
   ```

4. **Enable Caching**
   ```
   Cache-Control: public, max-age=31536000
   ```

5. **Use CDN**
   - Serve files from a CDN for faster global delivery
   - Cloudflare, AWS CloudFront, or Vercel all work well

## Lighthouse Score

Target scores when optimized:

- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

Run `lighthouse` in Chrome DevTools to check your site.

## Form Handling

The template includes form validation JavaScript. To submit data:

### Option 1: Formspree (Recommended)

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
    <input type="email" name="email" required>
    <button type="submit">Subscribe</button>
</form>
```

### Option 2: Your Own Backend

Update the form action to your endpoint:

```html
<form action="/api/subscribe" method="POST">
    <!-- form fields -->
</form>
```

### Option 3: Netlify Forms

```html
<form name="contact" method="POST" netlify>
    <!-- form fields -->
</form>
```

## SEO Checklist

- [x] Meta description set
- [x] Open Graph tags included
- [x] Semantic HTML structure
- [x] Proper heading hierarchy (h1 > h2 > h3)
- [x] Alt text on images
- [x] Mobile viewport meta tag
- [x] Fast page load (< 3 seconds)
- [ ] Add your favicon: `<link rel="icon" href="favicon.ico">`
- [ ] Add structured data (schema.org)
- [ ] Submit sitemap.xml to Google Search Console

## Accessibility

This template meets WCAG 2.1 AA standards:

- ✅ Semantic HTML structure
- ✅ ARIA labels for interactive elements
- ✅ Color contrast ratio 4.5:1 for text
- ✅ Keyboard navigation support
- ✅ Focus indicators on all interactive elements
- ✅ Screen reader friendly
- ✅ Reduced motion support (`prefers-reduced-motion`)

For detailed accessibility guidelines, see `ACCESSIBILITY.md`.

## Analytics Integration

Add Google Analytics:

```html
<!-- In the <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

## Testing

### Cross-Browser Testing
- Test in Chrome, Firefox, Safari, and Edge
- Use BrowserStack for older browser versions
- Test on real devices (iPhone, Android, iPad)

### Mobile Testing
- Test at 375px (iPhone SE)
- Test at 768px (iPad)
- Test at 1024px (iPad Pro)

### Accessibility Testing
- Use NVDA (Windows) or VoiceOver (Mac) screen readers
- Use keyboard-only navigation (Tab key)
- Run Lighthouse in Chrome DevTools
- Check contrast with WebAIM Contrast Checker

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Traditional Hosting
Upload files via FTP or your host's file manager.

### GitHub Pages
Push to a GitHub repository and enable Pages in settings.

## License

Free to use and modify. Credit appreciated but not required.

## Support & Feedback

For questions or improvements, refer to the customization guide or adjust the code to your needs.

---

**Happy building! 🚀**
