import React, { useState } from 'react';
import { X, AlertTriangle, Send } from 'lucide-react';
import { api } from '../services/api';

export const ReportModal = ({ item, onClose, onSuccess }) => {
  const [reason, setReason] = useState('SPAM');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) {
      setError('Please provide details explaining why you are flagging this item.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await api.reports.create({
        targetType: 'Item',
        targetId: item._id,
        reason,
        description,
      });

      if (res.success) {
        onSuccess('Abuse report submitted. Campus administrators will review this listing.');
        onClose();
      }
    } catch (err) {
      setError(err.message || 'Failed to submit report. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap text-danger">
            <AlertTriangle size={24} />
            <h3>Report Listing / Fraud</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {error && (
          <div className="error-alert">
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label className="form-label">Reason for Report *</label>
            <select
              className="form-select"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              <option value="SPAM">Spam or Irrelevant Listing</option>
              <option value="FRAUD">Fraudulent or Suspicious Claim</option>
              <option value="INAPPROPRIATE">Inappropriate Content/Language</option>
              <option value="OTHER">Other Issue</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Detailed Explanation *</label>
            <textarea
              className="form-textarea"
              placeholder="Describe the violation or suspicious activity..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose} disabled={submitting}>
              Cancel
            </button>
            <button type="submit" className="btn btn-danger" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </div>
        </form>

        <style>{`
          .text-danger { color: #fca5a5; }
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
