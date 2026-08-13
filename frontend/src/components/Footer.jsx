import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Heart, Shield, HelpCircle, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-logo">
            <div className="logo-icon-wrap">
              <Package size={20} />
            </div>
            <span className="brand-title">
              Campus<span className="gradient-text">Crate</span>
            </span>
          </div>
          <p className="footer-desc">
            The official smart lost and found resolution system for college campuses. Report lost belongings, match found items, and claim your properties with ease.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/">Home Overview</Link>
            <Link to="/items">Browse All Items</Link>
            <Link to="/report-item">Report an Item</Link>
            <Link to="/claims">Track Claims</Link>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <Link to="/items?category=electronics">Electronics</Link>
            <Link to="/items?category=documents">Documents & IDs</Link>
            <Link to="/items?category=books">Books & Stationery</Link>
            <Link to="/items?category=clothing">Clothing & Apparel</Link>
          </div>

          <div className="footer-col">
            <h4>Help & Policy</h4>
            <span className="footer-link"><Shield size={14} /> Verification Process</span>
            <span className="footer-link"><HelpCircle size={14} /> Claim Guidelines</span>
            <span className="footer-link"><Mail size={14} /> Campus Security Contact</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {new Date().getFullYear()} CampusCrate System. Designed for modern campus management.</p>
          <p className="credit">Built with <Heart size={14} color="#ec4899" inline="true" /> for College Campuses</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #080c14;
          border-top: 1px solid var(--border-color);
          margin-top: auto;
          color: var(--text-muted);
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 2.5rem;
          display: grid;
          grid-template-columns: 1.5fr 3fr;
          gap: 3rem;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-dim);
        }
        .footer-links-group {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-col h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }
        .footer-col a, .footer-link {
          font-size: 0.88rem;
          color: var(--text-muted);
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .footer-col a:hover {
          color: var(--primary);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.25rem 1.5rem;
        }
        .footer-bottom-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-dim);
        }
        .credit {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-links-group {
            grid-template-columns: 1fr;
          }
          .footer-bottom-container {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
