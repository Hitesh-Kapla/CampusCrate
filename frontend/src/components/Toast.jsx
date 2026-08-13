import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={18} color="#6ee7b7" />;
      case 'error':
        return <AlertCircle size={18} color="#fca5a5" />;
      default:
        return <Info size={18} color="#93c5fd" />;
    }
  };

  return (
    <div className={`toast toast-${type} fade-in`}>
      <div className="toast-icon">{getIcon()}</div>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={onClose}>
        <X size={16} />
      </button>

      <style>{`
        .toast {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 2000;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-md);
          background: #1e293b;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          color: var(--text-main);
          font-size: 0.9rem;
          max-width: 420px;
        }
        .toast-success {
          border-color: rgba(16, 185, 129, 0.4);
        }
        .toast-error {
          border-color: rgba(239, 68, 68, 0.4);
        }
        .toast-info {
          border-color: rgba(59, 130, 246, 0.4);
        }
        .toast-message {
          flex: 1;
        }
        .toast-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.2rem;
          display: flex;
          align-items: center;
        }
        .toast-close:hover {
          color: var(--text-main);
        }
      `}</style>
    </div>
  );
};
