/**
 * @file auth.routes.js
 * @description Express Router defining authentication API endpoints.
 */

import { Router } from 'express';
import {
  register,
  login,
  getProfile,
  logout,
} from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import {
  registerValidator,
  loginValidator,
} from '../validators/auth.validator.js';

const router = Router();

// Public routes
router.post('/register', registerValidator, validate, register);
router.post('/login', loginValidator, validate, login);

// Authenticated routes
router.get('/me', authenticate, getProfile);
router.post('/logout', authenticate, logout);

export default router;
