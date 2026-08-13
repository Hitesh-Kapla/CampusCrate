import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { api } from '../services/api';

export const ClaimModal = ({ item, onClose, onSuccess }) => {
  const [proofDescription, setProofDescription] = useState('');
  const [proofImageUrl, setProofImageUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!proofDescription.trim()) {
      setError('Please provide a detailed description to verify your claim.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await api.claims.create({
        itemId: item._id,
        proofDescription,
        proofImageUrl: proofImageUrl.trim() || undefined,
      });

      if (res.success) {
        onSuccess('Claim submitted successfully! The item owner will review your verification proof.');
        onClose();
      }
    } catch (err) {
      setError(err.message || 'Failed to submit claim. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <ShieldCheck className="title-icon" size={24} />
            <h3>Claim Item Verification</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="item-summary-pill">
          <span className="item-summary-title">Claiming: <strong>{item?.title}</strong></span>
        </div>

        {error && (
          <div className="error-alert">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label className="form-label">Proof of Ownership / Identifiers *</label>
            <textarea
              className="form-textarea"
              placeholder="Describe unique marks, serial numbers, passcode hints, exact date/time lost, or specific contents inside to verify ownership..."
              value={proofDescription}
              onChange={(e) => setProofDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Proof Image URL (Optional)</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://example.com/receipt-or-photo.jpg"
              value={proofImageUrl}
              onChange={(e) => setProofImageUrl(e.target.value)}
            />
            <span className="form-help">Link to purchase receipt, previous photo with item, or ID matching item.</span>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose} disabled={submitting}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? (
                <>
                  <div className="spinner"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 size={16} />
                  <span>Submit Verification Claim</span>
                </>
              )}
            </button>
          </div>
        </form>

        <style>{`
          .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
          }
          .modal-title-wrap {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            color: var(--text-main);
          }
          .title-icon {
            color: var(--primary);
          }
          .close-btn {
            background: transparent;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            padding: 0.35rem;
            border-radius: var(--radius-sm);
            transition: var(--transition);
          }
          .close-btn:hover {
            color: var(--text-main);
            background: rgba(255, 255, 255, 0.1);
          }
          .item-summary-pill {
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid var(--border-highlight);
            padding: 0.6rem 1rem;
            border-radius: var(--radius-md);
            margin-bottom: 1.25rem;
            font-size: 0.9rem;
            color: var(--text-main);
          }
          .error-alert {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(239, 68, 68, 0.15);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #fca5a5;
            padding: 0.75rem;
            border-radius: var(--radius-md);
            margin-bottom: 1rem;
            font-size: 0.88rem;
          }
          .form-help {
            font-size: 0.78rem;
            color: var(--text-dim);
            margin-top: 0.25rem;
          }
          .modal-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0.75rem;
            margin-top: 1.5rem;
          }
        `}</style>
      </div>
    </div>
  );
};
