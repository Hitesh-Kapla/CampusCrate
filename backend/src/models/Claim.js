/**
 * @file Claim.js
 * @description Mongoose schema and model definition for Item Claims.
 * Records verification proof, status, claimant details, and target item reference.
 */

import mongoose from 'mongoose';

const claimSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      required: [true, 'Target item is required for claim'],
    },
    claimant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Claimant user is required'],
    },
    proofDescription: {
      type: String,
      required: [true, 'Proof description is required to verify ownership'],
      trim: true,
    },
    proofImages: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    adminNotes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

claimSchema.index({ item: 1, claimant: 1 });

export const Claim = mongoose.model('Claim', claimSchema);
