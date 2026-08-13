import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Shield, IdCard, Phone, Calendar, Package, FileCheck, PlusCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { ItemCard } from '../components/ItemCard';

export const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchMyActivity = async () => {
      setLoading(true);
      try {
        const res = await api.items.getAll({ limit: 50 });
        if (res.success && res.data) {
          const allItems = Array.isArray(res.data) ? res.data : (res.data.items || []);
          // Filter items where user is reporter
          const userItems = allItems.filter(i => i.reporter?._id === user._id || i.reporter === user._id);
          setMyItems(userItems);
        }
      } catch (err) {
        console.error('Failed to load user items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyActivity();
  }, [user]);

  if (!user) return null;

  return (
    <div className="profile-page fade-in">
      {/* Profile Overview Card */}
      <div className="glass-card profile-header-card">
        <div className="profile-avatar-large">
          {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </div>

        <div className="profile-user-details">
          <div className="name-role-row">
            <h2>{user.name}</h2>
            <span className="badge badge-claimed">{user.role || 'Student'}</span>
          </div>

          <div className="info-chips-grid">
            <div className="info-chip">
              <Mail size={14} className="text-primary" />
              <span>{user.email}</span>
            </div>

            {user.studentId && (
              <div className="info-chip">
                <IdCard size={14} className="text-primary" />
                <span>ID: {user.studentId}</span>
              </div>
            )}

            {user.phone && (
              <div className="info-chip">
                <Phone size={14} className="text-primary" />
                <span>Phone: {user.phone}</span>
              </div>
            )}

            <div className="info-chip">
              <Calendar size={14} className="text-primary" />
              <span>Joined: {new Date(user.createdAt || Date.now()).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <Link to="/report-item" className="btn btn-primary btn-sm">
            <PlusCircle size={16} />
            <span>Report New Item</span>
          </Link>
          <Link to="/claims" className="btn btn-secondary btn-sm">
            <FileCheck size={16} />
            <span>View Claims</span>
          </Link>
        </div>
      </div>

      {/* Reported Items Activity */}
      <div className="user-activity-section">
        <div className="section-header">
          <div>
            <h2>Items Reported by You ({myItems.length})</h2>
            <p className="section-sub">Listings you have published on CampusCrate.</p>
          </div>
        </div>

        {loading ? (
          <div className="flex-center py-12">
            <div className="spinner"></div>
          </div>
        ) : myItems.length > 0 ? (
          <div className="grid-cards">
            {myItems.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="glass-card empty-state">
            <Package size={48} className="text-muted mb-2" />
            <h3>No Listings Reported Yet</h3>
            <p>You haven't posted any lost or found items on CampusCrate.</p>
            <Link to="/report-item" className="btn btn-primary mt-4">
              Post an Item Now
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .profile-page {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .profile-header-card {
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .profile-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          font-weight: 800;
          font-size: 2.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }
        .profile-user-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .name-role-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .name-role-row h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }
        .info-chips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .info-chip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          background: rgba(15, 23, 42, 0.5);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }
        .profile-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (max-width: 768px) {
          .profile-header-card {
            flex-direction: column;
            text-align: center;
          }
          .name-role-row {
            justify-content: center;
          }
          .info-chips-grid {
            justify-content: center;
          }
          .profile-actions {
            flex-direction: row;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
