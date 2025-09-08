# SIH-2025 Architecture Overview

## System Architecture Diagram

```mermaid
graph TD
    A[Client Browser] --> B[React Frontend]
    B --> C[Vite Build Tool]
    C --> D[Static Assets]
    C --> E[JavaScript Bundles]
    D --> F[Vercel CDN]
    E --> F
    B --> G[API Requests]
    G --> H[Vercel Serverless Functions]
    H --> I[Express.js Backend]
    I --> J[Business Logic]
    J --> K[External Services]
    F --> A
```

## Frontend Architecture

```mermaid
graph TD
    A[App.tsx] --> B[Layout Component]
    A --> C[React Router]
    C --> D[Dashboard Page]
    C --> E[Roof Detection Page]
    C --> F[Analysis Page]
    C --> G[Reports Page]
    C --> H[Community Page]
    C --> I[Settings Page]
    B --> J[Header]
    B --> K[Sidebar]
    B --> L[Footer]
    D --> M[UI Components]
    M --> N[Radix UI Primitives]
    M --> O[Custom Components]
```

## Backend Architecture

```mermaid
graph TD
    A[Vercel Serverless Functions] --> B[Express.js Server]
    B --> C[Middleware]
    C --> D[Route Handlers]
    D --> E[Business Logic]
    E --> F[Data Processing]
    F --> G[Response]
    B --> H[API Routes]
    H --> I[/api/ping]
    H --> J[/api/demo]
    H --> K[/health]
```

## Deployment Architecture

```mermaid
graph TD
    A[GitHub Repository] --> B[Vercel Deployment]
    B --> C[Build Process]
    C --> D[Frontend Build]
    C --> E[Backend Build]
    D --> F[Static Files CDN]
    E --> G[Serverless Functions]
    F --> H[Global CDN]
    G --> H
    H --> I[End Users]
```

## Data Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as API
    participant B as Backend
    participant E as External Services

    U->>F: Interacts with UI
    F->>A: API Request
    A->>B: Process Request
    B->>E: External API Call
    E-->>B: Response
    B-->>A: Processed Data
    A-->>F: JSON Response
    F->>U: Update UI
```

## Component Hierarchy

```mermaid
graph TD
    A[App] --> B[Layout]
    B --> C[Header]
    B --> D[Sidebar]
    B --> E[Main Content]
    A --> F[Routes]
    F --> G[Dashboard]
    F --> H[Roof Detection]
    F --> I[Analysis]
    F --> J[Reports]
    F --> K[Community]
    F --> L[Settings]
    G --> M[Cards]
    G --> N[Charts]
    G --> O[Buttons]
    H --> P[Forms]
    H --> Q[Image Upload]
    H --> R[GIS Data]
```

## Technology Stack Overview

### Frontend Stack
- **Framework**: React 18.3.1
- **Build Tool**: Vite 7.1.2
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI
- **State Management**: React Query 5.84.2
- **Routing**: React Router DOM 6.30.1

### Backend Stack
- **Runtime**: Node.js
- **Framework**: Express 5.1.0
- **Deployment**: Vercel Serverless Functions
- **Validation**: Zod 3.25.76

### Development Tools
- **Package Manager**: pnpm 10.14.0
- **Testing**: Vitest 3.2.4
- **Formatting**: Prettier 3.6.2
- **Linting**: ESLint

### Infrastructure
- **Hosting**: Vercel
- **CDN**: Vercel Edge Network
- **CI/CD**: GitHub + Vercel Integration

## File Structure Overview

```
sih-2025/
├── api/                 # Serverless functions
├── client/              # Frontend application
│   ├── components/      # UI components
│   ├── hooks/           # React hooks
│   ├── lib/             # Utilities
│   ├── pages/           # Page components
│   └── App.tsx          # Main app
├── documentation/       # Project docs
├── public/              # Static assets
├── server/              # Server code
├── shared/              # Shared code
└── Configuration files  # Build and deploy configs
```

## SEO and Performance

### SEO Implementation
- Meta tags for search engines
- Open Graph tags for social media
- Twitter Cards for Twitter sharing
- Canonical URLs
- Robots.txt configuration

### Performance Optimizations
- Code splitting with Vite
- Asset compression
- Image optimization
- Caching strategies
- Lazy loading components
- Bundle size optimization

## Security Measures

- CORS configuration
- Input validation with Zod
- Secure headers
- Environment variable management
- Rate limiting
- XSS prevention

## Monitoring and Analytics

- Vercel Analytics
- Performance monitoring
- Error tracking
- User behavior analysis
- Uptime monitoring

## Detailed Architecture Diagrams

### 1. High-Level System Architecture

```mermaid
graph LR
    A[User] --> B[(Browser)]
    B --> C[Frontend - React/Vite]
    C --> D[(Vercel CDN)]
    D --> E[API Gateway]
    E --> F[Serverless Functions]
    F --> G[(Database/External APIs)]
    
    subgraph Frontend
        C
    end
    
    subgraph Backend
        E
        F
        G
    end
    
    style A fill:#4ade80
    style B fill:#60a5fa
    style C fill:#818cf8
    style D fill:#f87171
    style E fill:#fbbf24
    style F fill:#a78bfa
    style G fill:#f472b6
```

### 2. Frontend Component Architecture

```mermaid
graph TD
    A[App.tsx] --> B[Providers]
    B --> C[QueryClientProvider]
    B --> D[TooltipProvider]
    B --> E[BrowserRouter]
    
    E --> F[Routes]
    F --> G[Layout Route]
    G --> H[Header]
    G --> I[Sidebar]
    G --> J[Main Content]
    
    F --> K[Page Routes]
    K --> L[Dashboard]
    K --> M[Roof Detection]
    K --> N[Analysis]
    K --> O[Reports]
    K --> P[Community]
    K --> Q[Settings]
    K --> R[404 Not Found]
    
    subgraph Providers
        C
        D
        E
    end
    
    subgraph Layout
        H
        I
        J
    end
    
    subgraph Pages
        L
        M
        N
        O
        P
        Q
        R
    end
    
    style A fill:#4ade80
    style B fill:#60a5fa
    style F fill:#818cf8
    style G fill:#fbbf24
    style K fill:#f87171
```

### 3. Backend API Architecture

```mermaid
graph TD
    A[API Gateway] --> B[Vercel Functions]
    B --> C[Health Endpoint]
    B --> D[Ping Endpoint]
    B --> E[Demo Endpoint]
    B --> F[Roof Analysis]
    B --> G[Financial Analysis]
    
    F --> H[Roof Service]
    G --> I[Financial Service]
    
    H --> J[Data Processing]
    H --> K[AI Analysis]
    I --> L[Calculation Engine]
    
    J --> M[Database]
    K --> M
    L --> M
    
    subgraph API Endpoints
        C
        D
        E
        F
        G
    end
    
    subgraph Services
        H
        I
    end
    
    subgraph Processing
        J
        K
        L
    end
    
    subgraph Data
        M
    end
    
    style A fill:#4ade80
    style B fill:#60a5fa
    style F fill:#818cf8
    style G fill:#fbbf24
    style H fill:#f87171
    style I fill:#a78bfa
    style M fill:#f472b6
```

### 4. Data Flow Architecture

```mermaid
sequenceDiagram
    participant U as User
    participant FE as Frontend
    participant API as API Gateway
    participant SF as Serverless Functions
    participant S as Services
    participant DB as Database
    
    U->>FE: Navigate to page
    FE->>FE: Render UI Components
    U->>FE: Interact with form
    FE->>API: POST /api/roof-analysis
    API->>SF: Route to function
    SF->>S: Process request
    S->>DB: Save data
    DB-->>S: Confirm save
    S->>S: Perform analysis
    S-->>SF: Return results
    SF-->>API: JSON Response
    API-->>FE: HTTP Response
    FE->>FE: Update UI with results
    FE->>U: Display analysis
```

### 5. Deployment Pipeline

```mermaid
graph LR
    A[Developer] --> B[Git Commit]
    B --> C[GitHub Push]
    C --> D[GitHub Webhook]
    D --> E[Vercel Build]
    E --> F[Run Tests]
    F --> G[Build Frontend]
    G --> H[Build Backend]
    H --> I[Deploy to CDN]
    I --> J[Active Deployment]
    
    subgraph Development
        A
        B
        C
    end
    
    subgraph CI/CD
        D
        E
        F
        G
        H
        I
    end
    
    subgraph Production
        J
    end
    
    style A fill:#4ade80
    style C fill:#60a5fa
    style E fill:#818cf8
    style I fill:#fbbf24
    style J fill:#f87171
```

This architecture provides a scalable, maintainable, and performant web application that can be easily deployed and monitored.