# SIH-2025 Backend Documentation

## Table of Contents
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Project Structure](#project-structure)
4. [API Routes](#api-routes)
5. [Middleware](#middleware)
6. [Data Models](#data-models)
7. [Error Handling](#error-handling)
8. [Security](#security)
9. [Deployment](#deployment)

## Overview

The SIH-2025 backend is built with Express.js and provides RESTful API endpoints for the frontend application. It handles data processing, business logic, and serves as the interface between the frontend and any external services.

## Architecture

The backend follows a layered architecture pattern:

```
┌─────────────────────────────────────────────────────┐
│                    Client                           │
├─────────────────────────────────────────────────────┤
│                   Express.js                        │
├─────────────────────────────────────────────────────┤
│  Routes  │  Middleware  │  Controllers  │  Services  │
├─────────────────────────────────────────────────────┤
│                 Data Access Layer                   │
├─────────────────────────────────────────────────────┤
│              External Services/APIs                 │
└─────────────────────────────────────────────────────┘
```

### Key Architectural Components:

1. **Routes**: Define API endpoints and their handlers
2. **Middleware**: Handle cross-cutting concerns like authentication, logging, and validation
3. **Controllers**: Process requests and return responses
4. **Services**: Implement business logic
5. **Data Access Layer**: Interface with databases or external APIs

## Project Structure

```
server/
├── routes/              # API route definitions
│   └── demo.ts          # Example route implementation
├── index.ts             # Server entry point
└── node-build.ts        # Server build configuration

api/
├── demo.ts              # Vercel serverless function
├── health.ts            # Health check endpoint
├── index.ts             # API route aggregator
└── ping.ts              # Ping endpoint

shared/
└── api.ts              # Shared API definitions
```

## API Routes

### Health Check
- **Endpoint**: `GET /health`
- **Description**: Server health status
- **Response**: 
  ```json
  {
    "status": "ok",
    "timestamp": "2025-09-08T12:00:00.000Z"
  }
  ```

### Ping
- **Endpoint**: `GET /api/ping`
- **Description**: Simple ping endpoint
- **Response**: 
  ```json
  {
    "message": "ping"
  }
  ```

### Demo
- **Endpoint**: `GET /api/demo`
- **Description**: Example API endpoint
- **Response**: 
  ```json
  {
    "message": "Hello from the demo API!"
  }
  ```

## Middleware

The backend uses the following middleware:

### CORS
Cross-Origin Resource Sharing middleware to allow requests from the frontend domain.

### Body Parser
Middleware to parse incoming request bodies in JSON format.

### Logging
Request logging middleware for debugging and monitoring.

## Data Models

Currently, the backend uses in-memory data structures. For production, a database would be implemented.

### Example Data Model
```typescript
interface RoofAnalysis {
  id: string;
  location: string;
  roofArea: number;
  harvestPotential: number;
  recommendedStructure: string;
  status: 'processing' | 'completed';
  timestamp: string;
}
```

## Error Handling

The backend implements centralized error handling:

1. **Validation Errors**: 400 Bad Request
2. **Authentication Errors**: 401 Unauthorized
3. **Authorization Errors**: 403 Forbidden
4. **Resource Not Found**: 404 Not Found
5. **Server Errors**: 500 Internal Server Error

### Error Response Format
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {}
  }
}
```

## Security

Security measures implemented:

### Input Validation
All incoming data is validated using Zod schema validation.

### CORS Configuration
Restricted to allowed origins only.

### Rate Limiting
API rate limiting to prevent abuse.

### Secure Headers
Implementation of security headers to prevent common attacks.

## Deployment

The backend is deployed as serverless functions on Vercel.

### Vercel Serverless Functions
Located in the [api/](../api/) directory, these functions are automatically deployed as serverless endpoints.

### Environment Variables
Sensitive configuration is stored in environment variables:

- `PING_MESSAGE`: Custom message for ping endpoint
- `NODE_ENV`: Environment (development/production)

### Build Process
The server is built using Vite with the server configuration:

```bash
vite build --config vite.config.server.ts
```

## Monitoring and Logging

The backend includes basic logging for monitoring:

- Request logging
- Error logging
- Performance metrics

For production, integration with monitoring services like:
- Application Performance Monitoring (APM)
- Log aggregation services
- Alerting systems

## Scalability

The serverless architecture provides automatic scaling:

- **Vertical Scaling**: Handled by cloud provider
- **Horizontal Scaling**: Automatic based on demand
- **Load Balancing**: Managed by cloud provider

## Testing

Backend testing includes:

### Unit Tests
Testing individual functions and modules.

### Integration Tests
Testing API endpoints and data flow.

### Load Testing
Testing performance under various loads.

## API Documentation

API endpoints are documented using OpenAPI/Swagger specifications.

## Future Enhancements

Planned improvements:

1. Database integration (MongoDB/PostgreSQL)
2. Authentication and user management
3. Advanced caching mechanisms
4. Enhanced logging and monitoring
5. Comprehensive API documentation
6. Additional security measures