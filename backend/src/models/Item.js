/**
 * @file Item.js
 * @description Mongoose schema and model definition for Lost & Found Items.
 * Stores item details, images, status, category, location, and reporting user reference.
 */

import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [120, 'Title cannot exceed 120 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['electronics', 'clothing', 'books', 'documents', 'keys', 'other'],
      default: 'other',
    },
    type: {
      type: String,
      required: [true, 'Type is required (lost or found)'],
      enum: ['lost', 'found'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    images: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ['open', 'claimed', 'resolved'],
      default: 'open',
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    claimedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index for search filters
itemSchema.index({ title: 'text', description: 'text', location: 'text' });
itemSchema.index({ type: 1, category: 1, status: 1 });

export const Item = mongoose.model('Item', itemSchema);
