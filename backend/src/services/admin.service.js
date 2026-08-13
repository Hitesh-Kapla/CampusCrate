/**
 * @file admin.service.js
 * @description Business logic layer for admin analytics and user management.
 */

import { User } from '../models/User.js';
import { Item } from '../models/Item.js';
import { Claim } from '../models/Claim.js';
import { Report } from '../models/Report.js';

export class AdminService {
  /**
   * Calculate system analytics and dashboard overview stats.
   */
  static async getDashboardStats() {
    const [
      totalUsers,
      totalItems,
      lostItems,
      foundItems,
      openItems,
      claimedItems,
      resolvedItems,
      totalClaims,
      pendingClaims,
      totalReports,
    ] = await Promise.all([
      User.countDocuments(),
      Item.countDocuments(),
      Item.countDocuments({ type: 'lost' }),
      Item.countDocuments({ type: 'found' }),
      Item.countDocuments({ status: 'open' }),
      Item.countDocuments({ status: 'claimed' }),
      Item.countDocuments({ status: 'resolved' }),
      Claim.countDocuments(),
      Claim.countDocuments({ status: 'pending' }),
      Report.countDocuments(),
    ]);

    return {
      users: {
        total: totalUsers,
      },
      items: {
        total: totalItems,
        lost: lostItems,
        found: foundItems,
        open: openItems,
        claimed: claimedItems,
        resolved: resolvedItems,
      },
      claims: {
        total: totalClaims,
        pending: pendingClaims,
      },
      reports: {
        total: totalReports,
      },
    };
  }

  /**
   * Fetch all registered users for administration.
   */
  static async manageUsers() {
    return await User.find().select('-password').sort({ createdAt: -1 });
  }
}
