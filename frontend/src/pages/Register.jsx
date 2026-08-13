import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Package, User, Mail, Lock, Phone, IdCard, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [studentId, setStudentId] = useState('');
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await register({
        name,
        email,
        password,
        role,
        studentId: studentId.trim() || undefined,
        phone: phone.trim() || undefined,
      });

      navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed. Please check your information.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page fade-in">
      <div className="glass-card auth-card">
        <div className="auth-header text-center">
          <div className="auth-logo-icon">
            <Package size={28} />
          </div>
          <h2>Join CampusCrate</h2>
          <p className="auth-sub">Create your account to start managing lost & found items.</p>
        </div>

        {error && (
          <div className="error-alert my-4">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Full Name *</label>
            <div className="input-with-icon">
              <User size={18} className="input-icon" />
              <input
                type="text"
                className="form-input icon-padded"
                placeholder="Alex Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Campus Email Address *</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                className="form-input icon-padded"
                placeholder="alex.j@college.edu"
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

          <div className="form-group">
            <label className="form-label">Campus Role *</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="staff">Staff / Faculty</option>
              <option value="admin">Administrator / Security</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label className="form-label">Student / Staff ID</label>
              <div className="input-with-icon">
                <IdCard size={18} className="input-icon" />
                <input
                  type="text"
                  className="form-input icon-padded"
                  placeholder="STU-8823"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group flex-1">
              <label className="form-label">Phone Number</label>
              <div className="input-with-icon">
                <Phone size={18} className="input-icon" />
                <input
                  type="tel"
                  className="form-input icon-padded"
                  placeholder="+1 555-0192"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-full mt-2" disabled={loading}>
            {loading ? (
              <>
                <div className="spinner"></div>
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Create CampusCrate Account</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="auth-footer text-center">
          <p>Already have an account?</p>
          <Link to="/login" className="auth-link">
            Sign In Here
          </Link>
        </div>
      </div>

      <style>{`
        .auth-page {
          max-width: 480px;
          margin: 2rem auto;
        }
        .auth-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
      `}</style>
    </div>
  );
};
