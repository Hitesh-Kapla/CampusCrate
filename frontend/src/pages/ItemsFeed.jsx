import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, RefreshCw, Package, MapPin, Tag } from 'lucide-react';
import { api } from '../services/api';
import { ItemCard } from '../components/ItemCard';

export const ItemsFeed = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filters state initialized from URL query params
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, totalItems: 0 });

  const fetchItems = async (page = 1) => {
    setLoading(true);
    try {
      const params = { page, limit: 12 };
      if (search) params.search = search;
      if (status) params.status = status;
      if (category) params.category = category;
      if (location) params.location = location;

      const res = await api.items.getAll(params);
      if (res.success && res.data) {
        setItems(res.data.items || res.data || []);
        if (res.data.pagination) {
          setPagination(res.data.pagination);
        }
      }
    } catch (err) {
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(1);
  }, [searchParams]);

  const handleFilterApply = (e) => {
    e.preventDefault();
    const newParams = {};
    if (search) newParams.search = search;
    if (status) newParams.status = status;
    if (category) newParams.category = category;
    if (location) newParams.location = location;
    setSearchParams(newParams);
  };

  const handleReset = () => {
    setSearch('');
    setStatus('');
    setCategory('');
    setLocation('');
    setSearchParams({});
  };

  return (
    <div className="items-feed-page fade-in">
      <div className="page-header">
        <h1 className="page-title">Campus Belongings Directory</h1>
        <p className="page-sub">Filter and search lost and found listings posted by campus members.</p>
      </div>

      {/* Filters Bar */}
      <form onSubmit={handleFilterApply} className="glass-card filter-card">
        <div className="filter-grid">
          <div className="filter-input-wrap">
            <Search size={18} className="icon" />
            <input
              type="text"
              placeholder="Search title or description..."
              className="form-input filter-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-select-wrap">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="LOST">LOST</option>
              <option value="FOUND">FOUND</option>
              <option value="CLAIMED">CLAIMED</option>
              <option value="RESOLVED">RESOLVED</option>
            </select>
          </div>

          <div className="filter-select-wrap">
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="documents">Documents & IDs</option>
              <option value="books">Books & Stationery</option>
              <option value="clothing">Clothing & Accessories</option>
              <option value="keys">Keys & Badges</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="filter-input-wrap">
            <MapPin size={18} className="icon" />
            <input
              type="text"
              placeholder="Filter by building / area..."
              className="form-input filter-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-actions">
          <button type="button" className="btn btn-secondary btn-sm" onClick={handleReset}>
            <RefreshCw size={14} />
            <span>Reset Filters</span>
          </button>
          <button type="submit" className="btn btn-primary btn-sm">
            <Filter size={14} />
            <span>Apply Filters</span>
          </button>
        </div>
      </form>

      {/* Items Feed Grid */}
      {loading ? (
        <div className="flex-center py-16">
          <div className="spinner"></div>
        </div>
      ) : items.length > 0 ? (
        <>
          <div className="grid-cards mt-6">
            {items.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>

          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <div className="pagination-bar">
              <button
                className="btn btn-secondary btn-sm"
                disabled={pagination.page <= 1}
                onClick={() => fetchItems(pagination.page - 1)}
              >
                Previous
              </button>
              <span className="pagination-info">
                Page {pagination.page} of {pagination.totalPages}
              </span>
              <button
                className="btn btn-secondary btn-sm"
                disabled={pagination.page >= pagination.totalPages}
                onClick={() => fetchItems(pagination.page + 1)}
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="glass-card empty-state my-8">
          <Package size={52} className="text-muted mb-3" />
          <h3>No Matching Belongings Found</h3>
          <p>Try adjusting your search keywords or clearing filter parameters.</p>
          <button onClick={handleReset} className="btn btn-secondary mt-4">
            Clear All Filters
          </button>
        </div>
      )}

      <style>{`
        .items-feed-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .page-header {
          margin-bottom: 0.5rem;
        }
        .page-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-main);
        }
        .page-sub {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .filter-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .filter-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 1rem;
        }
        .filter-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .filter-input-wrap .icon {
          position: absolute;
          left: 0.85rem;
          color: var(--text-dim);
          pointer-events: none;
        }
        .filter-input {
          padding-left: 2.5rem !important;
        }
        .filter-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          border-top: 1px solid var(--border-color);
          padding-top: 0.85rem;
        }
        .mt-6 { margin-top: 1.5rem; }
        .my-8 { margin-top: 2rem; margin-bottom: 2rem; }
        .pagination-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        .pagination-info {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .filter-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
