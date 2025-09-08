# SIH-2025 Dashboard

A modern full-stack web application built with React, Vite, TypeScript, and Express.

## Features

- Rich UI component library (Radix UI-based)
- Data visualization using Recharts
- Form handling with React Hook Form
- Responsive layout and mobile support
- API integration and server-side routing

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript
- **Backend**: Express.js
- **UI Library**: Radix UI, Tailwind CSS
- **Data Visualization**: Recharts
- **State Management**: React Query (TanStack Query)
- **Build Tools**: Vite, SWC, PostCSS, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
# Build both client and server
pnpm build
```

### Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite project and configure the build settings
3. Set environment variables in the Vercel dashboard as needed

## Project Structure

```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and utilities
├── public/          # Static assets
├── api/             # Vercel serverless functions
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Then fill in your values.

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Preview production build
- `test` - Run tests
- `format.fix` - Format code with Prettier
- `typecheck` - Run TypeScript type checking

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Create a new project in Vercel
3. Connect your repository
4. Vercel will automatically detect the build settings:
   - Build command: `pnpm build`
   - Output directory: `dist/spa`
   - Install command: `pnpm install`
5. Add environment variables in the Vercel dashboard
6. Deploy!

The configuration in `vercel.json` handles:
- Building the static frontend to `dist/spa`
- Routing API requests to serverless functions in the `api/` directory
- Serving static assets

### API Endpoints

The following API endpoints are available:

- `GET /api/ping` - Simple ping endpoint
- `GET /api/demo` - Demo data endpoint
- `GET /health` - Health check endpoint

These are implemented as Vercel serverless functions in the `api/` directory.