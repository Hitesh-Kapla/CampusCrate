/**
 * @file item.service.js
 * @description Business logic layer for Lost & Found Items operations.
 * Handles creation, filtering, image uploads, updates, and deletion of item postings.
 */

import { Item } from '../models/Item.js';
import { ApiError } from '../utils/ApiError.js';
import { HTTP_STATUS } from '../utils/constants.js';

export class ItemService {
  /**
   * Create a new Lost/Found item posting.
   */
  static async createItem(itemData, userId, file) {
    const images = [];

    if (file) {
      // Normalize upload path
      const imagePath = `/uploads/${file.filename}`;
      images.push(imagePath);
    } else if (itemData.images) {
      if (Array.isArray(itemData.images)) {
        images.push(...itemData.images);
      } else {
        images.push(itemData.images);
      }
    }

    const item = await Item.create({
      title: itemData.title,
      description: itemData.description,
      category: itemData.category,
      type: itemData.type,
      location: itemData.location,
      date: itemData.date || new Date(),
      images,
      postedBy: userId,
    });

    return await item.populate('postedBy', 'name email phone avatar');
  }

  /**
   * Query lost and found items with pagination and filters.
   */
  static async getItems(queryParams = {}) {
    const {
      type,
      category,
      status,
      search,
      page = 1,
      limit = 10,
    } = queryParams;

    const query = {};

    if (type) {
      query.type = type;
    }

    if (category) {
      query.category = category;
    }

    if (status) {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
      ];
    }

    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 10;
    const skip = (pageNum - 1) * limitNum;

    const [items, total] = await Promise.all([
      Item.find(query)
        .populate('postedBy', 'name email phone avatar')
        .populate('claimedBy', 'name email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum),
      Item.countDocuments(query),
    ]);

    return {
      items,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum) || 1,
      },
    };
  }

  /**
   * Fetch item details by item ID.
   */
  static async getItemById(itemId) {
    const item = await Item.findById(itemId)
      .populate('postedBy', 'name email phone avatar')
      .populate('claimedBy', 'name email');

    if (!item) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Item not found');
    }

    return item;
  }

  /**
   * Update item information or status.
   */
  static async updateItem(itemId, updateData, userId, userRole) {
    const item = await Item.findById(itemId);

    if (!item) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Item not found');
    }

    // Only owner or admin can update item
    if (item.postedBy.toString() !== userId.toString() && userRole !== 'admin') {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'Not authorized to update this item'
      );
    }

    Object.assign(item, updateData);
    await item.save();

    return await item.populate('postedBy', 'name email phone avatar');
  }

  /**
   * Remove item posting.
   */
  static async deleteItem(itemId, userId, userRole) {
    const item = await Item.findById(itemId);

    if (!item) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Item not found');
    }

    // Only owner or admin can delete item
    if (item.postedBy.toString() !== userId.toString() && userRole !== 'admin') {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        'Not authorized to delete this item'
      );
    }

    await item.deleteOne();
    return { success: true, itemId };
  }
}
