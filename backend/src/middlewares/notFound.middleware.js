/**
 * @file notFound.middleware.js
 * @description 404 Route Not Found middleware.
 * Catches requests to non-existent API routes and forwards an ApiError to the error handler.
 */

import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

export const notFound = (req, res, next) => {
  const error = new ApiError(
    HTTP_STATUS.NOT_FOUND,
    `Route Not Found - ${req.originalUrl}`
  );
  next(error);
};
