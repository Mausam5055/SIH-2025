# SIH-2025 Deployment Guide

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Deployment to Vercel](#deployment-to-vercel)
4. [Environment Variables](#environment-variables)
5. [Build Process](#build-process)
6. [Custom Domain](#custom-domain)
7. [Monitoring](#monitoring)
8. [Troubleshooting](#troubleshooting)

## Overview

This guide provides instructions for deploying the SIH-2025 application to Vercel. The application consists of a frontend built with React and Vite, and a backend API built with Express.js that runs as serverless functions on Vercel.

## Prerequisites

Before deploying, ensure you have:

1. A GitHub account
2. A Vercel account
3. Node.js 18+ installed locally (for testing)
4. pnpm package manager installed
5. Git installed

## Deployment to Vercel

### Automatic Deployment with GitHub

1. Push your code to a GitHub repository
2. Sign in to your Vercel account
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project settings:
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist/spa`
6. Click "Deploy"

### Manual Deployment with Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Navigate to your project directory:
   ```bash
   cd sih-2025
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

## Environment Variables

The application uses the following environment variables:

### Required Variables
- `PING_MESSAGE`: Custom message for the ping endpoint (default: "ping")

### Setting Environment Variables

In Vercel:
1. Go to your project dashboard
2. Click on "Settings"
3. Navigate to "Environment Variables"
4. Add your variables

For local development, create a `.env` file in the root directory:
```env
PING_MESSAGE=pong
NODE_ENV=development
```

## Build Process

The build process is defined in the [package.json](../package.json) scripts:

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Build Configuration Files

1. [vite.config.ts](../vite.config.ts) - Client-side build configuration
2. [vite.config.server.ts](../vite.config.server.ts) - Server-side build configuration
3. [vercel.json](../vercel.json) - Vercel deployment configuration

### Build Output

The build process creates two output directories:
- `dist/spa/` - Static frontend files
- `dist/server/` - Serverless function files

## Custom Domain

To configure a custom domain:

1. In your Vercel dashboard, go to your project
2. Click on "Settings"
3. Navigate to "Domains"
4. Add your custom domain
5. Follow the DNS configuration instructions

### SSL Certificate

Vercel automatically provisions SSL certificates for custom domains.

## Monitoring

### Vercel Analytics

Vercel provides built-in analytics for:
- Web vitals
- Audience insights
- Performance metrics

### Error Tracking

For production error tracking, integrate with services like:
- Sentry
- LogRocket
- Rollbar

### Performance Monitoring

Monitor performance with:
- Lighthouse reports
- WebPageTest
- GTmetrix

## Troubleshooting

### Common Issues

#### Build Failures
1. Check dependencies in [package.json](../package.json)
2. Ensure all required environment variables are set
3. Verify Node.js version compatibility

#### Deployment Errors
1. Check Vercel logs in the deployment dashboard
2. Verify file paths in [vercel.json](../vercel.json)
3. Ensure the build command is correct

#### Runtime Errors
1. Check browser console for frontend errors
2. Check Vercel function logs for backend errors
3. Verify API endpoint URLs

### Debugging Steps

1. **Local Testing**
   ```bash
   npm run dev
   ```

2. **Build Testing**
   ```bash
   npm run build
   npm run start
   ```

3. **Type Checking**
   ```bash
   npm run typecheck
   ```

4. **Testing**
   ```bash
   npm run test
   ```

### Vercel-Specific Issues

#### Function Timeout
- Default timeout: 10 seconds
- Increase for long-running operations
- Optimize function performance

#### Memory Limit
- Default limit: 1024 MB
- Monitor memory usage
- Optimize code to reduce memory consumption

## Rollback Procedure

To rollback to a previous deployment:

1. Go to your Vercel project dashboard
2. Click on "Deployments"
3. Find the deployment you want to rollback to
4. Click the "Promote to Production" button

## Backup and Recovery

### Source Code
- Maintain code in GitHub repository
- Use Git tags for versioning

### Data Backup
- For database-backed applications, implement regular backups
- Store backups in secure, redundant storage

## Security Considerations

### HTTPS
- Vercel automatically provides HTTPS for all deployments

### Environment Variables
- Store sensitive data as environment variables
- Never commit secrets to the repository

### CORS
- Configure CORS properly in [server/index.ts](../server/index.ts)

## Performance Optimization

### Caching
- Configure caching headers in [vercel.json](../vercel.json)
- Implement client-side caching with React Query

### Asset Optimization
- Vercel automatically optimizes images
- Minify CSS and JavaScript during build

### Code Splitting
- Implemented in [vite.config.ts](../vite.config.ts)
- Reduces initial bundle size

## Scaling

### Automatic Scaling
- Vercel automatically scales serverless functions
- Edge network distributes content globally

### Manual Scaling
- Upgrade Vercel plan for higher limits
- Implement database connection pooling

## Maintenance

### Regular Updates
- Update dependencies regularly
- Monitor for security vulnerabilities
- Test updates in staging environment

### Monitoring Setup
- Configure uptime monitoring
- Set up alerting for critical issues
- Review analytics regularly

## Support

For deployment issues:
1. Check Vercel documentation
2. Review deployment logs
3. Contact Vercel support
4. Consult the development team