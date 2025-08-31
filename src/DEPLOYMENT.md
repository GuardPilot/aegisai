# Deployment Guide

This guide covers deployment options for the AegisAI website.

## Vercel (Recommended)

### Automatic Deployment

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect your GitHub account
4. Import your repository
5. Vercel will automatically detect the project settings
6. Deploy!

### Manual Configuration

If needed, create `vercel.json` in the root:

```json
{
  "build": {
    "env": {
      "NODE_VERSION": "18"
    }
  },
  "functions": {
    "app/**/*.tsx": {
      "runtime": "@vercel/node@3"
    }
  }
}
```

## Netlify

### Automatic Deployment

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

### Configuration File

Create `netlify.toml` in the root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## GitHub Pages

### Setup

1. Install GitHub Pages deployment package:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` with base path:
```typescript
export default defineConfig({
  base: '/aegisai-website/',
  // ... other config
})
```

4. Deploy:
```bash
npm run deploy
```

## Docker

### Dockerfile

Create `Dockerfile` in the root:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Nginx Configuration

Create `nginx.conf`:

```nginx
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }

        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

### Build and Run

```bash
docker build -t aegisai-website .
docker run -p 8080:80 aegisai-website
```

## Environment Variables

For production deployments, you may want to set:

- `NODE_ENV=production`
- `VITE_API_URL=your-api-url` (if using external APIs)

## Performance Optimization

### Build Optimization

The project is already optimized with:
- Code splitting
- Tree shaking
- Asset optimization
- Lazy loading

### Additional Optimizations

1. **CDN Setup**: Use a CDN for static assets
2. **Compression**: Enable gzip/brotli compression
3. **Caching**: Set proper cache headers
4. **Image Optimization**: Use WebP format when possible

## Security Headers

Add these headers for production:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: images.unsplash.com;
```

## Monitoring

Consider adding:
- Google Analytics
- Sentry for error tracking
- Lighthouse CI for performance monitoring
- Uptime monitoring

## Domain Setup

1. Purchase your domain
2. Point DNS to your hosting provider
3. Setup SSL certificate (usually automatic)
4. Configure domain in your hosting platform

## Troubleshooting

### Common Issues

1. **Build Fails**: Check Node.js version (requires 18+)
2. **Images Not Loading**: Verify Unsplash URLs and fallbacks
3. **Fonts Not Loading**: Check Google Fonts connectivity
4. **404 on Refresh**: Configure SPA routing on your host

### Debug Commands

```bash
# Check build locally
npm run build && npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```