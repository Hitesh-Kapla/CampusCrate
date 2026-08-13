/**
 * @file db.js
 * @description MongoDB connection setup using Mongoose.
 * Handles database connection lifecycle, success logging, and exit on failure.
 */

import mongoose from 'mongoose';
import { config } from './env.js';

/**
 * Connect to MongoDB database instance.
 * @returns {Promise<typeof mongoose>} Mongoose connection instance.
 */
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`[Database] Connection Error: ${error.message}`);
    process.exit(1);
  }
};
