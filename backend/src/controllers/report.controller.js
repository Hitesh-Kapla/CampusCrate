/**
 * @file report.controller.js
 * @description Controller handlers for submitting and retrieving abuse/fraud reports.
 */

import { ReportService } from '../services/report.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * @route POST /api/v1/reports
 * @desc File a report on an item or user
 * @access Private
 */
export const createReport = asyncHandler(async (req, res) => {
  const report = await ReportService.createReport(req.body, req.user._id);
  return res
    .status(HTTP_STATUS.CREATED)
    .json(new ApiResponse(HTTP_STATUS.CREATED, report, 'Report filed successfully'));
});

/**
 * @route GET /api/v1/reports
 * @desc Get list of submitted reports
 * @access Private/Admin
 */
export const getReports = asyncHandler(async (req, res) => {
  const reports = await ReportService.getReports();
  return res
    .status(HTTP_STATUS.OK)
    .json(new ApiResponse(HTTP_STATUS.OK, reports, 'Reports retrieved successfully'));
});
