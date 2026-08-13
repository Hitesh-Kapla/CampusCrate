/**
 * @file admin.routes.js
 * @description Express Router defining administrative endpoints.
 */

import { Router } from 'express';
import {
  getDashboardStats,
  manageUsers,
} from '../controllers/admin.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
import { USER_ROLES } from '../utils/constants.js';

const router = Router();

// Protect all admin routes with authentication & admin role guard
router.use(authenticate, authorizeRoles(USER_ROLES.ADMIN));

router.get('/dashboard', getDashboardStats);
router.get('/users', manageUsers);

export default router;
