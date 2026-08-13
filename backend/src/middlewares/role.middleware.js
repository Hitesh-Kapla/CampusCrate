/**
 * @file role.middleware.js
 * @description Role-based authorization guard middleware.
 * Verifies if the authenticated user possesses allowed role(s) to access the endpoint.
 */

import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * Middleware factory restricting endpoint access to specific roles.
 * @param {...string} allowedRoles - List of permitted roles (e.g. 'admin', 'faculty')
 */
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return next(
        new ApiError(
          HTTP_STATUS.FORBIDDEN,
          'Access forbidden: insufficient permissions'
        )
      );
    }
    next();
  };
};
