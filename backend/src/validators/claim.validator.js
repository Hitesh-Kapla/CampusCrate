/**
 * @file claim.validator.js
 * @description Request validation rules for item claims endpoints using express-validator.
 */

import { body } from 'express-validator';

export const createClaimValidator = [
  body('item')
    .trim()
    .notEmpty()
    .withMessage('Target item ID is required')
    .isMongoId()
    .withMessage('Invalid Mongo ID for item'),
  body('proofDescription')
    .trim()
    .notEmpty()
    .withMessage('Proof description is required to verify item ownership'),
];

export const updateClaimStatusValidator = [
  body('status')
    .trim()
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['approved', 'rejected'])
    .withMessage('Status must be approved or rejected'),
  body('adminNotes').optional().trim(),
];
