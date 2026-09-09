# Accessibility Guidelines

This landing page template is built with accessibility as a core principle, meeting WCAG 2.1 AA standards.

## What We've Done

### Semantic HTML
- Used proper heading hierarchy (`<h1>` once, then `<h2>`, `<h3>`)
- Used semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- Wrapped form inputs with `<label>` elements
- Used `<button>` for clickable elements, not `<div>` tags

### Color Contrast
- Text contrast ratio: 4.5:1 (WCAG AA compliant)
- Large text (18pt+) contrast ratio: 3:1
- Do not rely on color alone to convey meaning

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Tab order is logical and visible (focus indicators)
- No keyboard traps (users can always navigate out)
- Buttons and links respond to Enter/Space keys

### ARIA Labels
- Buttons have descriptive labels or aria-label attributes
- Interactive elements have proper role attributes
- Form fields have associated labels

### Motion & Animation
- `prefers-reduced-motion` media query included
- Animations respect user preferences
- No auto-playing videos or animations

## Testing Your Accessibility

### Screen Reader Testing

**Windows:**
- NVDA (free, open-source)
- Download: https://www.nvaccess.org/

**Mac:**
- VoiceOver (built-in)
- Enable: System Preferences > Accessibility > VoiceOver

**iOS/Android:**
- TalkBack (Android)
- VoiceOver (iOS)

**Testing Steps:**
1. Turn on screen reader
2. Navigate using keyboard (Tab key)
3. Listen to page description
4. Verify all content is announced properly
5. Check form labels and error messages

### Keyboard Navigation Testing

1. Unplug your mouse
2. Use only Tab, Shift+Tab, Enter, and Space keys
3. Navigate entire page
4. Access all interactive elements
5. Verify logical tab order

### Color Contrast Testing

- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Lighthouse in Chrome DevTools
- axe DevTools browser extension

### Automated Testing

```bash
# Install axe DevTools
# Run in browser console or automated tests

# Using Pa11y (command line)
npm install -g pa11y
pa11y https://yoursite.com

# Using Lighthouse
lighthouse https://yoursite.com --view
```

## Common Accessibility Improvements

### Images
```html
<!-- Good: Descriptive alt text -->
<img src="dashboard.png" alt="Analytics dashboard showing user engagement metrics">

<!-- Bad: Generic alt text -->
<img src="dashboard.png" alt="image">

<!-- Decorative images -->
<img src="divider.png" alt="">
```

### Links
```html
<!-- Good: Descriptive link text -->
<a href="/pricing">View our pricing plans</a>

<!-- Bad: Generic link text -->
<a href="/pricing">Click here</a>
```

### Form Validation
```html
<!-- Good: Associated label, error aria-live -->
<label for="email">Email Address</label>
<input id="email" type="email" required aria-invalid="false">
<span aria-live="polite" class="error-message"></span>

<!-- Good: Required field indication -->
<label for="name">
    Full Name
    <span aria-label="required">*</span>
</label>
```

### Focus Management
```html
<!-- Visible focus indicator -->
<style>
    :focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
</style>

<!-- Never remove focus outline -->
/* Bad */
button:focus {
    outline: none;
}

/* Good */
button:focus {
    outline: 2px solid var(--primary-color);
}
```

### Motion & Animation
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Color
```css
/* Don't rely on color alone */
.error {
    color: red;           /* ✓ Color */
    border-left: 4px solid red;  /* ✓ Additional indicator */
}

.success {
    color: green;         /* ✓ Color */
    background-image: url('checkmark.svg');  /* ✓ Additional indicator */
}
```

## Accessibility Checklist

### Structure
- [ ] Page has exactly one `<h1>` tag
- [ ] Heading hierarchy is logical (no skipping levels)
- [ ] Page uses semantic HTML elements
- [ ] Form inputs have associated `<label>` elements

### Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] No keyboard traps exist

### Content
- [ ] All images have alt text (or empty alt for decorative)
- [ ] Link text is descriptive
- [ ] Color is not the only way to convey meaning
- [ ] Text content has sufficient color contrast (4.5:1)

### Forms
- [ ] All required fields are marked
- [ ] Error messages are clear and associated with inputs
- [ ] Form can be completed with keyboard only
- [ ] Success messages are announced

### Media
- [ ] Videos have captions
- [ ] Audio has transcripts
- [ ] No content flashes more than 3 times per second

### Testing
- [ ] Tested with screen reader (NVDA/VoiceOver)
- [ ] Tested with keyboard only (no mouse)
- [ ] Tested in Chrome Lighthouse
- [ ] Tested with axe DevTools
- [ ] Tested on mobile screen readers

## WCAG 2.1 Levels

**Level A** - Basic web accessibility (minimum)
**Level AA** - Enhanced accessibility (recommended) ✓ This template
**Level AAA** - Advanced accessibility (gold standard)

This template meets **Level AA** by default.

## Resources

- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM: https://webaim.org/
- The A11Y Project: https://www.a11yproject.com/
- Inclusive Components: https://inclusive-components.design/
- W3C WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/

## Common Mistakes to Avoid

❌ **Removing focus outlines** without providing an alternative
```css
/* Bad */
:focus { outline: none; }

/* Good */
:focus {
    outline: 2px solid blue;
    outline-offset: 2px;
}
```

❌ **Using `<div>` for buttons**
```html
<!-- Bad -->
<div onclick="submitForm()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
```

❌ **Images without alt text**
```html
<!-- Bad -->
<img src="chart.png">

<!-- Good -->
<img src="chart.png" alt="Monthly sales chart showing 25% growth">
```

❌ **Color-only indicators**
```css
/* Bad - relies on color alone */
.required { color: red; }

/* Good - uses multiple indicators */
.required {
    color: red;
    border-left: 4px solid red;
}
.required::after { content: " *"; }
```

❌ **Skipping heading levels**
```html
<!-- Bad -->
<h1>Page Title</h1>
<h3>Section</h3>

<!-- Good -->
<h1>Page Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

❌ **Auto-playing audio/video**
```html
<!-- Bad -->
<audio autoplay>...</audio>

<!-- Good - user initiates -->
<audio controls>...</audio>
```

## Getting Help

If you need to audit this template for accessibility:

1. **Use Chrome DevTools Lighthouse**
   - Right-click → Inspect → Lighthouse tab
   - Run accessibility audit

2. **Use axe DevTools**
   - Free browser extension
   - Quick automated scanning

3. **Get a professional review**
   - Hire an accessibility specialist for thorough testing
   - Cost: $500-2000 depending on site complexity

## Next Steps

1. Add your own content
2. Test with real users (especially those using assistive tech)
3. Gather feedback and iterate
4. Keep accessibility in mind as you make changes
5. Regular audits (quarterly or after major updates)

**Remember: Accessibility is not a feature, it's a requirement.**
