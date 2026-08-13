import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Package, Lock, Mail, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  // Preset demo filler helper
  const handleQuickDemo = (type) => {
    if (type === 'admin') {
      setEmail('admin@campuscrate.edu');
      setPassword('AdminPass123!');
    } else {
      setEmail('student@campuscrate.edu');
      setPassword('StudentPass123!');
    }
  };

  return (
    <div className="auth-page fade-in">
      <div className="glass-card auth-card">
        <div className="auth-header text-center">
          <div className="auth-logo-icon">
            <Package size={28} />
          </div>
          <h2>Welcome Back</h2>
          <p className="auth-sub">Sign in to report lost items or track your verification claims.</p>
        </div>

        {error && (
          <div className="error-alert my-4">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Campus Email Address *</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                className="form-input icon-padded"
                placeholder="your.name@college.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password *</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input
                type="password"
                className="form-input icon-padded"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-full mt-2" disabled={loading}>
            {loading ? (
              <>
                <div className="spinner"></div>
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Sign In to Account</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Demo Preset Hints */}
        <div className="demo-credentials-box">
          <div className="demo-title">
            <Sparkles size={14} />
            <span>Quick Demo Credentials</span>
          </div>
          <div className="demo-btns">
            <button type="button" className="btn btn-secondary btn-sm flex-1" onClick={() => handleQuickDemo('student')}>
              Fill Student Demo
            </button>
            <button type="button" className="btn btn-secondary btn-sm flex-1" onClick={() => handleQuickDemo('admin')}>
              Fill Admin Demo
            </button>
          </div>
        </div>

        <div className="auth-footer text-center">
          <p>Don't have a CampusCrate account yet?</p>
          <Link to="/register" className="auth-link">
            Create an Account Now
          </Link>
        </div>
      </div>

      <style>{`
        .auth-page {
          max-width: 440px;
          margin: 2rem auto;
        }
        .auth-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .auth-logo-icon {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: var(--gradient-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .auth-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }
        .auth-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 0.85rem;
          color: var(--text-dim);
          pointer-events: none;
        }
        .icon-padded {
          padding-left: 2.5rem !important;
        }
        .demo-credentials-box {
          background: rgba(99, 102, 241, 0.08);
          border: 1px dashed var(--border-highlight);
          border-radius: var(--radius-md);
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .demo-title {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary);
        }
        .demo-btns {
          display: flex;
          gap: 0.5rem;
        }
        .auth-footer {
          font-size: 0.88rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }
        .auth-link {
          color: var(--primary);
          font-weight: 600;
          margin-top: 0.25rem;
          display: inline-block;
        }
        .auth-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};
