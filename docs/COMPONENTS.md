# HTML Components & Snippets Library

Copy-paste ready components for your landing page. All include HTML, CSS, and JavaScript (where needed).

## Table of Contents

1. [Alerts & Notifications](#alerts--notifications)
2. [Cards & Containers](#cards--containers)
3. [Forms](#forms)
4. [Tables](#tables)
5. [Modals & Dialogs](#modals--dialogs)
6. [Navigation](#navigation)
7. [Media](#media)
8. [Social Proof](#social-proof)
9. [CTAs](#ctas)
10. [Stats](#stats)

---

## Alerts & Notifications

### Success Alert

```html
<div class="alert alert--success">
    <span>✓</span>
    <div>
        <strong>Success!</strong>
        <p>Your changes have been saved.</p>
    </div>
</div>

<style>
    .alert {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        border-radius: 8px;
        border-left: 4px solid;
        animation: slideDown 0.3s ease-out;
    }

    .alert--success {
        background-color: #d4edda;
        border-color: #28a745;
        color: #155724;
    }

    .alert--error {
        background-color: #f8d7da;
        border-color: #dc3545;
        color: #721c24;
    }

    .alert--warning {
        background-color: #fff3cd;
        border-color: #ffc107;
        color: #856404;
    }

    .alert--info {
        background-color: #d1ecf1;
        border-color: #17a2b8;
        color: #0c5460;
    }

    .alert span {
        font-size: 1.5rem;
        line-height: 1;
    }

    .alert strong {
        display: block;
        margin-bottom: 0.25rem;
    }

    .alert p {
        margin: 0;
        font-size: 0.9rem;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
```

---

## Cards & Containers

### Feature Card with Icon

```html
<div class="card card--featured">
    <div class="card__icon">📊</div>
    <h3>Real-time Analytics</h3>
    <p>Track performance with detailed metrics and insights.</p>
    <a href="#" class="card__link">Learn more →</a>
</div>

<style>
    .card {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        border: 1px solid #e0e0e0;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .card:hover {
        border-color: #0066cc;
        box-shadow: 0 12px 32px rgba(0, 102, 204, 0.15);
        transform: translateY(-4px);
    }

    .card__icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        line-height: 1;
    }

    .card h3 {
        margin-bottom: 1rem;
        color: #1a1a1a;
    }

    .card p {
        margin-bottom: 1.5rem;
        color: #666;
    }

    .card__link {
        color: #0066cc;
        font-weight: 600;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: gap 0.3s ease;
    }

    .card__link:hover {
        gap: 0.75rem;
    }

    .card--featured {
        border-color: #0066cc;
        background: linear-gradient(135deg, rgba(0, 102, 204, 0.05), rgba(0, 212, 255, 0.05));
    }
</style>
```

### Stat Card

```html
<div class="stat-card">
    <div class="stat-card__number">99.9%</div>
    <div class="stat-card__label">Uptime</div>
    <div class="stat-card__description">Industry leading reliability</div>
</div>

<style>
    .stat-card {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        border: 1px solid #e0e0e0;
    }

    .stat-card__number {
        font-size: 2.5rem;
        font-weight: 700;
        color: #0066cc;
        margin-bottom: 0.5rem;
    }

    .stat-card__label {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
    }

    .stat-card__description {
        font-size: 0.9rem;
        color: #666;
    }
</style>
```

---

## Forms

### Input with Validation States

```html
<div class="form-group">
    <label for="email">Email Address</label>
    <input 
        id="email" 
        type="email" 
        placeholder="you@example.com"
        class="form-input"
    >
    <span class="form-hint">We'll never share your email.</span>
</div>

<div class="form-group">
    <label for="error-input">This has an error</label>
    <input 
        id="error-input" 
        type="text" 
        class="form-input form-input--error"
        value="Invalid entry"
    >
    <span class="form-error">This field is required.</span>
</div>

<style>
    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #1a1a1a;
    }

    .form-input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    .form-input:focus {
        outline: none;
        border-color: #0066cc;
        box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }

    .form-input--error {
        border-color: #dc3545;
        background-color: rgba(220, 53, 69, 0.05);
    }

    .form-input--error:focus {
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
    }

    .form-hint {
        display: block;
        margin-top: 0.5rem;
        font-size: 0.875rem;
        color: #999;
    }

    .form-error {
        display: block;
        margin-top: 0.5rem;
        font-size: 0.875rem;
        color: #dc3545;
    }
</style>
```

### Search Box

```html
<div class="search-box">
    <input 
        type="search" 
        placeholder="Search articles..." 
        class="search-box__input"
    >
    <button class="search-box__button" aria-label="Search">
        🔍
    </button>
</div>

<style>
    .search-box {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: white;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 0.5rem;
        max-width: 400px;
    }

    .search-box__input {
        flex: 1;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background: transparent;
    }

    .search-box__input:focus {
        outline: none;
    }

    .search-box__button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        font-size: 1.125rem;
        transition: opacity 0.3s ease;
    }

    .search-box__button:hover {
        opacity: 0.7;
    }
</style>
```

---

## Tables

### Responsive Table

```html
<div class="table-container">
    <table class="table">
        <thead>
            <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Pro</th>
                <th>Enterprise</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Feature">Users</td>
                <td data-label="Starter">1</td>
                <td data-label="Pro">5</td>
                <td data-label="Enterprise">Unlimited</td>
            </tr>
            <tr>
                <td data-label="Feature">Storage</td>
                <td data-label="Starter">10 GB</td>
                <td data-label="Pro">100 GB</td>
                <td data-label="Enterprise">Unlimited</td>
            </tr>
            <tr>
                <td data-label="Feature">Support</td>
                <td data-label="Starter">Email</td>
                <td data-label="Pro">Priority</td>
                <td data-label="Enterprise">24/7 Phone</td>
            </tr>
        </tbody>
    </table>
</div>

<style>
    .table-container {
        overflow-x: auto;
    }

    .table {
        width: 100%;
        border-collapse: collapse;
        background: white;
    }

    .table th {
        padding: 1rem;
        text-align: left;
        background-color: #f8f9fa;
        border-bottom: 2px solid #e0e0e0;
        font-weight: 600;
        color: #1a1a1a;
    }

    .table td {
        padding: 1rem;
        border-bottom: 1px solid #e0e0e0;
    }

    .table tbody tr:hover {
        background-color: #f8f9fa;
    }

    @media (max-width: 768px) {
        .table thead {
            display: none;
        }

        .table tbody tr {
            display: block;
            margin-bottom: 1.5rem;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
        }

        .table td {
            display: block;
            padding: 1rem;
            text-align: right;
            border: none;
            border-bottom: 1px solid #e0e0e0;
        }

        .table td:last-child {
            border-bottom: none;
        }

        .table td::before {
            content: attr(data-label);
            float: left;
            font-weight: 600;
            color: #1a1a1a;
        }
    }
</style>
```

---

## Modals & Dialogs

### Simple Modal

```html
<button class="btn btn--primary" data-modal="modal-1">Open Modal</button>

<div id="modal-1" class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__content">
        <button class="modal__close" data-close="modal-1">&times;</button>
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button class="btn btn--primary">Confirm</button>
    </div>
</div>

<style>
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
    }

    .modal.active {
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
    }

    .modal__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .modal__content {
        position: relative;
        background: white;
        border-radius: 12px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease-out;
    }

    .modal__close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #999;
        transition: color 0.3s ease;
    }

    .modal__close:hover {
        color: #1a1a1a;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>

<script>
    // Modal functionality
    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.modal;
            document.getElementById(modalId).classList.add('active');
        });
    });

    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.close;
            document.getElementById(modalId).classList.remove('active');
        });
    });

    // Close on overlay click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal.querySelector('.modal__overlay')) {
                modal.classList.remove('active');
            }
        });
    });
</script>
```

---

## Navigation

### Breadcrumb

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/products/software">Software</a></li>
        <li aria-current="page">Landing Pages</li>
    </ol>
</nav>

<style>
    .breadcrumb ol {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .breadcrumb li {
        display: flex;
        align-items: center;
    }

    .breadcrumb li + li::before {
        content: '/';
        margin: 0 0.5rem;
        color: #999;
    }

    .breadcrumb a {
        color: #0066cc;
        text-decoration: none;
    }

    .breadcrumb a:hover {
        text-decoration: underline;
    }

    .breadcrumb [aria-current="page"] {
        color: #666;
    }
</style>
```

### Tabs

```html
<div class="tabs">
    <div class="tabs__nav">
        <button class="tabs__button active" data-tab="tab-1">Overview</button>
        <button class="tabs__button" data-tab="tab-2">Features</button>
        <button class="tabs__button" data-tab="tab-3">Pricing</button>
    </div>

    <div class="tabs__content">
        <div id="tab-1" class="tabs__panel active">
            <h3>Overview</h3>
            <p>Tab content goes here.</p>
        </div>
        <div id="tab-2" class="tabs__panel">
            <h3>Features</h3>
            <p>Tab content goes here.</p>
        </div>
        <div id="tab-3" class="tabs__panel">
            <h3>Pricing</h3>
            <p>Tab content goes here.</p>
        </div>
    </div>
</div>

<style>
    .tabs__nav {
        display: flex;
        gap: 0;
        border-bottom: 2px solid #e0e0e0;
        margin-bottom: 1.5rem;
    }

    .tabs__button {
        background: none;
        border: none;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        color: #666;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;
        margin-bottom: -2px;
    }

    .tabs__button:hover {
        color: #0066cc;
    }

    .tabs__button.active {
        color: #0066cc;
        border-bottom-color: #0066cc;
    }

    .tabs__panel {
        display: none;
    }

    .tabs__panel.active {
        display: block;
    }
</style>

<script>
    document.querySelectorAll('.tabs__button').forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            // Remove active from all
            document.querySelectorAll('.tabs__button').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tabs__panel').forEach(p => p.classList.remove('active'));
            
            // Add active to current
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
</script>
```

---

## Media

### Image Gallery

```html
<div class="gallery">
    <div class="gallery__item">
        <img src="image-1.jpg" alt="Gallery image 1">
    </div>
    <div class="gallery__item">
        <img src="image-2.jpg" alt="Gallery image 2">
    </div>
    <div class="gallery__item">
        <img src="image-3.jpg" alt="Gallery image 3">
    </div>
</div>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .gallery__item {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        aspect-ratio: 1 / 1;
        cursor: pointer;
    }

    .gallery__item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .gallery__item:hover img {
        transform: scale(1.1);
    }

    .gallery__item::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0);
        transition: background 0.3s ease;
    }

    .gallery__item:hover::after {
        background: rgba(0, 0, 0, 0.3);
    }
</style>
```

---

## Social Proof

### Customer Logos

```html
<div class="logos">
    <p class="logos__label">Trusted by</p>
    <div class="logos__grid">
        <img src="logo-1.svg" alt="Company 1">
        <img src="logo-2.svg" alt="Company 2">
        <img src="logo-3.svg" alt="Company 3">
        <img src="logo-4.svg" alt="Company 4">
    </div>
</div>

<style>
    .logos {
        text-align: center;
        padding: 2rem 0;
    }

    .logos__label {
        color: #999;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .logos__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 2rem;
        align-items: center;
    }

    .logos__grid img {
        height: 40px;
        opacity: 0.6;
        transition: opacity 0.3s ease;
    }

    .logos__grid img:hover {
        opacity: 1;
    }
</style>
```

### Review Star Rating

```html
<div class="rating">
    <div class="stars">
        <span class="star filled">★</span>
        <span class="star filled">★</span>
        <span class="star filled">★</span>
        <span class="star filled">★</span>
        <span class="star filled">★</span>
    </div>
    <p class="rating__text">5.0 out of 5 (432 reviews)</p>
</div>

<style>
    .stars {
        font-size: 1.5rem;
        color: #ffc107;
        letter-spacing: 2px;
    }

    .star.filled {
        color: #ffc107;
    }

    .star:not(.filled) {
        color: #ddd;
    }

    .rating__text {
        margin-top: 0.5rem;
        color: #666;
        font-size: 0.9rem;
    }
</style>
```

---

## CTAs

### Floating CTA

```html
<div class="floating-cta">
    <button class="btn btn--primary">Get Started Now</button>
    <p>No credit card required</p>
</div>

<style>
    .floating-cta {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        padding: 1.5rem 2rem;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        z-index: 100;
        text-align: center;
        animation: slideUp 0.5s ease-out;
    }

    .floating-cta p {
        margin: 0.5rem 0 0 0;
        font-size: 0.85rem;
        color: #999;
    }

    @media (max-width: 768px) {
        .floating-cta {
            bottom: 1rem;
            left: 1rem;
            right: 1rem;
            transform: none;
        }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
</style>
```

### CTA Section

```html
<section class="cta-section">
    <h2>Ready to Get Started?</h2>
    <p>Join thousands of users building amazing things today.</p>
    <div class="cta-section__actions">
        <button class="btn btn--primary">Start Free Trial</button>
        <button class="btn btn--outline">View Pricing</button>
    </div>
</section>

<style>
    .cta-section {
        background: linear-gradient(135deg, #0066cc, #00d4ff);
        color: white;
        padding: 3rem 2rem;
        border-radius: 12px;
        text-align: center;
    }

    .cta-section h2 {
        color: white;
        margin-bottom: 1rem;
    }

    .cta-section p {
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 2rem;
        font-size: 1.125rem;
    }

    .cta-section__actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .cta-section .btn--primary {
        background-color: white;
        color: #0066cc;
    }

    .cta-section .btn--outline {
        border-color: white;
        color: white;
    }

    .cta-section .btn--outline:hover {
        background-color: white;
        color: #0066cc;
    }
</style>
```

---

## Stats

### Stats Counter

```html
<div class="stats">
    <div class="stat">
        <div class="stat__number" data-count="10000">0</div>
        <div class="stat__label">Active Users</div>
    </div>
    <div class="stat">
        <div class="stat__number" data-count="50">0</div>
        <div class="stat__label">Countries</div>
    </div>
    <div class="stat">
        <div class="stat__number" data-count="99">0</div>
        <div class="stat__label">% Uptime</div>
    </div>
</div>

<style>
    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 2rem;
        text-align: center;
    }

    .stat__number {
        font-size: 2.5rem;
        font-weight: 700;
        color: #0066cc;
        margin-bottom: 0.5rem;
    }

    .stat__label {
        color: #666;
        font-size: 0.95rem;
    }
</style>

<script>
    // Counter animation
    const animateCounter = (element, target, duration = 2000) => {
        let current = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };

    // Trigger on scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const target = parseInt(entry.target.dataset.count);
                animateCounter(entry.target, target);
                entry.target.dataset.animated = 'true';
            }
        });
    });

    document.querySelectorAll('[data-count]').forEach(el => {
        observer.observe(el);
    });
</script>
```

---

## Usage Tips

1. **Copy the entire code block** - HTML + CSS + JavaScript (if applicable)
2. **Paste into your file** - Add to `index.html` for HTML, `styles.css` for CSS
3. **Customize colors** - Replace color values with your brand colors
4. **Adjust sizes** - Modify padding, margins, font sizes as needed
5. **Test responsiveness** - Check on mobile (375px) and desktop (1200px)

## Need More Components?

- Check the main template for existing sections (features, pricing, testimonials)
- Mix and match components to create custom sections
- Refer to CUSTOMIZATION.md for adding new sections

**Happy building!** 🎨
