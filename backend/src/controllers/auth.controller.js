/**
 * @file auth.controller.js
 * @description Controller handlers for Authentication routes.
 * Receives HTTP requests, calls AuthService methods, and returns formatted ApiResponse.
 */

import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';
import { AuthService } from '../services/auth.service.js';


const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

/**
 * @route POST /api/v1/auth/register
 * @desc Register new user
 * @access Public
 */
export const register = asyncHandler(async (req, res) => {
  const { name, email, password, role, phone } = req.body;
  const result = await AuthService.registerUser({
    name,
    email,
    password,
    role,
    phone,
  });

  return res
    .status(HTTP_STATUS.CREATED)
    .cookie('accessToken', result.accessToken, cookieOptions)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        result,
        'User registered successfully'
      )
    );
});

/**
 * @route POST /api/v1/auth/login
 * @desc Authenticate user & get token
 * @access Public
 */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await AuthService.loginUser(email, password);

  return res
    .status(HTTP_STATUS.OK)
    .cookie('accessToken', result.accessToken, cookieOptions)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'User logged in successfully')
    );
});

/**
 * @route GET /api/v1/auth/me
 * @desc Get current authenticated user profile
 * @access Private
 */
export const getProfile = asyncHandler(async (req, res) => {
  const user = await AuthService.getUserProfile(req.user._id);
  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, user, 'Profile retrieved successfully')
    );
});

/**
 * @route POST /api/v1/auth/logout
 * @desc Logout user & clear cookie
 * @access Private
 */
export const logout = asyncHandler(async (req, res) => {
  return res
    .status(HTTP_STATUS.OK)
    .clearCookie('accessToken', cookieOptions)
    .json(
      new ApiResponse(HTTP_STATUS.OK, null, 'User logged out successfully')
    );
});
