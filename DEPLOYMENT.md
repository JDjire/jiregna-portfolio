# Deployment Guide

## Quick Deployment Options

### 1. GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### 2. Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly with a custom URL
4. You can add a custom domain later

### 3. Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with one click
4. Get a custom URL and domain options

### 4. Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Your site will be live at your domain

## Pre-Deployment Checklist

- [ ] Update personal information in `script.js`
- [ ] Replace placeholder images in `assets/` folder
- [ ] Test all functionality in different browsers
- [ ] Verify responsive design on mobile devices
- [ ] Check all links and contact information
- [ ] Test contact form (remember it's frontend-only)
- [ ] Verify dark/light mode toggle works
- [ ] Test project filtering functionality

## Custom Domain Setup

### For GitHub Pages:
1. Add a `CNAME` file with your domain name
2. Update DNS settings with your domain provider
3. Enable HTTPS in repository settings

### For Netlify/Vercel:
1. Go to domain settings in your dashboard
2. Add your custom domain
3. Update DNS records as instructed
4. Enable SSL certificate

## Performance Optimization

The portfolio is already optimized with:
- ✅ Minified CSS and JavaScript (consider using build tools for production)
- ✅ Optimized images (replace placeholders with compressed images)
- ✅ Lazy loading for images
- ✅ Efficient animations and transitions
- ✅ Responsive images and layouts

## SEO Optimization

Add these meta tags to `index.html` for better SEO:
```html
<meta name="description" content="Jiregna Dereje - Web Developer Portfolio">
<meta name="keywords" content="web developer, portfolio, HTML, CSS, JavaScript">
<meta property="og:title" content="Jiregna Dereje - Portfolio">
<meta property="og:description" content="Web Developer Portfolio">
<meta property="og:image" content="assets/profile.jpg">
```

## Analytics

Consider adding Google Analytics or similar:
1. Get tracking code from Google Analytics
2. Add the script tag before closing `</body>` tag
3. Track page views and user interactions

## Backup

Always keep a backup of your portfolio:
- Use version control (Git)
- Store files in cloud storage
- Keep local copies on multiple devices

---

Your portfolio is now ready for deployment! 🚀


