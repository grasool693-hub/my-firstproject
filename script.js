/* ========================================
   Landing Page Interactive Features
   ======================================== */

// Utility: DOM Ready Handler
const domReady = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

// ========================================
// Scroll to Top Button
// ========================================
const initScrollToTop = () => {
  const scrollThreshold = 300;

  // Create scroll-to-top button
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > scrollThreshold) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Smooth scroll to top
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

// ========================================
// Intersection Observer for Scroll Animations
// ========================================
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all feature cards, pricing cards, and testimonial cards
  const elements = document.querySelectorAll(
    '.feature-card, .pricing-card, .testimonial-card'
  );

  elements.forEach(el => {
    observer.observe(el);
  });
};

// ========================================
// Mobile Navigation Toggle
// ========================================
const initMobileNav = () => {
  const navLinks = document.querySelector('.nav-links');

  if (!navLinks) return;

  // Create mobile menu button
  const menuBtn = document.createElement('button');
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.innerHTML = '☰';
  menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
  menuBtn.setAttribute('aria-expanded', 'false');

  const navbar = document.querySelector('.navbar__container');
  navbar.appendChild(menuBtn);

  // Toggle menu on mobile
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
};

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without page jump
        window.history.pushState(null, null, href);
      }
    });
  });
};

// ========================================
// Button Click Feedback
// ========================================
const initButtonFeedback = () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Create ripple effect
      const ripple = document.createElement('span');
      ripple.className = 'ripple';

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      this.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => ripple.remove(), 600);
    });
  });
};

// ========================================
// Form Validation (for future forms)
// ========================================
const initFormValidation = () => {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let isValid = true;
      const formData = new FormData(this);

      // Basic validation
      for (let [key, value] of formData) {
        const field = this.querySelector(`[name="${key}"]`);

        if (!value.trim()) {
          isValid = false;
          field.classList.add('error');
          field.setAttribute('aria-invalid', 'true');
        } else {
          field.classList.remove('error');
          field.setAttribute('aria-invalid', 'false');
        }

        // Email validation
        if (key === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            isValid = false;
            field.classList.add('error');
            field.setAttribute('aria-invalid', 'true');
          }
        }
      }

      if (isValid) {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.textContent = 'Thank you! We\'ll be in touch soon.';
        this.appendChild(successMsg);

        // Reset form
        this.reset();

        // Remove message after 5 seconds
        setTimeout(() => successMsg.remove(), 5000);
      }
    });
  });
};

// ========================================
// Lazy Loading Images
// ========================================
const initLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// ========================================
// Counter Animation (for stats sections)
// ========================================
const animateCounter = (element, target, duration = 2000) => {
  let current = 0;
  const increment = target / (duration / 16); // 60fps

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

const initCounterAnimation = () => {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        const target = parseInt(entry.target.textContent);
        if (!isNaN(target)) {
          animateCounter(entry.target, target);
          entry.target.dataset.counted = 'true';
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => {
    counterObserver.observe(el);
  });
};

// ========================================
// Active Navigation Link
// ========================================
const initActiveNavLink = () => {
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
};

// ========================================
// Page Load Animation
// ========================================
const initPageLoadAnimation = () => {
  document.body.style.opacity = '0';

  window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
  });
};

// ========================================
// Performance: Debounce Utility
// ========================================
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// ========================================
// Keyboard Navigation
// ========================================
const initKeyboardNav = () => {
  const buttons = document.querySelectorAll('.btn, a');

  buttons.forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (btn.tagName === 'BUTTON') {
          btn.click();
        }
      }
    });
  });
};

// ========================================
// Initialize All Features
// ========================================
domReady(() => {
  // Core features
  initScrollToTop();
  initScrollAnimations();
  initMobileNav();
  initSmoothScroll();
  initPageLoadAnimation();

  // Interactive features
  initButtonFeedback();
  initFormValidation();
  initLazyLoading();
  initCounterAnimation();
  initActiveNavLink();
  initKeyboardNav();

  console.log('Landing page initialized successfully');
});

// ========================================
// Service Worker Registration (optional)
// ========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker registration failed, app will still work
    });
  });
}
