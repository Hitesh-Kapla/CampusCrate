/**
 * @file auth.middleware.js
 * @description Authentication middleware verifying JWT access tokens in requests.
 * Extracts token from Bearer header or cookies and attaches verified user info to req.user.
 */

import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { config } from '../config/env.js';
import { User } from '../models/User.js';

export const authenticate = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication token required');
  }

  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid or expired authentication token');
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,
      error.message || 'Invalid authentication token'
    );
  }
});
