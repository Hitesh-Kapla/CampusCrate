import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileCheck, ShieldCheck, Check, XCircle, Clock, AlertCircle, ExternalLink, Package } from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Toast } from '../components/Toast';

export const ClaimsManager = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('received'); // 'received' | 'sent'
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchClaims = async () => {
      setLoading(true);
      try {
        const res = await api.claims.getAll();
        if (res.success && res.data) {
          const claimsList = Array.isArray(res.data) ? res.data : (res.data.claims || []);
          setClaims(claimsList);
        }
      } catch (err) {
        console.error('Failed to load claims:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchClaims();
  }, [user, activeTab]);

  const handleUpdateStatus = async (claimId, newStatus) => {
    setUpdatingId(claimId);
    try {
      const res = await api.claims.updateStatus(claimId, newStatus);
      if (res.success) {
        setToast({ message: `Claim status updated to ${newStatus}`, type: 'success' });
        setClaims(prev => prev.map(c => c._id === claimId ? { ...c, status: newStatus } : c));
      }
    } catch (err) {
      setToast({ message: err.message || 'Failed to update claim status.', type: 'error' });
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredClaims = claims.filter(claim => {
    if (activeTab === 'sent') {
      return claim.claimant?._id === user?._id || claim.claimant === user?._id;
    } else {
      // Received claims on items reported by user
      return claim.item?.reporter === user?._id || claim.item?.reporter?._id === user?._id;
    }
  });

  const getStatusBadge = (statusStr) => {
    switch (statusStr?.toUpperCase()) {
      case 'APPROVED':
        return <span className="badge badge-found"><Check size={12} /> Approved</span>;
      case 'REJECTED':
        return <span className="badge badge-lost"><XCircle size={12} /> Rejected</span>;
      default:
        return <span className="badge badge-claimed"><Clock size={12} /> Pending Review</span>;
    }
  };

  return (
    <div className="claims-manager-page fade-in">
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />

      <div className="page-header">
        <h1 className="page-title">Ownership Verification Claims</h1>
        <p className="page-sub">Review claims submitted to prove ownership of lost and found belongings.</p>
      </div>

      {/* Tabs */}
      <div className="glass-card tab-bar">
        <button
          className={`tab-item ${activeTab === 'received' ? 'active' : ''}`}
          onClick={() => setActiveTab('received')}
        >
          <FileCheck size={18} />
          <span>Claims on My Reported Items</span>
        </button>

        <button
          className={`tab-item ${activeTab === 'sent' ? 'active' : ''}`}
          onClick={() => setActiveTab('sent')}
        >
          <ShieldCheck size={18} />
          <span>Claims I Submitted</span>
        </button>
      </div>

      {/* Claims List */}
      {loading ? (
        <div className="flex-center py-16">
          <div className="spinner"></div>
        </div>
      ) : filteredClaims.length > 0 ? (
        <div className="claims-grid">
          {filteredClaims.map((claim) => (
            <div key={claim._id} className="glass-card claim-card">
              <div className="claim-header">
                <div className="claim-item-title-wrap">
                  <Package size={18} className="text-primary" />
                  <Link to={`/items/${claim.item?._id || claim.item}`} className="claim-item-link">
                    {claim.item?.title || 'Belonging Listing'}
                  </Link>
                </div>
                <div className="claim-status">
                  {getStatusBadge(claim.status)}
                </div>
              </div>

              <div className="claim-body">
                <div className="proof-section">
                  <span className="section-label">Submitted Proof of Ownership:</span>
                  <p className="proof-text">{claim.proofDescription || 'No description provided.'}</p>
                </div>

                {claim.proofImageUrl && (
                  <div className="proof-image-link">
                    <a href={claim.proofImageUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                      <span>View Proof Image</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}

                <div className="claimant-meta">
                  <span>Claimant: <strong>{claim.claimant?.name || 'Student/User'}</strong> ({claim.claimant?.email || 'N/A'})</span>
                  <span className="claim-date">Date: {new Date(claim.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Action Buttons for Received Claims */}
              {activeTab === 'received' && claim.status === 'PENDING' && (
                <div className="claim-actions">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleUpdateStatus(claim._id, 'REJECTED')}
                    disabled={updatingId === claim._id}
                  >
                    <XCircle size={14} />
                    <span>Reject Proof</span>
                  </button>

                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleUpdateStatus(claim._id, 'APPROVED')}
                    disabled={updatingId === claim._id}
                  >
                    <Check size={14} />
                    <span>Approve Ownership</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card empty-state my-8">
          <FileCheck size={48} className="text-muted mb-3" />
          <h3>No Verification Claims</h3>
          <p>You have no {activeTab === 'sent' ? 'submitted' : 'received'} ownership claims to review.</p>
          <Link to="/items" className="btn btn-secondary mt-4">
            Browse Belongings Directory
          </Link>
        </div>
      )}

      <style>{`
        .claims-manager-page {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .tab-bar {
          display: flex;
          padding: 0.4rem;
          gap: 0.5rem;
        }
        .tab-item {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem;
          background: transparent;
          border: none;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .tab-item.active {
          background: rgba(99, 102, 241, 0.15);
          color: var(--primary);
          border: 1px solid var(--border-highlight);
        }
        .claims-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .claim-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .claim-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.85rem;
        }
        .claim-item-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .claim-item-link {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .claim-item-link:hover {
          color: var(--primary);
        }
        .claim-body {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .section-label {
          font-size: 0.82rem;
          color: var(--text-dim);
          font-weight: 600;
        }
        .proof-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .claimant-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
        }
        .claim-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }
      `}</style>
    </div>
  );
};
