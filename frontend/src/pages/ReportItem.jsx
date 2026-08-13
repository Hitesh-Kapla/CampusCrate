import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Upload, MapPin, Tag, Calendar, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Toast } from '../components/Toast';

export const ReportItem = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [status, setStatus] = useState('LOST');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('electronics');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrlInput, setImageUrlInput] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate('/login');
      return;
    }

    if (!title.trim() || !description.trim() || !location.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      let res;
      // If user selected a local file upload
      if (imageFile) {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('status', status);
        formData.append('category', category);
        formData.append('location', location);
        formData.append('date', date);
        formData.append('description', description);
        formData.append('image', imageFile);

        res = await api.items.create(formData);
      } else {
        // Standard JSON payload
        res = await api.items.create({
          title,
          status,
          category,
          location,
          date,
          description,
          imageUrl: imageUrlInput.trim() || undefined,
        });
      }

      if (res.success) {
        setToast({ message: 'Item listing created successfully!', type: 'success' });
        setTimeout(() => {
          const newItemId = res.data?.item?._id || res.data?._id;
          if (newItemId) {
            navigate(`/items/${newItemId}`);
          } else {
            navigate('/items');
          }
        }, 1200);
      }
    } catch (err) {
      setError(err.message || 'Failed to create item listing.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="report-item-page fade-in">
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />

      <div className="form-header text-center">
        <h1 className="page-title">Report a Belonging</h1>
        <p className="page-sub">Post details about a lost or found item to notify the campus community.</p>
      </div>

      <div className="glass-card report-form-card">
        {/* Status Selector Tabs */}
        <div className="status-tabs">
          <button
            type="button"
            className={`tab-btn ${status === 'LOST' ? 'active tab-lost' : ''}`}
            onClick={() => setStatus('LOST')}
          >
            Report Lost Item
          </button>
          <button
            type="button"
            className={`tab-btn ${status === 'FOUND' ? 'active tab-found' : ''}`}
            onClick={() => setStatus('FOUND')}
          >
            Report Found Item
          </button>
        </div>

        {error && (
          <div className="error-alert my-4">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="report-form">
          <div className="form-group">
            <label className="form-label">Item Title *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Blue Hydroflask, Apple AirPods Pro, Black Leather Wallet..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label className="form-label">Category *</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="electronics">Electronics & Tech</option>
                <option value="documents">Documents & ID Cards</option>
                <option value="books">Books, Notebooks & Stationery</option>
                <option value="clothing">Clothing, Apparel & Bags</option>
                <option value="keys">Keys, Lanyards & Badges</option>
                <option value="other">Other / Miscellaneous</option>
              </select>
            </div>

            <div className="form-group flex-1">
              <label className="form-label">Date Lost / Found *</label>
              <input
                type="date"
                className="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Campus Location *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Science Block 2nd Floor, Central Library, Student Canteen..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Detailed Description *</label>
            <textarea
              className="form-textarea"
              placeholder="Describe color, brand, distinct marks, stickers, room numbers, or contents..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Image Upload Input */}
          <div className="form-group">
            <label className="form-label">Photo Attachment (Optional)</label>
            <div className="image-upload-options">
              <label className="file-upload-btn">
                <Upload size={18} />
                <span>{imageFile ? imageFile.name : 'Choose File Image'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </label>
              <span className="or-divider">or</span>
              <input
                type="url"
                className="form-input flex-1"
                placeholder="Paste Image Web URL (https://...)"
                value={imageUrlInput}
                onChange={(e) => setImageUrlInput(e.target.value)}
                disabled={!!imageFile}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-lg w-full" disabled={submitting}>
              {submitting ? (
                <>
                  <div className="spinner"></div>
                  <span>Publishing Listing...</span>
                </>
              ) : (
                <>
                  <PlusCircle size={20} />
                  <span>Publish {status} Item</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .report-item-page {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .report-form-card {
          padding: 2.25rem;
        }
        .status-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          background: rgba(15, 23, 42, 0.6);
          padding: 0.4rem;
          border-radius: var(--radius-md);
        }
        .tab-btn {
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .tab-btn.active.tab-lost {
          background: var(--status-lost-bg);
          color: var(--status-lost-text);
          border: 1px solid var(--status-lost-border);
        }
        .tab-btn.active.tab-found {
          background: var(--status-found-bg);
          color: var(--status-found-text);
          border: 1px solid var(--status-found-border);
        }
        .form-row {
          display: flex;
          gap: 1rem;
        }
        .image-upload-options {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .file-upload-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
        }
        .file-upload-btn:hover {
          border-color: var(--primary);
        }
        .or-divider {
          font-size: 0.82rem;
          color: var(--text-dim);
        }
        .form-actions {
          margin-top: 1rem;
        }
        .my-4 { margin-top: 1rem; margin-bottom: 1rem; }

        @media (max-width: 640px) {
          .form-row, .image-upload-options {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  );
};
