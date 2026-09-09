# Deployment Guide

Step-by-step instructions for deploying your landing page to various platforms.

## Table of Contents

1. [Vercel (Recommended)](#vercel)
2. [Netlify](#netlify)
3. [GitHub Pages](#github-pages)
4. [Traditional Hosting](#traditional-hosting)
5. [Cloudflare Pages](#cloudflare-pages)
6. [Post-Deployment](#post-deployment)

---

## Vercel

**Best for:** Fastest deployment, built-in optimization, free tier

### Via Web Dashboard

1. Go to https://vercel.com
2. Click "Create" button
3. Choose "Other" → "Folder"
4. Select your landing page folder
5. Click "Deploy"
6. Your site is live! 🎉

Your URL: `project-name.vercel.app`

### Via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd your-project-folder
vercel

# For production
vercel --prod
```

### Custom Domain

1. Go to Vercel Dashboard
2. Click your project
3. Go to Settings → Domains
4. Add your domain
5. Follow DNS instructions from your domain registrar

---

## Netlify

**Best for:** Simple drag-and-drop, built-in forms, free tier

### Via Web Dashboard (Easiest)

1. Go to https://app.netlify.com
2. Drag and drop your project folder
3. Your site is live! 🎉

### Via Git

1. Push code to GitHub/GitLab
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Select repository
5. Click "Deploy"

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd your-project-folder
netlify deploy

# For production
netlify deploy --prod
```

### netlify.toml Configuration

Create `netlify.toml` in project root:

```toml
[build]
command = "echo 'Build complete'"
publish = "."

[[redirects]]
from = "/*"
to = "/index.html"
status = 200

[context.production]
command = "echo 'Production build'"

[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
```

### Custom Domain

1. Go to Site settings
2. Click "Domain management"
3. Add custom domain
4. Follow DNS instructions

---

## GitHub Pages

**Best for:** Free hosting, version control, GitHub integration

### Setup

1. Create GitHub account (free at github.com)
2. Create new repository (name it: `username.github.io`)
3. Upload files to repository
4. Go to Settings → Pages
5. Select "Deploy from a branch"
6. Select `main` branch
7. Click Save

Your site is live at: `username.github.io`

### With Custom Domain

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In GitHub repo Settings → Pages → Custom domain
3. Enter your domain name
4. Point domain DNS to GitHub:
   - Add A records to: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Or CNAME: `username.github.io`
5. Enable "Enforce HTTPS"

### GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## Cloudflare Pages

**Best for:** Global CDN, email routing, free tier

### Setup

1. Go to https://pages.cloudflare.com
2. Create account (free)
3. Connect Git repository or upload files
4. Select build settings (leave blank for static site)
5. Deploy

Your site is live at: `project-name.pages.dev`

### Custom Domain

1. Go to project settings
2. Click "Domains"
3. Add custom domain
4. Update nameservers at registrar

### .wrangler Configuration

Create `wrangler.toml`:

```toml
name = "landing-page"
type = "javascript"
account_id = "your-account-id"
workers_dev = true
route = "example.com/*"
zone_id = "your-zone-id"

[build]
command = ""
cwd = "./"
```

---

## Traditional Hosting (cPanel, Shared Hosting)

**Best for:** Existing hosting provider, custom server setup

### Via FTP

1. Get FTP credentials from hosting provider
2. Download FileZilla or WinSCP (free)
3. Connect using credentials:
   - Host: ftp.yourserver.com
   - Username: your-username
   - Password: your-password
4. Navigate to `public_html` folder
5. Upload all files
6. Visit your domain

### Via cPanel File Manager

1. Log in to cPanel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload files
5. Visit your domain

### Configure Server

#### .htaccess (Apache)

Create `.htaccess` in root:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresDefault "access plus 1 month"
    ExpiresByType text/html "access plus 0 seconds"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
</IfModule>

# Redirect www to non-www
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
    RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
</IfModule>

# Redirect HTTP to HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;
    
    ssl_certificate /etc/ssl/certs/your-cert.crt;
    ssl_certificate_key /etc/ssl/private/your-key.key;
    
    root /var/www/landing-page;
    index index.html;
    
    # Compression
    gzip on;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/javascript;
    
    # Caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf)$ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Route all requests to index.html for SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Post-Deployment Checklist

### Immediate Tasks

- [ ] Visit your live site and test
- [ ] Check on mobile device
- [ ] Test all links
- [ ] Test forms
- [ ] Test buttons
- [ ] Verify images load

### SEO Setup

- [ ] Add to Google Search Console (https://search.google.com/search-console)
- [ ] Add to Bing Webmaster Tools (https://www.bing.com/webmasters)
- [ ] Create sitemap.xml
- [ ] Add robots.txt

### Analytics Setup

Add Google Analytics:

```html
<!-- In <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

### Security Setup

- [ ] Enable HTTPS (automatic on most modern hosts)
- [ ] Set security headers (done in config files above)
- [ ] Enable CORS if needed
- [ ] Set up email (Gmail, Mailgun, SendGrid)

### Performance Check

```bash
# Run Lighthouse
lighthouse https://yourdomain.com --view
```

Target scores:
- Performance: 90+
- Accessibility: 100
- Best Practices: 90+
- SEO: 100

### Monitoring Setup

Set up monitoring to get alerts if site goes down:

**Free options:**
- UptimeRobot (https://uptimerobot.com)
- Pingdom (https://www.pingdom.com)
- HealthChecks (https://healthchecks.io)

**Paid options:**
- New Relic
- Datadog
- CloudWatch

---

## Custom Domain Setup

### Buy a Domain

Popular registrars:
- Namecheap (https://namecheap.com) - Cheapest
- Google Domains (https://domains.google.com) - Easiest
- GoDaddy (https://godaddy.com) - Most features

### Point Domain to Hosting

#### For Vercel/Netlify/GitHub Pages

1. Go to your domain registrar
2. Find DNS settings
3. Add these records:

```
Type: CNAME
Name: www
Value: your-hosting-provider.url
```

Or for root domain:

```
Type: A
Name: @
Value: IP-from-hosting-provider
```

4. Wait 24-48 hours for propagation

#### Verify Domain

```bash
# Check DNS propagation
nslookup yourdomain.com
# or
dig yourdomain.com
```

---

## SSL/HTTPS Certificate

Most modern hosting includes free SSL. If not:

### Free Option: Let's Encrypt

```bash
# Using Certbot
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com
```

### Commercial Certificates

- Comodo
- DigiCert
- GeoTrust

---

## Environment Variables

If you need to store secrets (API keys, etc.):

### Netlify

Create `netlify.toml`:

```toml
[build]
environment = { NODE_ENV = "production" }

[context.production.environment]
SECRET_KEY = "your-secret"
```

### Vercel

1. Go to project Settings
2. Environment Variables
3. Add KEY=VALUE
4. Redeploy

In code:

```javascript
const apiKey = process.env.SECRET_KEY;
```

---

## Auto-Deployment on Code Changes

### GitHub + Vercel

1. Connect GitHub repo to Vercel
2. Every push to main = auto-deploy
3. Every PR = preview URL

### GitHub + Netlify

1. Connect GitHub repo to Netlify
2. Configure build settings
3. Auto-deploy on push

---

## Rollback (If Something Goes Wrong)

### Vercel
- Go to Deployments tab
- Click on previous version
- Click "Promote to Production"

### Netlify
- Go to Deploys tab
- Click on previous deployment
- Click "Publish deploy"

### GitHub Pages
- Revert commit: `git revert <commit-id>`
- Push: `git push origin main`

---

## Troubleshooting Deployment Issues

### Site Shows "Not Found"

- Check files uploaded correctly
- Verify `index.html` is in root directory
- Clear browser cache (Ctrl+Shift+Delete)

### CSS/JS Not Loading

- Check file paths are absolute, not relative
- Verify files were uploaded
- Clear CDN cache (if using one)
- Try hard refresh (Ctrl+Shift+R)

### Domain Not Working

- Check DNS propagation (24-48 hours)
- Use `nslookup` or `dig` to debug
- Verify DNS records are correct

### Slow Site

- Run Lighthouse to identify issues
- Optimize images (see PERFORMANCE.md)
- Enable caching headers
- Use CDN

### Forms Not Submitting

- Verify form service is configured (Formspree, etc.)
- Check form action URL
- Test in incognito mode
- Check browser console for errors (F12)

---

## Continuous Improvement

After deployment:

1. **Monitor performance** - Weekly Lighthouse audits
2. **Check analytics** - Monthly traffic analysis
3. **A/B test** - Test different CTAs, layouts
4. **Gather feedback** - User surveys
5. **Update content** - Keep info current
6. **Fix issues** - Address user feedback

---

**Deployment checklist:**

```
□ All files uploaded
□ Links working
□ Images loading
□ Forms functioning
□ Mobile responsive
□ Lighthouse 90+
□ Google Search Console added
□ Analytics installed
□ SSL/HTTPS enabled
□ Custom domain configured
□ Monitoring set up
```

**Deployment successful! 🚀**
