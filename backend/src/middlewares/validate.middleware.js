/**
 * @file validate.middleware.js
 * @description Request validation handler for express-validator.
 * Inspects validation chains results and throws an ApiError if validation fails.
 */

import { validationResult } from 'express-validator';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map((err) => ({
      field: err.path || err.param,
      message: err.msg,
    }));

    throw new ApiError(
      HTTP_STATUS.BAD_REQUEST,
      'Validation failed',
      extractedErrors
    );
  }
  next();
};
