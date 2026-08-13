/**
 * @file asyncHandler.js
 * @description Higher-order wrapper for Express request handlers to catch async errors automatically.
 * Eliminates repetitive try-catch blocks in controller endpoints.
 */

/**
 * Wraps an async route handler to capture exceptions and forward them to Next function.
 * @param {Function} requestHandler - Async express controller function (req, res, next)
 * @returns {Function} Express middleware function
 */
export const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
