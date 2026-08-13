/**
 * @file cloudinary.js
 * @description Cloudinary v2 SDK configuration file.
 * Used for cloud image storage, transformations, and management.
 */

import { v2 as cloudinary } from 'cloudinary';
import { config } from './env.js';

// Configure Cloudinary SDK with credentials from environment config
cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

export default cloudinary;
