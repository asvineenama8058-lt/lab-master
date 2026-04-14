import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './AuthContext';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { user } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [bookmarks, setBookmarks] = useState([]);
  const [scores, setScores] = useState(JSON.parse(localStorage.getItem('scores')) || {});

  // Sync theme with document and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle User-Based Bookmarks
  useEffect(() => {
    if (user) {
      const allBookmarks = JSON.parse(localStorage.getItem('lab_master_bookmarks_all')) || {};
      const userBookmarks = allBookmarks[user.name]?.bookmarks || [];
      setBookmarks(userBookmarks);
    } else {
      setBookmarks([]);
    }
  }, [user]);

  const toggleBookmark = (id) => {
    if (!user) return;

    setBookmarks(prev => {
      const newBookmarks = prev.includes(id) 
        ? prev.filter(b => b !== id) 
        : [...prev, id];
      
      // Persist to localStorage immediately
      const allBookmarks = JSON.parse(localStorage.getItem('lab_master_bookmarks_all')) || {};
      allBookmarks[user.name] = { bookmarks: newBookmarks };
      localStorage.setItem('lab_master_bookmarks_all', JSON.stringify(allBookmarks));
      
      return newBookmarks;
    });
  };

  // Sync scores with localStorage (Global for now, or could be user-based if needed)
  useEffect(() => {
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [scores]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const saveScore = (quizId, score) => {
    setScores(prev => ({ ...prev, [quizId]: Math.max(score, prev[quizId] || 0) }));
  };

  const value = {
    theme,
    toggleTheme,
    bookmarks,
    toggleBookmark,
    scores,
    saveScore
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
