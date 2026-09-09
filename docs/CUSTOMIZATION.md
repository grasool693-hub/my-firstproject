# Customization Guide

This guide will help you customize the landing page template to match your brand and business needs.

## Table of Contents

1. [Colors & Branding](#colors--branding)
2. [Typography](#typography)
3. [Content](#content)
4. [Adding Sections](#adding-sections)
5. [Forms & CTAs](#forms--ctas)
6. [Images & Media](#images--media)
7. [Advanced Customization](#advanced-customization)

---

## Colors & Branding

### Quick Color Change

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0066cc;      /* Main brand color */
    --secondary-color: #00d4ff;    /* Accent color */
    --accent-color: #ff6b35;       /* Call-to-action color */
    --text-dark: #1a1a1a;          /* Main text */
    --text-light: #666666;         /* Secondary text */
    --bg-light: #f8f9fa;           /* Light backgrounds */
    --bg-lighter: #ffffff;         /* White backgrounds */
    --border-color: #e0e0e0;       /* Borders */
}
```

### Dark Mode Customization

Add your dark mode colors in the media query:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --text-dark: #f0f0f0;
        --text-light: #b0b0b0;
        --bg-light: #1a1a1a;
        --bg-lighter: #242424;
        --border-color: #404040;
    }
}
```

### Gradient Customization

The template uses gradients in several places. Update them:

```css
/* Hero section gradient */
.hero__title {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

/* CTA section gradient */
.cta {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

/* Custom gradient */
background: linear-gradient(90deg, #ff0000, #00ff00, #0000ff);
```

### Shadow Customization

Update shadow values for different depth effects:

```css
:root {
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.15);
}

/* For more dramatic shadows */
--shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.25);

/* For subtle shadows */
--shadow-md: 0 2px 4px rgba(0, 0, 0, 0.08);
```

---

## Typography

### Change Font Family

Update the font import in `index.html`:

```html
<!-- Using Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update the CSS variable:

```css
:root {
    --font-family: 'Poppins', sans-serif;
}
```

### Font Size Scale

Adjust font sizes for your design:

```css
:root {
    --font-size-sm: 0.875rem;      /* 14px */
    --font-size-base: 1rem;        /* 16px */
    --font-size-lg: 1.125rem;      /* 18px */
    --font-size-xl: 1.5rem;        /* 24px */
    --font-size-2xl: 2rem;         /* 32px */
    --font-size-3xl: 2.5rem;       /* 40px */
    --font-size-4xl: 3rem;         /* 48px */
}
```

### Font Weight

Adjust font weights for different elements:

```css
/* In styles.css */
h1, h2, h3 {
    font-weight: 700;   /* Bold */
}

.nav-links a {
    font-weight: 600;   /* Semi-bold */
}

body {
    font-weight: 400;   /* Normal */
}
```

### Line Height & Letter Spacing

Fine-tune readability:

```css
body {
    line-height: 1.6;        /* Default 1.6 */
    letter-spacing: normal;
}

h1, h2, h3 {
    line-height: 1.2;        /* Tighter for headings */
}

.logo {
    letter-spacing: 1px;     /* More spacing for brand */
}
```

---

## Content

### Update Header Text

In `index.html`, find and edit:

```html
<!-- Navigation -->
<a href="#" class="logo">MyBrand</a>  <!-- Change this -->

<!-- Hero Section -->
<h1 class="hero__title">Build Something Amazing</h1>
<p class="hero__subtitle">Create, launch, and scale your ideas...</p>
```

### Update Feature Section

Replace features with your own:

```html
<article class="feature-card">
    <div class="feature-card__icon">🚀</div>
    <h3>Your Feature Title</h3>
    <p>Your feature description here.</p>
</article>
```

### Update Pricing

Customize pricing cards:

```html
<article class="pricing-card">
    <h3>Your Plan Name</h3>
    <p class="price">
        <span class="currency">$</span>99<span class="period">/month</span>
    </p>
    <p class="description">Plan description</p>
    <ul class="features-list">
        <li>✓ Feature 1</li>
        <li>✓ Feature 2</li>
    </ul>
    <button class="btn btn--primary">Choose Plan</button>
</article>
```

### Update Footer

Change footer links and information:

```html
<div class="footer-section">
    <h4>Product</h4>
    <ul>
        <li><a href="#">Your Link</a></li>
        <li><a href="#">Another Link</a></li>
    </ul>
</div>
```

---

## Adding Sections

### Add a Team Section

```html
<!-- Add before footer -->
<section class="team">
    <div class="container">
        <h2 class="section-title">Our Team</h2>
        <p class="section-subtitle">Meet the people behind the product</p>

        <div class="team-grid">
            <article class="team-member">
                <img src="person1.jpg" alt="Person name" loading="lazy">
                <h3>Person Name</h3>
                <p>Job Title</p>
                <p class="bio">Short bio about this person.</p>
            </article>

            <article class="team-member">
                <img src="person2.jpg" alt="Person name" loading="lazy">
                <h3>Person Name</h3>
                <p>Job Title</p>
                <p class="bio">Short bio about this person.</p>
            </article>
        </div>
    </div>
</section>

<!-- Add this CSS to styles.css -->
<style>
    .team {
        padding: var(--spacing-2xl) 0;
        background-color: var(--bg-light);
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-lg);
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--spacing-lg);
    }

    .team-member {
        text-align: center;
        padding: var(--spacing-lg);
        background: var(--bg-lighter);
        border-radius: 12px;
        border: 1px solid var(--border-color);
    }

    .team-member img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: var(--spacing-md);
    }

    .team-member h3 {
        margin-bottom: var(--spacing-xs);
    }

    .team-member p {
        margin-bottom: var(--spacing-sm);
    }

    .bio {
        font-size: var(--font-size-sm);
    }
</style>
```

### Add a FAQ Section

```html
<section class="faq">
    <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Common questions about our product</p>

        <div class="faq-container">
            <details class="faq-item">
                <summary>Question goes here?</summary>
                <p>Your answer goes here. You can include links, formatting, etc.</p>
            </details>

            <details class="faq-item">
                <summary>Another question?</summary>
                <p>Another answer goes here.</p>
            </details>

            <details class="faq-item">
                <summary>One more question?</summary>
                <p>Final answer here.</p>
            </details>
        </div>
    </div>
</section>

<!-- Add this CSS to styles.css -->
<style>
    .faq {
        padding: var(--spacing-2xl) 0;
    }

    .faq-container {
        max-width: 700px;
        margin: 0 auto;
        padding: 0 var(--spacing-lg);
    }

    .faq-item {
        margin-bottom: var(--spacing-md);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        overflow: hidden;
    }

    .faq-item summary {
        padding: var(--spacing-md);
        cursor: pointer;
        font-weight: 600;
        background-color: var(--bg-light);
        transition: var(--transition);
        user-select: none;
    }

    .faq-item summary:hover {
        background-color: var(--border-color);
    }

    .faq-item p {
        padding: var(--spacing-md);
        background-color: var(--bg-lighter);
        margin: 0;
    }
</style>
```

### Add a Blog/Articles Section

```html
<section class="blog">
    <div class="container">
        <h2 class="section-title">Latest Articles</h2>
        <p class="section-subtitle">Tips, insights, and industry news</p>

        <div class="blog-grid">
            <article class="blog-card">
                <img src="article-image.jpg" alt="Article title" loading="lazy">
                <div class="blog-card__content">
                    <time datetime="2024-01-15">January 15, 2024</time>
                    <h3>Article Title</h3>
                    <p>Brief description of the article...</p>
                    <a href="/blog/article-slug" class="read-more">Read More →</a>
                </div>
            </article>
        </div>
    </div>
</section>
```

---

## Forms & CTAs

### Create a Contact Form

Add this before the footer:

```html
<section class="contact">
    <div class="container">
        <h2 class="section-title">Get In Touch</h2>

        <form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input id="name" type="text" name="name" required>
            </div>

            <div class="form-group">
                <label for="email">Email Address</label>
                <input id="email" type="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" class="btn btn--primary">Send Message</button>
        </form>
    </div>
</section>

<!-- CSS -->
<style>
    .contact {
        padding: var(--spacing-2xl) 0;
        background-color: var(--bg-light);
    }

    .contact-form {
        max-width: 600px;
        margin: 0 auto;
        padding: 0 var(--spacing-lg);
    }

    .form-group {
        margin-bottom: var(--spacing-md);
    }

    .form-group label {
        display: block;
        margin-bottom: var(--spacing-xs);
        font-weight: 600;
        color: var(--text-dark);
    }

    input, textarea {
        width: 100%;
        padding: var(--spacing-sm);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        font-family: var(--font-family);
        font-size: var(--font-size-base);
    }

    input:focus, textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }

    .contact-form .btn {
        width: 100%;
    }
</style>
```

### Update CTA Button Text

Find in `index.html`:

```html
<!-- Change this -->
<button class="btn btn--primary">Start Free Trial</button>

<!-- To this -->
<button class="btn btn--primary">Get Started Now</button>
```

---

## Images & Media

### Add Hero Image

Replace the placeholder in hero section:

```html
<div class="hero__image">
    <img 
        src="your-image.jpg" 
        alt="Descriptive alt text about the image"
        loading="lazy"
    >
</div>
```

### Image Optimization Tips

```html
<!-- Use WebP with fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
</picture>

<!-- Responsive images -->
<img 
    src="image-medium.jpg"
    srcset="image-small.jpg 480w,
            image-medium.jpg 768w,
            image-large.jpg 1200w"
    sizes="(max-width: 768px) 100vw, 50vw"
    alt="Description"
>

<!-- Lazy loading -->
<img src="image.jpg" alt="Description" loading="lazy">
```

### Add Video Background (Optional)

```html
<div class="video-hero">
    <video autoplay muted loop playsinline>
        <source src="video.mp4" type="video/mp4">
        Your browser doesn't support HTML5 video.
    </video>
    <div class="video-overlay">
        <h1>Your Headline</h1>
    </div>
</div>

<style>
    .video-hero {
        position: relative;
        overflow: hidden;
        height: 600px;
    }

    .video-hero video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .video-overlay {
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
    }

    .video-overlay h1 {
        color: white;
    }
</style>
```

---

## Advanced Customization

### Change Spacing Scale

Adjust spacing throughout by editing CSS variables:

```css
:root {
    --spacing-xs: 0.5rem;   /* 8px */
    --spacing-sm: 1rem;     /* 16px */
    --spacing-md: 1.5rem;   /* 24px */
    --spacing-lg: 2rem;     /* 32px */
    --spacing-xl: 3rem;     /* 48px */
    --spacing-2xl: 4rem;    /* 64px */
}
```

### Add Custom Animations

```css
/* In animations.css */
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.bouncing-element {
    animation: bounce 2s infinite;
}
```

### Create Button Variants

```css
.btn--ghost {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn--ghost:hover {
    background-color: var(--primary-color);
    color: white;
}

.btn--small {
    padding: 0.5rem 1rem;
    font-size: var(--font-size-sm);
}

.btn--large {
    padding: var(--spacing-md) var(--spacing-2xl);
    font-size: var(--font-size-lg);
}
```

### Add Theme Switcher

```html
<!-- Add to navbar -->
<button id="theme-toggle" aria-label="Toggle dark mode">🌙</button>

<script>
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', () => {
        document.documentElement.style.colorScheme = 
            document.documentElement.style.colorScheme === 'dark' ? 'light' : 'dark';
    });
</script>
```

### Add Smooth Page Transitions

```css
@keyframes pageIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

body {
    animation: pageIn 0.5s ease-out;
}
```

---

## Testing Your Changes

After customizing:

1. **Check responsiveness** - Test on mobile (375px), tablet (768px), desktop (1200px)
2. **Test forms** - Verify form submission works
3. **Check images** - Ensure images load and display correctly
4. **Test navigation** - Verify all links work
5. **Run Lighthouse** - Check performance (target 90+)
6. **Test accessibility** - Run axe DevTools

```bash
# Run Lighthouse from command line
lighthouse https://yoursite.com --view
```

---

## Performance Optimization

After customization, optimize for performance:

```bash
# Minify CSS
csso styles.css animations.css -o styles.min.css

# Minify JavaScript
terser script.js -o script.min.js

# Compress images
imagemin img/* --out-dir=img-compressed

# Update HTML to use minified files
<!-- Change from -->
<link rel="stylesheet" href="styles.css">

<!-- To -->
<link rel="stylesheet" href="styles.min.css">
```

---

## Getting Help

- Refer to the `README.md` for quick reference
- Check `ACCESSIBILITY.md` for accessibility guidelines
- Use browser DevTools to inspect and debug
- Visit MDN Web Docs for HTML/CSS reference

**Happy customizing!** 🎨
