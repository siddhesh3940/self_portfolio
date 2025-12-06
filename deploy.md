# Deployment Guide

## Quick Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from project root:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name: `siddhesh-portfolio` (or your preferred name)
   - In which directory is your code located? **.**
   - Want to override settings? **N**

5. Your site will be deployed and you'll get a URL!

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings (usually auto-detected)
6. Click "Deploy"

### Option 3: Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build && npm run export",
    "deploy": "gh-pages -d out",
    "export": "next export"
  }
}
```

3. Update next.config.js:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables

If you add any environment variables, create a `.env.local` file:

```bash
# Example environment variables
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Custom Domain Setup

### For Vercel:
1. Go to your project dashboard on Vercel
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed

### DNS Configuration:
- **A Record**: Point to Vercel's IP (76.76.19.61)
- **CNAME**: Point www to your-project.vercel.app

## Performance Optimization

1. **Image Optimization**: Add your images to `/public` folder
2. **Font Optimization**: Using next/font/google for optimal loading
3. **Bundle Analysis**: Run `npm run build` to see bundle size

## Monitoring

- **Vercel Analytics**: Enable in project settings
- **Core Web Vitals**: Monitor performance metrics
- **Error Tracking**: Set up Sentry or similar service

## Troubleshooting

### Common Issues:

1. **Build Errors**: Check TypeScript errors and dependencies
2. **Hydration Errors**: Ensure client/server rendering consistency
3. **404 Errors**: Check routing and file structure

### Debug Commands:
```bash
# Check for TypeScript errors
npm run lint

# Build locally to test
npm run build

# Start production build locally
npm start
```

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form functionality
- [ ] Check responsive design on different devices
- [ ] Test dark/light mode toggle
- [ ] Verify resume download works
- [ ] Test all external links (GitHub, LinkedIn)
- [ ] Check page loading performance
- [ ] Verify SEO meta tags

## Updates and Maintenance

1. **Regular Updates**: Keep dependencies updated
2. **Content Updates**: Update projects, skills, and experience
3. **Performance Monitoring**: Regular performance audits
4. **Security**: Keep Next.js and dependencies updated

---

Your portfolio is now live! 🚀