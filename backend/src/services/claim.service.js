/**
 * @file claim.service.js
 * @description Business logic layer for Item Claim verification and management.
 * Handles submitting proof of ownership, reviewing claims, and updating claim status.
 */

import { Claim } from '../models/Claim.js';
import { Item } from '../models/Item.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

export class ClaimService {
  /**
   * File a claim on a found item.
   */
  static async createClaim({ item: itemId, proofDescription, proofImages }, claimantId) {
    const targetItem = await Item.findById(itemId);

    if (!targetItem) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Target item not found');
    }

    if (targetItem.postedBy.toString() === claimantId.toString()) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        'Cannot claim an item you posted yourself'
      );
    }

    if (targetItem.status !== 'open') {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        'Item is no longer open for claims'
      );
    }

    const existingClaim = await Claim.findOne({
      item: itemId,
      claimant: claimantId,
      status: 'pending',
    });

    if (existingClaim) {
      throw new ApiError(
        HTTP_STATUS.CONFLICT,
        'You already have a pending claim for this item'
      );
    }

    const claim = await Claim.create({
      item: itemId,
      claimant: claimantId,
      proofDescription,
      proofImages: proofImages || [],
    });

    return await claim.populate([
      { path: 'item', select: 'title description type status category location' },
      { path: 'claimant', select: 'name email phone' },
    ]);
  }

  /**
   * Get list of claims submitted by user or on items listed by user.
   */
  static async getClaims(user) {
    let filter = {};

    if (user.role !== 'admin') {
      // Find items posted by user
      const userItems = await Item.find({ postedBy: user._id }).select('_id');
      const itemIds = userItems.map((item) => item._id);

      filter = {
        $or: [{ claimant: user._id }, { item: { $in: itemIds } }],
      };
    }

    return await Claim.find(filter)
      .populate('item', 'title category type status location postedBy')
      .populate('claimant', 'name email phone')
      .sort({ createdAt: -1 });
  }

  /**
   * Approve or reject a submitted claim.
   */
  static async updateClaimStatus(claimId, status, adminNotes, user) {
    const claim = await Claim.findById(claimId).populate('item');

    if (!claim) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Claim not found');
    }

    // Only item poster or admin can review claims
    if (
      claim.item.postedBy.toString() !== user._id.toString() &&
      user.role !== 'admin'
    ) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'Not authorized to review this claim'
      );
    }

    claim.status = status;
    if (adminNotes) {
      claim.adminNotes = adminNotes;
    }
    await claim.save();

    // If claim approved, mark item as claimed
    if (status === 'approved') {
      await Item.findByIdAndUpdate(claim.item._id, {
        status: 'claimed',
        claimedBy: claim.claimant,
      });
    }

    return claim;
  }
}
