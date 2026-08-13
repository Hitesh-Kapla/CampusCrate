/**
 * CampusCrate API Service Module
 * Handles all async requests to the Express API backend
 */

const BASE_URL = '/api/v1';

// Helper to get auth header
const getAuthHeaders = () => {
  const token = localStorage.getItem('campuscrate_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Generic fetch wrapper
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  
  const headers = {
    ...getAuthHeaders(),
    ...options.headers,
  };

  // If body is NOT FormData, set JSON Content-Type
  if (options.body && !(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(options.body);
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || 'An error occurred during API request');
    error.status = response.status;
    error.errors = data.errors || [];
    throw error;
  }

  return data;
}

export const api = {
  // Auth API
  auth: {
    register: (userData) => request('/auth/register', { method: 'POST', body: userData }),
    login: (credentials) => request('/auth/login', { method: 'POST', body: credentials }),
    getProfile: () => request('/auth/me', { method: 'GET' }),
    logout: () => request('/auth/logout', { method: 'POST' }),
  },

  // Items API
  items: {
    getAll: (params = {}) => {
      const query = new URLSearchParams(params).toString();
      return request(`/items${query ? `?${query}` : ''}`, { method: 'GET' });
    },
    getById: (id) => request(`/items/${id}`, { method: 'GET' }),
    create: (formData) => request('/items', { method: 'POST', body: formData }),
    update: (id, data) => request(`/items/${id}`, { method: 'PUT', body: data }),
    delete: (id) => request(`/items/${id}`, { method: 'DELETE' }),
  },

  // Claims API
  claims: {
    create: (claimData) => request('/claims', { method: 'POST', body: claimData }),
    getAll: (params = {}) => {
      const query = new URLSearchParams(params).toString();
      return request(`/claims${query ? `?${query}` : ''}`, { method: 'GET' });
    },
    updateStatus: (id, status) => request(`/claims/${id}/status`, { method: 'PATCH', body: { status } }),
  },

  // Abuse / Fraud Reports API
  reports: {
    create: (reportData) => request('/reports', { method: 'POST', body: reportData }),
    getAll: () => request('/reports', { method: 'GET' }),
  },

  // Admin Dashboard & Management API
  admin: {
    getDashboard: () => request('/admin/dashboard', { method: 'GET' }),
    getUsers: () => request('/admin/users', { method: 'GET' }),
  },
};
