/**
 * @file error.middleware.js
 * @description Centralized global Express error handler middleware.
 * Formats operational errors (ApiError) and unhandled application errors into consistent JSON responses.
 */

import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { config } from '../config/env.js';

export const errorHandler = (err, req, res, next) => {
  let error = err;

  // Convert non-ApiError instances into operational ApiError format
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    const message = error.message || 'Internal Server Error';
    error = new ApiError(statusCode, message, [], err.stack);
  }

  const response = {
    success: false,
    statusCode: error.statusCode,
    message: error.message,
    errors: error.errors || [],
    ...(config.env === 'development' && { stack: error.stack }),
  };

  res.status(error.statusCode).json(response);
};
