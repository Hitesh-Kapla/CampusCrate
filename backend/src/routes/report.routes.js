/**
 * @file report.routes.js
 * @description Express Router defining abuse and fraud reporting endpoints.
 */

import { Router } from 'express';
import { createReport, getReports } from '../controllers/report.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
import { USER_ROLES } from '../utils/constants.js';

const router = Router();

// File abuse report (authenticated users)
router.post('/', authenticate, createReport);

// View reports (admin only)
router.get('/', authenticate, authorizeRoles(USER_ROLES.ADMIN), getReports);

export default router;
