import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Package, FileCheck, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

export const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [reportsList, setReportsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!user || (user.role !== 'admin' && user.role !== 'ADMIN')) {
      navigate('/');
      return;
    }

    const loadAdminData = async () => {
      setLoading(true);
      try {
        const [dashRes, usersRes, reportsRes] = await Promise.allSettled([
          api.admin.getDashboard(),
          api.admin.getUsers(),
          api.reports.getAll(),
        ]);

        if (dashRes.status === 'fulfilled' && dashRes.value.success) {
          setStats(dashRes.value.data);
        }
        if (usersRes.status === 'fulfilled' && usersRes.value.success) {
          const u = usersRes.value.data;
          setUsersList(Array.isArray(u) ? u : (u.users || []));
        }
        if (reportsRes.status === 'fulfilled' && reportsRes.value.success) {
          const r = reportsRes.value.data;
          setReportsList(Array.isArray(r) ? r : (r.reports || []));
        }
      } catch (err) {
        console.error('Failed to load admin dashboard:', err);
      } finally {
        setLoading(false);
      }
    };

    loadAdminData();
  }, [user]);

  return (
    <div className="admin-dashboard-page fade-in">
      <div className="page-header">
        <div className="header-title-row">
          <div className="admin-badge">
            <Shield size={16} />
            <span>Administrative Control Center</span>
          </div>
        </div>
        <h1 className="page-title">Platform Operations Dashboard</h1>
        <p className="page-sub">Monitor campus system statistics, user accounts, and reported abuse listings.</p>
      </div>

      {loading ? (
        <div className="flex-center py-20">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          {/* Stats Bar */}
          <div className="stats-grid">
            <div className="glass-card stat-card">
              <div className="stat-icon users-icon"><Users size={22} /></div>
              <div className="stat-info">
                <span className="stat-val">{stats?.totalUsers || usersList.length || 0}</span>
                <span className="stat-name">Registered Users</span>
              </div>
            </div>

            <div className="glass-card stat-card">
              <div className="stat-icon items-icon"><Package size={22} /></div>
              <div className="stat-info">
                <span className="stat-val">{stats?.totalItems || 0}</span>
                <span className="stat-name">Total Items Logged</span>
              </div>
            </div>

            <div className="glass-card stat-card">
              <div className="stat-icon claims-icon"><FileCheck size={22} /></div>
              <div className="stat-info">
                <span className="stat-val">{stats?.pendingClaims || 0}</span>
                <span className="stat-name">Pending Verification Claims</span>
              </div>
            </div>

            <div className="glass-card stat-card">
              <div className="stat-icon reports-icon"><AlertTriangle size={22} /></div>
              <div className="stat-info">
                <span className="stat-val">{reportsList.length}</span>
                <span className="stat-name">Abuse & Fraud Reports</span>
              </div>
            </div>
          </div>

          {/* Navigation Sub-tabs */}
          <div className="glass-card tab-bar">
            <button
              className={`tab-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <Users size={16} />
              <span>User Accounts ({usersList.length})</span>
            </button>
            <button
              className={`tab-item ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveTab('reports')}
            >
              <AlertTriangle size={16} />
              <span>Fraud Reports ({reportsList.length})</span>
            </button>
          </div>

          {/* User Accounts Table */}
          {activeTab === 'overview' && (
            <div className="glass-card table-card">
              <h3>Registered Campus Members</h3>
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Member Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Student/Staff ID</th>
                      <th>Date Registered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList.length > 0 ? (
                      usersList.map((u) => (
                        <tr key={u._id}>
                          <td><strong>{u.name}</strong></td>
                          <td>{u.email}</td>
                          <td><span className="badge badge-claimed">{u.role}</span></td>
                          <td>{u.studentId || 'N/A'}</td>
                          <td>{new Date(u.createdAt || Date.now()).toLocaleDateString()}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-4">No users found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Fraud / Abuse Reports Table */}
          {activeTab === 'reports' && (
            <div className="glass-card table-card">
              <h3>Reported Listings & Violations</h3>
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Reason</th>
                      <th>Description</th>
                      <th>Target Listing</th>
                      <th>Reporter</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsList.length > 0 ? (
                      reportsList.map((r) => (
                        <tr key={r._id}>
                          <td><span className="badge badge-lost">{r.reason}</span></td>
                          <td>{r.description}</td>
                          <td>{r.targetId || 'Listing'}</td>
                          <td>{r.reporter?.name || 'Anonymous'}</td>
                          <td><span className="badge badge-found">{r.status || 'PENDING'}</span></td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-4">No abuse reports flagged.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      <style>{`
        .admin-dashboard-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .admin-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid var(--border-highlight);
          border-radius: 50px;
          color: var(--primary);
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .stat-card {
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .users-icon { background: rgba(99, 102, 241, 0.15); color: #93c5fd; }
        .items-icon { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; }
        .claims-icon { background: rgba(139, 92, 246, 0.15); color: #c4b5fd; }
        .reports-icon { background: rgba(239, 68, 68, 0.15); color: #fca5a5; }

        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }
        .stat-name {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .table-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .table-responsive {
          width: 100%;
          overflow-x: auto;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
        }
        .admin-table th, .admin-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border-color);
        }
        .admin-table th {
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.82rem;
          text-transform: uppercase;
        }
        .admin-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }

        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
};
