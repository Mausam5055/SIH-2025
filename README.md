# SIH-2025 Dashboard

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)

A modern full-stack web application built with React, Vite, TypeScript, and Express for the Smart India Hackathon 2025.

![Project Preview](/public/preview.jpg)

## 🌟 Features

| Feature | Description |
|---------|-------------|
| **Rich UI Components** | Comprehensive component library built with Radix UI and Tailwind CSS |
| **Data Visualization** | Interactive charts and graphs using Recharts |
| **Form Handling** | Robust form validation and management with React Hook Form |
| **Responsive Design** | Mobile-first approach with responsive layouts |
| **API Integration** | Seamless backend communication with Express.js |
| **State Management** | Efficient state handling with TanStack Query |
| **Roof Detection** | AI-powered roof analysis for rainwater harvesting |
| **Community Features** | Social interaction and collaboration tools |

## 📚 Documentation

Comprehensive documentation is available in the [documentation](documentation/) directory:

| Document | Description |
|----------|-------------|
| [Frontend](documentation/FRONTEND.md) | Detailed frontend architecture and implementation |
| [Backend](documentation/BACKEND.md) | Backend API and server configuration |
| [API](documentation/API.md) | API endpoints and data models |
| [Deployment](documentation/DEPLOYMENT.md) | Deployment guide and best practices |
| [Development](documentation/DEVELOPMENT.md) | Development workflow and contribution guidelines |
| [Architecture](documentation/ARCHITECTURE.md) | System architecture and diagrams |

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Library |
| Vite | 7.1.2 | Build Tool |
| TypeScript | 5.9.2 | Type Safety |
| Tailwind CSS | 3.4.17 | Styling |
| Radix UI | Latest | Component Library |
| Recharts | 2.12.7 | Data Visualization |
| TanStack Query | 5.84.2 | Server State Management |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Express.js | 5.1.0 | Web Framework |
| Node.js | 18+ | Runtime Environment |
| Zod | 3.25.76 | Schema Validation |

### Development Tools
| Tool | Purpose |
|------|---------|
| pnpm | Package Manager |
| Vitest | Testing Framework |
| Prettier | Code Formatting |
| SWC | JavaScript Compiler |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd SIH-2025

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `start` | Preview production build |
| `test` | Run tests |
| `format.fix` | Format code with Prettier |
| `typecheck` | Run TypeScript type checking |

## 🏗️ Project Structure

```
SIH-2025/
├── client/                 # React frontend
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Application pages
│   └── App.tsx             # Main application component
├── server/                 # Express backend
│   ├── routes/             # API route handlers
│   └── index.ts            # Server entry point
├── shared/                 # Shared types and utilities
├── public/                 # Static assets
├── api/                    # Vercel serverless functions
├── netlify/                # Netlify serverless functions
├── documentation/          # Project documentation
└── dist/                   # Production build output
```

## 📁 Key Pages

| Page | Description |
|------|-------------|
| **Dashboard** | Main application overview with key metrics |
| **Analysis** | Data analysis and visualization tools |
| **Community** | Social features and user interactions |
| **Roof Detection** | AI-powered roof analysis for rainwater harvesting |
| **Reports** | Detailed reporting and analytics |
| **Settings** | User preferences and application settings |

## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/ping` | GET | Simple ping endpoint for health checks |
| `/api/demo` | GET | Demo data endpoint for testing |
| `/api/health` | GET | Health check endpoint |
| `/api/demo` | POST | Demo data submission endpoint |

## 🚀 Deployment

This project is configured for deployment on Vercel:

### Vercel Deployment

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

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Then fill in your values.

## 🧪 Testing

Run the test suite with:

```bash
pnpm test
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📧 Contact

Project Link: [https://github.com/your-username/SIH-2025](https://github.com/your-username/SIH-2025)