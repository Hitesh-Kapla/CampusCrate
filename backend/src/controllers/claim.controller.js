/**
 * @file claim.controller.js
 * @description Controller handlers for item claim verification routes.
 */

import { ClaimService } from '../services/claim.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * @route POST /api/v1/claims
 * @desc File a claim on an item
 * @access Private
 */
export const createClaim = asyncHandler(async (req, res) => {
  const claim = await ClaimService.createClaim(req.body, req.user._id);
  return res
    .status(HTTP_STATUS.CREATED)
    .json(new ApiResponse(HTTP_STATUS.CREATED, claim, 'Claim submitted successfully'));
});

/**
 * @route GET /api/v1/claims
 * @desc Get user claims or claims for user's posted items
 * @access Private
 */
export const getClaims = asyncHandler(async (req, res) => {
  const claims = await ClaimService.getClaims(req.user);
  return res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, claims, 'Claims retrieved successfully'));
});

/**
 * @route PATCH /api/v1/claims/:id/status
 * @desc Approve or reject an item claim
 * @access Private
 */
export const updateClaimStatus = asyncHandler(async (req, res) => {
  const { status, adminNotes } = req.body;
  const claim = await ClaimService.updateClaimStatus(
    req.params.id,
    status,
    adminNotes,
    req.user
  );
  return res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, claim, 'Claim status updated successfully'));
});
