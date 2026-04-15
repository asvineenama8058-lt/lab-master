import React from 'react';

const LoadingState = () => {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      background: 'var(--bg-main)',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div className="loader" style={{
        border: '4px solid rgba(13, 148, 136, 0.2)',
        borderLeftColor: '#0D9488',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Loading Lab Master...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingState;
