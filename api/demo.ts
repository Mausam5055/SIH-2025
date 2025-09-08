import { createServer } from "../server";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  // Simple API response without Express server integration
  response.status(200).json({ 
    message: "Hello from the demo API!",
    timestamp: new Date().toISOString()
  });
}

const app = createServer();

export default async function handler(request, response) {
  // Create a mock request and response object to pass to our Express app
  const mockReq = {
    ...request,
    path: '/api/demo',
    method: 'GET',
    headers: request.headers,
    query: request.query,
    body: request.body,
  };

  const mockRes = {
    status: (code) => {
      response.status(code);
      return mockRes;
    },
    json: (data) => {
      response.json(data);
    },
    send: (data) => {
      response.send(data);
    },
    setHeader: (name, value) => {
      response.setHeader(name, value);
    }
  };

  // Call the Express app with our mock objects
  app(mockReq, mockRes);
}