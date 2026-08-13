/**
 * @file server.js
 * @description Server entry point for CampusCrate backend API.
 * Initializes process exception handling, establishes MongoDB connection, and starts Express HTTP server.
 */

import dotenv from 'dotenv';
// Load environment variables before importing modules relying on process.env
dotenv.config();

import app from './app.js';
import { connectDB } from './config/db.js';
import { config } from './config/env.js';
import { logger } from './utils/logger.js';

// Catch uncaught synchronous exceptions to prevent state corruption
process.on('uncaughtException', (err) => {
  logger.error(`UNCAUGHT EXCEPTION! Shutting down... ${err.name}: ${err.message}`);
  logger.error(err.stack);
  process.exit(1);
});

let server;

// Bootstrap DB and start HTTP server
connectDB()
  .then(() => {
    server = app.listen(config.port, () => {
      logger.info(
        `Server running in [${config.env}] mode on port [${config.port}]`
      );
    });
  })
  .catch((err) => {
    logger.error(`Database connection failed: ${err.message}`);
    process.exit(1);
  });

// Catch unhandled asynchronous promise rejections
process.on('unhandledRejection', (err) => {
  logger.error(`UNHANDLED REJECTION! Shutting down server... ${err.name}: ${err.message}`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// Handle graceful shutdown signals (SIGTERM / SIGINT)
const gracefulShutdown = (signal) => {
  logger.info(`${signal} received. Shutting down gracefully...`);
  if (server) {
    server.close(() => {
      logger.info('HTTP server closed.');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
