import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load current user profile if token exists
  const fetchCurrentUser = async () => {
    const token = localStorage.getItem('campuscrate_token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
    try {
      const res = await api.auth.getProfile();
      if (res.success && res.data) {
        setUser(res.data.user || res.data);
      }
    } catch (err) {
      console.error('Failed to fetch user profile:', err);
      localStorage.removeItem('campuscrate_token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const login = async (email, password) => {
    const res = await api.auth.login({ email, password });
    if (res.success && res.data) {
      const { user, accessToken, token } = res.data;
      const jwtToken = accessToken || token;
      if (jwtToken) {
        localStorage.setItem('campuscrate_token', jwtToken);
      }
      setUser(user);
    }
    return res;
  };

  const register = async (userData) => {
    const res = await api.auth.register(userData);
    if (res.success && res.data) {
      const { user, accessToken, token } = res.data;
      const jwtToken = accessToken || token;
      if (jwtToken) {
        localStorage.setItem('campuscrate_token', jwtToken);
      }
      setUser(user);
    }
    return res;
  };

  const logout = async () => {
    try {
      await api.auth.logout();
    } catch (e) {
      // Ignore network errors during logout
    } finally {
      localStorage.removeItem('campuscrate_token');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, refreshUser: fetchCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
