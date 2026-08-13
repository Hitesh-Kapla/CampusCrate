import React from 'react';
import { Link } from 'react-router-dom';
import { PackageX, Home, Search } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="glass-card not-found-card fade-in">
      <PackageX size={64} className="not-found-icon" />
      <h1>404 - Page Not Found</h1>
      <p>The page or campus resource you are trying to access does not exist or has been moved.</p>
      
      <div className="not-found-actions">
        <Link to="/" className="btn btn-primary">
          <Home size={18} />
          <span>Back to Home</span>
        </Link>
        <Link to="/items" className="btn btn-secondary">
          <Search size={18} />
          <span>Browse Belongings</span>
        </Link>
      </div>

      <style>{`
        .not-found-card {
          max-width: 540px;
          margin: 4rem auto;
          padding: 3.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
        }
        .not-found-icon {
          color: var(--primary);
        }
        .not-found-card h1 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-main);
        }
        .not-found-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .not-found-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};
