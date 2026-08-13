/**
 * @file report.service.js
 * @description Business logic layer for flagging abuse, fraudulent listings, and suspicious activities.
 */

import { Report } from '../models/Report.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

export class ReportService {
  /**
   * Submit an abuse or fraud report.
   */
  static async createReport({ reportedItem, reportedUser, reason, details }, reporterId) {
    if (!reportedItem && !reportedUser) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        'Report must specify either a reported item or reported user'
      );
    }

    const report = await Report.create({
      reporter: reporterId,
      reportedItem: reportedItem || null,
      reportedUser: reportedUser || null,
      reason,
      details: details || '',
    });

    return await report.populate([
      { path: 'reporter', select: 'name email' },
      { path: 'reportedItem', select: 'title category' },
      { path: 'reportedUser', select: 'name email' },
    ]);
  }

  /**
   * Retrieve submitted reports for moderation.
   */
  static async getReports() {
    return await Report.find()
      .populate('reporter', 'name email')
      .populate('reportedItem', 'title category')
      .populate('reportedUser', 'name email')
      .sort({ createdAt: -1 });
  }
}
