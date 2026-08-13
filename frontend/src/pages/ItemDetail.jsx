import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MapPin, Calendar, Tag, User, ShieldCheck, AlertTriangle, ArrowLeft, Trash2, CheckCircle2, Mail, Phone, ImageOff } from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { ClaimModal } from '../components/ClaimModal';
import { ReportModal } from '../components/ReportModal';
import { Toast } from '../components/Toast';

export const ItemDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showClaimModal, setShowClaimModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [actionLoading, setActionLoading] = useState(false);

  const fetchItemDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.items.getById(id);
      if (res.success && res.data) {
        setItem(res.data.item || res.data);
      } else {
        setError('Item details not found.');
      }
    } catch (err) {
      setError(err.message || 'Failed to load item details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItemDetail();
  }, [id]);

  const handleResolveStatus = async () => {
    if (!window.confirm('Mark this item listing as resolved?')) return;
    setActionLoading(true);
    try {
      const res = await api.items.update(id, { status: 'resolved' });
      if (res.success) {
        setToast({ message: 'Item marked as resolved successfully!', type: 'success' });
        fetchItemDetail();
      }
    } catch (err) {
      setToast({ message: err.message || 'Failed to update status.', type: 'error' });
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteItem = async () => {
    if (!window.confirm('Are you sure you want to permanently delete this listing?')) return;
    setActionLoading(true);
    try {
      const res = await api.items.delete(id);
      if (res.success) {
        navigate('/items');
      }
    } catch (err) {
      setToast({ message: err.message || 'Failed to delete item.', type: 'error' });
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex-center py-20">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="glass-card empty-state my-12 fade-in">
        <AlertTriangle size={48} className="text-danger mb-3" />
        <h2>Item Not Found</h2>
        <p>{error || 'The requested lost/found item listing does not exist or was removed.'}</p>
        <Link to="/items" className="btn btn-primary mt-4">
          Back to Belongings Directory
        </Link>
      </div>
    );
  }

  const isOwner = user && (user._id === item.reporter?._id || user._id === item.reporter);
  const isAdmin = user && (user.role === 'admin' || user.role === 'ADMIN');

  const getBadgeClass = (typeStr, statusStr) => {
    const normalized = (typeStr || statusStr || '').toLowerCase();
    switch (normalized) {
      case 'lost': return 'badge-lost';
      case 'found': return 'badge-found';
      case 'claimed': return 'badge-claimed';
      case 'resolved': return 'badge-resolved';
      default: return 'badge-found';
    }
  };

  const badgeText = ((item.type || item.status || 'Found')).toString();
  const displayBadgeText = badgeText.charAt(0).toUpperCase() + badgeText.slice(1);

  const fullImageUrl = item.imageUrl
    ? (item.imageUrl.startsWith('http') ? item.imageUrl : `${item.imageUrl}`)
    : null;

  return (
    <div className="item-detail-page fade-in">
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />

      <Link to="/items" className="back-link">
        <ArrowLeft size={16} />
        <span>Back to All Listings</span>
      </Link>

      <div className="detail-grid">
        {/* Left Image View */}
        <div className="glass-card detail-media-card">
          {fullImageUrl ? (
            <img src={fullImageUrl} alt={item.title} className="detail-image" />
          ) : (
            <div className="detail-no-image">
              <ImageOff size={48} />
              <span>No Image Available for this Listing</span>
            </div>
          )}
        </div>

        {/* Right Info View */}
        <div className="glass-card detail-info-card">
          <div className="detail-header">
            <span className={`badge ${getBadgeClass(item.type, item.status)}`}>{displayBadgeText}</span>
            <span className="category-pill"><Tag size={14} /> {item.category || 'General'}</span>
          </div>

          <h1 className="detail-title">{item.title}</h1>

          <div className="meta-row">
            <div className="meta-chip">
              <MapPin size={16} className="text-primary" />
              <span>Location: <strong>{item.location || 'Campus'}</strong></span>
            </div>
            <div className="meta-chip">
              <Calendar size={16} className="text-primary" />
              <span>Date: <strong>{new Date(item.date || item.createdAt).toLocaleDateString()}</strong></span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Description</h3>
            <p className="description-text">{item.description}</p>
          </div>

          {/* Reporter Card */}
          <div className="reporter-box">
            <div className="reporter-avatar">
              <User size={20} />
            </div>
            <div className="reporter-info">
              <span className="reporter-name">{item.reporter?.name || 'Campus Student / Staff'}</span>
              <span className="reporter-email"><Mail size={12} /> {item.reporter?.email || 'Contact via verification'}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="detail-actions">
            {!isOwner && (
              <>
                <button
                  className="btn btn-primary btn-lg flex-1"
                  onClick={() => {
                    if (!user) {
                      navigate('/login');
                    } else {
                      setShowClaimModal(true);
                    }
                  }}
                  disabled={item.status === 'resolved' || item.status === 'claimed'}
                >
                  <ShieldCheck size={18} />
                  <span>Claim Ownership</span>
                </button>

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    if (!user) {
                      navigate('/login');
                    } else {
                      setShowReportModal(true);
                    }
                  }}
                  title="Report Fraud or Violation"
                >
                  <AlertTriangle size={16} className="text-danger" />
                  <span>Report</span>
                </button>
              </>
            )}

            {(isOwner || isAdmin) && (
              <div className="owner-actions-wrap">
                {item.status !== 'resolved' && (
                  <button
                    className="btn btn-success"
                    onClick={handleResolveStatus}
                    disabled={actionLoading}
                  >
                    <CheckCircle2 size={16} />
                    <span>Mark as Resolved</span>
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  onClick={handleDeleteItem}
                  disabled={actionLoading}
                >
                  <Trash2 size={16} />
                  <span>Delete Listing</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Claim Modal */}
      {showClaimModal && (
        <ClaimModal
          item={item}
          onClose={() => setShowClaimModal(false)}
          onSuccess={(msg) => setToast({ message: msg, type: 'success' })}
        />
      )}

      {/* Report Modal */}
      {showReportModal && (
        <ReportModal
          item={item}
          onClose={() => setShowReportModal(false)}
          onSuccess={(msg) => setToast({ message: msg, type: 'success' })}
        />
      )}

      <style>{`
        .item-detail-page {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .back-link:hover {
          color: var(--primary);
        }
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .detail-media-card {
          padding: 1rem;
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .detail-image {
          width: 100%;
          height: 100%;
          max-height: 480px;
          object-fit: cover;
          border-radius: var(--radius-md);
        }
        .detail-no-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-dim);
        }
        .detail-info-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .detail-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .category-pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          text-transform: capitalize;
        }
        .detail-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.25;
        }
        .meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .meta-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          background: rgba(15, 23, 42, 0.5);
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .detail-section h3 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        .description-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          white-space: pre-line;
        }
        .reporter-box {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .reporter-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .reporter-info {
          display: flex;
          flex-direction: column;
        }
        .reporter-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .reporter-email {
          font-size: 0.8rem;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .detail-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 1rem;
        }
        .flex-1 { flex: 1; }
        .owner-actions-wrap {
          display: flex;
          gap: 0.75rem;
          width: 100%;
        }

        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
