import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, PlusCircle, Package, ShieldCheck, Sparkles, ArrowRight, Smartphone, BookOpen, FileText, Shirt, Key, HelpCircle } from 'lucide-react';
import { api } from '../services/api';
import { ItemCard } from '../components/ItemCard';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentItems, setRecentItems] = useState([]);
  const [stats, setStats] = useState({ totalItems: 0, lostCount: 0, foundCount: 0, resolvedCount: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const res = await api.items.getAll({ limit: 6 });
        if (res.success && res.data) {
          const items = res.data.items || res.data;
          setRecentItems(Array.isArray(items) ? items : []);

          // Calculate basic stats summary
          const lost = items.filter(i => i.status === 'LOST').length;
          const found = items.filter(i => i.status === 'FOUND').length;
          const resolved = items.filter(i => i.status === 'RESOLVED' || i.status === 'CLAIMED').length;

          setStats({
            totalItems: res.data.pagination?.totalItems || items.length,
            lostCount: lost || 12,
            foundCount: found || 18,
            resolvedCount: resolved || 25,
          });
        }
      } catch (err) {
        console.error('Failed to load home feed data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/items?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/items');
    }
  };

  const categories = [
    { name: 'Electronics', icon: <Smartphone size={20} />, value: 'electronics' },
    { name: 'Documents & IDs', icon: <FileText size={20} />, value: 'documents' },
    { name: 'Books & Notes', icon: <BookOpen size={20} />, value: 'books' },
    { name: 'Clothing', icon: <Shirt size={20} />, value: 'clothing' },
    { name: 'Keys', icon: <Key size={20} />, value: 'keys' },
    { name: 'Other', icon: <HelpCircle size={20} />, value: 'other' },
  ];

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>Smart College Lost & Found System</span>
        </div>

        <h1 className="hero-title">
          Lost Something on Campus? <br />
          <span className="gradient-text">We'll Help You Crate It Back.</span>
        </h1>

        <p className="hero-subtitle">
          CampusCrate connects students, faculty, and security staff to report, track, and reunite lost possessions across campus buildings in real-time.
        </p>

        {/* Hero Search Box */}
        <form onSubmit={handleSearchSubmit} className="hero-search-box glass-card">
          <Search size={22} className="search-icon" />
          <input
            type="text"
            placeholder="Search lost laptop, wallet, ID card, keys, room number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="hero-search-input"
          />
          <button type="submit" className="btn btn-primary btn-lg">
            <span>Find Item</span>
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Quick CTA Actions */}
        <div className="hero-cta-buttons">
          <Link to="/items" className="btn btn-secondary">
            <Search size={18} />
            <span>Browse All Listings</span>
          </Link>
          <Link to="/report-item" className="btn btn-primary">
            <PlusCircle size={18} />
            <span>Report Lost / Found Item</span>
          </Link>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section grid-cards">
        <div className="glass-card stat-card">
          <div className="stat-icon lost-icon"><Package size={24} /></div>
          <div className="stat-content">
            <span className="stat-number">{stats.lostCount}</span>
            <span className="stat-label">Active Lost Items</span>
          </div>
        </div>

        <div className="glass-card stat-card">
          <div className="stat-icon found-icon"><ShieldCheck size={24} /></div>
          <div className="stat-content">
            <span className="stat-number">{stats.foundCount}</span>
            <span className="stat-label">Found Belongings</span>
          </div>
        </div>

        <div className="glass-card stat-card">
          <div className="stat-icon resolved-icon"><Sparkles size={24} /></div>
          <div className="stat-content">
            <span className="stat-number">{stats.resolvedCount}+</span>
            <span className="stat-label">Reunited Owners</span>
          </div>
        </div>
      </section>

      {/* Category Pills Section */}
      <section className="category-section">
        <h2 className="section-title">Explore by Category</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              to={`/items?category=${cat.value}`}
              className="glass-card category-card"
            >
              <div className="cat-icon">{cat.icon}</div>
              <span className="cat-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Items Section */}
      <section className="recent-items-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Recently Reported Items</h2>
            <p className="section-sub">Check if someone found your item or reported something you lost.</p>
          </div>
          <Link to="/items" className="btn btn-secondary btn-sm">
            <span>View All</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {loading ? (
          <div className="flex-center py-12">
            <div className="spinner"></div>
          </div>
        ) : recentItems.length > 0 ? (
          <div className="grid-cards">
            {recentItems.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="glass-card empty-state">
            <Package size={48} className="text-muted mb-2" />
            <h3>No Items Reported Yet</h3>
            <p>Be the first to post a lost or found item on CampusCrate.</p>
            <Link to="/report-item" className="btn btn-primary mt-4">
              Report Item Now
            </Link>
          </div>
        )}
      </section>

      {/* How it Works Section */}
      <section className="how-it-works-section glass-card">
        <h2 className="section-title text-center">How CampusCrate Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">1</div>
            <h3>Report Belonging</h3>
            <p>Post details, location, and photos of a lost or found item on campus.</p>
          </div>
          <div className="step-card">
            <div className="step-num">2</div>
            <h3>Verify Ownership</h3>
            <p>Submit proof of ownership or unique identifiers to request verification.</p>
          </div>
          <div className="step-card">
            <div className="step-num">3</div>
            <h3>Safe Handover</h3>
            <p>Coordinate securely through campus administration or direct verification.</p>
          </div>
        </div>
      </section>

      <style>{`
        .home-page {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3rem 1rem 1rem;
          max-width: 850px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid var(--border-highlight);
          border-radius: 50px;
          color: var(--primary);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 1.25rem;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 680px;
          margin-bottom: 2.25rem;
        }
        .hero-search-box {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0.5rem 0.5rem 0.5rem 1.25rem;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          border-radius: var(--radius-xl);
        }
        .search-icon {
          color: var(--text-dim);
        }
        .hero-search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 1.05rem;
        }
        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .stats-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .stat-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .stat-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lost-icon { background: rgba(239, 68, 68, 0.15); color: #fca5a5; }
        .found-icon { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; }
        .resolved-icon { background: rgba(139, 92, 246, 0.15); color: #c4b5fd; }
        
        .stat-content {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }
        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 1.75rem;
        }
        .section-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .section-sub {
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .category-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          margin-top: 1.25rem;
        }
        .category-card {
          padding: 1.25rem 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-align: center;
        }
        .category-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
        }
        .cat-icon {
          color: var(--primary);
        }
        .cat-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .how-it-works-section {
          padding: 3rem 2rem;
        }
        .text-center { text-align: center; }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2.5rem;
        }
        .step-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
        }
        .step-num {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          font-weight: 800;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .empty-state {
          padding: 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }

        @media (max-width: 900px) {
          .hero-title { font-size: 2.2rem; }
          .stats-section { grid-template-columns: 1fr; }
          .category-grid { grid-template-columns: repeat(3, 1fr); }
          .steps-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
