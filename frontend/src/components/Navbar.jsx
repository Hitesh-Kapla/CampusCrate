import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Package, Search, PlusCircle, FileCheck, Shield, User, LogOut, Menu, X, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'active' : ''}`;

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <div className="logo-icon-wrap">
            <Package className="logo-icon" size={24} />
          </div>
          <span className="brand-title">
            Campus<span className="gradient-text">Crate</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/items" className={navLinkClass}>
            <Search size={16} />
            <span>Browse Items</span>
          </NavLink>

          <NavLink to="/report-item" className={navLinkClass}>
            <PlusCircle size={16} />
            <span>Report Item</span>
          </NavLink>

          {user && (
            <NavLink to="/claims" className={navLinkClass}>
              <FileCheck size={16} />
              <span>Claims</span>
            </NavLink>
          )}

          {user && (user.role === 'admin' || user.role === 'ADMIN') && (
            <NavLink to="/admin" className={navLinkClass}>
              <Shield size={16} />
              <span>Admin</span>
            </NavLink>
          )}
        </nav>

        {/* Right Auth / Profile Controls */}
        <div className="auth-controls">
          {user ? (
            <div className="user-profile-menu">
              <Link to="/profile" className="profile-btn">
                <div className="avatar">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="user-info-text">
                  <span className="user-name">{user.name}</span>
                  <span className="user-role">{user.role || 'Student'}</span>
                </div>
              </Link>
              <button onClick={handleLogout} className="btn-logout" title="Sign Out">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-secondary btn-sm">
                Sign In
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer fade-in">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/items" onClick={() => setMobileMenuOpen(false)}>Browse Items</NavLink>
          <NavLink to="/report-item" onClick={() => setMobileMenuOpen(false)}>Report Item</NavLink>
          {user && <NavLink to="/claims" onClick={() => setMobileMenuOpen(false)}>My Claims</NavLink>}
          {user && (user.role === 'admin' || user.role === 'ADMIN') && (
            <NavLink to="/admin" onClick={() => setMobileMenuOpen(false)}>Admin Panel</NavLink>
          )}
          {user ? (
            <>
              <NavLink to="/profile" onClick={() => setMobileMenuOpen(false)}>My Profile</NavLink>
              <button onClick={() => { setMobileMenuOpen(false); handleLogout(); }} className="btn btn-danger btn-sm w-full mt-2">
                Sign Out
              </button>
            </>
          ) : (
            <div className="mobile-auth-btns">
              <Link to="/login" className="btn btn-secondary w-full" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
              <Link to="/register" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Register</Link>
            </div>
          )}
        </div>
      )}

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(11, 15, 25, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
        }
        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.85rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .logo-icon-wrap {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }
        .brand-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--text-main);
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: var(--transition);
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .nav-link:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.04);
        }
        .nav-link.active {
          color: var(--primary);
          background: rgba(99, 102, 241, 0.12);
          font-weight: 600;
        }
        .auth-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .auth-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .user-profile-menu {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .profile-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.35rem 0.6rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          transition: var(--transition);
        }
        .profile-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--border-highlight);
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .user-info-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .user-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.1;
        }
        .user-role {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: capitalize;
        }
        .btn-logout {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          transition: var(--transition);
          display: flex;
          align-items: center;
        }
        .btn-logout:hover {
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.15);
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }
        .mobile-drawer {
          display: none;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-dark);
          border-bottom: 1px solid var(--border-color);
        }
        .w-full { width: 100%; }
        .mt-2 { margin-top: 0.5rem; }

        @media (max-width: 768px) {
          .desktop-nav, .user-info-text, .auth-buttons {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-drawer {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};
