import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Tag, ArrowRight, ImageOff } from 'lucide-react';

export const ItemCard = ({ item }) => {
  if (!item) return null;

  const { _id, title, status, category, location, date, imageUrl, reporter } = item;

  // Format status badge class
  const getBadgeClass = (statusStr) => {
    switch (statusStr?.toUpperCase()) {
      case 'LOST':
        return 'badge-lost';
      case 'FOUND':
        return 'badge-found';
      case 'CLAIMED':
        return 'badge-claimed';
      case 'RESOLVED':
        return 'badge-resolved';
      default:
        return 'badge-found';
    }
  };

  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }) : 'Recent';

  // Fix image URL if stored as relative upload path
  const fullImageUrl = imageUrl
    ? (imageUrl.startsWith('http') ? imageUrl : `${imageUrl}`)
    : null;

  return (
    <div className="glass-card item-card">
      <div className="card-media">
        {fullImageUrl ? (
          <img src={fullImageUrl} alt={title} className="item-image" loading="lazy" />
        ) : (
          <div className="no-image-placeholder">
            <ImageOff size={32} />
            <span>No Image</span>
          </div>
        )}
        <div className="card-status-badge">
          <span className={`badge ${getBadgeClass(status)}`}>{status}</span>
        </div>
      </div>

      <div className="card-body">
        <div className="card-category">
          <Tag size={12} />
          <span>{category || 'General'}</span>
        </div>

        <h3 className="card-title">{title}</h3>

        <div className="card-meta">
          <div className="meta-item">
            <MapPin size={14} />
            <span>{location || 'Campus'}</span>
          </div>
          <div className="meta-item">
            <Calendar size={14} />
            <span>{formattedDate}</span>
          </div>
        </div>

        {reporter && (
          <div className="card-reporter">
            <span>Posted by <strong>{reporter.name || 'Anonymous User'}</strong></span>
          </div>
        )}

        <div className="card-actions">
          <Link to={`/items/${_id}`} className="btn btn-secondary btn-sm w-full">
            <span>View Details</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        .item-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
          position: relative;
        }
        .item-card:hover .item-image {
          transform: scale(1.05);
        }
        .card-media {
          position: relative;
          height: 180px;
          width: 100%;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.9);
        }
        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .no-image-placeholder {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
          gap: 0.5rem;
          font-size: 0.85rem;
        }
        .card-status-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          z-index: 2;
        }
        .card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0.75rem;
        }
        .card-category {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--primary);
          font-weight: 600;
          text-transform: capitalize;
        }
        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-top: auto;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .card-reporter {
          font-size: 0.78rem;
          color: var(--text-dim);
          border-top: 1px solid var(--border-color);
          padding-top: 0.5rem;
        }
        .card-actions {
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};
