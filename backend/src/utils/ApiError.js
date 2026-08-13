/**
 * @file ApiError.js
 * @description Custom operational error class for API responses.
 * Extends JavaScript Error to provide standardized error format with status code and details.
 */

class ApiError extends Error {
  /**
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Error message summary
   * @param {Array} errors - Array of specific error details/validation errors
   * @param {string} stack - Optional stack trace override
   */
  constructor(statusCode, message = 'Something went wrong', errors = [], stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
