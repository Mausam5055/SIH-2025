import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const ping = process.env.PING_MESSAGE ?? "ping";
  response.status(200).json({ message: ping });
}