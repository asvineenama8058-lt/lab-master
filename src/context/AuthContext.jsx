import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for existing user session
    const storedUser = localStorage.getItem('lab_master_user');
    if (storedUser) {
      setUser({ name: storedUser });
    }
    setLoading(false);
  }, []);

  const login = (name) => {
    const trimmedName = name.trim();
    if (trimmedName) {
      localStorage.setItem('lab_master_user', trimmedName);
      setUser({ name: trimmedName });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('lab_master_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
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
