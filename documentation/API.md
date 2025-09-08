# SIH-2025 API Documentation

## Table of Contents
1. [Overview](#overview)
2. [Authentication](#authentication)
3. [API Endpoints](#api-endpoints)
4. [Data Models](#data-models)
5. [Error Handling](#error-handling)
6. [Rate Limiting](#rate-limiting)
7. [Examples](#examples)

## Overview

This document provides detailed information about the SIH-2025 API endpoints. The API follows REST principles and returns JSON responses.

Base URL: `https://sih-2025-ten.vercel.app/api`

## Authentication

Currently, the API does not require authentication. For production, JWT-based authentication would be implemented.

## API Endpoints

### Health Check

#### `GET /health`
Check the health status of the server.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-09-08T12:00:00.000Z"
}
```

**Response Codes:**
- `200` - Server is healthy
- `500` - Server error

### Ping

#### `GET /api/ping`
Simple ping endpoint to test API connectivity.

**Response:**
```json
{
  "message": "ping"
}
```

**Response Codes:**
- `200` - Success

### Demo

#### `GET /api/demo`
Example API endpoint.

**Response:**
```json
{
  "message": "Hello from the demo API!"
}
```

**Response Codes:**
- `200` - Success

### Roof Analysis

#### `POST /api/roof-analysis`
Submit a roof for analysis.

**Request Body:**
```json
{
  "location": "string",
  "roofImageUrl": "string",
  "roofArea": "number"
}
```

**Response:**
```json
{
  "id": "string",
  "location": "string",
  "roofArea": "number",
  "harvestPotential": "number",
  "recommendedStructure": "string",
  "status": "processing|completed",
  "timestamp": "string"
}
```

**Response Codes:**
- `201` - Analysis created
- `400` - Invalid request data
- `500` - Server error

#### `GET /api/roof-analysis/{id}`
Get the analysis result for a specific roof.

**Response:**
```json
{
  "id": "string",
  "location": "string",
  "roofArea": "number",
  "harvestPotential": "number",
  "recommendedStructure": "string",
  "status": "processing|completed",
  "timestamp": "string"
}
```

**Response Codes:**
- `200` - Success
- `404` - Analysis not found
- `500` - Server error

### Financial Analysis

#### `POST /api/financial-analysis`
Calculate financial ROI for water harvesting system.

**Request Body:**
```json
{
  "roofArea": "number",
  "harvestPotential": "number",
  "systemCost": "number"
}
```

**Response:**
```json
{
  "annualSavings": "number",
  "roiPeriod": "number",
  "breakEvenPoint": "string"
}
```

**Response Codes:**
- `200` - Success
- `400` - Invalid request data
- `500` - Server error

## Data Models

### RoofAnalysis
```json
{
  "id": "string",
  "location": "string",
  "roofArea": "number",
  "harvestPotential": "number",
  "recommendedStructure": "string",
  "status": "processing|completed",
  "timestamp": "string"
}
```

### FinancialAnalysis
```json
{
  "annualSavings": "number",
  "roiPeriod": "number",
  "breakEvenPoint": "string"
}
```

## Error Handling

All API errors follow a consistent format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {}
  }
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| VALIDATION_ERROR | 400 | Request data validation failed |
| NOT_FOUND | 404 | Resource not found |
| INTERNAL_ERROR | 500 | Internal server error |

## Rate Limiting

The API implements rate limiting to prevent abuse:
- 100 requests per hour per IP address
- 10 requests per minute per IP address

Exceeding these limits will result in a `429 Too Many Requests` response.

## Examples

### JavaScript Fetch Example

```javascript
// Ping endpoint
fetch('https://sih-2025-ten.vercel.app/api/ping')
  .then(response => response.json())
  .then(data => console.log(data));

// Submit roof analysis
fetch('https://sih-2025-ten.vercel.app/api/roof-analysis', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    location: 'Rajouri Garden, Delhi',
    roofImageUrl: 'https://example.com/roof.jpg',
    roofArea: 245
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### cURL Example

```bash
# Ping endpoint
curl -X GET https://sih-2025-ten.vercel.app/api/ping

# Submit roof analysis
curl -X POST https://sih-2025-ten.vercel.app/api/roof-analysis \
  -H "Content-Type: application/json" \
  -d '{
    "location": "Rajouri Garden, Delhi",
    "roofImageUrl": "https://example.com/roof.jpg",
    "roofArea": 245
  }'
```

## Changelog

### v1.0.0 (2025-09-08)
- Initial API release
- Health check endpoint
- Ping endpoint
- Demo endpoint