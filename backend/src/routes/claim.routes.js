/**
 * @file claim.routes.js
 * @description Express Router defining item verification claim endpoints.
 */

import { Router } from 'express';
import {
  createClaim,
  getClaims,
  updateClaimStatus,
} from '../controllers/claim.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import {
  createClaimValidator,
  updateClaimStatusValidator,
} from '../validators/claim.validator.js';

const router = Router();

// All claim operations require authentication
router.use(authenticate);

router.post('/', createClaimValidator, validate, createClaim);
router.get('/', getClaims);
router.patch(
  '/:id/status',
  updateClaimStatusValidator,
  validate,
  updateClaimStatus
);

export default router;
