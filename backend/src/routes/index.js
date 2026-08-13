/**
 * @file index.js
 * @description Central API router aggregating and mounting feature sub-routers.
 */

import { Router } from 'express';
import authRoutes from './auth.routes.js';
import itemRoutes from './item.routes.js';
import claimRoutes from './claim.routes.js';
import reportRoutes from './report.routes.js';
import adminRoutes from './admin.routes.js';

const router = Router();

// Base API information endpoint
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'CampusCrate API v1 Service',
    health: '/api/v1/health',
    endpoints: {
      auth: '/api/v1/auth',
      items: '/api/v1/items',
      claims: '/api/v1/claims',
      reports: '/api/v1/reports',
      admin: '/api/v1/admin',
    },
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'CampusCrate API operational',
    timestamp: new Date().toISOString(),
  });
});

// Mount feature routes
router.use('/auth', authRoutes);
router.use('/items', itemRoutes);
router.use('/claims', claimRoutes);
router.use('/reports', reportRoutes);
router.use('/admin', adminRoutes);

export default router;
