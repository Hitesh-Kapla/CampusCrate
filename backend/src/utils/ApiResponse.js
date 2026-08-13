/**
 * @file ApiResponse.js
 * @description Standardized API response format for successful operations.
 * Ensures consistent JSON structure across all API endpoints.
 */

class ApiResponse {
  /**
   * @param {number} statusCode - HTTP success status code (2xx)
   * @param {any} data - Response payload data
   * @param {string} message - Human-readable success message
   */
  constructor(statusCode, data, message = 'Success') {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
