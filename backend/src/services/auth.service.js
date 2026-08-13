/**
 * @file auth.service.js
 * @description Business logic layer for Authentication operations.
 * Handles user registration, password verification, token issuance, and profile retrieval.
 */

import { User } from '../models/User.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

export class AuthService {
  /**
   * Register a new user account.
   */
  static async registerUser({ name, email, password, role, phone }) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(
        HTTP_STATUS.CONFLICT,
        'User with this email already exists'
      );
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'user',
      phone: phone || '',
    });

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    const createdUser = await User.findById(user._id);

    return {
      user: createdUser,
      accessToken,
      refreshToken,
    };
  }

  /**
   * Authenticate user credentials and return auth tokens.
   */
  static async loginUser(email, password) {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid email or password');
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid email or password');
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    const loggedInUser = await User.findById(user._id);

    return {
      user: loggedInUser,
      accessToken,
      refreshToken,
    };
  }

  /**
   * Fetch authenticated user profile data.
   */
  static async getUserProfile(userId) {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User profile not found');
    }
    return user;
  }
}
