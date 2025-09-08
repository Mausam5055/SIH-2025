import "dotenv/config";
import express from "express";
import serverless from "serverless-http";
import { createServer } from "../server";

const app = createServer();

export const handler = serverless(app);