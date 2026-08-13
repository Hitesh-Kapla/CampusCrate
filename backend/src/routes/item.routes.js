/**
 * @file item.routes.js
 * @description Express Router defining Lost & Found item endpoints.
 */

import { Router } from 'express';
import {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} from '../controllers/item.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { upload } from '../middlewares/upload.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import {
  createItemValidator,
  updateItemValidator,
} from '../validators/item.validator.js';

const router = Router();

// Public item discovery routes
router.get('/', getItems);
router.get('/:id', getItemById);

// Protected item management routes
router.post(
  '/',
  authenticate,
  upload.single('image'),
  createItemValidator,
  validate,
  createItem
);
router.put('/:id', authenticate, updateItemValidator, validate, updateItem);
router.delete('/:id', authenticate, deleteItem);

export default router;
