# Performance Optimization Guide

This guide covers techniques to optimize your landing page for speed and user experience.

## Core Web Vitals

Google's Core Web Vitals measure page performance:

- **LCP** (Largest Contentful Paint) - Target: < 2.5s
- **FID** (First Input Delay) - Target: < 100ms
- **CLS** (Cumulative Layout Shift) - Target: < 0.1

## Image Optimization

Images are typically the largest part of a website. Optimize them aggressively.

### Format Conversion

```bash
# Convert to WebP (smaller than JPG)
# Using ImageMagick
convert image.jpg -define webp:method=6 image.webp

# Using cwebp
cwebp image.jpg -o image.webp -q 80
```

### Responsive Images

```html
<!-- Serve different sizes based on screen width -->
<img 
    srcset="image-small.jpg 480w,
            image-medium.jpg 768w,
            image-large.jpg 1200w"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
    src="image-medium.jpg"
    alt="Description"
>

<!-- Use picture element for format switching -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <source srcset="image.jpg" type="image/jpeg">
    <img src="image.jpg" alt="Description">
</picture>
```

### Lazy Loading

```html
<!-- Native lazy loading (modern browsers) -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- With fallback for older browsers -->
<img 
    src="placeholder.jpg"
    data-src="image.jpg"
    alt="Description"
    class="lazy"
>

<script>
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img.lazy');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => imageObserver.observe(img));
    }
</script>
```

### Image Compression

```bash
# Using ImageOptim (Mac)
imageoptim *.jpg *.png

# Using ImageMagick
convert image.jpg -strip -interlace Plane -quality 85 image-optimized.jpg

# Using TinyPNG API
tinypng.com/developers

# Using batch tools
for file in *.jpg; do
    convert "$file" -quality 85 -strip "${file%.*}-opt.jpg"
done
```

## CSS Optimization

### Remove Unused CSS

```bash
# Using PurgeCSS
npm install -D purgecss
purgecss --css styles.css --content index.html --output styles.min.css

# Using UnCSS
npm install -D uncss
uncss index.html --stylesheets styles.css > styles.min.css
```

### Critical CSS

Inline critical CSS for faster rendering:

```html
<head>
    <style>
        /* Critical CSS - inline above the fold content */
        :root { --primary-color: #0066cc; }
        body { font-family: Inter, sans-serif; }
        .hero { padding: 2rem 0; }
        .btn { padding: 1rem 2rem; }
    </style>
    <link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
</head>
```

### Minify & Compress CSS

```bash
# Using csso-cli
npm install -g csso-cli
csso styles.css animations.css -o styles.min.css

# Using clean-css
npm install -g clean-css-cli
cleancss styles.css animations.css -o styles.min.css
```

## JavaScript Optimization

### Defer Non-Critical JS

```html
<!-- Load script at end of body for non-blocking -->
<script src="script.js" defer></script>

<!-- Or use async for independent scripts -->
<script src="analytics.js" async></script>
```

### Minify JavaScript

```bash
# Using Terser
npm install -g terser
terser script.js -o script.min.js

# Using esbuild
npm install -g esbuild
esbuild script.js --minify --outfile=script.min.js
```

### Code Splitting (if using bundler)

```javascript
// Load only what's needed
if (document.getElementById('pricing')) {
    import('./pricing.js');
}

// Load heavy libraries on demand
const contact = await import('./contact-form.js');
```

## Font Optimization

### Font Display Strategy

```css
@font-face {
    font-family: 'Inter';
    src: url('inter.woff2') format('woff2');
    font-display: swap;  /* Show fallback while loading */
}
```

### System Fonts (Fastest)

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
}
```

### Preload Fonts

```html
<link rel="preload" href="inter.woff2" as="font" type="font/woff2" crossorigin>
```

### Reduce Font Weight Variants

Only load weights you actually use:

```html
<!-- Bad: Loading all weights -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<!-- Good: Only load what you need -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

## Network Optimization

### Enable Gzip Compression

```
# In .htaccess (Apache)
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript
</IfModule>

# In nginx.conf
gzip on;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript;
gzip_vary on;
```

### Caching Headers

```
# In .htaccess
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresDefault "access plus 1 month"
    ExpiresByType text/html "access plus 0 seconds"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>

# In nginx.conf
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 365d;
}
```

### Use a CDN

- Cloudflare (Free tier available)
- AWS CloudFront
- Vercel (free deployment)
- Netlify (free deployment)
- BunnyCDN

## Rendering Optimization

### Reduce Layout Shift

```css
/* Reserve space for images */
img {
    display: block;
    aspect-ratio: 16 / 9;
    width: 100%;
}

/* Use `content-visibility` for off-screen content */
.section {
    content-visibility: auto;
}
```

### Avoid Render-Blocking Resources

```html
<!-- Bad: Blocks rendering -->
<link rel="stylesheet" href="styles.css">

<!-- Good: Load async -->
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
```

### Optimize Animations

```css
/* Use transform and opacity (GPU accelerated) */
.good {
    animation: slide 0.3s ease-out;
}

@keyframes slide {
    from {
        transform: translateX(-100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Bad: Animating layout properties */
.bad {
    animation: shift 0.3s ease-out;
}

@keyframes shift {
    from {
        left: -100px;
    }
    to {
        left: 0;
    }
}
```

## Measuring Performance

### Lighthouse

```bash
# CLI
npm install -g lighthouse
lighthouse https://yoursite.com --view

# Chrome DevTools
1. Open DevTools (F12)
2. Click Lighthouse tab
3. Click "Generate Report"
```

### PageSpeed Insights

```
https://pagespeed.web.dev/
```

### WebPageTest

```
https://www.webpagetest.org/
```

### Real User Monitoring

Add to your HTML:

```javascript
// Send performance data to analytics
window.addEventListener('load', () => {
    const perf = window.performance.timing;
    const pageLoadTime = perf.loadEventEnd - perf.navigationStart;
    
    // Send to analytics
    if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/metrics', JSON.stringify({
            pageLoadTime,
            fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
        }));
    }
});
```

## Performance Budget

Set targets and monitor:

```javascript
// Performance budget
const budget = {
    css: 50,        // KB
    js: 100,        // KB
    images: 500,    // KB
    fonts: 100,     // KB
    total: 750,     // KB
    fcp: 1800,      // ms
    lcp: 2500,      // ms
};

// Check bundle size
console.log('CSS size:', new Blob([document.querySelector('style').textContent]).size / 1024, 'KB');
```

## Pre-production Checklist

- [ ] Images compressed and optimized
- [ ] CSS minified and unused CSS removed
- [ ] JavaScript minified and split
- [ ] Fonts subset or system fonts used
- [ ] Caching headers configured
- [ ] Gzip compression enabled
- [ ] Critical CSS inlined
- [ ] Render-blocking resources deferred
- [ ] Layout shift minimized
- [ ] Animations GPU-accelerated
- [ ] Lighthouse score 90+
- [ ] Core Web Vitals passing
- [ ] Real user monitoring in place

## Quick Wins (Easy to Implement)

1. **Lazy load images** - Add `loading="lazy"` to all images
2. **Minify CSS/JS** - Use online tools or CLI
3. **Optimize images** - Reduce quality to 80-85%, convert to WebP
4. **Remove unused CSS** - Use PurgeCSS or manual audit
5. **Defer JavaScript** - Add `defer` attribute to scripts
6. **Enable Gzip** - Most hosting providers do this by default
7. **Set caching headers** - 1 month for assets, 0 for HTML
8. **Use system fonts** - Removes web font loading delay
9. **Reduce font weights** - Only load weights actually used
10. **Monitor metrics** - Use Google Analytics and Search Console

## Resources

- Google PageSpeed: https://developers.google.com/speed
- Web Vitals: https://web.dev/vitals/
- MDN Performance: https://developer.mozilla.org/en-US/docs/Web/Performance
- WebPageTest: https://www.webpagetest.org/

---

Target: **90+ Lighthouse Score**
Goal: **< 3 second page load**
