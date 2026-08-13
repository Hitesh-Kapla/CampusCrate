/**
 * @file item.controller.js
 * @description Controller handlers for Lost & Found item routes.
 * Invokes ItemService methods and responds with standardized JSON structures.
 */

import { ItemService } from '../services/item.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * @route POST /api/v1/items
 * @desc Create new item listing
 * @access Private
 */
export const createItem = asyncHandler(async (req, res) => {
  const item = await ItemService.createItem(req.body, req.user._id, req.file);
  return res
    .status(HTTP_STATUS.CREATED)
    .json(new ApiResponse(HTTP_STATUS.CREATED, item, 'Item created successfully'));
});

/**
 * @route GET /api/v1/items
 * @desc Get all items with optional search filters
 * @access Public
 */
export const getItems = asyncHandler(async (req, res) => {
  const result = await ItemService.getItems(req.query);
  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        result.items,
        'Items retrieved successfully',
        result.pagination
      )
    );
});

/**
 * @route GET /api/v1/items/:id
 * @desc Get single item details by ID
 * @access Public
 */
export const getItemById = asyncHandler(async (req, res) => {
  const item = await ItemService.getItemById(req.params.id);
  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, item, 'Item details retrieved successfully')
    );
});

/**
 * @route PUT /api/v1/items/:id
 * @desc Update item details
 * @access Private
 */
export const updateItem = asyncHandler(async (req, res) => {
  const updatedItem = await ItemService.updateItem(
    req.params.id,
    req.body,
    req.user._id,
    req.user.role
  );
  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, updatedItem, 'Item updated successfully')
    );
});

/**
 * @route DELETE /api/v1/items/:id
 * @desc Delete item listing
 * @access Private
 */
export const deleteItem = asyncHandler(async (req, res) => {
  const result = await ItemService.deleteItem(
    req.params.id,
    req.user._id,
    req.user.role
  );
  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(HTTP_STATUS.OK, result, 'Item deleted successfully')
    );
});
