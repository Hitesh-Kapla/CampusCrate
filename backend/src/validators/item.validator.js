/**
 * @file item.validator.js
 * @description Request validation rules for Lost & Found item endpoints using express-validator.
 */

import { body } from 'express-validator';

export const createItemValidator = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 120 })
    .withMessage('Title cannot exceed 120 characters'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('category')
    .trim()
    .notEmpty()
    .withMessage('Category is required')
    .isIn(['electronics', 'clothing', 'books', 'documents', 'keys', 'other'])
    .withMessage('Invalid category specified'),
  body('type')
    .trim()
    .notEmpty()
    .withMessage('Type is required')
    .isIn(['lost', 'found'])
    .withMessage('Type must be lost or found'),
  body('location').trim().notEmpty().withMessage('Location is required'),
];

export const updateItemValidator = [
  body('title').optional().trim().isLength({ max: 120 }),
  body('description').optional().trim(),
  body('category')
    .optional()
    .trim()
    .isIn(['electronics', 'clothing', 'books', 'documents', 'keys', 'other']),
  body('type').optional().trim().isIn(['lost', 'found']),
  body('location').optional().trim(),
  body('status').optional().trim().isIn(['open', 'claimed', 'resolved']),
];
