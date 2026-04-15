import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      background: 'var(--bg-main)',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'rgba(239, 68, 68, 0.1)',
        padding: '20px',
        borderRadius: '50%',
        marginBottom: '24px'
      }}>
        <AlertTriangle size={64} style={{ color: '#EF4444' }} />
      </div>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '12px' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '400px' }}>
        The page you are looking for doesn't exist or has been moved. Check the URL or return to the dashboard.
      </p>
      
      <button 
        onClick={() => navigate('/')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--primary-color)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '12px',
          border: 'none',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: '0 4px 6px rgba(13, 148, 136, 0.2)'
        }}
      >
        <Home size={20} />
        Return Home
      </button>
    </div>
  );
};

export default NotFound;
