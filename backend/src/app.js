/**
 * @file app.js
 * @description Express application setup module.
 * Configures application-level middlewares, CORS, parsers, route handlers, 404 handler, and global error handling.
 * Does NOT call app.listen() (server bootstrapping is handled in server.js).
 */

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { config } from './config/env.js';
import apiRouter from './routes/index.js';
import { notFound } from './middlewares/notFound.middleware.js';
import { errorHandler } from './middlewares/error.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.join(__dirname, '../../frontend/dist');

const app = express();

// Cross-Origin Resource Sharing configuration
app.use(
  cors({
    origin: config.corsOrigin,
    credentials: true,
  })
);

// Body parsing middlewares
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// Cookie parser middleware
app.use(cookieParser());

// Static file serving for uploads (local fallback)
app.use('/uploads', express.static('./src/uploads'));

// API Routes registration (v1)
app.use('/api/v1', apiRouter);

// Serve frontend production build if present
if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
} else {
  // Root API landing & discovery endpoint
  app.get('/', (req, res) => {
    res.status(200).json({
      status: 'OK',
      message: 'Welcome to CampusCrate API - College Lost & Found System',
      version: 'v1',
      health: '/api/v1/health',
      endpoints: {
        auth: '/api/v1/auth',
        items: '/api/v1/items',
        claims: '/api/v1/claims',
        reports: '/api/v1/reports',
        admin: '/api/v1/admin',
      },
      timestamp: new Date().toISOString(),
    });
  });
}

// 404 Not Found Middleware for unhandled routes
app.use(notFound);

// Global Error Handler Middleware
app.use(errorHandler);

export default app;
