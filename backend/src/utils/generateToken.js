/**
 * @file generateToken.js
 * @description JWT token generation utilities for access and refresh tokens.
 */

import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';

/**
 * Generate Access JWT Token for authenticated users.
 * @param {string|object} payload - User identification payload (e.g. userId)
 * @returns {string} Signed JWT Access Token
 */
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

/**
 * Generate Refresh JWT Token for persistent sessions.
 * @param {string|object} payload - User identification payload
 * @returns {string} Signed JWT Refresh Token
 */
export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, config.jwt.refreshSecret, {
    expiresIn: config.jwt.refreshExpiresIn,
  });
};
