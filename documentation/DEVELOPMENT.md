# SIH-2025 Development Guide

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Development Workflow](#development-workflow)
6. [Coding Standards](#coding-standards)
7. [Testing](#testing)
8. [Debugging](#debugging)
9. [Branching Strategy](#branching-strategy)
10. [Pull Requests](#pull-requests)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)

## Overview

This guide provides instructions for setting up a development environment and contributing to the SIH-2025 project. The project is a modern web application built with React, Vite, TypeScript, and Express.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v18 or higher)
2. **pnpm** (v10.14.0 or higher)
3. **Git**
4. **Code Editor** (VS Code recommended)
5. **Browser** (Chrome, Firefox, or Edge)

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd sih-2025
```

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

## Project Structure

```
sih-2025/
├── api/                 # Vercel serverless functions
├── client/              # Frontend React application
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   └── global.css       # Global styles
├── documentation/       # Project documentation
├── public/              # Static assets
├── server/              # Express server code
├── shared/              # Shared code between client and server
├── src/                 # Entry points
├── .npmrc               # NPM configuration
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── pnpm-lock.yaml       # Dependency lock file
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel configuration
├── vite.config.ts       # Vite client configuration
└── vite.config.server.ts # Vite server configuration
```

## Development Workflow

### Creating a New Feature

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**
   - Follow coding standards
   - Write tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run test
   npm run typecheck
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add feature: your feature description"
   ```

5. **Push to remote**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**

### Running the Application

#### Development Mode
```bash
npm run dev
```

#### Production Build
```bash
npm run build
```

#### Preview Production Build
```bash
npm run start
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict type checking
- Use interfaces for object shapes
- Use enums for constants

### React

- Use functional components with hooks
- Prefer composition over inheritance
- Use React Query for server state
- Use React Context for client state

### Styling

- Use Tailwind CSS for styling
- Follow the established design system
- Use utility classes instead of custom CSS when possible
- Maintain responsive design principles

### Code Organization

- Keep components small and focused
- Use meaningful variable and function names
- Group related functionality
- Separate concerns (UI, logic, data fetching)

### File Naming

- Use PascalCase for components (`Button.tsx`)
- Use camelCase for utilities (`utils.ts`)
- Use kebab-case for configuration files (`vite.config.ts`)

## Testing

### Running Tests

```bash
npm run test
```

### Test Structure

Tests are located next to the files they test:
```
client/lib/
├── utils.ts
└── utils.spec.ts
```

### Writing Tests

Use Vitest for unit testing:

```typescript
import { describe, it, expect } from 'vitest';
import { formatNumber } from './utils';

describe('formatNumber', () => {
  it('should format numbers correctly', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });
});
```

### Test Coverage

Aim for at least 80% test coverage for critical functionality.

## Debugging

### Browser Debugging

1. Open Developer Tools (F12)
2. Use console.log for debugging
3. Set breakpoints in the Sources tab
4. Inspect network requests in the Network tab

### Server Debugging

1. Check Vercel function logs
2. Use console.log in serverless functions
3. Test API endpoints with tools like Postman

### Common Issues

#### Type Errors
```bash
npm run typecheck
```

#### Linting Issues
```bash
npm run format.fix
```

## Branching Strategy

We follow the GitFlow branching strategy:

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `release/*` - Release preparation
- `hotfix/*` - Emergency fixes

### Branch Naming

- Features: `feature/feature-name`
- Bugs: `bugfix/bug-name`
- Releases: `release/version`
- Hotfixes: `hotfix/issue-name`

## Pull Requests

### PR Requirements

1. All tests must pass
2. Code must follow coding standards
3. Documentation must be updated
4. At least one approval required

### PR Template

```markdown
## Description
Brief description of the changes

## Changes
- List of changes
- Made in bullet points

## Testing
- How the changes were tested
- Any manual testing steps

## Screenshots
If applicable, add screenshots

## Related Issues
Fixes #123
```

### Code Review Process

1. Submit PR
2. Request review from team members
3. Address feedback
4. Get approval
5. Merge to target branch

## Deployment

### Development Deployment

Automatic deployment happens when code is pushed to `develop` branch.

### Production Deployment

1. Create a release branch
2. Test thoroughly
3. Merge to `main`
4. Create a Git tag

### Environment Variables

For local development, create a `.env` file:
```env
PING_MESSAGE=pong
NODE_ENV=development
```

## Troubleshooting

### Common Issues and Solutions

#### Dependency Installation Issues
```bash
pnpm install --force
```

#### Port Already in Use
Change the port in [vite.config.ts](../vite.config.ts):
```typescript
server: {
  port: 8081, // Change to available port
}
```

#### Type Errors
```bash
npm run typecheck
```

#### Build Failures
Check the error message and ensure:
- All dependencies are installed
- Environment variables are set
- File paths are correct

### Getting Help

1. Check the documentation
2. Review existing code for examples
3. Ask team members for help
4. Check Stack Overflow or official documentation

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run test` | Run tests |
| `npm run typecheck` | Check TypeScript types |
| `npm run format.fix` | Format code with Prettier |
| `npm run start` | Preview production build |

## Contributing

### Code of Conduct

1. Be respectful and inclusive
2. Provide constructive feedback
3. Follow coding standards
4. Write clear commit messages
5. Test your changes

### Reporting Issues

1. Check if the issue already exists
2. Provide detailed steps to reproduce
3. Include environment information
4. Add screenshots if applicable

## Resources

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vercel Documentation](https://vercel.com/docs)