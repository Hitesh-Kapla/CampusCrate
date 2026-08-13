/**
 * @file constants.js
 * @description Application-wide constants, enums, status codes, and configuration options.
 */

// User Roles
export const USER_ROLES = {
  STUDENT: 'student',
  FACULTY: 'faculty',
  ADMIN: 'admin',
};

// Item Types
export const ITEM_TYPES = {
  LOST: 'lost',
  FOUND: 'found',
};

// Item Statuses
export const ITEM_STATUSES = {
  OPEN: 'open',
  CLAIM_PENDING: 'claim_pending',
  RESOLVED: 'resolved',
  EXPIRED: 'expired',
};

// Claim Statuses
export const CLAIM_STATUSES = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
};

// Report Statuses
export const REPORT_STATUSES = {
  PENDING: 'pending',
  REVIEWED: 'reviewed',
  RESOLVED: 'resolved',
  DISMISSED: 'dismissed',
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};
